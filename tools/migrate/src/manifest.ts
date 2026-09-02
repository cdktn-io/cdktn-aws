// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The project's own `package.json`: `@cdktn/provider-aws` becomes `@cdktn/aws`, in whichever
 * dependency block declared it, keeping the key order the file already had (npm and pnpm both
 * rewrite these files, and a gratuitous reorder makes the migration diff unreadable).
 */
import * as fs from "node:fs";
import { CLASSIC_PACKAGE, TARGET_PACKAGE, TARGET_RANGE } from "./map";

const BLOCKS = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"] as const;

export interface ManifestChange {
  readonly file: string;
  readonly block: string;
  readonly from: string;
  readonly before: string;
  readonly after: string;
}

export function migrateManifest(file: string, relative: string): ManifestChange | undefined {
  const before = fs.readFileSync(file, "utf-8");
  const manifest = JSON.parse(before) as Record<string, Record<string, string> | unknown>;
  const block = BLOCKS.find((b) => {
    const deps = manifest[b];
    return deps && typeof deps === "object" && CLASSIC_PACKAGE in (deps as Record<string, string>);
  });
  if (!block) return undefined;

  const deps = manifest[block] as Record<string, string>;
  const from = deps[CLASSIC_PACKAGE];
  const rebuilt: Record<string, string> = {};
  for (const [name, range] of Object.entries(deps)) {
    if (name === CLASSIC_PACKAGE) rebuilt[TARGET_PACKAGE] = TARGET_RANGE;
    else rebuilt[name] = range;
  }
  // Dependency blocks are conventionally sorted; re-sorting only the one we touched keeps that
  // true without reformatting blocks we did not.
  const sorted: Record<string, string> = {};
  for (const name of Object.keys(rebuilt).sort()) sorted[name] = rebuilt[name];
  manifest[block] = sorted;

  const indent = /^\{\n(\s+)"/.exec(before)?.[1].length ?? 2;
  const after = `${JSON.stringify(manifest, null, indent)}\n`;
  return { file: relative, block, from, before, after };
}
