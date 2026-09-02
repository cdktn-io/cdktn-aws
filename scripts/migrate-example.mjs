#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Regenerates `examples/migrate/typescript/migrated/` from `classic/` by running the tool over a
 * copy — the committed "after" is never hand-edited, which is the only thing that makes it a
 * golden file for the tool (`scripts/migrate-verify.mjs`, step 1).
 *
 * Usage: node scripts/migrate-example.mjs
 */
import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exampleDir = path.join(repoRoot, "examples", "migrate", "typescript");
const classicDir = path.join(exampleDir, "classic");
const migratedDir = path.join(exampleDir, "migrated");

/** The example's committed files: `dist/` and `cdktf.out/` are build output, never inputs. */
const sourceFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .sort();

rmSync(migratedDir, { recursive: true, force: true });
mkdirSync(migratedDir, { recursive: true });
for (const file of sourceFiles(classicDir)) {
  cpSync(path.join(classicDir, file), path.join(migratedDir, file));
}

execFileSync(
  path.join(repoRoot, "node_modules", ".bin", "tsx"),
  [
    path.join(repoRoot, "tools", "migrate", "bin", "migrate.ts"),
    "ts",
    "--project",
    path.join(migratedDir, "tsconfig.json"),
    "--write",
  ],
  { cwd: repoRoot, stdio: "inherit" },
);
