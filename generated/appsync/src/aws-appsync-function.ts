// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfFunctionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#api_id TfFunction#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#code TfFunction#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#data_source TfFunction#data_source}
  */
  readonly dataSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#description TfFunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#function_version TfFunction#function_version}
  */
  readonly functionVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#id TfFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#max_batch_size TfFunction#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#name TfFunction#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#region TfFunction#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#request_mapping_template TfFunction#request_mapping_template}
  */
  readonly requestMappingTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#response_mapping_template TfFunction#response_mapping_template}
  */
  readonly responseMappingTemplate?: string;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#runtime TfFunction#runtime}
  */
  readonly runtime?: TfFunction.RuntimeProperty;
  /**
  * sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#sync_config TfFunction#sync_config}
  */
  readonly syncConfig?: TfFunction.SyncConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function aws_appsync_function}
*/
export class TfFunction extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfFunction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfFunction to import
  * @param importFromId The id of the existing TfFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function aws_appsync_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: TfFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_function',
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
    this._description = config.description;
    this._functionVersion = config.functionVersion;
    this._id = config.id;
    this._maxBatchSize = config.maxBatchSize;
    this._name = config.name;
    this._region = config.region;
    this._requestMappingTemplate = config.requestMappingTemplate;
    this._responseMappingTemplate = config.responseMappingTemplate;
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

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_version - computed: true, optional: true, required: false
  private _functionVersion?: string; 
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }
  public set functionVersion(value: string) {
    this._functionVersion = value;
  }
  public resetFunctionVersion() {
    this._functionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionInput() {
    return this._functionVersion;
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

  // request_mapping_template - computed: false, optional: true, required: false
  private _requestMappingTemplate?: string; 
  public get requestMappingTemplate() {
    return this.getStringAttribute('request_mapping_template');
  }
  public set requestMappingTemplate(value: string) {
    this._requestMappingTemplate = value;
  }
  public resetRequestMappingTemplate() {
    this._requestMappingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMappingTemplateInput() {
    return this._requestMappingTemplate;
  }

  // response_mapping_template - computed: false, optional: true, required: false
  private _responseMappingTemplate?: string; 
  public get responseMappingTemplate() {
    return this.getStringAttribute('response_mapping_template');
  }
  public set responseMappingTemplate(value: string) {
    this._responseMappingTemplate = value;
  }
  public resetResponseMappingTemplate() {
    this._responseMappingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMappingTemplateInput() {
    return this._responseMappingTemplate;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new TfFunction.RuntimePropertyOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: TfFunction.RuntimeProperty) {
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
  private _syncConfig = new TfFunction.SyncConfigPropertyOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: TfFunction.SyncConfigProperty) {
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
      description: cdktn.stringToTerraform(this._description),
      function_version: cdktn.stringToTerraform(this._functionVersion),
      id: cdktn.stringToTerraform(this._id),
      max_batch_size: cdktn.numberToTerraform(this._maxBatchSize),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      request_mapping_template: cdktn.stringToTerraform(this._requestMappingTemplate),
      response_mapping_template: cdktn.stringToTerraform(this._responseMappingTemplate),
      runtime: tfFunctionRuntimePropertyToTerraform(this._runtime.internalValue),
      sync_config: tfFunctionSyncConfigPropertyToTerraform(this._syncConfig.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_version: {
        value: cdktn.stringToHclTerraform(this._functionVersion),
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
      max_batch_size: {
        value: cdktn.numberToHclTerraform(this._maxBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_mapping_template: {
        value: cdktn.stringToHclTerraform(this._requestMappingTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_mapping_template: {
        value: cdktn.stringToHclTerraform(this._responseMappingTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: tfFunctionRuntimePropertyToHclTerraform(this._runtime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFunction.RuntimePropertyList",
      },
      sync_config: {
        value: tfFunctionSyncConfigPropertyToHclTerraform(this._syncConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFunction.SyncConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfFunctionRuntimePropertyToTerraform(struct?: TfFunction.RuntimePropertyOutputReference | TfFunction.RuntimeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    runtime_version: cdktn.stringToTerraform(struct!.runtimeVersion),
  }
}


export function tfFunctionRuntimePropertyToHclTerraform(struct?: TfFunction.RuntimePropertyOutputReference | TfFunction.RuntimeProperty): any {
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


export function tfFunctionLambdaConflictHandlerConfigPropertyToTerraform(struct?: TfFunction.LambdaConflictHandlerConfigPropertyOutputReference | TfFunction.LambdaConflictHandlerConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_conflict_handler_arn: cdktn.stringToTerraform(struct!.lambdaConflictHandlerArn),
  }
}


export function tfFunctionLambdaConflictHandlerConfigPropertyToHclTerraform(struct?: TfFunction.LambdaConflictHandlerConfigPropertyOutputReference | TfFunction.LambdaConflictHandlerConfigProperty): any {
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


export function tfFunctionSyncConfigPropertyToTerraform(struct?: TfFunction.SyncConfigPropertyOutputReference | TfFunction.SyncConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conflict_detection: cdktn.stringToTerraform(struct!.conflictDetection),
    conflict_handler: cdktn.stringToTerraform(struct!.conflictHandler),
    lambda_conflict_handler_config: tfFunctionLambdaConflictHandlerConfigPropertyToTerraform(struct!.lambdaConflictHandlerConfig),
  }
}


export function tfFunctionSyncConfigPropertyToHclTerraform(struct?: TfFunction.SyncConfigPropertyOutputReference | TfFunction.SyncConfigProperty): any {
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
      value: tfFunctionLambdaConflictHandlerConfigPropertyToHclTerraform(struct!.lambdaConflictHandlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaConflictHandlerConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfFunction {
export interface RuntimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#name TfFunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#runtime_version TfFunction#runtime_version}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#lambda_conflict_handler_arn TfFunction#lambda_conflict_handler_arn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#conflict_detection TfFunction#conflict_detection}
  */
  readonly conflictDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#conflict_handler TfFunction#conflict_handler}
  */
  readonly conflictHandler?: string;
  /**
  * lambda_conflict_handler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appsync_function#lambda_conflict_handler_config TfFunction#lambda_conflict_handler_config}
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
