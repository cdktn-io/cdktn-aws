// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Baseline runner — the *unmodified* vendored cdk-terrain pipeline
 * (`src/vendored/cdktn/provider-generator.ts`) driven over the pinned aws schema, emitting the
 * classic flat, per-resource `providers/aws/<resource>/index.ts` tree.
 *
 * Two jobs:
 *  1. Fork proof (M1 step 1): the vendored machinery compiles and runs against the aws schema
 *     with its output shape unchanged, before any grouping is layered on top.
 *  2. The reference side of acceptance E: for a resource such as `aws_vpc`, this is exactly what
 *     `@cdktn/provider-aws`-style generation produces, so the grouped emitter's mapper bodies and
 *     OutputReference classes can be diffed against it.
 *
 * Usage: tsx bin/baseline.ts <outDir> [resource ...]
 */
import * as fs from "node:fs";
import { CodeMaker } from "codemaker";
import { TerraformProviderGenerator } from "../src/vendored/cdktn/provider-generator";
import { AWS_FQPN, loadAwsSchema } from "../src/schema";

async function main() {
  const [outDir, ...resources] = process.argv.slice(2);
  if (!outDir) throw new Error("usage: baseline.ts <outDir> [resource ...]");

  const schema = loadAwsSchema();
  if (resources.length > 0) {
    const provider = schema.provider_schemas[AWS_FQPN];
    const keep = new Set(resources);
    const filter = (obj: Record<string, unknown> | undefined) =>
      Object.fromEntries(Object.entries(obj ?? {}).filter(([k]) => keep.has(k)));
    provider.resource_schemas = filter(provider.resource_schemas);
    provider.data_source_schemas = filter(provider.data_source_schemas);
    provider.ephemeral_resource_schemas = filter(provider.ephemeral_resource_schemas);
  }

  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const code = new CodeMaker();
  const generator = new TerraformProviderGenerator(code, schema as any);
  generator.generateAll();
  await generator.save(outDir);

  console.log(`baseline: wrote ${outDir}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
