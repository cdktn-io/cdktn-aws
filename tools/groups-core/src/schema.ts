import { readFileSync } from "node:fs";
import { SCHEMA_KEY_BY_SURFACE, SURFACES, type SurfaceKind } from "./types.js";
import { resolveSchemaPath } from "./paths.js";

export interface SchemaNames {
  path: string;
  /** provider_schemas key the names were read from. */
  providerKey: string;
  names: Record<SurfaceKind, string[]>;
}

/**
 * Reads the `aws` provider's resource / data-source / ephemeral names out of a
 * `terraform providers schema -json` dump. The dump may also contain `awscc`
 * (the sibling PoC shares one file), so the aws entry is selected explicitly.
 */
export function readSchemaNames(schemaPath = resolveSchemaPath()): SchemaNames {
  const raw = JSON.parse(readFileSync(schemaPath, "utf-8")) as {
    provider_schemas?: Record<string, Record<string, unknown>>;
  };
  const providerSchemas = raw.provider_schemas;
  if (!providerSchemas) {
    throw new Error(`${schemaPath}: no "provider_schemas" key — not a schema -json dump?`);
  }

  const keys = Object.keys(providerSchemas).filter(
    (k) => k.includes("/aws") && !k.includes("awscc"),
  );
  if (keys.length !== 1) {
    throw new Error(
      `${schemaPath}: expected exactly one aws provider entry, found ${keys.length}: ${keys.join(", ")}`,
    );
  }
  const providerKey = keys[0];
  const entry = providerSchemas[providerKey];

  const names = {} as Record<SurfaceKind, string[]>;
  for (const surface of SURFACES) {
    const key = SCHEMA_KEY_BY_SURFACE[surface];
    const block = entry[key] as Record<string, unknown> | undefined;
    if (!block) {
      throw new Error(`${schemaPath}: aws provider entry has no "${key}"`);
    }
    names[surface] = Object.keys(block).sort();
  }

  return { path: schemaPath, providerKey, names };
}
