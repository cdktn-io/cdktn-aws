// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfFlowDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#flow_definition_name TfFlowDefinition#flow_definition_name}
  */
  readonly flowDefinitionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#id TfFlowDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#region TfFlowDefinition#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#role_arn TfFlowDefinition#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#tags TfFlowDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#tags_all TfFlowDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * human_loop_activation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#human_loop_activation_config TfFlowDefinition#human_loop_activation_config}
  */
  readonly humanLoopActivationConfig?: TfFlowDefinition.HumanLoopActivationConfigProperty;
  /**
  * human_loop_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#human_loop_config TfFlowDefinition#human_loop_config}
  */
  readonly humanLoopConfig: TfFlowDefinition.HumanLoopConfigProperty;
  /**
  * human_loop_request_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#human_loop_request_source TfFlowDefinition#human_loop_request_source}
  */
  readonly humanLoopRequestSource?: TfFlowDefinition.HumanLoopRequestSourceProperty;
  /**
  * output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#output_config TfFlowDefinition#output_config}
  */
  readonly outputConfig: TfFlowDefinition.OutputConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition aws_sagemaker_flow_definition}
*/
export class TfFlowDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_flow_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfFlowDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfFlowDefinition to import
  * @param importFromId The id of the existing TfFlowDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfFlowDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_flow_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition aws_sagemaker_flow_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfFlowDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: TfFlowDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_flow_definition',
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
    this._flowDefinitionName = config.flowDefinitionName;
    this._id = config.id;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._humanLoopActivationConfig.internalValue = config.humanLoopActivationConfig;
    this._humanLoopConfig.internalValue = config.humanLoopConfig;
    this._humanLoopRequestSource.internalValue = config.humanLoopRequestSource;
    this._outputConfig.internalValue = config.outputConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // flow_definition_name - computed: false, optional: false, required: true
  private _flowDefinitionName?: string; 
  public get flowDefinitionName() {
    return this.getStringAttribute('flow_definition_name');
  }
  public set flowDefinitionName(value: string) {
    this._flowDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDefinitionNameInput() {
    return this._flowDefinitionName;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // human_loop_activation_config - computed: false, optional: true, required: false
  private _humanLoopActivationConfig = new TfFlowDefinition.HumanLoopActivationConfigPropertyOutputReference(this, "human_loop_activation_config");
  public get humanLoopActivationConfig() {
    return this._humanLoopActivationConfig;
  }
  public putHumanLoopActivationConfig(value: TfFlowDefinition.HumanLoopActivationConfigProperty) {
    this._humanLoopActivationConfig.internalValue = value;
  }
  public resetHumanLoopActivationConfig() {
    this._humanLoopActivationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConfigInput() {
    return this._humanLoopActivationConfig.internalValue;
  }

  // human_loop_config - computed: false, optional: false, required: true
  private _humanLoopConfig = new TfFlowDefinition.HumanLoopConfigPropertyOutputReference(this, "human_loop_config");
  public get humanLoopConfig() {
    return this._humanLoopConfig;
  }
  public putHumanLoopConfig(value: TfFlowDefinition.HumanLoopConfigProperty) {
    this._humanLoopConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopConfigInput() {
    return this._humanLoopConfig.internalValue;
  }

  // human_loop_request_source - computed: false, optional: true, required: false
  private _humanLoopRequestSource = new TfFlowDefinition.HumanLoopRequestSourcePropertyOutputReference(this, "human_loop_request_source");
  public get humanLoopRequestSource() {
    return this._humanLoopRequestSource;
  }
  public putHumanLoopRequestSource(value: TfFlowDefinition.HumanLoopRequestSourceProperty) {
    this._humanLoopRequestSource.internalValue = value;
  }
  public resetHumanLoopRequestSource() {
    this._humanLoopRequestSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopRequestSourceInput() {
    return this._humanLoopRequestSource.internalValue;
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig = new TfFlowDefinition.OutputConfigPropertyOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: TfFlowDefinition.OutputConfigProperty) {
    this._outputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow_definition_name: cdktn.stringToTerraform(this._flowDefinitionName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      human_loop_activation_config: tfFlowDefinitionHumanLoopActivationConfigPropertyToTerraform(this._humanLoopActivationConfig.internalValue),
      human_loop_config: tfFlowDefinitionHumanLoopConfigPropertyToTerraform(this._humanLoopConfig.internalValue),
      human_loop_request_source: tfFlowDefinitionHumanLoopRequestSourcePropertyToTerraform(this._humanLoopRequestSource.internalValue),
      output_config: tfFlowDefinitionOutputConfigPropertyToTerraform(this._outputConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flow_definition_name: {
        value: cdktn.stringToHclTerraform(this._flowDefinitionName),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      human_loop_activation_config: {
        value: tfFlowDefinitionHumanLoopActivationConfigPropertyToHclTerraform(this._humanLoopActivationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFlowDefinition.HumanLoopActivationConfigPropertyList",
      },
      human_loop_config: {
        value: tfFlowDefinitionHumanLoopConfigPropertyToHclTerraform(this._humanLoopConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFlowDefinition.HumanLoopConfigPropertyList",
      },
      human_loop_request_source: {
        value: tfFlowDefinitionHumanLoopRequestSourcePropertyToHclTerraform(this._humanLoopRequestSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFlowDefinition.HumanLoopRequestSourcePropertyList",
      },
      output_config: {
        value: tfFlowDefinitionOutputConfigPropertyToHclTerraform(this._outputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfFlowDefinition.OutputConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfFlowDefinitionHumanLoopActivationConditionsConfigPropertyToTerraform(struct?: TfFlowDefinition.HumanLoopActivationConditionsConfigPropertyOutputReference | TfFlowDefinition.HumanLoopActivationConditionsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    human_loop_activation_conditions: cdktn.stringToTerraform(struct!.humanLoopActivationConditions),
  }
}


export function tfFlowDefinitionHumanLoopActivationConditionsConfigPropertyToHclTerraform(struct?: TfFlowDefinition.HumanLoopActivationConditionsConfigPropertyOutputReference | TfFlowDefinition.HumanLoopActivationConditionsConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    human_loop_activation_conditions: {
      value: cdktn.stringToHclTerraform(struct!.humanLoopActivationConditions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDefinitionHumanLoopActivationConfigPropertyToTerraform(struct?: TfFlowDefinition.HumanLoopActivationConfigPropertyOutputReference | TfFlowDefinition.HumanLoopActivationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    human_loop_activation_conditions_config: tfFlowDefinitionHumanLoopActivationConditionsConfigPropertyToTerraform(struct!.humanLoopActivationConditionsConfig),
  }
}


export function tfFlowDefinitionHumanLoopActivationConfigPropertyToHclTerraform(struct?: TfFlowDefinition.HumanLoopActivationConfigPropertyOutputReference | TfFlowDefinition.HumanLoopActivationConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    human_loop_activation_conditions_config: {
      value: tfFlowDefinitionHumanLoopActivationConditionsConfigPropertyToHclTerraform(struct!.humanLoopActivationConditionsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HumanLoopActivationConditionsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDefinitionAmountInUsdPropertyToTerraform(struct?: TfFlowDefinition.AmountInUsdPropertyOutputReference | TfFlowDefinition.AmountInUsdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cents: cdktn.numberToTerraform(struct!.cents),
    dollars: cdktn.numberToTerraform(struct!.dollars),
    tenth_fractions_of_a_cent: cdktn.numberToTerraform(struct!.tenthFractionsOfACent),
  }
}


export function tfFlowDefinitionAmountInUsdPropertyToHclTerraform(struct?: TfFlowDefinition.AmountInUsdPropertyOutputReference | TfFlowDefinition.AmountInUsdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cents: {
      value: cdktn.numberToHclTerraform(struct!.cents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dollars: {
      value: cdktn.numberToHclTerraform(struct!.dollars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenth_fractions_of_a_cent: {
      value: cdktn.numberToHclTerraform(struct!.tenthFractionsOfACent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDefinitionPublicWorkforceTaskPricePropertyToTerraform(struct?: TfFlowDefinition.PublicWorkforceTaskPricePropertyOutputReference | TfFlowDefinition.PublicWorkforceTaskPriceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amount_in_usd: tfFlowDefinitionAmountInUsdPropertyToTerraform(struct!.amountInUsd),
  }
}


export function tfFlowDefinitionPublicWorkforceTaskPricePropertyToHclTerraform(struct?: TfFlowDefinition.PublicWorkforceTaskPricePropertyOutputReference | TfFlowDefinition.PublicWorkforceTaskPriceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amount_in_usd: {
      value: tfFlowDefinitionAmountInUsdPropertyToHclTerraform(struct!.amountInUsd),
      isBlock: true,
      type: "list",
      storageClassType: "AmountInUsdPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDefinitionHumanLoopConfigPropertyToTerraform(struct?: TfFlowDefinition.HumanLoopConfigPropertyOutputReference | TfFlowDefinition.HumanLoopConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    human_task_ui_arn: cdktn.stringToTerraform(struct!.humanTaskUiArn),
    task_availability_lifetime_in_seconds: cdktn.numberToTerraform(struct!.taskAvailabilityLifetimeInSeconds),
    task_count: cdktn.numberToTerraform(struct!.taskCount),
    task_description: cdktn.stringToTerraform(struct!.taskDescription),
    task_keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.taskKeywords),
    task_time_limit_in_seconds: cdktn.numberToTerraform(struct!.taskTimeLimitInSeconds),
    task_title: cdktn.stringToTerraform(struct!.taskTitle),
    workteam_arn: cdktn.stringToTerraform(struct!.workteamArn),
    public_workforce_task_price: tfFlowDefinitionPublicWorkforceTaskPricePropertyToTerraform(struct!.publicWorkforceTaskPrice),
  }
}


export function tfFlowDefinitionHumanLoopConfigPropertyToHclTerraform(struct?: TfFlowDefinition.HumanLoopConfigPropertyOutputReference | TfFlowDefinition.HumanLoopConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    human_task_ui_arn: {
      value: cdktn.stringToHclTerraform(struct!.humanTaskUiArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_availability_lifetime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.taskAvailabilityLifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_count: {
      value: cdktn.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_description: {
      value: cdktn.stringToHclTerraform(struct!.taskDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_keywords: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.taskKeywords),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    task_time_limit_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.taskTimeLimitInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_title: {
      value: cdktn.stringToHclTerraform(struct!.taskTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workteam_arn: {
      value: cdktn.stringToHclTerraform(struct!.workteamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_workforce_task_price: {
      value: tfFlowDefinitionPublicWorkforceTaskPricePropertyToHclTerraform(struct!.publicWorkforceTaskPrice),
      isBlock: true,
      type: "list",
      storageClassType: "PublicWorkforceTaskPricePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDefinitionHumanLoopRequestSourcePropertyToTerraform(struct?: TfFlowDefinition.HumanLoopRequestSourcePropertyOutputReference | TfFlowDefinition.HumanLoopRequestSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_managed_human_loop_request_source: cdktn.stringToTerraform(struct!.awsManagedHumanLoopRequestSource),
  }
}


export function tfFlowDefinitionHumanLoopRequestSourcePropertyToHclTerraform(struct?: TfFlowDefinition.HumanLoopRequestSourcePropertyOutputReference | TfFlowDefinition.HumanLoopRequestSourceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_managed_human_loop_request_source: {
      value: cdktn.stringToHclTerraform(struct!.awsManagedHumanLoopRequestSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfFlowDefinitionOutputConfigPropertyToTerraform(struct?: TfFlowDefinition.OutputConfigPropertyOutputReference | TfFlowDefinition.OutputConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function tfFlowDefinitionOutputConfigPropertyToHclTerraform(struct?: TfFlowDefinition.OutputConfigPropertyOutputReference | TfFlowDefinition.OutputConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfFlowDefinition {
export interface HumanLoopActivationConditionsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#human_loop_activation_conditions TfFlowDefinition#human_loop_activation_conditions}
  */
  readonly humanLoopActivationConditions: string;
}
export class HumanLoopActivationConditionsConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HumanLoopActivationConditionsConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanLoopActivationConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanLoopActivationConditions = this._humanLoopActivationConditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HumanLoopActivationConditionsConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._humanLoopActivationConditions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._humanLoopActivationConditions = value.humanLoopActivationConditions;
    }
  }

  // human_loop_activation_conditions - computed: false, optional: false, required: true
  private _humanLoopActivationConditions?: string; 
  public get humanLoopActivationConditions() {
    return this.getStringAttribute('human_loop_activation_conditions');
  }
  public set humanLoopActivationConditions(value: string) {
    this._humanLoopActivationConditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConditionsInput() {
    return this._humanLoopActivationConditions;
  }
}
export interface HumanLoopActivationConfigProperty {
  /**
  * human_loop_activation_conditions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#human_loop_activation_conditions_config TfFlowDefinition#human_loop_activation_conditions_config}
  */
  readonly humanLoopActivationConditionsConfig?: HumanLoopActivationConditionsConfigProperty;
}
export class HumanLoopActivationConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HumanLoopActivationConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanLoopActivationConditionsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanLoopActivationConditionsConfig = this._humanLoopActivationConditionsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HumanLoopActivationConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._humanLoopActivationConditionsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._humanLoopActivationConditionsConfig.internalValue = value.humanLoopActivationConditionsConfig;
    }
  }

  // human_loop_activation_conditions_config - computed: false, optional: true, required: false
  private _humanLoopActivationConditionsConfig = new HumanLoopActivationConditionsConfigPropertyOutputReference(this, "human_loop_activation_conditions_config");
  public get humanLoopActivationConditionsConfig() {
    return this._humanLoopActivationConditionsConfig;
  }
  public putHumanLoopActivationConditionsConfig(value: HumanLoopActivationConditionsConfigProperty) {
    this._humanLoopActivationConditionsConfig.internalValue = value;
  }
  public resetHumanLoopActivationConditionsConfig() {
    this._humanLoopActivationConditionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConditionsConfigInput() {
    return this._humanLoopActivationConditionsConfig.internalValue;
  }
}
export interface AmountInUsdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#cents TfFlowDefinition#cents}
  */
  readonly cents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#dollars TfFlowDefinition#dollars}
  */
  readonly dollars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#tenth_fractions_of_a_cent TfFlowDefinition#tenth_fractions_of_a_cent}
  */
  readonly tenthFractionsOfACent?: number;
}
export class AmountInUsdPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmountInUsdProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cents !== undefined) {
      hasAnyValues = true;
      internalValueResult.cents = this._cents;
    }
    if (this._dollars !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollars = this._dollars;
    }
    if (this._tenthFractionsOfACent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenthFractionsOfACent = this._tenthFractionsOfACent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmountInUsdProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cents = undefined;
      this._dollars = undefined;
      this._tenthFractionsOfACent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cents = value.cents;
      this._dollars = value.dollars;
      this._tenthFractionsOfACent = value.tenthFractionsOfACent;
    }
  }

  // cents - computed: false, optional: true, required: false
  private _cents?: number; 
  public get cents() {
    return this.getNumberAttribute('cents');
  }
  public set cents(value: number) {
    this._cents = value;
  }
  public resetCents() {
    this._cents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centsInput() {
    return this._cents;
  }

  // dollars - computed: false, optional: true, required: false
  private _dollars?: number; 
  public get dollars() {
    return this.getNumberAttribute('dollars');
  }
  public set dollars(value: number) {
    this._dollars = value;
  }
  public resetDollars() {
    this._dollars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarsInput() {
    return this._dollars;
  }

  // tenth_fractions_of_a_cent - computed: false, optional: true, required: false
  private _tenthFractionsOfACent?: number; 
  public get tenthFractionsOfACent() {
    return this.getNumberAttribute('tenth_fractions_of_a_cent');
  }
  public set tenthFractionsOfACent(value: number) {
    this._tenthFractionsOfACent = value;
  }
  public resetTenthFractionsOfACent() {
    this._tenthFractionsOfACent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenthFractionsOfACentInput() {
    return this._tenthFractionsOfACent;
  }
}
export interface PublicWorkforceTaskPriceProperty {
  /**
  * amount_in_usd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#amount_in_usd TfFlowDefinition#amount_in_usd}
  */
  readonly amountInUsd?: AmountInUsdProperty;
}
export class PublicWorkforceTaskPricePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PublicWorkforceTaskPriceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amountInUsd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amountInUsd = this._amountInUsd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PublicWorkforceTaskPriceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amountInUsd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amountInUsd.internalValue = value.amountInUsd;
    }
  }

  // amount_in_usd - computed: false, optional: true, required: false
  private _amountInUsd = new AmountInUsdPropertyOutputReference(this, "amount_in_usd");
  public get amountInUsd() {
    return this._amountInUsd;
  }
  public putAmountInUsd(value: AmountInUsdProperty) {
    this._amountInUsd.internalValue = value;
  }
  public resetAmountInUsd() {
    this._amountInUsd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInUsdInput() {
    return this._amountInUsd.internalValue;
  }
}
export interface HumanLoopConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#human_task_ui_arn TfFlowDefinition#human_task_ui_arn}
  */
  readonly humanTaskUiArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#task_availability_lifetime_in_seconds TfFlowDefinition#task_availability_lifetime_in_seconds}
  */
  readonly taskAvailabilityLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#task_count TfFlowDefinition#task_count}
  */
  readonly taskCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#task_description TfFlowDefinition#task_description}
  */
  readonly taskDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#task_keywords TfFlowDefinition#task_keywords}
  */
  readonly taskKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#task_time_limit_in_seconds TfFlowDefinition#task_time_limit_in_seconds}
  */
  readonly taskTimeLimitInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#task_title TfFlowDefinition#task_title}
  */
  readonly taskTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#workteam_arn TfFlowDefinition#workteam_arn}
  */
  readonly workteamArn: string;
  /**
  * public_workforce_task_price block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#public_workforce_task_price TfFlowDefinition#public_workforce_task_price}
  */
  readonly publicWorkforceTaskPrice?: PublicWorkforceTaskPriceProperty;
}
export class HumanLoopConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HumanLoopConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanTaskUiArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanTaskUiArn = this._humanTaskUiArn;
    }
    if (this._taskAvailabilityLifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskAvailabilityLifetimeInSeconds = this._taskAvailabilityLifetimeInSeconds;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._taskDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDescription = this._taskDescription;
    }
    if (this._taskKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKeywords = this._taskKeywords;
    }
    if (this._taskTimeLimitInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTimeLimitInSeconds = this._taskTimeLimitInSeconds;
    }
    if (this._taskTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTitle = this._taskTitle;
    }
    if (this._workteamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workteamArn = this._workteamArn;
    }
    if (this._publicWorkforceTaskPrice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicWorkforceTaskPrice = this._publicWorkforceTaskPrice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HumanLoopConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._humanTaskUiArn = undefined;
      this._taskAvailabilityLifetimeInSeconds = undefined;
      this._taskCount = undefined;
      this._taskDescription = undefined;
      this._taskKeywords = undefined;
      this._taskTimeLimitInSeconds = undefined;
      this._taskTitle = undefined;
      this._workteamArn = undefined;
      this._publicWorkforceTaskPrice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._humanTaskUiArn = value.humanTaskUiArn;
      this._taskAvailabilityLifetimeInSeconds = value.taskAvailabilityLifetimeInSeconds;
      this._taskCount = value.taskCount;
      this._taskDescription = value.taskDescription;
      this._taskKeywords = value.taskKeywords;
      this._taskTimeLimitInSeconds = value.taskTimeLimitInSeconds;
      this._taskTitle = value.taskTitle;
      this._workteamArn = value.workteamArn;
      this._publicWorkforceTaskPrice.internalValue = value.publicWorkforceTaskPrice;
    }
  }

  // human_task_ui_arn - computed: false, optional: false, required: true
  private _humanTaskUiArn?: string; 
  public get humanTaskUiArn() {
    return this.getStringAttribute('human_task_ui_arn');
  }
  public set humanTaskUiArn(value: string) {
    this._humanTaskUiArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskUiArnInput() {
    return this._humanTaskUiArn;
  }

  // task_availability_lifetime_in_seconds - computed: false, optional: true, required: false
  private _taskAvailabilityLifetimeInSeconds?: number; 
  public get taskAvailabilityLifetimeInSeconds() {
    return this.getNumberAttribute('task_availability_lifetime_in_seconds');
  }
  public set taskAvailabilityLifetimeInSeconds(value: number) {
    this._taskAvailabilityLifetimeInSeconds = value;
  }
  public resetTaskAvailabilityLifetimeInSeconds() {
    this._taskAvailabilityLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAvailabilityLifetimeInSecondsInput() {
    return this._taskAvailabilityLifetimeInSeconds;
  }

  // task_count - computed: false, optional: false, required: true
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // task_description - computed: false, optional: false, required: true
  private _taskDescription?: string; 
  public get taskDescription() {
    return this.getStringAttribute('task_description');
  }
  public set taskDescription(value: string) {
    this._taskDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDescriptionInput() {
    return this._taskDescription;
  }

  // task_keywords - computed: false, optional: true, required: false
  private _taskKeywords?: string[]; 
  public get taskKeywords() {
    return cdktn.Fn.tolist(this.getListAttribute('task_keywords'));
  }
  public set taskKeywords(value: string[]) {
    this._taskKeywords = value;
  }
  public resetTaskKeywords() {
    this._taskKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeywordsInput() {
    return this._taskKeywords;
  }

  // task_time_limit_in_seconds - computed: false, optional: true, required: false
  private _taskTimeLimitInSeconds?: number; 
  public get taskTimeLimitInSeconds() {
    return this.getNumberAttribute('task_time_limit_in_seconds');
  }
  public set taskTimeLimitInSeconds(value: number) {
    this._taskTimeLimitInSeconds = value;
  }
  public resetTaskTimeLimitInSeconds() {
    this._taskTimeLimitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTimeLimitInSecondsInput() {
    return this._taskTimeLimitInSeconds;
  }

  // task_title - computed: false, optional: false, required: true
  private _taskTitle?: string; 
  public get taskTitle() {
    return this.getStringAttribute('task_title');
  }
  public set taskTitle(value: string) {
    this._taskTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTitleInput() {
    return this._taskTitle;
  }

  // workteam_arn - computed: false, optional: false, required: true
  private _workteamArn?: string; 
  public get workteamArn() {
    return this.getStringAttribute('workteam_arn');
  }
  public set workteamArn(value: string) {
    this._workteamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workteamArnInput() {
    return this._workteamArn;
  }

  // public_workforce_task_price - computed: false, optional: true, required: false
  private _publicWorkforceTaskPrice = new PublicWorkforceTaskPricePropertyOutputReference(this, "public_workforce_task_price");
  public get publicWorkforceTaskPrice() {
    return this._publicWorkforceTaskPrice;
  }
  public putPublicWorkforceTaskPrice(value: PublicWorkforceTaskPriceProperty) {
    this._publicWorkforceTaskPrice.internalValue = value;
  }
  public resetPublicWorkforceTaskPrice() {
    this._publicWorkforceTaskPrice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicWorkforceTaskPriceInput() {
    return this._publicWorkforceTaskPrice.internalValue;
  }
}
export interface HumanLoopRequestSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#aws_managed_human_loop_request_source TfFlowDefinition#aws_managed_human_loop_request_source}
  */
  readonly awsManagedHumanLoopRequestSource: string;
}
export class HumanLoopRequestSourcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HumanLoopRequestSourceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsManagedHumanLoopRequestSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedHumanLoopRequestSource = this._awsManagedHumanLoopRequestSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HumanLoopRequestSourceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsManagedHumanLoopRequestSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsManagedHumanLoopRequestSource = value.awsManagedHumanLoopRequestSource;
    }
  }

  // aws_managed_human_loop_request_source - computed: false, optional: false, required: true
  private _awsManagedHumanLoopRequestSource?: string; 
  public get awsManagedHumanLoopRequestSource() {
    return this.getStringAttribute('aws_managed_human_loop_request_source');
  }
  public set awsManagedHumanLoopRequestSource(value: string) {
    this._awsManagedHumanLoopRequestSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedHumanLoopRequestSourceInput() {
    return this._awsManagedHumanLoopRequestSource;
  }
}
export interface OutputConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#kms_key_id TfFlowDefinition#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_flow_definition#s3_output_path TfFlowDefinition#s3_output_path}
  */
  readonly s3OutputPath: string;
}
export class OutputConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutputConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
}
