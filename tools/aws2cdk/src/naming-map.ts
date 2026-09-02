// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * `naming-map.json` — the rename map from the 0.1.x class names to the M6 `Tf` ones.
 *
 * One entry per generated schema entry, keyed by the surface-marked terraform type (`aws_s3_bucket`
 * and `data_aws_s3_bucket` are two different classes and two different keys). It exists for two
 * readers: the upcoming migration tool, which needs `previous` -> `className` per group, and the
 * reviewer of the rename itself, for whom this file is the whole diff in one place.
 *
 * It is emitted by a FULL `pnpm generate` only — a partial run would drop the other 250-odd groups
 * — and committed, for the same reason `generated/hashes.json` is.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import type { GenerateResult } from "./generate";

export const NAMING_MAP_FILE = "naming-map.json";

export interface NamingMapEntry {
  /** `resource` | `data_source` | `ephemeral_resource` | `provider` */
  readonly surface: string;
  readonly group: string;
  readonly className: string;
  /** the 0.1.x name — `naming.legacyClassName` of the same key */
  readonly previous: string;
}

export type NamingMap = Record<string, NamingMapEntry>;

export function buildNamingMap(result: GenerateResult): NamingMap {
  const rows = result.groups.flatMap((g) =>
    g.entries.map((e) => ({
      key: e.parserType,
      value: {
        surface: e.schemaType,
        group: g.slug,
        className: e.className,
        previous: e.previousClassName,
      },
    })),
  );
  const out: NamingMap = {};
  for (const row of rows.sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0))) {
    out[row.key] = row.value;
  }
  return out;
}

export function writeNamingMap(dir: string, map: NamingMap): string {
  const file = path.join(dir, NAMING_MAP_FILE);
  fs.writeFileSync(file, `${JSON.stringify(map, null, 2)}\n`);
  return file;
}
