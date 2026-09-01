// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Usage: tsx bin/generate.ts [outDir] [group ...]
 *
 * With no arguments it regenerates the M1 selection into the repo's committed `generated/` tree.
 */
import * as path from "node:path";
import { generate } from "../src/generate";
import { loadAwsSchema, repoRoot } from "../src/schema";
import { readGroups } from "../src/groups";

/**
 * The three packages M1 proves the generator on (docs/curation.md, "M1 group selection"):
 *  - `elb` — small (8 listed resources), and the ONLY group carrying aliases: all six `aws_alb*`
 *    types resolve into it, so alias emission is exercised on real output, not just a fixture.
 *  - `lambda` — medium (15 resources / 7 data sources / 1 ephemeral resource), and
 *    `aws_lambda_function` has 14 nested block types, so the namespace mount and the collision
 *    fallback both get real work.
 *  - `provider` — the synthetic group holding `AwsProvider`, without which no consumer can synth
 *    with validation on.
 */
export const M1_GROUPS = ["elb", "lambda", "provider"];

function main() {
  const [outDirArg, ...groupArgs] = process.argv.slice(2);
  const outDir = outDirArg ? path.resolve(outDirArg) : path.join(repoRoot, "generated");
  const slugs = groupArgs.length > 0 ? groupArgs : M1_GROUPS;

  const result = generate({
    outDir,
    schema: loadAwsSchema(),
    groups: readGroups(),
    slugs,
  });

  for (const group of result.groups) {
    const nested = group.entries.reduce((n, e) => n + e.nestedTypes, 0);
    console.log(
      `${group.slug}: ${group.entries.length} classes, ${nested} nested types, ${group.files.length} files`,
    );
  }
  console.log(`wrote ${result.files.length} files to ${outDir}`);
}

main();
