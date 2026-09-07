// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsResolverConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#api_id AwsResolver#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#code AwsResolver#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#data_source AwsResolver#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#field AwsResolver#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#id AwsResolver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#kind AwsResolver#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#max_batch_size AwsResolver#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#region AwsResolver#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#request_template AwsResolver#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#response_template AwsResolver#response_template}
  */
  readonly responseTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#type AwsResolver#type}
  */
  readonly type: string;
  /**
  * caching_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#caching_config AwsResolver#caching_config}
  */
  readonly cachingConfig?: AwsResolver.CachingConfigProperty;
  /**
  * pipeline_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#pipeline_config AwsResolver#pipeline_config}
  */
  readonly pipelineConfig?: AwsResolver.PipelineConfigProperty;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#runtime AwsResolver#runtime}
  */
  readonly runtime?: AwsResolver.RuntimeProperty;
  /**
  * sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#sync_config AwsResolver#sync_config}
  */
  readonly syncConfig?: AwsResolver.SyncConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver aws_appsync_resolver}
*/
export class AwsResolver extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_resolver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsResolver resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsResolver to import
  * @param importFromId The id of the existing AwsResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsResolver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_resolver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver aws_appsync_resolver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsResolverConfig
  */
  public constructor(scope: Construct, id: string, config: AwsResolverConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_resolver',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiId = config.apiId;
    this._code = config.code;
    this._dataSource = config.dataSource;
    this._field = config.field;
    this._id = config.id;
    this._kind = config.kind;
    this._maxBatchSize = config.maxBatchSize;
    this._region = config.region;
    this._requestTemplate = config.requestTemplate;
    this._responseTemplate = config.responseTemplate;
    this._type = config.type;
    this._cachingConfig.internalValue = config.cachingConfig;
    this._pipelineConfig.internalValue = config.pipelineConfig;
    this._runtime.internalValue = config.runtime;
    this._syncConfig.internalValue = config.syncConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // max_batch_size - computed: false, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_template - computed: false, optional: true, required: false
  private _requestTemplate?: string; 
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  public resetRequestTemplate() {
    this._requestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate;
  }

  // response_template - computed: false, optional: true, required: false
  private _responseTemplate?: string; 
  public get responseTemplate() {
    return this.getStringAttribute('response_template');
  }
  public set responseTemplate(value: string) {
    this._responseTemplate = value;
  }
  public resetResponseTemplate() {
    this._responseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplateInput() {
    return this._responseTemplate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // caching_config - computed: false, optional: true, required: false
  private _cachingConfig = new AwsResolver.CachingConfigPropertyOutputReference(this, "caching_config");
  public get cachingConfig() {
    return this._cachingConfig;
  }
  public putCachingConfig(value: AwsResolver.CachingConfigProperty) {
    this._cachingConfig.internalValue = value;
  }
  public resetCachingConfig() {
    this._cachingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingConfigInput() {
    return this._cachingConfig.internalValue;
  }

  // pipeline_config - computed: false, optional: true, required: false
  private _pipelineConfig = new AwsResolver.PipelineConfigPropertyOutputReference(this, "pipeline_config");
  public get pipelineConfig() {
    return this._pipelineConfig;
  }
  public putPipelineConfig(value: AwsResolver.PipelineConfigProperty) {
    this._pipelineConfig.internalValue = value;
  }
  public resetPipelineConfig() {
    this._pipelineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigInput() {
    return this._pipelineConfig.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new AwsResolver.RuntimePropertyOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: AwsResolver.RuntimeProperty) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // sync_config - computed: false, optional: true, required: false
  private _syncConfig = new AwsResolver.SyncConfigPropertyOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: AwsResolver.SyncConfigProperty) {
    this._syncConfig.internalValue = value;
  }
  public resetSyncConfig() {
    this._syncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktn.stringToTerraform(this._apiId),
      code: cdktn.stringToTerraform(this._code),
      data_source: cdktn.stringToTerraform(this._dataSource),
      field: cdktn.stringToTerraform(this._field),
      id: cdktn.stringToTerraform(this._id),
      kind: cdktn.stringToTerraform(this._kind),
      max_batch_size: cdktn.numberToTerraform(this._maxBatchSize),
      region: cdktn.stringToTerraform(this._region),
      request_template: cdktn.stringToTerraform(this._requestTemplate),
      response_template: cdktn.stringToTerraform(this._responseTemplate),
      type: cdktn.stringToTerraform(this._type),
      caching_config: awsResolverCachingConfigPropertyToTerraform(this._cachingConfig.internalValue),
      pipeline_config: awsResolverPipelineConfigPropertyToTerraform(this._pipelineConfig.internalValue),
      runtime: awsResolverRuntimePropertyToTerraform(this._runtime.internalValue),
      sync_config: awsResolverSyncConfigPropertyToTerraform(this._syncConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktn.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code: {
        value: cdktn.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source: {
        value: cdktn.stringToHclTerraform(this._dataSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field: {
        value: cdktn.stringToHclTerraform(this._field),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktn.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_batch_size: {
        value: cdktn.numberToHclTerraform(this._maxBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_template: {
        value: cdktn.stringToHclTerraform(this._requestTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_template: {
        value: cdktn.stringToHclTerraform(this._responseTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caching_config: {
        value: awsResolverCachingConfigPropertyToHclTerraform(this._cachingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResolver.CachingConfigPropertyList",
      },
      pipeline_config: {
        value: awsResolverPipelineConfigPropertyToHclTerraform(this._pipelineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResolver.PipelineConfigPropertyList",
      },
      runtime: {
        value: awsResolverRuntimePropertyToHclTerraform(this._runtime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResolver.RuntimePropertyList",
      },
      sync_config: {
        value: awsResolverSyncConfigPropertyToHclTerraform(this._syncConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsResolver.SyncConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsResolverCachingConfigPropertyToTerraform(struct?: AwsResolver.CachingConfigPropertyOutputReference | AwsResolver.CachingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    caching_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cachingKeys),
    ttl: cdktn.numberToTerraform(struct!.ttl),
  }
}


export function awsResolverCachingConfigPropertyToHclTerraform(struct?: AwsResolver.CachingConfigPropertyOutputReference | AwsResolver.CachingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    caching_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cachingKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktn.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResolverPipelineConfigPropertyToTerraform(struct?: AwsResolver.PipelineConfigPropertyOutputReference | AwsResolver.PipelineConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    functions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.functions),
  }
}


export function awsResolverPipelineConfigPropertyToHclTerraform(struct?: AwsResolver.PipelineConfigPropertyOutputReference | AwsResolver.PipelineConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    functions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.functions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResolverRuntimePropertyToTerraform(struct?: AwsResolver.RuntimePropertyOutputReference | AwsResolver.RuntimeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    runtime_version: cdktn.stringToTerraform(struct!.runtimeVersion),
  }
}


export function awsResolverRuntimePropertyToHclTerraform(struct?: AwsResolver.RuntimePropertyOutputReference | AwsResolver.RuntimeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktn.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResolverLambdaConflictHandlerConfigPropertyToTerraform(struct?: AwsResolver.LambdaConflictHandlerConfigPropertyOutputReference | AwsResolver.LambdaConflictHandlerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_conflict_handler_arn: cdktn.stringToTerraform(struct!.lambdaConflictHandlerArn),
  }
}


export function awsResolverLambdaConflictHandlerConfigPropertyToHclTerraform(struct?: AwsResolver.LambdaConflictHandlerConfigPropertyOutputReference | AwsResolver.LambdaConflictHandlerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_conflict_handler_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaConflictHandlerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsResolverSyncConfigPropertyToTerraform(struct?: AwsResolver.SyncConfigPropertyOutputReference | AwsResolver.SyncConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conflict_detection: cdktn.stringToTerraform(struct!.conflictDetection),
    conflict_handler: cdktn.stringToTerraform(struct!.conflictHandler),
    lambda_conflict_handler_config: awsResolverLambdaConflictHandlerConfigPropertyToTerraform(struct!.lambdaConflictHandlerConfig),
  }
}


export function awsResolverSyncConfigPropertyToHclTerraform(struct?: AwsResolver.SyncConfigPropertyOutputReference | AwsResolver.SyncConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conflict_detection: {
      value: cdktn.stringToHclTerraform(struct!.conflictDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conflict_handler: {
      value: cdktn.stringToHclTerraform(struct!.conflictHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_conflict_handler_config: {
      value: awsResolverLambdaConflictHandlerConfigPropertyToHclTerraform(struct!.lambdaConflictHandlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaConflictHandlerConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsResolver {
export interface CachingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#caching_keys AwsResolver#caching_keys}
  */
  readonly cachingKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#ttl AwsResolver#ttl}
  */
  readonly ttl?: number;
}
export class CachingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CachingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingKeys = this._cachingKeys;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CachingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachingKeys = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachingKeys = value.cachingKeys;
      this._ttl = value.ttl;
    }
  }

  // caching_keys - computed: false, optional: true, required: false
  private _cachingKeys?: string[]; 
  public get cachingKeys() {
    return cdktn.Fn.tolist(this.getListAttribute('caching_keys'));
  }
  public set cachingKeys(value: string[]) {
    this._cachingKeys = value;
  }
  public resetCachingKeys() {
    this._cachingKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingKeysInput() {
    return this._cachingKeys;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface PipelineConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#functions AwsResolver#functions}
  */
  readonly functions?: string[];
}
export class PipelineConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functions !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functions = value.functions;
    }
  }

  // functions - computed: false, optional: true, required: false
  private _functions?: string[]; 
  public get functions() {
    return this.getListAttribute('functions');
  }
  public set functions(value: string[]) {
    this._functions = value;
  }
  public resetFunctions() {
    this._functions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions;
  }
}
export interface RuntimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#name AwsResolver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#runtime_version AwsResolver#runtime_version}
  */
  readonly runtimeVersion: string;
}
export class RuntimePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuntimeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuntimeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._runtimeVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._runtimeVersion = value.runtimeVersion;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }
}
export interface LambdaConflictHandlerConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#lambda_conflict_handler_arn AwsResolver#lambda_conflict_handler_arn}
  */
  readonly lambdaConflictHandlerArn?: string;
}
export class LambdaConflictHandlerConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaConflictHandlerConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaConflictHandlerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConflictHandlerArn = this._lambdaConflictHandlerArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaConflictHandlerConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaConflictHandlerArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaConflictHandlerArn = value.lambdaConflictHandlerArn;
    }
  }

  // lambda_conflict_handler_arn - computed: false, optional: true, required: false
  private _lambdaConflictHandlerArn?: string; 
  public get lambdaConflictHandlerArn() {
    return this.getStringAttribute('lambda_conflict_handler_arn');
  }
  public set lambdaConflictHandlerArn(value: string) {
    this._lambdaConflictHandlerArn = value;
  }
  public resetLambdaConflictHandlerArn() {
    this._lambdaConflictHandlerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConflictHandlerArnInput() {
    return this._lambdaConflictHandlerArn;
  }
}
export interface SyncConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#conflict_detection AwsResolver#conflict_detection}
  */
  readonly conflictDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#conflict_handler AwsResolver#conflict_handler}
  */
  readonly conflictHandler?: string;
  /**
  * lambda_conflict_handler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_resolver#lambda_conflict_handler_config AwsResolver#lambda_conflict_handler_config}
  */
  readonly lambdaConflictHandlerConfig?: LambdaConflictHandlerConfigProperty;
}
export class SyncConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyncConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictDetection = this._conflictDetection;
    }
    if (this._conflictHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictHandler = this._conflictHandler;
    }
    if (this._lambdaConflictHandlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConflictHandlerConfig = this._lambdaConflictHandlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyncConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictDetection = undefined;
      this._conflictHandler = undefined;
      this._lambdaConflictHandlerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictDetection = value.conflictDetection;
      this._conflictHandler = value.conflictHandler;
      this._lambdaConflictHandlerConfig.internalValue = value.lambdaConflictHandlerConfig;
    }
  }

  // conflict_detection - computed: false, optional: true, required: false
  private _conflictDetection?: string; 
  public get conflictDetection() {
    return this.getStringAttribute('conflict_detection');
  }
  public set conflictDetection(value: string) {
    this._conflictDetection = value;
  }
  public resetConflictDetection() {
    this._conflictDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictDetectionInput() {
    return this._conflictDetection;
  }

  // conflict_handler - computed: false, optional: true, required: false
  private _conflictHandler?: string; 
  public get conflictHandler() {
    return this.getStringAttribute('conflict_handler');
  }
  public set conflictHandler(value: string) {
    this._conflictHandler = value;
  }
  public resetConflictHandler() {
    this._conflictHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictHandlerInput() {
    return this._conflictHandler;
  }

  // lambda_conflict_handler_config - computed: false, optional: true, required: false
  private _lambdaConflictHandlerConfig = new LambdaConflictHandlerConfigPropertyOutputReference(this, "lambda_conflict_handler_config");
  public get lambdaConflictHandlerConfig() {
    return this._lambdaConflictHandlerConfig;
  }
  public putLambdaConflictHandlerConfig(value: LambdaConflictHandlerConfigProperty) {
    this._lambdaConflictHandlerConfig.internalValue = value;
  }
  public resetLambdaConflictHandlerConfig() {
    this._lambdaConflictHandlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConflictHandlerConfigInput() {
    return this._lambdaConflictHandlerConfig.internalValue;
  }
}
}
