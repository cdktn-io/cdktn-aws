// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The project's own `package.json`: `@cdktn/provider-aws` becomes `@cdktn/aws`, in EVERY dependency
 * block that declared it.
 *
 * A touched block is rebuilt from a sorted key list, so what comes out cannot depend on the order
 * the file happened to have (dependency blocks are conventionally sorted anyway); blocks this run
 * does not touch keep their own order and formatting, because npm and pnpm both rewrite these files
 * and a gratuitous reorder makes the migration diff unreadable.
 */
import * as fs from "node:fs";
import { CLASSIC_PACKAGE, TARGET_PACKAGE, TARGET_RANGE } from "./map";
import { Unmapped } from "./rewrite";

const BLOCKS = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"] as const;

/** One dependency block that declared the classic package. A library declares two. */
export interface ManifestChange {
  readonly file: string;
  readonly block: string;
  readonly from: string;
  /** the `@cdktn/aws` range this block actually ends up with — what the report prints */
  readonly to: string;
  /** the classic dependency was kept beside the new one, because something is still unmapped */
  readonly keptClassic: boolean;
}

export interface ManifestResult {
  readonly file: string;
  readonly before: string;
  readonly after: string;
  readonly changes: readonly ManifestChange[];
  /** a pre-existing `@cdktn/aws` this run refuses to overwrite — reported, and a non-zero exit */
  readonly unmapped: readonly Unmapped[];
}

/**
 * Does a range already in the manifest cover what `TARGET_RANGE` asks for?
 *
 * Deliberately narrow, and deliberately without `semver`: the tool ships two runtime dependencies
 * and a range predicate is not worth a third, and a wrong "yes" here silently pins a consumer to a
 * library version the rewritten source does not compile against. So the answer is yes only for an
 * exact, caret or tilde range on the SAME major.minor as `TARGET_RANGE`, at or above its patch —
 * which on a `0.x` target is exactly the set `TARGET_RANGE` itself allows. Everything else, unions
 * and comparators included, is a conflict a human resolves.
 */
export function satisfiesTarget(range: string, target: string = TARGET_RANGE): boolean {
  const parse = (r: string) => /^([\^~=]?)(\d+)\.(\d+)\.(\d+)$/.exec(r.trim());
  const wanted = parse(target);
  const have = parse(range);
  if (!wanted || !have) return false;
  return (
    have[2] === wanted[2] && have[3] === wanted[3] && Number(have[4]) >= Number(wanted[4])
  );
}

/** The 1-based line a key is declared on, so a manifest finding points at something. */
function lineOfKey(source: string, key: string): number {
  const lines = source.split("\n");
  const index = lines.findIndex((l) => l.includes(`"${key}"`));
  return index === -1 ? 1 : index + 1;
}

/**
 * `keepClassic` when the run left symbols unmapped: those files keep a residual
 * `@cdktn/provider-aws` import, and a manifest that has dropped the dependency would not install.
 */
export function migrateManifest(
  file: string,
  relative: string,
  keepClassic = false,
): ManifestResult | undefined {
  const before = fs.readFileSync(file, "utf-8");
  const manifest = JSON.parse(before) as Record<string, Record<string, string> | unknown>;
  // EVERY block, not the first: a library declaring the classic package in both `dependencies` and
  // `peerDependencies` would otherwise peer-depend on the library it just migrated off, at exit 0.
  const declaring = BLOCKS.filter((b) => {
    const deps = manifest[b];
    return deps && typeof deps === "object" && CLASSIC_PACKAGE in (deps as Record<string, string>);
  });
  if (declaring.length === 0) return undefined;

  // A partially migrated manifest already names the target. Which range wins used to fall out of
  // JSON key order; now an existing range is either kept (it already covers the target) or the whole
  // manifest is left alone for a human — the tool does not get to overwrite an intentional pin.
  const conflicts: Unmapped[] = declaring.flatMap((block) => {
    const existing = (manifest[block] as Record<string, string>)[TARGET_PACKAGE];
    if (existing === undefined || satisfiesTarget(existing)) return [];
    return [
      {
        file: relative,
        line: lineOfKey(before, TARGET_PACKAGE),
        symbol: `${TARGET_PACKAGE} (${block})`,
        reason: `existing ${TARGET_PACKAGE} range ${existing} conflicts with ${TARGET_RANGE}: resolve by hand`,
      },
    ];
  });
  if (conflicts.length > 0) return { file: relative, before, after: before, changes: [], unmapped: conflicts };

  const changes: ManifestChange[] = [];
  for (const block of declaring) {
    const deps = manifest[block] as Record<string, string>;
    const from = deps[CLASSIC_PACKAGE];
    // Decided before the rebuild, from the block as a whole, so the key order cannot reach it.
    const to = deps[TARGET_PACKAGE] ?? TARGET_RANGE;
    const rebuilt: Record<string, string> = {};
    for (const [name, range] of Object.entries(deps)) {
      if (name === CLASSIC_PACKAGE) {
        if (keepClassic) rebuilt[name] = range;
      } else rebuilt[name] = range;
    }
    rebuilt[TARGET_PACKAGE] = to;
    // Dependency blocks are conventionally sorted; re-sorting only the ones we touched keeps that
    // true without reformatting blocks we did not.
    const sorted: Record<string, string> = {};
    for (const name of Object.keys(rebuilt).sort()) sorted[name] = rebuilt[name];
    manifest[block] = sorted;
    changes.push({ file: relative, block, from, to, keptClassic: keepClassic });
  }

  const indent = /^\{\n(\s+)"/.exec(before)?.[1].length ?? 2;
  const after = `${JSON.stringify(manifest, null, indent)}\n`;
  return { file: relative, before, after, changes, unmapped: [] };
}
