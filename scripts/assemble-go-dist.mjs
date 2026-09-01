#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Collect the fleet's per-group `jsii-pacmak --targets go` output into ONE `dist/go/` tree — the
 * shape `publib-golang` publishes: one directory per module, each with its own `go.mod`, no root
 * `go.mod`, and `publib-golang` deriving the target repository from the module paths and tagging
 * `<dir>/v<version>` per module. It is the same tree `scripts/release.mjs` prints `cp -R` commands
 * for, assembled in one place so a workflow does not have to loop in YAML.
 *
 * `scripts/build-fleet.mjs` writes `generated/<group>/dist/go/<packageName>/`; this copies each of
 * those verbatim to `dist/go/<packageName>/`. Nothing is rewritten — pacmak's output is what ships.
 *
 * Refusals, all of them things that would otherwise publish quietly and wrongly:
 *   * a group whose pacmak output is missing (a partial fleet build would publish a partial fleet)
 *   * two groups claiming one directory (impossible by the manifest test, asserted again here)
 *   * a module directory with no go.mod
 *   * fewer modules than `generated/hashes.json` has groups
 *
 * `go mod tidy` still has to run over the result before anything is tagged — pacmak emits no
 * `go.sum` and a tag without one is unverifiable (scripts/go-tidy-build.mjs).
 *
 * Usage:
 *   node scripts/assemble-go-dist.mjs [--out dist/go]   # the whole fleet, all 258 asserted
 *   node scripts/assemble-go-dist.mjs --allow-partial    # one CI shard's eighth
 *   node scripts/assemble-go-dist.mjs --verify           # copy nothing; check --out is complete
 */
import { readdirSync, existsSync, readFileSync, mkdirSync, rmSync, cpSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatedDir = path.join(repoRoot, "generated");
const argv = process.argv.slice(2);
const outIdx = argv.indexOf("--out");
const outDir = path.resolve(repoRoot, outIdx >= 0 ? argv[outIdx + 1] : path.join("dist", "go"));
/** One CI shard packs an eighth of the fleet; only the assembled union has to be complete. */
const allowPartial = argv.includes("--allow-partial");
/** Check an already-assembled tree (the eight shards' artifacts, merged) without copying. */
const verifyOnly = argv.includes("--verify");

const expected = Object.keys(
  JSON.parse(readFileSync(path.join(generatedDir, "hashes.json"), "utf8")).groups,
).sort();

if (verifyOnly) {
  const dirs = existsSync(outDir)
    ? readdirSync(outDir, { withFileTypes: true })
        .filter((e) => e.isDirectory() && existsSync(path.join(outDir, e.name, "go.mod")))
        .map((e) => e.name)
        .sort()
    : [];
  const problems = [];
  if (dirs.length !== expected.length) {
    problems.push(`${dirs.length} modules in ${outDir}, expected ${expected.length} (generated/hashes.json)`);
  }
  if (existsSync(path.join(outDir, "go.mod"))) {
    problems.push(`${outDir}/go.mod exists — the root must not be a module (docs/m3-go.md)`);
  }
  for (const p of problems) console.error(p);
  if (problems.length > 0) process.exit(1);
  console.log(`${path.relative(repoRoot, outDir)}: ${dirs.length} modules, no root go.mod`);
  process.exit(0);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const seen = new Map();
const missing = [];
for (const group of expected) {
  const packedRoot = path.join(generatedDir, group, "dist", "go");
  if (!existsSync(packedRoot)) {
    missing.push(group);
    continue;
  }
  const modules = readdirSync(packedRoot, { withFileTypes: true }).filter((e) => e.isDirectory());
  if (modules.length === 0) missing.push(group);
  for (const mod of modules) {
    const src = path.join(packedRoot, mod.name);
    if (!existsSync(path.join(src, "go.mod"))) {
      console.error(`${group}: ${mod.name} has no go.mod — that is not a module`);
      process.exit(1);
    }
    if (seen.has(mod.name)) {
      console.error(`two groups claim dist/go/${mod.name}: ${seen.get(mod.name)} and ${group}`);
      process.exit(1);
    }
    seen.set(mod.name, group);
    cpSync(src, path.join(outDir, mod.name), { recursive: true });
  }
}

if (missing.length > 0 && !allowPartial) {
  console.error(
    `${missing.length} group(s) have no packed Go output: ${missing.slice(0, 10).join(", ")}` +
      `${missing.length > 10 ? ", …" : ""}\n` +
      "Run `node scripts/build-fleet.mjs` for the whole fleet before assembling — publishing a " +
      "partial fleet leaves modules that consumers can import but never resolve.",
  );
  process.exit(1);
}
if (existsSync(path.join(outDir, "go.mod"))) {
  console.error(`${outDir}/go.mod exists — the root must not be a module (docs/m3-go.md)`);
  process.exit(1);
}
if (seen.size !== expected.length && !allowPartial) {
  console.error(`assembled ${seen.size} modules for ${expected.length} groups`);
  process.exit(1);
}
// A shard that packed nothing must not upload an empty artifact that merges into a green union.
if (seen.size === 0) {
  console.error("no packed Go modules found at all — run `node scripts/build-fleet.mjs` first");
  process.exit(1);
}

console.log(
  `assembled ${path.relative(repoRoot, outDir)}: ${seen.size}${allowPartial ? ` of ${expected.length}` : ""} modules, no root go.mod`,
);
