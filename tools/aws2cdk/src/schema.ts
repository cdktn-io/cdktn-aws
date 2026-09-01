// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Schema loading for aws2cdk. The 34 MB `terraform providers schema -json` dump is never
 * committed, so its path is resolved the same way `tools/groups-core` resolves it
 * ($CDKTN_AWS_SCHEMA, then schemas/schema.json, then the sibling PoC's copy) — duplicated here
 * rather than imported because groups-core is an ESM package and this generator is CommonJS
 * (the vendored cdk-terrain machinery has extensionless relative imports).
 */
import { existsSync, readFileSync } from "node:fs";
import * as path from "node:path";

export const AWS_FQPN = "registry.terraform.io/hashicorp/aws";

/** Repo root, from tools/aws2cdk/src. */
export const repoRoot = path.resolve(__dirname, "..", "..", "..");

export function resolveSchemaPath(): string {
  const candidates = [
    process.env.CDKTN_AWS_SCHEMA,
    path.join(repoRoot, "schemas", "schema.json"),
    path.resolve(repoRoot, "..", "cdktn-grouped-resources", "schemas", "schema.json"),
  ].filter((p): p is string => Boolean(p));
  for (const c of candidates) if (existsSync(c)) return c;
  throw new Error(
    `No provider schema found. Looked at:\n${candidates.map((c) => `  - ${c}`).join("\n")}`,
  );
}

let cached: any;

/** The whole `terraform providers schema -json` document (all providers). */
export function loadFullSchema(file = resolveSchemaPath()): any {
  if (!cached) cached = JSON.parse(readFileSync(file, "utf-8"));
  return cached;
}

/**
 * The same document narrowed to the `aws` provider alone. The dump in `schemas/` also carries
 * `awscc` (it was produced by a `main.tf` that pins both); every downstream consumer here is
 * aws-only, and the vendored `TerraformProviderGenerator#generateAll` iterates *every* provider
 * in the document, so narrowing at load time is the honest place to do it.
 */
export function loadAwsSchema(file = resolveSchemaPath()): any {
  const full = loadFullSchema(file);
  const provider = full.provider_schemas?.[AWS_FQPN];
  if (!provider) throw new Error(`${file}: no provider_schemas["${AWS_FQPN}"]`);
  return {
    format_version: full.format_version,
    provider_schemas: { [AWS_FQPN]: provider },
    provider_versions: { [AWS_FQPN]: full.provider_versions?.[AWS_FQPN] ?? pinnedProviderVersion() },
  };
}

/**
 * `terraform providers schema -json` does not record the provider version, so the emitted
 * documentation links and `terraformGeneratorMetadata.providerVersion` would silently degrade to
 * "latest". The pin the whole repo already agrees on lives in `schemas/PROVIDER_VERSION` (M0
 * commits it precisely because `schema.json` is gitignored), so it is read from there.
 */
export function pinnedProviderVersion(): string {
  return readFileSync(path.join(repoRoot, "schemas", "PROVIDER_VERSION"), "utf-8").trim();
}
