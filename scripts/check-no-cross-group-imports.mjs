#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Gate: ZERO cross-group imports in emitted TypeScript, and nothing emitted at a shared root.
 *
 * This is the one unverified premise the go-split-spike carried into M1 (VERDICT §7). Option A
 * gives every group its own jsii assembly with no inter-assembly dependency; the moment one
 * group's emitted source imports another's, that stops being true and the whole Go split
 * collapses back into Option B's version-skew hazard. So it is checked mechanically, not assumed.
 *
 * Rules, over every `.ts` file under `generated/<group>/src/`:
 *   1. every import/export/require specifier must be `cdktn`, `constructs`, or a relative
 *      specifier that stays inside this group's own `src/`;
 *   2. no file may exist directly under `generated/` (no shared root, no assembly barrel), except
 *      the `hashes.json` content-hash manifest, which is data and not importable;
 *   3. no `@cdktn/aws-*` specifier anywhere — that is the exact shape a cross-group import takes.
 *
 * Usage: node scripts/check-no-cross-group-imports.mjs [generatedDir]
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatedDir = path.resolve(process.argv[2] ?? path.join(repoRoot, "generated"));

const ALLOWED_BARE = new Set(["cdktn", "constructs"]);

/**
 * The only non-directory entries tolerated at the generated root. `hashes.json` is the per-group
 * content-hash manifest (tools/aws2cdk/src/hashes.ts): it is data, not a module, so it cannot be
 * the shared *code* root this gate exists to forbid — no emitted file can import it, and rule 1
 * below would reject the specifier if one tried.
 */
const ROOT_SIDECARS = new Set(["hashes.json"]);

/**
 * `import ... from 'x'` / `export ... from 'x'` / bare `import 'x'` / `import('x')` / `require('x')`.
 *
 * The `from` clause is anchored to a line that actually STARTS with `import`/`export`, and the
 * call forms require their closing paren. An earlier, looser pattern matched a bare `from` before
 * any quote and so fired on emitted code for a terraform attribute literally named `from`
 * (`this.getNumberAttribute('from')`, in `aws_fms_policy` and six other resources) — 38 phantom
 * failures at 257-group scale that did not exist in the three M1 groups.
 */
const SPECIFIERS = [
  /^\s*(?:import|export)\s[^;'"]*\bfrom\s*["']([^"']+)["']/gm,
  /^\s*import\s*["']([^"']+)["']/gm,
  /\b(?:import|require)\s*\(\s*["']([^"']+)["']\s*\)/g,
];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const failures = [];

let groups = [];
try {
  groups = readdirSync(generatedDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
  for (const entry of readdirSync(generatedDir, { withFileTypes: true })) {
    if (!entry.isDirectory() && !ROOT_SIDECARS.has(entry.name)) {
      failures.push(`generated/${entry.name}: nothing may be emitted at the shared root`);
    }
  }
} catch {
  console.error(`no generated tree at ${generatedDir} — run \`pnpm generate\` first`);
  process.exit(1);
}

let scanned = 0;
for (const group of groups) {
  const srcDir = path.join(generatedDir, group, "src");
  let stat;
  try {
    stat = statSync(srcDir);
  } catch {
    failures.push(`generated/${group}: no src/ directory`);
    continue;
  }
  if (!stat.isDirectory()) continue;

  for (const file of walk(srcDir).filter((f) => f.endsWith(".ts"))) {
    scanned++;
    const rel = path.relative(generatedDir, file);
    const text = readFileSync(file, "utf-8");
    const specs = SPECIFIERS.flatMap((re) => [...text.matchAll(re)].map((m) => m[1]));
    for (const spec of specs) {
      if (spec.startsWith("@cdktn/aws-")) {
        failures.push(`${rel}: cross-group import "${spec}"`);
        continue;
      }
      if (!spec.startsWith(".")) {
        if (!ALLOWED_BARE.has(spec)) failures.push(`${rel}: disallowed bare import "${spec}"`);
        continue;
      }
      const resolved = path.resolve(path.dirname(file), spec);
      if (path.relative(srcDir, resolved).startsWith("..")) {
        failures.push(`${rel}: relative import "${spec}" escapes generated/${group}/src`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`cross-group import gate FAILED (${failures.length}):`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}

console.log(
  `cross-group import gate PASS: ${scanned} files across ${groups.length} groups (${groups.join(", ")}), 0 cross-group imports, 0 files at the shared root`,
);
