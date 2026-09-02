#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The migration proof, in two steps, both runnable in CI.
 *
 *  1. **The tool still produces the committed output.** `classic/` is copied to a temp directory,
 *     the tool is run over it with `--write`, and the result is compared to `migrated/` byte for
 *     byte. That makes `examples/migrate/typescript/migrated/` a golden file for the tool itself:
 *     any change to the rewrite, or to `naming-map.json`, shows up as a diff a reviewer reads.
 *
 *  2. **The migration preserved the semantics.** `migrated/` is compiled and synthesised against
 *     THIS tree's generated packages, and its `cdk.tf.json` is compared to `golden/cdk.tf.json` —
 *     the synth of the *classic* project against the real published `@cdktn/provider-aws`
 *     (`scripts/migrate-golden.mjs`). Equal terraform out of both libraries is the whole claim the
 *     migration makes.
 *
 * Step 2 never builds the monolith and never installs `@cdktn/provider-aws`. It compiles only the
 * groups the example imports and resolves `@cdktn/aws` to a BARREL SHIM: a six-line
 * `node_modules/@cdktn/aws` whose `index.js`/`index.d.ts` re-export `generated/<group>/lib` under
 * the group name. That is exactly the shape `scripts/build-monolith.mjs` publishes
 * (`export * as <group> from './<group>'`), minus the copy-in — which is the point: the example is
 * type-checked and synthesised against the same submodule surface a consumer installs, from the
 * per-group packages, with no 258-group compile.
 *
 * Usage: node scripts/migrate-verify.mjs [--skip-build]
 */
import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exampleDir = path.join(repoRoot, "examples", "migrate", "typescript");
const classicDir = path.join(exampleDir, "classic");
const migratedDir = path.join(exampleDir, "migrated");
const goldenFile = path.join(exampleDir, "golden", "cdk.tf.json");
const skipBuild = process.argv.includes("--skip-build");

/** The example's committed files: `dist/` and `cdktf.out/` are build output, never inputs. */
const sourceFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .sort();

const tmp = mkdtempSync(path.join(os.tmpdir(), "cdktn-aws-migrate-verify-"));
let failed = 0;
const fail = (message) => {
  console.error(`  FAIL ${message}`);
  failed++;
};

// ------------------------------------------------------------------ step 1: the tool's output

console.log("step 1: the tool's output on classic/ equals the committed migrated/");
const rerun = path.join(tmp, "rerun");
mkdirSync(rerun);
for (const file of sourceFiles(classicDir)) cpSync(path.join(classicDir, file), path.join(rerun, file));

const report = path.join(tmp, "report.md");
const migrate = execFileSync(
  path.join(repoRoot, "node_modules", ".bin", "tsx"),
  [
    path.join(repoRoot, "tools", "migrate", "bin", "migrate.ts"),
    "ts",
    "--project",
    path.join(rerun, "tsconfig.json"),
    "--write",
    "--report",
    report,
  ],
  { encoding: "utf8", cwd: repoRoot },
);
process.stdout.write(migrate.split("\n").filter((l) => l.startsWith("|") || l.startsWith("None")).join("\n"));
process.stdout.write("\n");

const committed = sourceFiles(migratedDir);
const produced = sourceFiles(rerun);
if (committed.join(",") !== produced.join(",")) {
  fail(`migrated/ has [${committed}] but the tool produced [${produced}]`);
}
for (const file of committed.filter((f) => produced.includes(f))) {
  const a = readFileSync(path.join(migratedDir, file), "utf8");
  const b = readFileSync(path.join(rerun, file), "utf8");
  if (a !== b) fail(`migrated/${file} is not what the tool produces — re-run \`pnpm migrate:example\``);
  else console.log(`  ok   migrated/${file} byte-equal`);
}
if (!readFileSync(report, "utf8").includes("0 unmapped")) {
  fail("the tool reported unmapped symbols on the example — see the report above");
} else {
  console.log("  ok   0 unmapped symbols");
}

// ------------------------------------------------------------------ step 2: the synth

/** The `@cdktn/aws` group barrel members the migrated example imports. */
const groups = [
  ...new Set(
    [...readFileSync(path.join(migratedDir, "main.ts"), "utf8").matchAll(
      /import\s*\{([^}]*)\}\s*from\s*'@cdktn\/aws'/g,
    )].flatMap((m) =>
      m[1]
        .split(",")
        .map((s) => s.trim().split(/\s+as\s+/)[0].trim())
        .filter(Boolean),
    ),
  ),
].sort();
console.log(`\nstep 2: synth migrated/ against generated/{${groups.join(",")}} and compare to golden/`);

if (!skipBuild) {
  execFileSync(process.execPath, [path.join(repoRoot, "scripts", "build-generated.mjs"), ...groups], {
    cwd: repoRoot,
    stdio: "inherit",
  });
}
const unbuilt = groups.filter((g) => !existsSync(path.join(repoRoot, "generated", g, "lib", "index.js")));
if (unbuilt.length > 0) {
  console.error(
    `  no compiled lib/ for ${unbuilt.join(", ")} — run \`node scripts/build-generated.mjs ${groups.join(" ")}\``,
  );
  process.exit(1);
}

const project = path.join(tmp, "synth");
mkdirSync(path.join(project, "node_modules", "@cdktn", "aws"), { recursive: true });
for (const file of sourceFiles(migratedDir)) cpSync(path.join(migratedDir, file), path.join(project, file));

const shim = path.join(project, "node_modules", "@cdktn", "aws");
const libOf = (group) => path.join(repoRoot, "generated", group, "lib");
writeFileSync(
  path.join(shim, "package.json"),
  `${JSON.stringify({ name: "@cdktn/aws", version: "0.0.0", main: "index.js", types: "index.d.ts" }, null, 2)}\n`,
);
writeFileSync(
  path.join(shim, "index.js"),
  ["// Generated by scripts/migrate-verify.mjs. The published barrel, over the per-group lib/.",
    ...groups.map((g) => `exports.${g} = require(${JSON.stringify(libOf(g))});`),
    "",
  ].join("\n"),
);
writeFileSync(
  path.join(shim, "index.d.ts"),
  ["// Generated by scripts/migrate-verify.mjs. The published barrel, over the per-group lib/.",
    ...groups.map((g) => `export * as ${g} from ${JSON.stringify(libOf(g))};`),
    "",
  ].join("\n"),
);
// cdktn and constructs come from a generated package's own devDependency links — the same copies
// the lib/ under test was compiled against, so there is exactly one of each in the program.
for (const dep of ["cdktn", "constructs"]) {
  symlinkSync(
    path.join(repoRoot, "generated", "provider", "node_modules", dep),
    path.join(project, "node_modules", dep),
  );
}

execFileSync(path.join(repoRoot, "node_modules", ".bin", "tsc"), ["-p", "tsconfig.json"], {
  cwd: project,
  stdio: "inherit",
});
execFileSync(process.execPath, ["dist/main.js"], { cwd: project, stdio: "inherit" });

const synthesised = path.join(project, "cdktf.out", "stacks", "migrate-example", "cdk.tf.json");
const actual = JSON.parse(readFileSync(synthesised, "utf8"));
const golden = JSON.parse(readFileSync(goldenFile, "utf8"));

/**
 * The only fields allowed to differ, and why. Nothing else is touched — a masked field is a claim
 * not made, so the list is short on purpose.
 *
 *  - `//.metadata.version` — the cdktn runtime that synthesised the file, not a property of the
 *    bindings. The two runs may be on different cdktn patch releases.
 *  - `terraform.required_providers.aws.version` — the provider version each library was generated
 *    from. `schemas/PROVIDER_VERSION` and the golden's classic build are pinned to the same 6.62.0
 *    today (`golden/VERSION` records it), so this normally matches; it is masked because a
 *    provider bump lands in this repository before the classic library republishes, and that skew
 *    says nothing about whether the rename preserved semantics.
 */
const MASKED = [
  ["//", "metadata", "version"],
  ["terraform", "required_providers", "aws", "version"],
];

const maskedValues = [];
for (const pointer of MASKED) {
  const dig = (o) => pointer.reduce((n, k) => (n === undefined ? undefined : n[k]), o);
  const set = (o, v) => {
    const parent = pointer.slice(0, -1).reduce((n, k) => (n === undefined ? undefined : n[k]), o);
    if (parent) parent[pointer[pointer.length - 1]] = v;
  };
  maskedValues.push({ pointer: pointer.join("."), golden: dig(golden), migrated: dig(actual) });
  set(golden, "<masked>");
  set(actual, "<masked>");
}
for (const m of maskedValues) {
  console.log(`  masked ${m.pointer}: golden ${JSON.stringify(m.golden)} / migrated ${JSON.stringify(m.migrated)}`);
}

const a = JSON.stringify(golden, null, 2);
const b = JSON.stringify(actual, null, 2);
if (a === b) {
  const resources = Object.values(actual.resource ?? {}).reduce((n, r) => n + Object.keys(r).length, 0);
  console.log(
    `  ok   cdk.tf.json identical outside the masked fields — ${Object.keys(actual.resource ?? {}).length} ` +
      `terraform types, ${resources} resources, ${Object.keys(actual.output ?? {}).length} outputs`,
  );
} else {
  fail("the migrated project synthesises different terraform than the classic one");
  const aLines = a.split("\n");
  const bLines = b.split("\n");
  for (let i = 0; i < Math.max(aLines.length, bLines.length); i++) {
    if (aLines[i] !== bLines[i]) console.error(`    line ${i + 1}:\n      golden:   ${aLines[i]}\n      migrated: ${bLines[i]}`);
  }
}

rmSync(tmp, { recursive: true, force: true });
console.log(failed === 0 ? "\nmigrate:verify PASS" : `\nmigrate:verify FAIL (${failed})`);
process.exit(failed === 0 ? 0 : 1);
