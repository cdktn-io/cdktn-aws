// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The rewrite table, read off the repository's committed `naming-map.json`.
 *
 * The tool guesses nothing. Every symbol it rewrites is one the map names, and the four derived
 * spellings of a nested type (`OutputReference`/`List`/`Map`/… classes and the two mapper
 * functions) are formed by the map's own `nestedSuffixRules` — read from the file rather than
 * restated here, so a change to the rules is a change to one place.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { toCamelCase } from "codemaker";

export const CLASSIC_PACKAGE = "@cdktn/provider-aws";
export const TARGET_PACKAGE = "@cdktn/aws";
/**
 * What `--write` puts in a migrated package.json — and the ONE place the migration's target version
 * is written down.
 *
 * Not derived from this repository's own `package.json`: that version is the NEXT release's, bumped
 * by a release commit on a release branch, while this is what a consumer should install today — the
 * two are legitimately different for the whole of a development cycle, so deriving one from the
 * other would either publish a wrong range or forbid the skew. Everything else that needs it reads
 * it from here, and `map.test.ts` § "the target range" asserts that: the constant is the only
 * spelling in `src/`, and the guide, the tool's README and the worked example's manifest all quote
 * this exact range. Bumping it is therefore a one-line change plus a red suite until the prose and
 * the example catch up.
 */
export const TARGET_RANGE = "^0.2.0";

/** Where a classic symbol lands: the group barrel, and the member path below it. */
export interface Target {
  readonly group: string;
  /** e.g. `TfBucket`, `TfBucketConfig`, `TfBucket.CorsRulePropertyList`, `tfBucketMapper…ToTerraform` */
  readonly member: string;
}

export interface ClassicModule {
  /** the classic source directory, i.e. `@cdktn/provider-aws/lib/<module>` */
  readonly module: string;
  /** the classic barrel's export name for it, i.e. `import { <submodule> } from '@cdktn/provider-aws'` */
  readonly submodule: string;
  readonly symbols: ReadonlyMap<string, Target>;
}

export interface SymbolIndex {
  readonly byModule: ReadonlyMap<string, ClassicModule>;
  readonly bySubmodule: ReadonlyMap<string, ClassicModule>;
  /** every group name the map knows, so the CLI can name the barrel members it will import */
  readonly groups: ReadonlySet<string>;
}

interface NamingMapNested {
  readonly className: string;
  readonly classic: string;
}

interface NamingMapEntry {
  readonly surface: string;
  readonly group: string;
  readonly className: string;
  readonly mapperPrefix?: string;
  readonly classic: {
    readonly module: string;
    readonly className: string;
    /** the Config interface's classic name — recorded, because a dedup suffix can land on it */
    readonly configClassName: string;
  };
  readonly nested?: Record<string, NamingMapNested>;
}

export interface NamingMapFile {
  readonly classicRoots: { readonly npm: string };
  readonly nestedSuffixRules: {
    readonly suffixes: readonly string[];
  };
  readonly entries: Record<string, NamingMapEntry>;
}

/**
 * `AwsProviderFunctions` is the one classic export with no schema entry behind it — provider
 * functions are a provider-scoped surface, not a resource — so it has no map row and is named
 * here. `classic-naming.test.ts` asserts `provider-functions` is the ONLY such submodule, which is
 * what keeps this list from silently needing a second entry.
 */
const EXTRA_MODULES: readonly { module: string; group: string; symbols: readonly string[] }[] = [
  { module: "provider-functions", group: "provider", symbols: ["AwsProviderFunctions"] },
];

const lowerFirst = (s: string): string => `${s.charAt(0).toLowerCase()}${s.slice(1)}`;

/**
 * Finds `naming-map.json`: beside the installed package first (where publishing puts it), then up
 * the tree, which is what makes the tool work from a checkout of this repository.
 */
export function findNamingMap(from: string = __dirname): string {
  for (let dir = from; ; dir = path.dirname(dir)) {
    const candidate = path.join(dir, "naming-map.json");
    if (fs.existsSync(candidate)) return candidate;
    if (path.dirname(dir) === dir) break;
  }
  throw new Error(`no naming-map.json at or above ${from} — the rewrite table is missing`);
}

export function readNamingMap(file: string = findNamingMap()): NamingMapFile {
  return JSON.parse(fs.readFileSync(file, "utf-8")) as NamingMapFile;
}

/**
 * Expands the map into "what does this classic export become".
 *
 * One row per nested struct becomes up to sixteen symbols: the struct interface, its wrapper
 * classes under every suffix the map declares, and its two mapper functions. Wrapper classes the
 * classic library never emitted are harmless here — a consumer cannot be holding a symbol that
 * does not exist, so an unused key is never looked up.
 */
export function buildSymbolIndex(map: NamingMapFile): SymbolIndex {
  const byModule = new Map<string, ClassicModule>();
  const bySubmodule = new Map<string, ClassicModule>();
  const groups = new Set<string>();

  const add = (module: string, symbols: Map<string, Target>) => {
    // The classic barrel's export name for a module is codemaker's camelCase of it — the same
    // function `classic-naming.ts#submoduleForModule` uses, not a dash-eating lookalike:
    // `lexv2models-bot` is `lexv2ModelsBot`, and 60 modules split on that digit boundary.
    const submodule = toCamelCase(module);
    const entry: ClassicModule = { module, submodule, symbols };
    if (byModule.has(module)) throw new Error(`naming map: two entries claim src/${module}`);
    byModule.set(module, entry);
    bySubmodule.set(submodule, entry);
  };

  for (const entry of Object.values(map.entries)) {
    groups.add(entry.group);
    const symbols = new Map<string, Target>();
    const target = (member: string): Target => ({ group: entry.group, member });

    symbols.set(entry.classic.className, target(entry.className));
    symbols.set(entry.classic.configClassName, target(`${entry.className}Config`));

    const mapperPrefix = lowerFirst(entry.mapperPrefix ?? entry.className);
    for (const nested of Object.values(entry.nested ?? {})) {
      for (const suffix of map.nestedSuffixRules.suffixes) {
        symbols.set(
          `${nested.classic}${suffix}`,
          target(`${entry.className}.${nested.className}${suffix}`),
        );
      }
      for (const mapper of ["ToTerraform", "ToHclTerraform"]) {
        symbols.set(
          `${lowerFirst(nested.classic)}${mapper}`,
          target(`${mapperPrefix}${nested.className}${mapper}`),
        );
      }
    }
    add(entry.classic.module, symbols);
  }

  for (const extra of EXTRA_MODULES) {
    groups.add(extra.group);
    add(
      extra.module,
      new Map(extra.symbols.map((s) => [s, { group: extra.group, member: s }] as const)),
    );
  }

  return { byModule, bySubmodule, groups };
}

/** `@cdktn/provider-aws/lib/s3-bucket` -> `s3-bucket`; anything else -> undefined. */
export function classicModuleOfSpecifier(specifier: string): string | undefined {
  if (specifier === CLASSIC_PACKAGE) return undefined;
  if (!specifier.startsWith(`${CLASSIC_PACKAGE}/`)) return undefined;
  const rest = specifier.slice(CLASSIC_PACKAGE.length + 1);
  // Published `@cdktn/provider-aws` puts its compiled submodules under `lib/`; a source checkout
  // (and the docs) also spell it `src/`. Both name the same submodule. A large module's structs are
  // split into an `index-structs/` the module's own index re-exports, so that subpath is the module.
  return rest
    .replace(/^(lib|src)\//, "")
    .replace(/\/index-structs(\/.*)?$/, "")
    .replace(/\/index(\.js|\.ts|\.d\.ts)?$/, "");
}

export function isClassicSpecifier(specifier: string): boolean {
  return specifier === CLASSIC_PACKAGE || specifier.startsWith(`${CLASSIC_PACKAGE}/`);
}
