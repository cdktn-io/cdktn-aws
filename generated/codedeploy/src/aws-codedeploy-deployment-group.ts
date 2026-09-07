// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsDeploymentGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#app_name AwsDeploymentGroup#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#autoscaling_groups AwsDeploymentGroup#autoscaling_groups}
  */
  readonly autoscalingGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#deployment_config_name AwsDeploymentGroup#deployment_config_name}
  */
  readonly deploymentConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#deployment_group_name AwsDeploymentGroup#deployment_group_name}
  */
  readonly deploymentGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#id AwsDeploymentGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#outdated_instances_strategy AwsDeploymentGroup#outdated_instances_strategy}
  */
  readonly outdatedInstancesStrategy?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#region AwsDeploymentGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#service_role_arn AwsDeploymentGroup#service_role_arn}
  */
  readonly serviceRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#tags AwsDeploymentGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#tags_all AwsDeploymentGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#termination_hook_enabled AwsDeploymentGroup#termination_hook_enabled}
  */
  readonly terminationHookEnabled?: boolean | cdktn.IResolvable;
  /**
  * alarm_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#alarm_configuration AwsDeploymentGroup#alarm_configuration}
  */
  readonly alarmConfiguration?: AwsDeploymentGroup.AlarmConfigurationProperty;
  /**
  * auto_rollback_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#auto_rollback_configuration AwsDeploymentGroup#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: AwsDeploymentGroup.AutoRollbackConfigurationProperty;
  /**
  * blue_green_deployment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#blue_green_deployment_config AwsDeploymentGroup#blue_green_deployment_config}
  */
  readonly blueGreenDeploymentConfig?: AwsDeploymentGroup.BlueGreenDeploymentConfigProperty;
  /**
  * deployment_style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#deployment_style AwsDeploymentGroup#deployment_style}
  */
  readonly deploymentStyle?: AwsDeploymentGroup.DeploymentStyleProperty;
  /**
  * ec2_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#ec2_tag_filter AwsDeploymentGroup#ec2_tag_filter}
  */
  readonly ec2TagFilter?: AwsDeploymentGroup.Ec2TagFilterProperty[] | cdktn.IResolvable;
  /**
  * ec2_tag_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#ec2_tag_set AwsDeploymentGroup#ec2_tag_set}
  */
  readonly ec2TagSet?: AwsDeploymentGroup.Ec2TagSetProperty[] | cdktn.IResolvable;
  /**
  * ecs_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#ecs_service AwsDeploymentGroup#ecs_service}
  */
  readonly ecsService?: AwsDeploymentGroup.EcsServiceProperty;
  /**
  * load_balancer_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#load_balancer_info AwsDeploymentGroup#load_balancer_info}
  */
  readonly loadBalancerInfo?: AwsDeploymentGroup.LoadBalancerInfoProperty;
  /**
  * on_premises_instance_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#on_premises_instance_tag_filter AwsDeploymentGroup#on_premises_instance_tag_filter}
  */
  readonly onPremisesInstanceTagFilter?: AwsDeploymentGroup.OnPremisesInstanceTagFilterProperty[] | cdktn.IResolvable;
  /**
  * trigger_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#trigger_configuration AwsDeploymentGroup#trigger_configuration}
  */
  readonly triggerConfiguration?: AwsDeploymentGroup.TriggerConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group aws_codedeploy_deployment_group}
*/
export class AwsDeploymentGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codedeploy_deployment_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsDeploymentGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsDeploymentGroup to import
  * @param importFromId The id of the existing AwsDeploymentGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsDeploymentGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_codedeploy_deployment_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group aws_codedeploy_deployment_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsDeploymentGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AwsDeploymentGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_deployment_group',
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
    this._appName = config.appName;
    this._autoscalingGroups = config.autoscalingGroups;
    this._deploymentConfigName = config.deploymentConfigName;
    this._deploymentGroupName = config.deploymentGroupName;
    this._id = config.id;
    this._outdatedInstancesStrategy = config.outdatedInstancesStrategy;
    this._region = config.region;
    this._serviceRoleArn = config.serviceRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._terminationHookEnabled = config.terminationHookEnabled;
    this._alarmConfiguration.internalValue = config.alarmConfiguration;
    this._autoRollbackConfiguration.internalValue = config.autoRollbackConfiguration;
    this._blueGreenDeploymentConfig.internalValue = config.blueGreenDeploymentConfig;
    this._deploymentStyle.internalValue = config.deploymentStyle;
    this._ec2TagFilter.internalValue = config.ec2TagFilter;
    this._ec2TagSet.internalValue = config.ec2TagSet;
    this._ecsService.internalValue = config.ecsService;
    this._loadBalancerInfo.internalValue = config.loadBalancerInfo;
    this._onPremisesInstanceTagFilter.internalValue = config.onPremisesInstanceTagFilter;
    this._triggerConfiguration.internalValue = config.triggerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_groups - computed: false, optional: true, required: false
  private _autoscalingGroups?: string[]; 
  public get autoscalingGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('autoscaling_groups'));
  }
  public set autoscalingGroups(value: string[]) {
    this._autoscalingGroups = value;
  }
  public resetAutoscalingGroups() {
    this._autoscalingGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupsInput() {
    return this._autoscalingGroups;
  }

  // compute_platform - computed: true, optional: false, required: false
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }

  // deployment_config_name - computed: false, optional: true, required: false
  private _deploymentConfigName?: string; 
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
  }
  public set deploymentConfigName(value: string) {
    this._deploymentConfigName = value;
  }
  public resetDeploymentConfigName() {
    this._deploymentConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigNameInput() {
    return this._deploymentConfigName;
  }

  // deployment_group_id - computed: true, optional: false, required: false
  public get deploymentGroupId() {
    return this.getStringAttribute('deployment_group_id');
  }

  // deployment_group_name - computed: false, optional: false, required: true
  private _deploymentGroupName?: string; 
  public get deploymentGroupName() {
    return this.getStringAttribute('deployment_group_name');
  }
  public set deploymentGroupName(value: string) {
    this._deploymentGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentGroupNameInput() {
    return this._deploymentGroupName;
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

  // outdated_instances_strategy - computed: false, optional: true, required: false
  private _outdatedInstancesStrategy?: string; 
  public get outdatedInstancesStrategy() {
    return this.getStringAttribute('outdated_instances_strategy');
  }
  public set outdatedInstancesStrategy(value: string) {
    this._outdatedInstancesStrategy = value;
  }
  public resetOutdatedInstancesStrategy() {
    this._outdatedInstancesStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outdatedInstancesStrategyInput() {
    return this._outdatedInstancesStrategy;
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

  // service_role_arn - computed: false, optional: false, required: true
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
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

  // termination_hook_enabled - computed: false, optional: true, required: false
  private _terminationHookEnabled?: boolean | cdktn.IResolvable; 
  public get terminationHookEnabled() {
    return this.getBooleanAttribute('termination_hook_enabled');
  }
  public set terminationHookEnabled(value: boolean | cdktn.IResolvable) {
    this._terminationHookEnabled = value;
  }
  public resetTerminationHookEnabled() {
    this._terminationHookEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationHookEnabledInput() {
    return this._terminationHookEnabled;
  }

  // alarm_configuration - computed: false, optional: true, required: false
  private _alarmConfiguration = new AwsDeploymentGroup.AlarmConfigurationPropertyOutputReference(this, "alarm_configuration");
  public get alarmConfiguration() {
    return this._alarmConfiguration;
  }
  public putAlarmConfiguration(value: AwsDeploymentGroup.AlarmConfigurationProperty) {
    this._alarmConfiguration.internalValue = value;
  }
  public resetAlarmConfiguration() {
    this._alarmConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmConfigurationInput() {
    return this._alarmConfiguration.internalValue;
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration = new AwsDeploymentGroup.AutoRollbackConfigurationPropertyOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public putAutoRollbackConfiguration(value: AwsDeploymentGroup.AutoRollbackConfigurationProperty) {
    this._autoRollbackConfiguration.internalValue = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration.internalValue;
  }

  // blue_green_deployment_config - computed: false, optional: true, required: false
  private _blueGreenDeploymentConfig = new AwsDeploymentGroup.BlueGreenDeploymentConfigPropertyOutputReference(this, "blue_green_deployment_config");
  public get blueGreenDeploymentConfig() {
    return this._blueGreenDeploymentConfig;
  }
  public putBlueGreenDeploymentConfig(value: AwsDeploymentGroup.BlueGreenDeploymentConfigProperty) {
    this._blueGreenDeploymentConfig.internalValue = value;
  }
  public resetBlueGreenDeploymentConfig() {
    this._blueGreenDeploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenDeploymentConfigInput() {
    return this._blueGreenDeploymentConfig.internalValue;
  }

  // deployment_style - computed: false, optional: true, required: false
  private _deploymentStyle = new AwsDeploymentGroup.DeploymentStylePropertyOutputReference(this, "deployment_style");
  public get deploymentStyle() {
    return this._deploymentStyle;
  }
  public putDeploymentStyle(value: AwsDeploymentGroup.DeploymentStyleProperty) {
    this._deploymentStyle.internalValue = value;
  }
  public resetDeploymentStyle() {
    this._deploymentStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStyleInput() {
    return this._deploymentStyle.internalValue;
  }

  // ec2_tag_filter - computed: false, optional: true, required: false
  private _ec2TagFilter = new AwsDeploymentGroup.Ec2TagFilterPropertyList(this, "ec2_tag_filter", true);
  public get ec2TagFilter() {
    return this._ec2TagFilter;
  }
  public putEc2TagFilter(value: AwsDeploymentGroup.Ec2TagFilterProperty[] | cdktn.IResolvable) {
    this._ec2TagFilter.internalValue = value;
  }
  public resetEc2TagFilter() {
    this._ec2TagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2TagFilterInput() {
    return this._ec2TagFilter.internalValue;
  }

  // ec2_tag_set - computed: false, optional: true, required: false
  private _ec2TagSet = new AwsDeploymentGroup.Ec2TagSetPropertyList(this, "ec2_tag_set", true);
  public get ec2TagSet() {
    return this._ec2TagSet;
  }
  public putEc2TagSet(value: AwsDeploymentGroup.Ec2TagSetProperty[] | cdktn.IResolvable) {
    this._ec2TagSet.internalValue = value;
  }
  public resetEc2TagSet() {
    this._ec2TagSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2TagSetInput() {
    return this._ec2TagSet.internalValue;
  }

  // ecs_service - computed: false, optional: true, required: false
  private _ecsService = new AwsDeploymentGroup.EcsServicePropertyOutputReference(this, "ecs_service");
  public get ecsService() {
    return this._ecsService;
  }
  public putEcsService(value: AwsDeploymentGroup.EcsServiceProperty) {
    this._ecsService.internalValue = value;
  }
  public resetEcsService() {
    this._ecsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsServiceInput() {
    return this._ecsService.internalValue;
  }

  // load_balancer_info - computed: false, optional: true, required: false
  private _loadBalancerInfo = new AwsDeploymentGroup.LoadBalancerInfoPropertyOutputReference(this, "load_balancer_info");
  public get loadBalancerInfo() {
    return this._loadBalancerInfo;
  }
  public putLoadBalancerInfo(value: AwsDeploymentGroup.LoadBalancerInfoProperty) {
    this._loadBalancerInfo.internalValue = value;
  }
  public resetLoadBalancerInfo() {
    this._loadBalancerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInfoInput() {
    return this._loadBalancerInfo.internalValue;
  }

  // on_premises_instance_tag_filter - computed: false, optional: true, required: false
  private _onPremisesInstanceTagFilter = new AwsDeploymentGroup.OnPremisesInstanceTagFilterPropertyList(this, "on_premises_instance_tag_filter", true);
  public get onPremisesInstanceTagFilter() {
    return this._onPremisesInstanceTagFilter;
  }
  public putOnPremisesInstanceTagFilter(value: AwsDeploymentGroup.OnPremisesInstanceTagFilterProperty[] | cdktn.IResolvable) {
    this._onPremisesInstanceTagFilter.internalValue = value;
  }
  public resetOnPremisesInstanceTagFilter() {
    this._onPremisesInstanceTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremisesInstanceTagFilterInput() {
    return this._onPremisesInstanceTagFilter.internalValue;
  }

  // trigger_configuration - computed: false, optional: true, required: false
  private _triggerConfiguration = new AwsDeploymentGroup.TriggerConfigurationPropertyList(this, "trigger_configuration", true);
  public get triggerConfiguration() {
    return this._triggerConfiguration;
  }
  public putTriggerConfiguration(value: AwsDeploymentGroup.TriggerConfigurationProperty[] | cdktn.IResolvable) {
    this._triggerConfiguration.internalValue = value;
  }
  public resetTriggerConfiguration() {
    this._triggerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConfigurationInput() {
    return this._triggerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktn.stringToTerraform(this._appName),
      autoscaling_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._autoscalingGroups),
      deployment_config_name: cdktn.stringToTerraform(this._deploymentConfigName),
      deployment_group_name: cdktn.stringToTerraform(this._deploymentGroupName),
      id: cdktn.stringToTerraform(this._id),
      outdated_instances_strategy: cdktn.stringToTerraform(this._outdatedInstancesStrategy),
      region: cdktn.stringToTerraform(this._region),
      service_role_arn: cdktn.stringToTerraform(this._serviceRoleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      termination_hook_enabled: cdktn.booleanToTerraform(this._terminationHookEnabled),
      alarm_configuration: awsDeploymentGroupAlarmConfigurationPropertyToTerraform(this._alarmConfiguration.internalValue),
      auto_rollback_configuration: awsDeploymentGroupAutoRollbackConfigurationPropertyToTerraform(this._autoRollbackConfiguration.internalValue),
      blue_green_deployment_config: awsDeploymentGroupBlueGreenDeploymentConfigPropertyToTerraform(this._blueGreenDeploymentConfig.internalValue),
      deployment_style: awsDeploymentGroupDeploymentStylePropertyToTerraform(this._deploymentStyle.internalValue),
      ec2_tag_filter: cdktn.listMapper(awsDeploymentGroupEc2TagFilterPropertyToTerraform, true)(this._ec2TagFilter.internalValue),
      ec2_tag_set: cdktn.listMapper(awsDeploymentGroupEc2TagSetPropertyToTerraform, true)(this._ec2TagSet.internalValue),
      ecs_service: awsDeploymentGroupEcsServicePropertyToTerraform(this._ecsService.internalValue),
      load_balancer_info: awsDeploymentGroupLoadBalancerInfoPropertyToTerraform(this._loadBalancerInfo.internalValue),
      on_premises_instance_tag_filter: cdktn.listMapper(awsDeploymentGroupOnPremisesInstanceTagFilterPropertyToTerraform, true)(this._onPremisesInstanceTagFilter.internalValue),
      trigger_configuration: cdktn.listMapper(awsDeploymentGroupTriggerConfigurationPropertyToTerraform, true)(this._triggerConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktn.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscaling_groups: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._autoscalingGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deployment_config_name: {
        value: cdktn.stringToHclTerraform(this._deploymentConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_group_name: {
        value: cdktn.stringToHclTerraform(this._deploymentGroupName),
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
      outdated_instances_strategy: {
        value: cdktn.stringToHclTerraform(this._outdatedInstancesStrategy),
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
      service_role_arn: {
        value: cdktn.stringToHclTerraform(this._serviceRoleArn),
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
      termination_hook_enabled: {
        value: cdktn.booleanToHclTerraform(this._terminationHookEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alarm_configuration: {
        value: awsDeploymentGroupAlarmConfigurationPropertyToHclTerraform(this._alarmConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDeploymentGroup.AlarmConfigurationPropertyList",
      },
      auto_rollback_configuration: {
        value: awsDeploymentGroupAutoRollbackConfigurationPropertyToHclTerraform(this._autoRollbackConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDeploymentGroup.AutoRollbackConfigurationPropertyList",
      },
      blue_green_deployment_config: {
        value: awsDeploymentGroupBlueGreenDeploymentConfigPropertyToHclTerraform(this._blueGreenDeploymentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDeploymentGroup.BlueGreenDeploymentConfigPropertyList",
      },
      deployment_style: {
        value: awsDeploymentGroupDeploymentStylePropertyToHclTerraform(this._deploymentStyle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDeploymentGroup.DeploymentStylePropertyList",
      },
      ec2_tag_filter: {
        value: cdktn.listMapperHcl(awsDeploymentGroupEc2TagFilterPropertyToHclTerraform, true)(this._ec2TagFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDeploymentGroup.Ec2TagFilterPropertyList",
      },
      ec2_tag_set: {
        value: cdktn.listMapperHcl(awsDeploymentGroupEc2TagSetPropertyToHclTerraform, true)(this._ec2TagSet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDeploymentGroup.Ec2TagSetPropertyList",
      },
      ecs_service: {
        value: awsDeploymentGroupEcsServicePropertyToHclTerraform(this._ecsService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDeploymentGroup.EcsServicePropertyList",
      },
      load_balancer_info: {
        value: awsDeploymentGroupLoadBalancerInfoPropertyToHclTerraform(this._loadBalancerInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDeploymentGroup.LoadBalancerInfoPropertyList",
      },
      on_premises_instance_tag_filter: {
        value: cdktn.listMapperHcl(awsDeploymentGroupOnPremisesInstanceTagFilterPropertyToHclTerraform, true)(this._onPremisesInstanceTagFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDeploymentGroup.OnPremisesInstanceTagFilterPropertyList",
      },
      trigger_configuration: {
        value: cdktn.listMapperHcl(awsDeploymentGroupTriggerConfigurationPropertyToHclTerraform, true)(this._triggerConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsDeploymentGroup.TriggerConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsDeploymentGroupAlarmConfigurationPropertyToTerraform(struct?: AwsDeploymentGroup.AlarmConfigurationPropertyOutputReference | AwsDeploymentGroup.AlarmConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alarms),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    ignore_poll_alarm_failure: cdktn.booleanToTerraform(struct!.ignorePollAlarmFailure),
  }
}


export function awsDeploymentGroupAlarmConfigurationPropertyToHclTerraform(struct?: AwsDeploymentGroup.AlarmConfigurationPropertyOutputReference | AwsDeploymentGroup.AlarmConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alarms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_poll_alarm_failure: {
      value: cdktn.booleanToHclTerraform(struct!.ignorePollAlarmFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupAutoRollbackConfigurationPropertyToTerraform(struct?: AwsDeploymentGroup.AutoRollbackConfigurationPropertyOutputReference | AwsDeploymentGroup.AutoRollbackConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
  }
}


export function awsDeploymentGroupAutoRollbackConfigurationPropertyToHclTerraform(struct?: AwsDeploymentGroup.AutoRollbackConfigurationPropertyOutputReference | AwsDeploymentGroup.AutoRollbackConfigurationProperty): any {
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
    events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupDeploymentReadyOptionPropertyToTerraform(struct?: AwsDeploymentGroup.DeploymentReadyOptionPropertyOutputReference | AwsDeploymentGroup.DeploymentReadyOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_on_timeout: cdktn.stringToTerraform(struct!.actionOnTimeout),
    wait_time_in_minutes: cdktn.numberToTerraform(struct!.waitTimeInMinutes),
  }
}


export function awsDeploymentGroupDeploymentReadyOptionPropertyToHclTerraform(struct?: AwsDeploymentGroup.DeploymentReadyOptionPropertyOutputReference | AwsDeploymentGroup.DeploymentReadyOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_on_timeout: {
      value: cdktn.stringToHclTerraform(struct!.actionOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_time_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.waitTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupGreenFleetProvisioningOptionPropertyToTerraform(struct?: AwsDeploymentGroup.GreenFleetProvisioningOptionPropertyOutputReference | AwsDeploymentGroup.GreenFleetProvisioningOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
  }
}


export function awsDeploymentGroupGreenFleetProvisioningOptionPropertyToHclTerraform(struct?: AwsDeploymentGroup.GreenFleetProvisioningOptionPropertyOutputReference | AwsDeploymentGroup.GreenFleetProvisioningOptionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupTerminateBlueInstancesOnDeploymentSuccessPropertyToTerraform(struct?: AwsDeploymentGroup.TerminateBlueInstancesOnDeploymentSuccessPropertyOutputReference | AwsDeploymentGroup.TerminateBlueInstancesOnDeploymentSuccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    termination_wait_time_in_minutes: cdktn.numberToTerraform(struct!.terminationWaitTimeInMinutes),
  }
}


export function awsDeploymentGroupTerminateBlueInstancesOnDeploymentSuccessPropertyToHclTerraform(struct?: AwsDeploymentGroup.TerminateBlueInstancesOnDeploymentSuccessPropertyOutputReference | AwsDeploymentGroup.TerminateBlueInstancesOnDeploymentSuccessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_wait_time_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.terminationWaitTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupBlueGreenDeploymentConfigPropertyToTerraform(struct?: AwsDeploymentGroup.BlueGreenDeploymentConfigPropertyOutputReference | AwsDeploymentGroup.BlueGreenDeploymentConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deployment_ready_option: awsDeploymentGroupDeploymentReadyOptionPropertyToTerraform(struct!.deploymentReadyOption),
    green_fleet_provisioning_option: awsDeploymentGroupGreenFleetProvisioningOptionPropertyToTerraform(struct!.greenFleetProvisioningOption),
    terminate_blue_instances_on_deployment_success: awsDeploymentGroupTerminateBlueInstancesOnDeploymentSuccessPropertyToTerraform(struct!.terminateBlueInstancesOnDeploymentSuccess),
  }
}


export function awsDeploymentGroupBlueGreenDeploymentConfigPropertyToHclTerraform(struct?: AwsDeploymentGroup.BlueGreenDeploymentConfigPropertyOutputReference | AwsDeploymentGroup.BlueGreenDeploymentConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deployment_ready_option: {
      value: awsDeploymentGroupDeploymentReadyOptionPropertyToHclTerraform(struct!.deploymentReadyOption),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentReadyOptionPropertyList",
    },
    green_fleet_provisioning_option: {
      value: awsDeploymentGroupGreenFleetProvisioningOptionPropertyToHclTerraform(struct!.greenFleetProvisioningOption),
      isBlock: true,
      type: "list",
      storageClassType: "GreenFleetProvisioningOptionPropertyList",
    },
    terminate_blue_instances_on_deployment_success: {
      value: awsDeploymentGroupTerminateBlueInstancesOnDeploymentSuccessPropertyToHclTerraform(struct!.terminateBlueInstancesOnDeploymentSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "TerminateBlueInstancesOnDeploymentSuccessPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupDeploymentStylePropertyToTerraform(struct?: AwsDeploymentGroup.DeploymentStylePropertyOutputReference | AwsDeploymentGroup.DeploymentStyleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deployment_option: cdktn.stringToTerraform(struct!.deploymentOption),
    deployment_type: cdktn.stringToTerraform(struct!.deploymentType),
  }
}


export function awsDeploymentGroupDeploymentStylePropertyToHclTerraform(struct?: AwsDeploymentGroup.DeploymentStylePropertyOutputReference | AwsDeploymentGroup.DeploymentStyleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deployment_option: {
      value: cdktn.stringToHclTerraform(struct!.deploymentOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_type: {
      value: cdktn.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupEc2TagFilterPropertyToTerraform(struct?: AwsDeploymentGroup.Ec2TagFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsDeploymentGroupEc2TagFilterPropertyToHclTerraform(struct?: AwsDeploymentGroup.Ec2TagFilterProperty | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsDeploymentGroupEc2TagSetEc2TagFilterPropertyToTerraform(struct?: AwsDeploymentGroup.Ec2TagSetEc2TagFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsDeploymentGroupEc2TagSetEc2TagFilterPropertyToHclTerraform(struct?: AwsDeploymentGroup.Ec2TagSetEc2TagFilterProperty | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsDeploymentGroupEc2TagSetPropertyToTerraform(struct?: AwsDeploymentGroup.Ec2TagSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ec2_tag_filter: cdktn.listMapper(awsDeploymentGroupEc2TagSetEc2TagFilterPropertyToTerraform, true)(struct!.ec2TagFilter),
  }
}


export function awsDeploymentGroupEc2TagSetPropertyToHclTerraform(struct?: AwsDeploymentGroup.Ec2TagSetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ec2_tag_filter: {
      value: cdktn.listMapperHcl(awsDeploymentGroupEc2TagSetEc2TagFilterPropertyToHclTerraform, true)(struct!.ec2TagFilter),
      isBlock: true,
      type: "set",
      storageClassType: "Ec2TagSetEc2TagFilterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupEcsServicePropertyToTerraform(struct?: AwsDeploymentGroup.EcsServicePropertyOutputReference | AwsDeploymentGroup.EcsServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
  }
}


export function awsDeploymentGroupEcsServicePropertyToHclTerraform(struct?: AwsDeploymentGroup.EcsServicePropertyOutputReference | AwsDeploymentGroup.EcsServiceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_name: {
      value: cdktn.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupElbInfoPropertyToTerraform(struct?: AwsDeploymentGroup.ElbInfoProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsDeploymentGroupElbInfoPropertyToHclTerraform(struct?: AwsDeploymentGroup.ElbInfoProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupTargetGroupInfoPropertyToTerraform(struct?: AwsDeploymentGroup.TargetGroupInfoProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsDeploymentGroupTargetGroupInfoPropertyToHclTerraform(struct?: AwsDeploymentGroup.TargetGroupInfoProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupProdTrafficRoutePropertyToTerraform(struct?: AwsDeploymentGroup.ProdTrafficRoutePropertyOutputReference | AwsDeploymentGroup.ProdTrafficRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    listener_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.listenerArns),
  }
}


export function awsDeploymentGroupProdTrafficRoutePropertyToHclTerraform(struct?: AwsDeploymentGroup.ProdTrafficRoutePropertyOutputReference | AwsDeploymentGroup.ProdTrafficRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    listener_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.listenerArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupTargetGroupPropertyToTerraform(struct?: AwsDeploymentGroup.TargetGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsDeploymentGroupTargetGroupPropertyToHclTerraform(struct?: AwsDeploymentGroup.TargetGroupProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupTestTrafficRoutePropertyToTerraform(struct?: AwsDeploymentGroup.TestTrafficRoutePropertyOutputReference | AwsDeploymentGroup.TestTrafficRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    listener_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.listenerArns),
  }
}


export function awsDeploymentGroupTestTrafficRoutePropertyToHclTerraform(struct?: AwsDeploymentGroup.TestTrafficRoutePropertyOutputReference | AwsDeploymentGroup.TestTrafficRouteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    listener_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.listenerArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupTargetGroupPairInfoPropertyToTerraform(struct?: AwsDeploymentGroup.TargetGroupPairInfoPropertyOutputReference | AwsDeploymentGroup.TargetGroupPairInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prod_traffic_route: awsDeploymentGroupProdTrafficRoutePropertyToTerraform(struct!.prodTrafficRoute),
    target_group: cdktn.listMapper(awsDeploymentGroupTargetGroupPropertyToTerraform, true)(struct!.targetGroup),
    test_traffic_route: awsDeploymentGroupTestTrafficRoutePropertyToTerraform(struct!.testTrafficRoute),
  }
}


export function awsDeploymentGroupTargetGroupPairInfoPropertyToHclTerraform(struct?: AwsDeploymentGroup.TargetGroupPairInfoPropertyOutputReference | AwsDeploymentGroup.TargetGroupPairInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prod_traffic_route: {
      value: awsDeploymentGroupProdTrafficRoutePropertyToHclTerraform(struct!.prodTrafficRoute),
      isBlock: true,
      type: "list",
      storageClassType: "ProdTrafficRoutePropertyList",
    },
    target_group: {
      value: cdktn.listMapperHcl(awsDeploymentGroupTargetGroupPropertyToHclTerraform, true)(struct!.targetGroup),
      isBlock: true,
      type: "list",
      storageClassType: "TargetGroupPropertyList",
    },
    test_traffic_route: {
      value: awsDeploymentGroupTestTrafficRoutePropertyToHclTerraform(struct!.testTrafficRoute),
      isBlock: true,
      type: "list",
      storageClassType: "TestTrafficRoutePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupLoadBalancerInfoPropertyToTerraform(struct?: AwsDeploymentGroup.LoadBalancerInfoPropertyOutputReference | AwsDeploymentGroup.LoadBalancerInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    elb_info: cdktn.listMapper(awsDeploymentGroupElbInfoPropertyToTerraform, true)(struct!.elbInfo),
    target_group_info: cdktn.listMapper(awsDeploymentGroupTargetGroupInfoPropertyToTerraform, true)(struct!.targetGroupInfo),
    target_group_pair_info: awsDeploymentGroupTargetGroupPairInfoPropertyToTerraform(struct!.targetGroupPairInfo),
  }
}


export function awsDeploymentGroupLoadBalancerInfoPropertyToHclTerraform(struct?: AwsDeploymentGroup.LoadBalancerInfoPropertyOutputReference | AwsDeploymentGroup.LoadBalancerInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    elb_info: {
      value: cdktn.listMapperHcl(awsDeploymentGroupElbInfoPropertyToHclTerraform, true)(struct!.elbInfo),
      isBlock: true,
      type: "set",
      storageClassType: "ElbInfoPropertyList",
    },
    target_group_info: {
      value: cdktn.listMapperHcl(awsDeploymentGroupTargetGroupInfoPropertyToHclTerraform, true)(struct!.targetGroupInfo),
      isBlock: true,
      type: "set",
      storageClassType: "TargetGroupInfoPropertyList",
    },
    target_group_pair_info: {
      value: awsDeploymentGroupTargetGroupPairInfoPropertyToHclTerraform(struct!.targetGroupPairInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TargetGroupPairInfoPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDeploymentGroupOnPremisesInstanceTagFilterPropertyToTerraform(struct?: AwsDeploymentGroup.OnPremisesInstanceTagFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsDeploymentGroupOnPremisesInstanceTagFilterPropertyToHclTerraform(struct?: AwsDeploymentGroup.OnPremisesInstanceTagFilterProperty | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsDeploymentGroupTriggerConfigurationPropertyToTerraform(struct?: AwsDeploymentGroup.TriggerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trigger_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.triggerEvents),
    trigger_name: cdktn.stringToTerraform(struct!.triggerName),
    trigger_target_arn: cdktn.stringToTerraform(struct!.triggerTargetArn),
  }
}


export function awsDeploymentGroupTriggerConfigurationPropertyToHclTerraform(struct?: AwsDeploymentGroup.TriggerConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    trigger_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.triggerEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    trigger_name: {
      value: cdktn.stringToHclTerraform(struct!.triggerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_target_arn: {
      value: cdktn.stringToHclTerraform(struct!.triggerTargetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsDeploymentGroup {
export interface AlarmConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#alarms AwsDeploymentGroup#alarms}
  */
  readonly alarms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#enabled AwsDeploymentGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#ignore_poll_alarm_failure AwsDeploymentGroup#ignore_poll_alarm_failure}
  */
  readonly ignorePollAlarmFailure?: boolean | cdktn.IResolvable;
}
export class AlarmConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlarmConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignorePollAlarmFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePollAlarmFailure = this._ignorePollAlarmFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlarmConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms = undefined;
      this._enabled = undefined;
      this._ignorePollAlarmFailure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms = value.alarms;
      this._enabled = value.enabled;
      this._ignorePollAlarmFailure = value.ignorePollAlarmFailure;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms?: string[]; 
  public get alarms() {
    return cdktn.Fn.tolist(this.getListAttribute('alarms'));
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ignore_poll_alarm_failure - computed: false, optional: true, required: false
  private _ignorePollAlarmFailure?: boolean | cdktn.IResolvable; 
  public get ignorePollAlarmFailure() {
    return this.getBooleanAttribute('ignore_poll_alarm_failure');
  }
  public set ignorePollAlarmFailure(value: boolean | cdktn.IResolvable) {
    this._ignorePollAlarmFailure = value;
  }
  public resetIgnorePollAlarmFailure() {
    this._ignorePollAlarmFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePollAlarmFailureInput() {
    return this._ignorePollAlarmFailure;
  }
}
export interface AutoRollbackConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#enabled AwsDeploymentGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#events AwsDeploymentGroup#events}
  */
  readonly events?: string[];
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
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoRollbackConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._events = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._events = value.events;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return cdktn.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }
}
export interface DeploymentReadyOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#action_on_timeout AwsDeploymentGroup#action_on_timeout}
  */
  readonly actionOnTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#wait_time_in_minutes AwsDeploymentGroup#wait_time_in_minutes}
  */
  readonly waitTimeInMinutes?: number;
}
export class DeploymentReadyOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentReadyOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnTimeout = this._actionOnTimeout;
    }
    if (this._waitTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeInMinutes = this._waitTimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentReadyOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionOnTimeout = undefined;
      this._waitTimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionOnTimeout = value.actionOnTimeout;
      this._waitTimeInMinutes = value.waitTimeInMinutes;
    }
  }

  // action_on_timeout - computed: false, optional: true, required: false
  private _actionOnTimeout?: string; 
  public get actionOnTimeout() {
    return this.getStringAttribute('action_on_timeout');
  }
  public set actionOnTimeout(value: string) {
    this._actionOnTimeout = value;
  }
  public resetActionOnTimeout() {
    this._actionOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnTimeoutInput() {
    return this._actionOnTimeout;
  }

  // wait_time_in_minutes - computed: false, optional: true, required: false
  private _waitTimeInMinutes?: number; 
  public get waitTimeInMinutes() {
    return this.getNumberAttribute('wait_time_in_minutes');
  }
  public set waitTimeInMinutes(value: number) {
    this._waitTimeInMinutes = value;
  }
  public resetWaitTimeInMinutes() {
    this._waitTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInMinutesInput() {
    return this._waitTimeInMinutes;
  }
}
export interface GreenFleetProvisioningOptionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#action AwsDeploymentGroup#action}
  */
  readonly action?: string;
}
export class GreenFleetProvisioningOptionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GreenFleetProvisioningOptionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GreenFleetProvisioningOptionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface TerminateBlueInstancesOnDeploymentSuccessProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#action AwsDeploymentGroup#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#termination_wait_time_in_minutes AwsDeploymentGroup#termination_wait_time_in_minutes}
  */
  readonly terminationWaitTimeInMinutes?: number;
}
export class TerminateBlueInstancesOnDeploymentSuccessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TerminateBlueInstancesOnDeploymentSuccessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._terminationWaitTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationWaitTimeInMinutes = this._terminationWaitTimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TerminateBlueInstancesOnDeploymentSuccessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._terminationWaitTimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._terminationWaitTimeInMinutes = value.terminationWaitTimeInMinutes;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // termination_wait_time_in_minutes - computed: false, optional: true, required: false
  private _terminationWaitTimeInMinutes?: number; 
  public get terminationWaitTimeInMinutes() {
    return this.getNumberAttribute('termination_wait_time_in_minutes');
  }
  public set terminationWaitTimeInMinutes(value: number) {
    this._terminationWaitTimeInMinutes = value;
  }
  public resetTerminationWaitTimeInMinutes() {
    this._terminationWaitTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationWaitTimeInMinutesInput() {
    return this._terminationWaitTimeInMinutes;
  }
}
export interface BlueGreenDeploymentConfigProperty {
  /**
  * deployment_ready_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#deployment_ready_option AwsDeploymentGroup#deployment_ready_option}
  */
  readonly deploymentReadyOption?: DeploymentReadyOptionProperty;
  /**
  * green_fleet_provisioning_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#green_fleet_provisioning_option AwsDeploymentGroup#green_fleet_provisioning_option}
  */
  readonly greenFleetProvisioningOption?: GreenFleetProvisioningOptionProperty;
  /**
  * terminate_blue_instances_on_deployment_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success AwsDeploymentGroup#terminate_blue_instances_on_deployment_success}
  */
  readonly terminateBlueInstancesOnDeploymentSuccess?: TerminateBlueInstancesOnDeploymentSuccessProperty;
}
export class BlueGreenDeploymentConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlueGreenDeploymentConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentReadyOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentReadyOption = this._deploymentReadyOption?.internalValue;
    }
    if (this._greenFleetProvisioningOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greenFleetProvisioningOption = this._greenFleetProvisioningOption?.internalValue;
    }
    if (this._terminateBlueInstancesOnDeploymentSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateBlueInstancesOnDeploymentSuccess = this._terminateBlueInstancesOnDeploymentSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlueGreenDeploymentConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentReadyOption.internalValue = undefined;
      this._greenFleetProvisioningOption.internalValue = undefined;
      this._terminateBlueInstancesOnDeploymentSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentReadyOption.internalValue = value.deploymentReadyOption;
      this._greenFleetProvisioningOption.internalValue = value.greenFleetProvisioningOption;
      this._terminateBlueInstancesOnDeploymentSuccess.internalValue = value.terminateBlueInstancesOnDeploymentSuccess;
    }
  }

  // deployment_ready_option - computed: false, optional: true, required: false
  private _deploymentReadyOption = new DeploymentReadyOptionPropertyOutputReference(this, "deployment_ready_option");
  public get deploymentReadyOption() {
    return this._deploymentReadyOption;
  }
  public putDeploymentReadyOption(value: DeploymentReadyOptionProperty) {
    this._deploymentReadyOption.internalValue = value;
  }
  public resetDeploymentReadyOption() {
    this._deploymentReadyOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentReadyOptionInput() {
    return this._deploymentReadyOption.internalValue;
  }

  // green_fleet_provisioning_option - computed: false, optional: true, required: false
  private _greenFleetProvisioningOption = new GreenFleetProvisioningOptionPropertyOutputReference(this, "green_fleet_provisioning_option");
  public get greenFleetProvisioningOption() {
    return this._greenFleetProvisioningOption;
  }
  public putGreenFleetProvisioningOption(value: GreenFleetProvisioningOptionProperty) {
    this._greenFleetProvisioningOption.internalValue = value;
  }
  public resetGreenFleetProvisioningOption() {
    this._greenFleetProvisioningOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenFleetProvisioningOptionInput() {
    return this._greenFleetProvisioningOption.internalValue;
  }

  // terminate_blue_instances_on_deployment_success - computed: false, optional: true, required: false
  private _terminateBlueInstancesOnDeploymentSuccess = new TerminateBlueInstancesOnDeploymentSuccessPropertyOutputReference(this, "terminate_blue_instances_on_deployment_success");
  public get terminateBlueInstancesOnDeploymentSuccess() {
    return this._terminateBlueInstancesOnDeploymentSuccess;
  }
  public putTerminateBlueInstancesOnDeploymentSuccess(value: TerminateBlueInstancesOnDeploymentSuccessProperty) {
    this._terminateBlueInstancesOnDeploymentSuccess.internalValue = value;
  }
  public resetTerminateBlueInstancesOnDeploymentSuccess() {
    this._terminateBlueInstancesOnDeploymentSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateBlueInstancesOnDeploymentSuccessInput() {
    return this._terminateBlueInstancesOnDeploymentSuccess.internalValue;
  }
}
export interface DeploymentStyleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#deployment_option AwsDeploymentGroup#deployment_option}
  */
  readonly deploymentOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#deployment_type AwsDeploymentGroup#deployment_type}
  */
  readonly deploymentType?: string;
}
export class DeploymentStylePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeploymentStyleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentOption = this._deploymentOption;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentStyleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentOption = undefined;
      this._deploymentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentOption = value.deploymentOption;
      this._deploymentType = value.deploymentType;
    }
  }

  // deployment_option - computed: false, optional: true, required: false
  private _deploymentOption?: string; 
  public get deploymentOption() {
    return this.getStringAttribute('deployment_option');
  }
  public set deploymentOption(value: string) {
    this._deploymentOption = value;
  }
  public resetDeploymentOption() {
    this._deploymentOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentOptionInput() {
    return this._deploymentOption;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }
}
export interface Ec2TagFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#key AwsDeploymentGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#type AwsDeploymentGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#value AwsDeploymentGroup#value}
  */
  readonly value?: string;
}
export class Ec2TagFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TagFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
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

  public set internalValue(value: Ec2TagFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Ec2TagFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : Ec2TagFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): Ec2TagFilterPropertyOutputReference {
    return new Ec2TagFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2TagSetEc2TagFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#key AwsDeploymentGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#type AwsDeploymentGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#value AwsDeploymentGroup#value}
  */
  readonly value?: string;
}
export class Ec2TagSetEc2TagFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TagSetEc2TagFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
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

  public set internalValue(value: Ec2TagSetEc2TagFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Ec2TagSetEc2TagFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : Ec2TagSetEc2TagFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): Ec2TagSetEc2TagFilterPropertyOutputReference {
    return new Ec2TagSetEc2TagFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2TagSetProperty {
  /**
  * ec2_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#ec2_tag_filter AwsDeploymentGroup#ec2_tag_filter}
  */
  readonly ec2TagFilter?: Ec2TagSetEc2TagFilterProperty[] | cdktn.IResolvable;
}
export class Ec2TagSetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TagSetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2TagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2TagFilter = this._ec2TagFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TagSetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ec2TagFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ec2TagFilter.internalValue = value.ec2TagFilter;
    }
  }

  // ec2_tag_filter - computed: false, optional: true, required: false
  private _ec2TagFilter = new Ec2TagSetEc2TagFilterPropertyList(this, "ec2_tag_filter", true);
  public get ec2TagFilter() {
    return this._ec2TagFilter;
  }
  public putEc2TagFilter(value: Ec2TagSetEc2TagFilterProperty[] | cdktn.IResolvable) {
    this._ec2TagFilter.internalValue = value;
  }
  public resetEc2TagFilter() {
    this._ec2TagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2TagFilterInput() {
    return this._ec2TagFilter.internalValue;
  }
}

export class Ec2TagSetPropertyList extends cdktn.ComplexList {
  public internalValue? : Ec2TagSetProperty[] | cdktn.IResolvable

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
  public get(index: number): Ec2TagSetPropertyOutputReference {
    return new Ec2TagSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServiceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#cluster_name AwsDeploymentGroup#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#service_name AwsDeploymentGroup#service_name}
  */
  readonly serviceName: string;
}
export class EcsServicePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._serviceName = value.serviceName;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface ElbInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#name AwsDeploymentGroup#name}
  */
  readonly name?: string;
}
export class ElbInfoPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElbInfoProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElbInfoProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class ElbInfoPropertyList extends cdktn.ComplexList {
  public internalValue? : ElbInfoProperty[] | cdktn.IResolvable

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
  public get(index: number): ElbInfoPropertyOutputReference {
    return new ElbInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetGroupInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#name AwsDeploymentGroup#name}
  */
  readonly name?: string;
}
export class TargetGroupInfoPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetGroupInfoProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGroupInfoProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class TargetGroupInfoPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetGroupInfoProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetGroupInfoPropertyOutputReference {
    return new TargetGroupInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProdTrafficRouteProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#listener_arns AwsDeploymentGroup#listener_arns}
  */
  readonly listenerArns: string[];
}
export class ProdTrafficRoutePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProdTrafficRouteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerArns = this._listenerArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProdTrafficRouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listenerArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listenerArns = value.listenerArns;
    }
  }

  // listener_arns - computed: false, optional: false, required: true
  private _listenerArns?: string[]; 
  public get listenerArns() {
    return cdktn.Fn.tolist(this.getListAttribute('listener_arns'));
  }
  public set listenerArns(value: string[]) {
    this._listenerArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnsInput() {
    return this._listenerArns;
  }
}
export interface TargetGroupProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#name AwsDeploymentGroup#name}
  */
  readonly name: string;
}
export class TargetGroupPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetGroupProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGroupProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class TargetGroupPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetGroupProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetGroupPropertyOutputReference {
    return new TargetGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestTrafficRouteProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#listener_arns AwsDeploymentGroup#listener_arns}
  */
  readonly listenerArns: string[];
}
export class TestTrafficRoutePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TestTrafficRouteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerArns = this._listenerArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestTrafficRouteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listenerArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listenerArns = value.listenerArns;
    }
  }

  // listener_arns - computed: false, optional: false, required: true
  private _listenerArns?: string[]; 
  public get listenerArns() {
    return cdktn.Fn.tolist(this.getListAttribute('listener_arns'));
  }
  public set listenerArns(value: string[]) {
    this._listenerArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnsInput() {
    return this._listenerArns;
  }
}
export interface TargetGroupPairInfoProperty {
  /**
  * prod_traffic_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#prod_traffic_route AwsDeploymentGroup#prod_traffic_route}
  */
  readonly prodTrafficRoute: ProdTrafficRouteProperty;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#target_group AwsDeploymentGroup#target_group}
  */
  readonly targetGroup: TargetGroupProperty[] | cdktn.IResolvable;
  /**
  * test_traffic_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#test_traffic_route AwsDeploymentGroup#test_traffic_route}
  */
  readonly testTrafficRoute?: TestTrafficRouteProperty;
}
export class TargetGroupPairInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetGroupPairInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prodTrafficRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prodTrafficRoute = this._prodTrafficRoute?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    if (this._testTrafficRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testTrafficRoute = this._testTrafficRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGroupPairInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prodTrafficRoute.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
      this._testTrafficRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prodTrafficRoute.internalValue = value.prodTrafficRoute;
      this._targetGroup.internalValue = value.targetGroup;
      this._testTrafficRoute.internalValue = value.testTrafficRoute;
    }
  }

  // prod_traffic_route - computed: false, optional: false, required: true
  private _prodTrafficRoute = new ProdTrafficRoutePropertyOutputReference(this, "prod_traffic_route");
  public get prodTrafficRoute() {
    return this._prodTrafficRoute;
  }
  public putProdTrafficRoute(value: ProdTrafficRouteProperty) {
    this._prodTrafficRoute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prodTrafficRouteInput() {
    return this._prodTrafficRoute.internalValue;
  }

  // target_group - computed: false, optional: false, required: true
  private _targetGroup = new TargetGroupPropertyList(this, "target_group", false);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: TargetGroupProperty[] | cdktn.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }

  // test_traffic_route - computed: false, optional: true, required: false
  private _testTrafficRoute = new TestTrafficRoutePropertyOutputReference(this, "test_traffic_route");
  public get testTrafficRoute() {
    return this._testTrafficRoute;
  }
  public putTestTrafficRoute(value: TestTrafficRouteProperty) {
    this._testTrafficRoute.internalValue = value;
  }
  public resetTestTrafficRoute() {
    this._testTrafficRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTrafficRouteInput() {
    return this._testTrafficRoute.internalValue;
  }
}
export interface LoadBalancerInfoProperty {
  /**
  * elb_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#elb_info AwsDeploymentGroup#elb_info}
  */
  readonly elbInfo?: ElbInfoProperty[] | cdktn.IResolvable;
  /**
  * target_group_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#target_group_info AwsDeploymentGroup#target_group_info}
  */
  readonly targetGroupInfo?: TargetGroupInfoProperty[] | cdktn.IResolvable;
  /**
  * target_group_pair_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#target_group_pair_info AwsDeploymentGroup#target_group_pair_info}
  */
  readonly targetGroupPairInfo?: TargetGroupPairInfoProperty;
}
export class LoadBalancerInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elbInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbInfo = this._elbInfo?.internalValue;
    }
    if (this._targetGroupInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupInfo = this._targetGroupInfo?.internalValue;
    }
    if (this._targetGroupPairInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupPairInfo = this._targetGroupPairInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elbInfo.internalValue = undefined;
      this._targetGroupInfo.internalValue = undefined;
      this._targetGroupPairInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elbInfo.internalValue = value.elbInfo;
      this._targetGroupInfo.internalValue = value.targetGroupInfo;
      this._targetGroupPairInfo.internalValue = value.targetGroupPairInfo;
    }
  }

  // elb_info - computed: false, optional: true, required: false
  private _elbInfo = new ElbInfoPropertyList(this, "elb_info", true);
  public get elbInfo() {
    return this._elbInfo;
  }
  public putElbInfo(value: ElbInfoProperty[] | cdktn.IResolvable) {
    this._elbInfo.internalValue = value;
  }
  public resetElbInfo() {
    this._elbInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbInfoInput() {
    return this._elbInfo.internalValue;
  }

  // target_group_info - computed: false, optional: true, required: false
  private _targetGroupInfo = new TargetGroupInfoPropertyList(this, "target_group_info", true);
  public get targetGroupInfo() {
    return this._targetGroupInfo;
  }
  public putTargetGroupInfo(value: TargetGroupInfoProperty[] | cdktn.IResolvable) {
    this._targetGroupInfo.internalValue = value;
  }
  public resetTargetGroupInfo() {
    this._targetGroupInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInfoInput() {
    return this._targetGroupInfo.internalValue;
  }

  // target_group_pair_info - computed: false, optional: true, required: false
  private _targetGroupPairInfo = new TargetGroupPairInfoPropertyOutputReference(this, "target_group_pair_info");
  public get targetGroupPairInfo() {
    return this._targetGroupPairInfo;
  }
  public putTargetGroupPairInfo(value: TargetGroupPairInfoProperty) {
    this._targetGroupPairInfo.internalValue = value;
  }
  public resetTargetGroupPairInfo() {
    this._targetGroupPairInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupPairInfoInput() {
    return this._targetGroupPairInfo.internalValue;
  }
}
export interface OnPremisesInstanceTagFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#key AwsDeploymentGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#type AwsDeploymentGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#value AwsDeploymentGroup#value}
  */
  readonly value?: string;
}
export class OnPremisesInstanceTagFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OnPremisesInstanceTagFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
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

  public set internalValue(value: OnPremisesInstanceTagFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OnPremisesInstanceTagFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : OnPremisesInstanceTagFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): OnPremisesInstanceTagFilterPropertyOutputReference {
    return new OnPremisesInstanceTagFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TriggerConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#trigger_events AwsDeploymentGroup#trigger_events}
  */
  readonly triggerEvents: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#trigger_name AwsDeploymentGroup#trigger_name}
  */
  readonly triggerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/codedeploy_deployment_group#trigger_target_arn AwsDeploymentGroup#trigger_target_arn}
  */
  readonly triggerTargetArn: string;
}
export class TriggerConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TriggerConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._triggerEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerEvents = this._triggerEvents;
    }
    if (this._triggerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerName = this._triggerName;
    }
    if (this._triggerTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerTargetArn = this._triggerTargetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TriggerConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._triggerEvents = undefined;
      this._triggerName = undefined;
      this._triggerTargetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._triggerEvents = value.triggerEvents;
      this._triggerName = value.triggerName;
      this._triggerTargetArn = value.triggerTargetArn;
    }
  }

  // trigger_events - computed: false, optional: false, required: true
  private _triggerEvents?: string[]; 
  public get triggerEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('trigger_events'));
  }
  public set triggerEvents(value: string[]) {
    this._triggerEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerEventsInput() {
    return this._triggerEvents;
  }

  // trigger_name - computed: false, optional: false, required: true
  private _triggerName?: string; 
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }
  public set triggerName(value: string) {
    this._triggerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerNameInput() {
    return this._triggerName;
  }

  // trigger_target_arn - computed: false, optional: false, required: true
  private _triggerTargetArn?: string; 
  public get triggerTargetArn() {
    return this.getStringAttribute('trigger_target_arn');
  }
  public set triggerTargetArn(value: string) {
    this._triggerTargetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTargetArnInput() {
    return this._triggerTargetArn;
  }
}

export class TriggerConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TriggerConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TriggerConfigurationPropertyOutputReference {
    return new TriggerConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
