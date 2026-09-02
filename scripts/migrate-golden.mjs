#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Refreshes `examples/migrate/typescript/golden/` — the synth of the CLASSIC example against the
 * real published `@cdktn/provider-aws`.
 *
 * This is the ONE step of the migration proof that cannot run in CI: `@cdktn/provider-aws` is
 * ~460 MB installed, one package per resource, and pulling it on every pull request to re-derive a
 * file that only changes when the example or the provider pin does would be minutes a run for
 * nothing. So it runs here, locally, deliberately, and its output is committed; CI compares the
 * migrated project's synth against it (`scripts/migrate-verify.mjs`).
 *
 * The install goes to a scratch directory outside the repository — never into `examples/`, whose
 * `node_modules` would then shadow this workspace's own resolution.
 *
 * Usage: node scripts/migrate-golden.mjs [--scratch <dir>]
 */
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exampleDir = path.join(repoRoot, "examples", "migrate", "typescript");
const classicDir = path.join(exampleDir, "classic");
const goldenDir = path.join(exampleDir, "golden");

const args = process.argv.slice(2);
const scratchIdx = args.indexOf("--scratch");
const scratch =
  scratchIdx >= 0
    ? path.resolve(args[scratchIdx + 1])
    : mkdtempSync(path.join(os.tmpdir(), "cdktn-aws-golden-"));
mkdirSync(scratch, { recursive: true });

console.log(`golden: building the classic example in ${scratch}`);
for (const file of ["main.ts", "tsconfig.json", "package.json"]) {
  cpSync(path.join(classicDir, file), path.join(scratch, file));
}

execFileSync("npm", ["install", "--no-audit", "--no-fund"], { cwd: scratch, stdio: "inherit" });
const classicVersion = JSON.parse(
  readFileSync(path.join(scratch, "node_modules", "@cdktn", "provider-aws", "package.json"), "utf8"),
);
const cdktnVersion = JSON.parse(
  readFileSync(path.join(scratch, "node_modules", "cdktn", "package.json"), "utf8"),
).version;

// The pin has to be the repository's own, or the golden file would be the synth of a different
// provider schema than the one `generated/` was built from and the comparison would prove nothing.
const pinned = readFileSync(path.join(repoRoot, "schemas", "PROVIDER_VERSION"), "utf8").trim();
const installedProvider = classicVersion.cdktn?.provider?.version;
if (installedProvider !== pinned) {
  console.error(
    `golden: @cdktn/provider-aws@${classicVersion.version} pins provider ${installedProvider}, ` +
      `but this repository is on ${pinned}. Pick the published version whose provider pin matches ` +
      "(npm view @cdktn/provider-aws versions) and update examples/migrate/typescript/classic/package.json.",
  );
  process.exit(1);
}

execFileSync(path.join(repoRoot, "node_modules", ".bin", "tsc"), ["-p", "tsconfig.json"], {
  cwd: scratch,
  stdio: "inherit",
});
execFileSync(process.execPath, ["dist/main.js"], { cwd: scratch, stdio: "inherit" });

const synthesised = path.join(scratch, "cdktf.out", "stacks", "migrate-example", "cdk.tf.json");
if (!existsSync(synthesised)) throw new Error(`golden: nothing synthesised at ${synthesised}`);

mkdirSync(goldenDir, { recursive: true });
cpSync(synthesised, path.join(goldenDir, "cdk.tf.json"));
writeFileSync(
  path.join(goldenDir, "VERSION"),
  [
    "# The exact build examples/migrate/typescript/golden/cdk.tf.json is the synth of.",
    "# Refresh with `pnpm migrate:golden:refresh`; see scripts/migrate-golden.mjs.",
    `@cdktn/provider-aws=${classicVersion.version}`,
    `terraform-provider-aws=${installedProvider}`,
    `cdktn=${cdktnVersion}`,
    "",
  ].join("\n"),
);

console.log(
  `golden: wrote cdk.tf.json from @cdktn/provider-aws@${classicVersion.version} ` +
    `(provider ${installedProvider}, cdktn ${cdktnVersion})`,
);
if (scratchIdx < 0) rmSync(scratch, { recursive: true, force: true });
