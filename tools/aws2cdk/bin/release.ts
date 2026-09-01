// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Usage: tsx bin/release.ts --from <ref> [--to <ref>] [--version X.Y.Z] [--go-root DIR] [--json]
 *
 * Prefer the launcher: `node scripts/release.mjs --from <ref>`.
 *
 * Reads `generated/hashes.json` at two git refs of THIS repository, works out which groups moved,
 * and prints the exact tag list and command sequence a release would run against `cdktn-aws-go`.
 *
 * **`--dry-run` is the default and the only mode.** Nothing here shells out to `git tag` or
 * `git push`; passing `--execute` is refused rather than ignored, so a release is always a human
 * pasting commands they have read.
 */
import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import type { HashesManifest } from "../src/hashes";
import { repoRoot } from "../src/schema";
import {
  GO_MODULE_ROOT,
  fleetVersion,
  planCommands,
  planRelease,
  type ReleasePlan,
} from "../src/release-plan";

const HASHES_PATH = "generated/hashes.json";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
function flag(name: string): boolean {
  return process.argv.includes(name);
}

/** `git show <ref>:generated/hashes.json`, with the failure named rather than a raw git dump. */
function manifestAt(ref: string): HashesManifest {
  let raw: string;
  try {
    raw = execFileSync("git", ["show", `${ref}:${HASHES_PATH}`], {
      cwd: repoRoot,
      encoding: "utf-8",
      maxBuffer: 64 * 1024 * 1024,
      // git's own "exists on disk, but not in <ref>" goes to stderr and would print alongside the
      // one-sentence message below, which is strictly more useful.
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    throw new Error(
      `cannot read ${HASHES_PATH} at ref "${ref}" — is it a valid ref, and did that commit have a ` +
        "generated tree? (`git log --oneline -- generated/hashes.json` lists the ones that do)",
    );
  }
  const parsed = JSON.parse(raw) as HashesManifest;
  if (!parsed.groups || typeof parsed.groups !== "object") {
    throw new Error(`${HASHES_PATH} at "${ref}" has no groups object`);
  }
  return parsed;
}

function print(plan: ReleasePlan, goRoot: string): void {
  const kinds = { added: 0, changed: 0, removed: 0 };
  for (const c of plan.changes) kinds[c.kind]++;

  console.log("release plan — DRY RUN (the only mode: this tool never runs git tag or git push)");
  console.log("");
  const versionNote =
    plan.version === "0.0.0"
      ? "  <-- PLACEHOLDER, bump package.json before a real release"
      : "   (lockstep, every tagged module)";
  console.log(`  fleet version    : ${plan.version}${versionNote}`);
  console.log(`  module root      : ${GO_MODULE_ROOT}`);
  console.log(`  from             : ${plan.beforeRef}  (aws ${plan.providerVersionBefore})`);
  console.log(`  to               : ${plan.afterRef}  (aws ${plan.providerVersionAfter})`);
  console.log(
    `  groups           : ${plan.totalGroups} total · ${kinds.changed} changed · ` +
      `${kinds.added} added · ${kinds.removed} removed`,
  );
  console.log(
    `  tags             : ${plan.tags.length}  (${plan.totalGroups - plan.tags.length} module(s) ` +
      "keep the tag they already have)",
  );
  console.log("");

  for (const w of plan.warnings) console.log(`  !! ${w}\n`);

  if (plan.changes.length > 0) {
    console.log("changed groups");
    for (const c of plan.changes) {
      const b = c.beforeHash?.slice(0, 12) ?? "—";
      const a = c.afterHash?.slice(0, 12) ?? "—";
      console.log(`  ${c.kind.padEnd(8)} ${c.slug.padEnd(34)} ${c.packageName.padEnd(34)} ${b} → ${a}`);
    }
    console.log("");
  }

  if (plan.tags.length > 0) {
    console.log("tags");
    for (const t of plan.tags) console.log(`  ${t}`);
    console.log("");
    console.log("commands (not executed)");
    for (const line of planCommands(plan, goRoot)) console.log(line === "" ? "" : `  ${line}`);
    console.log("");
  }

  console.log("release-runbook items this plan does not check for you");
  console.log("  - proxy first publish: the smoke test above is mandatory, and it is the only");
  console.log("    thing that exercises proxy.golang.org and sum.golang.org. A module that never");
  console.log("    resolves there is not released, however green the local build was.");
  console.log("  - /vN: at major >= 2 every import path and every directory changes at once.");
  console.log("    See the release section of docs/provider-bump-runbook.md before bumping major.");
}

function main(): void {
  if (flag("--execute") || flag("--no-dry-run")) {
    console.error(
      "release: only --dry-run is implemented, and it is the default. Read the printed commands " +
        "and run them yourself — the tag fan-out is the one step that is unrepairable after a push.",
    );
    process.exit(2);
  }

  const from = arg("--from");
  if (!from) {
    console.error("release: --from <ref> is required (the previous release's ref)");
    process.exit(2);
  }
  const to = arg("--to") ?? "HEAD";
  const goRoot =
    arg("--go-root") ?? process.env.CDKTN_AWS_GO_ROOT ?? path.join(repoRoot, "..", "cdktn-aws-go");

  const rootPkg = JSON.parse(
    fs.readFileSync(path.join(repoRoot, "package.json"), "utf-8"),
  ) as { version: string };
  const version = arg("--version") ?? fleetVersion(rootPkg.version);

  const plan = planRelease({
    before: manifestAt(from),
    after: manifestAt(to),
    version,
    beforeRef: from,
    afterRef: to,
  });

  if (flag("--json")) {
    console.log(JSON.stringify({ ...plan, commands: planCommands(plan, goRoot) }, null, 2));
  } else {
    print(plan, path.relative(repoRoot, goRoot) || goRoot);
  }
}

try {
  main();
} catch (err) {
  // A bad ref and a bad version are both operator errors, and both are recoverable by reading one
  // sentence. A node stack trace here would bury it.
  console.error(`release: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(2);
}
