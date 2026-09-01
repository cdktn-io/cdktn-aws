#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Launcher for the release planner, so it is reachable the same way every other gate in this repo
 * is (`node scripts/<name>.mjs`) instead of through a pnpm filter incantation.
 *
 * The planner itself is TypeScript — `tools/aws2cdk/bin/release.ts` over
 * `tools/aws2cdk/src/release-plan.ts` — because its one interesting decision, *which groups moved
 * and therefore which of the 258 modules get a tag*, is unit-tested against a fixture of two refs'
 * manifests in `tools/aws2cdk/test/release-plan.test.ts`. A shell-shaped script would not be.
 *
 *   node scripts/release.mjs --from <ref> [--to <ref>] [--version X.Y.Z] [--go-root DIR] [--json]
 *
 * --dry-run is the default and the only mode: nothing in this repository can create or push a tag.
 */
import { spawnSync } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const toolDir = path.join(repoRoot, "tools", "aws2cdk");

// The root `tsx` directly rather than `pnpm --filter … exec`: pnpm wraps a non-zero exit in its own
// ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL banner, which buries the one-sentence operator error this tool
// is careful to print.
const tsx = path.join(repoRoot, "node_modules", ".bin", "tsx");
const r = spawnSync(tsx, [path.join(toolDir, "bin", "release.ts"), ...process.argv.slice(2)], {
  cwd: toolDir,
  stdio: "inherit",
});
process.exit(r.status ?? 1);
