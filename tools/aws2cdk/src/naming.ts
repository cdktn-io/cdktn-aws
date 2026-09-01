// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Naming rules for the grouped aws bindings. Pure, order-independent functions — no filesystem or
 * schema access here.
 *
 * Forked from `cdktn-awscc`'s `tools/awscc2cdk/src/naming.ts`. The collision algorithm
 * (`propertyTypeNamesForResource`, `collisionKey`, the union-find clustering, the sorted numeric
 * last resort) is kept as-is, including its case-insensitive comparison — that rule exists because
 * jsii-pacmak's Go emitter writes one file per type and `go build` rejects a package whose file
 * names differ only in case, which is just as true here.
 *
 * Everything CloudFormation-shaped is gone: no `Cc` prefix, no definition-name recovery, no
 * `dedupeDefinitionNames` (there are no recovered names left to deduplicate), no aws-cdk-lib scope
 * map. cdktn-aws names classes off the FULL terraform type — provider prefix kept, so
 * `aws_lambda_function` is `AwsLambdaFunction`, not `AwsFunction` — and nested types off the
 * terraform block/attribute leaf name, which aws (unlike awscc) actually has.
 */
import { toPascalCase } from "codemaker";

/**
 * `aws_instance` -> `AwsInstance`; `aws_lambda_function` -> `AwsLambdaFunction`;
 * `aws_vpc` -> `AwsVpc`. Data sources reach this as the vendored parser spells them —
 * `data_aws_vpc` -> `DataAwsVpc` — and ephemeral resources as `ephemeral_aws_...`.
 *
 * `toPascalCase` is codemaker's, the same one the vendored parser uses for its own class names, so
 * a given terraform type PascalCases identically in both worlds.
 */
export function classNameForTerraformType(parserBaseName: string): string {
  return ensureIdentifierStart(toPascalCase(parserBaseName));
}

/** Classic cdktn spelling: the class name + `Config` (never `Props` — see docs/curation.md). */
export function configInterfaceName(className: string): string {
  return `${className}Config`;
}

/** `AwsVpc` -> `aws-vpc`, `AwsDbInstance` -> `aws-db-instance`, `DataAwsVpc` -> `data-aws-vpc`. */
export function fileNameFor(cls: string): string {
  const withAcronymBoundary = cls.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");
  return withAcronymBoundary.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Prefixed when a PascalCased name would start with a digit: `'3d_model' -> 'N3dModel'`. A
 * `_`-prefixed name is a legal TypeScript identifier but not a legal jsii *type* name (jsii
 * requires an uppercase first letter). `N` (mnemonic: numeric) is deterministic, one character,
 * and keeps the rest of the name intact.
 */
export const DIGIT_LEAD_PREFIX = "N";

const DIGIT_START = /^[0-9]/;

function ensureIdentifierStart(s: string): string {
  if (s.length === 0) return s;
  if (DIGIT_START.test(s)) return `${DIGIT_LEAD_PREFIX}${s}`;
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

/** Splits on any run of non-identifier characters, capitalising the first letter of each piece. */
function pascalCaseWords(s: string): string {
  const parts = s.split(/[^A-Za-z0-9]+/).filter(Boolean);
  return ensureIdentifierStart(parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(""));
}

/** All path segments PascalCased individually and concatenated — the "full path" fallback name. */
function fullPathBase(path: readonly string[]): string {
  return ensureIdentifierStart(path.map(pascalCaseWords).join(""));
}

/**
 * A nested type's preferred (short) name: PascalCase of the *leaf* path segment + `Property`.
 * aws block types and nested attributes have real names (`ebs_block_device`, `filter`), so the
 * leaf is meaningful here in a way it never was for awscc's anonymous CFN-derived nesting.
 */
export function propertyTypeName(path: readonly string[]): string {
  const leaf = path.length > 0 ? path[path.length - 1] : "";
  return `${pascalCaseWords(leaf)}Property`;
}

export interface PropertyTypePath {
  /** terraform attribute path below the resource root, e.g. ['ebs_block_device'] */
  readonly path: readonly string[];
}

interface ResolvedEntry {
  readonly key: string;
  readonly path: readonly string[];
  /** the short, preferred leaf-derived name */
  readonly short: string;
  /** the full-path name */
  readonly full: string;
}

/**
 * Collision-detection key. Names are compared **case-insensitively**: jsii-pacmak's Go emitter
 * writes one file per type, `<Class>_<NestedType>.go`, and `go build` rejects a package whose file
 * names differ only in case ("case-insensitive file name collision") — as does the C# compiler for
 * its PascalCase directories. The vendored cdktn parser's `uniqueBaseName` lowercases before
 * comparing for exactly this reason.
 */
function collisionKey(name: string): string {
  return name.toLowerCase();
}

/**
 * All nested-type names of ONE resource at once, keyed by `path.join('.')`. Deterministic and
 * order-independent — the replacement for cdktn's order-dependent `uniqueClassName`.
 *
 * Two entries are put in the same collision cluster if EITHER their short names collide or their
 * full-path names collide (the latter catches paths only distinguishable in their un-PascalCased,
 * segment-boundary form, e.g. `['a_b','c']` vs `['a','b_c']`). Every entry in a colliding cluster
 * is re-derived from its full path. If names still collide after that, the entries are sorted by
 * path key and `2`, `3`, … are appended in that order — never first-seen order, so the result
 * never depends on input order.
 *
 * That last step is a last-resort net, not a routine outcome: a `2` suffix satisfies no
 * `NAME_GRAMMAR` pattern (they all end at `Property`). It is reachable only for two entries whose
 * full paths PascalCase to the same name. The contract tests assert the whole emitted tree stays
 * inside the grammar.
 */
export function propertyTypeNamesForResource(
  entries: readonly PropertyTypePath[],
): Record<string, string> {
  const items: ResolvedEntry[] = entries.map((e) => ({
    key: e.path.join("."),
    path: e.path,
    short: propertyTypeName(e.path),
    full: `${fullPathBase(e.path)}Property`,
  }));

  // Union-find over "collides via short name" OR "collides via full-path name".
  const parent = items.map((_, i) => i);
  function find(i: number): number {
    while (parent[i] !== i) {
      parent[i] = parent[parent[i]];
      i = parent[i];
    }
    return i;
  }
  function union(a: number, b: number): void {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  }
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (
        collisionKey(items[i].short) === collisionKey(items[j].short) ||
        collisionKey(items[i].full) === collisionKey(items[j].full)
      ) {
        union(i, j);
      }
    }
  }

  const clusters = new Map<number, ResolvedEntry[]>();
  items.forEach((item, i) => {
    const root = find(i);
    const list = clusters.get(root);
    if (list) list.push(item);
    else clusters.set(root, [item]);
  });

  const result: Record<string, string> = {};
  // Every entry's own `key` (never Map/array iteration order) drives what ends up in `result`, and
  // within-cluster tie-breaks are sorted by key below — so the order clusters are visited in here
  // cannot leak into the output.
  for (const cluster of clusters.values()) {
    if (cluster.length === 1) {
      result[cluster[0].key] = cluster[0].short;
      continue;
    }
    const assigned = cluster.map((item) => ({ key: item.key, name: item.full }));
    const bySubname = new Map<string, typeof assigned>();
    for (const a of assigned) {
      const list = bySubname.get(collisionKey(a.name));
      if (list) list.push(a);
      else bySubname.set(collisionKey(a.name), [a]);
    }
    for (const subgroup of bySubname.values()) {
      if (subgroup.length === 1) {
        result[subgroup[0].key] = subgroup[0].name;
        continue;
      }
      const sorted = [...subgroup].sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
      sorted.forEach((entry, idx) => {
        result[entry.key] = idx === 0 ? entry.name : `${entry.name}${idx + 1}`;
      });
    }
  }

  return result;
}

/**
 * The grammar every emitted exported name must match. Asserted over the whole emitted tree by the
 * contract tests — this is what makes the "last-resort numeric suffix" claim above checkable
 * rather than aspirational.
 */
export const NAME_GRAMMAR = {
  resourceClass: /^(Aws|DataAws|EphemeralAws)[A-Z][A-Za-z0-9]*$/,
  configInterface: /^(Aws|DataAws|EphemeralAws)[A-Z][A-Za-z0-9]*Config$/,
  propertyInterface: /^[A-Z][A-Za-z0-9]*Property$/,
  propertyOutputReference: /^[A-Z][A-Za-z0-9]*PropertyOutputReference$/,
  propertyList: /^[A-Z][A-Za-z0-9]*PropertyList$/,
  propertyMap: /^[A-Z][A-Za-z0-9]*PropertyMap$/,
  mapperFunction: /^[a-z][A-Za-z0-9]*To(Hcl)?Terraform$/,
} as const;
