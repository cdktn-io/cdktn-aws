#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M3 deliverable 4 — the size gate. Every Go module the fleet ships must fit under x/mod/zip's
 * 524,288,000-byte per-module source cap, which is the constraint the whole Option A/B split exists
 * to satisfy (`docs/options.md`, go-split-spike VERDICT §2).
 *
 * The measurement is not an estimate: `tools/gosize` calls `golang.org/x/mod/zip.CheckDir`, the
 * same function `go mod download` runs, so what this prints is what the proxy will decide. A `du`
 * over the tree answers a different question — CheckDir excludes nested go.mod subtrees, vendor/,
 * and files it rejects, and it is the *valid* set that is capped.
 *
 * Usage:
 *   node scripts/check-go-size.mjs                    # generated/<group>/dist/go/<pkg>
 *   node scripts/check-go-size.mjs --root <dir>       # a directory of module dirs
 *   node scripts/check-go-size.mjs --markdown         # emit the docs table instead of the log
 *   node scripts/check-go-size.mjs --json <file>      # also write the raw records
 */
import { readdirSync, existsSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const flagValue = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : null;
};
const explicitRoot = flagValue("--root") ? path.resolve(flagValue("--root")) : null;
const markdown = argv.includes("--markdown");
const jsonOut = flagValue("--json");
const CAP = 524_288_000;

function moduleDirs() {
  if (explicitRoot) {
    return readdirSync(explicitRoot, { withFileTypes: true })
      .filter((e) => e.isDirectory() && existsSync(path.join(explicitRoot, e.name, "go.mod")))
      .map((e) => path.join(explicitRoot, e.name))
      .sort();
  }
  const generated = path.join(repoRoot, "generated");
  const dirs = [];
  for (const g of readdirSync(generated, { withFileTypes: true }).filter((e) => e.isDirectory())) {
    const goDir = path.join(generated, g.name, "dist", "go");
    if (!existsSync(goDir)) continue;
    for (const p of readdirSync(goDir, { withFileTypes: true }).filter((e) => e.isDirectory())) {
      if (existsSync(path.join(goDir, p.name, "go.mod"))) dirs.push(path.join(goDir, p.name));
    }
  }
  return dirs.sort();
}

const dirs = moduleDirs();
if (dirs.length === 0) {
  console.error(
    explicitRoot ? `no modules under ${explicitRoot}` : "no packed modules — run `node scripts/build-fleet.mjs --pacmak-go`",
  );
  process.exit(1);
}

const tool = path.join(repoRoot, "tools", "gosize");
const bin = path.join(repoRoot, "tmp", "gosize");
const build = spawnSync("go", ["build", "-o", bin, "."], { cwd: tool, encoding: "utf8" });
if (build.status !== 0) {
  console.error(`failed to build tools/gosize:\n${build.stdout}${build.stderr}`);
  process.exit(1);
}

// One exec per batch keeps the argv under ARG_MAX while still amortising process start.
const records = [];
let summary = null;
for (let i = 0; i < dirs.length; i += 200) {
  const r = spawnSync(bin, dirs.slice(i, i + 200), { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  if (r.status !== 0 && r.status !== 1) {
    console.error(`gosize failed: ${r.stderr}`);
    process.exit(1);
  }
  for (const line of r.stdout.trim().split("\n")) {
    const rec = JSON.parse(line);
    if (rec.summary) summary = { ...(summary ?? { modules: 0, totalValidBytes: 0, validFileCount: 0, overCap: 0 }) , modules: (summary?.modules ?? 0) + rec.modules, totalValidBytes: (summary?.totalValidBytes ?? 0) + rec.totalValidBytes, validFileCount: (summary?.validFileCount ?? 0) + rec.validFileCount, overCap: (summary?.overCap ?? 0) + rec.overCap };
    else records.push(rec);
  }
}

records.sort((a, b) => b.totalValidBytes - a.totalValidBytes);
const mib = (b) => (b / 1024 / 1024).toFixed(2);
const pct = (b) => ((b * 100) / CAP).toFixed(2);

if (jsonOut) writeFileSync(path.resolve(jsonOut), `${JSON.stringify({ cap: CAP, summary, records }, null, 2)}\n`);

if (markdown) {
  console.log(`| module | files | bytes | MiB | % of 524,288,000 B cap |`);
  console.log(`| --- | ---: | ---: | ---: | ---: |`);
  for (const r of records) {
    console.log(
      `| \`${r.module.split("/").pop()}\` | ${r.validFileCount.toLocaleString()} | ${r.totalValidBytes.toLocaleString()} | ${mib(r.totalValidBytes)} | ${pct(r.totalValidBytes)} % |`,
    );
  }
} else {
  for (const r of records) {
    if (!r.pass) console.error(`OVER CAP  ${r.module} ${r.totalValidBytes} B (${pct(r.totalValidBytes)} %)`);
  }
}

const over = records.filter((r) => !r.pass);
const total = records.reduce((a, r) => a + r.totalValidBytes, 0);
const largest = records[0];
console.error(
  `${over.length === 0 ? "PASS" : "FAIL"} — ${records.length} modules, ${records.reduce((a, r) => a + r.validFileCount, 0).toLocaleString()} valid files, ` +
    `${total.toLocaleString()} B total (${mib(total)} MiB); largest ${largest.module.split("/").pop()} ` +
    `${largest.totalValidBytes.toLocaleString()} B = ${pct(largest.totalValidBytes)} % of cap; ${over.length} over cap`,
);
process.exit(over.length === 0 ? 0 : 1);
