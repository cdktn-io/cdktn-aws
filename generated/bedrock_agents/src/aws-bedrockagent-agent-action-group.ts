// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBedrockagentAgentActionGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#action_group_name AwsBedrockagentAgentActionGroup#action_group_name}
  */
  readonly actionGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#action_group_state AwsBedrockagentAgentActionGroup#action_group_state}
  */
  readonly actionGroupState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#agent_id AwsBedrockagentAgentActionGroup#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#agent_version AwsBedrockagentAgentActionGroup#agent_version}
  */
  readonly agentVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#description AwsBedrockagentAgentActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature AwsBedrockagentAgentActionGroup#parent_action_group_signature}
  */
  readonly parentActionGroupSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#prepare_agent AwsBedrockagentAgentActionGroup#prepare_agent}
  */
  readonly prepareAgent?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#region AwsBedrockagentAgentActionGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check AwsBedrockagentAgentActionGroup#skip_resource_in_use_check}
  */
  readonly skipResourceInUseCheck?: boolean | cdktn.IResolvable;
  /**
  * action_group_executor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#action_group_executor AwsBedrockagentAgentActionGroup#action_group_executor}
  */
  readonly actionGroupExecutor?: AwsBedrockagentAgentActionGroup.ActionGroupExecutorProperty[] | cdktn.IResolvable;
  /**
  * api_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#api_schema AwsBedrockagentAgentActionGroup#api_schema}
  */
  readonly apiSchema?: AwsBedrockagentAgentActionGroup.ApiSchemaProperty[] | cdktn.IResolvable;
  /**
  * function_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#function_schema AwsBedrockagentAgentActionGroup#function_schema}
  */
  readonly functionSchema?: AwsBedrockagentAgentActionGroup.FunctionSchemaProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#timeouts AwsBedrockagentAgentActionGroup#timeouts}
  */
  readonly timeouts?: AwsBedrockagentAgentActionGroup.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group}
*/
export class AwsBedrockagentAgentActionGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_agent_action_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBedrockagentAgentActionGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBedrockagentAgentActionGroup to import
  * @param importFromId The id of the existing AwsBedrockagentAgentActionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBedrockagentAgentActionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_agent_action_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBedrockagentAgentActionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBedrockagentAgentActionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_agent_action_group',
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
    this._actionGroupName = config.actionGroupName;
    this._actionGroupState = config.actionGroupState;
    this._agentId = config.agentId;
    this._agentVersion = config.agentVersion;
    this._description = config.description;
    this._parentActionGroupSignature = config.parentActionGroupSignature;
    this._prepareAgent = config.prepareAgent;
    this._region = config.region;
    this._skipResourceInUseCheck = config.skipResourceInUseCheck;
    this._actionGroupExecutor.internalValue = config.actionGroupExecutor;
    this._apiSchema.internalValue = config.apiSchema;
    this._functionSchema.internalValue = config.functionSchema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_group_id - computed: true, optional: false, required: false
  public get actionGroupId() {
    return this.getStringAttribute('action_group_id');
  }

  // action_group_name - computed: false, optional: false, required: true
  private _actionGroupName?: string; 
  public get actionGroupName() {
    return this.getStringAttribute('action_group_name');
  }
  public set actionGroupName(value: string) {
    this._actionGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupNameInput() {
    return this._actionGroupName;
  }

  // action_group_state - computed: true, optional: true, required: false
  private _actionGroupState?: string; 
  public get actionGroupState() {
    return this.getStringAttribute('action_group_state');
  }
  public set actionGroupState(value: string) {
    this._actionGroupState = value;
  }
  public resetActionGroupState() {
    this._actionGroupState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupStateInput() {
    return this._actionGroupState;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // agent_version - computed: false, optional: false, required: true
  private _agentVersion?: string; 
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_action_group_signature - computed: false, optional: true, required: false
  private _parentActionGroupSignature?: string; 
  public get parentActionGroupSignature() {
    return this.getStringAttribute('parent_action_group_signature');
  }
  public set parentActionGroupSignature(value: string) {
    this._parentActionGroupSignature = value;
  }
  public resetParentActionGroupSignature() {
    this._parentActionGroupSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentActionGroupSignatureInput() {
    return this._parentActionGroupSignature;
  }

  // prepare_agent - computed: true, optional: true, required: false
  private _prepareAgent?: boolean | cdktn.IResolvable; 
  public get prepareAgent() {
    return this.getBooleanAttribute('prepare_agent');
  }
  public set prepareAgent(value: boolean | cdktn.IResolvable) {
    this._prepareAgent = value;
  }
  public resetPrepareAgent() {
    this._prepareAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareAgentInput() {
    return this._prepareAgent;
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

  // skip_resource_in_use_check - computed: true, optional: true, required: false
  private _skipResourceInUseCheck?: boolean | cdktn.IResolvable; 
  public get skipResourceInUseCheck() {
    return this.getBooleanAttribute('skip_resource_in_use_check');
  }
  public set skipResourceInUseCheck(value: boolean | cdktn.IResolvable) {
    this._skipResourceInUseCheck = value;
  }
  public resetSkipResourceInUseCheck() {
    this._skipResourceInUseCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipResourceInUseCheckInput() {
    return this._skipResourceInUseCheck;
  }

  // action_group_executor - computed: false, optional: true, required: false
  private _actionGroupExecutor = new AwsBedrockagentAgentActionGroup.ActionGroupExecutorPropertyList(this, "action_group_executor", false);
  public get actionGroupExecutor() {
    return this._actionGroupExecutor;
  }
  public putActionGroupExecutor(value: AwsBedrockagentAgentActionGroup.ActionGroupExecutorProperty[] | cdktn.IResolvable) {
    this._actionGroupExecutor.internalValue = value;
  }
  public resetActionGroupExecutor() {
    this._actionGroupExecutor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupExecutorInput() {
    return this._actionGroupExecutor.internalValue;
  }

  // api_schema - computed: false, optional: true, required: false
  private _apiSchema = new AwsBedrockagentAgentActionGroup.ApiSchemaPropertyList(this, "api_schema", false);
  public get apiSchema() {
    return this._apiSchema;
  }
  public putApiSchema(value: AwsBedrockagentAgentActionGroup.ApiSchemaProperty[] | cdktn.IResolvable) {
    this._apiSchema.internalValue = value;
  }
  public resetApiSchema() {
    this._apiSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSchemaInput() {
    return this._apiSchema.internalValue;
  }

  // function_schema - computed: false, optional: true, required: false
  private _functionSchema = new AwsBedrockagentAgentActionGroup.FunctionSchemaPropertyList(this, "function_schema", false);
  public get functionSchema() {
    return this._functionSchema;
  }
  public putFunctionSchema(value: AwsBedrockagentAgentActionGroup.FunctionSchemaProperty[] | cdktn.IResolvable) {
    this._functionSchema.internalValue = value;
  }
  public resetFunctionSchema() {
    this._functionSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionSchemaInput() {
    return this._functionSchema.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBedrockagentAgentActionGroup.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBedrockagentAgentActionGroup.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_group_name: cdktn.stringToTerraform(this._actionGroupName),
      action_group_state: cdktn.stringToTerraform(this._actionGroupState),
      agent_id: cdktn.stringToTerraform(this._agentId),
      agent_version: cdktn.stringToTerraform(this._agentVersion),
      description: cdktn.stringToTerraform(this._description),
      parent_action_group_signature: cdktn.stringToTerraform(this._parentActionGroupSignature),
      prepare_agent: cdktn.booleanToTerraform(this._prepareAgent),
      region: cdktn.stringToTerraform(this._region),
      skip_resource_in_use_check: cdktn.booleanToTerraform(this._skipResourceInUseCheck),
      action_group_executor: cdktn.listMapper(awsBedrockagentAgentActionGroupActionGroupExecutorPropertyToTerraform, true)(this._actionGroupExecutor.internalValue),
      api_schema: cdktn.listMapper(awsBedrockagentAgentActionGroupApiSchemaPropertyToTerraform, true)(this._apiSchema.internalValue),
      function_schema: cdktn.listMapper(awsBedrockagentAgentActionGroupFunctionSchemaPropertyToTerraform, true)(this._functionSchema.internalValue),
      timeouts: awsBedrockagentAgentActionGroupTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_group_name: {
        value: cdktn.stringToHclTerraform(this._actionGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_group_state: {
        value: cdktn.stringToHclTerraform(this._actionGroupState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktn.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_version: {
        value: cdktn.stringToHclTerraform(this._agentVersion),
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
      parent_action_group_signature: {
        value: cdktn.stringToHclTerraform(this._parentActionGroupSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepare_agent: {
        value: cdktn.booleanToHclTerraform(this._prepareAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_resource_in_use_check: {
        value: cdktn.booleanToHclTerraform(this._skipResourceInUseCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_group_executor: {
        value: cdktn.listMapperHcl(awsBedrockagentAgentActionGroupActionGroupExecutorPropertyToHclTerraform, true)(this._actionGroupExecutor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockagentAgentActionGroup.ActionGroupExecutorPropertyList",
      },
      api_schema: {
        value: cdktn.listMapperHcl(awsBedrockagentAgentActionGroupApiSchemaPropertyToHclTerraform, true)(this._apiSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockagentAgentActionGroup.ApiSchemaPropertyList",
      },
      function_schema: {
        value: cdktn.listMapperHcl(awsBedrockagentAgentActionGroupFunctionSchemaPropertyToHclTerraform, true)(this._functionSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockagentAgentActionGroup.FunctionSchemaPropertyList",
      },
      timeouts: {
        value: awsBedrockagentAgentActionGroupTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBedrockagentAgentActionGroup.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBedrockagentAgentActionGroupActionGroupExecutorPropertyToTerraform(struct?: AwsBedrockagentAgentActionGroup.ActionGroupExecutorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_control: cdktn.stringToTerraform(struct!.customControl),
    lambda: cdktn.stringToTerraform(struct!.lambda),
  }
}


export function awsBedrockagentAgentActionGroupActionGroupExecutorPropertyToHclTerraform(struct?: AwsBedrockagentAgentActionGroup.ActionGroupExecutorProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_control: {
      value: cdktn.stringToHclTerraform(struct!.customControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda: {
      value: cdktn.stringToHclTerraform(struct!.lambda),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentAgentActionGroupS3PropertyToTerraform(struct?: AwsBedrockagentAgentActionGroup.S3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    s3_object_key: cdktn.stringToTerraform(struct!.s3ObjectKey),
  }
}


export function awsBedrockagentAgentActionGroupS3PropertyToHclTerraform(struct?: AwsBedrockagentAgentActionGroup.S3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_key: {
      value: cdktn.stringToHclTerraform(struct!.s3ObjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentAgentActionGroupApiSchemaPropertyToTerraform(struct?: AwsBedrockagentAgentActionGroup.ApiSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: cdktn.stringToTerraform(struct!.payload),
    s3: cdktn.listMapper(awsBedrockagentAgentActionGroupS3PropertyToTerraform, true)(struct!.s3),
  }
}


export function awsBedrockagentAgentActionGroupApiSchemaPropertyToHclTerraform(struct?: AwsBedrockagentAgentActionGroup.ApiSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: cdktn.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktn.listMapperHcl(awsBedrockagentAgentActionGroupS3PropertyToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "S3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentAgentActionGroupParametersPropertyToTerraform(struct?: AwsBedrockagentAgentActionGroup.ParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentAgentActionGroupParametersPropertyToHclTerraform(struct?: AwsBedrockagentAgentActionGroup.ParametersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_block_key: {
      value: cdktn.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentAgentActionGroupFunctionsPropertyToTerraform(struct?: AwsBedrockagentAgentActionGroup.FunctionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.listMapper(awsBedrockagentAgentActionGroupParametersPropertyToTerraform, true)(struct!.parameters),
  }
}


export function awsBedrockagentAgentActionGroupFunctionsPropertyToHclTerraform(struct?: AwsBedrockagentAgentActionGroup.FunctionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(awsBedrockagentAgentActionGroupParametersPropertyToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "ParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentAgentActionGroupMemberFunctionsPropertyToTerraform(struct?: AwsBedrockagentAgentActionGroup.MemberFunctionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    functions: cdktn.listMapper(awsBedrockagentAgentActionGroupFunctionsPropertyToTerraform, true)(struct!.functions),
  }
}


export function awsBedrockagentAgentActionGroupMemberFunctionsPropertyToHclTerraform(struct?: AwsBedrockagentAgentActionGroup.MemberFunctionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    functions: {
      value: cdktn.listMapperHcl(awsBedrockagentAgentActionGroupFunctionsPropertyToHclTerraform, true)(struct!.functions),
      isBlock: true,
      type: "list",
      storageClassType: "FunctionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentAgentActionGroupFunctionSchemaPropertyToTerraform(struct?: AwsBedrockagentAgentActionGroup.FunctionSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    member_functions: cdktn.listMapper(awsBedrockagentAgentActionGroupMemberFunctionsPropertyToTerraform, true)(struct!.memberFunctions),
  }
}


export function awsBedrockagentAgentActionGroupFunctionSchemaPropertyToHclTerraform(struct?: AwsBedrockagentAgentActionGroup.FunctionSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    member_functions: {
      value: cdktn.listMapperHcl(awsBedrockagentAgentActionGroupMemberFunctionsPropertyToHclTerraform, true)(struct!.memberFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "MemberFunctionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentAgentActionGroupTimeoutsPropertyToTerraform(struct?: AwsBedrockagentAgentActionGroup.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsBedrockagentAgentActionGroupTimeoutsPropertyToHclTerraform(struct?: AwsBedrockagentAgentActionGroup.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsBedrockagentAgentActionGroup {
export interface ActionGroupExecutorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#custom_control AwsBedrockagentAgentActionGroup#custom_control}
  */
  readonly customControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#lambda AwsBedrockagentAgentActionGroup#lambda}
  */
  readonly lambda?: string;
}
export class ActionGroupExecutorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ActionGroupExecutorProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customControl = this._customControl;
    }
    if (this._lambda !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionGroupExecutorProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customControl = undefined;
      this._lambda = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customControl = value.customControl;
      this._lambda = value.lambda;
    }
  }

  // custom_control - computed: false, optional: true, required: false
  private _customControl?: string; 
  public get customControl() {
    return this.getStringAttribute('custom_control');
  }
  public set customControl(value: string) {
    this._customControl = value;
  }
  public resetCustomControl() {
    this._customControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customControlInput() {
    return this._customControl;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda?: string; 
  public get lambda() {
    return this.getStringAttribute('lambda');
  }
  public set lambda(value: string) {
    this._lambda = value;
  }
  public resetLambda() {
    this._lambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda;
  }
}

export class ActionGroupExecutorPropertyList extends cdktn.ComplexList {
  public internalValue? : ActionGroupExecutorProperty[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ActionGroupExecutorPropertyOutputReference {
    return new ActionGroupExecutorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#s3_bucket_name AwsBedrockagentAgentActionGroup#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#s3_object_key AwsBedrockagentAgentActionGroup#s3_object_key}
  */
  readonly s3ObjectKey?: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3ObjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectKey = this._s3ObjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketName = undefined;
      this._s3ObjectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketName = value.s3BucketName;
      this._s3ObjectKey = value.s3ObjectKey;
    }
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_object_key - computed: false, optional: true, required: false
  private _s3ObjectKey?: string; 
  public get s3ObjectKey() {
    return this.getStringAttribute('s3_object_key');
  }
  public set s3ObjectKey(value: string) {
    this._s3ObjectKey = value;
  }
  public resetS3ObjectKey() {
    this._s3ObjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectKeyInput() {
    return this._s3ObjectKey;
  }
}

export class S3PropertyList extends cdktn.ComplexList {
  public internalValue? : S3Property[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3PropertyOutputReference {
    return new S3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#payload AwsBedrockagentAgentActionGroup#payload}
  */
  readonly payload?: string;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#s3 AwsBedrockagentAgentActionGroup#s3}
  */
  readonly s3?: S3Property[] | cdktn.IResolvable;
}
export class ApiSchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload = value.payload;
      this._s3.internalValue = value.s3;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new S3PropertyList(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: S3Property[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class ApiSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : ApiSchemaProperty[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiSchemaPropertyOutputReference {
    return new ApiSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#description AwsBedrockagentAgentActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#map_block_key AwsBedrockagentAgentActionGroup#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#required AwsBedrockagentAgentActionGroup#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#type AwsBedrockagentAgentActionGroup#type}
  */
  readonly type: string;
}
export class ParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ParametersProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParametersProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._mapBlockKey = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._mapBlockKey = value.mapBlockKey;
      this._required = value.required;
      this._type = value.type;
    }
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

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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
}

export class ParametersPropertyList extends cdktn.ComplexList {
  public internalValue? : ParametersProperty[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ParametersPropertyOutputReference {
    return new ParametersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#description AwsBedrockagentAgentActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#name AwsBedrockagentAgentActionGroup#name}
  */
  readonly name: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#parameters AwsBedrockagentAgentActionGroup#parameters}
  */
  readonly parameters?: ParametersProperty[] | cdktn.IResolvable;
}
export class FunctionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ParametersPropertyList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ParametersProperty[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class FunctionsPropertyList extends cdktn.ComplexList {
  public internalValue? : FunctionsProperty[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionsPropertyOutputReference {
    return new FunctionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemberFunctionsProperty {
  /**
  * functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#functions AwsBedrockagentAgentActionGroup#functions}
  */
  readonly functions?: FunctionsProperty[] | cdktn.IResolvable;
}
export class MemberFunctionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MemberFunctionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemberFunctionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functions.internalValue = value.functions;
    }
  }

  // functions - computed: false, optional: true, required: false
  private _functions = new FunctionsPropertyList(this, "functions", false);
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: FunctionsProperty[] | cdktn.IResolvable) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }
}

export class MemberFunctionsPropertyList extends cdktn.ComplexList {
  public internalValue? : MemberFunctionsProperty[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MemberFunctionsPropertyOutputReference {
    return new MemberFunctionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionSchemaProperty {
  /**
  * member_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#member_functions AwsBedrockagentAgentActionGroup#member_functions}
  */
  readonly memberFunctions?: MemberFunctionsProperty[] | cdktn.IResolvable;
}
export class FunctionSchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberFunctions = this._memberFunctions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberFunctions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberFunctions.internalValue = value.memberFunctions;
    }
  }

  // member_functions - computed: false, optional: true, required: false
  private _memberFunctions = new MemberFunctionsPropertyList(this, "member_functions", false);
  public get memberFunctions() {
    return this._memberFunctions;
  }
  public putMemberFunctions(value: MemberFunctionsProperty[] | cdktn.IResolvable) {
    this._memberFunctions.internalValue = value;
  }
  public resetMemberFunctions() {
    this._memberFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberFunctionsInput() {
    return this._memberFunctions.internalValue;
  }
}

export class FunctionSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : FunctionSchemaProperty[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionSchemaPropertyOutputReference {
    return new FunctionSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#create AwsBedrockagentAgentActionGroup#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagent_agent_action_group#update AwsBedrockagentAgentActionGroup#update}
  */
  readonly update?: string;
}
export class TimeoutsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimeoutsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
}
