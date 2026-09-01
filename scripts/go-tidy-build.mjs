#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M3 deliverable 3 — `go mod tidy` then `go build ./...` in every module of the assembled Go fleet.
 *
 * `jsii-pacmak` writes a `go.mod` and no `go.sum`, so pacmak's output is not directly buildable by
 * a consumer: the go-split-spike prototype hit exactly this
 * (`missing go.sum entry for .../constructs-go/constructs/v10`). `tidy` is therefore a required
 * post-pack step, not a tidiness pass — it is what produces the checksums a `go get` of a tagged
 * module verifies against. It also normalises the `go` directive and pulls in the indirect
 * requirement pacmak does not declare.
 *
 * The build is the real gate: pacmak emitting a module that declares the right path but does not
 * compile would be invisible to every other check in M3.
 *
 * Modules are independent, so both steps shard. The first module must run alone to warm the shared
 * module cache — otherwise N workers race to download the same three dependencies.
 *
 * Usage: node scripts/go-tidy-build.mjs --root <dir> [--concurrency N] [--build-only]
 */
import { readdirSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { availableParallelism } from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : null;
};
const root = flag("--root") ? path.resolve(flag("--root")) : null;
const concurrency = flag("--concurrency") ? Number(flag("--concurrency")) : Math.max(1, availableParallelism() - 2);
const buildOnly = argv.includes("--build-only");

if (!root) {
  console.error("usage: node scripts/go-tidy-build.mjs --root <dir-of-module-dirs>");
  process.exit(2);
}

const dirs = readdirSync(root, { withFileTypes: true })
  .filter((e) => e.isDirectory() && existsSync(path.join(root, e.name, "go.mod")))
  .map((e) => path.join(root, e.name))
  .sort();

if (dirs.length === 0) {
  console.error(`no Go modules under ${root}`);
  process.exit(1);
}

function run(args, cwd) {
  return new Promise((resolve) => {
    const child = spawn("go", args, { cwd, stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (out += d));
    child.on("error", (e) => resolve({ status: -1, output: `${out}\n${e.message}` }));
    child.on("close", (status) => resolve({ status, output: out }));
  });
}

async function one(dir) {
  const name = path.basename(dir);
  const t0 = Date.now();
  if (!buildOnly) {
    const tidy = await run(["mod", "tidy"], dir);
    if (tidy.status !== 0) return { name, ok: false, step: "tidy", ms: Date.now() - t0, output: tidy.output };
  }
  const build = await run(["build", "./..."], dir);
  if (build.status !== 0) return { name, ok: false, step: "build", ms: Date.now() - t0, output: build.output };
  const hasSum = existsSync(path.join(dir, "go.sum"));
  if (!hasSum) return { name, ok: false, step: "go.sum", ms: Date.now() - t0, output: "no go.sum after tidy" };
  return { name, ok: true, ms: Date.now() - t0 };
}

async function pool(items, worker) {
  const results = new Array(items.length);
  let next = 0;
  let done = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      for (;;) {
        const i = next++;
        if (i >= items.length) return;
        const r = (results[i] = await worker(items[i]));
        done++;
        const line = `[${String(done).padStart(3)}/${items.length}] ${r.ok ? "OK  " : `FAIL(${r.step})`} ${r.name} ${(r.ms / 1000).toFixed(1)}s`;
        (r.ok ? console.log : console.error)(line);
        if (!r.ok) console.error(r.output);
      }
    }),
  );
  return results;
}

// Warm the shared module cache serially: the fleet's three dependencies are identical everywhere,
// and N concurrent first-downloads of the same module is the one way this step can flake.
console.log(`warming module cache with ${path.basename(dirs[0])} …`);
const t0 = Date.now();
const first = await one(dirs[0]);
if (!first.ok) {
  console.error(`FAIL(${first.step}) ${first.name}\n${first.output}`);
  process.exit(1);
}
console.log(`cache warm in ${((Date.now() - t0) / 1000).toFixed(1)}s`);

const results = [first, ...(await pool(dirs.slice(1), one))];
const wallMs = Date.now() - t0;
const bad = results.filter((r) => !r.ok);
console.log(
  `${bad.length === 0 ? "PASS" : "FAIL"} — ${results.length - bad.length}/${results.length} modules tidied and built, ` +
    `wall ${(wallMs / 1000).toFixed(1)}s, concurrency ${concurrency}`,
);

const reportDir = path.join(repoRoot, "tmp", "m3");
mkdirSync(reportDir, { recursive: true });
writeFileSync(
  path.join(reportDir, "go-tidy-build.json"),
  `${JSON.stringify(
    { root, concurrency, modules: results.length, okCount: results.length - bad.length, wallMs, failures: bad },
    null,
    2,
  )}\n`,
);
process.exit(bad.length === 0 ? 0 : 1);
