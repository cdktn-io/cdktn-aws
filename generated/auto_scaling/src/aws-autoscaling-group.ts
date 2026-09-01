// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAutoscalingGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#availability_zones AwsAutoscalingGroup#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#capacity_rebalance AwsAutoscalingGroup#capacity_rebalance}
  */
  readonly capacityRebalance?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#context AwsAutoscalingGroup#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#default_cooldown AwsAutoscalingGroup#default_cooldown}
  */
  readonly defaultCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#default_instance_warmup AwsAutoscalingGroup#default_instance_warmup}
  */
  readonly defaultInstanceWarmup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#desired_capacity AwsAutoscalingGroup#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#desired_capacity_type AwsAutoscalingGroup#desired_capacity_type}
  */
  readonly desiredCapacityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#enabled_metrics AwsAutoscalingGroup#enabled_metrics}
  */
  readonly enabledMetrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#force_delete AwsAutoscalingGroup#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#force_delete_warm_pool AwsAutoscalingGroup#force_delete_warm_pool}
  */
  readonly forceDeleteWarmPool?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#health_check_grace_period AwsAutoscalingGroup#health_check_grace_period}
  */
  readonly healthCheckGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#health_check_type AwsAutoscalingGroup#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#id AwsAutoscalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#ignore_failed_scaling_activities AwsAutoscalingGroup#ignore_failed_scaling_activities}
  */
  readonly ignoreFailedScalingActivities?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_configuration AwsAutoscalingGroup#launch_configuration}
  */
  readonly launchConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#load_balancers AwsAutoscalingGroup#load_balancers}
  */
  readonly loadBalancers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max_instance_lifetime AwsAutoscalingGroup#max_instance_lifetime}
  */
  readonly maxInstanceLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max_size AwsAutoscalingGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#metrics_granularity AwsAutoscalingGroup#metrics_granularity}
  */
  readonly metricsGranularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min_elb_capacity AwsAutoscalingGroup#min_elb_capacity}
  */
  readonly minElbCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min_size AwsAutoscalingGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#name AwsAutoscalingGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#name_prefix AwsAutoscalingGroup#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#placement_group AwsAutoscalingGroup#placement_group}
  */
  readonly placementGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#protect_from_scale_in AwsAutoscalingGroup#protect_from_scale_in}
  */
  readonly protectFromScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#region AwsAutoscalingGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#service_linked_role_arn AwsAutoscalingGroup#service_linked_role_arn}
  */
  readonly serviceLinkedRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#suspended_processes AwsAutoscalingGroup#suspended_processes}
  */
  readonly suspendedProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#target_group_arns AwsAutoscalingGroup#target_group_arns}
  */
  readonly targetGroupArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#termination_policies AwsAutoscalingGroup#termination_policies}
  */
  readonly terminationPolicies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#vpc_zone_identifier AwsAutoscalingGroup#vpc_zone_identifier}
  */
  readonly vpcZoneIdentifier?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#wait_for_capacity_timeout AwsAutoscalingGroup#wait_for_capacity_timeout}
  */
  readonly waitForCapacityTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#wait_for_elb_capacity AwsAutoscalingGroup#wait_for_elb_capacity}
  */
  readonly waitForElbCapacity?: number;
  /**
  * availability_zone_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#availability_zone_distribution AwsAutoscalingGroup#availability_zone_distribution}
  */
  readonly availabilityZoneDistribution?: AwsAutoscalingGroup.AvailabilityZoneDistributionProperty;
  /**
  * capacity_reservation_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#capacity_reservation_specification AwsAutoscalingGroup#capacity_reservation_specification}
  */
  readonly capacityReservationSpecification?: AwsAutoscalingGroup.CapacityReservationSpecificationProperty;
  /**
  * initial_lifecycle_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#initial_lifecycle_hook AwsAutoscalingGroup#initial_lifecycle_hook}
  */
  readonly initialLifecycleHook?: AwsAutoscalingGroup.InitialLifecycleHookProperty[] | cdktn.IResolvable;
  /**
  * instance_lifecycle_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instance_lifecycle_policy AwsAutoscalingGroup#instance_lifecycle_policy}
  */
  readonly instanceLifecyclePolicy?: AwsAutoscalingGroup.InstanceLifecyclePolicyProperty;
  /**
  * instance_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instance_maintenance_policy AwsAutoscalingGroup#instance_maintenance_policy}
  */
  readonly instanceMaintenancePolicy?: AwsAutoscalingGroup.InstanceMaintenancePolicyProperty;
  /**
  * instance_refresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instance_refresh AwsAutoscalingGroup#instance_refresh}
  */
  readonly instanceRefresh?: AwsAutoscalingGroup.InstanceRefreshProperty;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_template AwsAutoscalingGroup#launch_template}
  */
  readonly launchTemplate?: AwsAutoscalingGroup.LaunchTemplateProperty;
  /**
  * mixed_instances_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#mixed_instances_policy AwsAutoscalingGroup#mixed_instances_policy}
  */
  readonly mixedInstancesPolicy?: AwsAutoscalingGroup.MixedInstancesPolicyProperty;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#tag AwsAutoscalingGroup#tag}
  */
  readonly tag?: AwsAutoscalingGroup.TagProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#timeouts AwsAutoscalingGroup#timeouts}
  */
  readonly timeouts?: AwsAutoscalingGroup.TimeoutsProperty;
  /**
  * traffic_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#traffic_source AwsAutoscalingGroup#traffic_source}
  */
  readonly trafficSource?: AwsAutoscalingGroup.TrafficSourceProperty[] | cdktn.IResolvable;
  /**
  * warm_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#warm_pool AwsAutoscalingGroup#warm_pool}
  */
  readonly warmPool?: AwsAutoscalingGroup.WarmPoolProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group aws_autoscaling_group}
*/
export class AwsAutoscalingGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_autoscaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAutoscalingGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAutoscalingGroup to import
  * @param importFromId The id of the existing AwsAutoscalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAutoscalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_autoscaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group aws_autoscaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAutoscalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAutoscalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_group',
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
    this._availabilityZones = config.availabilityZones;
    this._capacityRebalance = config.capacityRebalance;
    this._context = config.context;
    this._defaultCooldown = config.defaultCooldown;
    this._defaultInstanceWarmup = config.defaultInstanceWarmup;
    this._desiredCapacity = config.desiredCapacity;
    this._desiredCapacityType = config.desiredCapacityType;
    this._enabledMetrics = config.enabledMetrics;
    this._forceDelete = config.forceDelete;
    this._forceDeleteWarmPool = config.forceDeleteWarmPool;
    this._healthCheckGracePeriod = config.healthCheckGracePeriod;
    this._healthCheckType = config.healthCheckType;
    this._id = config.id;
    this._ignoreFailedScalingActivities = config.ignoreFailedScalingActivities;
    this._launchConfiguration = config.launchConfiguration;
    this._loadBalancers = config.loadBalancers;
    this._maxInstanceLifetime = config.maxInstanceLifetime;
    this._maxSize = config.maxSize;
    this._metricsGranularity = config.metricsGranularity;
    this._minElbCapacity = config.minElbCapacity;
    this._minSize = config.minSize;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._placementGroup = config.placementGroup;
    this._protectFromScaleIn = config.protectFromScaleIn;
    this._region = config.region;
    this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
    this._suspendedProcesses = config.suspendedProcesses;
    this._targetGroupArns = config.targetGroupArns;
    this._terminationPolicies = config.terminationPolicies;
    this._vpcZoneIdentifier = config.vpcZoneIdentifier;
    this._waitForCapacityTimeout = config.waitForCapacityTimeout;
    this._waitForElbCapacity = config.waitForElbCapacity;
    this._availabilityZoneDistribution.internalValue = config.availabilityZoneDistribution;
    this._capacityReservationSpecification.internalValue = config.capacityReservationSpecification;
    this._initialLifecycleHook.internalValue = config.initialLifecycleHook;
    this._instanceLifecyclePolicy.internalValue = config.instanceLifecyclePolicy;
    this._instanceMaintenancePolicy.internalValue = config.instanceMaintenancePolicy;
    this._instanceRefresh.internalValue = config.instanceRefresh;
    this._launchTemplate.internalValue = config.launchTemplate;
    this._mixedInstancesPolicy.internalValue = config.mixedInstancesPolicy;
    this._tag.internalValue = config.tag;
    this._timeouts.internalValue = config.timeouts;
    this._trafficSource.internalValue = config.trafficSource;
    this._warmPool.internalValue = config.warmPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktn.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // capacity_rebalance - computed: false, optional: true, required: false
  private _capacityRebalance?: boolean | cdktn.IResolvable; 
  public get capacityRebalance() {
    return this.getBooleanAttribute('capacity_rebalance');
  }
  public set capacityRebalance(value: boolean | cdktn.IResolvable) {
    this._capacityRebalance = value;
  }
  public resetCapacityRebalance() {
    this._capacityRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityRebalanceInput() {
    return this._capacityRebalance;
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

  // default_cooldown - computed: true, optional: true, required: false
  private _defaultCooldown?: number; 
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown;
  }

  // default_instance_warmup - computed: false, optional: true, required: false
  private _defaultInstanceWarmup?: number; 
  public get defaultInstanceWarmup() {
    return this.getNumberAttribute('default_instance_warmup');
  }
  public set defaultInstanceWarmup(value: number) {
    this._defaultInstanceWarmup = value;
  }
  public resetDefaultInstanceWarmup() {
    this._defaultInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInstanceWarmupInput() {
    return this._defaultInstanceWarmup;
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // desired_capacity_type - computed: false, optional: true, required: false
  private _desiredCapacityType?: string; 
  public get desiredCapacityType() {
    return this.getStringAttribute('desired_capacity_type');
  }
  public set desiredCapacityType(value: string) {
    this._desiredCapacityType = value;
  }
  public resetDesiredCapacityType() {
    this._desiredCapacityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityTypeInput() {
    return this._desiredCapacityType;
  }

  // enabled_metrics - computed: false, optional: true, required: false
  private _enabledMetrics?: string[]; 
  public get enabledMetrics() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_metrics'));
  }
  public set enabledMetrics(value: string[]) {
    this._enabledMetrics = value;
  }
  public resetEnabledMetrics() {
    this._enabledMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledMetricsInput() {
    return this._enabledMetrics;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktn.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktn.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // force_delete_warm_pool - computed: false, optional: true, required: false
  private _forceDeleteWarmPool?: boolean | cdktn.IResolvable; 
  public get forceDeleteWarmPool() {
    return this.getBooleanAttribute('force_delete_warm_pool');
  }
  public set forceDeleteWarmPool(value: boolean | cdktn.IResolvable) {
    this._forceDeleteWarmPool = value;
  }
  public resetForceDeleteWarmPool() {
    this._forceDeleteWarmPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteWarmPoolInput() {
    return this._forceDeleteWarmPool;
  }

  // health_check_grace_period - computed: false, optional: true, required: false
  private _healthCheckGracePeriod?: number; 
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }
  public set healthCheckGracePeriod(value: number) {
    this._healthCheckGracePeriod = value;
  }
  public resetHealthCheckGracePeriod() {
    this._healthCheckGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodInput() {
    return this._healthCheckGracePeriod;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
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

  // ignore_failed_scaling_activities - computed: false, optional: true, required: false
  private _ignoreFailedScalingActivities?: boolean | cdktn.IResolvable; 
  public get ignoreFailedScalingActivities() {
    return this.getBooleanAttribute('ignore_failed_scaling_activities');
  }
  public set ignoreFailedScalingActivities(value: boolean | cdktn.IResolvable) {
    this._ignoreFailedScalingActivities = value;
  }
  public resetIgnoreFailedScalingActivities() {
    this._ignoreFailedScalingActivities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFailedScalingActivitiesInput() {
    return this._ignoreFailedScalingActivities;
  }

  // launch_configuration - computed: false, optional: true, required: false
  private _launchConfiguration?: string; 
  public get launchConfiguration() {
    return this.getStringAttribute('launch_configuration');
  }
  public set launchConfiguration(value: string) {
    this._launchConfiguration = value;
  }
  public resetLaunchConfiguration() {
    this._launchConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchConfigurationInput() {
    return this._launchConfiguration;
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

  // max_instance_lifetime - computed: false, optional: true, required: false
  private _maxInstanceLifetime?: number; 
  public get maxInstanceLifetime() {
    return this.getNumberAttribute('max_instance_lifetime');
  }
  public set maxInstanceLifetime(value: number) {
    this._maxInstanceLifetime = value;
  }
  public resetMaxInstanceLifetime() {
    this._maxInstanceLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceLifetimeInput() {
    return this._maxInstanceLifetime;
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

  // metrics_granularity - computed: false, optional: true, required: false
  private _metricsGranularity?: string; 
  public get metricsGranularity() {
    return this.getStringAttribute('metrics_granularity');
  }
  public set metricsGranularity(value: string) {
    this._metricsGranularity = value;
  }
  public resetMetricsGranularity() {
    this._metricsGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsGranularityInput() {
    return this._metricsGranularity;
  }

  // min_elb_capacity - computed: false, optional: true, required: false
  private _minElbCapacity?: number; 
  public get minElbCapacity() {
    return this.getNumberAttribute('min_elb_capacity');
  }
  public set minElbCapacity(value: number) {
    this._minElbCapacity = value;
  }
  public resetMinElbCapacity() {
    this._minElbCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minElbCapacityInput() {
    return this._minElbCapacity;
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // placement_group - computed: false, optional: true, required: false
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

  // predicted_capacity - computed: true, optional: false, required: false
  public get predictedCapacity() {
    return this.getNumberAttribute('predicted_capacity');
  }

  // protect_from_scale_in - computed: false, optional: true, required: false
  private _protectFromScaleIn?: boolean | cdktn.IResolvable; 
  public get protectFromScaleIn() {
    return this.getBooleanAttribute('protect_from_scale_in');
  }
  public set protectFromScaleIn(value: boolean | cdktn.IResolvable) {
    this._protectFromScaleIn = value;
  }
  public resetProtectFromScaleIn() {
    this._protectFromScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectFromScaleInInput() {
    return this._protectFromScaleIn;
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

  // service_linked_role_arn - computed: true, optional: true, required: false
  private _serviceLinkedRoleArn?: string; 
  public get serviceLinkedRoleArn() {
    return this.getStringAttribute('service_linked_role_arn');
  }
  public set serviceLinkedRoleArn(value: string) {
    this._serviceLinkedRoleArn = value;
  }
  public resetServiceLinkedRoleArn() {
    this._serviceLinkedRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLinkedRoleArnInput() {
    return this._serviceLinkedRoleArn;
  }

  // suspended_processes - computed: false, optional: true, required: false
  private _suspendedProcesses?: string[]; 
  public get suspendedProcesses() {
    return cdktn.Fn.tolist(this.getListAttribute('suspended_processes'));
  }
  public set suspendedProcesses(value: string[]) {
    this._suspendedProcesses = value;
  }
  public resetSuspendedProcesses() {
    this._suspendedProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedProcessesInput() {
    return this._suspendedProcesses;
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

  // termination_policies - computed: false, optional: true, required: false
  private _terminationPolicies?: string[]; 
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }
  public set terminationPolicies(value: string[]) {
    this._terminationPolicies = value;
  }
  public resetTerminationPolicies() {
    this._terminationPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPoliciesInput() {
    return this._terminationPolicies;
  }

  // vpc_zone_identifier - computed: true, optional: true, required: false
  private _vpcZoneIdentifier?: string[]; 
  public get vpcZoneIdentifier() {
    return cdktn.Fn.tolist(this.getListAttribute('vpc_zone_identifier'));
  }
  public set vpcZoneIdentifier(value: string[]) {
    this._vpcZoneIdentifier = value;
  }
  public resetVpcZoneIdentifier() {
    this._vpcZoneIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcZoneIdentifierInput() {
    return this._vpcZoneIdentifier;
  }

  // wait_for_capacity_timeout - computed: false, optional: true, required: false
  private _waitForCapacityTimeout?: string; 
  public get waitForCapacityTimeout() {
    return this.getStringAttribute('wait_for_capacity_timeout');
  }
  public set waitForCapacityTimeout(value: string) {
    this._waitForCapacityTimeout = value;
  }
  public resetWaitForCapacityTimeout() {
    this._waitForCapacityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityTimeoutInput() {
    return this._waitForCapacityTimeout;
  }

  // wait_for_elb_capacity - computed: false, optional: true, required: false
  private _waitForElbCapacity?: number; 
  public get waitForElbCapacity() {
    return this.getNumberAttribute('wait_for_elb_capacity');
  }
  public set waitForElbCapacity(value: number) {
    this._waitForElbCapacity = value;
  }
  public resetWaitForElbCapacity() {
    this._waitForElbCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForElbCapacityInput() {
    return this._waitForElbCapacity;
  }

  // warm_pool_size - computed: true, optional: false, required: false
  public get warmPoolSize() {
    return this.getNumberAttribute('warm_pool_size');
  }

  // availability_zone_distribution - computed: false, optional: true, required: false
  private _availabilityZoneDistribution = new AwsAutoscalingGroup.AvailabilityZoneDistributionPropertyOutputReference(this, "availability_zone_distribution");
  public get availabilityZoneDistribution() {
    return this._availabilityZoneDistribution;
  }
  public putAvailabilityZoneDistribution(value: AwsAutoscalingGroup.AvailabilityZoneDistributionProperty) {
    this._availabilityZoneDistribution.internalValue = value;
  }
  public resetAvailabilityZoneDistribution() {
    this._availabilityZoneDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneDistributionInput() {
    return this._availabilityZoneDistribution.internalValue;
  }

  // capacity_reservation_specification - computed: false, optional: true, required: false
  private _capacityReservationSpecification = new AwsAutoscalingGroup.CapacityReservationSpecificationPropertyOutputReference(this, "capacity_reservation_specification");
  public get capacityReservationSpecification() {
    return this._capacityReservationSpecification;
  }
  public putCapacityReservationSpecification(value: AwsAutoscalingGroup.CapacityReservationSpecificationProperty) {
    this._capacityReservationSpecification.internalValue = value;
  }
  public resetCapacityReservationSpecification() {
    this._capacityReservationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationSpecificationInput() {
    return this._capacityReservationSpecification.internalValue;
  }

  // initial_lifecycle_hook - computed: false, optional: true, required: false
  private _initialLifecycleHook = new AwsAutoscalingGroup.InitialLifecycleHookPropertyList(this, "initial_lifecycle_hook", true);
  public get initialLifecycleHook() {
    return this._initialLifecycleHook;
  }
  public putInitialLifecycleHook(value: AwsAutoscalingGroup.InitialLifecycleHookProperty[] | cdktn.IResolvable) {
    this._initialLifecycleHook.internalValue = value;
  }
  public resetInitialLifecycleHook() {
    this._initialLifecycleHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLifecycleHookInput() {
    return this._initialLifecycleHook.internalValue;
  }

  // instance_lifecycle_policy - computed: false, optional: true, required: false
  private _instanceLifecyclePolicy = new AwsAutoscalingGroup.InstanceLifecyclePolicyPropertyOutputReference(this, "instance_lifecycle_policy");
  public get instanceLifecyclePolicy() {
    return this._instanceLifecyclePolicy;
  }
  public putInstanceLifecyclePolicy(value: AwsAutoscalingGroup.InstanceLifecyclePolicyProperty) {
    this._instanceLifecyclePolicy.internalValue = value;
  }
  public resetInstanceLifecyclePolicy() {
    this._instanceLifecyclePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceLifecyclePolicyInput() {
    return this._instanceLifecyclePolicy.internalValue;
  }

  // instance_maintenance_policy - computed: false, optional: true, required: false
  private _instanceMaintenancePolicy = new AwsAutoscalingGroup.InstanceMaintenancePolicyPropertyOutputReference(this, "instance_maintenance_policy");
  public get instanceMaintenancePolicy() {
    return this._instanceMaintenancePolicy;
  }
  public putInstanceMaintenancePolicy(value: AwsAutoscalingGroup.InstanceMaintenancePolicyProperty) {
    this._instanceMaintenancePolicy.internalValue = value;
  }
  public resetInstanceMaintenancePolicy() {
    this._instanceMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintenancePolicyInput() {
    return this._instanceMaintenancePolicy.internalValue;
  }

  // instance_refresh - computed: false, optional: true, required: false
  private _instanceRefresh = new AwsAutoscalingGroup.InstanceRefreshPropertyOutputReference(this, "instance_refresh");
  public get instanceRefresh() {
    return this._instanceRefresh;
  }
  public putInstanceRefresh(value: AwsAutoscalingGroup.InstanceRefreshProperty) {
    this._instanceRefresh.internalValue = value;
  }
  public resetInstanceRefresh() {
    this._instanceRefresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRefreshInput() {
    return this._instanceRefresh.internalValue;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new AwsAutoscalingGroup.LaunchTemplatePropertyOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: AwsAutoscalingGroup.LaunchTemplateProperty) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // mixed_instances_policy - computed: false, optional: true, required: false
  private _mixedInstancesPolicy = new AwsAutoscalingGroup.MixedInstancesPolicyPropertyOutputReference(this, "mixed_instances_policy");
  public get mixedInstancesPolicy() {
    return this._mixedInstancesPolicy;
  }
  public putMixedInstancesPolicy(value: AwsAutoscalingGroup.MixedInstancesPolicyProperty) {
    this._mixedInstancesPolicy.internalValue = value;
  }
  public resetMixedInstancesPolicy() {
    this._mixedInstancesPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedInstancesPolicyInput() {
    return this._mixedInstancesPolicy.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new AwsAutoscalingGroup.TagPropertyList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: AwsAutoscalingGroup.TagProperty[] | cdktn.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsAutoscalingGroup.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsAutoscalingGroup.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_source - computed: false, optional: true, required: false
  private _trafficSource = new AwsAutoscalingGroup.TrafficSourcePropertyList(this, "traffic_source", true);
  public get trafficSource() {
    return this._trafficSource;
  }
  public putTrafficSource(value: AwsAutoscalingGroup.TrafficSourceProperty[] | cdktn.IResolvable) {
    this._trafficSource.internalValue = value;
  }
  public resetTrafficSource() {
    this._trafficSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSourceInput() {
    return this._trafficSource.internalValue;
  }

  // warm_pool - computed: false, optional: true, required: false
  private _warmPool = new AwsAutoscalingGroup.WarmPoolPropertyOutputReference(this, "warm_pool");
  public get warmPool() {
    return this._warmPool;
  }
  public putWarmPool(value: AwsAutoscalingGroup.WarmPoolProperty) {
    this._warmPool.internalValue = value;
  }
  public resetWarmPool() {
    this._warmPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmPoolInput() {
    return this._warmPool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
      capacity_rebalance: cdktn.booleanToTerraform(this._capacityRebalance),
      context: cdktn.stringToTerraform(this._context),
      default_cooldown: cdktn.numberToTerraform(this._defaultCooldown),
      default_instance_warmup: cdktn.numberToTerraform(this._defaultInstanceWarmup),
      desired_capacity: cdktn.numberToTerraform(this._desiredCapacity),
      desired_capacity_type: cdktn.stringToTerraform(this._desiredCapacityType),
      enabled_metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enabledMetrics),
      force_delete: cdktn.booleanToTerraform(this._forceDelete),
      force_delete_warm_pool: cdktn.booleanToTerraform(this._forceDeleteWarmPool),
      health_check_grace_period: cdktn.numberToTerraform(this._healthCheckGracePeriod),
      health_check_type: cdktn.stringToTerraform(this._healthCheckType),
      id: cdktn.stringToTerraform(this._id),
      ignore_failed_scaling_activities: cdktn.booleanToTerraform(this._ignoreFailedScalingActivities),
      launch_configuration: cdktn.stringToTerraform(this._launchConfiguration),
      load_balancers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._loadBalancers),
      max_instance_lifetime: cdktn.numberToTerraform(this._maxInstanceLifetime),
      max_size: cdktn.numberToTerraform(this._maxSize),
      metrics_granularity: cdktn.stringToTerraform(this._metricsGranularity),
      min_elb_capacity: cdktn.numberToTerraform(this._minElbCapacity),
      min_size: cdktn.numberToTerraform(this._minSize),
      name: cdktn.stringToTerraform(this._name),
      name_prefix: cdktn.stringToTerraform(this._namePrefix),
      placement_group: cdktn.stringToTerraform(this._placementGroup),
      protect_from_scale_in: cdktn.booleanToTerraform(this._protectFromScaleIn),
      region: cdktn.stringToTerraform(this._region),
      service_linked_role_arn: cdktn.stringToTerraform(this._serviceLinkedRoleArn),
      suspended_processes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._suspendedProcesses),
      target_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetGroupArns),
      termination_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._terminationPolicies),
      vpc_zone_identifier: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcZoneIdentifier),
      wait_for_capacity_timeout: cdktn.stringToTerraform(this._waitForCapacityTimeout),
      wait_for_elb_capacity: cdktn.numberToTerraform(this._waitForElbCapacity),
      availability_zone_distribution: awsAutoscalingGroupAvailabilityZoneDistributionPropertyToTerraform(this._availabilityZoneDistribution.internalValue),
      capacity_reservation_specification: awsAutoscalingGroupCapacityReservationSpecificationPropertyToTerraform(this._capacityReservationSpecification.internalValue),
      initial_lifecycle_hook: cdktn.listMapper(awsAutoscalingGroupInitialLifecycleHookPropertyToTerraform, true)(this._initialLifecycleHook.internalValue),
      instance_lifecycle_policy: awsAutoscalingGroupInstanceLifecyclePolicyPropertyToTerraform(this._instanceLifecyclePolicy.internalValue),
      instance_maintenance_policy: awsAutoscalingGroupInstanceMaintenancePolicyPropertyToTerraform(this._instanceMaintenancePolicy.internalValue),
      instance_refresh: awsAutoscalingGroupInstanceRefreshPropertyToTerraform(this._instanceRefresh.internalValue),
      launch_template: awsAutoscalingGroupLaunchTemplatePropertyToTerraform(this._launchTemplate.internalValue),
      mixed_instances_policy: awsAutoscalingGroupMixedInstancesPolicyPropertyToTerraform(this._mixedInstancesPolicy.internalValue),
      tag: cdktn.listMapper(awsAutoscalingGroupTagPropertyToTerraform, true)(this._tag.internalValue),
      timeouts: awsAutoscalingGroupTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      traffic_source: cdktn.listMapper(awsAutoscalingGroupTrafficSourcePropertyToTerraform, true)(this._trafficSource.internalValue),
      warm_pool: awsAutoscalingGroupWarmPoolPropertyToTerraform(this._warmPool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      capacity_rebalance: {
        value: cdktn.booleanToHclTerraform(this._capacityRebalance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context: {
        value: cdktn.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cooldown: {
        value: cdktn.numberToHclTerraform(this._defaultCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_instance_warmup: {
        value: cdktn.numberToHclTerraform(this._defaultInstanceWarmup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_capacity: {
        value: cdktn.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_capacity_type: {
        value: cdktn.stringToHclTerraform(this._desiredCapacityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_metrics: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enabledMetrics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      force_delete: {
        value: cdktn.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete_warm_pool: {
        value: cdktn.booleanToHclTerraform(this._forceDeleteWarmPool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_grace_period: {
        value: cdktn.numberToHclTerraform(this._healthCheckGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_type: {
        value: cdktn.stringToHclTerraform(this._healthCheckType),
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
      ignore_failed_scaling_activities: {
        value: cdktn.booleanToHclTerraform(this._ignoreFailedScalingActivities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      launch_configuration: {
        value: cdktn.stringToHclTerraform(this._launchConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._loadBalancers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_instance_lifetime: {
        value: cdktn.numberToHclTerraform(this._maxInstanceLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_size: {
        value: cdktn.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_granularity: {
        value: cdktn.stringToHclTerraform(this._metricsGranularity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_elb_capacity: {
        value: cdktn.numberToHclTerraform(this._minElbCapacity),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktn.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_group: {
        value: cdktn.stringToHclTerraform(this._placementGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_from_scale_in: {
        value: cdktn.booleanToHclTerraform(this._protectFromScaleIn),
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
      service_linked_role_arn: {
        value: cdktn.stringToHclTerraform(this._serviceLinkedRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspended_processes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._suspendedProcesses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_group_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetGroupArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      termination_policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._terminationPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_zone_identifier: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcZoneIdentifier),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wait_for_capacity_timeout: {
        value: cdktn.stringToHclTerraform(this._waitForCapacityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_elb_capacity: {
        value: cdktn.numberToHclTerraform(this._waitForElbCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone_distribution: {
        value: awsAutoscalingGroupAvailabilityZoneDistributionPropertyToHclTerraform(this._availabilityZoneDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutoscalingGroup.AvailabilityZoneDistributionPropertyList",
      },
      capacity_reservation_specification: {
        value: awsAutoscalingGroupCapacityReservationSpecificationPropertyToHclTerraform(this._capacityReservationSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutoscalingGroup.CapacityReservationSpecificationPropertyList",
      },
      initial_lifecycle_hook: {
        value: cdktn.listMapperHcl(awsAutoscalingGroupInitialLifecycleHookPropertyToHclTerraform, true)(this._initialLifecycleHook.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsAutoscalingGroup.InitialLifecycleHookPropertyList",
      },
      instance_lifecycle_policy: {
        value: awsAutoscalingGroupInstanceLifecyclePolicyPropertyToHclTerraform(this._instanceLifecyclePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutoscalingGroup.InstanceLifecyclePolicyPropertyList",
      },
      instance_maintenance_policy: {
        value: awsAutoscalingGroupInstanceMaintenancePolicyPropertyToHclTerraform(this._instanceMaintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutoscalingGroup.InstanceMaintenancePolicyPropertyList",
      },
      instance_refresh: {
        value: awsAutoscalingGroupInstanceRefreshPropertyToHclTerraform(this._instanceRefresh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutoscalingGroup.InstanceRefreshPropertyList",
      },
      launch_template: {
        value: awsAutoscalingGroupLaunchTemplatePropertyToHclTerraform(this._launchTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutoscalingGroup.LaunchTemplatePropertyList",
      },
      mixed_instances_policy: {
        value: awsAutoscalingGroupMixedInstancesPolicyPropertyToHclTerraform(this._mixedInstancesPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutoscalingGroup.MixedInstancesPolicyPropertyList",
      },
      tag: {
        value: cdktn.listMapperHcl(awsAutoscalingGroupTagPropertyToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsAutoscalingGroup.TagPropertyList",
      },
      timeouts: {
        value: awsAutoscalingGroupTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsAutoscalingGroup.TimeoutsProperty",
      },
      traffic_source: {
        value: cdktn.listMapperHcl(awsAutoscalingGroupTrafficSourcePropertyToHclTerraform, true)(this._trafficSource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsAutoscalingGroup.TrafficSourcePropertyList",
      },
      warm_pool: {
        value: awsAutoscalingGroupWarmPoolPropertyToHclTerraform(this._warmPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAutoscalingGroup.WarmPoolPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAutoscalingGroupAvailabilityZoneDistributionPropertyToTerraform(struct?: AwsAutoscalingGroup.AvailabilityZoneDistributionPropertyOutputReference | AwsAutoscalingGroup.AvailabilityZoneDistributionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_distribution_strategy: cdktn.stringToTerraform(struct!.capacityDistributionStrategy),
  }
}


export function awsAutoscalingGroupAvailabilityZoneDistributionPropertyToHclTerraform(struct?: AwsAutoscalingGroup.AvailabilityZoneDistributionPropertyOutputReference | AwsAutoscalingGroup.AvailabilityZoneDistributionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_distribution_strategy: {
      value: cdktn.stringToHclTerraform(struct!.capacityDistributionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupCapacityReservationTargetPropertyToTerraform(struct?: AwsAutoscalingGroup.CapacityReservationTargetPropertyOutputReference | AwsAutoscalingGroup.CapacityReservationTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_reservation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capacityReservationIds),
    capacity_reservation_resource_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capacityReservationResourceGroupArns),
  }
}


export function awsAutoscalingGroupCapacityReservationTargetPropertyToHclTerraform(struct?: AwsAutoscalingGroup.CapacityReservationTargetPropertyOutputReference | AwsAutoscalingGroup.CapacityReservationTargetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_reservation_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.capacityReservationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    capacity_reservation_resource_group_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.capacityReservationResourceGroupArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupCapacityReservationSpecificationPropertyToTerraform(struct?: AwsAutoscalingGroup.CapacityReservationSpecificationPropertyOutputReference | AwsAutoscalingGroup.CapacityReservationSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_reservation_preference: cdktn.stringToTerraform(struct!.capacityReservationPreference),
    capacity_reservation_target: awsAutoscalingGroupCapacityReservationTargetPropertyToTerraform(struct!.capacityReservationTarget),
  }
}


export function awsAutoscalingGroupCapacityReservationSpecificationPropertyToHclTerraform(struct?: AwsAutoscalingGroup.CapacityReservationSpecificationPropertyOutputReference | AwsAutoscalingGroup.CapacityReservationSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_reservation_preference: {
      value: cdktn.stringToHclTerraform(struct!.capacityReservationPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_target: {
      value: awsAutoscalingGroupCapacityReservationTargetPropertyToHclTerraform(struct!.capacityReservationTarget),
      isBlock: true,
      type: "list",
      storageClassType: "CapacityReservationTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupInitialLifecycleHookPropertyToTerraform(struct?: AwsAutoscalingGroup.InitialLifecycleHookProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_result: cdktn.stringToTerraform(struct!.defaultResult),
    heartbeat_timeout: cdktn.numberToTerraform(struct!.heartbeatTimeout),
    lifecycle_transition: cdktn.stringToTerraform(struct!.lifecycleTransition),
    name: cdktn.stringToTerraform(struct!.name),
    notification_metadata: cdktn.stringToTerraform(struct!.notificationMetadata),
    notification_target_arn: cdktn.stringToTerraform(struct!.notificationTargetArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsAutoscalingGroupInitialLifecycleHookPropertyToHclTerraform(struct?: AwsAutoscalingGroup.InitialLifecycleHookProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_result: {
      value: cdktn.stringToHclTerraform(struct!.defaultResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heartbeat_timeout: {
      value: cdktn.numberToHclTerraform(struct!.heartbeatTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_transition: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleTransition),
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
    notification_metadata: {
      value: cdktn.stringToHclTerraform(struct!.notificationMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_target_arn: {
      value: cdktn.stringToHclTerraform(struct!.notificationTargetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupRetentionTriggersPropertyToTerraform(struct?: AwsAutoscalingGroup.RetentionTriggersPropertyOutputReference | AwsAutoscalingGroup.RetentionTriggersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    terminate_hook_abandon: cdktn.stringToTerraform(struct!.terminateHookAbandon),
  }
}


export function awsAutoscalingGroupRetentionTriggersPropertyToHclTerraform(struct?: AwsAutoscalingGroup.RetentionTriggersPropertyOutputReference | AwsAutoscalingGroup.RetentionTriggersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    terminate_hook_abandon: {
      value: cdktn.stringToHclTerraform(struct!.terminateHookAbandon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupInstanceLifecyclePolicyPropertyToTerraform(struct?: AwsAutoscalingGroup.InstanceLifecyclePolicyPropertyOutputReference | AwsAutoscalingGroup.InstanceLifecyclePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retention_triggers: awsAutoscalingGroupRetentionTriggersPropertyToTerraform(struct!.retentionTriggers),
  }
}


export function awsAutoscalingGroupInstanceLifecyclePolicyPropertyToHclTerraform(struct?: AwsAutoscalingGroup.InstanceLifecyclePolicyPropertyOutputReference | AwsAutoscalingGroup.InstanceLifecyclePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retention_triggers: {
      value: awsAutoscalingGroupRetentionTriggersPropertyToHclTerraform(struct!.retentionTriggers),
      isBlock: true,
      type: "list",
      storageClassType: "RetentionTriggersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupInstanceMaintenancePolicyPropertyToTerraform(struct?: AwsAutoscalingGroup.InstanceMaintenancePolicyPropertyOutputReference | AwsAutoscalingGroup.InstanceMaintenancePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_healthy_percentage: cdktn.numberToTerraform(struct!.maxHealthyPercentage),
    min_healthy_percentage: cdktn.numberToTerraform(struct!.minHealthyPercentage),
  }
}


export function awsAutoscalingGroupInstanceMaintenancePolicyPropertyToHclTerraform(struct?: AwsAutoscalingGroup.InstanceMaintenancePolicyPropertyOutputReference | AwsAutoscalingGroup.InstanceMaintenancePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_healthy_percentage: {
      value: cdktn.numberToHclTerraform(struct!.maxHealthyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_healthy_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minHealthyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupAlarmSpecificationPropertyToTerraform(struct?: AwsAutoscalingGroup.AlarmSpecificationPropertyOutputReference | AwsAutoscalingGroup.AlarmSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alarms),
  }
}


export function awsAutoscalingGroupAlarmSpecificationPropertyToHclTerraform(struct?: AwsAutoscalingGroup.AlarmSpecificationPropertyOutputReference | AwsAutoscalingGroup.AlarmSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alarms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupPreferencesPropertyToTerraform(struct?: AwsAutoscalingGroup.PreferencesPropertyOutputReference | AwsAutoscalingGroup.PreferencesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_rollback: cdktn.booleanToTerraform(struct!.autoRollback),
    checkpoint_delay: cdktn.stringToTerraform(struct!.checkpointDelay),
    checkpoint_percentages: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.checkpointPercentages),
    instance_warmup: cdktn.stringToTerraform(struct!.instanceWarmup),
    max_healthy_percentage: cdktn.numberToTerraform(struct!.maxHealthyPercentage),
    min_healthy_percentage: cdktn.numberToTerraform(struct!.minHealthyPercentage),
    scale_in_protected_instances: cdktn.stringToTerraform(struct!.scaleInProtectedInstances),
    skip_matching: cdktn.booleanToTerraform(struct!.skipMatching),
    standby_instances: cdktn.stringToTerraform(struct!.standbyInstances),
    alarm_specification: awsAutoscalingGroupAlarmSpecificationPropertyToTerraform(struct!.alarmSpecification),
  }
}


export function awsAutoscalingGroupPreferencesPropertyToHclTerraform(struct?: AwsAutoscalingGroup.PreferencesPropertyOutputReference | AwsAutoscalingGroup.PreferencesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_rollback: {
      value: cdktn.booleanToHclTerraform(struct!.autoRollback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    checkpoint_delay: {
      value: cdktn.stringToHclTerraform(struct!.checkpointDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checkpoint_percentages: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.checkpointPercentages),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    instance_warmup: {
      value: cdktn.stringToHclTerraform(struct!.instanceWarmup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_healthy_percentage: {
      value: cdktn.numberToHclTerraform(struct!.maxHealthyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_healthy_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minHealthyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_in_protected_instances: {
      value: cdktn.stringToHclTerraform(struct!.scaleInProtectedInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_matching: {
      value: cdktn.booleanToHclTerraform(struct!.skipMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standby_instances: {
      value: cdktn.stringToHclTerraform(struct!.standbyInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alarm_specification: {
      value: awsAutoscalingGroupAlarmSpecificationPropertyToHclTerraform(struct!.alarmSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AlarmSpecificationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupInstanceRefreshPropertyToTerraform(struct?: AwsAutoscalingGroup.InstanceRefreshPropertyOutputReference | AwsAutoscalingGroup.InstanceRefreshProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    strategy: cdktn.stringToTerraform(struct!.strategy),
    triggers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.triggers),
    preferences: awsAutoscalingGroupPreferencesPropertyToTerraform(struct!.preferences),
  }
}


export function awsAutoscalingGroupInstanceRefreshPropertyToHclTerraform(struct?: AwsAutoscalingGroup.InstanceRefreshPropertyOutputReference | AwsAutoscalingGroup.InstanceRefreshProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.triggers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preferences: {
      value: awsAutoscalingGroupPreferencesPropertyToHclTerraform(struct!.preferences),
      isBlock: true,
      type: "list",
      storageClassType: "PreferencesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupLaunchTemplatePropertyToTerraform(struct?: AwsAutoscalingGroup.LaunchTemplatePropertyOutputReference | AwsAutoscalingGroup.LaunchTemplateProperty): any {
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


export function awsAutoscalingGroupLaunchTemplatePropertyToHclTerraform(struct?: AwsAutoscalingGroup.LaunchTemplatePropertyOutputReference | AwsAutoscalingGroup.LaunchTemplateProperty): any {
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


export function awsAutoscalingGroupInstancesDistributionPropertyToTerraform(struct?: AwsAutoscalingGroup.InstancesDistributionPropertyOutputReference | AwsAutoscalingGroup.InstancesDistributionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_demand_allocation_strategy: cdktn.stringToTerraform(struct!.onDemandAllocationStrategy),
    on_demand_base_capacity: cdktn.numberToTerraform(struct!.onDemandBaseCapacity),
    on_demand_percentage_above_base_capacity: cdktn.numberToTerraform(struct!.onDemandPercentageAboveBaseCapacity),
    spot_allocation_strategy: cdktn.stringToTerraform(struct!.spotAllocationStrategy),
    spot_instance_pools: cdktn.numberToTerraform(struct!.spotInstancePools),
    spot_max_price: cdktn.stringToTerraform(struct!.spotMaxPrice),
  }
}


export function awsAutoscalingGroupInstancesDistributionPropertyToHclTerraform(struct?: AwsAutoscalingGroup.InstancesDistributionPropertyOutputReference | AwsAutoscalingGroup.InstancesDistributionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_demand_allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.onDemandAllocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_demand_base_capacity: {
      value: cdktn.numberToHclTerraform(struct!.onDemandBaseCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand_percentage_above_base_capacity: {
      value: cdktn.numberToHclTerraform(struct!.onDemandPercentageAboveBaseCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.spotAllocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_instance_pools: {
      value: cdktn.numberToHclTerraform(struct!.spotInstancePools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_max_price: {
      value: cdktn.stringToHclTerraform(struct!.spotMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyToTerraform(struct?: AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyOutputReference | AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty): any {
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


export function awsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyToHclTerraform(struct?: AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyOutputReference | AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty): any {
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


export function awsAutoscalingGroupAcceleratorCountPropertyToTerraform(struct?: AwsAutoscalingGroup.AcceleratorCountPropertyOutputReference | AwsAutoscalingGroup.AcceleratorCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupAcceleratorCountPropertyToHclTerraform(struct?: AwsAutoscalingGroup.AcceleratorCountPropertyOutputReference | AwsAutoscalingGroup.AcceleratorCountProperty): any {
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


export function awsAutoscalingGroupAcceleratorTotalMemoryMibPropertyToTerraform(struct?: AwsAutoscalingGroup.AcceleratorTotalMemoryMibPropertyOutputReference | AwsAutoscalingGroup.AcceleratorTotalMemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupAcceleratorTotalMemoryMibPropertyToHclTerraform(struct?: AwsAutoscalingGroup.AcceleratorTotalMemoryMibPropertyOutputReference | AwsAutoscalingGroup.AcceleratorTotalMemoryMibProperty): any {
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


export function awsAutoscalingGroupBaselineEbsBandwidthMbpsPropertyToTerraform(struct?: AwsAutoscalingGroup.BaselineEbsBandwidthMbpsPropertyOutputReference | AwsAutoscalingGroup.BaselineEbsBandwidthMbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct?: AwsAutoscalingGroup.BaselineEbsBandwidthMbpsPropertyOutputReference | AwsAutoscalingGroup.BaselineEbsBandwidthMbpsProperty): any {
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


export function awsAutoscalingGroupMemoryGibPerVcpuPropertyToTerraform(struct?: AwsAutoscalingGroup.MemoryGibPerVcpuPropertyOutputReference | AwsAutoscalingGroup.MemoryGibPerVcpuProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupMemoryGibPerVcpuPropertyToHclTerraform(struct?: AwsAutoscalingGroup.MemoryGibPerVcpuPropertyOutputReference | AwsAutoscalingGroup.MemoryGibPerVcpuProperty): any {
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


export function awsAutoscalingGroupMemoryMibPropertyToTerraform(struct?: AwsAutoscalingGroup.MemoryMibPropertyOutputReference | AwsAutoscalingGroup.MemoryMibProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupMemoryMibPropertyToHclTerraform(struct?: AwsAutoscalingGroup.MemoryMibPropertyOutputReference | AwsAutoscalingGroup.MemoryMibProperty): any {
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


export function awsAutoscalingGroupNetworkBandwidthGbpsPropertyToTerraform(struct?: AwsAutoscalingGroup.NetworkBandwidthGbpsPropertyOutputReference | AwsAutoscalingGroup.NetworkBandwidthGbpsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupNetworkBandwidthGbpsPropertyToHclTerraform(struct?: AwsAutoscalingGroup.NetworkBandwidthGbpsPropertyOutputReference | AwsAutoscalingGroup.NetworkBandwidthGbpsProperty): any {
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


export function awsAutoscalingGroupNetworkInterfaceCountPropertyToTerraform(struct?: AwsAutoscalingGroup.NetworkInterfaceCountPropertyOutputReference | AwsAutoscalingGroup.NetworkInterfaceCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupNetworkInterfaceCountPropertyToHclTerraform(struct?: AwsAutoscalingGroup.NetworkInterfaceCountPropertyOutputReference | AwsAutoscalingGroup.NetworkInterfaceCountProperty): any {
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


export function awsAutoscalingGroupTotalLocalStorageGbPropertyToTerraform(struct?: AwsAutoscalingGroup.TotalLocalStorageGbPropertyOutputReference | AwsAutoscalingGroup.TotalLocalStorageGbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupTotalLocalStorageGbPropertyToHclTerraform(struct?: AwsAutoscalingGroup.TotalLocalStorageGbPropertyOutputReference | AwsAutoscalingGroup.TotalLocalStorageGbProperty): any {
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


export function awsAutoscalingGroupVcpuCountPropertyToTerraform(struct?: AwsAutoscalingGroup.VcpuCountPropertyOutputReference | AwsAutoscalingGroup.VcpuCountProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function awsAutoscalingGroupVcpuCountPropertyToHclTerraform(struct?: AwsAutoscalingGroup.VcpuCountPropertyOutputReference | AwsAutoscalingGroup.VcpuCountProperty): any {
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


export function awsAutoscalingGroupInstanceRequirementsPropertyToTerraform(struct?: AwsAutoscalingGroup.InstanceRequirementsPropertyOutputReference | AwsAutoscalingGroup.InstanceRequirementsProperty): any {
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
    accelerator_count: awsAutoscalingGroupAcceleratorCountPropertyToTerraform(struct!.acceleratorCount),
    accelerator_total_memory_mib: awsAutoscalingGroupAcceleratorTotalMemoryMibPropertyToTerraform(struct!.acceleratorTotalMemoryMib),
    baseline_ebs_bandwidth_mbps: awsAutoscalingGroupBaselineEbsBandwidthMbpsPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
    memory_gib_per_vcpu: awsAutoscalingGroupMemoryGibPerVcpuPropertyToTerraform(struct!.memoryGibPerVcpu),
    memory_mib: awsAutoscalingGroupMemoryMibPropertyToTerraform(struct!.memoryMib),
    network_bandwidth_gbps: awsAutoscalingGroupNetworkBandwidthGbpsPropertyToTerraform(struct!.networkBandwidthGbps),
    network_interface_count: awsAutoscalingGroupNetworkInterfaceCountPropertyToTerraform(struct!.networkInterfaceCount),
    total_local_storage_gb: awsAutoscalingGroupTotalLocalStorageGbPropertyToTerraform(struct!.totalLocalStorageGb),
    vcpu_count: awsAutoscalingGroupVcpuCountPropertyToTerraform(struct!.vcpuCount),
  }
}


export function awsAutoscalingGroupInstanceRequirementsPropertyToHclTerraform(struct?: AwsAutoscalingGroup.InstanceRequirementsPropertyOutputReference | AwsAutoscalingGroup.InstanceRequirementsProperty): any {
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
      value: awsAutoscalingGroupAcceleratorCountPropertyToHclTerraform(struct!.acceleratorCount),
      isBlock: true,
      type: "list",
      storageClassType: "AcceleratorCountPropertyList",
    },
    accelerator_total_memory_mib: {
      value: awsAutoscalingGroupAcceleratorTotalMemoryMibPropertyToHclTerraform(struct!.acceleratorTotalMemoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "AcceleratorTotalMemoryMibPropertyList",
    },
    baseline_ebs_bandwidth_mbps: {
      value: awsAutoscalingGroupBaselineEbsBandwidthMbpsPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
      isBlock: true,
      type: "list",
      storageClassType: "BaselineEbsBandwidthMbpsPropertyList",
    },
    memory_gib_per_vcpu: {
      value: awsAutoscalingGroupMemoryGibPerVcpuPropertyToHclTerraform(struct!.memoryGibPerVcpu),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryGibPerVcpuPropertyList",
    },
    memory_mib: {
      value: awsAutoscalingGroupMemoryMibPropertyToHclTerraform(struct!.memoryMib),
      isBlock: true,
      type: "list",
      storageClassType: "MemoryMibPropertyList",
    },
    network_bandwidth_gbps: {
      value: awsAutoscalingGroupNetworkBandwidthGbpsPropertyToHclTerraform(struct!.networkBandwidthGbps),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkBandwidthGbpsPropertyList",
    },
    network_interface_count: {
      value: awsAutoscalingGroupNetworkInterfaceCountPropertyToHclTerraform(struct!.networkInterfaceCount),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkInterfaceCountPropertyList",
    },
    total_local_storage_gb: {
      value: awsAutoscalingGroupTotalLocalStorageGbPropertyToHclTerraform(struct!.totalLocalStorageGb),
      isBlock: true,
      type: "list",
      storageClassType: "TotalLocalStorageGbPropertyList",
    },
    vcpu_count: {
      value: awsAutoscalingGroupVcpuCountPropertyToHclTerraform(struct!.vcpuCount),
      isBlock: true,
      type: "list",
      storageClassType: "VcpuCountPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyToTerraform(struct?: AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyOutputReference | AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationProperty): any {
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


export function awsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyToHclTerraform(struct?: AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyOutputReference | AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationProperty): any {
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


export function awsAutoscalingGroupOverridePropertyToTerraform(struct?: AwsAutoscalingGroup.OverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktn.stringToTerraform(struct!.weightedCapacity),
    instance_requirements: awsAutoscalingGroupInstanceRequirementsPropertyToTerraform(struct!.instanceRequirements),
    launch_template_specification: awsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplateSpecification),
  }
}


export function awsAutoscalingGroupOverridePropertyToHclTerraform(struct?: AwsAutoscalingGroup.OverrideProperty | cdktn.IResolvable): any {
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
    instance_requirements: {
      value: awsAutoscalingGroupInstanceRequirementsPropertyToHclTerraform(struct!.instanceRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceRequirementsPropertyList",
    },
    launch_template_specification: {
      value: awsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplateSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupMixedInstancesPolicyLaunchTemplatePropertyToTerraform(struct?: AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplatePropertyOutputReference | AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_specification: awsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyToTerraform(struct!.launchTemplateSpecification),
    override: cdktn.listMapper(awsAutoscalingGroupOverridePropertyToTerraform, true)(struct!.override),
  }
}


export function awsAutoscalingGroupMixedInstancesPolicyLaunchTemplatePropertyToHclTerraform(struct?: AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplatePropertyOutputReference | AwsAutoscalingGroup.MixedInstancesPolicyLaunchTemplateProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_specification: {
      value: awsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyToHclTerraform(struct!.launchTemplateSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyList",
    },
    override: {
      value: cdktn.listMapperHcl(awsAutoscalingGroupOverridePropertyToHclTerraform, true)(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "OverridePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupMixedInstancesPolicyPropertyToTerraform(struct?: AwsAutoscalingGroup.MixedInstancesPolicyPropertyOutputReference | AwsAutoscalingGroup.MixedInstancesPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instances_distribution: awsAutoscalingGroupInstancesDistributionPropertyToTerraform(struct!.instancesDistribution),
    launch_template: awsAutoscalingGroupMixedInstancesPolicyLaunchTemplatePropertyToTerraform(struct!.launchTemplate),
  }
}


export function awsAutoscalingGroupMixedInstancesPolicyPropertyToHclTerraform(struct?: AwsAutoscalingGroup.MixedInstancesPolicyPropertyOutputReference | AwsAutoscalingGroup.MixedInstancesPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instances_distribution: {
      value: awsAutoscalingGroupInstancesDistributionPropertyToHclTerraform(struct!.instancesDistribution),
      isBlock: true,
      type: "list",
      storageClassType: "InstancesDistributionPropertyList",
    },
    launch_template: {
      value: awsAutoscalingGroupMixedInstancesPolicyLaunchTemplatePropertyToHclTerraform(struct!.launchTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MixedInstancesPolicyLaunchTemplatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupTagPropertyToTerraform(struct?: AwsAutoscalingGroup.TagProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    propagate_at_launch: cdktn.booleanToTerraform(struct!.propagateAtLaunch),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsAutoscalingGroupTagPropertyToHclTerraform(struct?: AwsAutoscalingGroup.TagProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_at_launch: {
      value: cdktn.booleanToHclTerraform(struct!.propagateAtLaunch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupTimeoutsPropertyToTerraform(struct?: AwsAutoscalingGroup.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function awsAutoscalingGroupTimeoutsPropertyToHclTerraform(struct?: AwsAutoscalingGroup.TimeoutsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsAutoscalingGroupTrafficSourcePropertyToTerraform(struct?: AwsAutoscalingGroup.TrafficSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsAutoscalingGroupTrafficSourcePropertyToHclTerraform(struct?: AwsAutoscalingGroup.TrafficSourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsAutoscalingGroupInstanceReusePolicyPropertyToTerraform(struct?: AwsAutoscalingGroup.InstanceReusePolicyPropertyOutputReference | AwsAutoscalingGroup.InstanceReusePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reuse_on_scale_in: cdktn.booleanToTerraform(struct!.reuseOnScaleIn),
  }
}


export function awsAutoscalingGroupInstanceReusePolicyPropertyToHclTerraform(struct?: AwsAutoscalingGroup.InstanceReusePolicyPropertyOutputReference | AwsAutoscalingGroup.InstanceReusePolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reuse_on_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.reuseOnScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAutoscalingGroupWarmPoolPropertyToTerraform(struct?: AwsAutoscalingGroup.WarmPoolPropertyOutputReference | AwsAutoscalingGroup.WarmPoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_group_prepared_capacity: cdktn.numberToTerraform(struct!.maxGroupPreparedCapacity),
    min_size: cdktn.numberToTerraform(struct!.minSize),
    pool_state: cdktn.stringToTerraform(struct!.poolState),
    instance_reuse_policy: awsAutoscalingGroupInstanceReusePolicyPropertyToTerraform(struct!.instanceReusePolicy),
  }
}


export function awsAutoscalingGroupWarmPoolPropertyToHclTerraform(struct?: AwsAutoscalingGroup.WarmPoolPropertyOutputReference | AwsAutoscalingGroup.WarmPoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_group_prepared_capacity: {
      value: cdktn.numberToHclTerraform(struct!.maxGroupPreparedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktn.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_state: {
      value: cdktn.stringToHclTerraform(struct!.poolState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_reuse_policy: {
      value: awsAutoscalingGroupInstanceReusePolicyPropertyToHclTerraform(struct!.instanceReusePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceReusePolicyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAutoscalingGroup {
export interface AvailabilityZoneDistributionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#capacity_distribution_strategy AwsAutoscalingGroup#capacity_distribution_strategy}
  */
  readonly capacityDistributionStrategy?: string;
}
export class AvailabilityZoneDistributionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AvailabilityZoneDistributionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityDistributionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityDistributionStrategy = this._capacityDistributionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AvailabilityZoneDistributionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityDistributionStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityDistributionStrategy = value.capacityDistributionStrategy;
    }
  }

  // capacity_distribution_strategy - computed: false, optional: true, required: false
  private _capacityDistributionStrategy?: string; 
  public get capacityDistributionStrategy() {
    return this.getStringAttribute('capacity_distribution_strategy');
  }
  public set capacityDistributionStrategy(value: string) {
    this._capacityDistributionStrategy = value;
  }
  public resetCapacityDistributionStrategy() {
    this._capacityDistributionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityDistributionStrategyInput() {
    return this._capacityDistributionStrategy;
  }
}
export interface CapacityReservationTargetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#capacity_reservation_ids AwsAutoscalingGroup#capacity_reservation_ids}
  */
  readonly capacityReservationIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#capacity_reservation_resource_group_arns AwsAutoscalingGroup#capacity_reservation_resource_group_arns}
  */
  readonly capacityReservationResourceGroupArns?: string[];
}
export class CapacityReservationTargetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityReservationTargetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationIds = this._capacityReservationIds;
    }
    if (this._capacityReservationResourceGroupArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationResourceGroupArns = this._capacityReservationResourceGroupArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityReservationTargetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityReservationIds = undefined;
      this._capacityReservationResourceGroupArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityReservationIds = value.capacityReservationIds;
      this._capacityReservationResourceGroupArns = value.capacityReservationResourceGroupArns;
    }
  }

  // capacity_reservation_ids - computed: false, optional: true, required: false
  private _capacityReservationIds?: string[]; 
  public get capacityReservationIds() {
    return this.getListAttribute('capacity_reservation_ids');
  }
  public set capacityReservationIds(value: string[]) {
    this._capacityReservationIds = value;
  }
  public resetCapacityReservationIds() {
    this._capacityReservationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdsInput() {
    return this._capacityReservationIds;
  }

  // capacity_reservation_resource_group_arns - computed: false, optional: true, required: false
  private _capacityReservationResourceGroupArns?: string[]; 
  public get capacityReservationResourceGroupArns() {
    return this.getListAttribute('capacity_reservation_resource_group_arns');
  }
  public set capacityReservationResourceGroupArns(value: string[]) {
    this._capacityReservationResourceGroupArns = value;
  }
  public resetCapacityReservationResourceGroupArns() {
    this._capacityReservationResourceGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationResourceGroupArnsInput() {
    return this._capacityReservationResourceGroupArns;
  }
}
export interface CapacityReservationSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#capacity_reservation_preference AwsAutoscalingGroup#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * capacity_reservation_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#capacity_reservation_target AwsAutoscalingGroup#capacity_reservation_target}
  */
  readonly capacityReservationTarget?: CapacityReservationTargetProperty;
}
export class CapacityReservationSpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityReservationSpecificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
    }
    if (this._capacityReservationTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationTarget = this._capacityReservationTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityReservationSpecificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityReservationPreference = undefined;
      this._capacityReservationTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityReservationPreference = value.capacityReservationPreference;
      this._capacityReservationTarget.internalValue = value.capacityReservationTarget;
    }
  }

  // capacity_reservation_preference - computed: true, optional: true, required: false
  private _capacityReservationPreference?: string; 
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }
  public set capacityReservationPreference(value: string) {
    this._capacityReservationPreference = value;
  }
  public resetCapacityReservationPreference() {
    this._capacityReservationPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationPreferenceInput() {
    return this._capacityReservationPreference;
  }

  // capacity_reservation_target - computed: false, optional: true, required: false
  private _capacityReservationTarget = new CapacityReservationTargetPropertyOutputReference(this, "capacity_reservation_target");
  public get capacityReservationTarget() {
    return this._capacityReservationTarget;
  }
  public putCapacityReservationTarget(value: CapacityReservationTargetProperty) {
    this._capacityReservationTarget.internalValue = value;
  }
  public resetCapacityReservationTarget() {
    this._capacityReservationTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationTargetInput() {
    return this._capacityReservationTarget.internalValue;
  }
}
export interface InitialLifecycleHookProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#default_result AwsAutoscalingGroup#default_result}
  */
  readonly defaultResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#heartbeat_timeout AwsAutoscalingGroup#heartbeat_timeout}
  */
  readonly heartbeatTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#lifecycle_transition AwsAutoscalingGroup#lifecycle_transition}
  */
  readonly lifecycleTransition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#name AwsAutoscalingGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#notification_metadata AwsAutoscalingGroup#notification_metadata}
  */
  readonly notificationMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#notification_target_arn AwsAutoscalingGroup#notification_target_arn}
  */
  readonly notificationTargetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#role_arn AwsAutoscalingGroup#role_arn}
  */
  readonly roleArn?: string;
}
export class InitialLifecycleHookPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InitialLifecycleHookProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResult = this._defaultResult;
    }
    if (this._heartbeatTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatTimeout = this._heartbeatTimeout;
    }
    if (this._lifecycleTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleTransition = this._lifecycleTransition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notificationMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationMetadata = this._notificationMetadata;
    }
    if (this._notificationTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTargetArn = this._notificationTargetArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InitialLifecycleHookProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResult = undefined;
      this._heartbeatTimeout = undefined;
      this._lifecycleTransition = undefined;
      this._name = undefined;
      this._notificationMetadata = undefined;
      this._notificationTargetArn = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResult = value.defaultResult;
      this._heartbeatTimeout = value.heartbeatTimeout;
      this._lifecycleTransition = value.lifecycleTransition;
      this._name = value.name;
      this._notificationMetadata = value.notificationMetadata;
      this._notificationTargetArn = value.notificationTargetArn;
      this._roleArn = value.roleArn;
    }
  }

  // default_result - computed: true, optional: true, required: false
  private _defaultResult?: string; 
  public get defaultResult() {
    return this.getStringAttribute('default_result');
  }
  public set defaultResult(value: string) {
    this._defaultResult = value;
  }
  public resetDefaultResult() {
    this._defaultResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultInput() {
    return this._defaultResult;
  }

  // heartbeat_timeout - computed: false, optional: true, required: false
  private _heartbeatTimeout?: number; 
  public get heartbeatTimeout() {
    return this.getNumberAttribute('heartbeat_timeout');
  }
  public set heartbeatTimeout(value: number) {
    this._heartbeatTimeout = value;
  }
  public resetHeartbeatTimeout() {
    this._heartbeatTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatTimeoutInput() {
    return this._heartbeatTimeout;
  }

  // lifecycle_transition - computed: false, optional: false, required: true
  private _lifecycleTransition?: string; 
  public get lifecycleTransition() {
    return this.getStringAttribute('lifecycle_transition');
  }
  public set lifecycleTransition(value: string) {
    this._lifecycleTransition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleTransitionInput() {
    return this._lifecycleTransition;
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

  // notification_metadata - computed: false, optional: true, required: false
  private _notificationMetadata?: string; 
  public get notificationMetadata() {
    return this.getStringAttribute('notification_metadata');
  }
  public set notificationMetadata(value: string) {
    this._notificationMetadata = value;
  }
  public resetNotificationMetadata() {
    this._notificationMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMetadataInput() {
    return this._notificationMetadata;
  }

  // notification_target_arn - computed: false, optional: true, required: false
  private _notificationTargetArn?: string; 
  public get notificationTargetArn() {
    return this.getStringAttribute('notification_target_arn');
  }
  public set notificationTargetArn(value: string) {
    this._notificationTargetArn = value;
  }
  public resetNotificationTargetArn() {
    this._notificationTargetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetArnInput() {
    return this._notificationTargetArn;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class InitialLifecycleHookPropertyList extends cdktn.ComplexList {
  public internalValue? : InitialLifecycleHookProperty[] | cdktn.IResolvable

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
  public get(index: number): InitialLifecycleHookPropertyOutputReference {
    return new InitialLifecycleHookPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RetentionTriggersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#terminate_hook_abandon AwsAutoscalingGroup#terminate_hook_abandon}
  */
  readonly terminateHookAbandon?: string;
}
export class RetentionTriggersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetentionTriggersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._terminateHookAbandon !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateHookAbandon = this._terminateHookAbandon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetentionTriggersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._terminateHookAbandon = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._terminateHookAbandon = value.terminateHookAbandon;
    }
  }

  // terminate_hook_abandon - computed: true, optional: true, required: false
  private _terminateHookAbandon?: string; 
  public get terminateHookAbandon() {
    return this.getStringAttribute('terminate_hook_abandon');
  }
  public set terminateHookAbandon(value: string) {
    this._terminateHookAbandon = value;
  }
  public resetTerminateHookAbandon() {
    this._terminateHookAbandon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateHookAbandonInput() {
    return this._terminateHookAbandon;
  }
}
export interface InstanceLifecyclePolicyProperty {
  /**
  * retention_triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#retention_triggers AwsAutoscalingGroup#retention_triggers}
  */
  readonly retentionTriggers?: RetentionTriggersProperty;
}
export class InstanceLifecyclePolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceLifecyclePolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionTriggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionTriggers = this._retentionTriggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceLifecyclePolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionTriggers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionTriggers.internalValue = value.retentionTriggers;
    }
  }

  // retention_triggers - computed: false, optional: true, required: false
  private _retentionTriggers = new RetentionTriggersPropertyOutputReference(this, "retention_triggers");
  public get retentionTriggers() {
    return this._retentionTriggers;
  }
  public putRetentionTriggers(value: RetentionTriggersProperty) {
    this._retentionTriggers.internalValue = value;
  }
  public resetRetentionTriggers() {
    this._retentionTriggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTriggersInput() {
    return this._retentionTriggers.internalValue;
  }
}
export interface InstanceMaintenancePolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max_healthy_percentage AwsAutoscalingGroup#max_healthy_percentage}
  */
  readonly maxHealthyPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min_healthy_percentage AwsAutoscalingGroup#min_healthy_percentage}
  */
  readonly minHealthyPercentage: number;
}
export class InstanceMaintenancePolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceMaintenancePolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHealthyPercentage = this._maxHealthyPercentage;
    }
    if (this._minHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthyPercentage = this._minHealthyPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceMaintenancePolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxHealthyPercentage = undefined;
      this._minHealthyPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxHealthyPercentage = value.maxHealthyPercentage;
      this._minHealthyPercentage = value.minHealthyPercentage;
    }
  }

  // max_healthy_percentage - computed: false, optional: false, required: true
  private _maxHealthyPercentage?: number; 
  public get maxHealthyPercentage() {
    return this.getNumberAttribute('max_healthy_percentage');
  }
  public set maxHealthyPercentage(value: number) {
    this._maxHealthyPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHealthyPercentageInput() {
    return this._maxHealthyPercentage;
  }

  // min_healthy_percentage - computed: false, optional: false, required: true
  private _minHealthyPercentage?: number; 
  public get minHealthyPercentage() {
    return this.getNumberAttribute('min_healthy_percentage');
  }
  public set minHealthyPercentage(value: number) {
    this._minHealthyPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthyPercentageInput() {
    return this._minHealthyPercentage;
  }
}
export interface AlarmSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#alarms AwsAutoscalingGroup#alarms}
  */
  readonly alarms?: string[];
}
export class AlarmSpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlarmSpecificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlarmSpecificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms = value.alarms;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms?: string[]; 
  public get alarms() {
    return this.getListAttribute('alarms');
  }
  public set alarms(value: string[]) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms;
  }
}
export interface PreferencesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#auto_rollback AwsAutoscalingGroup#auto_rollback}
  */
  readonly autoRollback?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#checkpoint_delay AwsAutoscalingGroup#checkpoint_delay}
  */
  readonly checkpointDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#checkpoint_percentages AwsAutoscalingGroup#checkpoint_percentages}
  */
  readonly checkpointPercentages?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instance_warmup AwsAutoscalingGroup#instance_warmup}
  */
  readonly instanceWarmup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max_healthy_percentage AwsAutoscalingGroup#max_healthy_percentage}
  */
  readonly maxHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min_healthy_percentage AwsAutoscalingGroup#min_healthy_percentage}
  */
  readonly minHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#scale_in_protected_instances AwsAutoscalingGroup#scale_in_protected_instances}
  */
  readonly scaleInProtectedInstances?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#skip_matching AwsAutoscalingGroup#skip_matching}
  */
  readonly skipMatching?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#standby_instances AwsAutoscalingGroup#standby_instances}
  */
  readonly standbyInstances?: string;
  /**
  * alarm_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#alarm_specification AwsAutoscalingGroup#alarm_specification}
  */
  readonly alarmSpecification?: AlarmSpecificationProperty;
}
export class PreferencesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreferencesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRollback !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRollback = this._autoRollback;
    }
    if (this._checkpointDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointDelay = this._checkpointDelay;
    }
    if (this._checkpointPercentages !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointPercentages = this._checkpointPercentages;
    }
    if (this._instanceWarmup !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceWarmup = this._instanceWarmup;
    }
    if (this._maxHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHealthyPercentage = this._maxHealthyPercentage;
    }
    if (this._minHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthyPercentage = this._minHealthyPercentage;
    }
    if (this._scaleInProtectedInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInProtectedInstances = this._scaleInProtectedInstances;
    }
    if (this._skipMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipMatching = this._skipMatching;
    }
    if (this._standbyInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyInstances = this._standbyInstances;
    }
    if (this._alarmSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmSpecification = this._alarmSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreferencesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRollback = undefined;
      this._checkpointDelay = undefined;
      this._checkpointPercentages = undefined;
      this._instanceWarmup = undefined;
      this._maxHealthyPercentage = undefined;
      this._minHealthyPercentage = undefined;
      this._scaleInProtectedInstances = undefined;
      this._skipMatching = undefined;
      this._standbyInstances = undefined;
      this._alarmSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRollback = value.autoRollback;
      this._checkpointDelay = value.checkpointDelay;
      this._checkpointPercentages = value.checkpointPercentages;
      this._instanceWarmup = value.instanceWarmup;
      this._maxHealthyPercentage = value.maxHealthyPercentage;
      this._minHealthyPercentage = value.minHealthyPercentage;
      this._scaleInProtectedInstances = value.scaleInProtectedInstances;
      this._skipMatching = value.skipMatching;
      this._standbyInstances = value.standbyInstances;
      this._alarmSpecification.internalValue = value.alarmSpecification;
    }
  }

  // auto_rollback - computed: false, optional: true, required: false
  private _autoRollback?: boolean | cdktn.IResolvable; 
  public get autoRollback() {
    return this.getBooleanAttribute('auto_rollback');
  }
  public set autoRollback(value: boolean | cdktn.IResolvable) {
    this._autoRollback = value;
  }
  public resetAutoRollback() {
    this._autoRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackInput() {
    return this._autoRollback;
  }

  // checkpoint_delay - computed: false, optional: true, required: false
  private _checkpointDelay?: string; 
  public get checkpointDelay() {
    return this.getStringAttribute('checkpoint_delay');
  }
  public set checkpointDelay(value: string) {
    this._checkpointDelay = value;
  }
  public resetCheckpointDelay() {
    this._checkpointDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointDelayInput() {
    return this._checkpointDelay;
  }

  // checkpoint_percentages - computed: false, optional: true, required: false
  private _checkpointPercentages?: number[]; 
  public get checkpointPercentages() {
    return this.getNumberListAttribute('checkpoint_percentages');
  }
  public set checkpointPercentages(value: number[]) {
    this._checkpointPercentages = value;
  }
  public resetCheckpointPercentages() {
    this._checkpointPercentages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointPercentagesInput() {
    return this._checkpointPercentages;
  }

  // instance_warmup - computed: false, optional: true, required: false
  private _instanceWarmup?: string; 
  public get instanceWarmup() {
    return this.getStringAttribute('instance_warmup');
  }
  public set instanceWarmup(value: string) {
    this._instanceWarmup = value;
  }
  public resetInstanceWarmup() {
    this._instanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceWarmupInput() {
    return this._instanceWarmup;
  }

  // max_healthy_percentage - computed: false, optional: true, required: false
  private _maxHealthyPercentage?: number; 
  public get maxHealthyPercentage() {
    return this.getNumberAttribute('max_healthy_percentage');
  }
  public set maxHealthyPercentage(value: number) {
    this._maxHealthyPercentage = value;
  }
  public resetMaxHealthyPercentage() {
    this._maxHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHealthyPercentageInput() {
    return this._maxHealthyPercentage;
  }

  // min_healthy_percentage - computed: false, optional: true, required: false
  private _minHealthyPercentage?: number; 
  public get minHealthyPercentage() {
    return this.getNumberAttribute('min_healthy_percentage');
  }
  public set minHealthyPercentage(value: number) {
    this._minHealthyPercentage = value;
  }
  public resetMinHealthyPercentage() {
    this._minHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthyPercentageInput() {
    return this._minHealthyPercentage;
  }

  // scale_in_protected_instances - computed: false, optional: true, required: false
  private _scaleInProtectedInstances?: string; 
  public get scaleInProtectedInstances() {
    return this.getStringAttribute('scale_in_protected_instances');
  }
  public set scaleInProtectedInstances(value: string) {
    this._scaleInProtectedInstances = value;
  }
  public resetScaleInProtectedInstances() {
    this._scaleInProtectedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInProtectedInstancesInput() {
    return this._scaleInProtectedInstances;
  }

  // skip_matching - computed: false, optional: true, required: false
  private _skipMatching?: boolean | cdktn.IResolvable; 
  public get skipMatching() {
    return this.getBooleanAttribute('skip_matching');
  }
  public set skipMatching(value: boolean | cdktn.IResolvable) {
    this._skipMatching = value;
  }
  public resetSkipMatching() {
    this._skipMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMatchingInput() {
    return this._skipMatching;
  }

  // standby_instances - computed: false, optional: true, required: false
  private _standbyInstances?: string; 
  public get standbyInstances() {
    return this.getStringAttribute('standby_instances');
  }
  public set standbyInstances(value: string) {
    this._standbyInstances = value;
  }
  public resetStandbyInstances() {
    this._standbyInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInstancesInput() {
    return this._standbyInstances;
  }

  // alarm_specification - computed: false, optional: true, required: false
  private _alarmSpecification = new AlarmSpecificationPropertyOutputReference(this, "alarm_specification");
  public get alarmSpecification() {
    return this._alarmSpecification;
  }
  public putAlarmSpecification(value: AlarmSpecificationProperty) {
    this._alarmSpecification.internalValue = value;
  }
  public resetAlarmSpecification() {
    this._alarmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmSpecificationInput() {
    return this._alarmSpecification.internalValue;
  }
}
export interface InstanceRefreshProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#strategy AwsAutoscalingGroup#strategy}
  */
  readonly strategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#triggers AwsAutoscalingGroup#triggers}
  */
  readonly triggers?: string[];
  /**
  * preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#preferences AwsAutoscalingGroup#preferences}
  */
  readonly preferences?: PreferencesProperty;
}
export class InstanceRefreshPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceRefreshProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._triggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers;
    }
    if (this._preferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferences = this._preferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceRefreshProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategy = undefined;
      this._triggers = undefined;
      this._preferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategy = value.strategy;
      this._triggers = value.triggers;
      this._preferences.internalValue = value.preferences;
    }
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return cdktn.Fn.tolist(this.getListAttribute('triggers'));
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // preferences - computed: false, optional: true, required: false
  private _preferences = new PreferencesPropertyOutputReference(this, "preferences");
  public get preferences() {
    return this._preferences;
  }
  public putPreferences(value: PreferencesProperty) {
    this._preferences.internalValue = value;
  }
  public resetPreferences() {
    this._preferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences.internalValue;
  }
}
export interface LaunchTemplateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#id AwsAutoscalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#name AwsAutoscalingGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#version AwsAutoscalingGroup#version}
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

  // version - computed: true, optional: true, required: false
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
export interface InstancesDistributionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#on_demand_allocation_strategy AwsAutoscalingGroup#on_demand_allocation_strategy}
  */
  readonly onDemandAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#on_demand_base_capacity AwsAutoscalingGroup#on_demand_base_capacity}
  */
  readonly onDemandBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#on_demand_percentage_above_base_capacity AwsAutoscalingGroup#on_demand_percentage_above_base_capacity}
  */
  readonly onDemandPercentageAboveBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#spot_allocation_strategy AwsAutoscalingGroup#spot_allocation_strategy}
  */
  readonly spotAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#spot_instance_pools AwsAutoscalingGroup#spot_instance_pools}
  */
  readonly spotInstancePools?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#spot_max_price AwsAutoscalingGroup#spot_max_price}
  */
  readonly spotMaxPrice?: string;
}
export class InstancesDistributionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancesDistributionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemandAllocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandAllocationStrategy = this._onDemandAllocationStrategy;
    }
    if (this._onDemandBaseCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandBaseCapacity = this._onDemandBaseCapacity;
    }
    if (this._onDemandPercentageAboveBaseCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandPercentageAboveBaseCapacity = this._onDemandPercentageAboveBaseCapacity;
    }
    if (this._spotAllocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotAllocationStrategy = this._spotAllocationStrategy;
    }
    if (this._spotInstancePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstancePools = this._spotInstancePools;
    }
    if (this._spotMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMaxPrice = this._spotMaxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancesDistributionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemandAllocationStrategy = undefined;
      this._onDemandBaseCapacity = undefined;
      this._onDemandPercentageAboveBaseCapacity = undefined;
      this._spotAllocationStrategy = undefined;
      this._spotInstancePools = undefined;
      this._spotMaxPrice = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemandAllocationStrategy = value.onDemandAllocationStrategy;
      this._onDemandBaseCapacity = value.onDemandBaseCapacity;
      this._onDemandPercentageAboveBaseCapacity = value.onDemandPercentageAboveBaseCapacity;
      this._spotAllocationStrategy = value.spotAllocationStrategy;
      this._spotInstancePools = value.spotInstancePools;
      this._spotMaxPrice = value.spotMaxPrice;
    }
  }

  // on_demand_allocation_strategy - computed: true, optional: true, required: false
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

  // on_demand_base_capacity - computed: true, optional: true, required: false
  private _onDemandBaseCapacity?: number; 
  public get onDemandBaseCapacity() {
    return this.getNumberAttribute('on_demand_base_capacity');
  }
  public set onDemandBaseCapacity(value: number) {
    this._onDemandBaseCapacity = value;
  }
  public resetOnDemandBaseCapacity() {
    this._onDemandBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBaseCapacityInput() {
    return this._onDemandBaseCapacity;
  }

  // on_demand_percentage_above_base_capacity - computed: true, optional: true, required: false
  private _onDemandPercentageAboveBaseCapacity?: number; 
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
  }
  public set onDemandPercentageAboveBaseCapacity(value: number) {
    this._onDemandPercentageAboveBaseCapacity = value;
  }
  public resetOnDemandPercentageAboveBaseCapacity() {
    this._onDemandPercentageAboveBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandPercentageAboveBaseCapacityInput() {
    return this._onDemandPercentageAboveBaseCapacity;
  }

  // spot_allocation_strategy - computed: true, optional: true, required: false
  private _spotAllocationStrategy?: string; 
  public get spotAllocationStrategy() {
    return this.getStringAttribute('spot_allocation_strategy');
  }
  public set spotAllocationStrategy(value: string) {
    this._spotAllocationStrategy = value;
  }
  public resetSpotAllocationStrategy() {
    this._spotAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAllocationStrategyInput() {
    return this._spotAllocationStrategy;
  }

  // spot_instance_pools - computed: true, optional: true, required: false
  private _spotInstancePools?: number; 
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }
  public set spotInstancePools(value: number) {
    this._spotInstancePools = value;
  }
  public resetSpotInstancePools() {
    this._spotInstancePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePoolsInput() {
    return this._spotInstancePools;
  }

  // spot_max_price - computed: false, optional: true, required: false
  private _spotMaxPrice?: string; 
  public get spotMaxPrice() {
    return this.getStringAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: string) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice;
  }
}
export interface MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_template_id AwsAutoscalingGroup#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_template_name AwsAutoscalingGroup#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#version AwsAutoscalingGroup#version}
  */
  readonly version?: string;
}
export class MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty | undefined {
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

  public set internalValue(value: MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty | undefined) {
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

  // launch_template_id - computed: true, optional: true, required: false
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

  // launch_template_name - computed: true, optional: true, required: false
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

  // version - computed: true, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max AwsAutoscalingGroup#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min AwsAutoscalingGroup#min}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#accelerator_manufacturers AwsAutoscalingGroup#accelerator_manufacturers}
  */
  readonly acceleratorManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#accelerator_names AwsAutoscalingGroup#accelerator_names}
  */
  readonly acceleratorNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#accelerator_types AwsAutoscalingGroup#accelerator_types}
  */
  readonly acceleratorTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#allowed_instance_types AwsAutoscalingGroup#allowed_instance_types}
  */
  readonly allowedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#bare_metal AwsAutoscalingGroup#bare_metal}
  */
  readonly bareMetal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#burstable_performance AwsAutoscalingGroup#burstable_performance}
  */
  readonly burstablePerformance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#cpu_manufacturers AwsAutoscalingGroup#cpu_manufacturers}
  */
  readonly cpuManufacturers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#excluded_instance_types AwsAutoscalingGroup#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instance_generations AwsAutoscalingGroup#instance_generations}
  */
  readonly instanceGenerations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#local_storage AwsAutoscalingGroup#local_storage}
  */
  readonly localStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#local_storage_types AwsAutoscalingGroup#local_storage_types}
  */
  readonly localStorageTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max_spot_price_as_percentage_of_optimal_on_demand_price AwsAutoscalingGroup#max_spot_price_as_percentage_of_optimal_on_demand_price}
  */
  readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#on_demand_max_price_percentage_over_lowest_price AwsAutoscalingGroup#on_demand_max_price_percentage_over_lowest_price}
  */
  readonly onDemandMaxPricePercentageOverLowestPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#require_hibernate_support AwsAutoscalingGroup#require_hibernate_support}
  */
  readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#spot_max_price_percentage_over_lowest_price AwsAutoscalingGroup#spot_max_price_percentage_over_lowest_price}
  */
  readonly spotMaxPricePercentageOverLowestPrice?: number;
  /**
  * accelerator_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#accelerator_count AwsAutoscalingGroup#accelerator_count}
  */
  readonly acceleratorCount?: AcceleratorCountProperty;
  /**
  * accelerator_total_memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#accelerator_total_memory_mib AwsAutoscalingGroup#accelerator_total_memory_mib}
  */
  readonly acceleratorTotalMemoryMib?: AcceleratorTotalMemoryMibProperty;
  /**
  * baseline_ebs_bandwidth_mbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#baseline_ebs_bandwidth_mbps AwsAutoscalingGroup#baseline_ebs_bandwidth_mbps}
  */
  readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsProperty;
  /**
  * memory_gib_per_vcpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#memory_gib_per_vcpu AwsAutoscalingGroup#memory_gib_per_vcpu}
  */
  readonly memoryGibPerVcpu?: MemoryGibPerVcpuProperty;
  /**
  * memory_mib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#memory_mib AwsAutoscalingGroup#memory_mib}
  */
  readonly memoryMib?: MemoryMibProperty;
  /**
  * network_bandwidth_gbps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#network_bandwidth_gbps AwsAutoscalingGroup#network_bandwidth_gbps}
  */
  readonly networkBandwidthGbps?: NetworkBandwidthGbpsProperty;
  /**
  * network_interface_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#network_interface_count AwsAutoscalingGroup#network_interface_count}
  */
  readonly networkInterfaceCount?: NetworkInterfaceCountProperty;
  /**
  * total_local_storage_gb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#total_local_storage_gb AwsAutoscalingGroup#total_local_storage_gb}
  */
  readonly totalLocalStorageGb?: TotalLocalStorageGbProperty;
  /**
  * vcpu_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#vcpu_count AwsAutoscalingGroup#vcpu_count}
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
export interface MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_template_id AwsAutoscalingGroup#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_template_name AwsAutoscalingGroup#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#version AwsAutoscalingGroup#version}
  */
  readonly version?: string;
}
export class MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationProperty | undefined {
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

  public set internalValue(value: MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationProperty | undefined) {
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

  // launch_template_id - computed: true, optional: true, required: false
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

  // launch_template_name - computed: true, optional: true, required: false
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

  // version - computed: true, optional: true, required: false
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
export interface OverrideProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instance_type AwsAutoscalingGroup#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#weighted_capacity AwsAutoscalingGroup#weighted_capacity}
  */
  readonly weightedCapacity?: string;
  /**
  * instance_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instance_requirements AwsAutoscalingGroup#instance_requirements}
  */
  readonly instanceRequirements?: InstanceRequirementsProperty;
  /**
  * launch_template_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_template_specification AwsAutoscalingGroup#launch_template_specification}
  */
  readonly launchTemplateSpecification?: MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationProperty;
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
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    if (this._instanceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
    }
    if (this._launchTemplateSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._weightedCapacity = undefined;
      this._instanceRequirements.internalValue = undefined;
      this._launchTemplateSpecification.internalValue = undefined;
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
      this._instanceRequirements.internalValue = value.instanceRequirements;
      this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
    }
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

  // launch_template_specification - computed: false, optional: true, required: false
  private _launchTemplateSpecification = new MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationPropertyOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }
  public putLaunchTemplateSpecification(value: MixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationProperty) {
    this._launchTemplateSpecification.internalValue = value;
  }
  public resetLaunchTemplateSpecification() {
    this._launchTemplateSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateSpecificationInput() {
    return this._launchTemplateSpecification.internalValue;
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
export interface MixedInstancesPolicyLaunchTemplateProperty {
  /**
  * launch_template_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_template_specification AwsAutoscalingGroup#launch_template_specification}
  */
  readonly launchTemplateSpecification: MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#override AwsAutoscalingGroup#override}
  */
  readonly override?: OverrideProperty[] | cdktn.IResolvable;
}
export class MixedInstancesPolicyLaunchTemplatePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MixedInstancesPolicyLaunchTemplateProperty | undefined {
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

  public set internalValue(value: MixedInstancesPolicyLaunchTemplateProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._launchTemplateSpecification.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
      this._override.internalValue = value.override;
    }
  }

  // launch_template_specification - computed: false, optional: false, required: true
  private _launchTemplateSpecification = new MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationPropertyOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }
  public putLaunchTemplateSpecification(value: MixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationProperty) {
    this._launchTemplateSpecification.internalValue = value;
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
export interface MixedInstancesPolicyProperty {
  /**
  * instances_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instances_distribution AwsAutoscalingGroup#instances_distribution}
  */
  readonly instancesDistribution?: InstancesDistributionProperty;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#launch_template AwsAutoscalingGroup#launch_template}
  */
  readonly launchTemplate: MixedInstancesPolicyLaunchTemplateProperty;
}
export class MixedInstancesPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MixedInstancesPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instancesDistribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancesDistribution = this._instancesDistribution?.internalValue;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MixedInstancesPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instancesDistribution.internalValue = undefined;
      this._launchTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instancesDistribution.internalValue = value.instancesDistribution;
      this._launchTemplate.internalValue = value.launchTemplate;
    }
  }

  // instances_distribution - computed: false, optional: true, required: false
  private _instancesDistribution = new InstancesDistributionPropertyOutputReference(this, "instances_distribution");
  public get instancesDistribution() {
    return this._instancesDistribution;
  }
  public putInstancesDistribution(value: InstancesDistributionProperty) {
    this._instancesDistribution.internalValue = value;
  }
  public resetInstancesDistribution() {
    this._instancesDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesDistributionInput() {
    return this._instancesDistribution.internalValue;
  }

  // launch_template - computed: false, optional: false, required: true
  private _launchTemplate = new MixedInstancesPolicyLaunchTemplatePropertyOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: MixedInstancesPolicyLaunchTemplateProperty) {
    this._launchTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }
}
export interface TagProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#key AwsAutoscalingGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#propagate_at_launch AwsAutoscalingGroup#propagate_at_launch}
  */
  readonly propagateAtLaunch: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#value AwsAutoscalingGroup#value}
  */
  readonly value: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagateAtLaunch !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateAtLaunch = this._propagateAtLaunch;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._propagateAtLaunch = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._propagateAtLaunch = value.propagateAtLaunch;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagate_at_launch - computed: false, optional: false, required: true
  private _propagateAtLaunch?: boolean | cdktn.IResolvable; 
  public get propagateAtLaunch() {
    return this.getBooleanAttribute('propagate_at_launch');
  }
  public set propagateAtLaunch(value: boolean | cdktn.IResolvable) {
    this._propagateAtLaunch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateAtLaunchInput() {
    return this._propagateAtLaunch;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TagPropertyList extends cdktn.ComplexList {
  public internalValue? : TagProperty[] | cdktn.IResolvable

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
  public get(index: number): TagPropertyOutputReference {
    return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#delete AwsAutoscalingGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#update AwsAutoscalingGroup#update}
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
      this._delete = value.delete;
      this._update = value.update;
    }
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
export interface TrafficSourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#identifier AwsAutoscalingGroup#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#type AwsAutoscalingGroup#type}
  */
  readonly type?: string;
}
export class TrafficSourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrafficSourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficSourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._type = value.type;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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
}

export class TrafficSourcePropertyList extends cdktn.ComplexList {
  public internalValue? : TrafficSourceProperty[] | cdktn.IResolvable

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
  public get(index: number): TrafficSourcePropertyOutputReference {
    return new TrafficSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceReusePolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#reuse_on_scale_in AwsAutoscalingGroup#reuse_on_scale_in}
  */
  readonly reuseOnScaleIn?: boolean | cdktn.IResolvable;
}
export class InstanceReusePolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceReusePolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reuseOnScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseOnScaleIn = this._reuseOnScaleIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceReusePolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reuseOnScaleIn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reuseOnScaleIn = value.reuseOnScaleIn;
    }
  }

  // reuse_on_scale_in - computed: false, optional: true, required: false
  private _reuseOnScaleIn?: boolean | cdktn.IResolvable; 
  public get reuseOnScaleIn() {
    return this.getBooleanAttribute('reuse_on_scale_in');
  }
  public set reuseOnScaleIn(value: boolean | cdktn.IResolvable) {
    this._reuseOnScaleIn = value;
  }
  public resetReuseOnScaleIn() {
    this._reuseOnScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseOnScaleInInput() {
    return this._reuseOnScaleIn;
  }
}
export interface WarmPoolProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#max_group_prepared_capacity AwsAutoscalingGroup#max_group_prepared_capacity}
  */
  readonly maxGroupPreparedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#min_size AwsAutoscalingGroup#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#pool_state AwsAutoscalingGroup#pool_state}
  */
  readonly poolState?: string;
  /**
  * instance_reuse_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/autoscaling_group#instance_reuse_policy AwsAutoscalingGroup#instance_reuse_policy}
  */
  readonly instanceReusePolicy?: InstanceReusePolicyProperty;
}
export class WarmPoolPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WarmPoolProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxGroupPreparedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGroupPreparedCapacity = this._maxGroupPreparedCapacity;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._poolState !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolState = this._poolState;
    }
    if (this._instanceReusePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceReusePolicy = this._instanceReusePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WarmPoolProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxGroupPreparedCapacity = undefined;
      this._minSize = undefined;
      this._poolState = undefined;
      this._instanceReusePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxGroupPreparedCapacity = value.maxGroupPreparedCapacity;
      this._minSize = value.minSize;
      this._poolState = value.poolState;
      this._instanceReusePolicy.internalValue = value.instanceReusePolicy;
    }
  }

  // max_group_prepared_capacity - computed: false, optional: true, required: false
  private _maxGroupPreparedCapacity?: number; 
  public get maxGroupPreparedCapacity() {
    return this.getNumberAttribute('max_group_prepared_capacity');
  }
  public set maxGroupPreparedCapacity(value: number) {
    this._maxGroupPreparedCapacity = value;
  }
  public resetMaxGroupPreparedCapacity() {
    this._maxGroupPreparedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGroupPreparedCapacityInput() {
    return this._maxGroupPreparedCapacity;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // pool_state - computed: false, optional: true, required: false
  private _poolState?: string; 
  public get poolState() {
    return this.getStringAttribute('pool_state');
  }
  public set poolState(value: string) {
    this._poolState = value;
  }
  public resetPoolState() {
    this._poolState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolStateInput() {
    return this._poolState;
  }

  // instance_reuse_policy - computed: false, optional: true, required: false
  private _instanceReusePolicy = new InstanceReusePolicyPropertyOutputReference(this, "instance_reuse_policy");
  public get instanceReusePolicy() {
    return this._instanceReusePolicy;
  }
  public putInstanceReusePolicy(value: InstanceReusePolicyProperty) {
    this._instanceReusePolicy.internalValue = value;
  }
  public resetInstanceReusePolicy() {
    this._instanceReusePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceReusePolicyInput() {
    return this._instanceReusePolicy.internalValue;
  }
}
}
