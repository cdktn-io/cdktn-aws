#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * `pnpm package` — build the publishable `@cdktn/aws` artifacts into `dist/`.
 *
 * This is the one command release.yml runs and the one command the npm placeholder procedure runs
 * (docs/m4-publishing.md §3): assemble the monolith, compile it with the pinned jsii, lazify the
 * barrel, then `jsii-pacmak` the requested targets into `dist/{js,python,java,dotnet}`.
 *
 *   PACKAGE_VERSION=0.0.0 PACMAK_TARGETS=js pnpm package     # the npm placeholder tarball
 *   PACKAGE_VERSION=0.1.0 PACMAK_TARGETS=js,python,java,dotnet pnpm package   # a release
 *
 * Env (checked before the matching flag, so CI can opt more targets in without changing the
 * command a contributor runs locally):
 *   PACKAGE_VERSION   overrides --version (default: this repository's own semver, from package.json)
 *   PACMAK_TARGETS    overrides --targets (default "js"; jsii-pacmak's target names are
 *                     "js", "python", "java", "dotnet")
 *
 * **`go` is not a target here and never will be.** The Go distribution is the 258-module fleet
 * (`scripts/build-fleet.mjs` → `jsii-pacmak --targets go` per group → cdktn-aws-go). A monolithic
 * Go module is past x/mod/zip's per-module source cap, so `go mod download` would refuse it and the
 * module path would be permanently spent; `scripts/monolith-manifest.mjs` emits no `targets.go` and
 * this script refuses the target by name, so neither an operator nor a stale runbook can reach it.
 *
 * Writes `dist/metrics.json` (per-target byte sizes) — release.yml attaches it to the GitHub
 * Release, so every published version carries the sizes it shipped at.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { checkJsTarball, soleTarball } from "./check-js-tarball.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const monolithDir = path.join(repoRoot, "monolith");
const distDir = path.join(repoRoot, "dist");
const bin = (name) => path.join(repoRoot, "node_modules", ".bin", name);

const flag = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : fallback;
};

const version =
  process.env.PACKAGE_VERSION ??
  flag("version", JSON.parse(readFileSync(path.join(repoRoot, "package.json"), "utf8")).version);
const targets = (process.env.PACMAK_TARGETS ?? flag("targets", "js"))
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

if (!/^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(version)) {
  console.error(`[package] refusing version '${version}': expected MAJOR.MINOR.PATCH[-prerelease]`);
  process.exit(1);
}
if (targets.includes("go")) {
  console.error(
    "[package] refusing the `go` target: the Go distribution is the per-group fleet " +
      "(pnpm build:fleet -> cdktn-aws-go). See docs/m3-go.md and scripts/monolith-manifest.mjs.",
  );
  process.exit(1);
}

const run = (label, cmd, args, cwd, env = {}) => {
  console.log(`[package] $ ${[cmd, ...args].join(" ")}`);
  const t0 = Date.now();
  const r = spawnSync(cmd, args, { cwd, stdio: "inherit", env: { ...process.env, ...env } });
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  if (r.status !== 0) {
    console.error(`[package] ${label}: FAIL (exit ${r.status}) after ${secs}s`);
    process.exit(r.status ?? 1);
  }
  console.log(`[package] ${label}: OK in ${secs}s`);
  return Number(secs);
};

const dirBytes = (dir) => {
  let total = 0;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    total += e.isDirectory() ? dirBytes(p) : statSync(p).size;
  }
  return total;
};
const humanMB = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

console.log(`[package] version=${version} targets=${targets.join(",")}`);
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

// build-monolith.mjs owns the assemble + jsii + lazify half, including the 16 GB heap and the
// assertion that all 258 lazy getters resolve. PACKAGE_VERSION is what stamps the manifest.
const buildSecs = run(
  "build:monolith",
  process.execPath,
  [path.join(repoRoot, "scripts", "build-monolith.mjs")],
  repoRoot,
  { PACKAGE_VERSION: version },
);

// One pacmak invocation per target, so a failing target names itself and its cost is its own
// number. --outdir puts everything under the repo-root dist/ that release.yml uploads.
const perTarget = {};
for (const target of targets) {
  const secs = run(
    `jsii-pacmak --targets ${target}`,
    bin("jsii-pacmak"),
    ["--targets", target, "--outdir", distDir],
    monolithDir,
    { NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --max-old-space-size=16384`.trim() },
  );
  const outDir = path.join(distDir, target);
  if (!existsSync(outDir)) {
    console.error(`[package] jsii-pacmak --targets ${target} wrote no dist/${target} — refusing to report it as built`);
    process.exit(1);
  }
  const bytes = dirBytes(outDir);
  perTarget[target] = { seconds: secs, bytes, human: humanMB(bytes) };
  console.log(`[package] dist/${target}: ${humanMB(bytes)} in ${secs}s`);

  // The js tarball is the one artifact every other target also ships: pacmak embeds it verbatim as
  // the jsii kernel payload inside the wheel, the jar and the nupkg. Gate it here, at the only
  // point where it exists and before anything can publish it — 0.1.0 went out with `src/` in it.
  if (target === "js") {
    try {
      const tgz = soleTarball(outDir);
      const { files, bytes: unpacked } = checkJsTarball(tgz);
      perTarget[target].tarball = { name: path.basename(tgz), files, unpackedBytes: unpacked };
      console.log(
        `[package] tarball gate: ${path.basename(tgz)} OK — ${files} files, ` +
          `${unpacked} B (${humanMB(unpacked)}) unpacked, no sources`,
      );
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
}

writeFileSync(
  path.join(distDir, "metrics.json"),
  JSON.stringify({ version, buildSeconds: buildSecs, targets: perTarget }, null, 2) + "\n",
);
console.log(`[package] wrote dist/metrics.json`);
