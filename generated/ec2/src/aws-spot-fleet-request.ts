// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSpotFleetRequestConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#allocation_strategy AwsSpotFleetRequest#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#context AwsSpotFleetRequest#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#excess_capacity_termination_policy AwsSpotFleetRequest#excess_capacity_termination_policy}
  */
  readonly excessCapacityTerminationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#fleet_type AwsSpotFleetRequest#fleet_type}
  */
  readonly fleetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#iam_fleet_role AwsSpotFleetRequest#iam_fleet_role}
  */
  readonly iamFleetRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#id AwsSpotFleetRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#instance_interruption_behaviour AwsSpotFleetRequest#instance_interruption_behaviour}
  */
  readonly instanceInterruptionBehaviour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#instance_pools_to_use_count AwsSpotFleetRequest#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#load_balancers AwsSpotFleetRequest#load_balancers}
  */
  readonly loadBalancers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#on_demand_allocation_strategy AwsSpotFleetRequest#on_demand_allocation_strategy}
  */
  readonly onDemandAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#on_demand_max_total_price AwsSpotFleetRequest#on_demand_max_total_price}
  */
  readonly onDemandMaxTotalPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#on_demand_target_capacity AwsSpotFleetRequest#on_demand_target_capacity}
  */
  readonly onDemandTargetCapacity?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#region AwsSpotFleetRequest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#replace_unhealthy_instances AwsSpotFleetRequest#replace_unhealthy_instances}
  */
  readonly replaceUnhealthyInstances?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#spot_price AwsSpotFleetRequest#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#tags AwsSpotFleetRequest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#tags_all AwsSpotFleetRequest#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#target_capacity AwsSpotFleetRequest#target_capacity}
  */
  readonly targetCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#target_capacity_unit_type AwsSpotFleetRequest#target_capacity_unit_type}
  */
  readonly targetCapacityUnitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#target_group_arns AwsSpotFleetRequest#target_group_arns}
  */
  readonly targetGroupArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#terminate_instances_on_delete AwsSpotFleetRequest#terminate_instances_on_delete}
  */
  readonly terminateInstancesOnDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#terminate_instances_with_expiration AwsSpotFleetRequest#terminate_instances_with_expiration}
  */
  readonly terminateInstancesWithExpiration?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#valid_from AwsSpotFleetRequest#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#valid_until AwsSpotFleetRequest#valid_until}
  */
  readonly validUntil?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#wait_for_fulfillment AwsSpotFleetRequest#wait_for_fulfillment}
  */
  readonly waitForFulfillment?: boolean | cdktn.IResolvable;
  /**
  * launch_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#launch_specification AwsSpotFleetRequest#launch_specification}
  */
  readonly launchSpecification?: AwsSpotFleetRequest.LaunchSpecificationProperty[] | cdktn.IResolvable;
  /**
  * launch_template_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#launch_template_config AwsSpotFleetRequest#launch_template_config}
  */
  readonly launchTemplateConfig?: AwsSpotFleetRequest.LaunchTemplateConfigProperty[] | cdktn.IResolvable;
  /**
  * spot_maintenance_strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#spot_maintenance_strategies AwsSpotFleetRequest#spot_maintenance_strategies}
  */
  readonly spotMaintenanceStrategies?: AwsSpotFleetRequest.SpotMaintenanceStrategiesProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#timeouts AwsSpotFleetRequest#timeouts}
  */
  readonly timeouts?: AwsSpotFleetRequest.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request aws_spot_fleet_request}
*/
export class AwsSpotFleetRequest extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_spot_fleet_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSpotFleetRequest resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSpotFleetRequest to import
  * @param importFromId The id of the existing AwsSpotFleetRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSpotFleetRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_spot_fleet_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request aws_spot_fleet_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSpotFleetRequestConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSpotFleetRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_spot_fleet_request',
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
    this._allocationStrategy = config.allocationStrategy;
    this._context = config.context;
    this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
    this._fleetType = config.fleetType;
    this._iamFleetRole = config.iamFleetRole;
    this._id = config.id;
    this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
    this._instancePoolsToUseCount = config.instancePoolsToUseCount;
    this._loadBalancers = config.loadBalancers;
    this._onDemandAllocationStrategy = config.onDemandAllocationStrategy;
    this._onDemandMaxTotalPrice = config.onDemandMaxTotalPrice;
    this._onDemandTargetCapacity = config.onDemandTargetCapacity;
    this._region = config.region;
    this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
    this._spotPrice = config.spotPrice;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._targetCapacity = config.targetCapacity;
    this._targetCapacityUnitType = config.targetCapacityUnitType;
    this._targetGroupArns = config.targetGroupArns;
    this._terminateInstancesOnDelete = config.terminateInstancesOnDelete;
    this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._waitForFulfillment = config.waitForFulfillment;
    this._launchSpecification.internalValue = config.launchSpecification;
    this._launchTemplateConfig.internalValue = config.launchTemplateConfig;
    this._spotMaintenanceStrategies.internalValue = config.spotMaintenanceStrategies;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
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

  // fleet_type - computed: false, optional: true, required: false
  private _fleetType?: string; 
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string) {
    this._fleetType = value;
  }
  public resetFleetType() {
    this._fleetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType;
  }

  // iam_fleet_role - computed: false, optional: false, required: true
  private _iamFleetRole?: string; 
  public get iamFleetRole() {
    return this.getStringAttribute('iam_fleet_role');
  }
  public set iamFleetRole(value: string) {
    this._iamFleetRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamFleetRoleInput() {
    return this._iamFleetRole;
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

  // instance_interruption_behaviour - computed: false, optional: true, required: false
  private _instanceInterruptionBehaviour?: string; 
  public get instanceInterruptionBehaviour() {
    return this.getStringAttribute('instance_interruption_behaviour');
  }
  public set instanceInterruptionBehaviour(value: string) {
    this._instanceInterruptionBehaviour = value;
  }
  public resetInstanceInterruptionBehaviour() {
    this._instanceInterruptionBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviourInput() {
    return this._instanceInterruptionBehaviour;
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

  // load_balancers - computed: true, optional: true, required: false
  private _loadBalancers?: string[]; 
  public get loadBalancers() {
    return cdktn.Fn.tolist(this.getListAttribute('load_balancers'));
  }
  public set loadBalancers(value: string[]) {
    this._loadBalancers = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers;
  }

  // on_demand_allocation_strategy - computed: false, optional: true, required: false
  private _onDemandAllocationStrategy?: string; 
  public get onDemandAllocationStrategy() {
    return this.getStringAttribute('on_demand_allocation_strategy');
  }
  public set onDemandAllocationStrategy(value: string) {
    this._onDemandAllocationStrategy = value;
  }
  public resetOnDemandAllocationStrategy() {
    this._onDemandAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandAllocationStrategyInput() {
    return this._onDemandAllocationStrategy;
  }

  // on_demand_max_total_price - computed: false, optional: true, required: false
  private _onDemandMaxTotalPrice?: string; 
  public get onDemandMaxTotalPrice() {
    return this.getStringAttribute('on_demand_max_total_price');
  }
  public set onDemandMaxTotalPrice(value: string) {
    this._onDemandMaxTotalPrice = value;
  }
  public resetOnDemandMaxTotalPrice() {
    this._onDemandMaxTotalPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandMaxTotalPriceInput() {
    return this._onDemandMaxTotalPrice;
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

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string; 
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice;
  }

  // spot_request_state - computed: true, optional: false, required: false
  public get spotRequestState() {
    return this.getStringAttribute('spot_request_state');
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

  // target_capacity - computed: false, optional: false, required: true
  private _targetCapacity?: number; 
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
  }
  public set targetCapacity(value: number) {
    this._targetCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityInput() {
    return this._targetCapacity;
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

  // target_group_arns - computed: true, optional: true, required: false
  private _targetGroupArns?: string[]; 
  public get targetGroupArns() {
    return cdktn.Fn.tolist(this.getListAttribute('target_group_arns'));
  }
  public set targetGroupArns(value: string[]) {
    this._targetGroupArns = value;
  }
  public resetTargetGroupArns() {
    this._targetGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnsInput() {
    return this._targetGroupArns;
  }

  // terminate_instances_on_delete - computed: false, optional: true, required: false
  private _terminateInstancesOnDelete?: string; 
  public get terminateInstancesOnDelete() {
    return this.getStringAttribute('terminate_instances_on_delete');
  }
  public set terminateInstancesOnDelete(value: string) {
    this._terminateInstancesOnDelete = value;
  }
  public resetTerminateInstancesOnDelete() {
    this._terminateInstancesOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesOnDeleteInput() {
    return this._terminateInstancesOnDelete;
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

  // wait_for_fulfillment - computed: false, optional: true, required: false
  private _waitForFulfillment?: boolean | cdktn.IResolvable; 
  public get waitForFulfillment() {
    return this.getBooleanAttribute('wait_for_fulfillment');
  }
  public set waitForFulfillment(value: boolean | cdktn.IResolvable) {
    this._waitForFulfillment = value;
  }
  public resetWaitForFulfillment() {
    this._waitForFulfillment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForFulfillmentInput() {
    return this._waitForFulfillment;
  }

  // launch_specification - computed: false, optional: true, required: false
  private _launchSpecification = new AwsSpotFleetRequest.LaunchSpecificationPropertyList(this, "launch_specification", true);
  public get launchSpecification() {
    return this._launchSpecification;
  }
  public putLaunchSpecification(value: AwsSpotFleetRequest.LaunchSpecificationProperty[] | cdktn.IResolvable) {
    this._launchSpecification.internalValue = value;
  }
  public resetLaunchSpecification() {
    this._launchSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationInput() {
    return this._launchSpecification.internalValue;
  }

  // launch_template_config - computed: false, optional: true, required: false
  private _launchTemplateConfig = new AwsSpotFleetRequest.LaunchTemplateConfigPropertyList(this, "launch_template_config", true);
  public get launchTemplateConfig() {
    return this._launchTemplateConfig;
  }
  public putLaunchTemplateConfig(value: AwsSpotFleetRequest.LaunchTemplateConfigProperty[] | cdktn.IResolvable) {
    this._launchTemplateConfig.internalValue = value;
  }
  public resetLaunchTemplateConfig() {
    this._launchTemplateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigInput() {
    return this._launchTemplateConfig.internalValue;
  }

  // spot_maintenance_strategies - computed: false, optional: true, required: false
  private _spotMaintenanceStrategies = new AwsSpotFleetRequest.SpotMaintenanceStrategiesPropertyOutputReference(this, "spot_maintenance_strategies");
  public get spotMaintenanceStrategies() {
    return this._spotMaintenanceStrategies;
  }
  public putSpotMaintenanceStrategies(value: AwsSpotFleetRequest.SpotMaintenanceStrategiesProperty) {
    this._spotMaintenanceStrategies.internalValue = value;
  }
  public resetSpotMaintenanceStrategies() {
    this._spotMaintenanceStrategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaintenanceStrategiesInput() {
    return this._spotMaintenanceStrategies.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsSpotFleetRequest.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsSpotFleetRequest.TimeoutsProperty) {
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
      allocation_strategy: cdktn.stringToTerraform(this._allocationStrategy),
      context: cdktn.stringToTerraform(this._context),
      excess_capacity_termination_policy: cdktn.stringToTerraform(this._excessCapacityTerminationPolicy),
      fleet_type: cdktn.stringToTerraform(this._fleetType),
      iam_fleet_role: cdktn.stringToTerraform(this._iamFleetRole),
      id: cdktn.stringToTerraform(this._id),
      instance_interruption_behaviour: cdktn.stringToTerraform(this._instanceInterruptionBehaviour),
      instance_pools_to_use_count: cdktn.numberToTerraform(this._instancePoolsToUseCount),
      load_balancers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._loadBalancers),
      on_demand_allocation_strategy: cdktn.stringToTerraform(this._onDemandAllocationStrategy),
      on_demand_max_total_price: cdktn.stringToTerraform(this._onDemandMaxTotalPrice),
      on_demand_target_capacity: cdktn.numberToTerraform(this._onDemandTargetCapacity),
      region: cdktn.stringToTerraform(this._region),
      replace_unhealthy_instances: cdktn.booleanToTerraform(this._replaceUnhealthyInstances),
      spot_price: cdktn.stringToTerraform(this._spotPrice),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      target_capacity: cdktn.numberToTerraform(this._targetCapacity),
      target_capacity_unit_type: cdktn.stringToTerraform(this._targetCapacityUnitType),
      target_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetGroupArns),
      terminate_instances_on_delete: cdktn.stringToTerraform(this._terminateInstancesOnDelete),
      terminate_instances_with_expiration: cdktn.booleanToTerraform(this._terminateInstancesWithExpiration),
      valid_from: cdktn.stringToTerraform(this._validFrom),
      valid_until: cdktn.stringToTerraform(this._validUntil),
      wait_for_fulfillment: cdktn.booleanToTerraform(this._waitForFulfillment),
      launch_specification: cdktn.listMapper(awsSpotFleetRequestLaunchSpecificationPropertyToTerraform, true)(this._launchSpecification.internalValue),
      launch_template_config: cdktn.listMapper(awsSpotFleetRequestLaunchTemplateConfigPropertyToTerraform, true)(this._launchTemplateConfig.internalValue),
      spot_maintenance_strategies: awsSpotFleetRequestSpotMaintenanceStrategiesPropertyToTerraform(this._spotMaintenanceStrategies.internalValue),
      timeouts: awsSpotFleetRequestTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_strategy: {
        value: cdktn.stringToHclTerraform(this._allocationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      fleet_type: {
        value: cdktn.stringToHclTerraform(this._fleetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_fleet_role: {
        value: cdktn.stringToHclTerraform(this._iamFleetRole),
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
      instance_interruption_behaviour: {
        value: cdktn.stringToHclTerraform(this._instanceInterruptionBehaviour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_pools_to_use_count: {
        value: cdktn.numberToHclTerraform(this._instancePoolsToUseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._loadBalancers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      on_demand_allocation_strategy: {
        value: cdktn.stringToHclTerraform(this._onDemandAllocationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_max_total_price: {
        value: cdktn.stringToHclTerraform(this._onDemandMaxTotalPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_target_capacity: {
        value: cdktn.numberToHclTerraform(this._onDemandTargetCapacity),
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
      replace_unhealthy_instances: {
        value: cdktn.booleanToHclTerraform(this._replaceUnhealthyInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spot_price: {
        value: cdktn.stringToHclTerraform(this._spotPrice),
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
      target_capacity: {
        value: cdktn.numberToHclTerraform(this._targetCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_capacity_unit_type: {
        value: cdktn.stringToHclTerraform(this._targetCapacityUnitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_group_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetGroupArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      terminate_instances_on_delete: {
        value: cdktn.stringToHclTerraform(this._terminateInstancesOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminate_instances_with_expiration: {
        value: cdktn.booleanToHclTerraform(this._terminateInstancesWithExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      wait_for_fulfillment: {
        value: cdktn.booleanToHclTerraform(this._waitForFulfillment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      launch_specification: {
        value: cdktn.listMapperHcl(awsSpotFleetRequestLaunchSpecificationPropertyToHclTerraform, true)(this._launchSpecification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsSpotFleetRequest.LaunchSpecificationPropertyList",
      },
      launch_template_config: {
        value: cdktn.listMapperHcl(awsSpotFleetRequestLaunchTemplateConfigPropertyToHclTerraform, true)(this._launchTemplateConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsSpotFleetRequest.LaunchTemplateConfigPropertyList",
      },
      spot_maintenance_strategies: {
        value: awsSpotFleetRequestSpotMaintenanceStrategiesPropertyToHclTerraform(this._spotMaintenanceStrategies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSpotFleetRequest.SpotMaintenanceStrategiesPropertyList",
      },
      timeouts: {
        value: awsSpotFleetRequestTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsSpotFleetRequest.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSpotFleetRequestEbsBlockDevicePropertyToTerraform(struct?: AwsSpotFleetRequest.EbsBlockDeviceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktn.stringToTerraform(struct!.deviceName),
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    iops: cdktn.numberToTerraform(struct!.iops),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    volume_size: cdktn.numberToTerraform(struct!.volumeSize),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
  }
}


export function awsSpotFleetRequestEbsBlockDevicePropertyToHclTerraform(struct?: AwsSpotFleetRequest.EbsBlockDeviceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktn.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_name: {
      value: cdktn.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktn.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktn.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktn.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestEphemeralBlockDevicePropertyToTerraform(struct?: AwsSpotFleetRequest.EphemeralBlockDeviceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device_name: cdktn.stringToTerraform(struct!.deviceName),
    virtual_name: cdktn.stringToTerraform(struct!.virtualName),
  }
}


export function awsSpotFleetRequestEphemeralBlockDevicePropertyToHclTerraform(struct?: AwsSpotFleetRequest.EphemeralBlockDeviceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device_name: {
      value: cdktn.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_name: {
      value: cdktn.stringToHclTerraform(struct!.virtualName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestRootBlockDevicePropertyToTerraform(struct?: AwsSpotFleetRequest.RootBlockDeviceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_on_termination: cdktn.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    iops: cdktn.numberToTerraform(struct!.iops),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    volume_size: cdktn.numberToTerraform(struct!.volumeSize),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
  }
}


export function awsSpotFleetRequestRootBlockDevicePropertyToHclTerraform(struct?: AwsSpotFleetRequest.RootBlockDeviceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktn.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktn.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktn.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestLaunchSpecificationPropertyToTerraform(struct?: AwsSpotFleetRequest.LaunchSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ami: cdktn.stringToTerraform(struct!.ami),
    associate_public_ip_address: cdktn.booleanToTerraform(struct!.associatePublicIpAddress),
    availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
    ebs_optimized: cdktn.booleanToTerraform(struct!.ebsOptimized),
    iam_instance_profile: cdktn.stringToTerraform(struct!.iamInstanceProfile),
    iam_instance_profile_arn: cdktn.stringToTerraform(struct!.iamInstanceProfileArn),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    key_name: cdktn.stringToTerraform(struct!.keyName),
    monitoring: cdktn.booleanToTerraform(struct!.monitoring),
    placement_group: cdktn.stringToTerraform(struct!.placementGroup),
    placement_tenancy: cdktn.stringToTerraform(struct!.placementTenancy),
    spot_price: cdktn.stringToTerraform(struct!.spotPrice),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    user_data: cdktn.stringToTerraform(struct!.userData),
    vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcSecurityGroupIds),
    weighted_capacity: cdktn.stringToTerraform(struct!.weightedCapacity),
    ebs_block_device: cdktn.listMapper(awsSpotFleetRequestEbsBlockDevicePropertyToTerraform, true)(struct!.ebsBlockDevice),
    ephemeral_block_device: cdktn.listMapper(awsSpotFleetRequestEphemeralBlockDevicePropertyToTerraform, true)(struct!.ephemeralBlockDevice),
    root_block_device: cdktn.listMapper(awsSpotFleetRequestRootBlockDevicePropertyToTerraform, true)(struct!.rootBlockDevice),
  }
}


export function awsSpotFleetRequestLaunchSpecificationPropertyToHclTerraform(struct?: AwsSpotFleetRequest.LaunchSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ami: {
      value: cdktn.stringToHclTerraform(struct!.ami),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    associate_public_ip_address: {
      value: cdktn.booleanToHclTerraform(struct!.associatePublicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_zone: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_optimized: {
      value: cdktn.booleanToHclTerraform(struct!.ebsOptimized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iam_instance_profile: {
      value: cdktn.stringToHclTerraform(struct!.iamInstanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_instance_profile_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamInstanceProfileArn),
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
    key_name: {
      value: cdktn.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring: {
      value: cdktn.booleanToHclTerraform(struct!.monitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    placement_group: {
      value: cdktn.stringToHclTerraform(struct!.placementGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement_tenancy: {
      value: cdktn.stringToHclTerraform(struct!.placementTenancy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_price: {
      value: cdktn.stringToHclTerraform(struct!.spotPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    user_data: {
      value: cdktn.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weighted_capacity: {
      value: cdktn.stringToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_block_device: {
      value: cdktn.listMapperHcl(awsSpotFleetRequestEbsBlockDevicePropertyToHclTerraform, true)(struct!.ebsBlockDevice),
      isBlock: true,
      type: "set",
      storageClassType: "EbsBlockDevicePropertyList",
    },
    ephemeral_block_device: {
      value: cdktn.listMapperHcl(awsSpotFleetRequestEphemeralBlockDevicePropertyToHclTerraform, true)(struct!.ephemeralBlockDevice),
      isBlock: true,
      type: "set",
      storageClassType: "EphemeralBlockDevicePropertyList",
    },
    root_block_device: {
      value: cdktn.listMapperHcl(awsSpotFleetRequestRootBlockDevicePropertyToHclTerraform, true)(struct!.rootBlockDevice),
      isBlock: true,
      type: "set",
      storageClassType: "RootBlockDevicePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestLaunchTemplateSpecificationPropertyToTerraform(struct?: AwsSpotFleetRequest.LaunchTemplateSpecificationPropertyOutputReference | AwsSpotFleetRequest.LaunchTemplateSpecificationProperty): any {
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


export function awsSpotFleetRequestLaunchTemplateSpecificationPropertyToHclTerraform(struct?: AwsSpotFleetRequest.LaunchTemplateSpecificationPropertyOutputReference | AwsSpotFleetRequest.LaunchTemplateSpecificationProperty): any {
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


export function awsSpotFleetRequestAcceleratorCountPropertyToTerraform(struct?: AwsSpotFleetRequest.AcceleratorCountPropertyOutputReference | AwsSpotFleetRequest.AcceleratorCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestAcceleratorCountPropertyToHclTerraform(struct?: AwsSpotFleetRequest.AcceleratorCountPropertyOutputReference | AwsSpotFleetRequest.AcceleratorCountProperty): any {
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


export function awsSpotFleetRequestAcceleratorTotalMemoryMibPropertyToTerraform(struct?: AwsSpotFleetRequest.AcceleratorTotalMemoryMibPropertyOutputReference | AwsSpotFleetRequest.AcceleratorTotalMemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestAcceleratorTotalMemoryMibPropertyToHclTerraform(struct?: AwsSpotFleetRequest.AcceleratorTotalMemoryMibPropertyOutputReference | AwsSpotFleetRequest.AcceleratorTotalMemoryMibProperty): any {
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


export function awsSpotFleetRequestBaselineEbsBandwidthMbpsPropertyToTerraform(struct?: AwsSpotFleetRequest.BaselineEbsBandwidthMbpsPropertyOutputReference | AwsSpotFleetRequest.BaselineEbsBandwidthMbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct?: AwsSpotFleetRequest.BaselineEbsBandwidthMbpsPropertyOutputReference | AwsSpotFleetRequest.BaselineEbsBandwidthMbpsProperty): any {
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


export function awsSpotFleetRequestMemoryGibPerVcpuPropertyToTerraform(struct?: AwsSpotFleetRequest.MemoryGibPerVcpuPropertyOutputReference | AwsSpotFleetRequest.MemoryGibPerVcpuProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestMemoryGibPerVcpuPropertyToHclTerraform(struct?: AwsSpotFleetRequest.MemoryGibPerVcpuPropertyOutputReference | AwsSpotFleetRequest.MemoryGibPerVcpuProperty): any {
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


export function awsSpotFleetRequestMemoryMibPropertyToTerraform(struct?: AwsSpotFleetRequest.MemoryMibPropertyOutputReference | AwsSpotFleetRequest.MemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestMemoryMibPropertyToHclTerraform(struct?: AwsSpotFleetRequest.MemoryMibPropertyOutputReference | AwsSpotFleetRequest.MemoryMibProperty): any {
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


export function awsSpotFleetRequestNetworkBandwidthGbpsPropertyToTerraform(struct?: AwsSpotFleetRequest.NetworkBandwidthGbpsPropertyOutputReference | AwsSpotFleetRequest.NetworkBandwidthGbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestNetworkBandwidthGbpsPropertyToHclTerraform(struct?: AwsSpotFleetRequest.NetworkBandwidthGbpsPropertyOutputReference | AwsSpotFleetRequest.NetworkBandwidthGbpsProperty): any {
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


export function awsSpotFleetRequestNetworkInterfaceCountPropertyToTerraform(struct?: AwsSpotFleetRequest.NetworkInterfaceCountPropertyOutputReference | AwsSpotFleetRequest.NetworkInterfaceCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestNetworkInterfaceCountPropertyToHclTerraform(struct?: AwsSpotFleetRequest.NetworkInterfaceCountPropertyOutputReference | AwsSpotFleetRequest.NetworkInterfaceCountProperty): any {
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


export function awsSpotFleetRequestTotalLocalStorageGbPropertyToTerraform(struct?: AwsSpotFleetRequest.TotalLocalStorageGbPropertyOutputReference | AwsSpotFleetRequest.TotalLocalStorageGbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestTotalLocalStorageGbPropertyToHclTerraform(struct?: AwsSpotFleetRequest.TotalLocalStorageGbPropertyOutputReference | AwsSpotFleetRequest.TotalLocalStorageGbProperty): any {
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


export function awsSpotFleetRequestVcpuCountPropertyToTerraform(struct?: AwsSpotFleetRequest.VcpuCountPropertyOutputReference | AwsSpotFleetRequest.VcpuCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsSpotFleetRequestVcpuCountPropertyToHclTerraform(struct?: AwsSpotFleetRequest.VcpuCountPropertyOutputReference | AwsSpotFleetRequest.VcpuCountProperty): any {
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


export function awsSpotFleetRequestInstanceRequirementsPropertyToTerraform(struct?: AwsSpotFleetRequest.InstanceRequirementsPropertyOutputReference | AwsSpotFleetRequest.InstanceRequirementsProperty): any {
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
    on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
    require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
    spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
    accelerator_count: awsSpotFleetRequestAcceleratorCountPropertyToTerraform(struct!.acceleratorCount),
    accelerator_total_memory_mib: awsSpotFleetRequestAcceleratorTotalMemoryMibPropertyToTerraform(struct!.acceleratorTotalMemoryMib),
    baseline_ebs_bandwidth_mbps: awsSpotFleetRequestBaselineEbsBandwidthMbpsPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
    memory_gib_per_vcpu: awsSpotFleetRequestMemoryGibPerVcpuPropertyToTerraform(struct!.memoryGibPerVcpu),
    memory_mib: awsSpotFleetRequestMemoryMibPropertyToTerraform(struct!.memoryMib),
    network_bandwidth_gbps: awsSpotFleetRequestNetworkBandwidthGbpsPropertyToTerraform(struct!.networkBandwidthGbps),
    network_interface_count: awsSpotFleetRequestNetworkInterfaceCountPropertyToTerraform(struct!.networkInterfaceCount),
    total_local_storage_gb: awsSpotFleetRequestTotalLocalStorageGbPropertyToTerraform(struct!.totalLocalStorageGb),
    vcpu_count: awsSpotFleetRequestVcpuCountPropertyToTerraform(struct!.vcpuCount),
  }
}


export function awsSpotFleetRequestInstanceRequirementsPropertyToHclTerraform(struct?: AwsSpotFleetRequest.InstanceRequirementsPropertyOutputReference | AwsSpotFleetRequest.InstanceRequirementsProperty): any {
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
      value: awsSpotFleetRequestAcceleratorCountPropertyToHclTerraform(struct!.acceleratorCount),
      isBlock: true,
      type: "list",
      storageClassType: "AcceleratorCountPropertyList",
    },
    accelerator_total_memory_mib: {
      value: awsSpotFleetRequestAcceleratorTotalMemoryMibPropertyToHclTerraform(struct!.acceleratorTotalMemoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "AcceleratorTotalMemoryMibPropertyList",
    },
    baseline_ebs_bandwidth_mbps: {
      value: awsSpotFleetRequestBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
      isBlock: true,
      type: "list",
      storageClassType: "BaselineEbsBandwidthMbpsPropertyList",
    },
    memory_gib_per_vcpu: {
      value: awsSpotFleetRequestMemoryGibPerVcpuPropertyToHclTerraform(struct!.memoryGibPerVcpu),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryGibPerVcpuPropertyList",
    },
    memory_mib: {
      value: awsSpotFleetRequestMemoryMibPropertyToHclTerraform(struct!.memoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryMibPropertyList",
    },
    network_bandwidth_gbps: {
      value: awsSpotFleetRequestNetworkBandwidthGbpsPropertyToHclTerraform(struct!.networkBandwidthGbps),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkBandwidthGbpsPropertyList",
    },
    network_interface_count: {
      value: awsSpotFleetRequestNetworkInterfaceCountPropertyToHclTerraform(struct!.networkInterfaceCount),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkInterfaceCountPropertyList",
    },
    total_local_storage_gb: {
      value: awsSpotFleetRequestTotalLocalStorageGbPropertyToHclTerraform(struct!.totalLocalStorageGb),
      isBlock: true,
      type: "list",
      storageClassType: "TotalLocalStorageGbPropertyList",
    },
    vcpu_count: {
      value: awsSpotFleetRequestVcpuCountPropertyToHclTerraform(struct!.vcpuCount),
      isBlock: true,
      type: "list",
      storageClassType: "VcpuCountPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestOverridesPropertyToTerraform(struct?: AwsSpotFleetRequest.OverridesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    priority: cdktn.numberToTerraform(struct!.priority),
    spot_price: cdktn.stringToTerraform(struct!.spotPrice),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktn.numberToTerraform(struct!.weightedCapacity),
    instance_requirements: awsSpotFleetRequestInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
  }
}


export function awsSpotFleetRequestOverridesPropertyToHclTerraform(struct?: AwsSpotFleetRequest.OverridesProperty | cdktn.IResolvable): any {
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
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_price: {
      value: cdktn.stringToHclTerraform(struct!.spotPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: awsSpotFleetRequestInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceRequirementsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestLaunchTemplateConfigPropertyToTerraform(struct?: AwsSpotFleetRequest.LaunchTemplateConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_specification: awsSpotFleetRequestLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplateSpecification),
    overrides: cdktn.listMapper(awsSpotFleetRequestOverridesPropertyToTerraform, true)(struct!.overrides),
  }
}


export function awsSpotFleetRequestLaunchTemplateConfigPropertyToHclTerraform(struct?: AwsSpotFleetRequest.LaunchTemplateConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_specification: {
      value: awsSpotFleetRequestLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplateSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "LaunchTemplateSpecificationPropertyList",
    },
    overrides: {
      value: cdktn.listMapperHcl(awsSpotFleetRequestOverridesPropertyToHclTerraform, true)(struct!.overrides),
      isBlock: true,
      type: "set",
      storageClassType: "OverridesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestCapacityRebalancePropertyToTerraform(struct?: AwsSpotFleetRequest.CapacityRebalancePropertyOutputReference | AwsSpotFleetRequest.CapacityRebalanceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replacement_strategy: cdktn.stringToTerraform(struct!.replacementStrategy),
  }
}


export function awsSpotFleetRequestCapacityRebalancePropertyToHclTerraform(struct?: AwsSpotFleetRequest.CapacityRebalancePropertyOutputReference | AwsSpotFleetRequest.CapacityRebalanceProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestSpotMaintenanceStrategiesPropertyToTerraform(struct?: AwsSpotFleetRequest.SpotMaintenanceStrategiesPropertyOutputReference | AwsSpotFleetRequest.SpotMaintenanceStrategiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_rebalance: awsSpotFleetRequestCapacityRebalancePropertyToTerraform(struct!.capacityRebalance),
  }
}


export function awsSpotFleetRequestSpotMaintenanceStrategiesPropertyToHclTerraform(struct?: AwsSpotFleetRequest.SpotMaintenanceStrategiesPropertyOutputReference | AwsSpotFleetRequest.SpotMaintenanceStrategiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_rebalance: {
      value: awsSpotFleetRequestCapacityRebalancePropertyToHclTerraform(struct!.capacityRebalance),
      isBlock: true,
      type: "list",
      storageClassType: "CapacityRebalancePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSpotFleetRequestTimeoutsPropertyToTerraform(struct?: AwsSpotFleetRequest.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsSpotFleetRequestTimeoutsPropertyToHclTerraform(struct?: AwsSpotFleetRequest.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsSpotFleetRequest {
export interface EbsBlockDeviceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#delete_on_termination AwsSpotFleetRequest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#device_name AwsSpotFleetRequest#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#encrypted AwsSpotFleetRequest#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#iops AwsSpotFleetRequest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#kms_key_id AwsSpotFleetRequest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#snapshot_id AwsSpotFleetRequest#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#throughput AwsSpotFleetRequest#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#volume_size AwsSpotFleetRequest#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#volume_type AwsSpotFleetRequest#volume_type}
  */
  readonly volumeType?: string;
}
export class EbsBlockDevicePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EbsBlockDeviceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsBlockDeviceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOnTermination = undefined;
      this._deviceName = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteOnTermination = value.deleteOnTermination;
      this._deviceName = value.deviceName;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktn.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktn.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktn.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: true, optional: true, required: false
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

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class EbsBlockDevicePropertyList extends cdktn.ComplexList {
  public internalValue? : EbsBlockDeviceProperty[] | cdktn.IResolvable

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
  public get(index: number): EbsBlockDevicePropertyOutputReference {
    return new EbsBlockDevicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralBlockDeviceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#device_name AwsSpotFleetRequest#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#virtual_name AwsSpotFleetRequest#virtual_name}
  */
  readonly virtualName: string;
}
export class EphemeralBlockDevicePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralBlockDeviceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._virtualName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualName = this._virtualName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralBlockDeviceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._virtualName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._virtualName = value.virtualName;
    }
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // virtual_name - computed: false, optional: false, required: true
  private _virtualName?: string; 
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
  public set virtualName(value: string) {
    this._virtualName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNameInput() {
    return this._virtualName;
  }
}

export class EphemeralBlockDevicePropertyList extends cdktn.ComplexList {
  public internalValue? : EphemeralBlockDeviceProperty[] | cdktn.IResolvable

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
  public get(index: number): EphemeralBlockDevicePropertyOutputReference {
    return new EphemeralBlockDevicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RootBlockDeviceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#delete_on_termination AwsSpotFleetRequest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#encrypted AwsSpotFleetRequest#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#iops AwsSpotFleetRequest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#kms_key_id AwsSpotFleetRequest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#throughput AwsSpotFleetRequest#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#volume_size AwsSpotFleetRequest#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#volume_type AwsSpotFleetRequest#volume_type}
  */
  readonly volumeType?: string;
}
export class RootBlockDevicePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RootBlockDeviceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RootBlockDeviceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOnTermination = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteOnTermination = value.deleteOnTermination;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktn.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktn.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktn.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: true, optional: true, required: false
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

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class RootBlockDevicePropertyList extends cdktn.ComplexList {
  public internalValue? : RootBlockDeviceProperty[] | cdktn.IResolvable

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
  public get(index: number): RootBlockDevicePropertyOutputReference {
    return new RootBlockDevicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#ami AwsSpotFleetRequest#ami}
  */
  readonly ami: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#associate_public_ip_address AwsSpotFleetRequest#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#availability_zone AwsSpotFleetRequest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#ebs_optimized AwsSpotFleetRequest#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#iam_instance_profile AwsSpotFleetRequest#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#iam_instance_profile_arn AwsSpotFleetRequest#iam_instance_profile_arn}
  */
  readonly iamInstanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#instance_type AwsSpotFleetRequest#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#key_name AwsSpotFleetRequest#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#monitoring AwsSpotFleetRequest#monitoring}
  */
  readonly monitoring?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#placement_group AwsSpotFleetRequest#placement_group}
  */
  readonly placementGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#placement_tenancy AwsSpotFleetRequest#placement_tenancy}
  */
  readonly placementTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#spot_price AwsSpotFleetRequest#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#subnet_id AwsSpotFleetRequest#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#tags AwsSpotFleetRequest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#user_data AwsSpotFleetRequest#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#vpc_security_group_ids AwsSpotFleetRequest#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#weighted_capacity AwsSpotFleetRequest#weighted_capacity}
  */
  readonly weightedCapacity?: string;
  /**
  * ebs_block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#ebs_block_device AwsSpotFleetRequest#ebs_block_device}
  */
  readonly ebsBlockDevice?: EbsBlockDeviceProperty[] | cdktn.IResolvable;
  /**
  * ephemeral_block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#ephemeral_block_device AwsSpotFleetRequest#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: EphemeralBlockDeviceProperty[] | cdktn.IResolvable;
  /**
  * root_block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#root_block_device AwsSpotFleetRequest#root_block_device}
  */
  readonly rootBlockDevice?: RootBlockDeviceProperty[] | cdktn.IResolvable;
}
export class LaunchSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LaunchSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ami !== undefined) {
      hasAnyValues = true;
      internalValueResult.ami = this._ami;
    }
    if (this._associatePublicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._ebsOptimized !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsOptimized = this._ebsOptimized;
    }
    if (this._iamInstanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamInstanceProfile = this._iamInstanceProfile;
    }
    if (this._iamInstanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamInstanceProfileArn = this._iamInstanceProfileArn;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._monitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring;
    }
    if (this._placementGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroup = this._placementGroup;
    }
    if (this._placementTenancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementTenancy = this._placementTenancy;
    }
    if (this._spotPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPrice = this._spotPrice;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._vpcSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSecurityGroupIds = this._vpcSecurityGroupIds;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    if (this._ebsBlockDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsBlockDevice = this._ebsBlockDevice?.internalValue;
    }
    if (this._ephemeralBlockDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralBlockDevice = this._ephemeralBlockDevice?.internalValue;
    }
    if (this._rootBlockDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootBlockDevice = this._rootBlockDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ami = undefined;
      this._associatePublicIpAddress = undefined;
      this._availabilityZone = undefined;
      this._ebsOptimized = undefined;
      this._iamInstanceProfile = undefined;
      this._iamInstanceProfileArn = undefined;
      this._instanceType = undefined;
      this._keyName = undefined;
      this._monitoring = undefined;
      this._placementGroup = undefined;
      this._placementTenancy = undefined;
      this._spotPrice = undefined;
      this._subnetId = undefined;
      this._tags = undefined;
      this._userData = undefined;
      this._vpcSecurityGroupIds = undefined;
      this._weightedCapacity = undefined;
      this._ebsBlockDevice.internalValue = undefined;
      this._ephemeralBlockDevice.internalValue = undefined;
      this._rootBlockDevice.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ami = value.ami;
      this._associatePublicIpAddress = value.associatePublicIpAddress;
      this._availabilityZone = value.availabilityZone;
      this._ebsOptimized = value.ebsOptimized;
      this._iamInstanceProfile = value.iamInstanceProfile;
      this._iamInstanceProfileArn = value.iamInstanceProfileArn;
      this._instanceType = value.instanceType;
      this._keyName = value.keyName;
      this._monitoring = value.monitoring;
      this._placementGroup = value.placementGroup;
      this._placementTenancy = value.placementTenancy;
      this._spotPrice = value.spotPrice;
      this._subnetId = value.subnetId;
      this._tags = value.tags;
      this._userData = value.userData;
      this._vpcSecurityGroupIds = value.vpcSecurityGroupIds;
      this._weightedCapacity = value.weightedCapacity;
      this._ebsBlockDevice.internalValue = value.ebsBlockDevice;
      this._ephemeralBlockDevice.internalValue = value.ephemeralBlockDevice;
      this._rootBlockDevice.internalValue = value.rootBlockDevice;
    }
  }

  // ami - computed: false, optional: false, required: true
  private _ami?: string; 
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInput() {
    return this._ami;
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktn.IResolvable; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktn.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // availability_zone - computed: true, optional: true, required: false
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

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean | cdktn.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktn.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
  }

  // iam_instance_profile_arn - computed: false, optional: true, required: false
  private _iamInstanceProfileArn?: string; 
  public get iamInstanceProfileArn() {
    return this.getStringAttribute('iam_instance_profile_arn');
  }
  public set iamInstanceProfileArn(value: string) {
    this._iamInstanceProfileArn = value;
  }
  public resetIamInstanceProfileArn() {
    this._iamInstanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileArnInput() {
    return this._iamInstanceProfileArn;
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

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean | cdktn.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktn.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // placement_group - computed: true, optional: true, required: false
  private _placementGroup?: string; 
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }
  public set placementGroup(value: string) {
    this._placementGroup = value;
  }
  public resetPlacementGroup() {
    this._placementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup;
  }

  // placement_tenancy - computed: false, optional: true, required: false
  private _placementTenancy?: string; 
  public get placementTenancy() {
    return this.getStringAttribute('placement_tenancy');
  }
  public set placementTenancy(value: string) {
    this._placementTenancy = value;
  }
  public resetPlacementTenancy() {
    this._placementTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTenancyInput() {
    return this._placementTenancy;
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string; 
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice;
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[]; 
  public get vpcSecurityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds;
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

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice = new EbsBlockDevicePropertyList(this, "ebs_block_device", true);
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public putEbsBlockDevice(value: EbsBlockDeviceProperty[] | cdktn.IResolvable) {
    this._ebsBlockDevice.internalValue = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice.internalValue;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice = new EphemeralBlockDevicePropertyList(this, "ephemeral_block_device", true);
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public putEphemeralBlockDevice(value: EphemeralBlockDeviceProperty[] | cdktn.IResolvable) {
    this._ephemeralBlockDevice.internalValue = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice.internalValue;
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice = new RootBlockDevicePropertyList(this, "root_block_device", true);
  public get rootBlockDevice() {
    return this._rootBlockDevice;
  }
  public putRootBlockDevice(value: RootBlockDeviceProperty[] | cdktn.IResolvable) {
    this._rootBlockDevice.internalValue = value;
  }
  public resetRootBlockDevice() {
    this._rootBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootBlockDeviceInput() {
    return this._rootBlockDevice.internalValue;
  }
}

export class LaunchSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : LaunchSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): LaunchSpecificationPropertyOutputReference {
    return new LaunchSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#id AwsSpotFleetRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#name AwsSpotFleetRequest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#version AwsSpotFleetRequest#version}
  */
  readonly version?: string;
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

  public set internalValue(value: LaunchTemplateSpecificationProperty | undefined) {
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

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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
export interface AcceleratorCountProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
  */
  readonly min?: number;
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
export interface NetworkBandwidthGbpsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#max AwsSpotFleetRequest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#min AwsSpotFleetRequest#min}
  */
  readonly min?: number;
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
export interface InstanceRequirementsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#accelerator_manufacturers AwsSpotFleetRequest#accelerator_manufacturers}
  */
  readonly acceleratorManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#accelerator_names AwsSpotFleetRequest#accelerator_names}
  */
  readonly acceleratorNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#accelerator_types AwsSpotFleetRequest#accelerator_types}
  */
  readonly acceleratorTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#allowed_instance_types AwsSpotFleetRequest#allowed_instance_types}
  */
  readonly allowedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#bare_metal AwsSpotFleetRequest#bare_metal}
  */
  readonly bareMetal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#burstable_performance AwsSpotFleetRequest#burstable_performance}
  */
  readonly burstablePerformance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#cpu_manufacturers AwsSpotFleetRequest#cpu_manufacturers}
  */
  readonly cpuManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#excluded_instance_types AwsSpotFleetRequest#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#instance_generations AwsSpotFleetRequest#instance_generations}
  */
  readonly instanceGenerations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#local_storage AwsSpotFleetRequest#local_storage}
  */
  readonly localStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#local_storage_types AwsSpotFleetRequest#local_storage_types}
  */
  readonly localStorageTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price AwsSpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}
  */
  readonly onDemandMaxPricePercentageOverLowestPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#require_hibernate_support AwsSpotFleetRequest#require_hibernate_support}
  */
  readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#spot_max_price_percentage_over_lowest_price AwsSpotFleetRequest#spot_max_price_percentage_over_lowest_price}
  */
  readonly spotMaxPricePercentageOverLowestPrice?: number;
  /**
  * accelerator_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#accelerator_count AwsSpotFleetRequest#accelerator_count}
  */
  readonly acceleratorCount?: AcceleratorCountProperty;
  /**
  * accelerator_total_memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#accelerator_total_memory_mib AwsSpotFleetRequest#accelerator_total_memory_mib}
  */
  readonly acceleratorTotalMemoryMib?: AcceleratorTotalMemoryMibProperty;
  /**
  * baseline_ebs_bandwidth_mbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#baseline_ebs_bandwidth_mbps AwsSpotFleetRequest#baseline_ebs_bandwidth_mbps}
  */
  readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsProperty;
  /**
  * memory_gib_per_vcpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#memory_gib_per_vcpu AwsSpotFleetRequest#memory_gib_per_vcpu}
  */
  readonly memoryGibPerVcpu?: MemoryGibPerVcpuProperty;
  /**
  * memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#memory_mib AwsSpotFleetRequest#memory_mib}
  */
  readonly memoryMib?: MemoryMibProperty;
  /**
  * network_bandwidth_gbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#network_bandwidth_gbps AwsSpotFleetRequest#network_bandwidth_gbps}
  */
  readonly networkBandwidthGbps?: NetworkBandwidthGbpsProperty;
  /**
  * network_interface_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#network_interface_count AwsSpotFleetRequest#network_interface_count}
  */
  readonly networkInterfaceCount?: NetworkInterfaceCountProperty;
  /**
  * total_local_storage_gb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#total_local_storage_gb AwsSpotFleetRequest#total_local_storage_gb}
  */
  readonly totalLocalStorageGb?: TotalLocalStorageGbProperty;
  /**
  * vcpu_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#vcpu_count AwsSpotFleetRequest#vcpu_count}
  */
  readonly vcpuCount?: VcpuCountProperty;
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

  // memory_mib - computed: false, optional: true, required: false
  private _memoryMib = new MemoryMibPropertyOutputReference(this, "memory_mib");
  public get memoryMib() {
    return this._memoryMib;
  }
  public putMemoryMib(value: MemoryMibProperty) {
    this._memoryMib.internalValue = value;
  }
  public resetMemoryMib() {
    this._memoryMib.internalValue = undefined;
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

  // vcpu_count - computed: false, optional: true, required: false
  private _vcpuCount = new VcpuCountPropertyOutputReference(this, "vcpu_count");
  public get vcpuCount() {
    return this._vcpuCount;
  }
  public putVcpuCount(value: VcpuCountProperty) {
    this._vcpuCount.internalValue = value;
  }
  public resetVcpuCount() {
    this._vcpuCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuCountInput() {
    return this._vcpuCount.internalValue;
  }
}
export interface OverridesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#availability_zone AwsSpotFleetRequest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#instance_type AwsSpotFleetRequest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#priority AwsSpotFleetRequest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#spot_price AwsSpotFleetRequest#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#subnet_id AwsSpotFleetRequest#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#weighted_capacity AwsSpotFleetRequest#weighted_capacity}
  */
  readonly weightedCapacity?: number;
  /**
  * instance_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#instance_requirements AwsSpotFleetRequest#instance_requirements}
  */
  readonly instanceRequirements?: InstanceRequirementsProperty;
}
export class OverridesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OverridesProperty | cdktn.IResolvable | undefined {
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
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._spotPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPrice = this._spotPrice;
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

  public set internalValue(value: OverridesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._instanceType = undefined;
      this._priority = undefined;
      this._spotPrice = undefined;
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
      this._priority = value.priority;
      this._spotPrice = value.spotPrice;
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

  // priority - computed: true, optional: true, required: false
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

  // spot_price - computed: true, optional: true, required: false
  private _spotPrice?: string; 
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice;
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // weighted_capacity - computed: true, optional: true, required: false
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

export class OverridesPropertyList extends cdktn.ComplexList {
  public internalValue? : OverridesProperty[] | cdktn.IResolvable

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
  public get(index: number): OverridesPropertyOutputReference {
    return new OverridesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateConfigProperty {
  /**
  * launch_template_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#launch_template_specification AwsSpotFleetRequest#launch_template_specification}
  */
  readonly launchTemplateSpecification: LaunchTemplateSpecificationProperty;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#overrides AwsSpotFleetRequest#overrides}
  */
  readonly overrides?: OverridesProperty[] | cdktn.IResolvable;
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
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateSpecification.internalValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
      this._overrides.internalValue = value.overrides;
    }
  }

  // launch_template_specification - computed: false, optional: false, required: true
  private _launchTemplateSpecification = new LaunchTemplateSpecificationPropertyOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }
  public putLaunchTemplateSpecification(value: LaunchTemplateSpecificationProperty) {
    this._launchTemplateSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateSpecificationInput() {
    return this._launchTemplateSpecification.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new OverridesPropertyList(this, "overrides", true);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: OverridesProperty[] | cdktn.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
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
export interface CapacityRebalanceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#replacement_strategy AwsSpotFleetRequest#replacement_strategy}
  */
  readonly replacementStrategy?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityRebalanceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replacementStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replacementStrategy = value.replacementStrategy;
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
}
export interface SpotMaintenanceStrategiesProperty {
  /**
  * capacity_rebalance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#capacity_rebalance AwsSpotFleetRequest#capacity_rebalance}
  */
  readonly capacityRebalance?: CapacityRebalanceProperty;
}
export class SpotMaintenanceStrategiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpotMaintenanceStrategiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityRebalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityRebalance = this._capacityRebalance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpotMaintenanceStrategiesProperty | undefined) {
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
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#create AwsSpotFleetRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#delete AwsSpotFleetRequest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/spot_fleet_request#update AwsSpotFleetRequest#update}
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
