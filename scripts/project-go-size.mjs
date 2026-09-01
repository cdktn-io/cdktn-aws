#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M2 metric (4): project Go module sizes from measured TypeScript source sizes, WITHOUT running
 * `jsii-pacmak --targets go` over all 258 packages (that is M3).
 *
 * The model is fitted on the groups this repo has actually packed for Go — pass their names on
 * the command line (they must have a `dist/go/` from `pnpm pacmak:go <group>`); the script reads
 * the real byte counts off disk, fits `goBytes = a + b * tsBytes` by ordinary least squares, and
 * applies it to every group's measured TypeScript size.
 *
 * `provider` is fitted-but-flagged: it is the only package with no `…OutputReference` classes at
 * all (a provider has no attributes to read back), so its expansion factor is not representative
 * and it is excluded from the fit by default.
 *
 * Cap: the Go module proxy / checksum DB refuse a source tree over 524,288,000 B
 * (`golang.org/x/mod/zip`'s MaxZipFile). ~/cdktn/go-split-spike/VERDICT.md measured the
 * *unsplit* awscc monolith at 412,862,916 B = 78.7 % of that cap.
 *
 * Usage: node scripts/project-go-size.mjs [group ...]      (default: every group with dist/go)
 */
import { readdirSync, existsSync, statSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatedDir = path.join(repoRoot, "generated");
const CAP = 524_288_000;
const AWSCC_MONOLITH = 412_862_916; // go-split-spike/VERDICT.md §2

const groups = readdirSync(generatedDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

const bytesUnder = (dir, filter = () => true) => {
  let total = 0;
  let files = 0;
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (filter(p)) {
        total += statSync(p).size;
        files++;
      }
    }
  };
  walk(dir);
  return { total, files };
};

const tsBytes = Object.fromEntries(
  groups.map((g) => [g, bytesUnder(path.join(generatedDir, g, "src"), (p) => p.endsWith(".ts")).total]),
);

const named = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const measured = [];
for (const g of groups) {
  const dist = path.join(generatedDir, g, "dist", "go");
  if (!existsSync(dist)) continue;
  if (named.length && !named.includes(g)) continue;
  const all = bytesUnder(dist);
  const go = bytesUnder(dist, (p) => p.endsWith(".go"));
  const tgz = bytesUnder(dist, (p) => p.endsWith(".tgz"));
  measured.push({
    group: g,
    tsBytes: tsBytes[g],
    goTotal: all.total,
    goSourceBytes: go.total,
    goFiles: go.files,
    tarballBytes: tgz.total,
    factor: +(all.total / tsBytes[g]).toFixed(2),
  });
}
if (measured.length < 2) {
  console.error("need at least 2 packed groups — run `pnpm pacmak:go <group> …` first");
  process.exit(1);
}

const fitSet = measured.filter((m) => m.group !== "provider");
const n = fitSet.length;
const sx = fitSet.reduce((s, m) => s + m.tsBytes, 0);
const sy = fitSet.reduce((s, m) => s + m.goTotal, 0);
const sxx = fitSet.reduce((s, m) => s + m.tsBytes * m.tsBytes, 0);
const sxy = fitSet.reduce((s, m) => s + m.tsBytes * m.goTotal, 0);
const b = (n * sxy - sx * sy) / (n * sxx - sx * sx);
const a = (sy - b * sx) / n;
const worstFactor = Math.max(...fitSet.map((m) => m.factor));

const project = (ts) => a + b * ts;
const totalTs = groups.reduce((s, g) => s + tsBytes[g], 0);

const perGroup = groups
  .map((g) => ({ group: g, tsBytes: tsBytes[g], projectedGoBytes: Math.round(project(tsBytes[g])) }))
  .sort((x, y) => y.tsBytes - x.tsBytes);

// The monolith is ONE Go module: every group's generated Go, plus a single embedded assembly
// tarball instead of 258 of them. Tarball size is taken from the real monolith build if present.
const monolithTgz = existsSync(path.join(repoRoot, "monolith", "dist", "python"))
  ? bytesUnder(path.join(repoRoot, "monolith", "dist", "python")).total
  : undefined;
const perGroupTarballs = measured.reduce((s, m) => s + m.tarballBytes, 0) / measured.length;
const projectedMonolithFit = Math.round(project(totalTs));
const projectedMonolithWorst = Math.round(totalTs * worstFactor);

console.log(
  JSON.stringify(
    {
      cap: CAP,
      awsccUnsplitMonolith: { bytes: AWSCC_MONOLITH, pctOfCap: +((AWSCC_MONOLITH / CAP) * 100).toFixed(1) },
      measured,
      fit: {
        excluded: measured.filter((m) => !fitSet.includes(m)).map((m) => m.group),
        n,
        interceptBytes: Math.round(a),
        slope: +b.toFixed(3),
        worstObservedFactor: worstFactor,
        meanTarballBytes: Math.round(perGroupTarballs),
      },
      totals: {
        groups: groups.length,
        totalTsBytes: totalTs,
        projectedMonolithBytes_fit: projectedMonolithFit,
        projectedMonolithPctOfCap_fit: +((projectedMonolithFit / CAP) * 100).toFixed(1),
        projectedMonolithBytes_worstFactor: projectedMonolithWorst,
        projectedMonolithPctOfCap_worstFactor: +((projectedMonolithWorst / CAP) * 100).toFixed(1),
        largestProjectedGroupPctOfCap: +((perGroup[0].projectedGoBytes / CAP) * 100).toFixed(2),
        monolithPythonDistBytes: monolithTgz,
      },
      top10: perGroup.slice(0, 10).map((r) => ({
        ...r,
        pctOfCap: +((r.projectedGoBytes / CAP) * 100).toFixed(2),
      })),
    },
    null,
    2,
  ),
);
