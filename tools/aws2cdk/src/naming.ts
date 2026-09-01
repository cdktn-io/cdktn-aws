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
 * Inserted at the class/struct boundary of a mapper function name when, and only when, the plain
 * concatenation would collide — see `mapperPrefixesForGroup`.
 */
export const MAPPER_DISAMBIGUATOR = "Mapper";

export interface MapperNamingEntry {
  readonly className: string;
  /** the resource's already-resolved nested-type names (each ending in `Property`) */
  readonly structNames: readonly string[];
}

/**
 * The PascalCase mapper-name prefix for every resource in ONE group, keyed by class name.
 *
 * Mapper functions are module-level (jsii ignores functions, so they cannot live in the merged
 * namespace) and the group barrel re-exports every file with `export *`, which makes their names a
 * GROUP-wide flat namespace. M1 prefixed each with its owning class name and asserted that was
 * enough. At 257-group scale it is not: string concatenation is not injective when one class name
 * is a prefix of another. Two real cases in aws 6.62.0 —
 *
 *     AwsWafv2WebAcl  + RuleActionAllowProperty  ┐ both spell
 *     AwsWafv2WebAclRule  + ActionAllowProperty  ┘ awsWafv2WebAclRuleActionAllowPropertyToTerraform
 *     AwsS3Bucket + ObjectLockConfigurationRuleProperty ┐ both spell
 *     AwsS3BucketObjectLockConfiguration + RuleProperty ┘ awsS3Bucket…RulePropertyToTerraform
 *
 * — 42 duplicate exports in `waf` and `s3`, which `tsc` reports as TS2308 on the barrel and which
 * would otherwise let one mapper silently shadow another.
 *
 * The fallback: every class in a colliding cluster gets `Mapper` inserted at the boundary
 * (`awsWafv2WebAclMapperRuleActionAllowPropertyToTerraform`). It is applied to the whole cluster,
 * not just to a "loser", so the result does not depend on iteration order; a class not in any
 * cluster keeps the plain prefix, which is why the three M1 groups emit byte-identically to
 * before. The disambiguator is alphanumeric, so `NAME_GRAMMAR.mapperFunction` still holds.
 *
 * A residual collision after the rewrite would need a class name containing `Mapper` at exactly
 * the splice point; that is asserted against rather than assumed, and generation aborts loudly if
 * it ever happens (same convention as the model's collision asserts).
 */
export function mapperPrefixesForGroup(
  entries: readonly MapperNamingEntry[],
): Record<string, string> {
  const prefixes: Record<string, string> = {};
  for (const e of entries) prefixes[e.className] = e.className;

  // Appending the disambiguator can, in principle, walk one class's names onto a *third* class's
  // (a class name that already ends in `…Mapper<leaf>`). So it is applied to a fixed point rather
  // than once: each round appends another `Mapper` to whichever classes are still in conflict.
  // Every round strictly grows the prefixes of the conflicting classes only, so it terminates; the
  // bound is a guard against a pathological input, not an expected outcome — no aws 6.62.0 group
  // needs more than one round.
  for (let round = 0; round < MAX_MAPPER_DISAMBIGUATION_ROUNDS; round++) {
    const conflicted = conflictedClasses(entries, prefixes);
    if (conflicted.size === 0) break;
    for (const cls of conflicted) prefixes[cls] = `${prefixes[cls]}${MAPPER_DISAMBIGUATOR}`;
  }

  assertUniqueMapperNames(entries, prefixes);
  return prefixes;
}

const MAX_MAPPER_DISAMBIGUATION_ROUNDS = 8;

/** Class names that share a mapper name with some *other* class under the current prefixes. */
function conflictedClasses(
  entries: readonly MapperNamingEntry[],
  prefixes: Record<string, string>,
): Set<string> {
  const owners = new Map<string, Set<string>>();
  for (const e of entries) {
    for (const struct of e.structNames) {
      const key = collisionKey(`${downcaseFirst(prefixes[e.className])}${struct}`);
      const set = owners.get(key);
      if (set) set.add(e.className);
      else owners.set(key, new Set([e.className]));
    }
  }
  const conflicted = new Set<string>();
  for (const set of owners.values()) {
    if (set.size > 1) for (const cls of [...set].sort()) conflicted.add(cls);
  }
  return conflicted;
}

function assertUniqueMapperNames(
  entries: readonly MapperNamingEntry[],
  prefixes: Record<string, string>,
): void {
  const seen = new Map<string, string>();
  const collisions: string[] = [];
  for (const e of [...entries].sort((a, b) => (a.className < b.className ? -1 : 1))) {
    for (const struct of [...e.structNames].sort()) {
      const name = `${downcaseFirst(prefixes[e.className])}${struct}`;
      const key = collisionKey(name);
      const previous = seen.get(key);
      if (previous !== undefined && previous !== e.className) {
        collisions.push(`${name}: ${previous} + ${e.className}`);
      } else {
        seen.set(key, e.className);
      }
    }
  }
  if (collisions.length > 0) {
    throw new Error(
      `mapper function name collisions that the "${MAPPER_DISAMBIGUATOR}" fallback did not ` +
        `resolve:\n  ${collisions.join("\n  ")}`,
    );
  }
}

function downcaseFirst(s: string): string {
  return s.length === 0 ? s : `${s.charAt(0).toLowerCase()}${s.slice(1)}`;
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
