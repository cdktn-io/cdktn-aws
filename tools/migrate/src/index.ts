// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * `@cdktn/aws-migrate ts` — the whole run, from a tsconfig or a set of globs to a diff, a report
 * and (with `--write`) the rewritten files.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { Project } from "ts-morph";
import { unifiedDiff } from "./diff";
import { ManifestChange, ManifestResult, migrateManifest } from "./manifest";
import { SymbolIndex, buildSymbolIndex, readNamingMap } from "./map";
import { Report, renderReport, unmappedOf } from "./report";
import { FileResult, migrateProject } from "./rewrite";

export * from "./map";
export * from "./report";
export * from "./rewrite";
export { unifiedDiff } from "./diff";
export { migrateManifest } from "./manifest";

export interface RunOptions {
  /** a tsconfig.json to take the file set (and the compiler options) from */
  readonly tsconfig?: string;
  /** explicit files, when there is no tsconfig to point at */
  readonly files?: readonly string[];
  readonly root: string;
  readonly write: boolean;
  readonly index?: SymbolIndex;
}

export interface RunResult extends Report {
  readonly diff: string;
}

/**
 * The project's `package.json`s: the one beside the tsconfig, and the root's. Not a recursive
 * search — a migration that rewrote a dependency inside `node_modules` would be a bug, not a
 * feature.
 */
function manifestsFor(options: RunOptions): string[] {
  const dirs = new Set([options.root, options.tsconfig ? path.dirname(options.tsconfig) : options.root]);
  return [...dirs]
    .map((d) => path.join(d, "package.json"))
    .filter((f) => fs.existsSync(f))
    .sort();
}

export function run(options: RunOptions): RunResult {
  const index = options.index ?? buildSymbolIndex(readNamingMap());
  const project = options.tsconfig
    ? new Project({ tsConfigFilePath: options.tsconfig })
    : new Project({ compilerOptions: { allowJs: true } });
  if (!options.tsconfig) {
    for (const glob of options.files ?? []) project.addSourceFilesAtPaths(glob);
  }

  const relative = (absolute: string) => path.relative(options.root, absolute) || absolute;
  const files: FileResult[] = migrateProject({ project, index, relative });

  // A file that kept a residual classic import still needs the classic dependency to install, so
  // the manifest adds `@cdktn/aws` beside it rather than replacing it until the run is clean.
  const keepClassic = files.some((f) => f.unmapped.length > 0);
  const rewritten: ManifestResult[] = manifestsFor(options)
    .map((f) => migrateManifest(f, relative(f), keepClassic))
    .filter((m): m is ManifestResult => m !== undefined);
  // One report row per (file, block); one diff and one write per file.
  const manifests: ManifestChange[] = rewritten.flatMap((m) => m.changes);
  // A manifest this run refuses to touch (a pre-existing `@cdktn/aws` range it will not guess at)
  // reports like an unmapped symbol does, which is what makes it a non-zero exit.
  const manifestFindings = rewritten.flatMap((m) => m.unmapped);

  const diff = [
    ...files.map((f) => unifiedDiff(f.file, f.before, f.after)),
    ...rewritten.map((m) => unifiedDiff(m.file, m.before, m.after)),
  ]
    .filter(Boolean)
    .join("");

  if (options.write) {
    for (const f of files) {
      if (f.before !== f.after) fs.writeFileSync(path.resolve(options.root, f.file), f.after);
    }
    for (const m of rewritten) fs.writeFileSync(path.resolve(options.root, m.file), m.after);
  }

  return { files, manifests, manifestFindings, wrote: options.write, diff };
}

export function reportOf(result: RunResult): string {
  return renderReport(result);
}

export function unmappedCount(result: RunResult): number {
  return unmappedOf(result).length;
}
