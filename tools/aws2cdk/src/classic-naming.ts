// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * The `@cdktn/provider-aws` identity of a terraform type — the *classic* per-resource library the
 * unmodified cdk-terrain pipeline generates, which is what a consumer migrating to `@cdktn/aws`
 * 0.2.0 is coming from.
 *
 * Nothing here re-implements a naming rule. The names are read off the models the VENDORED parser
 * (`src/vendored/cdktn/resource-parser.ts`) produces, driven in the same order `bin/baseline.ts`
 * drives it, because the classic rule is not a pure function of one type: `uniqueClassName` and
 * `uniqueBaseName` carry state across the whole schema, and every nested struct competes for the
 * same class-name pool. That is how `aws_s3_bucket_versioning` ends up as `S3BucketVersioningA` —
 * `aws_s3_bucket`'s `versioning` block took `S3BucketVersioning` first. No rule short of running
 * the parser predicts that.
 */
import { toCamelCase, toSnakeCase } from "codemaker";
import { ResourceParser } from "./vendored/cdktn/resource-parser";
import { AWS_FQPN } from "./schema";

/** The classic library's jsii roots — from `../ref-provider-aws/package.json#jsii.targets`. */
export const CLASSIC_ROOTS = {
  npm: "@cdktn/provider-aws",
  goModule: "github.com/cdktn-io/cdktn-provider-aws-go",
  goPackage: "aws",
  python: "cdktn_provider_aws",
} as const;

export interface ClassicName {
  /** the source directory, i.e. `src/<module>/index.ts` in the classic tree */
  readonly module: string;
  readonly className: string;
  /** jsii-pacmak's Go package for that submodule — see `goPackageForSubmodule` */
  readonly go: string;
  /** jsii-pacmak's Python submodule — see `pythonModuleForSubmodule` */
  readonly python: string;
}

/** Keyed exactly like `naming-map.json`: the surface-marked terraform type. */
export type ClassicNameIndex = Record<string, ClassicName>;

/**
 * The TS submodule name: the export alias `provider-generator.ts#emitIndexFile` writes into
 * `src/index.ts` (`export * as s3BucketVersioning from './s3-bucket-versioning/index'`), and
 * therefore the jsii submodule the other targets are derived from.
 */
export function submoduleForModule(module: string): string {
  return toCamelCase(module);
}

/**
 * jsii-pacmak `lib/targets/go/util.js#goPackageNameForAssembly`, applied to a submodule (which
 * carries no `targets.go` of its own): the name with every non-alphanumeric dropped, lowercased.
 */
export function goPackageForSubmodule(submodule: string): string {
  return submodule.replace(/[^a-z0-9.]/gi, "").toLowerCase();
}

/**
 * jsii-pacmak `lib/targets/python/type-name.js#getPackageName`: a submodule with no
 * `targets.python.module` of its own becomes `toSnakeCase` of its name under the root module.
 */
export function pythonModuleForSubmodule(submodule: string): string {
  return toSnakeCase(submodule);
}

/**
 * Every classic identity in the pinned schema, keyed the way the naming map is.
 *
 * The parse ORDER is load-bearing and is the vendored generator's own
 * (`provider-generator.ts#buildResourceModels`, then the provider block): resources, data sources,
 * ephemeral resources, provider. Both `unique*` dedup passes are first-come-first-served, so a
 * different order would hand the `A` suffixes to different types.
 */
export function buildClassicNameIndex(schema: any, fqpn: string = AWS_FQPN): ClassicNameIndex {
  const provider = schema.provider_schemas?.[fqpn];
  if (!provider) throw new Error(`classic naming: no provider_schemas["${fqpn}"] in the schema`);

  const parser = new ResourceParser();
  const index: ClassicNameIndex = {};
  const record = (key: string, model: { className: string; fileName: string }) => {
    const module = model.fileName.replace(/\/index\.ts$/, "");
    const submodule = submoduleForModule(module);
    index[key] = {
      module,
      className: model.className,
      go: goPackageForSubmodule(submodule),
      python: pythonModuleForSubmodule(submodule),
    };
  };

  for (const [type, s] of Object.entries(provider.resource_schemas ?? {})) {
    record(type, parser.parse(fqpn as any, type, s as any, "resource"));
  }
  for (const [type, s] of Object.entries(provider.data_source_schemas ?? {})) {
    record(`data_${type}`, parser.parse(fqpn as any, `data_${type}`, s as any, "data_source"));
  }
  for (const [type, s] of Object.entries(provider.ephemeral_resource_schemas ?? {})) {
    record(
      `ephemeral_${type}`,
      parser.parse(fqpn as any, `ephemeral_${type}`, s as any, "ephemeral_resource"),
    );
  }
  if (provider.provider) {
    // The classic parser calls this type `provider`; the grouped generator spells the same entry
    // `aws_provider`, and the naming map is keyed the grouped way.
    record("aws_provider", parser.parse(fqpn as any, "provider", provider.provider, "provider"));
  }
  return index;
}
