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
import { readdirSync, existsSync, readFileSync } from "node:fs";
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
    // The expected import path comes from the package's OWN manifest (src/manifest.ts wrote it),
    // not from the directory name — the directory name is pacmak's output, i.e. the thing under
    // test. `module <path>` is the first line of a go.mod by definition, and that path is
    // permanent after the first release (see docs/provider-bump-runbook.md, the Go note), so it
    // is asserted rather than echoed.
    const target = JSON.parse(readFileSync(path.join(cwd, "package.json"), "utf8")).jsii.targets.go;
    const expected = `${target.moduleName}/${target.packageName}`;
    const goMods = readdirSync(path.join(cwd, "dist", "go"), { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    if (goMods.length !== 1 || goMods[0] !== target.packageName) {
      failed++;
      console.error(
        `jsii-pacmak ${group}: expected exactly one Go package directory "${target.packageName}", got ${JSON.stringify(goMods)}`,
      );
      continue;
    }
    const goMod = path.join(cwd, "dist", "go", goMods[0], "go.mod");
    if (!existsSync(goMod)) {
      failed++;
      console.error(`jsii-pacmak ${group}: no go.mod for ${goMods[0]}`);
      continue;
    }
    const declared = readFileSync(goMod, "utf8").split("\n")[0].trim();
    if (declared !== `module ${expected}`) {
      failed++;
      console.error(
        `jsii-pacmak ${group}: go.mod declares "${declared}", expected "module ${expected}"`,
      );
      continue;
    }
    console.log(`jsii-pacmak ${group}: ${declared} (asserted against dist/go/${goMods[0]}/go.mod)`);
  }
}

process.exit(failed === 0 ? 0 : 1);
