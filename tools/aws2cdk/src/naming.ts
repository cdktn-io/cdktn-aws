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
 * Everything CloudFormation-shaped is gone: no definition-name recovery, no
 * `dedupeDefinitionNames` (there are no recovered names left to deduplicate), no aws-cdk-lib scope
 * map. Nested types are named off the terraform block/attribute leaf name, which aws (unlike awscc)
 * actually has.
 *
 * ## The class-name rule (M6, docs/m6-tf-naming.md)
 *
 * `Tf` is the L1/source-layer indicator, the analogue of aws-cdk-lib's `Cfn`: it marks a class
 * generated 1:1 from a terraform resource type, and keeps the bare name (`s3.Bucket`) free for a
 * future L2. The service group already names the service, so the group's own service tokens are
 * stripped from the stem — `awss3.TfBucket`, not `awss3.TfS3Bucket`. Which tokens those are is not
 * inferred here: it is the curated `stripPrefixes` list groups.json carries per group.
 *
 * The 0.1.x rule (PascalCase of the full terraform type, `AwsLambdaFunction`) survives as
 * `legacyClassName`, frozen: it is what `naming-map.json` records as the `previous` name, and the
 * migration tool's only definition of what a 0.1.x symbol was called.
 */
import { toPascalCase } from "codemaker";

/** The terraform provider whose types are bound here; its prefix is never part of a stem. */
const PROVIDER_NAME = "aws";

/** The L1 marker every generated resource/data-source/ephemeral class name starts with. */
export const CLASS_PREFIX = "Tf";

/** How the vendored parser spells each surface, and what each contributes to a class name. */
export type EntrySurface = "resource" | "data_source" | "ephemeral_resource" | "provider";

const SURFACE_MARKER: Record<"data_source" | "ephemeral_resource", string> = {
  data_source: "data_",
  ephemeral_resource: "ephemeral_",
};

/**
 * The surface marker sits at position 0: `DataTfBucket`, `EphemeralTfInvocation`. So anything
 * starting with `Tf` is a resource — 23 resources whose terraform type leads with a `data_`/
 * `database` token would otherwise read as data sources — and cdktn's leading `Data…` shape
 * survives for migrating consumers.
 */
const SURFACE_PREFIX: Record<EntrySurface, string> = {
  resource: "",
  data_source: "Data",
  ephemeral_resource: "Ephemeral",
  provider: "",
};

/**
 * The provider construct is not an L1 resource — it is the thing every L1 resource needs in its
 * stack — so it keeps its 0.1.x names, and they are the one exception to `NAME_GRAMMAR`.
 */
export const PROVIDER_EXPORT_NAMES: readonly string[] = [
  "AwsProvider",
  "AwsProviderConfig",
  "AwsProviderFunctions",
];

export function isProviderExport(name: string): boolean {
  return PROVIDER_EXPORT_NAMES.includes(name);
}

/** What a `stripPrefixes` entry must look like: terraform's own `_`-separated lowercase tokens. */
export const STRIP_PREFIX_PATTERN = /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/;

export interface ClassNameEntry {
  /** the full terraform type as the vendored parser spells it (`data_aws_s3_bucket`) */
  readonly parserType: string;
  /** defaults to what the `data_`/`ephemeral_` marker says; pass it for the provider block */
  readonly surface?: EntrySurface;
  /** the owning group's curated list, from groups.json */
  readonly stripPrefixes: readonly string[];
}

/** `data_aws_s3_bucket` -> `data_source`. The marker is the only signal, exactly as upstream. */
export function surfaceOf(parserType: string): EntrySurface {
  if (parserType.startsWith(SURFACE_MARKER.data_source)) return "data_source";
  if (parserType.startsWith(SURFACE_MARKER.ephemeral_resource)) return "ephemeral_resource";
  return "resource";
}

/** `data_aws_s3_bucket` -> `s3_bucket`: the surface marker and the provider prefix both removed. */
export function rawTypeFor(parserType: string, surface: EntrySurface = surfaceOf(parserType)): string {
  let raw = parserType;
  const marker = surface === "data_source" || surface === "ephemeral_resource" ? SURFACE_MARKER[surface] : "";
  if (marker && raw.startsWith(marker)) raw = raw.slice(marker.length);
  if (raw.startsWith(`${PROVIDER_NAME}_`)) raw = raw.slice(PROVIDER_NAME.length + 1);
  return raw;
}

/**
 * The part of the terraform type the class is named after: the raw type with the group's own
 * service tokens removed.
 *
 * The LONGEST matching prefix wins (ties alphabetical, so the result never depends on the order the
 * curated list happens to be written in): `cloudwatch_logs` lists `[cloudwatch_log, cloudwatch]`
 * so `cloudwatch_log_group` becomes `group` while `cloudwatch_query_definition` becomes
 * `query_definition`.
 *
 * An EXACT match leaves nothing to name the class after (`aws_vpc` in group `vpc`, `aws_lb` in
 * `elb`), so the raw type is kept: `TfVpc`, `TfLb`. That is the one place the stripping backs off.
 */
export function stemFor(raw: string, stripPrefixes: readonly string[]): string {
  const byLongest = [...stripPrefixes].sort((a, b) => b.length - a.length || (a < b ? -1 : a > b ? 1 : 0));
  for (const p of byLongest) {
    if (raw === p) return raw;
    if (raw.startsWith(`${p}_`)) return raw.slice(p.length + 1);
  }
  return raw;
}

/**
 * The class name for one schema entry: the surface marker + `Tf` + PascalCase of the stem.
 *
 * `toPascalCase` is codemaker's, the same one the vendored parser uses for its own class names, so
 * `s3_bucket` and `bucket` PascalCase the same way they always did.
 */
export function classNameForEntry(entry: ClassNameEntry): string {
  const surface = entry.surface ?? surfaceOf(entry.parserType);
  if (surface === "provider") return legacyClassName(entry.parserType);
  // An EMPTY list is a legal, explicit "this group has no service prefix" (the provider's meta data
  // sources): nothing is stripped. A group missing the key entirely is the error, caught where
  // groups.json is read — the naming rule itself has nothing to decide there.
  const stem = stemFor(rawTypeFor(entry.parserType, surface), entry.stripPrefixes);
  return `${SURFACE_PREFIX[surface]}${CLASS_PREFIX}${ensureIdentifierStart(toPascalCase(stem))}`;
}

/**
 * The 0.1.x rule, FROZEN: PascalCase of the full terraform type, provider prefix kept —
 * `aws_lambda_function` -> `AwsLambdaFunction`, `data_aws_vpc` -> `DataAwsVpc`.
 *
 * It has two live jobs and no third: it is the `previous` column of `naming-map.json` (the input of
 * the migration tool), and it is what file names are still derived from. It must not follow any
 * future naming decision.
 */
export function legacyClassName(parserType: string): string {
  return ensureIdentifierStart(toPascalCase(parserType));
}

/**
 * FILE NAMES DO NOT FOLLOW CLASS NAMES. `generated/s3/src/aws-s3-bucket-versioning.ts` is keyed on
 * the terraform type, so the tree layout, the `hashes.json` inputs and the deep-path identity of
 * every generated file stay stable across a rename of what is exported from them.
 */
export function fileNameForTerraformType(parserType: string): string {
  return fileNameFor(legacyClassName(parserType));
}

/**
 * Every class name in ONE group must be unique case-insensitively, across all three surfaces
 * together: jsii-pacmak's Go emitter writes one file per type and `go build` rejects a package
 * whose file names differ only in case (and the C# emitter its PascalCase directories). The pinned
 * schema produces no collision; this exists so a provider bump cannot introduce one silently.
 */
export function assertUniqueClassNames(
  slug: string,
  entries: readonly { readonly parserType: string; readonly className: string }[],
): void {
  const seen = new Map<string, string>();
  const collisions: string[] = [];
  for (const e of [...entries].sort((a, b) => (a.parserType < b.parserType ? -1 : 1))) {
    const key = collisionKey(e.className);
    const previous = seen.get(key);
    if (previous !== undefined) collisions.push(`${e.className}: ${previous} + ${e.parserType}`);
    else seen.set(key, e.parserType);
  }
  if (collisions.length > 0) {
    throw new Error(
      `class name collisions in group "${slug}" — fix its stripPrefixes in groups.json:\n  ` +
        `${collisions.join("\n  ")}`,
    );
  }
}

/** Classic cdktn spelling: the class name + `Config` (never `Props` — see docs/curation.md). */
export function configInterfaceName(className: string): string {
  return `${className}Config`;
}

/**
 * `AwsVpc` -> `aws-vpc`, `AwsDbInstance` -> `aws-db-instance`, `DataAwsVpc` -> `data-aws-vpc`.
 * Fed the LEGACY name of the terraform type, never the emitted class name — see
 * `fileNameForTerraformType`.
 */
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
 *     TfWebAcl  + RuleActionAllowProperty  ┐ both spell
 *     TfWebAclRule  + ActionAllowProperty  ┘ tfWebAclRuleActionAllowPropertyToTerraform
 *     TfBucket + ObjectLockConfigurationRuleProperty ┐ both spell
 *     TfBucketObjectLockConfiguration + RuleProperty ┘ tfBucket…RulePropertyToTerraform
 *
 * — 21 duplicate exports in `waf` and `s3`, which `tsc` reports as TS2308 on the barrel and which
 * would otherwise let one mapper silently shadow another. (Stripping the group prefix did not
 * create this: the same two families collided as `AwsWafv2WebAcl…`/`AwsS3Bucket…` in 0.1.x.)
 *
 * The fallback: every class in a colliding cluster gets `Mapper` inserted at the boundary
 * (`tfWebAclMapperRuleActionAllowPropertyToTerraform`). It is applied to the whole cluster, not
 * just to a "loser", so the result does not depend on iteration order; a class not in any cluster
 * keeps the plain prefix, which is why only `waf` and `s3` are touched at all. The disambiguator is
 * alphanumeric, so `NAME_GRAMMAR.mapperFunction` still holds.
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
 *
 * The provider package's three exports (`PROVIDER_EXPORT_NAMES`) are outside it by decision, not by
 * accident, so the assert sites let those through explicitly.
 */
export const NAME_GRAMMAR = {
  resourceClass: /^(Data|Ephemeral)?Tf[A-Z][A-Za-z0-9]*$/,
  configInterface: /^(Data|Ephemeral)?Tf[A-Z][A-Za-z0-9]*Config$/,
  propertyInterface: /^[A-Z][A-Za-z0-9]*Property$/,
  propertyOutputReference: /^[A-Z][A-Za-z0-9]*PropertyOutputReference$/,
  propertyList: /^[A-Z][A-Za-z0-9]*PropertyList$/,
  propertyMap: /^[A-Z][A-Za-z0-9]*PropertyMap$/,
  mapperFunction: /^[a-z][A-Za-z0-9]*To(Hcl)?Terraform$/,
} as const;
