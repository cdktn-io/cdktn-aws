#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M1 acceptance D (and, with --pacmak-go, F): compile EACH generated group package standalone with
 * real jsii, and report the warning codes it produced.
 *
 * `--tsconfig tsconfig.json --validate-tsconfig generated` is what lets the package own its
 * committed tsconfig while jsii still enforces that it matches what jsii would have generated;
 * see docs/m1-generator.md.
 *
 * JSII3 (no README.md) and JSII6 (peer dependency missing from devDependencies) must be zero.
 * JSII5018 (a terraform attribute whose name is a keyword in some target language) is expected
 * and is emitted by @cdktn/provider-aws on the same attributes.
 *
 * Usage: node scripts/build-generated.mjs [--pacmak-go] [group ...]
 */
import { readdirSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatedDir = path.join(repoRoot, "generated");
const bin = (name) => path.join(repoRoot, "node_modules", ".bin", name);

const args = process.argv.slice(2);
const pacmakGo = args.includes("--pacmak-go");
const only = args.filter((a) => !a.startsWith("--"));

const groups = readdirSync(generatedDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && (only.length === 0 || only.includes(e.name)))
  .map((e) => e.name)
  .sort();

let failed = 0;
for (const group of groups) {
  const cwd = path.join(generatedDir, group);
  const r = spawnSync(bin("jsii"), ["--tsconfig", "tsconfig.json", "--validate-tsconfig", "generated"], {
    cwd,
    encoding: "utf8",
  });
  const output = `${r.stdout ?? ""}${r.stderr ?? ""}`;
  const codes = {};
  for (const m of output.matchAll(/JSII(\d+)/g)) codes[`JSII${m[1]}`] = (codes[`JSII${m[1]}`] ?? 0) + 1;
  const blocking = (codes.JSII3 ?? 0) + (codes.JSII6 ?? 0);
  const summary = Object.entries(codes)
    .sort()
    .map(([k, v]) => `${k}x${v}`)
    .join(" ");
  if (r.status !== 0 || blocking > 0) {
    failed++;
    console.error(`jsii ${group}: FAIL (exit ${r.status}) ${summary}`);
    console.error(output);
    continue;
  }
  console.log(`jsii ${group}: OK — JSII3 0, JSII6 0${summary ? `, other: ${summary}` : ""}`);

  if (pacmakGo) {
    const p = spawnSync(bin("jsii-pacmak"), ["--targets", "go"], { cwd, encoding: "utf8" });
    if (p.status !== 0) {
      failed++;
      console.error(`jsii-pacmak ${group}: FAIL\n${p.stdout}${p.stderr}`);
      continue;
    }
    const goMods = readdirSync(path.join(cwd, "dist", "go"), { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    for (const mod of goMods) {
      const goMod = path.join(cwd, "dist", "go", mod, "go.mod");
      if (!existsSync(goMod)) {
        failed++;
        console.error(`jsii-pacmak ${group}: no go.mod for ${mod}`);
        continue;
      }
      console.log(`jsii-pacmak ${group}: module github.com/cdktn-io/cdktn-aws-go/${mod}`);
    }
  }
}

process.exit(failed === 0 ? 0 : 1);
