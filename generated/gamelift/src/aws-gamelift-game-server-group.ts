// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfGameServerGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#balancing_strategy TfGameServerGroup#balancing_strategy}
  */
  readonly balancingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#game_server_group_name TfGameServerGroup#game_server_group_name}
  */
  readonly gameServerGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#game_server_protection_policy TfGameServerGroup#game_server_protection_policy}
  */
  readonly gameServerProtectionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#id TfGameServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#max_size TfGameServerGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#min_size TfGameServerGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#region TfGameServerGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#role_arn TfGameServerGroup#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#tags TfGameServerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#tags_all TfGameServerGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#vpc_subnets TfGameServerGroup#vpc_subnets}
  */
  readonly vpcSubnets?: string[];
  /**
  * auto_scaling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#auto_scaling_policy TfGameServerGroup#auto_scaling_policy}
  */
  readonly autoScalingPolicy?: TfGameServerGroup.AutoScalingPolicyProperty;
  /**
  * instance_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#instance_definition TfGameServerGroup#instance_definition}
  */
  readonly instanceDefinition: TfGameServerGroup.InstanceDefinitionProperty[] | cdktn.IResolvable;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#launch_template TfGameServerGroup#launch_template}
  */
  readonly launchTemplate: TfGameServerGroup.LaunchTemplateProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#timeouts TfGameServerGroup#timeouts}
  */
  readonly timeouts?: TfGameServerGroup.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group aws_gamelift_game_server_group}
*/
export class TfGameServerGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_gamelift_game_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfGameServerGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfGameServerGroup to import
  * @param importFromId The id of the existing TfGameServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfGameServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_gamelift_game_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group aws_gamelift_game_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfGameServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TfGameServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_game_server_group',
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
    this._balancingStrategy = config.balancingStrategy;
    this._gameServerGroupName = config.gameServerGroupName;
    this._gameServerProtectionPolicy = config.gameServerProtectionPolicy;
    this._id = config.id;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcSubnets = config.vpcSubnets;
    this._autoScalingPolicy.internalValue = config.autoScalingPolicy;
    this._instanceDefinition.internalValue = config.instanceDefinition;
    this._launchTemplate.internalValue = config.launchTemplate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_scaling_group_arn - computed: true, optional: false, required: false
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }

  // balancing_strategy - computed: true, optional: true, required: false
  private _balancingStrategy?: string; 
  public get balancingStrategy() {
    return this.getStringAttribute('balancing_strategy');
  }
  public set balancingStrategy(value: string) {
    this._balancingStrategy = value;
  }
  public resetBalancingStrategy() {
    this._balancingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancingStrategyInput() {
    return this._balancingStrategy;
  }

  // game_server_group_name - computed: false, optional: false, required: true
  private _gameServerGroupName?: string; 
  public get gameServerGroupName() {
    return this.getStringAttribute('game_server_group_name');
  }
  public set gameServerGroupName(value: string) {
    this._gameServerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerGroupNameInput() {
    return this._gameServerGroupName;
  }

  // game_server_protection_policy - computed: true, optional: true, required: false
  private _gameServerProtectionPolicy?: string; 
  public get gameServerProtectionPolicy() {
    return this.getStringAttribute('game_server_protection_policy');
  }
  public set gameServerProtectionPolicy(value: string) {
    this._gameServerProtectionPolicy = value;
  }
  public resetGameServerProtectionPolicy() {
    this._gameServerProtectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerProtectionPolicyInput() {
    return this._gameServerProtectionPolicy;
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

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // vpc_subnets - computed: false, optional: true, required: false
  private _vpcSubnets?: string[]; 
  public get vpcSubnets() {
    return cdktn.Fn.tolist(this.getListAttribute('vpc_subnets'));
  }
  public set vpcSubnets(value: string[]) {
    this._vpcSubnets = value;
  }
  public resetVpcSubnets() {
    this._vpcSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetsInput() {
    return this._vpcSubnets;
  }

  // auto_scaling_policy - computed: false, optional: true, required: false
  private _autoScalingPolicy = new TfGameServerGroup.AutoScalingPolicyPropertyOutputReference(this, "auto_scaling_policy");
  public get autoScalingPolicy() {
    return this._autoScalingPolicy;
  }
  public putAutoScalingPolicy(value: TfGameServerGroup.AutoScalingPolicyProperty) {
    this._autoScalingPolicy.internalValue = value;
  }
  public resetAutoScalingPolicy() {
    this._autoScalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPolicyInput() {
    return this._autoScalingPolicy.internalValue;
  }

  // instance_definition - computed: false, optional: false, required: true
  private _instanceDefinition = new TfGameServerGroup.InstanceDefinitionPropertyList(this, "instance_definition", true);
  public get instanceDefinition() {
    return this._instanceDefinition;
  }
  public putInstanceDefinition(value: TfGameServerGroup.InstanceDefinitionProperty[] | cdktn.IResolvable) {
    this._instanceDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDefinitionInput() {
    return this._instanceDefinition.internalValue;
  }

  // launch_template - computed: false, optional: false, required: true
  private _launchTemplate = new TfGameServerGroup.LaunchTemplatePropertyOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: TfGameServerGroup.LaunchTemplateProperty) {
    this._launchTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfGameServerGroup.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfGameServerGroup.TimeoutsProperty) {
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
      balancing_strategy: cdktn.stringToTerraform(this._balancingStrategy),
      game_server_group_name: cdktn.stringToTerraform(this._gameServerGroupName),
      game_server_protection_policy: cdktn.stringToTerraform(this._gameServerProtectionPolicy),
      id: cdktn.stringToTerraform(this._id),
      max_size: cdktn.numberToTerraform(this._maxSize),
      min_size: cdktn.numberToTerraform(this._minSize),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      vpc_subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSubnets),
      auto_scaling_policy: tfGameServerGroupAutoScalingPolicyPropertyToTerraform(this._autoScalingPolicy.internalValue),
      instance_definition: cdktn.listMapper(tfGameServerGroupInstanceDefinitionPropertyToTerraform, true)(this._instanceDefinition.internalValue),
      launch_template: tfGameServerGroupLaunchTemplatePropertyToTerraform(this._launchTemplate.internalValue),
      timeouts: tfGameServerGroupTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      balancing_strategy: {
        value: cdktn.stringToHclTerraform(this._balancingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      game_server_group_name: {
        value: cdktn.stringToHclTerraform(this._gameServerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      game_server_protection_policy: {
        value: cdktn.stringToHclTerraform(this._gameServerProtectionPolicy),
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
      max_size: {
        value: cdktn.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktn.numberToHclTerraform(this._minSize),
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
      vpc_subnets: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSubnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_scaling_policy: {
        value: tfGameServerGroupAutoScalingPolicyPropertyToHclTerraform(this._autoScalingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfGameServerGroup.AutoScalingPolicyPropertyList",
      },
      instance_definition: {
        value: cdktn.listMapperHcl(tfGameServerGroupInstanceDefinitionPropertyToHclTerraform, true)(this._instanceDefinition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfGameServerGroup.InstanceDefinitionPropertyList",
      },
      launch_template: {
        value: tfGameServerGroupLaunchTemplatePropertyToHclTerraform(this._launchTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfGameServerGroup.LaunchTemplatePropertyList",
      },
      timeouts: {
        value: tfGameServerGroupTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfGameServerGroup.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfGameServerGroupTargetTrackingConfigurationPropertyToTerraform(struct?: TfGameServerGroup.TargetTrackingConfigurationPropertyOutputReference | TfGameServerGroup.TargetTrackingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function tfGameServerGroupTargetTrackingConfigurationPropertyToHclTerraform(struct?: TfGameServerGroup.TargetTrackingConfigurationPropertyOutputReference | TfGameServerGroup.TargetTrackingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfGameServerGroupAutoScalingPolicyPropertyToTerraform(struct?: TfGameServerGroup.AutoScalingPolicyPropertyOutputReference | TfGameServerGroup.AutoScalingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    estimated_instance_warmup: cdktn.numberToTerraform(struct!.estimatedInstanceWarmup),
    target_tracking_configuration: tfGameServerGroupTargetTrackingConfigurationPropertyToTerraform(struct!.targetTrackingConfiguration),
  }
}


export function tfGameServerGroupAutoScalingPolicyPropertyToHclTerraform(struct?: TfGameServerGroup.AutoScalingPolicyPropertyOutputReference | TfGameServerGroup.AutoScalingPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    estimated_instance_warmup: {
      value: cdktn.numberToHclTerraform(struct!.estimatedInstanceWarmup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tracking_configuration: {
      value: tfGameServerGroupTargetTrackingConfigurationPropertyToHclTerraform(struct!.targetTrackingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TargetTrackingConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGameServerGroupInstanceDefinitionPropertyToTerraform(struct?: TfGameServerGroup.InstanceDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktn.stringToTerraform(struct!.weightedCapacity),
  }
}


export function tfGameServerGroupInstanceDefinitionPropertyToHclTerraform(struct?: TfGameServerGroup.InstanceDefinitionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weighted_capacity: {
      value: cdktn.stringToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGameServerGroupLaunchTemplatePropertyToTerraform(struct?: TfGameServerGroup.LaunchTemplatePropertyOutputReference | TfGameServerGroup.LaunchTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function tfGameServerGroupLaunchTemplatePropertyToHclTerraform(struct?: TfGameServerGroup.LaunchTemplatePropertyOutputReference | TfGameServerGroup.LaunchTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGameServerGroupTimeoutsPropertyToTerraform(struct?: TfGameServerGroup.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function tfGameServerGroupTimeoutsPropertyToHclTerraform(struct?: TfGameServerGroup.TimeoutsProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfGameServerGroup {
export interface TargetTrackingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#target_value TfGameServerGroup#target_value}
  */
  readonly targetValue: number;
}
export class TargetTrackingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetTrackingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetTrackingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetValue = value.targetValue;
    }
  }

  // target_value - computed: false, optional: false, required: true
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface AutoScalingPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#estimated_instance_warmup TfGameServerGroup#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * target_tracking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#target_tracking_configuration TfGameServerGroup#target_tracking_configuration}
  */
  readonly targetTrackingConfiguration: TargetTrackingConfigurationProperty;
}
export class AutoScalingPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoScalingPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._estimatedInstanceWarmup !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedInstanceWarmup = this._estimatedInstanceWarmup;
    }
    if (this._targetTrackingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingConfiguration = this._targetTrackingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoScalingPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._estimatedInstanceWarmup = undefined;
      this._targetTrackingConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._estimatedInstanceWarmup = value.estimatedInstanceWarmup;
      this._targetTrackingConfiguration.internalValue = value.targetTrackingConfiguration;
    }
  }

  // estimated_instance_warmup - computed: true, optional: true, required: false
  private _estimatedInstanceWarmup?: number; 
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup;
  }

  // target_tracking_configuration - computed: false, optional: false, required: true
  private _targetTrackingConfiguration = new TargetTrackingConfigurationPropertyOutputReference(this, "target_tracking_configuration");
  public get targetTrackingConfiguration() {
    return this._targetTrackingConfiguration;
  }
  public putTargetTrackingConfiguration(value: TargetTrackingConfigurationProperty) {
    this._targetTrackingConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingConfigurationInput() {
    return this._targetTrackingConfiguration.internalValue;
  }
}
export interface InstanceDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#instance_type TfGameServerGroup#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#weighted_capacity TfGameServerGroup#weighted_capacity}
  */
  readonly weightedCapacity?: string;
}
export class InstanceDefinitionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InstanceDefinitionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDefinitionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._weightedCapacity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._weightedCapacity = value.weightedCapacity;
    }
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // weighted_capacity - computed: false, optional: true, required: false
  private _weightedCapacity?: string; 
  public get weightedCapacity() {
    return this.getStringAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: string) {
    this._weightedCapacity = value;
  }
  public resetWeightedCapacity() {
    this._weightedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }
}

export class InstanceDefinitionPropertyList extends cdktn.ComplexList {
  public internalValue? : InstanceDefinitionProperty[] | cdktn.IResolvable

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
  public get(index: number): InstanceDefinitionPropertyOutputReference {
    return new InstanceDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#id TfGameServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#name TfGameServerGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#version TfGameServerGroup#version}
  */
  readonly version?: string;
}
export class LaunchTemplatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._version = value.version;
    }
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#create TfGameServerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/gamelift_game_server_group#delete TfGameServerGroup#delete}
  */
  readonly delete?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
}
