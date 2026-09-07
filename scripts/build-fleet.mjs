#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M3 deliverable 1: compile the WHOLE fleet — every package under `generated/` — with one pinned
 * `jsii`, then pack every one of them with one pinned `jsii-pacmak --targets go`.
 *
 * This is `scripts/build-generated.mjs` (M1 acceptance D/F, serial, one group at a time) turned
 * into the shape CI needs: the groups are fully independent by construction (zero cross-group
 * imports, one jsii assembly each — go-split-spike VERDICT §3.6), so the fleet shards across cores
 * with no ordering and no shared state. Serial it is ~10 minutes; sharded it is ~1-2.
 *
 * Bars, unchanged from M1:
 *   JSII3 (no README.md) and JSII6 (peer dependency missing from devDependencies) must be 0 over
 *   the whole fleet. JSII5018 (a terraform attribute whose name is a reserved word in some target
 *   language) is expected and is emitted by @cdktn/provider-aws on the same attributes.
 *
 * The two phases are separate passes rather than one per-group pipeline so that the wall time of
 * each tool is a number on its own, and so that a pacmak-only re-run can reuse an existing compile.
 *
 * Usage:
 *   node scripts/build-fleet.mjs                      # both phases, all groups
 *   node scripts/build-fleet.mjs --jsii               # compile only
 *   node scripts/build-fleet.mjs --pacmak-go acm elb  # pack two groups (needs their .jsii)
 *   node scripts/build-fleet.mjs --concurrency 8
 *   node scripts/build-fleet.mjs --shard 3/8         # one eighth of the fleet, for a CI matrix
 *
 * Writes a machine-readable run record to `tmp/m3/fleet-<phase>.json` (tmp/ is gitignored).
 *
 * VERSION STAMPING. The packed modules are built at `PACKAGE_VERSION` (default: this repository's
 * own semver), not at the `0.0.0` the committed manifests carry — see scripts/fleet-version.mjs
 * for the whole story, including why the manifests are stamped and restored rather than bumped.
 *
 * Two consequences of that stamp, both enforced below rather than documented and hoped for:
 *   * `--pacmak-go` alone packs from the EXISTING `.jsii`, so it refuses to run when that assembly
 *     was compiled at a different version — before it deletes the output it would replace.
 *   * one group is built by one process at a time (scripts/build-lock.mjs), because two overlapping
 *     builds would restore each other's stamp into the committed manifest.
 */
import { readdirSync, existsSync, readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { spawn } from "node:child_process";
import { availableParallelism } from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { fleetVersion, stampManifests, writeGoVersionFile } from "./fleet-version.mjs";
import { acquireGroupLocks } from "./build-lock.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatedDir = path.join(repoRoot, "generated");
const bin = (name) => path.join(repoRoot, "node_modules", ".bin", name);
const toolVersion = (name) =>
  JSON.parse(readFileSync(path.join(repoRoot, "node_modules", name, "package.json"), "utf8")).version;

const args = process.argv.slice(2);
const concIdx = args.indexOf("--concurrency");
const concurrency = concIdx >= 0 ? Number(args[concIdx + 1]) : Math.max(1, availableParallelism() - 2);
const wantJsii = args.includes("--jsii") || !args.includes("--pacmak-go");
const wantPacmak = args.includes("--pacmak-go") || !args.includes("--jsii");
const shardIdx = args.indexOf("--shard");
const shardArg = shardIdx >= 0 ? args[shardIdx + 1] : undefined;
const only = args.filter(
  (a, i) =>
    !a.startsWith("--") &&
    !(concIdx >= 0 && i === concIdx + 1) &&
    !(shardIdx >= 0 && i === shardIdx + 1),
);

const allGroups = readdirSync(generatedDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && (only.length === 0 || only.includes(e.name)))
  .map((e) => e.name)
  .sort();

/**
 * `--shard i/N` — the slice of the fleet this worker owns, 1-based.
 *
 * Not `groups.filter((_, k) => k % N === i)`: the fleet spans three orders of magnitude in size
 * (`lex_v2_models` is 60 MB packed, `swf` is 88 KB), and any index-based split leaves one shard
 * carrying the two giants while another finishes in seconds — a matrix is only as fast as its
 * slowest leg. Groups are dealt largest-first into whichever shard is currently lightest (LPT),
 * using the committed `hashes.json` byte counts, so the split is balanced AND identical on every
 * machine and every run: the same commit always produces the same shards.
 */
function shardOf(groups) {
  if (!shardArg) return groups;
  const m = /^(\d+)\/(\d+)$/.exec(shardArg);
  if (!m) {
    console.error(`--shard expects "i/N" (1-based), got ${JSON.stringify(shardArg)}`);
    process.exit(2);
  }
  const [index, total] = [Number(m[1]), Number(m[2])];
  if (index < 1 || index > total) {
    console.error(`--shard ${shardArg}: index must be in 1..${total}`);
    process.exit(2);
  }
  const hashesFile = path.join(generatedDir, "hashes.json");
  const bytes = existsSync(hashesFile)
    ? JSON.parse(readFileSync(hashesFile, "utf8")).groups
    : undefined;
  const weight = (g) => bytes?.[g]?.bytes ?? 1;
  const bins = Array.from({ length: total }, () => ({ load: 0, groups: [] }));
  // Ties broken by name so the deal is total-ordered, not readdir-ordered.
  for (const g of [...groups].sort((a, b) => weight(b) - weight(a) || (a < b ? -1 : 1))) {
    const bin = bins.reduce((min, b) => (b.load < min.load ? b : min));
    bin.load += weight(g);
    bin.groups.push(g);
  }
  const mine = bins[index - 1];
  console.log(
    `shard ${index}/${total}: ${mine.groups.length} of ${groups.length} groups, ` +
      `${(mine.load / 1024 / 1024).toFixed(1)} MiB of source`,
  );
  return mine.groups.sort();
}

const groups = shardOf(allGroups);

if (groups.length === 0) {
  console.error("no groups matched — is `generated/` populated? (run `pnpm generate`)");
  process.exit(1);
}

/** Run one child to completion, capturing its combined output. Never rejects. */
function run(cmd, cmdArgs, cwd) {
  return new Promise((resolve) => {
    const child = spawn(cmd, cmdArgs, { cwd, stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("error", (e) => resolve({ status: -1, output: `${out}\nspawn error: ${e.message}` }));
    child.on("close", (status) => resolve({ status, output: out }));
  });
}

/** Fixed-size worker pool over an index-ordered task list. */
async function pool(items, worker) {
  const results = new Array(items.length);
  let next = 0;
  let done = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    for (;;) {
      const i = next++;
      if (i >= items.length) return;
      results[i] = await worker(items[i]);
      done++;
      const r = results[i];
      const line = `[${String(done).padStart(3)}/${items.length}] ${r.ok ? "OK  " : "FAIL"} ${r.group} ${(r.ms / 1000).toFixed(1)}s${r.note ? ` — ${r.note}` : ""}`;
      (r.ok ? console.log : console.error)(line);
      if (!r.ok && r.output) console.error(r.output);
    }
  });
  await Promise.all(workers);
  return results;
}

/** Count every JSIInnnn diagnostic code in a tool's output. */
function jsiiCodes(output) {
  const codes = {};
  for (const m of output.matchAll(/JSII(\d+)/g)) codes[`JSII${m[1]}`] = (codes[`JSII${m[1]}`] ?? 0) + 1;
  return codes;
}

async function compile(group) {
  const cwd = path.join(generatedDir, group);
  const t0 = Date.now();
  const r = await run(bin("jsii"), ["--tsconfig", "tsconfig.json", "--validate-tsconfig", "generated"], cwd);
  const ms = Date.now() - t0;
  const codes = jsiiCodes(r.output);
  const blocking = (codes.JSII3 ?? 0) + (codes.JSII6 ?? 0);
  const ok = r.status === 0 && blocking === 0;
  const note = Object.entries(codes)
    .sort()
    .map(([k, v]) => `${k}x${v}`)
    .join(" ");
  return { group, ok, ms, codes, note, output: ok ? "" : r.output };
}

async function pack(group) {
  const cwd = path.join(generatedDir, group);
  const t0 = Date.now();
  // pacmak adds to dist/ rather than replacing it, and the version is in the embedded tarball's
  // NAME (`jsii/<pkg>-<version>.tgz`) — so a re-pack at a new version would otherwise ship the
  // previous run's tarball alongside the current one. Start from nothing.
  rmSync(path.join(cwd, "dist", "go"), { recursive: true, force: true });
  const r = await run(bin("jsii-pacmak"), ["--targets", "go"], cwd);
  const ms = Date.now() - t0;
  if (r.status !== 0) return { group, ok: false, ms, output: r.output };

  // The expected import path comes from the package's OWN manifest (src/manifest.ts wrote it), not
  // from the directory name — the directory name is pacmak's output, i.e. the thing under test.
  // `module <path>` is the first line of a go.mod by definition, and that path is permanent after
  // the first release (docs/provider-bump-runbook.md), so it is asserted rather than echoed.
  const target = JSON.parse(readFileSync(path.join(cwd, "package.json"), "utf8")).jsii.targets.go;
  const expected = `module ${target.moduleName}/${target.packageName}`;
  const goDir = path.join(cwd, "dist", "go");
  const goMods = existsSync(goDir)
    ? readdirSync(goDir, { withFileTypes: true })
        .filter((e) => e.isDirectory())
        .map((e) => e.name)
    : [];
  if (goMods.length !== 1 || goMods[0] !== target.packageName) {
    return {
      group,
      ok: false,
      ms,
      output: `expected exactly one Go package directory "${target.packageName}", got ${JSON.stringify(goMods)}`,
    };
  }
  const moduleDir = path.join(goDir, goMods[0]);
  const goMod = path.join(moduleDir, "go.mod");
  if (!existsSync(goMod)) return { group, ok: false, ms, output: `no go.mod for ${goMods[0]}` };
  const declared = readFileSync(goMod, "utf8").split("\n")[0].trim();
  if (declared !== expected) {
    return { group, ok: false, ms, output: `go.mod declares "${declared}", expected "${expected}"` };
  }

  // pacmak took the version from the stamped manifest, so this asserts the stamp actually reached
  // the assembly — a module packed at the wrong number carries it in its embedded tarball too,
  // where nothing downstream can fix it. Then the file is rewritten without pacmak's trailing
  // newline, which is what publib's extractVersion compares against $VERSION byte-for-byte.
  const packed = readFileSync(path.join(moduleDir, "version"), "utf8").trim();
  if (packed !== releaseVersion) {
    return { group, ok: false, ms, output: `pacmak packed version "${packed}", expected "${releaseVersion}"` };
  }
  writeGoVersionFile(moduleDir, releaseVersion);
  return { group, ok: true, ms, note: declared.slice("module ".length) };
}

const reportDir = path.join(repoRoot, "tmp", "m3");
mkdirSync(reportDir, { recursive: true });

const releaseVersion = fleetVersion(repoRoot);

/**
 * PACMAK-ONLY PRE-FLIGHT. `--pacmak-go` reuses an existing compile, and the version pacmak writes
 * comes from the `.jsii` assembly that compile produced — NOT from the manifest this run stamps. So
 * `PACKAGE_VERSION=Y --pacmak-go <g>` over an assembly compiled at X packs at X, and the assertion
 * in `pack()` catches it only AFTER `rmSync(dist/go)` has already thrown away the good output.
 *
 * Checked here, before anything is deleted, over every group at once — a fleet is packed or it is
 * not. It reports rather than silently running the jsii phase itself: `--pacmak-go` exists so that
 * the wall time of each tool is a number on its own (see the header), and the recovery procedure in
 * docs/m4-publishing.md §5 tells an operator which phase to re-run. A `--pacmak-go` that sometimes
 * costs a compile would make both of those lie. The error names the exact command instead.
 */
function assertAssembliesMatch() {
  const stale = [];
  for (const group of groups) {
    const assemblyFile = path.join(generatedDir, group, ".jsii");
    if (!existsSync(assemblyFile)) {
      stale.push(`${group}: no .jsii — never compiled`);
      continue;
    }
    const compiled = JSON.parse(readFileSync(assemblyFile, "utf8")).version;
    if (compiled !== releaseVersion) {
      stale.push(`${group}: .jsii was compiled at ${compiled}, this run packs ${releaseVersion}`);
    }
  }
  if (stale.length === 0) return;
  const rerun = `PACKAGE_VERSION=${releaseVersion} node scripts/build-fleet.mjs ${groups.join(" ")}`;
  console.error(
    `--pacmak-go cannot pack ${stale.length} of ${groups.length} group(s) at v${releaseVersion}:\n` +
      stale.slice(0, 10).map((s) => `  ${s}`).join("\n") +
      (stale.length > 10 ? `\n  … and ${stale.length - 10} more` : "") +
      "\n\npacmak takes the version from the assembly, not from package.json, so this would pack the\n" +
      "old number — and nothing downstream can repair a module packed at the wrong version.\n" +
      `Compile and pack in one run instead:\n  ${rerun}`,
  );
  process.exit(2);
}
if (wantPacmak && !wantJsii) assertAssembliesMatch();

// EXCLUSIVITY. The stamp below mutates a committed file; a second build of the same group would
// snapshot the stamped bytes and restore THOSE. scripts/build-lock.mjs has the whole story.
let releaseLocks;
try {
  releaseLocks = acquireGroupLocks(repoRoot, groups);
} catch (err) {
  console.error(err.message);
  process.exit(2);
}

// ONE handler, in this order, registered before the stamp is written: the manifests have to be back
// at 0.0.0 *before* the lock is dropped, or the next build snapshots a stamped file — which is the
// very race the lock exists to close. (Two separate 'exit' listeners would run in registration
// order and get this backwards if the lock were registered first.)
let restoreManifests = () => {};
process.on("exit", () => {
  restoreManifests();
  releaseLocks();
});

// The stamp covers BOTH phases and is taken back out at the end (and on any exit): jsii bakes the
// version into the .jsii assembly, and pacmak `npm pack`s the package again to embed it, so the
// manifest has to read as the release version for the whole build and as 0.0.0 the moment it ends.
restoreManifests = stampManifests(
  groups.map((g) => path.join(generatedDir, g)),
  releaseVersion,
);

let failed = 0;
for (const [phase, want, worker, tool] of [
  ["jsii", wantJsii, compile, "jsii"],
  ["pacmak-go", wantPacmak, pack, "jsii-pacmak"],
]) {
  if (!want) continue;
  const version = toolVersion(tool);
  console.log(
    `\n=== ${phase} — ${tool}@${version}, ${groups.length} groups at v${releaseVersion}, concurrency ${concurrency} ===`,
  );
  const t0 = Date.now();
  const results = await pool(groups, worker);
  const wallMs = Date.now() - t0;

  const codeTotals = {};
  for (const r of results) for (const [k, v] of Object.entries(r.codes ?? {})) codeTotals[k] = (codeTotals[k] ?? 0) + v;
  const bad = results.filter((r) => !r.ok);
  failed += bad.length;
  const cpuMs = results.reduce((a, r) => a + r.ms, 0);
  console.log(
    `${phase}: ${results.length - bad.length}/${results.length} OK, wall ${(wallMs / 1000).toFixed(1)}s, cpu ${(cpuMs / 1000).toFixed(1)}s` +
      (Object.keys(codeTotals).length ? `, codes: ${Object.entries(codeTotals).sort().map(([k, v]) => `${k}x${v}`).join(" ")}` : ""),
  );
  if (phase === "jsii") {
    console.log(`${phase}: JSII3 ${codeTotals.JSII3 ?? 0}, JSII6 ${codeTotals.JSII6 ?? 0} (both must be 0)`);
  }
  writeFileSync(
    path.join(reportDir, `fleet-${phase}.json`),
    `${JSON.stringify(
      {
        phase,
        tool,
        version,
        releaseVersion,
        concurrency,
        groups: groups.length,
        okCount: results.length - bad.length,
        wallMs,
        cpuMs,
        codeTotals,
        failures: bad.map((r) => ({ group: r.group, output: r.output })),
        perGroupMs: Object.fromEntries(results.map((r) => [r.group, r.ms])),
      },
      null,
      2,
    )}\n`,
  );
}

// `process.exit` fires the 'exit' handler above, and so does an uncaught throw — so the manifests
// go back to 0.0.0 on every path out of this script, not only the happy one.
process.exit(failed === 0 ? 0 : 1);
