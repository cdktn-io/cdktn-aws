import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Repo root, resolved from this file's location (tools/groups-core/src). */
export const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
  "..",
);

export const groupsJsonPath = path.join(repoRoot, "groups.json");
export const mineConfigPath = path.join(repoRoot, "mine-config.json");
export const groupMovesPath = path.join(repoRoot, "docs", "group-moves.md");
export const tmpDir = path.join(repoRoot, "tmp");

/**
 * The 34 MB `terraform providers schema -json` dump is never committed, so its
 * location is resolved rather than assumed:
 *   1. $CDKTN_AWS_SCHEMA
 *   2. <repo>/schemas/schema.json          (the documented local drop point)
 *   3. ../cdktn-grouped-resources/schemas/schema.json  (sibling PoC's copy)
 */
export function resolveSchemaPath(): string {
  const candidates = [
    process.env.CDKTN_AWS_SCHEMA,
    path.join(repoRoot, "schemas", "schema.json"),
    path.resolve(repoRoot, "..", "cdktn-grouped-resources", "schemas", "schema.json"),
  ].filter((p): p is string => Boolean(p));

  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  throw new Error(
    `No provider schema found. Looked at:\n${candidates.map((c) => `  - ${c}`).join("\n")}\n` +
      `Set $CDKTN_AWS_SCHEMA or drop the dump at schemas/schema.json ` +
      `(terraform providers schema -json > schemas/schema.json against the pinned provider version).`,
  );
}
