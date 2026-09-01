#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M2 metric (a): JS cold start. Every sample is a FRESH `node` process (a warm `require.cache`
 * would measure nothing), timed around the `require` alone; the reported figure is the median of
 * `--runs` samples after one discarded warm-up.
 *
 * Cases:
 *   ours-full     require('<monolith>/lib')                     — the public top-level import
 *   ref-full      require('@cdktn/provider-aws')                — the same, on the reference
 *   ours-partial  require two group submodules by deep path
 *   ref-partial   require the equivalent reference resource modules by deep path
 *
 * The partial cases exist because both libraries' `index.js` is EAGER (`exports.x = require(...)`
 * for every child), so "does the module graph allow partial loading?" is answered by whether a
 * deep path exists at all — not by anything the barrel does.
 *
 *   node scripts/bench-js-coldstart.mjs --ref <dir with node_modules/@cdktn/provider-aws> [--runs 7]
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (name, dflt) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : dflt;
};
const runs = Number(arg("runs", 7));
const refRoot = arg("ref", process.env.CDKTN_AWS_REF_JS);
const monolith = path.join(repoRoot, "monolith", "lib");

if (!existsSync(monolith)) throw new Error(`no ${monolith} — run pnpm build:monolith first`);
const refPkg = refRoot ? path.join(refRoot, "node_modules", "@cdktn", "provider-aws") : undefined;

/**
 * one fresh process. `body` is JS run inside the timed window; `touch` names the properties to
 * read off the required module (the realistic case — after lazification, the bare `require` of a
 * barrel proves nothing on its own).
 */
const PROBE = (specifiers, touch) => `
const t0 = process.hrtime.bigint();
const mods = [${specifiers.map((s) => `require(${JSON.stringify(s)})`).join(", ")}];
${touch.map((t) => `if (!mods[0][${JSON.stringify(t)}]) throw new Error('no ${t}');`).join("\n")}
const ms = Number(process.hrtime.bigint() - t0) / 1e6;
console.log(JSON.stringify({ ms, cache: Object.keys(require.cache).length, rss: process.memoryUsage().rss }));
`;

function sample(label, specifiers, touch = []) {
  if (specifiers.some((s) => !existsSync(s.endsWith(".js") ? s : `${s}.js`) && !existsSync(s))) {
    return { label, skipped: `missing: ${specifiers.join(", ")}` };
  }
  const out = [];
  for (let i = 0; i <= runs; i++) {
    const r = spawnSync(process.execPath, ["--max-old-space-size=8192", "-e", PROBE(specifiers, touch)], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
    if (r.status !== 0) return { label, skipped: (r.stderr || "").slice(0, 400) };
    if (i > 0) out.push(JSON.parse(r.stdout.trim()));
  }
  const ms = out.map((o) => o.ms).sort((a, b) => a - b);
  return {
    label,
    medianMs: +ms[Math.floor(ms.length / 2)].toFixed(1),
    minMs: +ms[0].toFixed(1),
    maxMs: +ms[ms.length - 1].toFixed(1),
    cacheEntries: out[0].cache,
    rssMb: +(Math.max(...out.map((o) => o.rss)) / 1048576).toFixed(0),
    runs: ms.length,
  };
}

const results = [
  // bare top-level require: what the barrel itself costs
  sample("ours-bare      require('@cdktn/aws')", [monolith]),
  ...(refPkg ? [sample("ref-bare       require('@cdktn/provider-aws')", [refPkg])] : []),
  // the realistic case: top-level import, then reach for two services
  sample("ours-touch2    require('@cdktn/aws') + .lambda + .s3", [monolith], ["lambda", "s3"]),
  ...(refPkg
    ? [
        sample("ref-touch2     require('@cdktn/provider-aws') + .lambdaFunction + .s3Bucket", [refPkg], [
          "lambdaFunction",
          "s3Bucket",
        ]),
      ]
    : []),
  // and the deep-path form both libraries also support
  sample("ours-deep      lib/lambda + lib/s3", [path.join(monolith, "lambda"), path.join(monolith, "s3")]),
  ...(refPkg
    ? [
        sample("ref-deep       lib/lambda-function + lib/s3-bucket", [
          path.join(refPkg, "lib", "lambda-function"),
          path.join(refPkg, "lib", "s3-bucket"),
        ]),
      ]
    : []),
];

console.log(JSON.stringify({ node: process.version, runs, results }, null, 2));
