// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * One in-memory ts-morph project per case. In-memory keeps the tests fast and hermetic, and the
 * rewrite never touches the filesystem itself — `run()` is the only thing that writes.
 */
import * as path from "node:path";
import { Project } from "ts-morph";
import { buildSymbolIndex, readNamingMap } from "../src/map";
import { FileResult, migrateFile } from "../src/rewrite";

/** The real, committed rename table — 2,401 entries and 9,856 nested rows. Built once. */
export const index = buildSymbolIndex(
  readNamingMap(path.resolve(__dirname, "..", "..", "..", "naming-map.json")),
);

export function migrate(source: string, extra: Record<string, string> = {}): FileResult {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { strict: true, skipLibCheck: true },
  });
  for (const [name, text] of Object.entries(extra)) project.createSourceFile(name, text);
  const file = project.createSourceFile("main.ts", source);
  return migrateFile(file, index, "main.ts");
}

/** The rewritten text, with a failed migration surfaced as the assertion rather than as a diff. */
export function migrated(source: string): string {
  const result = migrate(source);
  expect(result.unmapped).toEqual([]);
  return result.after;
}
