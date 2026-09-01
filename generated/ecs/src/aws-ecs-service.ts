// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsEcsServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#availability_zone_rebalancing AwsEcsService#availability_zone_rebalancing}
  */
  readonly availabilityZoneRebalancing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#cluster AwsEcsService#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#deployment_maximum_percent AwsEcsService#deployment_maximum_percent}
  */
  readonly deploymentMaximumPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#deployment_minimum_healthy_percent AwsEcsService#deployment_minimum_healthy_percent}
  */
  readonly deploymentMinimumHealthyPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#desired_count AwsEcsService#desired_count}
  */
  readonly desiredCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#enable_ecs_managed_tags AwsEcsService#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#enable_execute_command AwsEcsService#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#force_delete AwsEcsService#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#force_new_deployment AwsEcsService#force_new_deployment}
  */
  readonly forceNewDeployment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#health_check_grace_period_seconds AwsEcsService#health_check_grace_period_seconds}
  */
  readonly healthCheckGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#iam_role AwsEcsService#iam_role}
  */
  readonly iamRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#id AwsEcsService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#launch_type AwsEcsService#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#name AwsEcsService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#platform_version AwsEcsService#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#propagate_tags AwsEcsService#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#region AwsEcsService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#scheduling_strategy AwsEcsService#scheduling_strategy}
  */
  readonly schedulingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#sigint_rollback AwsEcsService#sigint_rollback}
  */
  readonly sigintRollback?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#tags AwsEcsService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#tags_all AwsEcsService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#task_definition AwsEcsService#task_definition}
  */
  readonly taskDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#triggers AwsEcsService#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#wait_for_steady_state AwsEcsService#wait_for_steady_state}
  */
  readonly waitForSteadyState?: boolean | cdktn.IResolvable;
  /**
  * alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#alarms AwsEcsService#alarms}
  */
  readonly alarms?: AwsEcsService.AlarmsProperty;
  /**
  * capacity_provider_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#capacity_provider_strategy AwsEcsService#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: AwsEcsService.CapacityProviderStrategyProperty[] | cdktn.IResolvable;
  /**
  * deployment_circuit_breaker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#deployment_circuit_breaker AwsEcsService#deployment_circuit_breaker}
  */
  readonly deploymentCircuitBreaker?: AwsEcsService.DeploymentCircuitBreakerProperty;
  /**
  * deployment_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#deployment_configuration AwsEcsService#deployment_configuration}
  */
  readonly deploymentConfiguration?: AwsEcsService.DeploymentConfigurationProperty;
  /**
  * deployment_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#deployment_controller AwsEcsService#deployment_controller}
  */
  readonly deploymentController?: AwsEcsService.DeploymentControllerProperty;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#load_balancer AwsEcsService#load_balancer}
  */
  readonly loadBalancer?: AwsEcsService.LoadBalancerProperty[] | cdktn.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#network_configuration AwsEcsService#network_configuration}
  */
  readonly networkConfiguration?: AwsEcsService.NetworkConfigurationProperty;
  /**
  * ordered_placement_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#ordered_placement_strategy AwsEcsService#ordered_placement_strategy}
  */
  readonly orderedPlacementStrategy?: AwsEcsService.OrderedPlacementStrategyProperty[] | cdktn.IResolvable;
  /**
  * placement_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#placement_constraints AwsEcsService#placement_constraints}
  */
  readonly placementConstraints?: AwsEcsService.PlacementConstraintsProperty[] | cdktn.IResolvable;
  /**
  * service_connect_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#service_connect_configuration AwsEcsService#service_connect_configuration}
  */
  readonly serviceConnectConfiguration?: AwsEcsService.ServiceConnectConfigurationProperty;
  /**
  * service_registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#service_registries AwsEcsService#service_registries}
  */
  readonly serviceRegistries?: AwsEcsService.ServiceRegistriesProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#timeouts AwsEcsService#timeouts}
  */
  readonly timeouts?: AwsEcsService.TimeoutsProperty;
  /**
  * volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#volume_configuration AwsEcsService#volume_configuration}
  */
  readonly volumeConfiguration?: AwsEcsService.VolumeConfigurationProperty;
  /**
  * vpc_lattice_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#vpc_lattice_configurations AwsEcsService#vpc_lattice_configurations}
  */
  readonly vpcLatticeConfigurations?: AwsEcsService.VpcLatticeConfigurationsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service aws_ecs_service}
*/
export class AwsEcsService extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsEcsService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsEcsService to import
  * @param importFromId The id of the existing AwsEcsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsEcsService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service aws_ecs_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsEcsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: AwsEcsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_service',
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
    this._availabilityZoneRebalancing = config.availabilityZoneRebalancing;
    this._cluster = config.cluster;
    this._deploymentMaximumPercent = config.deploymentMaximumPercent;
    this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
    this._desiredCount = config.desiredCount;
    this._enableEcsManagedTags = config.enableEcsManagedTags;
    this._enableExecuteCommand = config.enableExecuteCommand;
    this._forceDelete = config.forceDelete;
    this._forceNewDeployment = config.forceNewDeployment;
    this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
    this._iamRole = config.iamRole;
    this._id = config.id;
    this._launchType = config.launchType;
    this._name = config.name;
    this._platformVersion = config.platformVersion;
    this._propagateTags = config.propagateTags;
    this._region = config.region;
    this._schedulingStrategy = config.schedulingStrategy;
    this._sigintRollback = config.sigintRollback;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._taskDefinition = config.taskDefinition;
    this._triggers = config.triggers;
    this._waitForSteadyState = config.waitForSteadyState;
    this._alarms.internalValue = config.alarms;
    this._capacityProviderStrategy.internalValue = config.capacityProviderStrategy;
    this._deploymentCircuitBreaker.internalValue = config.deploymentCircuitBreaker;
    this._deploymentConfiguration.internalValue = config.deploymentConfiguration;
    this._deploymentController.internalValue = config.deploymentController;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._orderedPlacementStrategy.internalValue = config.orderedPlacementStrategy;
    this._placementConstraints.internalValue = config.placementConstraints;
    this._serviceConnectConfiguration.internalValue = config.serviceConnectConfiguration;
    this._serviceRegistries.internalValue = config.serviceRegistries;
    this._timeouts.internalValue = config.timeouts;
    this._volumeConfiguration.internalValue = config.volumeConfiguration;
    this._vpcLatticeConfigurations.internalValue = config.vpcLatticeConfigurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_rebalancing - computed: true, optional: true, required: false
  private _availabilityZoneRebalancing?: string; 
  public get availabilityZoneRebalancing() {
    return this.getStringAttribute('availability_zone_rebalancing');
  }
  public set availabilityZoneRebalancing(value: string) {
    this._availabilityZoneRebalancing = value;
  }
  public resetAvailabilityZoneRebalancing() {
    this._availabilityZoneRebalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneRebalancingInput() {
    return this._availabilityZoneRebalancing;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // deployment_maximum_percent - computed: false, optional: true, required: false
  private _deploymentMaximumPercent?: number; 
  public get deploymentMaximumPercent() {
    return this.getNumberAttribute('deployment_maximum_percent');
  }
  public set deploymentMaximumPercent(value: number) {
    this._deploymentMaximumPercent = value;
  }
  public resetDeploymentMaximumPercent() {
    this._deploymentMaximumPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMaximumPercentInput() {
    return this._deploymentMaximumPercent;
  }

  // deployment_minimum_healthy_percent - computed: false, optional: true, required: false
  private _deploymentMinimumHealthyPercent?: number; 
  public get deploymentMinimumHealthyPercent() {
    return this.getNumberAttribute('deployment_minimum_healthy_percent');
  }
  public set deploymentMinimumHealthyPercent(value: number) {
    this._deploymentMinimumHealthyPercent = value;
  }
  public resetDeploymentMinimumHealthyPercent() {
    this._deploymentMinimumHealthyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMinimumHealthyPercentInput() {
    return this._deploymentMinimumHealthyPercent;
  }

  // desired_count - computed: false, optional: true, required: false
  private _desiredCount?: number; 
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }
  public set desiredCount(value: number) {
    this._desiredCount = value;
  }
  public resetDesiredCount() {
    this._desiredCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCountInput() {
    return this._desiredCount;
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean | cdktn.IResolvable; 
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }
  public set enableEcsManagedTags(value: boolean | cdktn.IResolvable) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags;
  }

  // enable_execute_command - computed: false, optional: true, required: false
  private _enableExecuteCommand?: boolean | cdktn.IResolvable; 
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }
  public set enableExecuteCommand(value: boolean | cdktn.IResolvable) {
    this._enableExecuteCommand = value;
  }
  public resetEnableExecuteCommand() {
    this._enableExecuteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecuteCommandInput() {
    return this._enableExecuteCommand;
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

  // force_new_deployment - computed: false, optional: true, required: false
  private _forceNewDeployment?: boolean | cdktn.IResolvable; 
  public get forceNewDeployment() {
    return this.getBooleanAttribute('force_new_deployment');
  }
  public set forceNewDeployment(value: boolean | cdktn.IResolvable) {
    this._forceNewDeployment = value;
  }
  public resetForceNewDeployment() {
    this._forceNewDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNewDeploymentInput() {
    return this._forceNewDeployment;
  }

  // health_check_grace_period_seconds - computed: false, optional: true, required: false
  private _healthCheckGracePeriodSeconds?: number; 
  public get healthCheckGracePeriodSeconds() {
    return this.getNumberAttribute('health_check_grace_period_seconds');
  }
  public set healthCheckGracePeriodSeconds(value: number) {
    this._healthCheckGracePeriodSeconds = value;
  }
  public resetHealthCheckGracePeriodSeconds() {
    this._healthCheckGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodSecondsInput() {
    return this._healthCheckGracePeriodSeconds;
  }

  // iam_role - computed: true, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
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

  // launch_type - computed: true, optional: true, required: false
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
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

  // platform_version - computed: true, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
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

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy?: string; 
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }
  public set schedulingStrategy(value: string) {
    this._schedulingStrategy = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy;
  }

  // sigint_rollback - computed: false, optional: true, required: false
  private _sigintRollback?: boolean | cdktn.IResolvable; 
  public get sigintRollback() {
    return this.getBooleanAttribute('sigint_rollback');
  }
  public set sigintRollback(value: boolean | cdktn.IResolvable) {
    this._sigintRollback = value;
  }
  public resetSigintRollback() {
    this._sigintRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigintRollbackInput() {
    return this._sigintRollback;
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

  // task_definition - computed: false, optional: true, required: false
  private _taskDefinition?: string; 
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
  }
  public resetTaskDefinition() {
    this._taskDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionInput() {
    return this._taskDefinition;
  }

  // triggers - computed: true, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // wait_for_steady_state - computed: false, optional: true, required: false
  private _waitForSteadyState?: boolean | cdktn.IResolvable; 
  public get waitForSteadyState() {
    return this.getBooleanAttribute('wait_for_steady_state');
  }
  public set waitForSteadyState(value: boolean | cdktn.IResolvable) {
    this._waitForSteadyState = value;
  }
  public resetWaitForSteadyState() {
    this._waitForSteadyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSteadyStateInput() {
    return this._waitForSteadyState;
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms = new AwsEcsService.AlarmsPropertyOutputReference(this, "alarms");
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: AwsEcsService.AlarmsProperty) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy = new AwsEcsService.CapacityProviderStrategyPropertyList(this, "capacity_provider_strategy", true);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public putCapacityProviderStrategy(value: AwsEcsService.CapacityProviderStrategyProperty[] | cdktn.IResolvable) {
    this._capacityProviderStrategy.internalValue = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy.internalValue;
  }

  // deployment_circuit_breaker - computed: false, optional: true, required: false
  private _deploymentCircuitBreaker = new AwsEcsService.DeploymentCircuitBreakerPropertyOutputReference(this, "deployment_circuit_breaker");
  public get deploymentCircuitBreaker() {
    return this._deploymentCircuitBreaker;
  }
  public putDeploymentCircuitBreaker(value: AwsEcsService.DeploymentCircuitBreakerProperty) {
    this._deploymentCircuitBreaker.internalValue = value;
  }
  public resetDeploymentCircuitBreaker() {
    this._deploymentCircuitBreaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentCircuitBreakerInput() {
    return this._deploymentCircuitBreaker.internalValue;
  }

  // deployment_configuration - computed: false, optional: true, required: false
  private _deploymentConfiguration = new AwsEcsService.DeploymentConfigurationPropertyOutputReference(this, "deployment_configuration");
  public get deploymentConfiguration() {
    return this._deploymentConfiguration;
  }
  public putDeploymentConfiguration(value: AwsEcsService.DeploymentConfigurationProperty) {
    this._deploymentConfiguration.internalValue = value;
  }
  public resetDeploymentConfiguration() {
    this._deploymentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigurationInput() {
    return this._deploymentConfiguration.internalValue;
  }

  // deployment_controller - computed: false, optional: true, required: false
  private _deploymentController = new AwsEcsService.DeploymentControllerPropertyOutputReference(this, "deployment_controller");
  public get deploymentController() {
    return this._deploymentController;
  }
  public putDeploymentController(value: AwsEcsService.DeploymentControllerProperty) {
    this._deploymentController.internalValue = value;
  }
  public resetDeploymentController() {
    this._deploymentController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentControllerInput() {
    return this._deploymentController.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new AwsEcsService.LoadBalancerPropertyList(this, "load_balancer", true);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: AwsEcsService.LoadBalancerProperty[] | cdktn.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new AwsEcsService.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: AwsEcsService.NetworkConfigurationProperty) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // ordered_placement_strategy - computed: false, optional: true, required: false
  private _orderedPlacementStrategy = new AwsEcsService.OrderedPlacementStrategyPropertyList(this, "ordered_placement_strategy", false);
  public get orderedPlacementStrategy() {
    return this._orderedPlacementStrategy;
  }
  public putOrderedPlacementStrategy(value: AwsEcsService.OrderedPlacementStrategyProperty[] | cdktn.IResolvable) {
    this._orderedPlacementStrategy.internalValue = value;
  }
  public resetOrderedPlacementStrategy() {
    this._orderedPlacementStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedPlacementStrategyInput() {
    return this._orderedPlacementStrategy.internalValue;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints = new AwsEcsService.PlacementConstraintsPropertyList(this, "placement_constraints", true);
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public putPlacementConstraints(value: AwsEcsService.PlacementConstraintsProperty[] | cdktn.IResolvable) {
    this._placementConstraints.internalValue = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints.internalValue;
  }

  // service_connect_configuration - computed: false, optional: true, required: false
  private _serviceConnectConfiguration = new AwsEcsService.ServiceConnectConfigurationPropertyOutputReference(this, "service_connect_configuration");
  public get serviceConnectConfiguration() {
    return this._serviceConnectConfiguration;
  }
  public putServiceConnectConfiguration(value: AwsEcsService.ServiceConnectConfigurationProperty) {
    this._serviceConnectConfiguration.internalValue = value;
  }
  public resetServiceConnectConfiguration() {
    this._serviceConnectConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectConfigurationInput() {
    return this._serviceConnectConfiguration.internalValue;
  }

  // service_registries - computed: false, optional: true, required: false
  private _serviceRegistries = new AwsEcsService.ServiceRegistriesPropertyOutputReference(this, "service_registries");
  public get serviceRegistries() {
    return this._serviceRegistries;
  }
  public putServiceRegistries(value: AwsEcsService.ServiceRegistriesProperty) {
    this._serviceRegistries.internalValue = value;
  }
  public resetServiceRegistries() {
    this._serviceRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistriesInput() {
    return this._serviceRegistries.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsEcsService.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsEcsService.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume_configuration - computed: false, optional: true, required: false
  private _volumeConfiguration = new AwsEcsService.VolumeConfigurationPropertyOutputReference(this, "volume_configuration");
  public get volumeConfiguration() {
    return this._volumeConfiguration;
  }
  public putVolumeConfiguration(value: AwsEcsService.VolumeConfigurationProperty) {
    this._volumeConfiguration.internalValue = value;
  }
  public resetVolumeConfiguration() {
    this._volumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeConfigurationInput() {
    return this._volumeConfiguration.internalValue;
  }

  // vpc_lattice_configurations - computed: false, optional: true, required: false
  private _vpcLatticeConfigurations = new AwsEcsService.VpcLatticeConfigurationsPropertyList(this, "vpc_lattice_configurations", true);
  public get vpcLatticeConfigurations() {
    return this._vpcLatticeConfigurations;
  }
  public putVpcLatticeConfigurations(value: AwsEcsService.VpcLatticeConfigurationsProperty[] | cdktn.IResolvable) {
    this._vpcLatticeConfigurations.internalValue = value;
  }
  public resetVpcLatticeConfigurations() {
    this._vpcLatticeConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcLatticeConfigurationsInput() {
    return this._vpcLatticeConfigurations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_rebalancing: cdktn.stringToTerraform(this._availabilityZoneRebalancing),
      cluster: cdktn.stringToTerraform(this._cluster),
      deployment_maximum_percent: cdktn.numberToTerraform(this._deploymentMaximumPercent),
      deployment_minimum_healthy_percent: cdktn.numberToTerraform(this._deploymentMinimumHealthyPercent),
      desired_count: cdktn.numberToTerraform(this._desiredCount),
      enable_ecs_managed_tags: cdktn.booleanToTerraform(this._enableEcsManagedTags),
      enable_execute_command: cdktn.booleanToTerraform(this._enableExecuteCommand),
      force_delete: cdktn.booleanToTerraform(this._forceDelete),
      force_new_deployment: cdktn.booleanToTerraform(this._forceNewDeployment),
      health_check_grace_period_seconds: cdktn.numberToTerraform(this._healthCheckGracePeriodSeconds),
      iam_role: cdktn.stringToTerraform(this._iamRole),
      id: cdktn.stringToTerraform(this._id),
      launch_type: cdktn.stringToTerraform(this._launchType),
      name: cdktn.stringToTerraform(this._name),
      platform_version: cdktn.stringToTerraform(this._platformVersion),
      propagate_tags: cdktn.stringToTerraform(this._propagateTags),
      region: cdktn.stringToTerraform(this._region),
      scheduling_strategy: cdktn.stringToTerraform(this._schedulingStrategy),
      sigint_rollback: cdktn.booleanToTerraform(this._sigintRollback),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      task_definition: cdktn.stringToTerraform(this._taskDefinition),
      triggers: cdktn.hashMapper(cdktn.stringToTerraform)(this._triggers),
      wait_for_steady_state: cdktn.booleanToTerraform(this._waitForSteadyState),
      alarms: awsEcsServiceAlarmsPropertyToTerraform(this._alarms.internalValue),
      capacity_provider_strategy: cdktn.listMapper(awsEcsServiceCapacityProviderStrategyPropertyToTerraform, true)(this._capacityProviderStrategy.internalValue),
      deployment_circuit_breaker: awsEcsServiceDeploymentCircuitBreakerPropertyToTerraform(this._deploymentCircuitBreaker.internalValue),
      deployment_configuration: awsEcsServiceDeploymentConfigurationPropertyToTerraform(this._deploymentConfiguration.internalValue),
      deployment_controller: awsEcsServiceDeploymentControllerPropertyToTerraform(this._deploymentController.internalValue),
      load_balancer: cdktn.listMapper(awsEcsServiceLoadBalancerPropertyToTerraform, true)(this._loadBalancer.internalValue),
      network_configuration: awsEcsServiceNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
      ordered_placement_strategy: cdktn.listMapper(awsEcsServiceOrderedPlacementStrategyPropertyToTerraform, true)(this._orderedPlacementStrategy.internalValue),
      placement_constraints: cdktn.listMapper(awsEcsServicePlacementConstraintsPropertyToTerraform, true)(this._placementConstraints.internalValue),
      service_connect_configuration: awsEcsServiceServiceConnectConfigurationPropertyToTerraform(this._serviceConnectConfiguration.internalValue),
      service_registries: awsEcsServiceServiceRegistriesPropertyToTerraform(this._serviceRegistries.internalValue),
      timeouts: awsEcsServiceTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      volume_configuration: awsEcsServiceVolumeConfigurationPropertyToTerraform(this._volumeConfiguration.internalValue),
      vpc_lattice_configurations: cdktn.listMapper(awsEcsServiceVpcLatticeConfigurationsPropertyToTerraform, true)(this._vpcLatticeConfigurations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_rebalancing: {
        value: cdktn.stringToHclTerraform(this._availabilityZoneRebalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktn.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_maximum_percent: {
        value: cdktn.numberToHclTerraform(this._deploymentMaximumPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment_minimum_healthy_percent: {
        value: cdktn.numberToHclTerraform(this._deploymentMinimumHealthyPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_count: {
        value: cdktn.numberToHclTerraform(this._desiredCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_ecs_managed_tags: {
        value: cdktn.booleanToHclTerraform(this._enableEcsManagedTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_execute_command: {
        value: cdktn.booleanToHclTerraform(this._enableExecuteCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktn.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_new_deployment: {
        value: cdktn.booleanToHclTerraform(this._forceNewDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_grace_period_seconds: {
        value: cdktn.numberToHclTerraform(this._healthCheckGracePeriodSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iam_role: {
        value: cdktn.stringToHclTerraform(this._iamRole),
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
      launch_type: {
        value: cdktn.stringToHclTerraform(this._launchType),
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
      platform_version: {
        value: cdktn.stringToHclTerraform(this._platformVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_tags: {
        value: cdktn.stringToHclTerraform(this._propagateTags),
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
      scheduling_strategy: {
        value: cdktn.stringToHclTerraform(this._schedulingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sigint_rollback: {
        value: cdktn.booleanToHclTerraform(this._sigintRollback),
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
      task_definition: {
        value: cdktn.stringToHclTerraform(this._taskDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      wait_for_steady_state: {
        value: cdktn.booleanToHclTerraform(this._waitForSteadyState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alarms: {
        value: awsEcsServiceAlarmsPropertyToHclTerraform(this._alarms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.AlarmsPropertyList",
      },
      capacity_provider_strategy: {
        value: cdktn.listMapperHcl(awsEcsServiceCapacityProviderStrategyPropertyToHclTerraform, true)(this._capacityProviderStrategy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsEcsService.CapacityProviderStrategyPropertyList",
      },
      deployment_circuit_breaker: {
        value: awsEcsServiceDeploymentCircuitBreakerPropertyToHclTerraform(this._deploymentCircuitBreaker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.DeploymentCircuitBreakerPropertyList",
      },
      deployment_configuration: {
        value: awsEcsServiceDeploymentConfigurationPropertyToHclTerraform(this._deploymentConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.DeploymentConfigurationPropertyList",
      },
      deployment_controller: {
        value: awsEcsServiceDeploymentControllerPropertyToHclTerraform(this._deploymentController.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.DeploymentControllerPropertyList",
      },
      load_balancer: {
        value: cdktn.listMapperHcl(awsEcsServiceLoadBalancerPropertyToHclTerraform, true)(this._loadBalancer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsEcsService.LoadBalancerPropertyList",
      },
      network_configuration: {
        value: awsEcsServiceNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.NetworkConfigurationPropertyList",
      },
      ordered_placement_strategy: {
        value: cdktn.listMapperHcl(awsEcsServiceOrderedPlacementStrategyPropertyToHclTerraform, true)(this._orderedPlacementStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.OrderedPlacementStrategyPropertyList",
      },
      placement_constraints: {
        value: cdktn.listMapperHcl(awsEcsServicePlacementConstraintsPropertyToHclTerraform, true)(this._placementConstraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsEcsService.PlacementConstraintsPropertyList",
      },
      service_connect_configuration: {
        value: awsEcsServiceServiceConnectConfigurationPropertyToHclTerraform(this._serviceConnectConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.ServiceConnectConfigurationPropertyList",
      },
      service_registries: {
        value: awsEcsServiceServiceRegistriesPropertyToHclTerraform(this._serviceRegistries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.ServiceRegistriesPropertyList",
      },
      timeouts: {
        value: awsEcsServiceTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsEcsService.TimeoutsProperty",
      },
      volume_configuration: {
        value: awsEcsServiceVolumeConfigurationPropertyToHclTerraform(this._volumeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEcsService.VolumeConfigurationPropertyList",
      },
      vpc_lattice_configurations: {
        value: cdktn.listMapperHcl(awsEcsServiceVpcLatticeConfigurationsPropertyToHclTerraform, true)(this._vpcLatticeConfigurations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsEcsService.VpcLatticeConfigurationsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsEcsServiceAlarmsPropertyToTerraform(struct?: AwsEcsService.AlarmsPropertyOutputReference | AwsEcsService.AlarmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alarmNames),
    enable: cdktn.booleanToTerraform(struct!.enable),
    rollback: cdktn.booleanToTerraform(struct!.rollback),
  }
}


export function awsEcsServiceAlarmsPropertyToHclTerraform(struct?: AwsEcsService.AlarmsPropertyOutputReference | AwsEcsService.AlarmsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alarmNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollback: {
      value: cdktn.booleanToHclTerraform(struct!.rollback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceCapacityProviderStrategyPropertyToTerraform(struct?: AwsEcsService.CapacityProviderStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: cdktn.numberToTerraform(struct!.base),
    capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsEcsServiceCapacityProviderStrategyPropertyToHclTerraform(struct?: AwsEcsService.CapacityProviderStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: cdktn.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_provider: {
      value: cdktn.stringToHclTerraform(struct!.capacityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceDeploymentCircuitBreakerPropertyToTerraform(struct?: AwsEcsService.DeploymentCircuitBreakerPropertyOutputReference | AwsEcsService.DeploymentCircuitBreakerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable: cdktn.booleanToTerraform(struct!.enable),
    rollback: cdktn.booleanToTerraform(struct!.rollback),
  }
}


export function awsEcsServiceDeploymentCircuitBreakerPropertyToHclTerraform(struct?: AwsEcsService.DeploymentCircuitBreakerPropertyOutputReference | AwsEcsService.DeploymentCircuitBreakerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollback: {
      value: cdktn.booleanToHclTerraform(struct!.rollback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceCanaryConfigurationPropertyToTerraform(struct?: AwsEcsService.CanaryConfigurationPropertyOutputReference | AwsEcsService.CanaryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canary_bake_time_in_minutes: cdktn.stringToTerraform(struct!.canaryBakeTimeInMinutes),
    canary_percent: cdktn.numberToTerraform(struct!.canaryPercent),
  }
}


export function awsEcsServiceCanaryConfigurationPropertyToHclTerraform(struct?: AwsEcsService.CanaryConfigurationPropertyOutputReference | AwsEcsService.CanaryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canary_bake_time_in_minutes: {
      value: cdktn.stringToHclTerraform(struct!.canaryBakeTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canary_percent: {
      value: cdktn.numberToHclTerraform(struct!.canaryPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceLifecycleHookPropertyToTerraform(struct?: AwsEcsService.LifecycleHookProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hook_details: cdktn.stringToTerraform(struct!.hookDetails),
    hook_target_arn: cdktn.stringToTerraform(struct!.hookTargetArn),
    lifecycle_stages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleStages),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function awsEcsServiceLifecycleHookPropertyToHclTerraform(struct?: AwsEcsService.LifecycleHookProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hook_details: {
      value: cdktn.stringToHclTerraform(struct!.hookDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hook_target_arn: {
      value: cdktn.stringToHclTerraform(struct!.hookTargetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_stages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleStages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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


export function awsEcsServiceLinearConfigurationPropertyToTerraform(struct?: AwsEcsService.LinearConfigurationPropertyOutputReference | AwsEcsService.LinearConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    step_bake_time_in_minutes: cdktn.stringToTerraform(struct!.stepBakeTimeInMinutes),
    step_percent: cdktn.numberToTerraform(struct!.stepPercent),
  }
}


export function awsEcsServiceLinearConfigurationPropertyToHclTerraform(struct?: AwsEcsService.LinearConfigurationPropertyOutputReference | AwsEcsService.LinearConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    step_bake_time_in_minutes: {
      value: cdktn.stringToHclTerraform(struct!.stepBakeTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_percent: {
      value: cdktn.numberToHclTerraform(struct!.stepPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceDeploymentConfigurationPropertyToTerraform(struct?: AwsEcsService.DeploymentConfigurationPropertyOutputReference | AwsEcsService.DeploymentConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bake_time_in_minutes: cdktn.stringToTerraform(struct!.bakeTimeInMinutes),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    canary_configuration: awsEcsServiceCanaryConfigurationPropertyToTerraform(struct!.canaryConfiguration),
    lifecycle_hook: cdktn.listMapper(awsEcsServiceLifecycleHookPropertyToTerraform, true)(struct!.lifecycleHook),
    linear_configuration: awsEcsServiceLinearConfigurationPropertyToTerraform(struct!.linearConfiguration),
  }
}


export function awsEcsServiceDeploymentConfigurationPropertyToHclTerraform(struct?: AwsEcsService.DeploymentConfigurationPropertyOutputReference | AwsEcsService.DeploymentConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bake_time_in_minutes: {
      value: cdktn.stringToHclTerraform(struct!.bakeTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canary_configuration: {
      value: awsEcsServiceCanaryConfigurationPropertyToHclTerraform(struct!.canaryConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CanaryConfigurationPropertyList",
    },
    lifecycle_hook: {
      value: cdktn.listMapperHcl(awsEcsServiceLifecycleHookPropertyToHclTerraform, true)(struct!.lifecycleHook),
      isBlock: true,
      type: "set",
      storageClassType: "LifecycleHookPropertyList",
    },
    linear_configuration: {
      value: awsEcsServiceLinearConfigurationPropertyToHclTerraform(struct!.linearConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LinearConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceDeploymentControllerPropertyToTerraform(struct?: AwsEcsService.DeploymentControllerPropertyOutputReference | AwsEcsService.DeploymentControllerProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsEcsServiceDeploymentControllerPropertyToHclTerraform(struct?: AwsEcsService.DeploymentControllerPropertyOutputReference | AwsEcsService.DeploymentControllerProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceAdvancedConfigurationPropertyToTerraform(struct?: AwsEcsService.AdvancedConfigurationPropertyOutputReference | AwsEcsService.AdvancedConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alternate_target_group_arn: cdktn.stringToTerraform(struct!.alternateTargetGroupArn),
    production_listener_rule: cdktn.stringToTerraform(struct!.productionListenerRule),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    test_listener_rule: cdktn.stringToTerraform(struct!.testListenerRule),
  }
}


export function awsEcsServiceAdvancedConfigurationPropertyToHclTerraform(struct?: AwsEcsService.AdvancedConfigurationPropertyOutputReference | AwsEcsService.AdvancedConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alternate_target_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.alternateTargetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    production_listener_rule: {
      value: cdktn.stringToHclTerraform(struct!.productionListenerRule),
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
    test_listener_rule: {
      value: cdktn.stringToHclTerraform(struct!.testListenerRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceLoadBalancerPropertyToTerraform(struct?: AwsEcsService.LoadBalancerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_name: cdktn.stringToTerraform(struct!.containerName),
    container_port: cdktn.numberToTerraform(struct!.containerPort),
    elb_name: cdktn.stringToTerraform(struct!.elbName),
    target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
    advanced_configuration: awsEcsServiceAdvancedConfigurationPropertyToTerraform(struct!.advancedConfiguration),
  }
}


export function awsEcsServiceLoadBalancerPropertyToHclTerraform(struct?: AwsEcsService.LoadBalancerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port: {
      value: cdktn.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elb_name: {
      value: cdktn.stringToHclTerraform(struct!.elbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_configuration: {
      value: awsEcsServiceAdvancedConfigurationPropertyToHclTerraform(struct!.advancedConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceNetworkConfigurationPropertyToTerraform(struct?: AwsEcsService.NetworkConfigurationPropertyOutputReference | AwsEcsService.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assign_public_ip: cdktn.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function awsEcsServiceNetworkConfigurationPropertyToHclTerraform(struct?: AwsEcsService.NetworkConfigurationPropertyOutputReference | AwsEcsService.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktn.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceOrderedPlacementStrategyPropertyToTerraform(struct?: AwsEcsService.OrderedPlacementStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsEcsServiceOrderedPlacementStrategyPropertyToHclTerraform(struct?: AwsEcsService.OrderedPlacementStrategyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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


export function awsEcsServicePlacementConstraintsPropertyToTerraform(struct?: AwsEcsService.PlacementConstraintsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsEcsServicePlacementConstraintsPropertyToHclTerraform(struct?: AwsEcsService.PlacementConstraintsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
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


export function awsEcsServiceAccessLogConfigurationPropertyToTerraform(struct?: AwsEcsService.AccessLogConfigurationPropertyOutputReference | AwsEcsService.AccessLogConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    include_query_parameters: cdktn.stringToTerraform(struct!.includeQueryParameters),
  }
}


export function awsEcsServiceAccessLogConfigurationPropertyToHclTerraform(struct?: AwsEcsService.AccessLogConfigurationPropertyOutputReference | AwsEcsService.AccessLogConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_query_parameters: {
      value: cdktn.stringToHclTerraform(struct!.includeQueryParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceSecretOptionPropertyToTerraform(struct?: AwsEcsService.SecretOptionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function awsEcsServiceSecretOptionPropertyToHclTerraform(struct?: AwsEcsService.SecretOptionProperty | cdktn.IResolvable): any {
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
    value_from: {
      value: cdktn.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceLogConfigurationPropertyToTerraform(struct?: AwsEcsService.LogConfigurationPropertyOutputReference | AwsEcsService.LogConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_driver: cdktn.stringToTerraform(struct!.logDriver),
    options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
    secret_option: cdktn.listMapper(awsEcsServiceSecretOptionPropertyToTerraform, true)(struct!.secretOption),
  }
}


export function awsEcsServiceLogConfigurationPropertyToHclTerraform(struct?: AwsEcsService.LogConfigurationPropertyOutputReference | AwsEcsService.LogConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_driver: {
      value: cdktn.stringToHclTerraform(struct!.logDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_option: {
      value: cdktn.listMapperHcl(awsEcsServiceSecretOptionPropertyToHclTerraform, true)(struct!.secretOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecretOptionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceValuePropertyToTerraform(struct?: AwsEcsService.ValuePropertyOutputReference | AwsEcsService.ValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact: cdktn.stringToTerraform(struct!.exact),
  }
}


export function awsEcsServiceValuePropertyToHclTerraform(struct?: AwsEcsService.ValuePropertyOutputReference | AwsEcsService.ValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceHeaderPropertyToTerraform(struct?: AwsEcsService.HeaderPropertyOutputReference | AwsEcsService.HeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: awsEcsServiceValuePropertyToTerraform(struct!.value),
  }
}


export function awsEcsServiceHeaderPropertyToHclTerraform(struct?: AwsEcsService.HeaderPropertyOutputReference | AwsEcsService.HeaderProperty): any {
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
    value: {
      value: awsEcsServiceValuePropertyToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ValuePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceTestTrafficRulesPropertyToTerraform(struct?: AwsEcsService.TestTrafficRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: awsEcsServiceHeaderPropertyToTerraform(struct!.header),
  }
}


export function awsEcsServiceTestTrafficRulesPropertyToHclTerraform(struct?: AwsEcsService.TestTrafficRulesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: awsEcsServiceHeaderPropertyToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "HeaderPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceClientAliasPropertyToTerraform(struct?: AwsEcsService.ClientAliasPropertyOutputReference | AwsEcsService.ClientAliasProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dns_name: cdktn.stringToTerraform(struct!.dnsName),
    port: cdktn.numberToTerraform(struct!.port),
    test_traffic_rules: cdktn.listMapper(awsEcsServiceTestTrafficRulesPropertyToTerraform, true)(struct!.testTrafficRules),
  }
}


export function awsEcsServiceClientAliasPropertyToHclTerraform(struct?: AwsEcsService.ClientAliasPropertyOutputReference | AwsEcsService.ClientAliasProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dns_name: {
      value: cdktn.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_traffic_rules: {
      value: cdktn.listMapperHcl(awsEcsServiceTestTrafficRulesPropertyToHclTerraform, true)(struct!.testTrafficRules),
      isBlock: true,
      type: "list",
      storageClassType: "TestTrafficRulesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceTimeoutPropertyToTerraform(struct?: AwsEcsService.TimeoutPropertyOutputReference | AwsEcsService.TimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_timeout_seconds: cdktn.numberToTerraform(struct!.idleTimeoutSeconds),
    per_request_timeout_seconds: cdktn.numberToTerraform(struct!.perRequestTimeoutSeconds),
  }
}


export function awsEcsServiceTimeoutPropertyToHclTerraform(struct?: AwsEcsService.TimeoutPropertyOutputReference | AwsEcsService.TimeoutProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_request_timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.perRequestTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceIssuerCertAuthorityPropertyToTerraform(struct?: AwsEcsService.IssuerCertAuthorityPropertyOutputReference | AwsEcsService.IssuerCertAuthorityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_pca_authority_arn: cdktn.stringToTerraform(struct!.awsPcaAuthorityArn),
  }
}


export function awsEcsServiceIssuerCertAuthorityPropertyToHclTerraform(struct?: AwsEcsService.IssuerCertAuthorityPropertyOutputReference | AwsEcsService.IssuerCertAuthorityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_pca_authority_arn: {
      value: cdktn.stringToHclTerraform(struct!.awsPcaAuthorityArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceTlsPropertyToTerraform(struct?: AwsEcsService.TlsPropertyOutputReference | AwsEcsService.TlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    issuer_cert_authority: awsEcsServiceIssuerCertAuthorityPropertyToTerraform(struct!.issuerCertAuthority),
  }
}


export function awsEcsServiceTlsPropertyToHclTerraform(struct?: AwsEcsService.TlsPropertyOutputReference | AwsEcsService.TlsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
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
    issuer_cert_authority: {
      value: awsEcsServiceIssuerCertAuthorityPropertyToHclTerraform(struct!.issuerCertAuthority),
      isBlock: true,
      type: "list",
      storageClassType: "IssuerCertAuthorityPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceServicePropertyToTerraform(struct?: AwsEcsService.ServiceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    discovery_name: cdktn.stringToTerraform(struct!.discoveryName),
    ingress_port_override: cdktn.numberToTerraform(struct!.ingressPortOverride),
    port_name: cdktn.stringToTerraform(struct!.portName),
    client_alias: awsEcsServiceClientAliasPropertyToTerraform(struct!.clientAlias),
    timeout: awsEcsServiceTimeoutPropertyToTerraform(struct!.timeout),
    tls: awsEcsServiceTlsPropertyToTerraform(struct!.tls),
  }
}


export function awsEcsServiceServicePropertyToHclTerraform(struct?: AwsEcsService.ServiceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    discovery_name: {
      value: cdktn.stringToHclTerraform(struct!.discoveryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_port_override: {
      value: cdktn.numberToHclTerraform(struct!.ingressPortOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_name: {
      value: cdktn.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_alias: {
      value: awsEcsServiceClientAliasPropertyToHclTerraform(struct!.clientAlias),
      isBlock: true,
      type: "list",
      storageClassType: "ClientAliasPropertyList",
    },
    timeout: {
      value: awsEcsServiceTimeoutPropertyToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "TimeoutPropertyList",
    },
    tls: {
      value: awsEcsServiceTlsPropertyToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "TlsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceServiceConnectConfigurationPropertyToTerraform(struct?: AwsEcsService.ServiceConnectConfigurationPropertyOutputReference | AwsEcsService.ServiceConnectConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    access_log_configuration: awsEcsServiceAccessLogConfigurationPropertyToTerraform(struct!.accessLogConfiguration),
    log_configuration: awsEcsServiceLogConfigurationPropertyToTerraform(struct!.logConfiguration),
    service: cdktn.listMapper(awsEcsServiceServicePropertyToTerraform, true)(struct!.service),
  }
}


export function awsEcsServiceServiceConnectConfigurationPropertyToHclTerraform(struct?: AwsEcsService.ServiceConnectConfigurationPropertyOutputReference | AwsEcsService.ServiceConnectConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_log_configuration: {
      value: awsEcsServiceAccessLogConfigurationPropertyToHclTerraform(struct!.accessLogConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AccessLogConfigurationPropertyList",
    },
    log_configuration: {
      value: awsEcsServiceLogConfigurationPropertyToHclTerraform(struct!.logConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LogConfigurationPropertyList",
    },
    service: {
      value: cdktn.listMapperHcl(awsEcsServiceServicePropertyToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceServiceRegistriesPropertyToTerraform(struct?: AwsEcsService.ServiceRegistriesPropertyOutputReference | AwsEcsService.ServiceRegistriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_name: cdktn.stringToTerraform(struct!.containerName),
    container_port: cdktn.numberToTerraform(struct!.containerPort),
    port: cdktn.numberToTerraform(struct!.port),
    registry_arn: cdktn.stringToTerraform(struct!.registryArn),
  }
}


export function awsEcsServiceServiceRegistriesPropertyToHclTerraform(struct?: AwsEcsService.ServiceRegistriesPropertyOutputReference | AwsEcsService.ServiceRegistriesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port: {
      value: cdktn.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registry_arn: {
      value: cdktn.stringToHclTerraform(struct!.registryArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceTimeoutsPropertyToTerraform(struct?: AwsEcsService.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsEcsServiceTimeoutsPropertyToHclTerraform(struct?: AwsEcsService.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsEcsServiceTagSpecificationsPropertyToTerraform(struct?: AwsEcsService.TagSpecificationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
  }
}


export function awsEcsServiceTagSpecificationsPropertyToHclTerraform(struct?: AwsEcsService.TagSpecificationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    propagate_tags: {
      value: cdktn.stringToHclTerraform(struct!.propagateTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceManagedEbsVolumePropertyToTerraform(struct?: AwsEcsService.ManagedEbsVolumePropertyOutputReference | AwsEcsService.ManagedEbsVolumeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encrypted: cdktn.booleanToTerraform(struct!.encrypted),
    file_system_type: cdktn.stringToTerraform(struct!.fileSystemType),
    iops: cdktn.numberToTerraform(struct!.iops),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    size_in_gb: cdktn.numberToTerraform(struct!.sizeInGb),
    snapshot_id: cdktn.stringToTerraform(struct!.snapshotId),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    volume_initialization_rate: cdktn.numberToTerraform(struct!.volumeInitializationRate),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
    tag_specifications: cdktn.listMapper(awsEcsServiceTagSpecificationsPropertyToTerraform, true)(struct!.tagSpecifications),
  }
}


export function awsEcsServiceManagedEbsVolumePropertyToHclTerraform(struct?: AwsEcsService.ManagedEbsVolumePropertyOutputReference | AwsEcsService.ManagedEbsVolumeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encrypted: {
      value: cdktn.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_system_type: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.sizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    volume_initialization_rate: {
      value: cdktn.numberToHclTerraform(struct!.volumeInitializationRate),
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
    tag_specifications: {
      value: cdktn.listMapperHcl(awsEcsServiceTagSpecificationsPropertyToHclTerraform, true)(struct!.tagSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "TagSpecificationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceVolumeConfigurationPropertyToTerraform(struct?: AwsEcsService.VolumeConfigurationPropertyOutputReference | AwsEcsService.VolumeConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    managed_ebs_volume: awsEcsServiceManagedEbsVolumePropertyToTerraform(struct!.managedEbsVolume),
  }
}


export function awsEcsServiceVolumeConfigurationPropertyToHclTerraform(struct?: AwsEcsService.VolumeConfigurationPropertyOutputReference | AwsEcsService.VolumeConfigurationProperty): any {
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
    managed_ebs_volume: {
      value: awsEcsServiceManagedEbsVolumePropertyToHclTerraform(struct!.managedEbsVolume),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedEbsVolumePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEcsServiceVpcLatticeConfigurationsPropertyToTerraform(struct?: AwsEcsService.VpcLatticeConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port_name: cdktn.stringToTerraform(struct!.portName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
  }
}


export function awsEcsServiceVpcLatticeConfigurationsPropertyToHclTerraform(struct?: AwsEcsService.VpcLatticeConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port_name: {
      value: cdktn.stringToHclTerraform(struct!.portName),
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
    target_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsEcsService {
export interface AlarmsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#alarm_names AwsEcsService#alarm_names}
  */
  readonly alarmNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#enable AwsEcsService#enable}
  */
  readonly enable: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#rollback AwsEcsService#rollback}
  */
  readonly rollback: boolean | cdktn.IResolvable;
}
export class AlarmsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlarmsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmNames = this._alarmNames;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._rollback !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollback = this._rollback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlarmsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarmNames = undefined;
      this._enable = undefined;
      this._rollback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarmNames = value.alarmNames;
      this._enable = value.enable;
      this._rollback = value.rollback;
    }
  }

  // alarm_names - computed: false, optional: false, required: true
  private _alarmNames?: string[]; 
  public get alarmNames() {
    return cdktn.Fn.tolist(this.getListAttribute('alarm_names'));
  }
  public set alarmNames(value: string[]) {
    this._alarmNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNamesInput() {
    return this._alarmNames;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rollback - computed: false, optional: false, required: true
  private _rollback?: boolean | cdktn.IResolvable; 
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }
  public set rollback(value: boolean | cdktn.IResolvable) {
    this._rollback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback;
  }
}
export interface CapacityProviderStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#base AwsEcsService#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#capacity_provider AwsEcsService#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#weight AwsEcsService#weight}
  */
  readonly weight?: number;
}
export class CapacityProviderStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CapacityProviderStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._capacityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProvider = this._capacityProvider;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityProviderStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._capacityProvider = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._capacityProvider = value.capacityProvider;
      this._weight = value.weight;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // capacity_provider - computed: false, optional: false, required: true
  private _capacityProvider?: string; 
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }
  public set capacityProvider(value: string) {
    this._capacityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderInput() {
    return this._capacityProvider;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class CapacityProviderStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : CapacityProviderStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): CapacityProviderStrategyPropertyOutputReference {
    return new CapacityProviderStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentCircuitBreakerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#enable AwsEcsService#enable}
  */
  readonly enable: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#rollback AwsEcsService#rollback}
  */
  readonly rollback: boolean | cdktn.IResolvable;
}
export class DeploymentCircuitBreakerPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentCircuitBreakerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._rollback !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollback = this._rollback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentCircuitBreakerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._rollback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._rollback = value.rollback;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rollback - computed: false, optional: false, required: true
  private _rollback?: boolean | cdktn.IResolvable; 
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }
  public set rollback(value: boolean | cdktn.IResolvable) {
    this._rollback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback;
  }
}
export interface CanaryConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#canary_bake_time_in_minutes AwsEcsService#canary_bake_time_in_minutes}
  */
  readonly canaryBakeTimeInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#canary_percent AwsEcsService#canary_percent}
  */
  readonly canaryPercent?: number;
}
export class CanaryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanaryConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canaryBakeTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryBakeTimeInMinutes = this._canaryBakeTimeInMinutes;
    }
    if (this._canaryPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryPercent = this._canaryPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanaryConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canaryBakeTimeInMinutes = undefined;
      this._canaryPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canaryBakeTimeInMinutes = value.canaryBakeTimeInMinutes;
      this._canaryPercent = value.canaryPercent;
    }
  }

  // canary_bake_time_in_minutes - computed: true, optional: true, required: false
  private _canaryBakeTimeInMinutes?: string; 
  public get canaryBakeTimeInMinutes() {
    return this.getStringAttribute('canary_bake_time_in_minutes');
  }
  public set canaryBakeTimeInMinutes(value: string) {
    this._canaryBakeTimeInMinutes = value;
  }
  public resetCanaryBakeTimeInMinutes() {
    this._canaryBakeTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryBakeTimeInMinutesInput() {
    return this._canaryBakeTimeInMinutes;
  }

  // canary_percent - computed: true, optional: true, required: false
  private _canaryPercent?: number; 
  public get canaryPercent() {
    return this.getNumberAttribute('canary_percent');
  }
  public set canaryPercent(value: number) {
    this._canaryPercent = value;
  }
  public resetCanaryPercent() {
    this._canaryPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryPercentInput() {
    return this._canaryPercent;
  }
}
export interface LifecycleHookProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#hook_details AwsEcsService#hook_details}
  */
  readonly hookDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#hook_target_arn AwsEcsService#hook_target_arn}
  */
  readonly hookTargetArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#lifecycle_stages AwsEcsService#lifecycle_stages}
  */
  readonly lifecycleStages: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#role_arn AwsEcsService#role_arn}
  */
  readonly roleArn: string;
}
export class LifecycleHookPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LifecycleHookProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hookDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.hookDetails = this._hookDetails;
    }
    if (this._hookTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hookTargetArn = this._hookTargetArn;
    }
    if (this._lifecycleStages !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleStages = this._lifecycleStages;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleHookProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hookDetails = undefined;
      this._hookTargetArn = undefined;
      this._lifecycleStages = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hookDetails = value.hookDetails;
      this._hookTargetArn = value.hookTargetArn;
      this._lifecycleStages = value.lifecycleStages;
      this._roleArn = value.roleArn;
    }
  }

  // hook_details - computed: false, optional: true, required: false
  private _hookDetails?: string; 
  public get hookDetails() {
    return this.getStringAttribute('hook_details');
  }
  public set hookDetails(value: string) {
    this._hookDetails = value;
  }
  public resetHookDetails() {
    this._hookDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookDetailsInput() {
    return this._hookDetails;
  }

  // hook_target_arn - computed: false, optional: false, required: true
  private _hookTargetArn?: string; 
  public get hookTargetArn() {
    return this.getStringAttribute('hook_target_arn');
  }
  public set hookTargetArn(value: string) {
    this._hookTargetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hookTargetArnInput() {
    return this._hookTargetArn;
  }

  // lifecycle_stages - computed: false, optional: false, required: true
  private _lifecycleStages?: string[]; 
  public get lifecycleStages() {
    return this.getListAttribute('lifecycle_stages');
  }
  public set lifecycleStages(value: string[]) {
    this._lifecycleStages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStagesInput() {
    return this._lifecycleStages;
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
}

export class LifecycleHookPropertyList extends cdktn.ComplexList {
  public internalValue? : LifecycleHookProperty[] | cdktn.IResolvable

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
  public get(index: number): LifecycleHookPropertyOutputReference {
    return new LifecycleHookPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LinearConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#step_bake_time_in_minutes AwsEcsService#step_bake_time_in_minutes}
  */
  readonly stepBakeTimeInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#step_percent AwsEcsService#step_percent}
  */
  readonly stepPercent?: number;
}
export class LinearConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LinearConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepBakeTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepBakeTimeInMinutes = this._stepBakeTimeInMinutes;
    }
    if (this._stepPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepPercent = this._stepPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinearConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stepBakeTimeInMinutes = undefined;
      this._stepPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stepBakeTimeInMinutes = value.stepBakeTimeInMinutes;
      this._stepPercent = value.stepPercent;
    }
  }

  // step_bake_time_in_minutes - computed: true, optional: true, required: false
  private _stepBakeTimeInMinutes?: string; 
  public get stepBakeTimeInMinutes() {
    return this.getStringAttribute('step_bake_time_in_minutes');
  }
  public set stepBakeTimeInMinutes(value: string) {
    this._stepBakeTimeInMinutes = value;
  }
  public resetStepBakeTimeInMinutes() {
    this._stepBakeTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepBakeTimeInMinutesInput() {
    return this._stepBakeTimeInMinutes;
  }

  // step_percent - computed: true, optional: true, required: false
  private _stepPercent?: number; 
  public get stepPercent() {
    return this.getNumberAttribute('step_percent');
  }
  public set stepPercent(value: number) {
    this._stepPercent = value;
  }
  public resetStepPercent() {
    this._stepPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepPercentInput() {
    return this._stepPercent;
  }
}
export interface DeploymentConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#bake_time_in_minutes AwsEcsService#bake_time_in_minutes}
  */
  readonly bakeTimeInMinutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#strategy AwsEcsService#strategy}
  */
  readonly strategy?: string;
  /**
  * canary_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#canary_configuration AwsEcsService#canary_configuration}
  */
  readonly canaryConfiguration?: CanaryConfigurationProperty;
  /**
  * lifecycle_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#lifecycle_hook AwsEcsService#lifecycle_hook}
  */
  readonly lifecycleHook?: LifecycleHookProperty[] | cdktn.IResolvable;
  /**
  * linear_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#linear_configuration AwsEcsService#linear_configuration}
  */
  readonly linearConfiguration?: LinearConfigurationProperty;
}
export class DeploymentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bakeTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bakeTimeInMinutes = this._bakeTimeInMinutes;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._canaryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryConfiguration = this._canaryConfiguration?.internalValue;
    }
    if (this._lifecycleHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleHook = this._lifecycleHook?.internalValue;
    }
    if (this._linearConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearConfiguration = this._linearConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bakeTimeInMinutes = undefined;
      this._strategy = undefined;
      this._canaryConfiguration.internalValue = undefined;
      this._lifecycleHook.internalValue = undefined;
      this._linearConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bakeTimeInMinutes = value.bakeTimeInMinutes;
      this._strategy = value.strategy;
      this._canaryConfiguration.internalValue = value.canaryConfiguration;
      this._lifecycleHook.internalValue = value.lifecycleHook;
      this._linearConfiguration.internalValue = value.linearConfiguration;
    }
  }

  // bake_time_in_minutes - computed: true, optional: true, required: false
  private _bakeTimeInMinutes?: string; 
  public get bakeTimeInMinutes() {
    return this.getStringAttribute('bake_time_in_minutes');
  }
  public set bakeTimeInMinutes(value: string) {
    this._bakeTimeInMinutes = value;
  }
  public resetBakeTimeInMinutes() {
    this._bakeTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bakeTimeInMinutesInput() {
    return this._bakeTimeInMinutes;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // canary_configuration - computed: false, optional: true, required: false
  private _canaryConfiguration = new CanaryConfigurationPropertyOutputReference(this, "canary_configuration");
  public get canaryConfiguration() {
    return this._canaryConfiguration;
  }
  public putCanaryConfiguration(value: CanaryConfigurationProperty) {
    this._canaryConfiguration.internalValue = value;
  }
  public resetCanaryConfiguration() {
    this._canaryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryConfigurationInput() {
    return this._canaryConfiguration.internalValue;
  }

  // lifecycle_hook - computed: false, optional: true, required: false
  private _lifecycleHook = new LifecycleHookPropertyList(this, "lifecycle_hook", true);
  public get lifecycleHook() {
    return this._lifecycleHook;
  }
  public putLifecycleHook(value: LifecycleHookProperty[] | cdktn.IResolvable) {
    this._lifecycleHook.internalValue = value;
  }
  public resetLifecycleHook() {
    this._lifecycleHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleHookInput() {
    return this._lifecycleHook.internalValue;
  }

  // linear_configuration - computed: false, optional: true, required: false
  private _linearConfiguration = new LinearConfigurationPropertyOutputReference(this, "linear_configuration");
  public get linearConfiguration() {
    return this._linearConfiguration;
  }
  public putLinearConfiguration(value: LinearConfigurationProperty) {
    this._linearConfiguration.internalValue = value;
  }
  public resetLinearConfiguration() {
    this._linearConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearConfigurationInput() {
    return this._linearConfiguration.internalValue;
  }
}
export interface DeploymentControllerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#type AwsEcsService#type}
  */
  readonly type?: string;
}
export class DeploymentControllerPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentControllerProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentControllerProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface AdvancedConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#alternate_target_group_arn AwsEcsService#alternate_target_group_arn}
  */
  readonly alternateTargetGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#production_listener_rule AwsEcsService#production_listener_rule}
  */
  readonly productionListenerRule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#role_arn AwsEcsService#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#test_listener_rule AwsEcsService#test_listener_rule}
  */
  readonly testListenerRule?: string;
}
export class AdvancedConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvancedConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateTargetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateTargetGroupArn = this._alternateTargetGroupArn;
    }
    if (this._productionListenerRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionListenerRule = this._productionListenerRule;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._testListenerRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.testListenerRule = this._testListenerRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternateTargetGroupArn = undefined;
      this._productionListenerRule = undefined;
      this._roleArn = undefined;
      this._testListenerRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternateTargetGroupArn = value.alternateTargetGroupArn;
      this._productionListenerRule = value.productionListenerRule;
      this._roleArn = value.roleArn;
      this._testListenerRule = value.testListenerRule;
    }
  }

  // alternate_target_group_arn - computed: false, optional: false, required: true
  private _alternateTargetGroupArn?: string; 
  public get alternateTargetGroupArn() {
    return this.getStringAttribute('alternate_target_group_arn');
  }
  public set alternateTargetGroupArn(value: string) {
    this._alternateTargetGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateTargetGroupArnInput() {
    return this._alternateTargetGroupArn;
  }

  // production_listener_rule - computed: false, optional: false, required: true
  private _productionListenerRule?: string; 
  public get productionListenerRule() {
    return this.getStringAttribute('production_listener_rule');
  }
  public set productionListenerRule(value: string) {
    this._productionListenerRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionListenerRuleInput() {
    return this._productionListenerRule;
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

  // test_listener_rule - computed: false, optional: true, required: false
  private _testListenerRule?: string; 
  public get testListenerRule() {
    return this.getStringAttribute('test_listener_rule');
  }
  public set testListenerRule(value: string) {
    this._testListenerRule = value;
  }
  public resetTestListenerRule() {
    this._testListenerRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testListenerRuleInput() {
    return this._testListenerRule;
  }
}
export interface LoadBalancerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#container_name AwsEcsService#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#container_port AwsEcsService#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#elb_name AwsEcsService#elb_name}
  */
  readonly elbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#target_group_arn AwsEcsService#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * advanced_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#advanced_configuration AwsEcsService#advanced_configuration}
  */
  readonly advancedConfiguration?: AdvancedConfigurationProperty;
}
export class LoadBalancerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LoadBalancerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._elbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbName = this._elbName;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._advancedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedConfiguration = this._advancedConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._containerPort = undefined;
      this._elbName = undefined;
      this._targetGroupArn = undefined;
      this._advancedConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._containerPort = value.containerPort;
      this._elbName = value.elbName;
      this._targetGroupArn = value.targetGroupArn;
      this._advancedConfiguration.internalValue = value.advancedConfiguration;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // elb_name - computed: false, optional: true, required: false
  private _elbName?: string; 
  public get elbName() {
    return this.getStringAttribute('elb_name');
  }
  public set elbName(value: string) {
    this._elbName = value;
  }
  public resetElbName() {
    this._elbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbNameInput() {
    return this._elbName;
  }

  // target_group_arn - computed: false, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }

  // advanced_configuration - computed: false, optional: true, required: false
  private _advancedConfiguration = new AdvancedConfigurationPropertyOutputReference(this, "advanced_configuration");
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }
  public putAdvancedConfiguration(value: AdvancedConfigurationProperty) {
    this._advancedConfiguration.internalValue = value;
  }
  public resetAdvancedConfiguration() {
    this._advancedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigurationInput() {
    return this._advancedConfiguration.internalValue;
  }
}

export class LoadBalancerPropertyList extends cdktn.ComplexList {
  public internalValue? : LoadBalancerProperty[] | cdktn.IResolvable

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
  public get(index: number): LoadBalancerPropertyOutputReference {
    return new LoadBalancerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#assign_public_ip AwsEcsService#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#security_groups AwsEcsService#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#subnets AwsEcsService#subnets}
  */
  readonly subnets: string[];
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktn.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktn.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface OrderedPlacementStrategyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#field AwsEcsService#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#type AwsEcsService#type}
  */
  readonly type: string;
}
export class OrderedPlacementStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OrderedPlacementStrategyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrderedPlacementStrategyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class OrderedPlacementStrategyPropertyList extends cdktn.ComplexList {
  public internalValue? : OrderedPlacementStrategyProperty[] | cdktn.IResolvable

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
  public get(index: number): OrderedPlacementStrategyPropertyOutputReference {
    return new OrderedPlacementStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlacementConstraintsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#expression AwsEcsService#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#type AwsEcsService#type}
  */
  readonly type: string;
}
export class PlacementConstraintsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PlacementConstraintsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlacementConstraintsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._type = value.type;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

export class PlacementConstraintsPropertyList extends cdktn.ComplexList {
  public internalValue? : PlacementConstraintsProperty[] | cdktn.IResolvable

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
  public get(index: number): PlacementConstraintsPropertyOutputReference {
    return new PlacementConstraintsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessLogConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#format AwsEcsService#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#include_query_parameters AwsEcsService#include_query_parameters}
  */
  readonly includeQueryParameters?: string;
}
export class AccessLogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessLogConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._includeQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQueryParameters = this._includeQueryParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessLogConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._includeQueryParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._includeQueryParameters = value.includeQueryParameters;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // include_query_parameters - computed: true, optional: true, required: false
  private _includeQueryParameters?: string; 
  public get includeQueryParameters() {
    return this.getStringAttribute('include_query_parameters');
  }
  public set includeQueryParameters(value: string) {
    this._includeQueryParameters = value;
  }
  public resetIncludeQueryParameters() {
    this._includeQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryParametersInput() {
    return this._includeQueryParameters;
  }
}
export interface SecretOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#name AwsEcsService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#value_from AwsEcsService#value_from}
  */
  readonly valueFrom: string;
}
export class SecretOptionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecretOptionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretOptionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom = value.valueFrom;
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

  // value_from - computed: false, optional: false, required: true
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class SecretOptionPropertyList extends cdktn.ComplexList {
  public internalValue? : SecretOptionProperty[] | cdktn.IResolvable

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
  public get(index: number): SecretOptionPropertyOutputReference {
    return new SecretOptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#log_driver AwsEcsService#log_driver}
  */
  readonly logDriver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#options AwsEcsService#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * secret_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#secret_option AwsEcsService#secret_option}
  */
  readonly secretOption?: SecretOptionProperty[] | cdktn.IResolvable;
}
export class LogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDriver = this._logDriver;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._secretOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretOption = this._secretOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logDriver = undefined;
      this._options = undefined;
      this._secretOption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logDriver = value.logDriver;
      this._options = value.options;
      this._secretOption.internalValue = value.secretOption;
    }
  }

  // log_driver - computed: false, optional: false, required: true
  private _logDriver?: string; 
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }
  public set logDriver(value: string) {
    this._logDriver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDriverInput() {
    return this._logDriver;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // secret_option - computed: false, optional: true, required: false
  private _secretOption = new SecretOptionPropertyList(this, "secret_option", false);
  public get secretOption() {
    return this._secretOption;
  }
  public putSecretOption(value: SecretOptionProperty[] | cdktn.IResolvable) {
    this._secretOption.internalValue = value;
  }
  public resetSecretOption() {
    this._secretOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretOptionInput() {
    return this._secretOption.internalValue;
  }
}
export interface ValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#exact AwsEcsService#exact}
  */
  readonly exact: string;
}
export class ValuePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ValueProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValueProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface HeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#name AwsEcsService#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#value AwsEcsService#value}
  */
  readonly value: ValueProperty;
}
export class HeaderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeaderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeaderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new ValuePropertyOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ValueProperty) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface TestTrafficRulesProperty {
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#header AwsEcsService#header}
  */
  readonly header?: HeaderProperty;
}
export class TestTrafficRulesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TestTrafficRulesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestTrafficRulesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header = new HeaderPropertyOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: HeaderProperty) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class TestTrafficRulesPropertyList extends cdktn.ComplexList {
  public internalValue? : TestTrafficRulesProperty[] | cdktn.IResolvable

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
  public get(index: number): TestTrafficRulesPropertyOutputReference {
    return new TestTrafficRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClientAliasProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#dns_name AwsEcsService#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#port AwsEcsService#port}
  */
  readonly port: number;
  /**
  * test_traffic_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#test_traffic_rules AwsEcsService#test_traffic_rules}
  */
  readonly testTrafficRules?: TestTrafficRulesProperty[] | cdktn.IResolvable;
}
export class ClientAliasPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientAliasProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._testTrafficRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testTrafficRules = this._testTrafficRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientAliasProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._port = undefined;
      this._testTrafficRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._port = value.port;
      this._testTrafficRules.internalValue = value.testTrafficRules;
    }
  }

  // dns_name - computed: true, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // test_traffic_rules - computed: false, optional: true, required: false
  private _testTrafficRules = new TestTrafficRulesPropertyList(this, "test_traffic_rules", false);
  public get testTrafficRules() {
    return this._testTrafficRules;
  }
  public putTestTrafficRules(value: TestTrafficRulesProperty[] | cdktn.IResolvable) {
    this._testTrafficRules.internalValue = value;
  }
  public resetTestTrafficRules() {
    this._testTrafficRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTrafficRulesInput() {
    return this._testTrafficRules.internalValue;
  }
}
export interface TimeoutProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#idle_timeout_seconds AwsEcsService#idle_timeout_seconds}
  */
  readonly idleTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#per_request_timeout_seconds AwsEcsService#per_request_timeout_seconds}
  */
  readonly perRequestTimeoutSeconds?: number;
}
export class TimeoutPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimeoutProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutSeconds = this._idleTimeoutSeconds;
    }
    if (this._perRequestTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequestTimeoutSeconds = this._perRequestTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeoutProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutSeconds = undefined;
      this._perRequestTimeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutSeconds = value.idleTimeoutSeconds;
      this._perRequestTimeoutSeconds = value.perRequestTimeoutSeconds;
    }
  }

  // idle_timeout_seconds - computed: false, optional: true, required: false
  private _idleTimeoutSeconds?: number; 
  public get idleTimeoutSeconds() {
    return this.getNumberAttribute('idle_timeout_seconds');
  }
  public set idleTimeoutSeconds(value: number) {
    this._idleTimeoutSeconds = value;
  }
  public resetIdleTimeoutSeconds() {
    this._idleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutSecondsInput() {
    return this._idleTimeoutSeconds;
  }

  // per_request_timeout_seconds - computed: false, optional: true, required: false
  private _perRequestTimeoutSeconds?: number; 
  public get perRequestTimeoutSeconds() {
    return this.getNumberAttribute('per_request_timeout_seconds');
  }
  public set perRequestTimeoutSeconds(value: number) {
    this._perRequestTimeoutSeconds = value;
  }
  public resetPerRequestTimeoutSeconds() {
    this._perRequestTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestTimeoutSecondsInput() {
    return this._perRequestTimeoutSeconds;
  }
}
export interface IssuerCertAuthorityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#aws_pca_authority_arn AwsEcsService#aws_pca_authority_arn}
  */
  readonly awsPcaAuthorityArn: string;
}
export class IssuerCertAuthorityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IssuerCertAuthorityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsPcaAuthorityArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPcaAuthorityArn = this._awsPcaAuthorityArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssuerCertAuthorityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsPcaAuthorityArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsPcaAuthorityArn = value.awsPcaAuthorityArn;
    }
  }

  // aws_pca_authority_arn - computed: false, optional: false, required: true
  private _awsPcaAuthorityArn?: string; 
  public get awsPcaAuthorityArn() {
    return this.getStringAttribute('aws_pca_authority_arn');
  }
  public set awsPcaAuthorityArn(value: string) {
    this._awsPcaAuthorityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPcaAuthorityArnInput() {
    return this._awsPcaAuthorityArn;
  }
}
export interface TlsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#kms_key AwsEcsService#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#role_arn AwsEcsService#role_arn}
  */
  readonly roleArn?: string;
  /**
  * issuer_cert_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#issuer_cert_authority AwsEcsService#issuer_cert_authority}
  */
  readonly issuerCertAuthority: IssuerCertAuthorityProperty;
}
export class TlsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TlsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._issuerCertAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerCertAuthority = this._issuerCertAuthority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
      this._roleArn = undefined;
      this._issuerCertAuthority.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
      this._roleArn = value.roleArn;
      this._issuerCertAuthority.internalValue = value.issuerCertAuthority;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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

  // issuer_cert_authority - computed: false, optional: false, required: true
  private _issuerCertAuthority = new IssuerCertAuthorityPropertyOutputReference(this, "issuer_cert_authority");
  public get issuerCertAuthority() {
    return this._issuerCertAuthority;
  }
  public putIssuerCertAuthority(value: IssuerCertAuthorityProperty) {
    this._issuerCertAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCertAuthorityInput() {
    return this._issuerCertAuthority.internalValue;
  }
}
export interface ServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#discovery_name AwsEcsService#discovery_name}
  */
  readonly discoveryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#ingress_port_override AwsEcsService#ingress_port_override}
  */
  readonly ingressPortOverride?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#port_name AwsEcsService#port_name}
  */
  readonly portName: string;
  /**
  * client_alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#client_alias AwsEcsService#client_alias}
  */
  readonly clientAlias?: ClientAliasProperty;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#timeout AwsEcsService#timeout}
  */
  readonly timeout?: TimeoutProperty;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#tls AwsEcsService#tls}
  */
  readonly tls?: TlsProperty;
}
export class ServicePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ServiceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryName = this._discoveryName;
    }
    if (this._ingressPortOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPortOverride = this._ingressPortOverride;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._clientAlias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAlias = this._clientAlias?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoveryName = undefined;
      this._ingressPortOverride = undefined;
      this._portName = undefined;
      this._clientAlias.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoveryName = value.discoveryName;
      this._ingressPortOverride = value.ingressPortOverride;
      this._portName = value.portName;
      this._clientAlias.internalValue = value.clientAlias;
      this._timeout.internalValue = value.timeout;
      this._tls.internalValue = value.tls;
    }
  }

  // discovery_name - computed: true, optional: true, required: false
  private _discoveryName?: string; 
  public get discoveryName() {
    return this.getStringAttribute('discovery_name');
  }
  public set discoveryName(value: string) {
    this._discoveryName = value;
  }
  public resetDiscoveryName() {
    this._discoveryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryNameInput() {
    return this._discoveryName;
  }

  // ingress_port_override - computed: false, optional: true, required: false
  private _ingressPortOverride?: number; 
  public get ingressPortOverride() {
    return this.getNumberAttribute('ingress_port_override');
  }
  public set ingressPortOverride(value: number) {
    this._ingressPortOverride = value;
  }
  public resetIngressPortOverride() {
    this._ingressPortOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPortOverrideInput() {
    return this._ingressPortOverride;
  }

  // port_name - computed: false, optional: false, required: true
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // client_alias - computed: false, optional: true, required: false
  private _clientAlias = new ClientAliasPropertyOutputReference(this, "client_alias");
  public get clientAlias() {
    return this._clientAlias;
  }
  public putClientAlias(value: ClientAliasProperty) {
    this._clientAlias.internalValue = value;
  }
  public resetClientAlias() {
    this._clientAlias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAliasInput() {
    return this._clientAlias.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new TimeoutPropertyOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: TimeoutProperty) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new TlsPropertyOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: TlsProperty) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ServicePropertyList extends cdktn.ComplexList {
  public internalValue? : ServiceProperty[] | cdktn.IResolvable

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
  public get(index: number): ServicePropertyOutputReference {
    return new ServicePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceConnectConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#enabled AwsEcsService#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#namespace AwsEcsService#namespace}
  */
  readonly namespace?: string;
  /**
  * access_log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#access_log_configuration AwsEcsService#access_log_configuration}
  */
  readonly accessLogConfiguration?: AccessLogConfigurationProperty;
  /**
  * log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#log_configuration AwsEcsService#log_configuration}
  */
  readonly logConfiguration?: LogConfigurationProperty;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#service AwsEcsService#service}
  */
  readonly service?: ServiceProperty[] | cdktn.IResolvable;
}
export class ServiceConnectConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceConnectConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._accessLogConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogConfiguration = this._accessLogConfiguration?.internalValue;
    }
    if (this._logConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceConnectConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._namespace = undefined;
      this._accessLogConfiguration.internalValue = undefined;
      this._logConfiguration.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._namespace = value.namespace;
      this._accessLogConfiguration.internalValue = value.accessLogConfiguration;
      this._logConfiguration.internalValue = value.logConfiguration;
      this._service.internalValue = value.service;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // access_log_configuration - computed: false, optional: true, required: false
  private _accessLogConfiguration = new AccessLogConfigurationPropertyOutputReference(this, "access_log_configuration");
  public get accessLogConfiguration() {
    return this._accessLogConfiguration;
  }
  public putAccessLogConfiguration(value: AccessLogConfigurationProperty) {
    this._accessLogConfiguration.internalValue = value;
  }
  public resetAccessLogConfiguration() {
    this._accessLogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogConfigurationInput() {
    return this._accessLogConfiguration.internalValue;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration = new LogConfigurationPropertyOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: LogConfigurationProperty) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new ServicePropertyList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: ServiceProperty[] | cdktn.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}
export interface ServiceRegistriesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#container_name AwsEcsService#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#container_port AwsEcsService#container_port}
  */
  readonly containerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#port AwsEcsService#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#registry_arn AwsEcsService#registry_arn}
  */
  readonly registryArn: string;
}
export class ServiceRegistriesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceRegistriesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._registryArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryArn = this._registryArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRegistriesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._containerPort = undefined;
      this._port = undefined;
      this._registryArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._containerPort = value.containerPort;
      this._port = value.port;
      this._registryArn = value.registryArn;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // registry_arn - computed: false, optional: false, required: true
  private _registryArn?: string; 
  public get registryArn() {
    return this.getStringAttribute('registry_arn');
  }
  public set registryArn(value: string) {
    this._registryArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryArnInput() {
    return this._registryArn;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#create AwsEcsService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#delete AwsEcsService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#update AwsEcsService#update}
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
export interface TagSpecificationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#propagate_tags AwsEcsService#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#resource_type AwsEcsService#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#tags AwsEcsService#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class TagSpecificationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagSpecificationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagSpecificationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propagateTags = undefined;
      this._resourceType = undefined;
      this._tags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propagateTags = value.propagateTags;
      this._resourceType = value.resourceType;
      this._tags = value.tags;
    }
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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
}

export class TagSpecificationsPropertyList extends cdktn.ComplexList {
  public internalValue? : TagSpecificationsProperty[] | cdktn.IResolvable

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
  public get(index: number): TagSpecificationsPropertyOutputReference {
    return new TagSpecificationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedEbsVolumeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#encrypted AwsEcsService#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#file_system_type AwsEcsService#file_system_type}
  */
  readonly fileSystemType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#iops AwsEcsService#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#kms_key_id AwsEcsService#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#role_arn AwsEcsService#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#size_in_gb AwsEcsService#size_in_gb}
  */
  readonly sizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#snapshot_id AwsEcsService#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#throughput AwsEcsService#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#volume_initialization_rate AwsEcsService#volume_initialization_rate}
  */
  readonly volumeInitializationRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#volume_type AwsEcsService#volume_type}
  */
  readonly volumeType?: string;
  /**
  * tag_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#tag_specifications AwsEcsService#tag_specifications}
  */
  readonly tagSpecifications?: TagSpecificationsProperty[] | cdktn.IResolvable;
}
export class ManagedEbsVolumePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedEbsVolumeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGb = this._sizeInGb;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeInitializationRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeInitializationRate = this._volumeInitializationRate;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._tagSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSpecifications = this._tagSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedEbsVolumeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encrypted = undefined;
      this._fileSystemType = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._roleArn = undefined;
      this._sizeInGb = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeInitializationRate = undefined;
      this._volumeType = undefined;
      this._tagSpecifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encrypted = value.encrypted;
      this._fileSystemType = value.fileSystemType;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._roleArn = value.roleArn;
      this._sizeInGb = value.sizeInGb;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeInitializationRate = value.volumeInitializationRate;
      this._volumeType = value.volumeType;
      this._tagSpecifications.internalValue = value.tagSpecifications;
    }
  }

  // encrypted - computed: false, optional: true, required: false
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

  // file_system_type - computed: false, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }

  // iops - computed: false, optional: true, required: false
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

  // size_in_gb - computed: false, optional: true, required: false
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  public resetSizeInGb() {
    this._sizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
  }

  // snapshot_id - computed: false, optional: true, required: false
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

  // throughput - computed: false, optional: true, required: false
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

  // volume_initialization_rate - computed: false, optional: true, required: false
  private _volumeInitializationRate?: number; 
  public get volumeInitializationRate() {
    return this.getNumberAttribute('volume_initialization_rate');
  }
  public set volumeInitializationRate(value: number) {
    this._volumeInitializationRate = value;
  }
  public resetVolumeInitializationRate() {
    this._volumeInitializationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInitializationRateInput() {
    return this._volumeInitializationRate;
  }

  // volume_type - computed: false, optional: true, required: false
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

  // tag_specifications - computed: false, optional: true, required: false
  private _tagSpecifications = new TagSpecificationsPropertyList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }
  public putTagSpecifications(value: TagSpecificationsProperty[] | cdktn.IResolvable) {
    this._tagSpecifications.internalValue = value;
  }
  public resetTagSpecifications() {
    this._tagSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSpecificationsInput() {
    return this._tagSpecifications.internalValue;
  }
}
export interface VolumeConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#name AwsEcsService#name}
  */
  readonly name: string;
  /**
  * managed_ebs_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#managed_ebs_volume AwsEcsService#managed_ebs_volume}
  */
  readonly managedEbsVolume: ManagedEbsVolumeProperty;
}
export class VolumeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VolumeConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._managedEbsVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedEbsVolume = this._managedEbsVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._managedEbsVolume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._managedEbsVolume.internalValue = value.managedEbsVolume;
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

  // managed_ebs_volume - computed: false, optional: false, required: true
  private _managedEbsVolume = new ManagedEbsVolumePropertyOutputReference(this, "managed_ebs_volume");
  public get managedEbsVolume() {
    return this._managedEbsVolume;
  }
  public putManagedEbsVolume(value: ManagedEbsVolumeProperty) {
    this._managedEbsVolume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedEbsVolumeInput() {
    return this._managedEbsVolume.internalValue;
  }
}
export interface VpcLatticeConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#port_name AwsEcsService#port_name}
  */
  readonly portName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#role_arn AwsEcsService#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ecs_service#target_group_arn AwsEcsService#target_group_arn}
  */
  readonly targetGroupArn: string;
}
export class VpcLatticeConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VpcLatticeConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcLatticeConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portName = undefined;
      this._roleArn = undefined;
      this._targetGroupArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portName = value.portName;
      this._roleArn = value.roleArn;
      this._targetGroupArn = value.targetGroupArn;
    }
  }

  // port_name - computed: false, optional: false, required: true
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
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

  // target_group_arn - computed: false, optional: false, required: true
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }
}

export class VpcLatticeConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : VpcLatticeConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): VpcLatticeConfigurationsPropertyOutputReference {
    return new VpcLatticeConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
