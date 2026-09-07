// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsFleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#context AwsFleet#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#excess_capacity_termination_policy AwsFleet#excess_capacity_termination_policy}
  */
  readonly excessCapacityTerminationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#fleet_state AwsFleet#fleet_state}
  */
  readonly fleetState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#fulfilled_capacity AwsFleet#fulfilled_capacity}
  */
  readonly fulfilledCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#fulfilled_on_demand_capacity AwsFleet#fulfilled_on_demand_capacity}
  */
  readonly fulfilledOnDemandCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#id AwsFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#region AwsFleet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#replace_unhealthy_instances AwsFleet#replace_unhealthy_instances}
  */
  readonly replaceUnhealthyInstances?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#tags AwsFleet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#tags_all AwsFleet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#terminate_instances AwsFleet#terminate_instances}
  */
  readonly terminateInstances?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#terminate_instances_with_expiration AwsFleet#terminate_instances_with_expiration}
  */
  readonly terminateInstancesWithExpiration?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#type AwsFleet#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#valid_from AwsFleet#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#valid_until AwsFleet#valid_until}
  */
  readonly validUntil?: string;
  /**
  * fleet_instance_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#fleet_instance_set AwsFleet#fleet_instance_set}
  */
  readonly fleetInstanceSet?: AwsFleet.FleetInstanceSetProperty[] | cdktn.IResolvable;
  /**
  * launch_template_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#launch_template_config AwsFleet#launch_template_config}
  */
  readonly launchTemplateConfig: AwsFleet.LaunchTemplateConfigProperty[] | cdktn.IResolvable;
  /**
  * on_demand_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#on_demand_options AwsFleet#on_demand_options}
  */
  readonly onDemandOptions?: AwsFleet.OnDemandOptionsProperty;
  /**
  * spot_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#spot_options AwsFleet#spot_options}
  */
  readonly spotOptions?: AwsFleet.SpotOptionsProperty;
  /**
  * target_capacity_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#target_capacity_specification AwsFleet#target_capacity_specification}
  */
  readonly targetCapacitySpecification: AwsFleet.TargetCapacitySpecificationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#timeouts AwsFleet#timeouts}
  */
  readonly timeouts?: AwsFleet.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet aws_ec2_fleet}
*/
export class AwsFleet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsFleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsFleet to import
  * @param importFromId The id of the existing AwsFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet aws_ec2_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsFleetConfig
  */
  public constructor(scope: Construct, id: string, config: AwsFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_fleet',
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
    this._context = config.context;
    this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
    this._fleetState = config.fleetState;
    this._fulfilledCapacity = config.fulfilledCapacity;
    this._fulfilledOnDemandCapacity = config.fulfilledOnDemandCapacity;
    this._id = config.id;
    this._region = config.region;
    this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._terminateInstances = config.terminateInstances;
    this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
    this._type = config.type;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._fleetInstanceSet.internalValue = config.fleetInstanceSet;
    this._launchTemplateConfig.internalValue = config.launchTemplateConfig;
    this._onDemandOptions.internalValue = config.onDemandOptions;
    this._spotOptions.internalValue = config.spotOptions;
    this._targetCapacitySpecification.internalValue = config.targetCapacitySpecification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // excess_capacity_termination_policy - computed: false, optional: true, required: false
  private _excessCapacityTerminationPolicy?: string; 
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }
  public set excessCapacityTerminationPolicy(value: string) {
    this._excessCapacityTerminationPolicy = value;
  }
  public resetExcessCapacityTerminationPolicy() {
    this._excessCapacityTerminationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessCapacityTerminationPolicyInput() {
    return this._excessCapacityTerminationPolicy;
  }

  // fleet_state - computed: true, optional: true, required: false
  private _fleetState?: string; 
  public get fleetState() {
    return this.getStringAttribute('fleet_state');
  }
  public set fleetState(value: string) {
    this._fleetState = value;
  }
  public resetFleetState() {
    this._fleetState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetStateInput() {
    return this._fleetState;
  }

  // fulfilled_capacity - computed: true, optional: true, required: false
  private _fulfilledCapacity?: number; 
  public get fulfilledCapacity() {
    return this.getNumberAttribute('fulfilled_capacity');
  }
  public set fulfilledCapacity(value: number) {
    this._fulfilledCapacity = value;
  }
  public resetFulfilledCapacity() {
    this._fulfilledCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfilledCapacityInput() {
    return this._fulfilledCapacity;
  }

  // fulfilled_on_demand_capacity - computed: true, optional: true, required: false
  private _fulfilledOnDemandCapacity?: number; 
  public get fulfilledOnDemandCapacity() {
    return this.getNumberAttribute('fulfilled_on_demand_capacity');
  }
  public set fulfilledOnDemandCapacity(value: number) {
    this._fulfilledOnDemandCapacity = value;
  }
  public resetFulfilledOnDemandCapacity() {
    this._fulfilledOnDemandCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfilledOnDemandCapacityInput() {
    return this._fulfilledOnDemandCapacity;
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

  // replace_unhealthy_instances - computed: false, optional: true, required: false
  private _replaceUnhealthyInstances?: boolean | cdktn.IResolvable; 
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }
  public set replaceUnhealthyInstances(value: boolean | cdktn.IResolvable) {
    this._replaceUnhealthyInstances = value;
  }
  public resetReplaceUnhealthyInstances() {
    this._replaceUnhealthyInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceUnhealthyInstancesInput() {
    return this._replaceUnhealthyInstances;
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

  // terminate_instances - computed: false, optional: true, required: false
  private _terminateInstances?: boolean | cdktn.IResolvable; 
  public get terminateInstances() {
    return this.getBooleanAttribute('terminate_instances');
  }
  public set terminateInstances(value: boolean | cdktn.IResolvable) {
    this._terminateInstances = value;
  }
  public resetTerminateInstances() {
    this._terminateInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesInput() {
    return this._terminateInstances;
  }

  // terminate_instances_with_expiration - computed: false, optional: true, required: false
  private _terminateInstancesWithExpiration?: boolean | cdktn.IResolvable; 
  public get terminateInstancesWithExpiration() {
    return this.getBooleanAttribute('terminate_instances_with_expiration');
  }
  public set terminateInstancesWithExpiration(value: boolean | cdktn.IResolvable) {
    this._terminateInstancesWithExpiration = value;
  }
  public resetTerminateInstancesWithExpiration() {
    this._terminateInstancesWithExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesWithExpirationInput() {
    return this._terminateInstancesWithExpiration;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // fleet_instance_set - computed: false, optional: true, required: false
  private _fleetInstanceSet = new AwsFleet.FleetInstanceSetPropertyList(this, "fleet_instance_set", false);
  public get fleetInstanceSet() {
    return this._fleetInstanceSet;
  }
  public putFleetInstanceSet(value: AwsFleet.FleetInstanceSetProperty[] | cdktn.IResolvable) {
    this._fleetInstanceSet.internalValue = value;
  }
  public resetFleetInstanceSet() {
    this._fleetInstanceSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInstanceSetInput() {
    return this._fleetInstanceSet.internalValue;
  }

  // launch_template_config - computed: false, optional: false, required: true
  private _launchTemplateConfig = new AwsFleet.LaunchTemplateConfigPropertyList(this, "launch_template_config", false);
  public get launchTemplateConfig() {
    return this._launchTemplateConfig;
  }
  public putLaunchTemplateConfig(value: AwsFleet.LaunchTemplateConfigProperty[] | cdktn.IResolvable) {
    this._launchTemplateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigInput() {
    return this._launchTemplateConfig.internalValue;
  }

  // on_demand_options - computed: false, optional: true, required: false
  private _onDemandOptions = new AwsFleet.OnDemandOptionsPropertyOutputReference(this, "on_demand_options");
  public get onDemandOptions() {
    return this._onDemandOptions;
  }
  public putOnDemandOptions(value: AwsFleet.OnDemandOptionsProperty) {
    this._onDemandOptions.internalValue = value;
  }
  public resetOnDemandOptions() {
    this._onDemandOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandOptionsInput() {
    return this._onDemandOptions.internalValue;
  }

  // spot_options - computed: false, optional: true, required: false
  private _spotOptions = new AwsFleet.SpotOptionsPropertyOutputReference(this, "spot_options");
  public get spotOptions() {
    return this._spotOptions;
  }
  public putSpotOptions(value: AwsFleet.SpotOptionsProperty) {
    this._spotOptions.internalValue = value;
  }
  public resetSpotOptions() {
    this._spotOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotOptionsInput() {
    return this._spotOptions.internalValue;
  }

  // target_capacity_specification - computed: false, optional: false, required: true
  private _targetCapacitySpecification = new AwsFleet.TargetCapacitySpecificationPropertyOutputReference(this, "target_capacity_specification");
  public get targetCapacitySpecification() {
    return this._targetCapacitySpecification;
  }
  public putTargetCapacitySpecification(value: AwsFleet.TargetCapacitySpecificationProperty) {
    this._targetCapacitySpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacitySpecificationInput() {
    return this._targetCapacitySpecification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsFleet.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsFleet.TimeoutsProperty) {
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
      context: cdktn.stringToTerraform(this._context),
      excess_capacity_termination_policy: cdktn.stringToTerraform(this._excessCapacityTerminationPolicy),
      fleet_state: cdktn.stringToTerraform(this._fleetState),
      fulfilled_capacity: cdktn.numberToTerraform(this._fulfilledCapacity),
      fulfilled_on_demand_capacity: cdktn.numberToTerraform(this._fulfilledOnDemandCapacity),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      replace_unhealthy_instances: cdktn.booleanToTerraform(this._replaceUnhealthyInstances),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      terminate_instances: cdktn.booleanToTerraform(this._terminateInstances),
      terminate_instances_with_expiration: cdktn.booleanToTerraform(this._terminateInstancesWithExpiration),
      type: cdktn.stringToTerraform(this._type),
      valid_from: cdktn.stringToTerraform(this._validFrom),
      valid_until: cdktn.stringToTerraform(this._validUntil),
      fleet_instance_set: cdktn.listMapper(awsFleetFleetInstanceSetPropertyToTerraform, true)(this._fleetInstanceSet.internalValue),
      launch_template_config: cdktn.listMapper(awsFleetLaunchTemplateConfigPropertyToTerraform, true)(this._launchTemplateConfig.internalValue),
      on_demand_options: awsFleetOnDemandOptionsPropertyToTerraform(this._onDemandOptions.internalValue),
      spot_options: awsFleetSpotOptionsPropertyToTerraform(this._spotOptions.internalValue),
      target_capacity_specification: awsFleetTargetCapacitySpecificationPropertyToTerraform(this._targetCapacitySpecification.internalValue),
      timeouts: awsFleetTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktn.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excess_capacity_termination_policy: {
        value: cdktn.stringToHclTerraform(this._excessCapacityTerminationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_state: {
        value: cdktn.stringToHclTerraform(this._fleetState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fulfilled_capacity: {
        value: cdktn.numberToHclTerraform(this._fulfilledCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fulfilled_on_demand_capacity: {
        value: cdktn.numberToHclTerraform(this._fulfilledOnDemandCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      replace_unhealthy_instances: {
        value: cdktn.booleanToHclTerraform(this._replaceUnhealthyInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      terminate_instances: {
        value: cdktn.booleanToHclTerraform(this._terminateInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terminate_instances_with_expiration: {
        value: cdktn.booleanToHclTerraform(this._terminateInstancesWithExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_from: {
        value: cdktn.stringToHclTerraform(this._validFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_until: {
        value: cdktn.stringToHclTerraform(this._validUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_instance_set: {
        value: cdktn.listMapperHcl(awsFleetFleetInstanceSetPropertyToHclTerraform, true)(this._fleetInstanceSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFleet.FleetInstanceSetPropertyList",
      },
      launch_template_config: {
        value: cdktn.listMapperHcl(awsFleetLaunchTemplateConfigPropertyToHclTerraform, true)(this._launchTemplateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFleet.LaunchTemplateConfigPropertyList",
      },
      on_demand_options: {
        value: awsFleetOnDemandOptionsPropertyToHclTerraform(this._onDemandOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFleet.OnDemandOptionsPropertyList",
      },
      spot_options: {
        value: awsFleetSpotOptionsPropertyToHclTerraform(this._spotOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFleet.SpotOptionsPropertyList",
      },
      target_capacity_specification: {
        value: awsFleetTargetCapacitySpecificationPropertyToHclTerraform(this._targetCapacitySpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFleet.TargetCapacitySpecificationPropertyList",
      },
      timeouts: {
        value: awsFleetTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsFleet.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsFleetFleetInstanceSetPropertyToTerraform(struct?: AwsFleet.FleetInstanceSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceIds),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle: cdktn.stringToTerraform(struct!.lifecycle),
    platform: cdktn.stringToTerraform(struct!.platform),
  }
}


export function awsFleetFleetInstanceSetPropertyToHclTerraform(struct?: AwsFleet.FleetInstanceSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle: {
      value: cdktn.stringToHclTerraform(struct!.lifecycle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktn.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetLaunchTemplateSpecificationPropertyToTerraform(struct?: AwsFleet.LaunchTemplateSpecificationPropertyOutputReference | AwsFleet.LaunchTemplateSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function awsFleetLaunchTemplateSpecificationPropertyToHclTerraform(struct?: AwsFleet.LaunchTemplateSpecificationPropertyOutputReference | AwsFleet.LaunchTemplateSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_id: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
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


export function awsFleetAcceleratorCountPropertyToTerraform(struct?: AwsFleet.AcceleratorCountPropertyOutputReference | AwsFleet.AcceleratorCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetAcceleratorCountPropertyToHclTerraform(struct?: AwsFleet.AcceleratorCountPropertyOutputReference | AwsFleet.AcceleratorCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetAcceleratorTotalMemoryMibPropertyToTerraform(struct?: AwsFleet.AcceleratorTotalMemoryMibPropertyOutputReference | AwsFleet.AcceleratorTotalMemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetAcceleratorTotalMemoryMibPropertyToHclTerraform(struct?: AwsFleet.AcceleratorTotalMemoryMibPropertyOutputReference | AwsFleet.AcceleratorTotalMemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetBaselineEbsBandwidthMbpsPropertyToTerraform(struct?: AwsFleet.BaselineEbsBandwidthMbpsPropertyOutputReference | AwsFleet.BaselineEbsBandwidthMbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct?: AwsFleet.BaselineEbsBandwidthMbpsPropertyOutputReference | AwsFleet.BaselineEbsBandwidthMbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetMemoryGibPerVcpuPropertyToTerraform(struct?: AwsFleet.MemoryGibPerVcpuPropertyOutputReference | AwsFleet.MemoryGibPerVcpuProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetMemoryGibPerVcpuPropertyToHclTerraform(struct?: AwsFleet.MemoryGibPerVcpuPropertyOutputReference | AwsFleet.MemoryGibPerVcpuProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetMemoryMibPropertyToTerraform(struct?: AwsFleet.MemoryMibPropertyOutputReference | AwsFleet.MemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetMemoryMibPropertyToHclTerraform(struct?: AwsFleet.MemoryMibPropertyOutputReference | AwsFleet.MemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetNetworkBandwidthGbpsPropertyToTerraform(struct?: AwsFleet.NetworkBandwidthGbpsPropertyOutputReference | AwsFleet.NetworkBandwidthGbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetNetworkBandwidthGbpsPropertyToHclTerraform(struct?: AwsFleet.NetworkBandwidthGbpsPropertyOutputReference | AwsFleet.NetworkBandwidthGbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetNetworkInterfaceCountPropertyToTerraform(struct?: AwsFleet.NetworkInterfaceCountPropertyOutputReference | AwsFleet.NetworkInterfaceCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetNetworkInterfaceCountPropertyToHclTerraform(struct?: AwsFleet.NetworkInterfaceCountPropertyOutputReference | AwsFleet.NetworkInterfaceCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetTotalLocalStorageGbPropertyToTerraform(struct?: AwsFleet.TotalLocalStorageGbPropertyOutputReference | AwsFleet.TotalLocalStorageGbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetTotalLocalStorageGbPropertyToHclTerraform(struct?: AwsFleet.TotalLocalStorageGbPropertyOutputReference | AwsFleet.TotalLocalStorageGbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetVcpuCountPropertyToTerraform(struct?: AwsFleet.VcpuCountPropertyOutputReference | AwsFleet.VcpuCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsFleetVcpuCountPropertyToHclTerraform(struct?: AwsFleet.VcpuCountPropertyOutputReference | AwsFleet.VcpuCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetInstanceRequirementsPropertyToTerraform(struct?: AwsFleet.InstanceRequirementsPropertyOutputReference | AwsFleet.InstanceRequirementsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accelerator_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorManufacturers),
    accelerator_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorNames),
    accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
    allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
    bare_metal: cdktn.stringToTerraform(struct!.bareMetal),
    burstable_performance: cdktn.stringToTerraform(struct!.burstablePerformance),
    cpu_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cpuManufacturers),
    excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
    instance_generations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGenerations),
    local_storage: cdktn.stringToTerraform(struct!.localStorage),
    local_storage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localStorageTypes),
    max_spot_price_as_percentage_of_optimal_on_demand_price: cdktn.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
    on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
    require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
    spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
    accelerator_count: awsFleetAcceleratorCountPropertyToTerraform(struct!.acceleratorCount),
    accelerator_total_memory_mib: awsFleetAcceleratorTotalMemoryMibPropertyToTerraform(struct!.acceleratorTotalMemoryMib),
    baseline_ebs_bandwidth_mbps: awsFleetBaselineEbsBandwidthMbpsPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
    memory_gib_per_vcpu: awsFleetMemoryGibPerVcpuPropertyToTerraform(struct!.memoryGibPerVcpu),
    memory_mib: awsFleetMemoryMibPropertyToTerraform(struct!.memoryMib),
    network_bandwidth_gbps: awsFleetNetworkBandwidthGbpsPropertyToTerraform(struct!.networkBandwidthGbps),
    network_interface_count: awsFleetNetworkInterfaceCountPropertyToTerraform(struct!.networkInterfaceCount),
    total_local_storage_gb: awsFleetTotalLocalStorageGbPropertyToTerraform(struct!.totalLocalStorageGb),
    vcpu_count: awsFleetVcpuCountPropertyToTerraform(struct!.vcpuCount),
  }
}


export function awsFleetInstanceRequirementsPropertyToHclTerraform(struct?: AwsFleet.InstanceRequirementsPropertyOutputReference | AwsFleet.InstanceRequirementsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accelerator_manufacturers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorManufacturers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accelerator_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accelerator_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bare_metal: {
      value: cdktn.stringToHclTerraform(struct!.bareMetal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    burstable_performance: {
      value: cdktn.stringToHclTerraform(struct!.burstablePerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manufacturers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cpuManufacturers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_generations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGenerations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_storage: {
      value: cdktn.stringToHclTerraform(struct!.localStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_storage_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.localStorageTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_spot_price_as_percentage_of_optimal_on_demand_price: {
      value: cdktn.numberToHclTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand_max_price_percentage_over_lowest_price: {
      value: cdktn.numberToHclTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_hibernate_support: {
      value: cdktn.booleanToHclTerraform(struct!.requireHibernateSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_max_price_percentage_over_lowest_price: {
      value: cdktn.numberToHclTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_count: {
      value: awsFleetAcceleratorCountPropertyToHclTerraform(struct!.acceleratorCount),
      isBlock: true,
      type: "list",
      storageClassType: "AcceleratorCountPropertyList",
    },
    accelerator_total_memory_mib: {
      value: awsFleetAcceleratorTotalMemoryMibPropertyToHclTerraform(struct!.acceleratorTotalMemoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "AcceleratorTotalMemoryMibPropertyList",
    },
    baseline_ebs_bandwidth_mbps: {
      value: awsFleetBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
      isBlock: true,
      type: "list",
      storageClassType: "BaselineEbsBandwidthMbpsPropertyList",
    },
    memory_gib_per_vcpu: {
      value: awsFleetMemoryGibPerVcpuPropertyToHclTerraform(struct!.memoryGibPerVcpu),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryGibPerVcpuPropertyList",
    },
    memory_mib: {
      value: awsFleetMemoryMibPropertyToHclTerraform(struct!.memoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryMibPropertyList",
    },
    network_bandwidth_gbps: {
      value: awsFleetNetworkBandwidthGbpsPropertyToHclTerraform(struct!.networkBandwidthGbps),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkBandwidthGbpsPropertyList",
    },
    network_interface_count: {
      value: awsFleetNetworkInterfaceCountPropertyToHclTerraform(struct!.networkInterfaceCount),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkInterfaceCountPropertyList",
    },
    total_local_storage_gb: {
      value: awsFleetTotalLocalStorageGbPropertyToHclTerraform(struct!.totalLocalStorageGb),
      isBlock: true,
      type: "list",
      storageClassType: "TotalLocalStorageGbPropertyList",
    },
    vcpu_count: {
      value: awsFleetVcpuCountPropertyToHclTerraform(struct!.vcpuCount),
      isBlock: true,
      type: "list",
      storageClassType: "VcpuCountPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetOverridePropertyToTerraform(struct?: AwsFleet.OverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    max_price: cdktn.stringToTerraform(struct!.maxPrice),
    priority: cdktn.numberToTerraform(struct!.priority),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktn.numberToTerraform(struct!.weightedCapacity),
    instance_requirements: awsFleetInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
  }
}


export function awsFleetOverridePropertyToHclTerraform(struct?: AwsFleet.OverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_price: {
      value: cdktn.stringToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weighted_capacity: {
      value: cdktn.numberToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_requirements: {
      value: awsFleetInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceRequirementsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetLaunchTemplateConfigPropertyToTerraform(struct?: AwsFleet.LaunchTemplateConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_specification: awsFleetLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplateSpecification),
    override: cdktn.listMapper(awsFleetOverridePropertyToTerraform, true)(struct!.override),
  }
}


export function awsFleetLaunchTemplateConfigPropertyToHclTerraform(struct?: AwsFleet.LaunchTemplateConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_specification: {
      value: awsFleetLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplateSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "LaunchTemplateSpecificationPropertyList",
    },
    override: {
      value: cdktn.listMapperHcl(awsFleetOverridePropertyToHclTerraform, true)(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "OverridePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetCapacityReservationOptionsPropertyToTerraform(struct?: AwsFleet.CapacityReservationOptionsPropertyOutputReference | AwsFleet.CapacityReservationOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    usage_strategy: cdktn.stringToTerraform(struct!.usageStrategy),
  }
}


export function awsFleetCapacityReservationOptionsPropertyToHclTerraform(struct?: AwsFleet.CapacityReservationOptionsPropertyOutputReference | AwsFleet.CapacityReservationOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    usage_strategy: {
      value: cdktn.stringToHclTerraform(struct!.usageStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetOnDemandOptionsPropertyToTerraform(struct?: AwsFleet.OnDemandOptionsPropertyOutputReference | AwsFleet.OnDemandOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    max_total_price: cdktn.stringToTerraform(struct!.maxTotalPrice),
    min_target_capacity: cdktn.numberToTerraform(struct!.minTargetCapacity),
    single_availability_zone: cdktn.booleanToTerraform(struct!.singleAvailabilityZone),
    single_instance_type: cdktn.booleanToTerraform(struct!.singleInstanceType),
    capacity_reservation_options: awsFleetCapacityReservationOptionsPropertyToTerraform(struct!.capacityReservationOptions),
  }
}


export function awsFleetOnDemandOptionsPropertyToHclTerraform(struct?: AwsFleet.OnDemandOptionsPropertyOutputReference | AwsFleet.OnDemandOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_total_price: {
      value: cdktn.stringToHclTerraform(struct!.maxTotalPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_target_capacity: {
      value: cdktn.numberToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_availability_zone: {
      value: cdktn.booleanToHclTerraform(struct!.singleAvailabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    single_instance_type: {
      value: cdktn.booleanToHclTerraform(struct!.singleInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capacity_reservation_options: {
      value: awsFleetCapacityReservationOptionsPropertyToHclTerraform(struct!.capacityReservationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CapacityReservationOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetCapacityRebalancePropertyToTerraform(struct?: AwsFleet.CapacityRebalancePropertyOutputReference | AwsFleet.CapacityRebalanceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replacement_strategy: cdktn.stringToTerraform(struct!.replacementStrategy),
    termination_delay: cdktn.numberToTerraform(struct!.terminationDelay),
  }
}


export function awsFleetCapacityRebalancePropertyToHclTerraform(struct?: AwsFleet.CapacityRebalancePropertyOutputReference | AwsFleet.CapacityRebalanceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replacement_strategy: {
      value: cdktn.stringToHclTerraform(struct!.replacementStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_delay: {
      value: cdktn.numberToHclTerraform(struct!.terminationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetMaintenanceStrategiesPropertyToTerraform(struct?: AwsFleet.MaintenanceStrategiesPropertyOutputReference | AwsFleet.MaintenanceStrategiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_rebalance: awsFleetCapacityRebalancePropertyToTerraform(struct!.capacityRebalance),
  }
}


export function awsFleetMaintenanceStrategiesPropertyToHclTerraform(struct?: AwsFleet.MaintenanceStrategiesPropertyOutputReference | AwsFleet.MaintenanceStrategiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_rebalance: {
      value: awsFleetCapacityRebalancePropertyToHclTerraform(struct!.capacityRebalance),
      isBlock: true,
      type: "list",
      storageClassType: "CapacityRebalancePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetSpotOptionsPropertyToTerraform(struct?: AwsFleet.SpotOptionsPropertyOutputReference | AwsFleet.SpotOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    instance_interruption_behavior: cdktn.stringToTerraform(struct!.instanceInterruptionBehavior),
    instance_pools_to_use_count: cdktn.numberToTerraform(struct!.instancePoolsToUseCount),
    max_total_price: cdktn.stringToTerraform(struct!.maxTotalPrice),
    min_target_capacity: cdktn.numberToTerraform(struct!.minTargetCapacity),
    single_availability_zone: cdktn.booleanToTerraform(struct!.singleAvailabilityZone),
    single_instance_type: cdktn.booleanToTerraform(struct!.singleInstanceType),
    maintenance_strategies: awsFleetMaintenanceStrategiesPropertyToTerraform(struct!.maintenanceStrategies),
  }
}


export function awsFleetSpotOptionsPropertyToHclTerraform(struct?: AwsFleet.SpotOptionsPropertyOutputReference | AwsFleet.SpotOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_interruption_behavior: {
      value: cdktn.stringToHclTerraform(struct!.instanceInterruptionBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pools_to_use_count: {
      value: cdktn.numberToHclTerraform(struct!.instancePoolsToUseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_total_price: {
      value: cdktn.stringToHclTerraform(struct!.maxTotalPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_target_capacity: {
      value: cdktn.numberToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_availability_zone: {
      value: cdktn.booleanToHclTerraform(struct!.singleAvailabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    single_instance_type: {
      value: cdktn.booleanToHclTerraform(struct!.singleInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maintenance_strategies: {
      value: awsFleetMaintenanceStrategiesPropertyToHclTerraform(struct!.maintenanceStrategies),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceStrategiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetTargetCapacitySpecificationPropertyToTerraform(struct?: AwsFleet.TargetCapacitySpecificationPropertyOutputReference | AwsFleet.TargetCapacitySpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_target_capacity_type: cdktn.stringToTerraform(struct!.defaultTargetCapacityType),
    on_demand_target_capacity: cdktn.numberToTerraform(struct!.onDemandTargetCapacity),
    spot_target_capacity: cdktn.numberToTerraform(struct!.spotTargetCapacity),
    target_capacity_unit_type: cdktn.stringToTerraform(struct!.targetCapacityUnitType),
    total_target_capacity: cdktn.numberToTerraform(struct!.totalTargetCapacity),
  }
}


export function awsFleetTargetCapacitySpecificationPropertyToHclTerraform(struct?: AwsFleet.TargetCapacitySpecificationPropertyOutputReference | AwsFleet.TargetCapacitySpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_target_capacity_type: {
      value: cdktn.stringToHclTerraform(struct!.defaultTargetCapacityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_demand_target_capacity: {
      value: cdktn.numberToHclTerraform(struct!.onDemandTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_target_capacity: {
      value: cdktn.numberToHclTerraform(struct!.spotTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_capacity_unit_type: {
      value: cdktn.stringToHclTerraform(struct!.targetCapacityUnitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_target_capacity: {
      value: cdktn.numberToHclTerraform(struct!.totalTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFleetTimeoutsPropertyToTerraform(struct?: AwsFleet.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsFleetTimeoutsPropertyToHclTerraform(struct?: AwsFleet.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsFleet {
export interface FleetInstanceSetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#instance_ids AwsFleet#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#instance_type AwsFleet#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#lifecycle AwsFleet#lifecycle}
  */
  readonly lifecycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#platform AwsFleet#platform}
  */
  readonly platform?: string;
}
export class FleetInstanceSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FleetInstanceSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIds = this._instanceIds;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetInstanceSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceIds = undefined;
      this._instanceType = undefined;
      this._lifecycle = undefined;
      this._platform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceIds = value.instanceIds;
      this._instanceType = value.instanceType;
      this._lifecycle = value.lifecycle;
      this._platform = value.platform;
    }
  }

  // instance_ids - computed: true, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle - computed: true, optional: true, required: false
  private _lifecycle?: string; 
  public get lifecycle() {
    return this.getStringAttribute('lifecycle');
  }
  public set lifecycle(value: string) {
    this._lifecycle = value;
  }
  public resetLifecycle() {
    this._lifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }
}

export class FleetInstanceSetPropertyList extends cdktn.ComplexList {
  public internalValue? : FleetInstanceSetProperty[] | cdktn.IResolvable

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
  public get(index: number): FleetInstanceSetPropertyOutputReference {
    return new FleetInstanceSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#launch_template_id AwsFleet#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#launch_template_name AwsFleet#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#version AwsFleet#version}
  */
  readonly version: string;
}
export class LaunchTemplateSpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateSpecificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateSpecificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface AcceleratorCountProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min?: number;
}
export class AcceleratorCountPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcceleratorCountProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcceleratorCountProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface AcceleratorTotalMemoryMibProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min?: number;
}
export class AcceleratorTotalMemoryMibPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcceleratorTotalMemoryMibProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcceleratorTotalMemoryMibProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface BaselineEbsBandwidthMbpsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min?: number;
}
export class BaselineEbsBandwidthMbpsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BaselineEbsBandwidthMbpsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BaselineEbsBandwidthMbpsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface MemoryGibPerVcpuProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min?: number;
}
export class MemoryGibPerVcpuPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemoryGibPerVcpuProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryGibPerVcpuProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface MemoryMibProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min: number;
}
export class MemoryMibPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemoryMibProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemoryMibProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface NetworkBandwidthGbpsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min?: number;
}
export class NetworkBandwidthGbpsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkBandwidthGbpsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBandwidthGbpsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface NetworkInterfaceCountProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min?: number;
}
export class NetworkInterfaceCountPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkInterfaceCountProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkInterfaceCountProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface TotalLocalStorageGbProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min?: number;
}
export class TotalLocalStorageGbPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TotalLocalStorageGbProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TotalLocalStorageGbProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface VcpuCountProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max AwsFleet#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min AwsFleet#min}
  */
  readonly min: number;
}
export class VcpuCountPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VcpuCountProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VcpuCountProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface InstanceRequirementsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#accelerator_manufacturers AwsFleet#accelerator_manufacturers}
  */
  readonly acceleratorManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#accelerator_names AwsFleet#accelerator_names}
  */
  readonly acceleratorNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#accelerator_types AwsFleet#accelerator_types}
  */
  readonly acceleratorTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#allowed_instance_types AwsFleet#allowed_instance_types}
  */
  readonly allowedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#bare_metal AwsFleet#bare_metal}
  */
  readonly bareMetal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#burstable_performance AwsFleet#burstable_performance}
  */
  readonly burstablePerformance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#cpu_manufacturers AwsFleet#cpu_manufacturers}
  */
  readonly cpuManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#excluded_instance_types AwsFleet#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#instance_generations AwsFleet#instance_generations}
  */
  readonly instanceGenerations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#local_storage AwsFleet#local_storage}
  */
  readonly localStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#local_storage_types AwsFleet#local_storage_types}
  */
  readonly localStorageTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max_spot_price_as_percentage_of_optimal_on_demand_price AwsFleet#max_spot_price_as_percentage_of_optimal_on_demand_price}
  */
  readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#on_demand_max_price_percentage_over_lowest_price AwsFleet#on_demand_max_price_percentage_over_lowest_price}
  */
  readonly onDemandMaxPricePercentageOverLowestPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#require_hibernate_support AwsFleet#require_hibernate_support}
  */
  readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#spot_max_price_percentage_over_lowest_price AwsFleet#spot_max_price_percentage_over_lowest_price}
  */
  readonly spotMaxPricePercentageOverLowestPrice?: number;
  /**
  * accelerator_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#accelerator_count AwsFleet#accelerator_count}
  */
  readonly acceleratorCount?: AcceleratorCountProperty;
  /**
  * accelerator_total_memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#accelerator_total_memory_mib AwsFleet#accelerator_total_memory_mib}
  */
  readonly acceleratorTotalMemoryMib?: AcceleratorTotalMemoryMibProperty;
  /**
  * baseline_ebs_bandwidth_mbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#baseline_ebs_bandwidth_mbps AwsFleet#baseline_ebs_bandwidth_mbps}
  */
  readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsProperty;
  /**
  * memory_gib_per_vcpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#memory_gib_per_vcpu AwsFleet#memory_gib_per_vcpu}
  */
  readonly memoryGibPerVcpu?: MemoryGibPerVcpuProperty;
  /**
  * memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#memory_mib AwsFleet#memory_mib}
  */
  readonly memoryMib: MemoryMibProperty;
  /**
  * network_bandwidth_gbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#network_bandwidth_gbps AwsFleet#network_bandwidth_gbps}
  */
  readonly networkBandwidthGbps?: NetworkBandwidthGbpsProperty;
  /**
  * network_interface_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#network_interface_count AwsFleet#network_interface_count}
  */
  readonly networkInterfaceCount?: NetworkInterfaceCountProperty;
  /**
  * total_local_storage_gb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#total_local_storage_gb AwsFleet#total_local_storage_gb}
  */
  readonly totalLocalStorageGb?: TotalLocalStorageGbProperty;
  /**
  * vcpu_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#vcpu_count AwsFleet#vcpu_count}
  */
  readonly vcpuCount: VcpuCountProperty;
}
export class InstanceRequirementsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceRequirementsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorManufacturers !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorManufacturers = this._acceleratorManufacturers;
    }
    if (this._acceleratorNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorNames = this._acceleratorNames;
    }
    if (this._acceleratorTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorTypes = this._acceleratorTypes;
    }
    if (this._allowedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
    }
    if (this._bareMetal !== undefined) {
      hasAnyValues = true;
      internalValueResult.bareMetal = this._bareMetal;
    }
    if (this._burstablePerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstablePerformance = this._burstablePerformance;
    }
    if (this._cpuManufacturers !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManufacturers = this._cpuManufacturers;
    }
    if (this._excludedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
    }
    if (this._instanceGenerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGenerations = this._instanceGenerations;
    }
    if (this._localStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorage = this._localStorage;
    }
    if (this._localStorageTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorageTypes = this._localStorageTypes;
    }
    if (this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
    }
    if (this._onDemandMaxPricePercentageOverLowestPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandMaxPricePercentageOverLowestPrice = this._onDemandMaxPricePercentageOverLowestPrice;
    }
    if (this._requireHibernateSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireHibernateSupport = this._requireHibernateSupport;
    }
    if (this._spotMaxPricePercentageOverLowestPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMaxPricePercentageOverLowestPrice = this._spotMaxPricePercentageOverLowestPrice;
    }
    if (this._acceleratorCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount?.internalValue;
    }
    if (this._acceleratorTotalMemoryMib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorTotalMemoryMib = this._acceleratorTotalMemoryMib?.internalValue;
    }
    if (this._baselineEbsBandwidthMbps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineEbsBandwidthMbps = this._baselineEbsBandwidthMbps?.internalValue;
    }
    if (this._memoryGibPerVcpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGibPerVcpu = this._memoryGibPerVcpu?.internalValue;
    }
    if (this._memoryMib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMib = this._memoryMib?.internalValue;
    }
    if (this._networkBandwidthGbps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkBandwidthGbps = this._networkBandwidthGbps?.internalValue;
    }
    if (this._networkInterfaceCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceCount = this._networkInterfaceCount?.internalValue;
    }
    if (this._totalLocalStorageGb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLocalStorageGb = this._totalLocalStorageGb?.internalValue;
    }
    if (this._vcpuCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpuCount = this._vcpuCount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceRequirementsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorManufacturers = undefined;
      this._acceleratorNames = undefined;
      this._acceleratorTypes = undefined;
      this._allowedInstanceTypes = undefined;
      this._bareMetal = undefined;
      this._burstablePerformance = undefined;
      this._cpuManufacturers = undefined;
      this._excludedInstanceTypes = undefined;
      this._instanceGenerations = undefined;
      this._localStorage = undefined;
      this._localStorageTypes = undefined;
      this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
      this._onDemandMaxPricePercentageOverLowestPrice = undefined;
      this._requireHibernateSupport = undefined;
      this._spotMaxPricePercentageOverLowestPrice = undefined;
      this._acceleratorCount.internalValue = undefined;
      this._acceleratorTotalMemoryMib.internalValue = undefined;
      this._baselineEbsBandwidthMbps.internalValue = undefined;
      this._memoryGibPerVcpu.internalValue = undefined;
      this._memoryMib.internalValue = undefined;
      this._networkBandwidthGbps.internalValue = undefined;
      this._networkInterfaceCount.internalValue = undefined;
      this._totalLocalStorageGb.internalValue = undefined;
      this._vcpuCount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorManufacturers = value.acceleratorManufacturers;
      this._acceleratorNames = value.acceleratorNames;
      this._acceleratorTypes = value.acceleratorTypes;
      this._allowedInstanceTypes = value.allowedInstanceTypes;
      this._bareMetal = value.bareMetal;
      this._burstablePerformance = value.burstablePerformance;
      this._cpuManufacturers = value.cpuManufacturers;
      this._excludedInstanceTypes = value.excludedInstanceTypes;
      this._instanceGenerations = value.instanceGenerations;
      this._localStorage = value.localStorage;
      this._localStorageTypes = value.localStorageTypes;
      this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value.maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
      this._onDemandMaxPricePercentageOverLowestPrice = value.onDemandMaxPricePercentageOverLowestPrice;
      this._requireHibernateSupport = value.requireHibernateSupport;
      this._spotMaxPricePercentageOverLowestPrice = value.spotMaxPricePercentageOverLowestPrice;
      this._acceleratorCount.internalValue = value.acceleratorCount;
      this._acceleratorTotalMemoryMib.internalValue = value.acceleratorTotalMemoryMib;
      this._baselineEbsBandwidthMbps.internalValue = value.baselineEbsBandwidthMbps;
      this._memoryGibPerVcpu.internalValue = value.memoryGibPerVcpu;
      this._memoryMib.internalValue = value.memoryMib;
      this._networkBandwidthGbps.internalValue = value.networkBandwidthGbps;
      this._networkInterfaceCount.internalValue = value.networkInterfaceCount;
      this._totalLocalStorageGb.internalValue = value.totalLocalStorageGb;
      this._vcpuCount.internalValue = value.vcpuCount;
    }
  }

  // accelerator_manufacturers - computed: false, optional: true, required: false
  private _acceleratorManufacturers?: string[]; 
  public get acceleratorManufacturers() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_manufacturers'));
  }
  public set acceleratorManufacturers(value: string[]) {
    this._acceleratorManufacturers = value;
  }
  public resetAcceleratorManufacturers() {
    this._acceleratorManufacturers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorManufacturersInput() {
    return this._acceleratorManufacturers;
  }

  // accelerator_names - computed: false, optional: true, required: false
  private _acceleratorNames?: string[]; 
  public get acceleratorNames() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_names'));
  }
  public set acceleratorNames(value: string[]) {
    this._acceleratorNames = value;
  }
  public resetAcceleratorNames() {
    this._acceleratorNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorNamesInput() {
    return this._acceleratorNames;
  }

  // accelerator_types - computed: false, optional: true, required: false
  private _acceleratorTypes?: string[]; 
  public get acceleratorTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_types'));
  }
  public set acceleratorTypes(value: string[]) {
    this._acceleratorTypes = value;
  }
  public resetAcceleratorTypes() {
    this._acceleratorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypesInput() {
    return this._acceleratorTypes;
  }

  // allowed_instance_types - computed: false, optional: true, required: false
  private _allowedInstanceTypes?: string[]; 
  public get allowedInstanceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_instance_types'));
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

  // bare_metal - computed: false, optional: true, required: false
  private _bareMetal?: string; 
  public get bareMetal() {
    return this.getStringAttribute('bare_metal');
  }
  public set bareMetal(value: string) {
    this._bareMetal = value;
  }
  public resetBareMetal() {
    this._bareMetal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bareMetalInput() {
    return this._bareMetal;
  }

  // burstable_performance - computed: false, optional: true, required: false
  private _burstablePerformance?: string; 
  public get burstablePerformance() {
    return this.getStringAttribute('burstable_performance');
  }
  public set burstablePerformance(value: string) {
    this._burstablePerformance = value;
  }
  public resetBurstablePerformance() {
    this._burstablePerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstablePerformanceInput() {
    return this._burstablePerformance;
  }

  // cpu_manufacturers - computed: false, optional: true, required: false
  private _cpuManufacturers?: string[]; 
  public get cpuManufacturers() {
    return cdktn.Fn.tolist(this.getListAttribute('cpu_manufacturers'));
  }
  public set cpuManufacturers(value: string[]) {
    this._cpuManufacturers = value;
  }
  public resetCpuManufacturers() {
    this._cpuManufacturers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManufacturersInput() {
    return this._cpuManufacturers;
  }

  // excluded_instance_types - computed: false, optional: true, required: false
  private _excludedInstanceTypes?: string[]; 
  public get excludedInstanceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('excluded_instance_types'));
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

  // instance_generations - computed: false, optional: true, required: false
  private _instanceGenerations?: string[]; 
  public get instanceGenerations() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_generations'));
  }
  public set instanceGenerations(value: string[]) {
    this._instanceGenerations = value;
  }
  public resetInstanceGenerations() {
    this._instanceGenerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGenerationsInput() {
    return this._instanceGenerations;
  }

  // local_storage - computed: false, optional: true, required: false
  private _localStorage?: string; 
  public get localStorage() {
    return this.getStringAttribute('local_storage');
  }
  public set localStorage(value: string) {
    this._localStorage = value;
  }
  public resetLocalStorage() {
    this._localStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInput() {
    return this._localStorage;
  }

  // local_storage_types - computed: false, optional: true, required: false
  private _localStorageTypes?: string[]; 
  public get localStorageTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('local_storage_types'));
  }
  public set localStorageTypes(value: string[]) {
    this._localStorageTypes = value;
  }
  public resetLocalStorageTypes() {
    this._localStorageTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageTypesInput() {
    return this._localStorageTypes;
  }

  // max_spot_price_as_percentage_of_optimal_on_demand_price - computed: false, optional: true, required: false
  private _maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number; 
  public get maxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
    return this.getNumberAttribute('max_spot_price_as_percentage_of_optimal_on_demand_price');
  }
  public set maxSpotPriceAsPercentageOfOptimalOnDemandPrice(value: number) {
    this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value;
  }
  public resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
    this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput() {
    return this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
  }

  // on_demand_max_price_percentage_over_lowest_price - computed: false, optional: true, required: false
  private _onDemandMaxPricePercentageOverLowestPrice?: number; 
  public get onDemandMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('on_demand_max_price_percentage_over_lowest_price');
  }
  public set onDemandMaxPricePercentageOverLowestPrice(value: number) {
    this._onDemandMaxPricePercentageOverLowestPrice = value;
  }
  public resetOnDemandMaxPricePercentageOverLowestPrice() {
    this._onDemandMaxPricePercentageOverLowestPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandMaxPricePercentageOverLowestPriceInput() {
    return this._onDemandMaxPricePercentageOverLowestPrice;
  }

  // require_hibernate_support - computed: false, optional: true, required: false
  private _requireHibernateSupport?: boolean | cdktn.IResolvable; 
  public get requireHibernateSupport() {
    return this.getBooleanAttribute('require_hibernate_support');
  }
  public set requireHibernateSupport(value: boolean | cdktn.IResolvable) {
    this._requireHibernateSupport = value;
  }
  public resetRequireHibernateSupport() {
    this._requireHibernateSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireHibernateSupportInput() {
    return this._requireHibernateSupport;
  }

  // spot_max_price_percentage_over_lowest_price - computed: false, optional: true, required: false
  private _spotMaxPricePercentageOverLowestPrice?: number; 
  public get spotMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('spot_max_price_percentage_over_lowest_price');
  }
  public set spotMaxPricePercentageOverLowestPrice(value: number) {
    this._spotMaxPricePercentageOverLowestPrice = value;
  }
  public resetSpotMaxPricePercentageOverLowestPrice() {
    this._spotMaxPricePercentageOverLowestPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPricePercentageOverLowestPriceInput() {
    return this._spotMaxPricePercentageOverLowestPrice;
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount = new AcceleratorCountPropertyOutputReference(this, "accelerator_count");
  public get acceleratorCount() {
    return this._acceleratorCount;
  }
  public putAcceleratorCount(value: AcceleratorCountProperty) {
    this._acceleratorCount.internalValue = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount.internalValue;
  }

  // accelerator_total_memory_mib - computed: false, optional: true, required: false
  private _acceleratorTotalMemoryMib = new AcceleratorTotalMemoryMibPropertyOutputReference(this, "accelerator_total_memory_mib");
  public get acceleratorTotalMemoryMib() {
    return this._acceleratorTotalMemoryMib;
  }
  public putAcceleratorTotalMemoryMib(value: AcceleratorTotalMemoryMibProperty) {
    this._acceleratorTotalMemoryMib.internalValue = value;
  }
  public resetAcceleratorTotalMemoryMib() {
    this._acceleratorTotalMemoryMib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTotalMemoryMibInput() {
    return this._acceleratorTotalMemoryMib.internalValue;
  }

  // baseline_ebs_bandwidth_mbps - computed: false, optional: true, required: false
  private _baselineEbsBandwidthMbps = new BaselineEbsBandwidthMbpsPropertyOutputReference(this, "baseline_ebs_bandwidth_mbps");
  public get baselineEbsBandwidthMbps() {
    return this._baselineEbsBandwidthMbps;
  }
  public putBaselineEbsBandwidthMbps(value: BaselineEbsBandwidthMbpsProperty) {
    this._baselineEbsBandwidthMbps.internalValue = value;
  }
  public resetBaselineEbsBandwidthMbps() {
    this._baselineEbsBandwidthMbps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineEbsBandwidthMbpsInput() {
    return this._baselineEbsBandwidthMbps.internalValue;
  }

  // memory_gib_per_vcpu - computed: false, optional: true, required: false
  private _memoryGibPerVcpu = new MemoryGibPerVcpuPropertyOutputReference(this, "memory_gib_per_vcpu");
  public get memoryGibPerVcpu() {
    return this._memoryGibPerVcpu;
  }
  public putMemoryGibPerVcpu(value: MemoryGibPerVcpuProperty) {
    this._memoryGibPerVcpu.internalValue = value;
  }
  public resetMemoryGibPerVcpu() {
    this._memoryGibPerVcpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGibPerVcpuInput() {
    return this._memoryGibPerVcpu.internalValue;
  }

  // memory_mib - computed: false, optional: false, required: true
  private _memoryMib = new MemoryMibPropertyOutputReference(this, "memory_mib");
  public get memoryMib() {
    return this._memoryMib;
  }
  public putMemoryMib(value: MemoryMibProperty) {
    this._memoryMib.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMibInput() {
    return this._memoryMib.internalValue;
  }

  // network_bandwidth_gbps - computed: false, optional: true, required: false
  private _networkBandwidthGbps = new NetworkBandwidthGbpsPropertyOutputReference(this, "network_bandwidth_gbps");
  public get networkBandwidthGbps() {
    return this._networkBandwidthGbps;
  }
  public putNetworkBandwidthGbps(value: NetworkBandwidthGbpsProperty) {
    this._networkBandwidthGbps.internalValue = value;
  }
  public resetNetworkBandwidthGbps() {
    this._networkBandwidthGbps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBandwidthGbpsInput() {
    return this._networkBandwidthGbps.internalValue;
  }

  // network_interface_count - computed: false, optional: true, required: false
  private _networkInterfaceCount = new NetworkInterfaceCountPropertyOutputReference(this, "network_interface_count");
  public get networkInterfaceCount() {
    return this._networkInterfaceCount;
  }
  public putNetworkInterfaceCount(value: NetworkInterfaceCountProperty) {
    this._networkInterfaceCount.internalValue = value;
  }
  public resetNetworkInterfaceCount() {
    this._networkInterfaceCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceCountInput() {
    return this._networkInterfaceCount.internalValue;
  }

  // total_local_storage_gb - computed: false, optional: true, required: false
  private _totalLocalStorageGb = new TotalLocalStorageGbPropertyOutputReference(this, "total_local_storage_gb");
  public get totalLocalStorageGb() {
    return this._totalLocalStorageGb;
  }
  public putTotalLocalStorageGb(value: TotalLocalStorageGbProperty) {
    this._totalLocalStorageGb.internalValue = value;
  }
  public resetTotalLocalStorageGb() {
    this._totalLocalStorageGb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLocalStorageGbInput() {
    return this._totalLocalStorageGb.internalValue;
  }

  // vcpu_count - computed: false, optional: false, required: true
  private _vcpuCount = new VcpuCountPropertyOutputReference(this, "vcpu_count");
  public get vcpuCount() {
    return this._vcpuCount;
  }
  public putVcpuCount(value: VcpuCountProperty) {
    this._vcpuCount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuCountInput() {
    return this._vcpuCount.internalValue;
  }
}
export interface OverrideProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#availability_zone AwsFleet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#instance_type AwsFleet#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max_price AwsFleet#max_price}
  */
  readonly maxPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#priority AwsFleet#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#subnet_id AwsFleet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#weighted_capacity AwsFleet#weighted_capacity}
  */
  readonly weightedCapacity?: number;
  /**
  * instance_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#instance_requirements AwsFleet#instance_requirements}
  */
  readonly instanceRequirements?: InstanceRequirementsProperty;
}
export class OverridePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OverrideProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    if (this._instanceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._instanceType = undefined;
      this._maxPrice = undefined;
      this._priority = undefined;
      this._subnetId = undefined;
      this._weightedCapacity = undefined;
      this._instanceRequirements.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._instanceType = value.instanceType;
      this._maxPrice = value.maxPrice;
      this._priority = value.priority;
      this._subnetId = value.subnetId;
      this._weightedCapacity = value.weightedCapacity;
      this._instanceRequirements.internalValue = value.instanceRequirements;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_price - computed: false, optional: true, required: false
  private _maxPrice?: string; 
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }
  public set maxPrice(value: string) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // weighted_capacity - computed: false, optional: true, required: false
  private _weightedCapacity?: number; 
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: number) {
    this._weightedCapacity = value;
  }
  public resetWeightedCapacity() {
    this._weightedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }

  // instance_requirements - computed: false, optional: true, required: false
  private _instanceRequirements = new InstanceRequirementsPropertyOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }
  public putInstanceRequirements(value: InstanceRequirementsProperty) {
    this._instanceRequirements.internalValue = value;
  }
  public resetInstanceRequirements() {
    this._instanceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRequirementsInput() {
    return this._instanceRequirements.internalValue;
  }
}

export class OverridePropertyList extends cdktn.ComplexList {
  public internalValue? : OverrideProperty[] | cdktn.IResolvable

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
  public get(index: number): OverridePropertyOutputReference {
    return new OverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateConfigProperty {
  /**
  * launch_template_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#launch_template_specification AwsFleet#launch_template_specification}
  */
  readonly launchTemplateSpecification?: LaunchTemplateSpecificationProperty;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#override AwsFleet#override}
  */
  readonly override?: OverrideProperty[] | cdktn.IResolvable;
}
export class LaunchTemplateConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LaunchTemplateConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateSpecification.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
      this._override.internalValue = value.override;
    }
  }

  // launch_template_specification - computed: false, optional: true, required: false
  private _launchTemplateSpecification = new LaunchTemplateSpecificationPropertyOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }
  public putLaunchTemplateSpecification(value: LaunchTemplateSpecificationProperty) {
    this._launchTemplateSpecification.internalValue = value;
  }
  public resetLaunchTemplateSpecification() {
    this._launchTemplateSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateSpecificationInput() {
    return this._launchTemplateSpecification.internalValue;
  }

  // override - computed: false, optional: true, required: false
  private _override = new OverridePropertyList(this, "override", false);
  public get override() {
    return this._override;
  }
  public putOverride(value: OverrideProperty[] | cdktn.IResolvable) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class LaunchTemplateConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : LaunchTemplateConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): LaunchTemplateConfigPropertyOutputReference {
    return new LaunchTemplateConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapacityReservationOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#usage_strategy AwsFleet#usage_strategy}
  */
  readonly usageStrategy?: string;
}
export class CapacityReservationOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityReservationOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usageStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageStrategy = this._usageStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityReservationOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usageStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usageStrategy = value.usageStrategy;
    }
  }

  // usage_strategy - computed: false, optional: true, required: false
  private _usageStrategy?: string; 
  public get usageStrategy() {
    return this.getStringAttribute('usage_strategy');
  }
  public set usageStrategy(value: string) {
    this._usageStrategy = value;
  }
  public resetUsageStrategy() {
    this._usageStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageStrategyInput() {
    return this._usageStrategy;
  }
}
export interface OnDemandOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#allocation_strategy AwsFleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max_total_price AwsFleet#max_total_price}
  */
  readonly maxTotalPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min_target_capacity AwsFleet#min_target_capacity}
  */
  readonly minTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#single_availability_zone AwsFleet#single_availability_zone}
  */
  readonly singleAvailabilityZone?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#single_instance_type AwsFleet#single_instance_type}
  */
  readonly singleInstanceType?: boolean | cdktn.IResolvable;
  /**
  * capacity_reservation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#capacity_reservation_options AwsFleet#capacity_reservation_options}
  */
  readonly capacityReservationOptions?: CapacityReservationOptionsProperty;
}
export class OnDemandOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnDemandOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._maxTotalPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalPrice = this._maxTotalPrice;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._singleAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleAvailabilityZone = this._singleAvailabilityZone;
    }
    if (this._singleInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleInstanceType = this._singleInstanceType;
    }
    if (this._capacityReservationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationOptions = this._capacityReservationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnDemandOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._maxTotalPrice = undefined;
      this._minTargetCapacity = undefined;
      this._singleAvailabilityZone = undefined;
      this._singleInstanceType = undefined;
      this._capacityReservationOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._maxTotalPrice = value.maxTotalPrice;
      this._minTargetCapacity = value.minTargetCapacity;
      this._singleAvailabilityZone = value.singleAvailabilityZone;
      this._singleInstanceType = value.singleInstanceType;
      this._capacityReservationOptions.internalValue = value.capacityReservationOptions;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // max_total_price - computed: false, optional: true, required: false
  private _maxTotalPrice?: string; 
  public get maxTotalPrice() {
    return this.getStringAttribute('max_total_price');
  }
  public set maxTotalPrice(value: string) {
    this._maxTotalPrice = value;
  }
  public resetMaxTotalPrice() {
    this._maxTotalPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalPriceInput() {
    return this._maxTotalPrice;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: number; 
  public get minTargetCapacity() {
    return this.getNumberAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: number) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // single_availability_zone - computed: false, optional: true, required: false
  private _singleAvailabilityZone?: boolean | cdktn.IResolvable; 
  public get singleAvailabilityZone() {
    return this.getBooleanAttribute('single_availability_zone');
  }
  public set singleAvailabilityZone(value: boolean | cdktn.IResolvable) {
    this._singleAvailabilityZone = value;
  }
  public resetSingleAvailabilityZone() {
    this._singleAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleAvailabilityZoneInput() {
    return this._singleAvailabilityZone;
  }

  // single_instance_type - computed: false, optional: true, required: false
  private _singleInstanceType?: boolean | cdktn.IResolvable; 
  public get singleInstanceType() {
    return this.getBooleanAttribute('single_instance_type');
  }
  public set singleInstanceType(value: boolean | cdktn.IResolvable) {
    this._singleInstanceType = value;
  }
  public resetSingleInstanceType() {
    this._singleInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleInstanceTypeInput() {
    return this._singleInstanceType;
  }

  // capacity_reservation_options - computed: false, optional: true, required: false
  private _capacityReservationOptions = new CapacityReservationOptionsPropertyOutputReference(this, "capacity_reservation_options");
  public get capacityReservationOptions() {
    return this._capacityReservationOptions;
  }
  public putCapacityReservationOptions(value: CapacityReservationOptionsProperty) {
    this._capacityReservationOptions.internalValue = value;
  }
  public resetCapacityReservationOptions() {
    this._capacityReservationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationOptionsInput() {
    return this._capacityReservationOptions.internalValue;
  }
}
export interface CapacityRebalanceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#replacement_strategy AwsFleet#replacement_strategy}
  */
  readonly replacementStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#termination_delay AwsFleet#termination_delay}
  */
  readonly terminationDelay?: number;
}
export class CapacityRebalancePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityRebalanceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replacementStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementStrategy = this._replacementStrategy;
    }
    if (this._terminationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationDelay = this._terminationDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityRebalanceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replacementStrategy = undefined;
      this._terminationDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replacementStrategy = value.replacementStrategy;
      this._terminationDelay = value.terminationDelay;
    }
  }

  // replacement_strategy - computed: false, optional: true, required: false
  private _replacementStrategy?: string; 
  public get replacementStrategy() {
    return this.getStringAttribute('replacement_strategy');
  }
  public set replacementStrategy(value: string) {
    this._replacementStrategy = value;
  }
  public resetReplacementStrategy() {
    this._replacementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementStrategyInput() {
    return this._replacementStrategy;
  }

  // termination_delay - computed: false, optional: true, required: false
  private _terminationDelay?: number; 
  public get terminationDelay() {
    return this.getNumberAttribute('termination_delay');
  }
  public set terminationDelay(value: number) {
    this._terminationDelay = value;
  }
  public resetTerminationDelay() {
    this._terminationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationDelayInput() {
    return this._terminationDelay;
  }
}
export interface MaintenanceStrategiesProperty {
  /**
  * capacity_rebalance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#capacity_rebalance AwsFleet#capacity_rebalance}
  */
  readonly capacityRebalance?: CapacityRebalanceProperty;
}
export class MaintenanceStrategiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceStrategiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityRebalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityRebalance = this._capacityRebalance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceStrategiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityRebalance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityRebalance.internalValue = value.capacityRebalance;
    }
  }

  // capacity_rebalance - computed: false, optional: true, required: false
  private _capacityRebalance = new CapacityRebalancePropertyOutputReference(this, "capacity_rebalance");
  public get capacityRebalance() {
    return this._capacityRebalance;
  }
  public putCapacityRebalance(value: CapacityRebalanceProperty) {
    this._capacityRebalance.internalValue = value;
  }
  public resetCapacityRebalance() {
    this._capacityRebalance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityRebalanceInput() {
    return this._capacityRebalance.internalValue;
  }
}
export interface SpotOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#allocation_strategy AwsFleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#instance_interruption_behavior AwsFleet#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#instance_pools_to_use_count AwsFleet#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#max_total_price AwsFleet#max_total_price}
  */
  readonly maxTotalPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#min_target_capacity AwsFleet#min_target_capacity}
  */
  readonly minTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#single_availability_zone AwsFleet#single_availability_zone}
  */
  readonly singleAvailabilityZone?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#single_instance_type AwsFleet#single_instance_type}
  */
  readonly singleInstanceType?: boolean | cdktn.IResolvable;
  /**
  * maintenance_strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#maintenance_strategies AwsFleet#maintenance_strategies}
  */
  readonly maintenanceStrategies?: MaintenanceStrategiesProperty;
}
export class SpotOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpotOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instanceInterruptionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
    }
    if (this._instancePoolsToUseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
    }
    if (this._maxTotalPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalPrice = this._maxTotalPrice;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._singleAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleAvailabilityZone = this._singleAvailabilityZone;
    }
    if (this._singleInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleInstanceType = this._singleInstanceType;
    }
    if (this._maintenanceStrategies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceStrategies = this._maintenanceStrategies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpotOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._instanceInterruptionBehavior = undefined;
      this._instancePoolsToUseCount = undefined;
      this._maxTotalPrice = undefined;
      this._minTargetCapacity = undefined;
      this._singleAvailabilityZone = undefined;
      this._singleInstanceType = undefined;
      this._maintenanceStrategies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
      this._instancePoolsToUseCount = value.instancePoolsToUseCount;
      this._maxTotalPrice = value.maxTotalPrice;
      this._minTargetCapacity = value.minTargetCapacity;
      this._singleAvailabilityZone = value.singleAvailabilityZone;
      this._singleInstanceType = value.singleInstanceType;
      this._maintenanceStrategies.internalValue = value.maintenanceStrategies;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_interruption_behavior - computed: false, optional: true, required: false
  private _instanceInterruptionBehavior?: string; 
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }
  public set instanceInterruptionBehavior(value: string) {
    this._instanceInterruptionBehavior = value;
  }
  public resetInstanceInterruptionBehavior() {
    this._instanceInterruptionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviorInput() {
    return this._instanceInterruptionBehavior;
  }

  // instance_pools_to_use_count - computed: false, optional: true, required: false
  private _instancePoolsToUseCount?: number; 
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }
  public set instancePoolsToUseCount(value: number) {
    this._instancePoolsToUseCount = value;
  }
  public resetInstancePoolsToUseCount() {
    this._instancePoolsToUseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolsToUseCountInput() {
    return this._instancePoolsToUseCount;
  }

  // max_total_price - computed: false, optional: true, required: false
  private _maxTotalPrice?: string; 
  public get maxTotalPrice() {
    return this.getStringAttribute('max_total_price');
  }
  public set maxTotalPrice(value: string) {
    this._maxTotalPrice = value;
  }
  public resetMaxTotalPrice() {
    this._maxTotalPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalPriceInput() {
    return this._maxTotalPrice;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: number; 
  public get minTargetCapacity() {
    return this.getNumberAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: number) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // single_availability_zone - computed: false, optional: true, required: false
  private _singleAvailabilityZone?: boolean | cdktn.IResolvable; 
  public get singleAvailabilityZone() {
    return this.getBooleanAttribute('single_availability_zone');
  }
  public set singleAvailabilityZone(value: boolean | cdktn.IResolvable) {
    this._singleAvailabilityZone = value;
  }
  public resetSingleAvailabilityZone() {
    this._singleAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleAvailabilityZoneInput() {
    return this._singleAvailabilityZone;
  }

  // single_instance_type - computed: false, optional: true, required: false
  private _singleInstanceType?: boolean | cdktn.IResolvable; 
  public get singleInstanceType() {
    return this.getBooleanAttribute('single_instance_type');
  }
  public set singleInstanceType(value: boolean | cdktn.IResolvable) {
    this._singleInstanceType = value;
  }
  public resetSingleInstanceType() {
    this._singleInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleInstanceTypeInput() {
    return this._singleInstanceType;
  }

  // maintenance_strategies - computed: false, optional: true, required: false
  private _maintenanceStrategies = new MaintenanceStrategiesPropertyOutputReference(this, "maintenance_strategies");
  public get maintenanceStrategies() {
    return this._maintenanceStrategies;
  }
  public putMaintenanceStrategies(value: MaintenanceStrategiesProperty) {
    this._maintenanceStrategies.internalValue = value;
  }
  public resetMaintenanceStrategies() {
    this._maintenanceStrategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStrategiesInput() {
    return this._maintenanceStrategies.internalValue;
  }
}
export interface TargetCapacitySpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#default_target_capacity_type AwsFleet#default_target_capacity_type}
  */
  readonly defaultTargetCapacityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#on_demand_target_capacity AwsFleet#on_demand_target_capacity}
  */
  readonly onDemandTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#spot_target_capacity AwsFleet#spot_target_capacity}
  */
  readonly spotTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#target_capacity_unit_type AwsFleet#target_capacity_unit_type}
  */
  readonly targetCapacityUnitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#total_target_capacity AwsFleet#total_target_capacity}
  */
  readonly totalTargetCapacity: number;
}
export class TargetCapacitySpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetCapacitySpecificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTargetCapacityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetCapacityType = this._defaultTargetCapacityType;
    }
    if (this._onDemandTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandTargetCapacity = this._onDemandTargetCapacity;
    }
    if (this._spotTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotTargetCapacity = this._spotTargetCapacity;
    }
    if (this._targetCapacityUnitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCapacityUnitType = this._targetCapacityUnitType;
    }
    if (this._totalTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTargetCapacity = this._totalTargetCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetCapacitySpecificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTargetCapacityType = undefined;
      this._onDemandTargetCapacity = undefined;
      this._spotTargetCapacity = undefined;
      this._targetCapacityUnitType = undefined;
      this._totalTargetCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTargetCapacityType = value.defaultTargetCapacityType;
      this._onDemandTargetCapacity = value.onDemandTargetCapacity;
      this._spotTargetCapacity = value.spotTargetCapacity;
      this._targetCapacityUnitType = value.targetCapacityUnitType;
      this._totalTargetCapacity = value.totalTargetCapacity;
    }
  }

  // default_target_capacity_type - computed: false, optional: false, required: true
  private _defaultTargetCapacityType?: string; 
  public get defaultTargetCapacityType() {
    return this.getStringAttribute('default_target_capacity_type');
  }
  public set defaultTargetCapacityType(value: string) {
    this._defaultTargetCapacityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetCapacityTypeInput() {
    return this._defaultTargetCapacityType;
  }

  // on_demand_target_capacity - computed: false, optional: true, required: false
  private _onDemandTargetCapacity?: number; 
  public get onDemandTargetCapacity() {
    return this.getNumberAttribute('on_demand_target_capacity');
  }
  public set onDemandTargetCapacity(value: number) {
    this._onDemandTargetCapacity = value;
  }
  public resetOnDemandTargetCapacity() {
    this._onDemandTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandTargetCapacityInput() {
    return this._onDemandTargetCapacity;
  }

  // spot_target_capacity - computed: false, optional: true, required: false
  private _spotTargetCapacity?: number; 
  public get spotTargetCapacity() {
    return this.getNumberAttribute('spot_target_capacity');
  }
  public set spotTargetCapacity(value: number) {
    this._spotTargetCapacity = value;
  }
  public resetSpotTargetCapacity() {
    this._spotTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotTargetCapacityInput() {
    return this._spotTargetCapacity;
  }

  // target_capacity_unit_type - computed: false, optional: true, required: false
  private _targetCapacityUnitType?: string; 
  public get targetCapacityUnitType() {
    return this.getStringAttribute('target_capacity_unit_type');
  }
  public set targetCapacityUnitType(value: string) {
    this._targetCapacityUnitType = value;
  }
  public resetTargetCapacityUnitType() {
    this._targetCapacityUnitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityUnitTypeInput() {
    return this._targetCapacityUnitType;
  }

  // total_target_capacity - computed: false, optional: false, required: true
  private _totalTargetCapacity?: number; 
  public get totalTargetCapacity() {
    return this.getNumberAttribute('total_target_capacity');
  }
  public set totalTargetCapacity(value: number) {
    this._totalTargetCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTargetCapacityInput() {
    return this._totalTargetCapacity;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#create AwsFleet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#delete AwsFleet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ec2_fleet#update AwsFleet#update}
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
}
