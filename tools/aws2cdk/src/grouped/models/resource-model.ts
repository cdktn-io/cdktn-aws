// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Adapted from src/vendored/cdktn/models/resource-model.ts — see tools/aws2cdk/README.md.
//
// Two differences from the vendored original:
//
//  1. `className`/`configStructName` are public and set by the caller (src/naming.ts derives them
//     from the terraform type and the group's stripPrefixes — `aws_instance` in group `ec2` ->
//     `TfInstance`/`TfInstanceConfig`), instead of by the parser's order-dependent cross-resource
//     dedup.
//  2. No `filePath`/`fileName`/`structsFolderPath`/`structsRequireSharding`: the grouped emitter
//     writes one file per resource with every nested type inside the resource's merged namespace,
//     so the vendored sharding machinery (which exists to keep one flat module under jsii's export
//     ceiling) has nothing to shard. `structs` therefore excludes the ConfigStruct, which the
//     vendored getter prepends.
//
// Everything else — the provider / data-source / ephemeral-resource branches, the doc links, the
// version constraint — is the vendored behaviour verbatim. The awscc fork this file was taken
// from had stripped all of it (awscc's schema has managed resources only); cdktn-aws needs it
// back, because groups.json groups data sources and ephemeral resources too and because M1 ships
// a real generated AwsProvider.
import { toSnakeCase } from "codemaker";
import { FQPN, parseFQPN, ProviderName } from "@cdktn/provider-schema";
import { Schema } from "@cdktn/commons";
import { AttributeModel } from "./attribute-model";
import { Struct, ConfigStruct } from "./struct";
import { ProviderFunctionsModel } from "../../vendored/cdktn/models/provider-function-model";

/** `provider` | `resource` | `data_source` | `ephemeral_resource`, as the vendored parser uses. */
export type TerraformSchemaType =
  | "provider"
  | "resource"
  | "data_source"
  | "ephemeral_resource";

interface ResourceModelOptions {
  terraformType: string;
  className: string;
  configStructName: string;
  attributes: AttributeModel[];
  structs: Struct[];
  fqpn: FQPN;
  schema: Schema;
  terraformSchemaType: TerraformSchemaType;
  providerVersion?: string;
  providerVersionConstraint?: string;
  terraformProviderSource?: string;
}

export class ResourceModel {
  public className: string;
  public configStructName: string;
  public terraformType: string;
  public provider: ProviderName;
  public fqpn: FQPN;
  public providerVersion?: string;
  public providerVersionConstraint?: string;
  public terraformProviderSource?: string;
  /** Usually the same as `provider`; a cdktf.json constraint may rename it. */
  public terraformProviderName: string;
  public attributes: AttributeModel[];
  public schema: Schema;
  /**
   * Only set (by src/generate.ts) when `isProvider` is true and the provider schema declares
   * provider-defined functions. Drives whether `ResourceEmitter` emits the memoized `functions`
   * getter and its import of the sibling `provider-functions.ts` file. Verbatim from the vendored
   * original except for that file path: the grouped layout puts both files in the same package
   * `src/`, so the import is `./provider-functions`, not `../provider-functions/index`.
   */
  public providerFunctionsModel?: ProviderFunctionsModel;
  public readonly structs: Struct[];
  private readonly terraformSchemaType: TerraformSchemaType;

  constructor(options: ResourceModelOptions) {
    this.className = options.className;
    this.configStructName = options.configStructName;
    this.terraformType = options.terraformType;
    this.attributes = options.attributes;
    this.schema = options.schema;
    this.fqpn = options.fqpn;
    this.provider = parseFQPN(options.fqpn).name;
    this.terraformProviderName = this.provider;
    this.structs = options.structs;
    this.terraformSchemaType = options.terraformSchemaType;
    this.providerVersion = options.providerVersion;
    this.providerVersionConstraint = options.providerVersionConstraint;
    this.terraformProviderSource = options.terraformProviderSource;
  }

  /**
   * The resource's own Config struct — kept separate from the nested-type structs (unlike the
   * vendored `structs` getter, which prepends it) so callers can address "everything but Config"
   * without filtering. An ephemeral resource's config extends the meta-argument interface that
   * omits the state-bound arguments, exactly as upstream.
   */
  public get configStruct(): ConfigStruct {
    return new ConfigStruct(
      this.configStructName,
      this.attributes,
      this.isProvider
        ? "" // a provider block takes no count/dependsOn/lifecycle
        : this.isEphemeralResource
          ? "TerraformEphemeralMetaArguments"
          : undefined,
    );
  }

  public get synthesizableAttributes(): AttributeModel[] {
    return this.configStruct.assignableAttributes;
  }

  public get isProvider(): boolean {
    return this.terraformSchemaType === "provider";
  }

  public get isDataSource(): boolean {
    return this.terraformSchemaType === "data_source";
  }

  public get isEphemeralResource(): boolean {
    return this.terraformSchemaType === "ephemeral_resource";
  }

  public get parentClassName(): string {
    return this.isProvider
      ? "TerraformProvider"
      : this.isDataSource
        ? "TerraformDataSource"
        : this.isEphemeralResource
          ? "TerraformEphemeralResource"
          : "TerraformResource";
  }

  /**
   * The terraform type as it appears in HCL. The vendored parser prefixes `data_`/`ephemeral_`
   * onto the schema key to keep its flat class names apart; that prefix is never part of the real
   * type, so it comes off here.
   */
  public get terraformResourceType(): string {
    return this.isProvider
      ? this.terraformProviderName
      : this.isDataSource
        ? this.terraformType.replace(/^data_/, "")
        : this.isEphemeralResource
          ? this.terraformType.replace(/^ephemeral_/, "")
          : this.terraformType;
  }

  public get terraformDocName(): string {
    return toSnakeCase(
      this.terraformResourceType.replace(new RegExp(`^${this.provider}_`, "i"), ""),
    );
  }

  public get linkToDocs(): string {
    const { hostname, namespace, name } = parseFQPN(this.fqpn);
    const version = this.providerVersion || "latest";
    const base = `https://${hostname}/providers/${namespace}/${name}/${version}/docs`;
    if (this.isProvider) return base;
    if (this.isDataSource) return `${base}/data-sources/${this.terraformDocName}`;
    if (this.isEphemeralResource) return `${base}/ephemeral-resources/${this.terraformDocName}`;
    return `${base}/resources/${this.terraformDocName}`;
  }
}
