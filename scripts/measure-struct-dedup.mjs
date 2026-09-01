#!/usr/bin/env node
// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * M2 metric (d): how much identical *shape* there is among the emitted nested property structs,
 * within a group and across groups. MEASUREMENT ONLY — nothing here changes the generator, and
 * cdktn-aws deliberately does not dedupe across groups (a shared struct would need a shared module
 * root, which `scripts/check-no-cross-group-imports.mjs` forbids by design).
 *
 * Two populations are counted:
 *
 *  1. **Schema nesting sites** — every place the aws provider schema declares a nested object
 *     (`block_types` entry, or an attribute whose type is `object`/`list(object)`/… ), walked
 *     recursively over every resource, data source and ephemeral resource, with no dedup at all.
 *     This is the "pre-dedup" population: what you would emit if every nesting site produced its
 *     own struct with no reuse anywhere.
 *  2. **Emitted structs** — every `export interface` inside a `namespace <Class>` block in
 *     `generated/<group>/src/**.ts`. The top-level `<Class>Config` interfaces are counted
 *     separately and excluded from the shape analysis: they are the resource's own argument
 *     surface, not a nested struct.
 *
 * Shape hash: sha256 over the interface's members as `name:type` pairs, sorted, plus each
 * member's optionality. Names AND types, so two structs collide only if a consumer could
 * literally pass one where the other is expected.
 *
 * Usage: node scripts/measure-struct-dedup.mjs [--json out.json]
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generatedDir = path.join(repoRoot, "generated");

const jsonIdx = process.argv.indexOf("--json");
const jsonOut = jsonIdx >= 0 ? process.argv[jsonIdx + 1] : undefined;

// ------------------------------------------------------- 1. schema nesting sites

function resolveSchemaPath() {
  const candidates = [
    process.env.CDKTN_AWS_SCHEMA,
    path.join(repoRoot, "schemas", "schema.json"),
    path.resolve(repoRoot, "..", "cdktn-grouped-resources", "schemas", "schema.json"),
  ].filter(Boolean);
  return candidates.find((c) => existsSync(c));
}

function countSchemaNestingSites() {
  const file = resolveSchemaPath();
  if (!file) return undefined;
  const doc = JSON.parse(readFileSync(file, "utf8"));
  const provider = doc.provider_schemas?.["registry.terraform.io/hashicorp/aws"];
  if (!provider) return undefined;

  let sites = 0;
  const shapes = new Map(); // shape hash -> count, over schema nesting sites

  /** an attribute `type` is a nested object when it is ["object", {...}] or ["list"/"set"/"map", <nested>] */
  const objectFieldsOf = (type) => {
    if (!Array.isArray(type)) return undefined;
    if (type[0] === "object") return type[1];
    if (["list", "set", "map"].includes(type[0])) return objectFieldsOf(type[1]);
    return undefined;
  };

  const typeLabel = (type) => (Array.isArray(type) ? JSON.stringify(type) : String(type));

  const walkAttrType = (type) => {
    const fields = objectFieldsOf(type);
    if (!fields) return;
    sites++;
    const members = Object.keys(fields)
      .sort()
      .map((k) => `${k}:${typeLabel(fields[k])}`);
    const h = createHash("sha256").update(members.join("\n")).digest("hex").slice(0, 16);
    shapes.set(h, (shapes.get(h) ?? 0) + 1);
    for (const k of Object.keys(fields)) walkAttrType(fields[k]);
  };

  const walkBlock = (block) => {
    for (const a of Object.values(block?.attributes ?? {})) {
      if (a.type) walkAttrType(a.type);
      if (a.nested_type) {
        sites++;
        const members = Object.entries(a.nested_type.attributes ?? {})
          .map(([k, v]) => `${k}:${typeLabel(v.type)}`)
          .sort();
        const h = createHash("sha256").update(members.join("\n")).digest("hex").slice(0, 16);
        shapes.set(h, (shapes.get(h) ?? 0) + 1);
        walkBlock(a.nested_type);
      }
    }
    for (const bt of Object.values(block?.block_types ?? {})) {
      sites++;
      const inner = bt.block ?? {};
      const members = [
        ...Object.entries(inner.attributes ?? {}).map(([k, v]) => `${k}:${typeLabel(v.type)}`),
        ...Object.keys(inner.block_types ?? {}).map((k) => `${k}:<block>`),
      ].sort();
      const h = createHash("sha256").update(members.join("\n")).digest("hex").slice(0, 16);
      shapes.set(h, (shapes.get(h) ?? 0) + 1);
      walkBlock(inner);
    }
  };

  let roots = 0;
  for (const bag of ["resource_schemas", "data_source_schemas", "ephemeral_resource_schemas"]) {
    for (const s of Object.values(provider[bag] ?? {})) {
      roots++;
      walkBlock(s.block ?? {});
    }
  }
  return { file, roots, sites, distinctShapes: shapes.size };
}

// ------------------------------------------------------- 2. emitted structs

const groups = readdirSync(generatedDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

/** shapeHash -> { groups: Map<group, count>, total, example } */
const emitted = new Map();
let configInterfaces = 0;
let nestedInterfaces = 0;

const memberKey = (m, sf) => {
  const name = m.name ? m.name.getText(sf) : "<unnamed>";
  const type = m.type ? m.type.getText(sf).replace(/\s+/g, " ") : "any";
  return `${name}${m.questionToken ? "?" : ""}:${type}`;
};

for (const group of groups) {
  const srcDir = path.join(generatedDir, group, "src");
  for (const f of readdirSync(srcDir).filter((n) => n.endsWith(".ts") && n !== "index.ts")) {
    const file = path.join(srcDir, f);
    const sf = ts.createSourceFile(file, readFileSync(file, "utf8"), ts.ScriptTarget.ES2020, true);

    const visit = (node, inNamespace) => {
      if (ts.isModuleDeclaration(node)) {
        if (node.body) visit(node.body, true);
        return;
      }
      if (ts.isModuleBlock(node) || ts.isSourceFile(node)) {
        node.statements.forEach((s) => visit(s, inNamespace));
        return;
      }
      if (ts.isInterfaceDeclaration(node)) {
        if (!inNamespace) {
          configInterfaces++;
          return;
        }
        nestedInterfaces++;
        const members = node.members.map((m) => memberKey(m, sf)).sort();
        const hash = createHash("sha256").update(members.join("\n")).digest("hex").slice(0, 16);
        let rec = emitted.get(hash);
        if (!rec) {
          rec = { groups: new Map(), total: 0, memberCount: members.length, example: `${group}/${node.name.text}` };
          emitted.set(hash, rec);
        }
        rec.total++;
        rec.groups.set(group, (rec.groups.get(group) ?? 0) + 1);
      }
    };
    visit(sf, false);
  }
}

// ------------------------------------------------------- 3. report

let withinGroupDuplicates = 0; // extra copies of a shape that already exists in the SAME group
let crossGroupDuplicates = 0; // extra copies that only exist because another group has the shape
let shapesInMoreThanOneGroup = 0;
let singletonShapes = 0;
const topShapes = [];

for (const [hash, rec] of emitted) {
  const perGroupExtras = [...rec.groups.values()].reduce((s, n) => s + (n - 1), 0);
  withinGroupDuplicates += perGroupExtras;
  crossGroupDuplicates += rec.groups.size - 1;
  if (rec.groups.size > 1) shapesInMoreThanOneGroup++;
  if (rec.total === 1) singletonShapes++;
  topShapes.push({ hash, total: rec.total, groups: rec.groups.size, members: rec.memberCount, example: rec.example });
}
topShapes.sort((a, b) => b.total - a.total);

const schema = countSchemaNestingSites();

const report = {
  schema: schema ?? "schema.json not found — schema-side counts skipped",
  emitted: {
    groups: groups.length,
    configInterfaces,
    nestedStructs: nestedInterfaces,
    distinctShapes: emitted.size,
    singletonShapes,
    duplicateStructs: nestedInterfaces - emitted.size,
    withinGroupDuplicates,
    crossGroupDuplicates,
    shapesInMoreThanOneGroup,
  },
  topShapes: topShapes.slice(0, 15),
};

console.log(JSON.stringify(report, null, 2));
if (jsonOut) writeFileSync(jsonOut, JSON.stringify(report, null, 2) + "\n");
