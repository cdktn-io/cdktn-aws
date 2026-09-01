#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * `tsc --noEmit` over every generated group package, using each package's own committed
 * tsconfig.json — the same compiler options jsii will use. Kept as a script rather than a root
 * tsconfig `include` because each group is a separate program with its own rootDir, and a single
 * program over all of them would not catch a group that only compiles because a sibling group
 * happens to be in the same program.
 */
import { readdirSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatedDir = path.join(repoRoot, "generated");
if (!existsSync(generatedDir)) {
  console.log("no generated/ tree — nothing to typecheck");
  process.exit(0);
}

const tsc = path.join(repoRoot, "node_modules", ".bin", "tsc");
let failed = 0;
for (const group of readdirSync(generatedDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort()) {
  const project = path.join(generatedDir, group, "tsconfig.json");
  if (!existsSync(project)) continue;
  const r = spawnSync(tsc, ["--noEmit", "-p", project], { stdio: "inherit" });
  if (r.status !== 0) failed++;
  else console.log(`tsc --noEmit generated/${group}: OK`);
}
process.exit(failed === 0 ? 0 : 1);
