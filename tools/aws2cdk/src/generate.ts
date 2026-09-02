// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
/**
 * Grouped emission: one standalone jsii package per groups.json service group.
 *
 * Per schema entry it runs `src/grouped/resource-parser.ts` (terraform schema -> attributes +
 * temporarily-named structs, each carrying its terraform attribute path), then `src/naming.ts`
 * (final, deterministic, order-independent names), then `src/grouped/emitter/*`, which writes the
 * TypeScript in two regions — a namespace body and a top-level region, see
 * `src/grouped/namespace-context.ts`.
 *
 * The emitted file per schema entry is:
 *
 *     <top level>            TfInstanceConfig, class TfInstance, the *ToTerraform mappers
 *     export namespace TfInstance { <namespace body> }   nested interfaces + Output/List/Map
 *
 * TypeScript merges the class and the namespace, so `TfInstance.EbsBlockDeviceProperty` is a
 * real, jsii-visible nested type. Mapper *functions* stay module-level because jsii ignores
 * functions entirely — putting them in the namespace would make the namespace un-mergeable
 * with the class for jsii's assembler.
 *
 * ZERO cross-group imports: a group package's `src/` imports nothing but `cdktn` and `constructs`,
 * and nothing is emitted at any shared root. `scripts/check-no-cross-group-imports.mjs` is the
 * gate; this file is the reason it passes.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { CodeMaker } from "codemaker";
import type { FQPN } from "@cdktn/provider-schema";
import type { Schema } from "@cdktn/commons";
import { AWS_FQPN } from "./schema";
import {
  GroupMembers,
  GroupsFile,
  PROVIDER_GROUP,
  assertUniqueGoPackageNames,
  membersOf,
  npmPackageName,
} from "./groups";
import * as naming from "./naming";
import { packageJsonFor, readmeFor, tsconfigFor } from "./manifest";
import { parseResourceAttributes } from "./grouped/resource-parser";
import { ResourceModel, TerraformSchemaType } from "./grouped/models";
import { ResourceEmitter } from "./grouped/emitter/resource-emitter";
import { StructEmitter } from "./grouped/emitter/struct-emitter";
import { withQualifier, withResourcePrefix } from "./grouped/namespace-context";
import {
  assertNoFunctionsGetterCollision,
  buildProviderFunctionsModel,
  ProviderFunctionsModel,
} from "./vendored/cdktn/models/provider-function-model";
import { ProviderFunctionsEmitter } from "./vendored/cdktn/emitter/provider-functions-emitter";
import { hashGroupFiles } from "./hashes";

/**
 * Licence header stamped on every `.ts` file written under `generated/`. That content is the
 * newly-authored output of this repo's own generator run over public schema data — not a copy of
 * any upstream source text — so it is attributed to cdktn-io under this repo's own license.
 * (cdk-terrain's own emitter emits no copyright line at all; the "Copyright IBM Corp." header on
 * `@cdktn/provider-aws` output is stamped by that repo's separate `copywrite` build step.)
 */
const GENERATED_LICENSE_HEADER = ["// Copyright (c) cdktn-io", "// SPDX-License-Identifier: MPL-2.0"];

/** Matches `@cdktn/provider-aws`'s own pin, so emitted metadata is comparable line for line. */
export const PROVIDER_SOURCE = "hashicorp/aws";
export const PROVIDER_VERSION_CONSTRAINT = "~> 6.0";

const cmp = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0);

export interface GenerateOptions {
  readonly outDir: string;
  readonly schema: any;
  readonly groups: GroupsFile;
  /** group slugs to emit; `provider` is the synthetic AwsProvider group. */
  readonly slugs: readonly string[];
  readonly packageVersion?: string;
  readonly fqpn?: string;
}

export interface EmittedEntry {
  readonly terraformName: string;
  /** the surface-marked type the file is named after (`data_aws_lb`), i.e. the naming-map key */
  readonly parserType: string;
  readonly schemaType: TerraformSchemaType;
  readonly className: string;
  readonly fileBase: string;
  readonly nestedTypes: number;
}

export interface GroupResult {
  readonly slug: string;
  readonly files: string[];
  readonly entries: EmittedEntry[];
  /** content hash of this package's own committed files — see `src/hashes.ts`. */
  readonly hash: string;
  readonly bytes: number;
}

export interface GenerateResult {
  readonly groups: GroupResult[];
  readonly files: string[];
}

/**
 * One schema entry to emit.
 *
 * Two different names, and the difference is the whole of locked decision 2:
 *
 *  - `parserType` is the full terraform type as the vendored parser spells it (`aws_lb`,
 *    `data_aws_lb`, `ephemeral_aws_lambda_invocation`, `aws_provider`). It feeds BOTH names a file
 *    has: the class name, through the owning group's `stripPrefixes` (`aws_lambda_function` ->
 *    `TfFunction`), and the FILE name, through its own dashed spelling (`aws-lambda-function.ts`)
 *    — which is why the two are derived by two different functions in `src/naming.ts`.
 *  - `baseName` is the vendored parser's `baseName`, i.e. `parserType` with the `aws_` prefix
 *    removed (`lb`, but `data_aws_lb` unchanged). Nothing is named after it; it exists only
 *    because it is the ROOT SCOPE NAME, and `skipped-attributes.ts` matches scope full names
 *    verbatim (`aws.quicksight_template.definition`). Get it wrong and six large aws attribute
 *    trees silently stop collapsing to `any`.
 */
interface PlannedEntry {
  readonly terraformName: string;
  readonly parserType: string;
  readonly baseName: string;
  readonly schemaType: TerraformSchemaType;
  readonly schema: Schema;
}

/** The vendored parser's `baseName` rule, verbatim. */
function baseNameFor(parserType: string, providerName: string, isProvider: boolean): string {
  let baseName = parserType;
  if (baseName.startsWith(`${providerName}_`)) baseName = baseName.slice(providerName.length + 1);
  if (isProvider) baseName = `${providerName}_${baseName}`;
  return baseName;
}

export const SCHEMA_KEY_BY_SURFACE: Record<string, string> = {
  resources: "resource_schemas",
  dataSources: "data_source_schemas",
  ephemeralResources: "ephemeral_resource_schemas",
};

function planGroup(schema: any, fqpn: string, members: GroupMembers): PlannedEntry[] {
  const provider = schema.provider_schemas[fqpn];
  const planned: PlannedEntry[] = [];

  if (members.slug === PROVIDER_GROUP) {
    const block = JSON.parse(JSON.stringify(provider.provider));
    // The provider schema omits `alias`, which every provider block accepts. The vendored parser
    // injects it; so must we, or a second `AwsProvider` instance cannot be aliased.
    block.block.attributes ??= {};
    block.block.attributes.alias = {
      type: "string",
      description: "Alias name",
      optional: true,
      computed: false,
    };
    planned.push({
      terraformName: "aws",
      parserType: "aws_provider",
      baseName: "aws_provider",
      schemaType: "provider",
      schema: block,
    });
    return planned;
  }

  const surfaces: {
    names: string[];
    key: string;
    prefix: string;
    schemaType: TerraformSchemaType;
  }[] = [
    { names: members.resources, key: "resource_schemas", prefix: "", schemaType: "resource" },
    { names: members.dataSources, key: "data_source_schemas", prefix: "data_", schemaType: "data_source" },
    {
      names: members.ephemeralResources,
      key: "ephemeral_resource_schemas",
      prefix: "ephemeral_",
      schemaType: "ephemeral_resource",
    },
  ];

  for (const surface of surfaces) {
    for (const name of [...surface.names].sort(cmp)) {
      const entrySchema = provider[surface.key]?.[name];
      if (!entrySchema) {
        throw new Error(
          `groups.json lists ${surface.schemaType} "${name}" but the pinned schema has no ${surface.key} entry for it`,
        );
      }
      const parserType = `${surface.prefix}${name}`;
      planned.push({
        terraformName: name,
        parserType,
        baseName: baseNameFor(parserType, "aws", false),
        schemaType: surface.schemaType,
        schema: entrySchema,
      });
    }
  }
  return planned;
}

/** Renders one virtual file of a `CodeMaker` to a string, without touching disk. */
function renderVirtualFile(code: CodeMaker, filePath: string): string {
  const files: { filePath: string; buffer: string }[] = (
    code as unknown as { files: { filePath: string; buffer: string }[] }
  ).files;
  const found = files.find((f) => f.filePath === filePath);
  if (!found) throw new Error(`renderVirtualFile: ${filePath} was never opened+closed`);
  return found.buffer;
}

/**
 * The parsed, fully-named model of one schema entry — everything the renderer needs, and nothing
 * written to disk yet.
 *
 * Building every entry of a group BEFORE rendering any of them is what makes the group-wide
 * mapper-name collision fallback (`naming.mapperPrefixesForGroup`) possible: a mapper's name
 * depends on the other resources in the same package, so it cannot be decided one file at a time.
 */
interface BuiltEntry {
  readonly planned: PlannedEntry;
  readonly resource: ResourceModel;
}

function buildEntry(
  planned: PlannedEntry,
  fqpn: string,
  providerVersion: string,
  stripPrefixes: readonly string[],
): BuiltEntry {
  const isProvider = planned.schemaType === "provider";
  const parsed = parseResourceAttributes(planned.schema, {
    providerName: "aws",
    baseName: planned.baseName,
    isProvider,
  });

  const nameMap = naming.propertyTypeNamesForResource(parsed.structs.map((s) => ({ path: s.path })));
  for (const struct of parsed.structs) {
    const finalName = nameMap[struct.path.join(".")];
    if (finalName === undefined) {
      throw new Error(
        `no name resolved for struct at path [${struct.path.join(", ")}] in ${planned.terraformName}`,
      );
    }
    struct.name = finalName;
  }

  const className = naming.classNameForEntry({
    parserType: planned.parserType,
    surface: planned.schemaType,
    stripPrefixes,
  });
  const resource = new ResourceModel({
    terraformType: planned.parserType,
    className,
    configStructName: naming.configInterfaceName(className),
    attributes: parsed.attributes,
    structs: parsed.structs,
    fqpn: fqpn as FQPN,
    schema: planned.schema,
    terraformSchemaType: planned.schemaType,
    providerVersion,
    providerVersionConstraint: PROVIDER_VERSION_CONSTRAINT,
    terraformProviderSource: PROVIDER_SOURCE,
  });

  return { planned, resource };
}

function emitEntry(built: BuiltEntry, srcDir: string, mapperPrefix: string): EmittedEntry {
  const { planned, resource } = built;
  const className = resource.className;

  const code = new CodeMaker();
  // The vendored `TerraformProviderGenerator` sets this, and every `@cdktn/provider-*` tree is
  // emitted with it. Keeping it makes the emitted text directly comparable to the reference
  // build, which is what `scripts/runtime-contract-diff.mjs` (acceptance E) relies on.
  code.indentation = 2;
  const nsFile = "namespace-body.ts";
  const topFile = "top-level.ts";
  const structEmitter = new StructEmitter(code);

  // `mapperPrefix` is the class name for all but the handful of resources whose mapper names would
  // otherwise collide with a sibling's inside the same package — see `naming.mapperPrefixesForGroup`.
  withResourcePrefix(mapperPrefix, () => {
    // Namespace body: every nested struct's interface + OutputReference/List/Map classes. All type
    // references here are to *sibling* namespace members, so no qualification — but mapper function
    // *names* are always resource-prefixed regardless of region, hence `withResourcePrefix` around
    // both regions.
    code.openFile(nsFile);
    withQualifier(undefined, () => {
      for (const struct of resource.structs) {
        structEmitter.emitStructInterface(resource, struct);
        // A provider's nested blocks have no attributes to read back, so upstream emits no
        // OutputReference/List/Map wrapper classes for them.
        if (!struct.isProvider) structEmitter.emitStructClass(struct);
      }
    });
    code.closeFile(nsFile);

    // Top level: the Config interface, the class, and the nested-struct mapper functions. The first
    // two reference nested types from *outside* the namespace, so they need `ClassName.` prefixes;
    // the mappers qualify their own signature line themselves.
    code.openFile(topFile);
    withQualifier(className, () => {
      structEmitter.emitStructInterface(resource, resource.configStruct);
      new ResourceEmitter(code).emit(resource);
    });
    for (const struct of resource.structs) {
      structEmitter.emitStructMappers(struct, className, mapperPrefix);
    }
    code.closeFile(topFile);
  });

  const namespaceBody = renderVirtualFile(code, nsFile);
  const topLevel = renderVirtualFile(code, topFile);

  // Keyed on the TERRAFORM TYPE, never on `className`: renaming what a file exports must not move
  // the file (see `naming.fileNameForTerraformType`).
  const fileBase = naming.fileNameForTerraformType(planned.parserType);
  const header = [
    ...GENERATED_LICENSE_HEADER,
    `// ${resource.linkToDocs}`,
    `// generated from terraform resource schema — do not edit by hand`,
    ``,
    `import { Construct } from 'constructs';`,
    `import * as cdktn from 'cdktn';`,
    ``,
  ].join("\n");

  const body =
    resource.structs.length > 0
      ? `${topLevel}\nexport namespace ${className} {\n${namespaceBody}}\n`
      : `${topLevel}`;

  fs.writeFileSync(path.join(srcDir, `${fileBase}.ts`), `${header}${body}`);

  return {
    terraformName: planned.terraformName,
    parserType: planned.parserType,
    schemaType: planned.schemaType,
    className,
    fileBase,
    nestedTypes: resource.structs.length,
  };
}

/**
 * The provider group's second source file, holding `AwsProviderFunctions`.
 *
 * Placement is option A of the provider-functions research note: the wrapper class lives in the
 * SAME package as the provider construct that exposes it, so `AwsProvider.functions` needs no
 * cross-group import and the call shape stays exactly what `@cdktn/provider-aws` consumers already
 * write — `new AwsProvider(this, "aws", {...}).functions.arnParse(arn)`. The alternative (a
 * dedicated `fn` group) would have had to take the provider's local name as a plain constructor
 * argument to avoid importing the provider package, for a worse call site.
 *
 * The class body itself is emitted by the UNMODIFIED vendored `ProviderFunctionsEmitter`; only the
 * file path differs from upstream (`src/provider-functions.ts` instead of
 * `providers/aws/provider-functions/index.ts`).
 */
export const PROVIDER_FUNCTIONS_FILE_BASE = "provider-functions";

function emitProviderFunctions(model: ProviderFunctionsModel, srcDir: string): void {
  const code = new CodeMaker();
  code.indentation = 2;
  const file = `${PROVIDER_FUNCTIONS_FILE_BASE}.ts`;
  code.openFile(file);
  new ProviderFunctionsEmitter(code).emit(model);
  code.closeFile(file);

  const header = [
    ...GENERATED_LICENSE_HEADER,
    `// generated from the provider schema's \`functions\` section — do not edit by hand`,
    ``,
  ].join("\n");
  fs.writeFileSync(path.join(srcDir, file), `${header}${renderVirtualFile(code, file)}`);
}

export function generate(options: GenerateOptions): GenerateResult {
  const fqpn = options.fqpn ?? AWS_FQPN;
  const providerVersion: string = options.schema.provider_versions?.[fqpn] ?? "latest";
  const version = options.packageVersion ?? "0.0.0";

  // Asserted over the WHOLE groups.json, not just the slugs being generated: a Go package-name
  // collision two years from now is a release-topology problem, and this is the cheapest place to
  // find out about it.
  assertUniqueGoPackageNames(options.groups);

  const results: GroupResult[] = [];
  const allFiles: string[] = [];

  for (const slug of [...options.slugs].sort(cmp)) {
    const members: GroupMembers =
      slug === PROVIDER_GROUP
        ? {
            slug,
            title: "AWS Provider",
            // The provider construct is not an L1 resource and keeps its 0.1.x name, so there is
            // nothing to strip — `naming.classNameForEntry` short-circuits on the provider surface.
            stripPrefixes: [],
            resources: [],
            dataSources: [],
            ephemeralResources: [],
            aliased: [],
          }
        : membersOf(options.groups, slug, (surface, name) =>
            Boolean(options.schema.provider_schemas[fqpn][SCHEMA_KEY_BY_SURFACE[surface]]?.[name]),
          );

    const pkgDir = path.join(options.outDir, slug);
    const srcDir = path.join(pkgDir, "src");
    // Only `src/` is wiped, never the package directory: these are pnpm workspace members, so
    // `pkgDir/node_modules` holds the cdktn/constructs symlinks that jsii and tsc both need, and
    // removing them on every regeneration would mean a `pnpm install` between generate and build.
    fs.rmSync(srcDir, { recursive: true, force: true });
    fs.mkdirSync(srcDir, { recursive: true });

    // Two passes: build every model first, so the mapper prefixes can be decided with the whole
    // package's naming in view, then render.
    const built = planGroup(options.schema, fqpn, members).map((planned) =>
      buildEntry(planned, fqpn, providerVersion, members.stripPrefixes),
    );
    naming.assertUniqueClassNames(
      slug,
      built.map((b) => ({ parserType: b.planned.parserType, className: b.resource.className })),
    );
    const mapperPrefixes = naming.mapperPrefixesForGroup(
      built.map((b) => ({
        className: b.resource.className,
        structNames: b.resource.structs.map((s) => s.name),
      })),
    );

    // Provider-defined functions are a provider-scoped surface in the schema (`provider.functions`,
    // a sibling of `provider.provider`) and stay provider-scoped here: the model is attached to the
    // provider construct's model BEFORE it is rendered, because that is what makes the resource
    // emitter write the `functions` getter and its import.
    const providerEntry = built.find((b) => b.resource.isProvider);
    let providerFunctions: ProviderFunctionsModel | undefined;
    if (providerEntry) {
      providerFunctions = buildProviderFunctionsModel(
        "aws",
        options.schema.provider_schemas[fqpn]?.functions,
      );
      if (providerFunctions) {
        assertNoFunctionsGetterCollision(
          "aws",
          providerEntry.resource.attributes.map((a) => a.name),
        );
        providerEntry.resource.providerFunctionsModel = providerFunctions;
      }
    }

    const entries: EmittedEntry[] = built.map((b) =>
      emitEntry(b, srcDir, mapperPrefixes[b.resource.className]),
    );

    const extraFileBases: string[] = [];
    if (providerFunctions) {
      emitProviderFunctions(providerFunctions, srcDir);
      extraFileBases.push(PROVIDER_FUNCTIONS_FILE_BASE);
    }

    const files: string[] = [
      ...entries.map((e) => `${slug}/src/${e.fileBase}.ts`),
      ...extraFileBases.map((b) => `${slug}/src/${b}.ts`),
    ];

    const indexLines = [...entries.map((e) => e.fileBase), ...extraFileBases]
      .map((fileBase) => `export * from './${fileBase}';`)
      .sort(cmp);
    fs.writeFileSync(
      path.join(srcDir, "index.ts"),
      `${GENERATED_LICENSE_HEADER.join("\n")}\n${indexLines.join("\n")}\n`,
    );
    files.push(`${slug}/src/index.ts`);

    const manifestOpts = { version, providerVersion };
    fs.writeFileSync(
      path.join(pkgDir, "package.json"),
      `${JSON.stringify(packageJsonFor(members, manifestOpts), null, 2)}\n`,
    );
    fs.writeFileSync(path.join(pkgDir, "README.md"), readmeFor(members, manifestOpts));
    fs.writeFileSync(path.join(pkgDir, "tsconfig.json"), `${JSON.stringify(tsconfigFor(), null, 2)}\n`);
    files.push(`${slug}/package.json`, `${slug}/README.md`, `${slug}/tsconfig.json`);

    files.sort(cmp);
    // Hashed from what was actually written, read back off disk: the hash then describes the
    // committed tree rather than the generator's intent about it.
    const relToPkg = files.map((f) => f.slice(slug.length + 1));
    const hash = hashGroupFiles(pkgDir, relToPkg);
    const bytes = relToPkg.reduce(
      (n, rel) => n + fs.statSync(path.join(pkgDir, ...rel.split("/"))).size,
      0,
    );
    results.push({ slug, files, entries, hash, bytes });
    allFiles.push(...files);
    void npmPackageName(slug);
  }

  allFiles.sort(cmp);
  return { groups: results, files: allFiles };
}
