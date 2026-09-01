// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsLambdaCapacityProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config AwsLambdaCapacityProvider#capacity_provider_scaling_config}
  */
  readonly capacityProviderScalingConfig?: AwsLambdaCapacityProvider.CapacityProviderScalingConfigProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#instance_requirements AwsLambdaCapacityProvider#instance_requirements}
  */
  readonly instanceRequirements?: AwsLambdaCapacityProvider.InstanceRequirementsProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#kms_key_arn AwsLambdaCapacityProvider#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#name AwsLambdaCapacityProvider#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#region AwsLambdaCapacityProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#tags AwsLambdaCapacityProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * permissions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#permissions_config AwsLambdaCapacityProvider#permissions_config}
  */
  readonly permissionsConfig?: AwsLambdaCapacityProvider.PermissionsConfigProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#timeouts AwsLambdaCapacityProvider#timeouts}
  */
  readonly timeouts?: AwsLambdaCapacityProvider.TimeoutsProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#vpc_config AwsLambdaCapacityProvider#vpc_config}
  */
  readonly vpcConfig?: AwsLambdaCapacityProvider.VpcConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider aws_lambda_capacity_provider}
*/
export class AwsLambdaCapacityProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_capacity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsLambdaCapacityProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsLambdaCapacityProvider to import
  * @param importFromId The id of the existing AwsLambdaCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsLambdaCapacityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_capacity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider aws_lambda_capacity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsLambdaCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AwsLambdaCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_capacity_provider',
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
    this._capacityProviderScalingConfig.internalValue = config.capacityProviderScalingConfig;
    this._instanceRequirements.internalValue = config.instanceRequirements;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._permissionsConfig.internalValue = config.permissionsConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_provider_scaling_config - computed: true, optional: true, required: false
  private _capacityProviderScalingConfig = new AwsLambdaCapacityProvider.CapacityProviderScalingConfigPropertyList(this, "capacity_provider_scaling_config", false);
  public get capacityProviderScalingConfig() {
    return this._capacityProviderScalingConfig;
  }
  public putCapacityProviderScalingConfig(value: AwsLambdaCapacityProvider.CapacityProviderScalingConfigProperty[] | cdktn.IResolvable) {
    this._capacityProviderScalingConfig.internalValue = value;
  }
  public resetCapacityProviderScalingConfig() {
    this._capacityProviderScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderScalingConfigInput() {
    return this._capacityProviderScalingConfig.internalValue;
  }

  // instance_requirements - computed: true, optional: true, required: false
  private _instanceRequirements = new AwsLambdaCapacityProvider.InstanceRequirementsPropertyList(this, "instance_requirements", false);
  public get instanceRequirements() {
    return this._instanceRequirements;
  }
  public putInstanceRequirements(value: AwsLambdaCapacityProvider.InstanceRequirementsProperty[] | cdktn.IResolvable) {
    this._instanceRequirements.internalValue = value;
  }
  public resetInstanceRequirements() {
    this._instanceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRequirementsInput() {
    return this._instanceRequirements.internalValue;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // permissions_config - computed: false, optional: true, required: false
  private _permissionsConfig = new AwsLambdaCapacityProvider.PermissionsConfigPropertyList(this, "permissions_config", false);
  public get permissionsConfig() {
    return this._permissionsConfig;
  }
  public putPermissionsConfig(value: AwsLambdaCapacityProvider.PermissionsConfigProperty[] | cdktn.IResolvable) {
    this._permissionsConfig.internalValue = value;
  }
  public resetPermissionsConfig() {
    this._permissionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsConfigInput() {
    return this._permissionsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsLambdaCapacityProvider.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsLambdaCapacityProvider.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new AwsLambdaCapacityProvider.VpcConfigPropertyList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: AwsLambdaCapacityProvider.VpcConfigProperty[] | cdktn.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_provider_scaling_config: cdktn.listMapper(awsLambdaCapacityProviderCapacityProviderScalingConfigPropertyToTerraform, false)(this._capacityProviderScalingConfig.internalValue),
      instance_requirements: cdktn.listMapper(awsLambdaCapacityProviderInstanceRequirementsPropertyToTerraform, false)(this._instanceRequirements.internalValue),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      permissions_config: cdktn.listMapper(awsLambdaCapacityProviderPermissionsConfigPropertyToTerraform, true)(this._permissionsConfig.internalValue),
      timeouts: awsLambdaCapacityProviderTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      vpc_config: cdktn.listMapper(awsLambdaCapacityProviderVpcConfigPropertyToTerraform, true)(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_provider_scaling_config: {
        value: cdktn.listMapperHcl(awsLambdaCapacityProviderCapacityProviderScalingConfigPropertyToHclTerraform, false)(this._capacityProviderScalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaCapacityProvider.CapacityProviderScalingConfigPropertyList",
      },
      instance_requirements: {
        value: cdktn.listMapperHcl(awsLambdaCapacityProviderInstanceRequirementsPropertyToHclTerraform, false)(this._instanceRequirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaCapacityProvider.InstanceRequirementsPropertyList",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
      permissions_config: {
        value: cdktn.listMapperHcl(awsLambdaCapacityProviderPermissionsConfigPropertyToHclTerraform, true)(this._permissionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaCapacityProvider.PermissionsConfigPropertyList",
      },
      timeouts: {
        value: awsLambdaCapacityProviderTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsLambdaCapacityProvider.TimeoutsProperty",
      },
      vpc_config: {
        value: cdktn.listMapperHcl(awsLambdaCapacityProviderVpcConfigPropertyToHclTerraform, true)(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaCapacityProvider.VpcConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsLambdaCapacityProviderScalingPoliciesPropertyToTerraform(struct?: AwsLambdaCapacityProvider.ScalingPoliciesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function awsLambdaCapacityProviderScalingPoliciesPropertyToHclTerraform(struct?: AwsLambdaCapacityProvider.ScalingPoliciesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaCapacityProviderCapacityProviderScalingConfigPropertyToTerraform(struct?: AwsLambdaCapacityProvider.CapacityProviderScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_vcpu_count: cdktn.numberToTerraform(struct!.maxVcpuCount),
    scaling_mode: cdktn.stringToTerraform(struct!.scalingMode),
    scaling_policies: cdktn.listMapper(awsLambdaCapacityProviderScalingPoliciesPropertyToTerraform, false)(struct!.scalingPolicies),
  }
}


export function awsLambdaCapacityProviderCapacityProviderScalingConfigPropertyToHclTerraform(struct?: AwsLambdaCapacityProvider.CapacityProviderScalingConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_vcpu_count: {
      value: cdktn.numberToHclTerraform(struct!.maxVcpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_mode: {
      value: cdktn.stringToHclTerraform(struct!.scalingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_policies: {
      value: cdktn.listMapperHcl(awsLambdaCapacityProviderScalingPoliciesPropertyToHclTerraform, false)(struct!.scalingPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "ScalingPoliciesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaCapacityProviderInstanceRequirementsPropertyToTerraform(struct?: AwsLambdaCapacityProvider.InstanceRequirementsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
    architectures: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.architectures),
    excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
  }
}


export function awsLambdaCapacityProviderInstanceRequirementsPropertyToHclTerraform(struct?: AwsLambdaCapacityProvider.InstanceRequirementsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    architectures: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaCapacityProviderPermissionsConfigPropertyToTerraform(struct?: AwsLambdaCapacityProvider.PermissionsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_provider_operator_role_arn: cdktn.stringToTerraform(struct!.capacityProviderOperatorRoleArn),
  }
}


export function awsLambdaCapacityProviderPermissionsConfigPropertyToHclTerraform(struct?: AwsLambdaCapacityProvider.PermissionsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_provider_operator_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.capacityProviderOperatorRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaCapacityProviderTimeoutsPropertyToTerraform(struct?: AwsLambdaCapacityProvider.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsLambdaCapacityProviderTimeoutsPropertyToHclTerraform(struct?: AwsLambdaCapacityProvider.TimeoutsProperty | cdktn.IResolvable): any {
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
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
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


export function awsLambdaCapacityProviderVpcConfigPropertyToTerraform(struct?: AwsLambdaCapacityProvider.VpcConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsLambdaCapacityProviderVpcConfigPropertyToHclTerraform(struct?: AwsLambdaCapacityProvider.VpcConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsLambdaCapacityProvider {
export interface ScalingPoliciesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#predefined_metric_type AwsLambdaCapacityProvider#predefined_metric_type}
  */
  readonly predefinedMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#target_value AwsLambdaCapacityProvider#target_value}
  */
  readonly targetValue?: number;
}
export class ScalingPoliciesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ScalingPoliciesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScalingPoliciesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedMetricType = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedMetricType = value.predefinedMetricType;
      this._targetValue = value.targetValue;
    }
  }

  // predefined_metric_type - computed: true, optional: true, required: false
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  public resetPredefinedMetricType() {
    this._predefinedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

export class ScalingPoliciesPropertyList extends cdktn.ComplexList {
  public internalValue? : ScalingPoliciesProperty[] | cdktn.IResolvable

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
  public get(index: number): ScalingPoliciesPropertyOutputReference {
    return new ScalingPoliciesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapacityProviderScalingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#max_vcpu_count AwsLambdaCapacityProvider#max_vcpu_count}
  */
  readonly maxVcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#scaling_mode AwsLambdaCapacityProvider#scaling_mode}
  */
  readonly scalingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#scaling_policies AwsLambdaCapacityProvider#scaling_policies}
  */
  readonly scalingPolicies?: ScalingPoliciesProperty[] | cdktn.IResolvable;
}
export class CapacityProviderScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CapacityProviderScalingConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVcpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpuCount = this._maxVcpuCount;
    }
    if (this._scalingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingMode = this._scalingMode;
    }
    if (this._scalingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicies = this._scalingPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityProviderScalingConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVcpuCount = undefined;
      this._scalingMode = undefined;
      this._scalingPolicies.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVcpuCount = value.maxVcpuCount;
      this._scalingMode = value.scalingMode;
      this._scalingPolicies.internalValue = value.scalingPolicies;
    }
  }

  // max_vcpu_count - computed: true, optional: true, required: false
  private _maxVcpuCount?: number; 
  public get maxVcpuCount() {
    return this.getNumberAttribute('max_vcpu_count');
  }
  public set maxVcpuCount(value: number) {
    this._maxVcpuCount = value;
  }
  public resetMaxVcpuCount() {
    this._maxVcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVcpuCountInput() {
    return this._maxVcpuCount;
  }

  // scaling_mode - computed: true, optional: true, required: false
  private _scalingMode?: string; 
  public get scalingMode() {
    return this.getStringAttribute('scaling_mode');
  }
  public set scalingMode(value: string) {
    this._scalingMode = value;
  }
  public resetScalingMode() {
    this._scalingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingModeInput() {
    return this._scalingMode;
  }

  // scaling_policies - computed: true, optional: true, required: false
  private _scalingPolicies = new ScalingPoliciesPropertyList(this, "scaling_policies", false);
  public get scalingPolicies() {
    return this._scalingPolicies;
  }
  public putScalingPolicies(value: ScalingPoliciesProperty[] | cdktn.IResolvable) {
    this._scalingPolicies.internalValue = value;
  }
  public resetScalingPolicies() {
    this._scalingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPoliciesInput() {
    return this._scalingPolicies.internalValue;
  }
}

export class CapacityProviderScalingConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CapacityProviderScalingConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CapacityProviderScalingConfigPropertyOutputReference {
    return new CapacityProviderScalingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceRequirementsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#allowed_instance_types AwsLambdaCapacityProvider#allowed_instance_types}
  */
  readonly allowedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#architectures AwsLambdaCapacityProvider#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#excluded_instance_types AwsLambdaCapacityProvider#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
}
export class InstanceRequirementsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InstanceRequirementsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
    }
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._excludedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceRequirementsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInstanceTypes = undefined;
      this._architectures = undefined;
      this._excludedInstanceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInstanceTypes = value.allowedInstanceTypes;
      this._architectures = value.architectures;
      this._excludedInstanceTypes = value.excludedInstanceTypes;
    }
  }

  // allowed_instance_types - computed: true, optional: true, required: false
  private _allowedInstanceTypes?: string[]; 
  public get allowedInstanceTypes() {
    return this.getListAttribute('allowed_instance_types');
  }
  public set allowedInstanceTypes(value: string[]) {
    this._allowedInstanceTypes = value;
  }
  public resetAllowedInstanceTypes() {
    this._allowedInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInstanceTypesInput() {
    return this._allowedInstanceTypes;
  }

  // architectures - computed: true, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return this.getListAttribute('architectures');
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // excluded_instance_types - computed: true, optional: true, required: false
  private _excludedInstanceTypes?: string[]; 
  public get excludedInstanceTypes() {
    return this.getListAttribute('excluded_instance_types');
  }
  public set excludedInstanceTypes(value: string[]) {
    this._excludedInstanceTypes = value;
  }
  public resetExcludedInstanceTypes() {
    this._excludedInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInstanceTypesInput() {
    return this._excludedInstanceTypes;
  }
}

export class InstanceRequirementsPropertyList extends cdktn.ComplexList {
  public internalValue? : InstanceRequirementsProperty[] | cdktn.IResolvable

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
  public get(index: number): InstanceRequirementsPropertyOutputReference {
    return new InstanceRequirementsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn AwsLambdaCapacityProvider#capacity_provider_operator_role_arn}
  */
  readonly capacityProviderOperatorRoleArn: string;
}
export class PermissionsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PermissionsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityProviderOperatorRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderOperatorRoleArn = this._capacityProviderOperatorRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityProviderOperatorRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityProviderOperatorRoleArn = value.capacityProviderOperatorRoleArn;
    }
  }

  // capacity_provider_operator_role_arn - computed: false, optional: false, required: true
  private _capacityProviderOperatorRoleArn?: string; 
  public get capacityProviderOperatorRoleArn() {
    return this.getStringAttribute('capacity_provider_operator_role_arn');
  }
  public set capacityProviderOperatorRoleArn(value: string) {
    this._capacityProviderOperatorRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderOperatorRoleArnInput() {
    return this._capacityProviderOperatorRoleArn;
  }
}

export class PermissionsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : PermissionsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): PermissionsConfigPropertyOutputReference {
    return new PermissionsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#create AwsLambdaCapacityProvider#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#delete AwsLambdaCapacityProvider#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#update AwsLambdaCapacityProvider#update}
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
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
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
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#security_group_ids AwsLambdaCapacityProvider#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_capacity_provider#subnet_ids AwsLambdaCapacityProvider#subnet_ids}
  */
  readonly subnetIds: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

export class VpcConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : VpcConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): VpcConfigPropertyOutputReference {
    return new VpcConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
