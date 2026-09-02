// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The project's own `package.json`: `@cdktn/provider-aws` becomes `@cdktn/aws`, in EVERY dependency
 * block that declared it, keeping the key order the file already had (npm and pnpm both
 * rewrite these files, and a gratuitous reorder makes the migration diff unreadable).
 */
import * as fs from "node:fs";
import { CLASSIC_PACKAGE, TARGET_PACKAGE, TARGET_RANGE } from "./map";

const BLOCKS = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"] as const;

/** One dependency block that declared the classic package. A library declares two. */
export interface ManifestChange {
  readonly file: string;
  readonly block: string;
  readonly from: string;
  /** the classic dependency was kept beside the new one, because something is still unmapped */
  readonly keptClassic: boolean;
}

export interface ManifestResult {
  readonly file: string;
  readonly before: string;
  readonly after: string;
  readonly changes: readonly ManifestChange[];
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

  const changes: ManifestChange[] = [];
  for (const block of declaring) {
    const deps = manifest[block] as Record<string, string>;
    const from = deps[CLASSIC_PACKAGE];
    const rebuilt: Record<string, string> = {};
    for (const [name, range] of Object.entries(deps)) {
      if (name === CLASSIC_PACKAGE) {
        rebuilt[TARGET_PACKAGE] = TARGET_RANGE;
        if (keepClassic) rebuilt[name] = range;
      } else rebuilt[name] = range;
    }
    // Dependency blocks are conventionally sorted; re-sorting only the ones we touched keeps that
    // true without reformatting blocks we did not.
    const sorted: Record<string, string> = {};
    for (const name of Object.keys(rebuilt).sort()) sorted[name] = rebuilt[name];
    manifest[block] = sorted;
    changes.push({ file: relative, block, from, keptClassic: keepClassic });
  }

  const indent = /^\{\n(\s+)"/.exec(before)?.[1].length ?? 2;
  const after = `${JSON.stringify(manifest, null, indent)}\n`;
  return { file: relative, before, after, changes };
}
