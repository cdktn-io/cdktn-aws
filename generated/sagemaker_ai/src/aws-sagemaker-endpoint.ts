// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSagemakerEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#endpoint_config_name AwsSagemakerEndpoint#endpoint_config_name}
  */
  readonly endpointConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#id AwsSagemakerEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#name AwsSagemakerEndpoint#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#region AwsSagemakerEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#tags AwsSagemakerEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#tags_all AwsSagemakerEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * deployment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#deployment_config AwsSagemakerEndpoint#deployment_config}
  */
  readonly deploymentConfig?: AwsSagemakerEndpoint.DeploymentConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint aws_sagemaker_endpoint}
*/
export class AwsSagemakerEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSagemakerEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSagemakerEndpoint to import
  * @param importFromId The id of the existing AwsSagemakerEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSagemakerEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint aws_sagemaker_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSagemakerEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSagemakerEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_endpoint',
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
    this._endpointConfigName = config.endpointConfigName;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._deploymentConfig.internalValue = config.deploymentConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_config_name - computed: false, optional: false, required: true
  private _endpointConfigName?: string; 
  public get endpointConfigName() {
    return this.getStringAttribute('endpoint_config_name');
  }
  public set endpointConfigName(value: string) {
    this._endpointConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigNameInput() {
    return this._endpointConfigName;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // deployment_config - computed: false, optional: true, required: false
  private _deploymentConfig = new AwsSagemakerEndpoint.DeploymentConfigPropertyOutputReference(this, "deployment_config");
  public get deploymentConfig() {
    return this._deploymentConfig;
  }
  public putDeploymentConfig(value: AwsSagemakerEndpoint.DeploymentConfigProperty) {
    this._deploymentConfig.internalValue = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_config_name: cdktn.stringToTerraform(this._endpointConfigName),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      deployment_config: awsSagemakerEndpointDeploymentConfigPropertyToTerraform(this._deploymentConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_config_name: {
        value: cdktn.stringToHclTerraform(this._endpointConfigName),
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
      deployment_config: {
        value: awsSagemakerEndpointDeploymentConfigPropertyToHclTerraform(this._deploymentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSagemakerEndpoint.DeploymentConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSagemakerEndpointAlarmsPropertyToTerraform(struct?: AwsSagemakerEndpoint.AlarmsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
  }
}


export function awsSagemakerEndpointAlarmsPropertyToHclTerraform(struct?: AwsSagemakerEndpoint.AlarmsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointAutoRollbackConfigurationPropertyToTerraform(struct?: AwsSagemakerEndpoint.AutoRollbackConfigurationPropertyOutputReference | AwsSagemakerEndpoint.AutoRollbackConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarms: cdktn.listMapper(awsSagemakerEndpointAlarmsPropertyToTerraform, true)(struct!.alarms),
  }
}


export function awsSagemakerEndpointAutoRollbackConfigurationPropertyToHclTerraform(struct?: AwsSagemakerEndpoint.AutoRollbackConfigurationPropertyOutputReference | AwsSagemakerEndpoint.AutoRollbackConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarms: {
      value: cdktn.listMapperHcl(awsSagemakerEndpointAlarmsPropertyToHclTerraform, true)(struct!.alarms),
      isBlock: true,
      type: "set",
      storageClassType: "AlarmsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointCanarySizePropertyToTerraform(struct?: AwsSagemakerEndpoint.CanarySizePropertyOutputReference | AwsSagemakerEndpoint.CanarySizeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsSagemakerEndpointCanarySizePropertyToHclTerraform(struct?: AwsSagemakerEndpoint.CanarySizePropertyOutputReference | AwsSagemakerEndpoint.CanarySizeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointLinearStepSizePropertyToTerraform(struct?: AwsSagemakerEndpoint.LinearStepSizePropertyOutputReference | AwsSagemakerEndpoint.LinearStepSizeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsSagemakerEndpointLinearStepSizePropertyToHclTerraform(struct?: AwsSagemakerEndpoint.LinearStepSizePropertyOutputReference | AwsSagemakerEndpoint.LinearStepSizeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointTrafficRoutingConfigurationPropertyToTerraform(struct?: AwsSagemakerEndpoint.TrafficRoutingConfigurationPropertyOutputReference | AwsSagemakerEndpoint.TrafficRoutingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
    canary_size: awsSagemakerEndpointCanarySizePropertyToTerraform(struct!.canarySize),
    linear_step_size: awsSagemakerEndpointLinearStepSizePropertyToTerraform(struct!.linearStepSize),
  }
}


export function awsSagemakerEndpointTrafficRoutingConfigurationPropertyToHclTerraform(struct?: AwsSagemakerEndpoint.TrafficRoutingConfigurationPropertyOutputReference | AwsSagemakerEndpoint.TrafficRoutingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_interval_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    canary_size: {
      value: awsSagemakerEndpointCanarySizePropertyToHclTerraform(struct!.canarySize),
      isBlock: true,
      type: "list",
      storageClassType: "CanarySizePropertyList",
    },
    linear_step_size: {
      value: awsSagemakerEndpointLinearStepSizePropertyToHclTerraform(struct!.linearStepSize),
      isBlock: true,
      type: "list",
      storageClassType: "LinearStepSizePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointBlueGreenUpdatePolicyPropertyToTerraform(struct?: AwsSagemakerEndpoint.BlueGreenUpdatePolicyPropertyOutputReference | AwsSagemakerEndpoint.BlueGreenUpdatePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_execution_timeout_in_seconds: cdktn.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    termination_wait_in_seconds: cdktn.numberToTerraform(struct!.terminationWaitInSeconds),
    traffic_routing_configuration: awsSagemakerEndpointTrafficRoutingConfigurationPropertyToTerraform(struct!.trafficRoutingConfiguration),
  }
}


export function awsSagemakerEndpointBlueGreenUpdatePolicyPropertyToHclTerraform(struct?: AwsSagemakerEndpoint.BlueGreenUpdatePolicyPropertyOutputReference | AwsSagemakerEndpoint.BlueGreenUpdatePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_execution_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    termination_wait_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.terminationWaitInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_routing_configuration: {
      value: awsSagemakerEndpointTrafficRoutingConfigurationPropertyToHclTerraform(struct!.trafficRoutingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TrafficRoutingConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointMaximumBatchSizePropertyToTerraform(struct?: AwsSagemakerEndpoint.MaximumBatchSizePropertyOutputReference | AwsSagemakerEndpoint.MaximumBatchSizeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsSagemakerEndpointMaximumBatchSizePropertyToHclTerraform(struct?: AwsSagemakerEndpoint.MaximumBatchSizePropertyOutputReference | AwsSagemakerEndpoint.MaximumBatchSizeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointRollbackMaximumBatchSizePropertyToTerraform(struct?: AwsSagemakerEndpoint.RollbackMaximumBatchSizePropertyOutputReference | AwsSagemakerEndpoint.RollbackMaximumBatchSizeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsSagemakerEndpointRollbackMaximumBatchSizePropertyToHclTerraform(struct?: AwsSagemakerEndpoint.RollbackMaximumBatchSizePropertyOutputReference | AwsSagemakerEndpoint.RollbackMaximumBatchSizeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointRollingUpdatePolicyPropertyToTerraform(struct?: AwsSagemakerEndpoint.RollingUpdatePolicyPropertyOutputReference | AwsSagemakerEndpoint.RollingUpdatePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_execution_timeout_in_seconds: cdktn.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
    maximum_batch_size: awsSagemakerEndpointMaximumBatchSizePropertyToTerraform(struct!.maximumBatchSize),
    rollback_maximum_batch_size: awsSagemakerEndpointRollbackMaximumBatchSizePropertyToTerraform(struct!.rollbackMaximumBatchSize),
  }
}


export function awsSagemakerEndpointRollingUpdatePolicyPropertyToHclTerraform(struct?: AwsSagemakerEndpoint.RollingUpdatePolicyPropertyOutputReference | AwsSagemakerEndpoint.RollingUpdatePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_execution_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_interval_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_batch_size: {
      value: awsSagemakerEndpointMaximumBatchSizePropertyToHclTerraform(struct!.maximumBatchSize),
      isBlock: true,
      type: "list",
      storageClassType: "MaximumBatchSizePropertyList",
    },
    rollback_maximum_batch_size: {
      value: awsSagemakerEndpointRollbackMaximumBatchSizePropertyToHclTerraform(struct!.rollbackMaximumBatchSize),
      isBlock: true,
      type: "list",
      storageClassType: "RollbackMaximumBatchSizePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSagemakerEndpointDeploymentConfigPropertyToTerraform(struct?: AwsSagemakerEndpoint.DeploymentConfigPropertyOutputReference | AwsSagemakerEndpoint.DeploymentConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_rollback_configuration: awsSagemakerEndpointAutoRollbackConfigurationPropertyToTerraform(struct!.autoRollbackConfiguration),
    blue_green_update_policy: awsSagemakerEndpointBlueGreenUpdatePolicyPropertyToTerraform(struct!.blueGreenUpdatePolicy),
    rolling_update_policy: awsSagemakerEndpointRollingUpdatePolicyPropertyToTerraform(struct!.rollingUpdatePolicy),
  }
}


export function awsSagemakerEndpointDeploymentConfigPropertyToHclTerraform(struct?: AwsSagemakerEndpoint.DeploymentConfigPropertyOutputReference | AwsSagemakerEndpoint.DeploymentConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_rollback_configuration: {
      value: awsSagemakerEndpointAutoRollbackConfigurationPropertyToHclTerraform(struct!.autoRollbackConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AutoRollbackConfigurationPropertyList",
    },
    blue_green_update_policy: {
      value: awsSagemakerEndpointBlueGreenUpdatePolicyPropertyToHclTerraform(struct!.blueGreenUpdatePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BlueGreenUpdatePolicyPropertyList",
    },
    rolling_update_policy: {
      value: awsSagemakerEndpointRollingUpdatePolicyPropertyToHclTerraform(struct!.rollingUpdatePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RollingUpdatePolicyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSagemakerEndpoint {
export interface AlarmsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#alarm_name AwsSagemakerEndpoint#alarm_name}
  */
  readonly alarmName: string;
}
export class AlarmsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlarmsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlarmsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
    }
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }
}

export class AlarmsPropertyList extends cdktn.ComplexList {
  public internalValue? : AlarmsProperty[] | cdktn.IResolvable

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
  public get(index: number): AlarmsPropertyOutputReference {
    return new AlarmsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoRollbackConfigurationProperty {
  /**
  * alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#alarms AwsSagemakerEndpoint#alarms}
  */
  readonly alarms?: AlarmsProperty[] | cdktn.IResolvable;
}
export class AutoRollbackConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoRollbackConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoRollbackConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms.internalValue = value.alarms;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms = new AlarmsPropertyList(this, "alarms", true);
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: AlarmsProperty[] | cdktn.IResolvable) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }
}
export interface CanarySizeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#type AwsSagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#value AwsSagemakerEndpoint#value}
  */
  readonly value: number;
}
export class CanarySizePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanarySizeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanarySizeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface LinearStepSizeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#type AwsSagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#value AwsSagemakerEndpoint#value}
  */
  readonly value: number;
}
export class LinearStepSizePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinearStepSizeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinearStepSizeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TrafficRoutingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#type AwsSagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#wait_interval_in_seconds AwsSagemakerEndpoint#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds: number;
  /**
  * canary_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#canary_size AwsSagemakerEndpoint#canary_size}
  */
  readonly canarySize?: CanarySizeProperty;
  /**
  * linear_step_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#linear_step_size AwsSagemakerEndpoint#linear_step_size}
  */
  readonly linearStepSize?: LinearStepSizeProperty;
}
export class TrafficRoutingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrafficRoutingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._waitIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
    }
    if (this._canarySize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canarySize = this._canarySize?.internalValue;
    }
    if (this._linearStepSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearStepSize = this._linearStepSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficRoutingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._waitIntervalInSeconds = undefined;
      this._canarySize.internalValue = undefined;
      this._linearStepSize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._waitIntervalInSeconds = value.waitIntervalInSeconds;
      this._canarySize.internalValue = value.canarySize;
      this._linearStepSize.internalValue = value.linearStepSize;
    }
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

  // wait_interval_in_seconds - computed: false, optional: false, required: true
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds;
  }

  // canary_size - computed: false, optional: true, required: false
  private _canarySize = new CanarySizePropertyOutputReference(this, "canary_size");
  public get canarySize() {
    return this._canarySize;
  }
  public putCanarySize(value: CanarySizeProperty) {
    this._canarySize.internalValue = value;
  }
  public resetCanarySize() {
    this._canarySize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canarySizeInput() {
    return this._canarySize.internalValue;
  }

  // linear_step_size - computed: false, optional: true, required: false
  private _linearStepSize = new LinearStepSizePropertyOutputReference(this, "linear_step_size");
  public get linearStepSize() {
    return this._linearStepSize;
  }
  public putLinearStepSize(value: LinearStepSizeProperty) {
    this._linearStepSize.internalValue = value;
  }
  public resetLinearStepSize() {
    this._linearStepSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearStepSizeInput() {
    return this._linearStepSize.internalValue;
  }
}
export interface BlueGreenUpdatePolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds AwsSagemakerEndpoint#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#termination_wait_in_seconds AwsSagemakerEndpoint#termination_wait_in_seconds}
  */
  readonly terminationWaitInSeconds?: number;
  /**
  * traffic_routing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#traffic_routing_configuration AwsSagemakerEndpoint#traffic_routing_configuration}
  */
  readonly trafficRoutingConfiguration: TrafficRoutingConfigurationProperty;
}
export class BlueGreenUpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueGreenUpdatePolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumExecutionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
    }
    if (this._terminationWaitInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationWaitInSeconds = this._terminationWaitInSeconds;
    }
    if (this._trafficRoutingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficRoutingConfiguration = this._trafficRoutingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueGreenUpdatePolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumExecutionTimeoutInSeconds = undefined;
      this._terminationWaitInSeconds = undefined;
      this._trafficRoutingConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
      this._terminationWaitInSeconds = value.terminationWaitInSeconds;
      this._trafficRoutingConfiguration.internalValue = value.trafficRoutingConfiguration;
    }
  }

  // maximum_execution_timeout_in_seconds - computed: false, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds;
  }

  // termination_wait_in_seconds - computed: false, optional: true, required: false
  private _terminationWaitInSeconds?: number; 
  public get terminationWaitInSeconds() {
    return this.getNumberAttribute('termination_wait_in_seconds');
  }
  public set terminationWaitInSeconds(value: number) {
    this._terminationWaitInSeconds = value;
  }
  public resetTerminationWaitInSeconds() {
    this._terminationWaitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationWaitInSecondsInput() {
    return this._terminationWaitInSeconds;
  }

  // traffic_routing_configuration - computed: false, optional: false, required: true
  private _trafficRoutingConfiguration = new TrafficRoutingConfigurationPropertyOutputReference(this, "traffic_routing_configuration");
  public get trafficRoutingConfiguration() {
    return this._trafficRoutingConfiguration;
  }
  public putTrafficRoutingConfiguration(value: TrafficRoutingConfigurationProperty) {
    this._trafficRoutingConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingConfigurationInput() {
    return this._trafficRoutingConfiguration.internalValue;
  }
}
export interface MaximumBatchSizeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#type AwsSagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#value AwsSagemakerEndpoint#value}
  */
  readonly value: number;
}
export class MaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaximumBatchSizeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaximumBatchSizeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RollbackMaximumBatchSizeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#type AwsSagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#value AwsSagemakerEndpoint#value}
  */
  readonly value: number;
}
export class RollbackMaximumBatchSizePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RollbackMaximumBatchSizeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RollbackMaximumBatchSizeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RollingUpdatePolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds AwsSagemakerEndpoint#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#wait_interval_in_seconds AwsSagemakerEndpoint#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds: number;
  /**
  * maximum_batch_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#maximum_batch_size AwsSagemakerEndpoint#maximum_batch_size}
  */
  readonly maximumBatchSize: MaximumBatchSizeProperty;
  /**
  * rollback_maximum_batch_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#rollback_maximum_batch_size AwsSagemakerEndpoint#rollback_maximum_batch_size}
  */
  readonly rollbackMaximumBatchSize?: RollbackMaximumBatchSizeProperty;
}
export class RollingUpdatePolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RollingUpdatePolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumExecutionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
    }
    if (this._waitIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
    }
    if (this._maximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
    }
    if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RollingUpdatePolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumExecutionTimeoutInSeconds = undefined;
      this._waitIntervalInSeconds = undefined;
      this._maximumBatchSize.internalValue = undefined;
      this._rollbackMaximumBatchSize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
      this._waitIntervalInSeconds = value.waitIntervalInSeconds;
      this._maximumBatchSize.internalValue = value.maximumBatchSize;
      this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
    }
  }

  // maximum_execution_timeout_in_seconds - computed: false, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds;
  }

  // wait_interval_in_seconds - computed: false, optional: false, required: true
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds;
  }

  // maximum_batch_size - computed: false, optional: false, required: true
  private _maximumBatchSize = new MaximumBatchSizePropertyOutputReference(this, "maximum_batch_size");
  public get maximumBatchSize() {
    return this._maximumBatchSize;
  }
  public putMaximumBatchSize(value: MaximumBatchSizeProperty) {
    this._maximumBatchSize.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchSizeInput() {
    return this._maximumBatchSize.internalValue;
  }

  // rollback_maximum_batch_size - computed: false, optional: true, required: false
  private _rollbackMaximumBatchSize = new RollbackMaximumBatchSizePropertyOutputReference(this, "rollback_maximum_batch_size");
  public get rollbackMaximumBatchSize() {
    return this._rollbackMaximumBatchSize;
  }
  public putRollbackMaximumBatchSize(value: RollbackMaximumBatchSizeProperty) {
    this._rollbackMaximumBatchSize.internalValue = value;
  }
  public resetRollbackMaximumBatchSize() {
    this._rollbackMaximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackMaximumBatchSizeInput() {
    return this._rollbackMaximumBatchSize.internalValue;
  }
}
export interface DeploymentConfigProperty {
  /**
  * auto_rollback_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#auto_rollback_configuration AwsSagemakerEndpoint#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: AutoRollbackConfigurationProperty;
  /**
  * blue_green_update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#blue_green_update_policy AwsSagemakerEndpoint#blue_green_update_policy}
  */
  readonly blueGreenUpdatePolicy?: BlueGreenUpdatePolicyProperty;
  /**
  * rolling_update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_endpoint#rolling_update_policy AwsSagemakerEndpoint#rolling_update_policy}
  */
  readonly rollingUpdatePolicy?: RollingUpdatePolicyProperty;
}
export class DeploymentConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRollbackConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
    }
    if (this._blueGreenUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenUpdatePolicy = this._blueGreenUpdatePolicy?.internalValue;
    }
    if (this._rollingUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRollbackConfiguration.internalValue = undefined;
      this._blueGreenUpdatePolicy.internalValue = undefined;
      this._rollingUpdatePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
      this._blueGreenUpdatePolicy.internalValue = value.blueGreenUpdatePolicy;
      this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
    }
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration = new AutoRollbackConfigurationPropertyOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public putAutoRollbackConfiguration(value: AutoRollbackConfigurationProperty) {
    this._autoRollbackConfiguration.internalValue = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration.internalValue;
  }

  // blue_green_update_policy - computed: false, optional: true, required: false
  private _blueGreenUpdatePolicy = new BlueGreenUpdatePolicyPropertyOutputReference(this, "blue_green_update_policy");
  public get blueGreenUpdatePolicy() {
    return this._blueGreenUpdatePolicy;
  }
  public putBlueGreenUpdatePolicy(value: BlueGreenUpdatePolicyProperty) {
    this._blueGreenUpdatePolicy.internalValue = value;
  }
  public resetBlueGreenUpdatePolicy() {
    this._blueGreenUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenUpdatePolicyInput() {
    return this._blueGreenUpdatePolicy.internalValue;
  }

  // rolling_update_policy - computed: false, optional: true, required: false
  private _rollingUpdatePolicy = new RollingUpdatePolicyPropertyOutputReference(this, "rolling_update_policy");
  public get rollingUpdatePolicy() {
    return this._rollingUpdatePolicy;
  }
  public putRollingUpdatePolicy(value: RollingUpdatePolicyProperty) {
    this._rollingUpdatePolicy.internalValue = value;
  }
  public resetRollingUpdatePolicy() {
    this._rollingUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdatePolicyInput() {
    return this._rollingUpdatePolicy.internalValue;
  }
}
}
