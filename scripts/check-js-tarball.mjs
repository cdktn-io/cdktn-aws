#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The gate on what `@cdktn/aws` actually ships.
 *
 * `jsii-pacmak --targets js` produces `dist/js/aws@<version>.jsii.tgz`, and that one file is not
 * just the npm artifact: it is embedded verbatim inside the Python wheel (`cdktn_aws/_jsii/`), the
 * Java jar and the .NET package as the jsii kernel payload, so whatever it carries is downloaded
 * and extracted once per language, per install. `@cdktn/aws@0.1.0` carried the entire monolith
 * `src/` tree — 7,990 files, 550,672,898 B unpacked, 2,661 of them `.ts` sources — because
 * `scripts/package.mjs` passes `--outdir`, which makes pacmak skip the `.npmignore` it would
 * otherwise write (`scripts/monolith-manifest.mjs` § MONOLITH_NPMIGNORE).
 *
 * An allowlist file that nothing reads back is a comment. This reads it back, from the packed
 * bytes, and fails the build — so the next release cannot repeat 0.1.0 quietly.
 *
 * Usage:
 *   node scripts/check-js-tarball.mjs dist/js/aws@0.1.1.jsii.tgz
 */
import { existsSync, readdirSync } from "node:fs";
import * as path from "node:path";
import { listTarball } from "./tar-list.mjs";

/** Files the tarball must carry. `lib/` and `.jsii` are checked as prefixes, these as exact names. */
const REQUIRED = ["package/package.json", "package/.jsii", "package/README.md", "package/LICENSE", "package/NOTICE"];

/**
 * @param {string} tgz path to the packed tarball
 * @returns {Promise<{ files: number, bytes: number }>}
 */
export async function checkJsTarball(tgz) {
  if (!existsSync(tgz)) throw new Error(`[tarball] no such tarball: ${tgz}`);

  // One streaming gunzip, in-process, for both the names and the unpacked size — scripts/tar-list.mjs.
  // No shell and no `tar` child: the path below is attacker-influenced in the only way that matters
  // (pacmak names the file from the package version), and `tar -tv`'s long format differs between
  // BSD tar (macOS) and GNU tar (CI) anyway.
  const { entries, bytes } = await listTarball(tgz);
  const files = entries.filter((e) => !e.endsWith("/"));

  const problems = [];

  // (1) No TypeScript sources. `.d.ts` under `lib/` is the type surface every consumer needs and is
  // explicitly allowed; anything else ending in `.ts`, and anything at all under `package/src/`, is
  // the 0.1.0 bug.
  const sources = files.filter(
    (f) => f.startsWith("package/src/") || (f.endsWith(".ts") && !(f.startsWith("package/lib/") && f.endsWith(".d.ts"))),
  );
  if (sources.length > 0) {
    problems.push(
      `${sources.length} TypeScript source file(s) in the tarball — the .npmignore did not take.\n` +
        sources.slice(0, 10).map((f) => `      ${f}`).join("\n") +
        (sources.length > 10 ? `\n      ... and ${sources.length - 10} more` : ""),
    );
  }

  // (2) Build config has no business in a published assembly either.
  const config = files.filter((f) => /^package\/tsconfig[^/]*\.json$/.test(f) || f.endsWith(".tsbuildinfo"));
  if (config.length > 0) problems.push(`build config in the tarball: ${config.join(", ")}`);

  // (3) The licence text and the attribution map must travel with the code (MPL-2.0 §3.1), and the
  // compiled assembly has to actually be there.
  const missing = REQUIRED.filter((f) => !files.includes(f));
  if (missing.length > 0) problems.push(`missing required file(s): ${missing.join(", ")}`);
  if (!files.some((f) => f.startsWith("package/lib/") && f.endsWith(".js"))) {
    problems.push("no package/lib/**/*.js — the tarball carries no compiled code");
  }
  if (!files.some((f) => f.startsWith("package/lib/") && f.endsWith(".d.ts"))) {
    problems.push("no package/lib/**/*.d.ts — the tarball carries no type declarations");
  }

  if (problems.length > 0) {
    throw new Error(
      `[tarball] ${path.basename(tgz)} FAILED the publish gate (${files.length} files, ${bytes} B unpacked):\n` +
        problems.map((p) => `  - ${p}`).join("\n"),
    );
  }
  return { files: files.length, bytes };
}

/** Find the single `aws@<version>.jsii.tgz` pacmak wrote into `<distJsDir>`. */
export function soleTarball(distJsDir) {
  const tgzs = existsSync(distJsDir) ? readdirSync(distJsDir).filter((f) => f.endsWith(".tgz")) : [];
  if (tgzs.length !== 1) {
    throw new Error(`[tarball] expected exactly one .tgz in ${distJsDir}, found ${tgzs.length}: ${tgzs.join(", ")}`);
  }
  return path.join(distJsDir, tgzs[0]);
}

if (process.argv[1] && process.argv[1].endsWith("check-js-tarball.mjs")) {
  const target = process.argv[2];
  if (!target) {
    console.error("usage: node scripts/check-js-tarball.mjs <tarball.tgz | dist/js dir>");
    process.exit(2);
  }
  try {
    const tgz = target.endsWith(".tgz") ? target : soleTarball(target);
    const { files, bytes } = await checkJsTarball(tgz);
    console.log(`[tarball] ${path.basename(tgz)}: OK — ${files} files, ${bytes} B unpacked`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
