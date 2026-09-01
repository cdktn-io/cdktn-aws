// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Usage: tsx bin/generate.ts [outDir] [group ...]
 *
 * With no group arguments it regenerates **every** group in `groups.json` plus the synthetic
 * `provider` group into the repo's committed `generated/` tree — that is the M2 default. Pass
 * `m1` as the only group argument for the three-package M1 selection, or name groups explicitly.
 */
import * as path from "node:path";
import { generate } from "../src/generate";
import { loadAwsSchema, repoRoot } from "../src/schema";
import { PROVIDER_GROUP, readGroups } from "../src/groups";
import { HASHES_FILE, buildHashesManifest, writeHashesManifest } from "../src/hashes";

/**
 * The three packages M1 proved the generator on (docs/curation.md, "M1 group selection"):
 *  - `elb` — small (8 listed resources), and the ONLY group carrying aliases: all six `aws_alb*`
 *    types resolve into it, so alias emission is exercised on real output, not just a fixture.
 *  - `lambda` — medium (15 resources / 7 data sources / 1 ephemeral resource), and
 *    `aws_lambda_function` has 14 nested block types, so the namespace mount and the collision
 *    fallback both get real work.
 *  - `provider` — the synthetic group holding `AwsProvider`, without which no consumer can synth
 *    with validation on.
 *
 * They are still the fixture selection and still the fast inner loop (`pnpm generate:m1`), but
 * they are no longer the default: M2 generates all 257.
 */
export const M1_GROUPS = ["elb", "lambda", "provider"];

/** Every group in groups.json plus the synthetic provider group, sorted. */
export function allGroups(groups: ReturnType<typeof readGroups>): string[] {
  return [PROVIDER_GROUP, ...Object.keys(groups.groups)].sort();
}

function main() {
  const [outDirArg, ...groupArgs] = process.argv.slice(2);
  const outDir = outDirArg ? path.resolve(outDirArg) : path.join(repoRoot, "generated");
  const groups = readGroups();
  const slugs =
    groupArgs.length === 0
      ? allGroups(groups)
      : groupArgs.length === 1 && groupArgs[0] === "m1"
        ? M1_GROUPS
        : groupArgs;

  const started = Date.now();
  const result = generate({
    outDir,
    schema: loadAwsSchema(),
    groups,
    slugs,
  });
  const elapsedMs = Date.now() - started;

  // At 258 packages a per-group line is noise; print it only for a hand-picked selection.
  if (slugs.length <= 12) {
    for (const group of result.groups) {
      const nested = group.entries.reduce((n, e) => n + e.nestedTypes, 0);
      console.log(
        `${group.slug}: ${group.entries.length} classes, ${nested} nested types, ${group.files.length} files`,
      );
    }
  }
  // The hash manifest describes the WHOLE tree, so only a full run may write it — a partial run
  // (`pnpm generate:m1`, or a single named group) would otherwise silently drop 250-odd entries.
  const full = slugs.length === allGroups(groups).length;
  if (full) {
    writeHashesManifest(
      outDir,
      buildHashesManifest(
        groups.pinnedProviderVersion,
        result.groups.map((g) => ({
          slug: g.slug,
          hash: g.hash,
          files: g.files.length,
          bytes: g.bytes,
        })),
      ),
    );
    console.log(`wrote ${HASHES_FILE} for ${result.groups.length} groups`);
  } else {
    console.log(`partial run (${slugs.length} groups): ${HASHES_FILE} left untouched`);
  }

  const classes = result.groups.reduce((n, g) => n + g.entries.length, 0);
  const nested = result.groups.reduce(
    (n, g) => n + g.entries.reduce((m, e) => m + e.nestedTypes, 0),
    0,
  );
  console.log(
    `wrote ${result.files.length} files (${result.groups.length} groups, ${classes} classes, ` +
      `${nested} nested types) to ${outDir} in ${(elapsedMs / 1000).toFixed(1)}s`,
  );
}

main();
