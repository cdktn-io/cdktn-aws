#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M3 deliverable 2 — the Option A premise the spike never verified (go-split-spike VERDICT, open
 * risk #1: "no shared types").
 *
 * `scripts/check-no-cross-group-imports.mjs` proves the invariant at the TypeScript level, on the
 * source we write. This script proves it at the GO level, on the code `jsii-pacmak` writes — which
 * is the level that actually decides whether the fleet is 258 independent modules or one welded
 * graph. Option B's whole shape (one `core` module every group imports) is exactly what a failure
 * here would look like, and pacmak is free to emit it: it is the tool, not us, that decides where a
 * type that two assemblies both mention lives.
 *
 * The rule: every import in every emitted .go file must resolve to one of
 *   1. the module's OWN path — `<moduleName>/<packageName>` and anything under it (`/jsii`,
 *      `/internal`, `/version`);
 *   2. cdktn core — `github.com/open-constructs/cdk-terrain-go/...`;
 *   3. `github.com/aws/constructs-go/constructs/v10`;
 *   4. the jsii runtime — `github.com/aws/jsii-runtime-go/...`;
 *   5. the Go standard library (first path element has no dot).
 * Anything else fails. In particular a sibling fleet module (`<moduleName>/<other>`) fails as a
 * cross-group import, and the bare `<moduleName>` fails as a root-level shared package — the two
 * things the layout forbids.
 *
 * `go.mod` requires are checked by the same rule, so a dependency that is declared but not yet
 * imported is caught before it becomes one.
 *
 * Usage:
 *   node scripts/check-go-module-isolation.mjs                # generated/<group>/dist/go/<pkg>
 *   node scripts/check-go-module-isolation.mjs --root <dir>   # a directory of module dirs
 */
import { readdirSync, existsSync, readFileSync, statSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rootIdx = process.argv.indexOf("--root");
const explicitRoot = rootIdx >= 0 ? path.resolve(process.argv[rootIdx + 1]) : null;

const ALLOWED_EXTERNAL = [
  "github.com/open-constructs/cdk-terrain-go/",
  "github.com/aws/constructs-go/constructs/v10",
  "github.com/aws/jsii-runtime-go",
];
const isStdlib = (spec) => !spec.split("/")[0].includes(".");
const isAllowedExternal = (spec) =>
  ALLOWED_EXTERNAL.some((p) => spec === p.replace(/\/$/, "") || spec.startsWith(p));

/** Module roots: every directory holding a go.mod, one level down from `root`. */
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
      const dir = path.join(goDir, p.name);
      if (existsSync(path.join(dir, "go.mod"))) dirs.push(dir);
    }
  }
  return dirs.sort();
}

function goFiles(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) goFiles(p, acc);
    else if (e.name.endsWith(".go")) acc.push(p);
  }
  return acc;
}

/**
 * Import specifiers of one Go file. Go's grammar allows `import "x"` and a parenthesised block;
 * both forms sit at the top of the file before any declaration, so scanning until the first
 * top-level `func`/`type`/`var`/`const` is exact and needs no parser. Specifiers inside string
 * literals in the body (pacmak emits thousands of jsii FQNs) are therefore never seen.
 */
function imports(file) {
  const specs = [];
  let inBlock = false;
  for (const raw of readFileSync(file, "utf8").split("\n")) {
    const line = raw.trim();
    if (inBlock) {
      if (line === ")") break;
      const m = line.match(/"([^"]+)"/);
      if (m) specs.push(m[1]);
      continue;
    }
    if (line.startsWith("import (")) {
      inBlock = true;
      continue;
    }
    const single = line.match(/^import\s+(?:[\w.]+\s+)?"([^"]+)"/);
    if (single) {
      specs.push(single[1]);
      continue;
    }
    if (/^(func|type|var|const)\b/.test(line)) break;
  }
  return specs;
}

const dirs = moduleDirs();
if (dirs.length === 0) {
  console.error(
    explicitRoot
      ? `no modules under ${explicitRoot}`
      : "no packed modules — run `node scripts/build-fleet.mjs --pacmak-go` first",
  );
  process.exit(1);
}

const violations = [];
let fileCount = 0;
let importCount = 0;
const ownPaths = new Map();

for (const dir of dirs) {
  const modLine = readFileSync(path.join(dir, "go.mod"), "utf8").split("\n")[0].trim();
  const own = modLine.replace(/^module\s+/, "");
  ownPaths.set(dir, own);
}
const allOwn = new Set(ownPaths.values());

for (const dir of dirs) {
  const own = ownPaths.get(dir);
  const check = (spec, where) => {
    importCount++;
    if (spec === own || spec.startsWith(`${own}/`)) return;
    if (isAllowedExternal(spec) || isStdlib(spec)) return;
    const sibling = allOwn.has(spec) || [...allOwn].some((o) => o !== own && spec.startsWith(`${o}/`));
    violations.push({
      module: own,
      where: path.relative(dir, where) || "go.mod",
      spec,
      why: sibling ? "cross-group import (sibling fleet module)" : "unexpected dependency",
    });
  };

  for (const file of goFiles(dir)) {
    fileCount++;
    for (const spec of imports(file)) check(spec, file);
  }
  // go.mod requires. A DIRECT require is held to the same rule as an import — a declared dependency
  // is a violation waiting to happen. An `// indirect` require is not a dependency we chose: it is
  // the MVS closure `go mod tidy` computes from the allowed three (jsii-runtime-go pulls in
  // Masterminds/semver, for instance), and refusing it would mean refusing `go mod tidy`. It is
  // still checked against the fleet itself, because a sibling module or the repository root
  // appearing even indirectly would mean the modules are not independent.
  const modPath = path.join(dir, "go.mod");
  for (const m of readFileSync(modPath, "utf8").matchAll(
    /^\s*(?:require\s+)?([a-z0-9.\-]+\.[a-z]{2,}\/\S+)\s+v\S+(\s*\/\/\s*indirect)?\s*$/gm,
  )) {
    const [, spec, indirect] = m;
    if (!indirect) {
      check(spec, modPath);
      continue;
    }
    importCount++;
    if (spec === own || spec.startsWith(`${own}/`)) continue;
    if (allOwn.has(spec) || [...allOwn].some((o) => o !== own && spec.startsWith(`${o}/`))) {
      violations.push({ module: own, where: "go.mod", spec, why: "cross-group indirect requirement" });
    }
  }
}

// A root-level shared package would show up as a module dir whose path IS the module root, or as a
// .go file sitting beside the module dirs. Assert neither exists.
const rootShared = [...allOwn].filter((p) => !p.split("/").slice(3).length);
if (rootShared.length) {
  violations.push({ module: rootShared.join(","), where: "go.mod", spec: rootShared[0], why: "root-level module" });
}
if (explicitRoot) {
  const stray = readdirSync(explicitRoot).filter((n) => n === "go.mod" || n.endsWith(".go"));
  if (stray.length) {
    violations.push({ module: "<root>", where: explicitRoot, spec: stray.join(","), why: "root-level Go file" });
  }
}

const where = explicitRoot ?? "generated/*/dist/go";
if (violations.length) {
  console.error(`FAIL — ${violations.length} isolation violation(s) in ${where}`);
  for (const v of violations.slice(0, 50)) {
    console.error(`  ${v.module}: ${v.where} imports "${v.spec}" — ${v.why}`);
  }
  if (violations.length > 50) console.error(`  … and ${violations.length - 50} more`);
  process.exit(1);
}
console.log(
  `PASS — ${dirs.length} modules, ${fileCount} .go files, ${importCount} import specifiers in ${where}; ` +
    `0 cross-group imports, 0 root-level shared packages`,
);
