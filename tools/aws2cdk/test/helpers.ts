// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/** Shared plumbing for the aws2cdk contract tests. */
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { generate, GenerateResult } from "../src/generate";
import { readGroups, GroupsFile } from "../src/groups";

export const fixtureDir = path.join(__dirname, "fixtures");
export const miniSchemaPath = path.join(fixtureDir, "mini-schema.json");
export const miniGroupsPath = path.join(fixtureDir, "mini-groups.json");

export const FIXTURE_GROUPS = ["elb", "lambda", "provider"];

export function miniSchema(): any {
  return JSON.parse(fs.readFileSync(miniSchemaPath, "utf-8"));
}

export function miniGroups(): GroupsFile {
  return readGroups(miniGroupsPath);
}

export function tmpDir(prefix: string): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

export function emit(schema: any = miniSchema(), groups: GroupsFile = miniGroups()) {
  const outDir = tmpDir("aws2cdk-");
  const result = generate({ outDir, schema, groups, slugs: FIXTURE_GROUPS });
  return { outDir, result };
}

/** Every file below `dir`, relative, POSIX separators, sorted. */
export function listFiles(dir: string): string[] {
  const out: string[] = [];
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else out.push(path.relative(dir, p).split(path.sep).join("/"));
    }
  };
  walk(dir);
  return out.sort();
}

export function fileBytes(dir: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const rel of listFiles(dir)) map[rel] = fs.readFileSync(path.join(dir, rel), "utf-8");
  return map;
}

/**
 * A deterministic, seeded reordering of the schema's object keys. JSON object key order is an
 * accident of how the provider serialized its schema.
 *
 * Two scopes, because they support two different claims:
 *
 *  - `"entries"` reorders only the three schema-entry maps (`resource_schemas` etc.). Emitted
 *    FILES must then be byte-identical: which resource is parsed first may not influence any
 *    other resource, which is precisely the cross-resource dedup state the vendored parser has
 *    and the grouped one deliberately does not.
 *  - `"deep"` additionally reorders every block's `attributes` and `block_types`, recursively.
 *    That legitimately reorders the emitted MEMBERS (upstream emits attributes in schema order),
 *    so the claim it supports is the naming one: the path -> nested-type-name mapping, and hence
 *    the set of emitted type names, must not move. This is the order-independence that replaces
 *    cdktn's first-seen `uniqueClassName`.
 */
export function shuffleSchemaKeys(schema: any, scope: "entries" | "deep" = "deep", seed = 1337): any {
  let state = seed >>> 0;
  const next = () => {
    // xorshift32 — tiny, seeded, and identical on every platform.
    state ^= state << 13;
    state >>>= 0;
    state ^= state >>> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 0x100000000;
  };
  const shuffleObject = (obj: any) => {
    const keys = Object.keys(obj);
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(next() * (i + 1));
      [keys[i], keys[j]] = [keys[j], keys[i]];
    }
    const out: Record<string, unknown> = {};
    for (const k of keys) out[k] = obj[k];
    return out;
  };
  const walkBlock = (block: any): any => {
    const out: any = { ...block };
    if (out.attributes) out.attributes = shuffleObject(out.attributes);
    if (out.block_types) {
      const shuffled = shuffleObject(out.block_types);
      for (const k of Object.keys(shuffled)) {
        shuffled[k] = { ...(shuffled[k] as any), block: walkBlock((shuffled[k] as any).block) };
      }
      out.block_types = shuffled;
    }
    return out;
  };

  const deep = scope === "deep";
  const copy = JSON.parse(JSON.stringify(schema));
  for (const fqpn of Object.keys(copy.provider_schemas)) {
    const provider = copy.provider_schemas[fqpn];
    if (deep && provider.provider) {
      provider.provider = { ...provider.provider, block: walkBlock(provider.provider.block) };
    }
    for (const key of ["resource_schemas", "data_source_schemas", "ephemeral_resource_schemas"]) {
      if (!provider[key]) continue;
      const shuffled = shuffleObject(provider[key]);
      if (deep) {
        for (const name of Object.keys(shuffled)) {
          shuffled[name] = { ...(shuffled[name] as any), block: walkBlock((shuffled[name] as any).block) };
        }
      }
      provider[key] = shuffled;
    }
  }
  return copy;
}

/** Every `export interface|class Xyz` name declared inside a file's `export namespace` block. */
export function namespaceMembers(text: string): string[] {
  const start = text.indexOf("\nexport namespace ");
  if (start < 0) return [];
  return [...text.slice(start).matchAll(/^export (?:interface|class) ([A-Za-z0-9_]+)/gm)]
    .map((m) => m[1])
    .sort();
}

/** Every top-level `export function|class|interface|namespace Xyz` name in a file. */
export function topLevelExports(text: string): { kind: string; name: string }[] {
  const nsStart = text.indexOf("\nexport namespace ");
  const head = nsStart < 0 ? text : text.slice(0, nsStart);
  return [...head.matchAll(/^export (function|class|interface) ([A-Za-z0-9_]+)/gm)].map((m) => ({
    kind: m[1],
    name: m[2],
  }));
}

export type { GenerateResult };
