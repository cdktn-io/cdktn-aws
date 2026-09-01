// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsEmrClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#additional_info AwsEmrCluster#additional_info}
  */
  readonly additionalInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#applications AwsEmrCluster#applications}
  */
  readonly applications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#autoscaling_role AwsEmrCluster#autoscaling_role}
  */
  readonly autoscalingRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#configurations AwsEmrCluster#configurations}
  */
  readonly configurations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#configurations_json AwsEmrCluster#configurations_json}
  */
  readonly configurationsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#custom_ami_id AwsEmrCluster#custom_ami_id}
  */
  readonly customAmiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#ebs_root_volume_size AwsEmrCluster#ebs_root_volume_size}
  */
  readonly ebsRootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#id AwsEmrCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#keep_job_flow_alive_when_no_steps AwsEmrCluster#keep_job_flow_alive_when_no_steps}
  */
  readonly keepJobFlowAliveWhenNoSteps?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#list_steps_states AwsEmrCluster#list_steps_states}
  */
  readonly listStepsStates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#log_encryption_kms_key_id AwsEmrCluster#log_encryption_kms_key_id}
  */
  readonly logEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#log_uri AwsEmrCluster#log_uri}
  */
  readonly logUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#name AwsEmrCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#os_release_label AwsEmrCluster#os_release_label}
  */
  readonly osReleaseLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#placement_group_config AwsEmrCluster#placement_group_config}
  */
  readonly placementGroupConfig?: AwsEmrCluster.PlacementGroupConfigProperty[] | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#region AwsEmrCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#release_label AwsEmrCluster#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#scale_down_behavior AwsEmrCluster#scale_down_behavior}
  */
  readonly scaleDownBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#security_configuration AwsEmrCluster#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#service_role AwsEmrCluster#service_role}
  */
  readonly serviceRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#step AwsEmrCluster#step}
  */
  readonly step?: AwsEmrCluster.StepProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#step_concurrency_level AwsEmrCluster#step_concurrency_level}
  */
  readonly stepConcurrencyLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#tags AwsEmrCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#tags_all AwsEmrCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#termination_protection AwsEmrCluster#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#unhealthy_node_replacement AwsEmrCluster#unhealthy_node_replacement}
  */
  readonly unhealthyNodeReplacement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#visible_to_all_users AwsEmrCluster#visible_to_all_users}
  */
  readonly visibleToAllUsers?: boolean | cdktn.IResolvable;
  /**
  * auto_termination_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#auto_termination_policy AwsEmrCluster#auto_termination_policy}
  */
  readonly autoTerminationPolicy?: AwsEmrCluster.AutoTerminationPolicyProperty;
  /**
  * bootstrap_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#bootstrap_action AwsEmrCluster#bootstrap_action}
  */
  readonly bootstrapAction?: AwsEmrCluster.BootstrapActionProperty[] | cdktn.IResolvable;
  /**
  * core_instance_fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#core_instance_fleet AwsEmrCluster#core_instance_fleet}
  */
  readonly coreInstanceFleet?: AwsEmrCluster.CoreInstanceFleetProperty;
  /**
  * core_instance_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#core_instance_group AwsEmrCluster#core_instance_group}
  */
  readonly coreInstanceGroup?: AwsEmrCluster.CoreInstanceGroupProperty;
  /**
  * ec2_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#ec2_attributes AwsEmrCluster#ec2_attributes}
  */
  readonly ec2Attributes?: AwsEmrCluster.Ec2AttributesProperty;
  /**
  * kerberos_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#kerberos_attributes AwsEmrCluster#kerberos_attributes}
  */
  readonly kerberosAttributes?: AwsEmrCluster.KerberosAttributesProperty;
  /**
  * master_instance_fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#master_instance_fleet AwsEmrCluster#master_instance_fleet}
  */
  readonly masterInstanceFleet?: AwsEmrCluster.MasterInstanceFleetProperty;
  /**
  * master_instance_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#master_instance_group AwsEmrCluster#master_instance_group}
  */
  readonly masterInstanceGroup?: AwsEmrCluster.MasterInstanceGroupProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster aws_emr_cluster}
*/
export class AwsEmrCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsEmrCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsEmrCluster to import
  * @param importFromId The id of the existing AwsEmrCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsEmrCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_emr_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster aws_emr_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsEmrClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AwsEmrClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_cluster',
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
    this._additionalInfo = config.additionalInfo;
    this._applications = config.applications;
    this._autoscalingRole = config.autoscalingRole;
    this._configurations = config.configurations;
    this._configurationsJson = config.configurationsJson;
    this._customAmiId = config.customAmiId;
    this._ebsRootVolumeSize = config.ebsRootVolumeSize;
    this._id = config.id;
    this._keepJobFlowAliveWhenNoSteps = config.keepJobFlowAliveWhenNoSteps;
    this._listStepsStates = config.listStepsStates;
    this._logEncryptionKmsKeyId = config.logEncryptionKmsKeyId;
    this._logUri = config.logUri;
    this._name = config.name;
    this._osReleaseLabel = config.osReleaseLabel;
    this._placementGroupConfig.internalValue = config.placementGroupConfig;
    this._region = config.region;
    this._releaseLabel = config.releaseLabel;
    this._scaleDownBehavior = config.scaleDownBehavior;
    this._securityConfiguration = config.securityConfiguration;
    this._serviceRole = config.serviceRole;
    this._step.internalValue = config.step;
    this._stepConcurrencyLevel = config.stepConcurrencyLevel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._terminationProtection = config.terminationProtection;
    this._unhealthyNodeReplacement = config.unhealthyNodeReplacement;
    this._visibleToAllUsers = config.visibleToAllUsers;
    this._autoTerminationPolicy.internalValue = config.autoTerminationPolicy;
    this._bootstrapAction.internalValue = config.bootstrapAction;
    this._coreInstanceFleet.internalValue = config.coreInstanceFleet;
    this._coreInstanceGroup.internalValue = config.coreInstanceGroup;
    this._ec2Attributes.internalValue = config.ec2Attributes;
    this._kerberosAttributes.internalValue = config.kerberosAttributes;
    this._masterInstanceFleet.internalValue = config.masterInstanceFleet;
    this._masterInstanceGroup.internalValue = config.masterInstanceGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo?: string; 
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }
  public set additionalInfo(value: string) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktn.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_role - computed: false, optional: true, required: false
  private _autoscalingRole?: string; 
  public get autoscalingRole() {
    return this.getStringAttribute('autoscaling_role');
  }
  public set autoscalingRole(value: string) {
    this._autoscalingRole = value;
  }
  public resetAutoscalingRole() {
    this._autoscalingRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingRoleInput() {
    return this._autoscalingRole;
  }

  // cluster_state - computed: true, optional: false, required: false
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations?: string; 
  public get configurations() {
    return this.getStringAttribute('configurations');
  }
  public set configurations(value: string) {
    this._configurations = value;
  }
  public resetConfigurations() {
    this._configurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations;
  }

  // configurations_json - computed: false, optional: true, required: false
  private _configurationsJson?: string; 
  public get configurationsJson() {
    return this.getStringAttribute('configurations_json');
  }
  public set configurationsJson(value: string) {
    this._configurationsJson = value;
  }
  public resetConfigurationsJson() {
    this._configurationsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsJsonInput() {
    return this._configurationsJson;
  }

  // custom_ami_id - computed: false, optional: true, required: false
  private _customAmiId?: string; 
  public get customAmiId() {
    return this.getStringAttribute('custom_ami_id');
  }
  public set customAmiId(value: string) {
    this._customAmiId = value;
  }
  public resetCustomAmiId() {
    this._customAmiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAmiIdInput() {
    return this._customAmiId;
  }

  // ebs_root_volume_size - computed: false, optional: true, required: false
  private _ebsRootVolumeSize?: number; 
  public get ebsRootVolumeSize() {
    return this.getNumberAttribute('ebs_root_volume_size');
  }
  public set ebsRootVolumeSize(value: number) {
    this._ebsRootVolumeSize = value;
  }
  public resetEbsRootVolumeSize() {
    this._ebsRootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsRootVolumeSizeInput() {
    return this._ebsRootVolumeSize;
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

  // keep_job_flow_alive_when_no_steps - computed: true, optional: true, required: false
  private _keepJobFlowAliveWhenNoSteps?: boolean | cdktn.IResolvable; 
  public get keepJobFlowAliveWhenNoSteps() {
    return this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
  }
  public set keepJobFlowAliveWhenNoSteps(value: boolean | cdktn.IResolvable) {
    this._keepJobFlowAliveWhenNoSteps = value;
  }
  public resetKeepJobFlowAliveWhenNoSteps() {
    this._keepJobFlowAliveWhenNoSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobFlowAliveWhenNoStepsInput() {
    return this._keepJobFlowAliveWhenNoSteps;
  }

  // list_steps_states - computed: false, optional: true, required: false
  private _listStepsStates?: string[]; 
  public get listStepsStates() {
    return cdktn.Fn.tolist(this.getListAttribute('list_steps_states'));
  }
  public set listStepsStates(value: string[]) {
    this._listStepsStates = value;
  }
  public resetListStepsStates() {
    this._listStepsStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listStepsStatesInput() {
    return this._listStepsStates;
  }

  // log_encryption_kms_key_id - computed: false, optional: true, required: false
  private _logEncryptionKmsKeyId?: string; 
  public get logEncryptionKmsKeyId() {
    return this.getStringAttribute('log_encryption_kms_key_id');
  }
  public set logEncryptionKmsKeyId(value: string) {
    this._logEncryptionKmsKeyId = value;
  }
  public resetLogEncryptionKmsKeyId() {
    this._logEncryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEncryptionKmsKeyIdInput() {
    return this._logEncryptionKmsKeyId;
  }

  // log_uri - computed: false, optional: true, required: false
  private _logUri?: string; 
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }
  public set logUri(value: string) {
    this._logUri = value;
  }
  public resetLogUri() {
    this._logUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUriInput() {
    return this._logUri;
  }

  // master_public_dns - computed: true, optional: false, required: false
  public get masterPublicDns() {
    return this.getStringAttribute('master_public_dns');
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

  // os_release_label - computed: false, optional: true, required: false
  private _osReleaseLabel?: string; 
  public get osReleaseLabel() {
    return this.getStringAttribute('os_release_label');
  }
  public set osReleaseLabel(value: string) {
    this._osReleaseLabel = value;
  }
  public resetOsReleaseLabel() {
    this._osReleaseLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osReleaseLabelInput() {
    return this._osReleaseLabel;
  }

  // placement_group_config - computed: false, optional: true, required: false
  private _placementGroupConfig = new AwsEmrCluster.PlacementGroupConfigPropertyList(this, "placement_group_config", false);
  public get placementGroupConfig() {
    return this._placementGroupConfig;
  }
  public putPlacementGroupConfig(value: AwsEmrCluster.PlacementGroupConfigProperty[] | cdktn.IResolvable) {
    this._placementGroupConfig.internalValue = value;
  }
  public resetPlacementGroupConfig() {
    this._placementGroupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupConfigInput() {
    return this._placementGroupConfig.internalValue;
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

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // scale_down_behavior - computed: true, optional: true, required: false
  private _scaleDownBehavior?: string; 
  public get scaleDownBehavior() {
    return this.getStringAttribute('scale_down_behavior');
  }
  public set scaleDownBehavior(value: string) {
    this._scaleDownBehavior = value;
  }
  public resetScaleDownBehavior() {
    this._scaleDownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownBehaviorInput() {
    return this._scaleDownBehavior;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string; 
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string) {
    this._securityConfiguration = value;
  }
  public resetSecurityConfiguration() {
    this._securityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationInput() {
    return this._securityConfiguration;
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }

  // step - computed: true, optional: true, required: false
  private _step = new AwsEmrCluster.StepPropertyList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: AwsEmrCluster.StepProperty[] | cdktn.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }

  // step_concurrency_level - computed: false, optional: true, required: false
  private _stepConcurrencyLevel?: number; 
  public get stepConcurrencyLevel() {
    return this.getNumberAttribute('step_concurrency_level');
  }
  public set stepConcurrencyLevel(value: number) {
    this._stepConcurrencyLevel = value;
  }
  public resetStepConcurrencyLevel() {
    this._stepConcurrencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepConcurrencyLevelInput() {
    return this._stepConcurrencyLevel;
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

  // termination_protection - computed: true, optional: true, required: false
  private _terminationProtection?: boolean | cdktn.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktn.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
  }

  // unhealthy_node_replacement - computed: false, optional: true, required: false
  private _unhealthyNodeReplacement?: boolean | cdktn.IResolvable; 
  public get unhealthyNodeReplacement() {
    return this.getBooleanAttribute('unhealthy_node_replacement');
  }
  public set unhealthyNodeReplacement(value: boolean | cdktn.IResolvable) {
    this._unhealthyNodeReplacement = value;
  }
  public resetUnhealthyNodeReplacement() {
    this._unhealthyNodeReplacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyNodeReplacementInput() {
    return this._unhealthyNodeReplacement;
  }

  // visible_to_all_users - computed: false, optional: true, required: false
  private _visibleToAllUsers?: boolean | cdktn.IResolvable; 
  public get visibleToAllUsers() {
    return this.getBooleanAttribute('visible_to_all_users');
  }
  public set visibleToAllUsers(value: boolean | cdktn.IResolvable) {
    this._visibleToAllUsers = value;
  }
  public resetVisibleToAllUsers() {
    this._visibleToAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleToAllUsersInput() {
    return this._visibleToAllUsers;
  }

  // auto_termination_policy - computed: false, optional: true, required: false
  private _autoTerminationPolicy = new AwsEmrCluster.AutoTerminationPolicyPropertyOutputReference(this, "auto_termination_policy");
  public get autoTerminationPolicy() {
    return this._autoTerminationPolicy;
  }
  public putAutoTerminationPolicy(value: AwsEmrCluster.AutoTerminationPolicyProperty) {
    this._autoTerminationPolicy.internalValue = value;
  }
  public resetAutoTerminationPolicy() {
    this._autoTerminationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTerminationPolicyInput() {
    return this._autoTerminationPolicy.internalValue;
  }

  // bootstrap_action - computed: false, optional: true, required: false
  private _bootstrapAction = new AwsEmrCluster.BootstrapActionPropertyList(this, "bootstrap_action", false);
  public get bootstrapAction() {
    return this._bootstrapAction;
  }
  public putBootstrapAction(value: AwsEmrCluster.BootstrapActionProperty[] | cdktn.IResolvable) {
    this._bootstrapAction.internalValue = value;
  }
  public resetBootstrapAction() {
    this._bootstrapAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapActionInput() {
    return this._bootstrapAction.internalValue;
  }

  // core_instance_fleet - computed: false, optional: true, required: false
  private _coreInstanceFleet = new AwsEmrCluster.CoreInstanceFleetPropertyOutputReference(this, "core_instance_fleet");
  public get coreInstanceFleet() {
    return this._coreInstanceFleet;
  }
  public putCoreInstanceFleet(value: AwsEmrCluster.CoreInstanceFleetProperty) {
    this._coreInstanceFleet.internalValue = value;
  }
  public resetCoreInstanceFleet() {
    this._coreInstanceFleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceFleetInput() {
    return this._coreInstanceFleet.internalValue;
  }

  // core_instance_group - computed: false, optional: true, required: false
  private _coreInstanceGroup = new AwsEmrCluster.CoreInstanceGroupPropertyOutputReference(this, "core_instance_group");
  public get coreInstanceGroup() {
    return this._coreInstanceGroup;
  }
  public putCoreInstanceGroup(value: AwsEmrCluster.CoreInstanceGroupProperty) {
    this._coreInstanceGroup.internalValue = value;
  }
  public resetCoreInstanceGroup() {
    this._coreInstanceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceGroupInput() {
    return this._coreInstanceGroup.internalValue;
  }

  // ec2_attributes - computed: false, optional: true, required: false
  private _ec2Attributes = new AwsEmrCluster.Ec2AttributesPropertyOutputReference(this, "ec2_attributes");
  public get ec2Attributes() {
    return this._ec2Attributes;
  }
  public putEc2Attributes(value: AwsEmrCluster.Ec2AttributesProperty) {
    this._ec2Attributes.internalValue = value;
  }
  public resetEc2Attributes() {
    this._ec2Attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2AttributesInput() {
    return this._ec2Attributes.internalValue;
  }

  // kerberos_attributes - computed: false, optional: true, required: false
  private _kerberosAttributes = new AwsEmrCluster.KerberosAttributesPropertyOutputReference(this, "kerberos_attributes");
  public get kerberosAttributes() {
    return this._kerberosAttributes;
  }
  public putKerberosAttributes(value: AwsEmrCluster.KerberosAttributesProperty) {
    this._kerberosAttributes.internalValue = value;
  }
  public resetKerberosAttributes() {
    this._kerberosAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosAttributesInput() {
    return this._kerberosAttributes.internalValue;
  }

  // master_instance_fleet - computed: false, optional: true, required: false
  private _masterInstanceFleet = new AwsEmrCluster.MasterInstanceFleetPropertyOutputReference(this, "master_instance_fleet");
  public get masterInstanceFleet() {
    return this._masterInstanceFleet;
  }
  public putMasterInstanceFleet(value: AwsEmrCluster.MasterInstanceFleetProperty) {
    this._masterInstanceFleet.internalValue = value;
  }
  public resetMasterInstanceFleet() {
    this._masterInstanceFleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceFleetInput() {
    return this._masterInstanceFleet.internalValue;
  }

  // master_instance_group - computed: false, optional: true, required: false
  private _masterInstanceGroup = new AwsEmrCluster.MasterInstanceGroupPropertyOutputReference(this, "master_instance_group");
  public get masterInstanceGroup() {
    return this._masterInstanceGroup;
  }
  public putMasterInstanceGroup(value: AwsEmrCluster.MasterInstanceGroupProperty) {
    this._masterInstanceGroup.internalValue = value;
  }
  public resetMasterInstanceGroup() {
    this._masterInstanceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceGroupInput() {
    return this._masterInstanceGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktn.stringToTerraform(this._additionalInfo),
      applications: cdktn.listMapper(cdktn.stringToTerraform, false)(this._applications),
      autoscaling_role: cdktn.stringToTerraform(this._autoscalingRole),
      configurations: cdktn.stringToTerraform(this._configurations),
      configurations_json: cdktn.stringToTerraform(this._configurationsJson),
      custom_ami_id: cdktn.stringToTerraform(this._customAmiId),
      ebs_root_volume_size: cdktn.numberToTerraform(this._ebsRootVolumeSize),
      id: cdktn.stringToTerraform(this._id),
      keep_job_flow_alive_when_no_steps: cdktn.booleanToTerraform(this._keepJobFlowAliveWhenNoSteps),
      list_steps_states: cdktn.listMapper(cdktn.stringToTerraform, false)(this._listStepsStates),
      log_encryption_kms_key_id: cdktn.stringToTerraform(this._logEncryptionKmsKeyId),
      log_uri: cdktn.stringToTerraform(this._logUri),
      name: cdktn.stringToTerraform(this._name),
      os_release_label: cdktn.stringToTerraform(this._osReleaseLabel),
      placement_group_config: cdktn.listMapper(awsEmrClusterPlacementGroupConfigPropertyToTerraform, false)(this._placementGroupConfig.internalValue),
      region: cdktn.stringToTerraform(this._region),
      release_label: cdktn.stringToTerraform(this._releaseLabel),
      scale_down_behavior: cdktn.stringToTerraform(this._scaleDownBehavior),
      security_configuration: cdktn.stringToTerraform(this._securityConfiguration),
      service_role: cdktn.stringToTerraform(this._serviceRole),
      step: cdktn.listMapper(awsEmrClusterStepPropertyToTerraform, false)(this._step.internalValue),
      step_concurrency_level: cdktn.numberToTerraform(this._stepConcurrencyLevel),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      termination_protection: cdktn.booleanToTerraform(this._terminationProtection),
      unhealthy_node_replacement: cdktn.booleanToTerraform(this._unhealthyNodeReplacement),
      visible_to_all_users: cdktn.booleanToTerraform(this._visibleToAllUsers),
      auto_termination_policy: awsEmrClusterAutoTerminationPolicyPropertyToTerraform(this._autoTerminationPolicy.internalValue),
      bootstrap_action: cdktn.listMapper(awsEmrClusterBootstrapActionPropertyToTerraform, true)(this._bootstrapAction.internalValue),
      core_instance_fleet: awsEmrClusterCoreInstanceFleetPropertyToTerraform(this._coreInstanceFleet.internalValue),
      core_instance_group: awsEmrClusterCoreInstanceGroupPropertyToTerraform(this._coreInstanceGroup.internalValue),
      ec2_attributes: awsEmrClusterEc2AttributesPropertyToTerraform(this._ec2Attributes.internalValue),
      kerberos_attributes: awsEmrClusterKerberosAttributesPropertyToTerraform(this._kerberosAttributes.internalValue),
      master_instance_fleet: awsEmrClusterMasterInstanceFleetPropertyToTerraform(this._masterInstanceFleet.internalValue),
      master_instance_group: awsEmrClusterMasterInstanceGroupPropertyToTerraform(this._masterInstanceGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_info: {
        value: cdktn.stringToHclTerraform(this._additionalInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applications: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      autoscaling_role: {
        value: cdktn.stringToHclTerraform(this._autoscalingRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configurations: {
        value: cdktn.stringToHclTerraform(this._configurations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configurations_json: {
        value: cdktn.stringToHclTerraform(this._configurationsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_ami_id: {
        value: cdktn.stringToHclTerraform(this._customAmiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_root_volume_size: {
        value: cdktn.numberToHclTerraform(this._ebsRootVolumeSize),
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
      keep_job_flow_alive_when_no_steps: {
        value: cdktn.booleanToHclTerraform(this._keepJobFlowAliveWhenNoSteps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      list_steps_states: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._listStepsStates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_encryption_kms_key_id: {
        value: cdktn.stringToHclTerraform(this._logEncryptionKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_uri: {
        value: cdktn.stringToHclTerraform(this._logUri),
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
      os_release_label: {
        value: cdktn.stringToHclTerraform(this._osReleaseLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_group_config: {
        value: cdktn.listMapperHcl(awsEmrClusterPlacementGroupConfigPropertyToHclTerraform, false)(this._placementGroupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.PlacementGroupConfigPropertyList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_label: {
        value: cdktn.stringToHclTerraform(this._releaseLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_down_behavior: {
        value: cdktn.stringToHclTerraform(this._scaleDownBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_configuration: {
        value: cdktn.stringToHclTerraform(this._securityConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_role: {
        value: cdktn.stringToHclTerraform(this._serviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      step: {
        value: cdktn.listMapperHcl(awsEmrClusterStepPropertyToHclTerraform, false)(this._step.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.StepPropertyList",
      },
      step_concurrency_level: {
        value: cdktn.numberToHclTerraform(this._stepConcurrencyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      termination_protection: {
        value: cdktn.booleanToHclTerraform(this._terminationProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unhealthy_node_replacement: {
        value: cdktn.booleanToHclTerraform(this._unhealthyNodeReplacement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      visible_to_all_users: {
        value: cdktn.booleanToHclTerraform(this._visibleToAllUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_termination_policy: {
        value: awsEmrClusterAutoTerminationPolicyPropertyToHclTerraform(this._autoTerminationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.AutoTerminationPolicyPropertyList",
      },
      bootstrap_action: {
        value: cdktn.listMapperHcl(awsEmrClusterBootstrapActionPropertyToHclTerraform, true)(this._bootstrapAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.BootstrapActionPropertyList",
      },
      core_instance_fleet: {
        value: awsEmrClusterCoreInstanceFleetPropertyToHclTerraform(this._coreInstanceFleet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.CoreInstanceFleetPropertyList",
      },
      core_instance_group: {
        value: awsEmrClusterCoreInstanceGroupPropertyToHclTerraform(this._coreInstanceGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.CoreInstanceGroupPropertyList",
      },
      ec2_attributes: {
        value: awsEmrClusterEc2AttributesPropertyToHclTerraform(this._ec2Attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.Ec2AttributesPropertyList",
      },
      kerberos_attributes: {
        value: awsEmrClusterKerberosAttributesPropertyToHclTerraform(this._kerberosAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.KerberosAttributesPropertyList",
      },
      master_instance_fleet: {
        value: awsEmrClusterMasterInstanceFleetPropertyToHclTerraform(this._masterInstanceFleet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.MasterInstanceFleetPropertyList",
      },
      master_instance_group: {
        value: awsEmrClusterMasterInstanceGroupPropertyToHclTerraform(this._masterInstanceGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsEmrCluster.MasterInstanceGroupPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsEmrClusterPlacementGroupConfigPropertyToTerraform(struct?: AwsEmrCluster.PlacementGroupConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_role: cdktn.stringToTerraform(struct!.instanceRole),
    placement_strategy: cdktn.stringToTerraform(struct!.placementStrategy),
  }
}


export function awsEmrClusterPlacementGroupConfigPropertyToHclTerraform(struct?: AwsEmrCluster.PlacementGroupConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_role: {
      value: cdktn.stringToHclTerraform(struct!.instanceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement_strategy: {
      value: cdktn.stringToHclTerraform(struct!.placementStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterHadoopJarStepPropertyToTerraform(struct?: AwsEmrCluster.HadoopJarStepProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: struct!.args === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    jar: struct!.jar === undefined ? null : cdktn.stringToTerraform(struct!.jar),
    main_class: struct!.mainClass === undefined ? null : cdktn.stringToTerraform(struct!.mainClass),
    properties: struct!.properties === undefined ? null : cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
  }
}


export function awsEmrClusterHadoopJarStepPropertyToHclTerraform(struct?: AwsEmrCluster.HadoopJarStepProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: struct!.args === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar: {
      value: struct!.jar === undefined ? null : cdktn.stringToHclTerraform(struct!.jar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_class: {
      value: struct!.mainClass === undefined ? null : cdktn.stringToHclTerraform(struct!.mainClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: struct!.properties === undefined ? null : cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterStepPropertyToTerraform(struct?: AwsEmrCluster.StepProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_on_failure: struct!.actionOnFailure === undefined ? null : cdktn.stringToTerraform(struct!.actionOnFailure),
    hadoop_jar_step: struct!.hadoopJarStep === undefined ? null : cdktn.listMapper(awsEmrClusterHadoopJarStepPropertyToTerraform, false)(struct!.hadoopJarStep),
    name: struct!.name === undefined ? null : cdktn.stringToTerraform(struct!.name),
  }
}


export function awsEmrClusterStepPropertyToHclTerraform(struct?: AwsEmrCluster.StepProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_on_failure: {
      value: struct!.actionOnFailure === undefined ? null : cdktn.stringToHclTerraform(struct!.actionOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hadoop_jar_step: {
      value: struct!.hadoopJarStep === undefined ? null : cdktn.listMapperHcl(awsEmrClusterHadoopJarStepPropertyToHclTerraform, false)(struct!.hadoopJarStep),
      isBlock: true,
      type: "list",
      storageClassType: "HadoopJarStepPropertyList",
    },
    name: {
      value: struct!.name === undefined ? null : cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterAutoTerminationPolicyPropertyToTerraform(struct?: AwsEmrCluster.AutoTerminationPolicyPropertyOutputReference | AwsEmrCluster.AutoTerminationPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_timeout: cdktn.numberToTerraform(struct!.idleTimeout),
  }
}


export function awsEmrClusterAutoTerminationPolicyPropertyToHclTerraform(struct?: AwsEmrCluster.AutoTerminationPolicyPropertyOutputReference | AwsEmrCluster.AutoTerminationPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_timeout: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterBootstrapActionPropertyToTerraform(struct?: AwsEmrCluster.BootstrapActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsEmrClusterBootstrapActionPropertyToHclTerraform(struct?: AwsEmrCluster.BootstrapActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceFleetInstanceTypeConfigsConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classification: cdktn.stringToTerraform(struct!.classification),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
  }
}


export function awsEmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceFleetInstanceTypeConfigsConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    classification: {
      value: cdktn.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceFleetInstanceTypeConfigsEbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iops: cdktn.numberToTerraform(struct!.iops),
    size: cdktn.numberToTerraform(struct!.size),
    type: cdktn.stringToTerraform(struct!.type),
    volumes_per_instance: cdktn.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function awsEmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceFleetInstanceTypeConfigsEbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktn.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceFleetInstanceTypeConfigsPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceFleetInstanceTypeConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bid_price: cdktn.stringToTerraform(struct!.bidPrice),
    bid_price_as_percentage_of_on_demand_price: cdktn.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktn.numberToTerraform(struct!.weightedCapacity),
    configurations: cdktn.listMapper(awsEmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyToTerraform, true)(struct!.configurations),
    ebs_config: cdktn.listMapper(awsEmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyToTerraform, true)(struct!.ebsConfig),
  }
}


export function awsEmrClusterCoreInstanceFleetInstanceTypeConfigsPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceFleetInstanceTypeConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bid_price: {
      value: cdktn.stringToHclTerraform(struct!.bidPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bid_price_as_percentage_of_on_demand_price: {
      value: cdktn.numberToHclTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
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
    configurations: {
      value: cdktn.listMapperHcl(awsEmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyToHclTerraform, true)(struct!.configurations),
      isBlock: true,
      type: "set",
      storageClassType: "CoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyList",
    },
    ebs_config: {
      value: cdktn.listMapperHcl(awsEmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyToHclTerraform, true)(struct!.ebsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
  }
}


export function awsEmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceFleetLaunchSpecificationsSpotSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    block_duration_minutes: cdktn.numberToTerraform(struct!.blockDurationMinutes),
    timeout_action: cdktn.stringToTerraform(struct!.timeoutAction),
    timeout_duration_minutes: cdktn.numberToTerraform(struct!.timeoutDurationMinutes),
  }
}


export function awsEmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceFleetLaunchSpecificationsSpotSpecificationProperty | cdktn.IResolvable): any {
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
    block_duration_minutes: {
      value: cdktn.numberToHclTerraform(struct!.blockDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_action: {
      value: cdktn.stringToHclTerraform(struct!.timeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_duration_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceFleetLaunchSpecificationsPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceFleetLaunchSpecificationsPropertyOutputReference | AwsEmrCluster.CoreInstanceFleetLaunchSpecificationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_demand_specification: cdktn.listMapper(awsEmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyToTerraform, true)(struct!.onDemandSpecification),
    spot_specification: cdktn.listMapper(awsEmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyToTerraform, true)(struct!.spotSpecification),
  }
}


export function awsEmrClusterCoreInstanceFleetLaunchSpecificationsPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceFleetLaunchSpecificationsPropertyOutputReference | AwsEmrCluster.CoreInstanceFleetLaunchSpecificationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_demand_specification: {
      value: cdktn.listMapperHcl(awsEmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyToHclTerraform, true)(struct!.onDemandSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyList",
    },
    spot_specification: {
      value: cdktn.listMapperHcl(awsEmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyToHclTerraform, true)(struct!.spotSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceFleetPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceFleetPropertyOutputReference | AwsEmrCluster.CoreInstanceFleetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    target_on_demand_capacity: cdktn.numberToTerraform(struct!.targetOnDemandCapacity),
    target_spot_capacity: cdktn.numberToTerraform(struct!.targetSpotCapacity),
    instance_type_configs: cdktn.listMapper(awsEmrClusterCoreInstanceFleetInstanceTypeConfigsPropertyToTerraform, true)(struct!.instanceTypeConfigs),
    launch_specifications: awsEmrClusterCoreInstanceFleetLaunchSpecificationsPropertyToTerraform(struct!.launchSpecifications),
  }
}


export function awsEmrClusterCoreInstanceFleetPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceFleetPropertyOutputReference | AwsEmrCluster.CoreInstanceFleetProperty): any {
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
    target_on_demand_capacity: {
      value: cdktn.numberToHclTerraform(struct!.targetOnDemandCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_spot_capacity: {
      value: cdktn.numberToHclTerraform(struct!.targetSpotCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type_configs: {
      value: cdktn.listMapperHcl(awsEmrClusterCoreInstanceFleetInstanceTypeConfigsPropertyToHclTerraform, true)(struct!.instanceTypeConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "CoreInstanceFleetInstanceTypeConfigsPropertyList",
    },
    launch_specifications: {
      value: awsEmrClusterCoreInstanceFleetLaunchSpecificationsPropertyToHclTerraform(struct!.launchSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceFleetLaunchSpecificationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceGroupEbsConfigPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceGroupEbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iops: cdktn.numberToTerraform(struct!.iops),
    size: cdktn.numberToTerraform(struct!.size),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    type: cdktn.stringToTerraform(struct!.type),
    volumes_per_instance: cdktn.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function awsEmrClusterCoreInstanceGroupEbsConfigPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceGroupEbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktn.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterCoreInstanceGroupPropertyToTerraform(struct?: AwsEmrCluster.CoreInstanceGroupPropertyOutputReference | AwsEmrCluster.CoreInstanceGroupProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    autoscaling_policy: cdktn.stringToTerraform(struct!.autoscalingPolicy),
    bid_price: cdktn.stringToTerraform(struct!.bidPrice),
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    name: cdktn.stringToTerraform(struct!.name),
    ebs_config: cdktn.listMapper(awsEmrClusterCoreInstanceGroupEbsConfigPropertyToTerraform, true)(struct!.ebsConfig),
  }
}


export function awsEmrClusterCoreInstanceGroupPropertyToHclTerraform(struct?: AwsEmrCluster.CoreInstanceGroupPropertyOutputReference | AwsEmrCluster.CoreInstanceGroupProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    autoscaling_policy: {
      value: cdktn.stringToHclTerraform(struct!.autoscalingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bid_price: {
      value: cdktn.stringToHclTerraform(struct!.bidPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
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
    ebs_config: {
      value: cdktn.listMapperHcl(awsEmrClusterCoreInstanceGroupEbsConfigPropertyToHclTerraform, true)(struct!.ebsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CoreInstanceGroupEbsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterEc2AttributesPropertyToTerraform(struct?: AwsEmrCluster.Ec2AttributesPropertyOutputReference | AwsEmrCluster.Ec2AttributesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_master_security_groups: cdktn.stringToTerraform(struct!.additionalMasterSecurityGroups),
    additional_slave_security_groups: cdktn.stringToTerraform(struct!.additionalSlaveSecurityGroups),
    emr_managed_master_security_group: cdktn.stringToTerraform(struct!.emrManagedMasterSecurityGroup),
    emr_managed_slave_security_group: cdktn.stringToTerraform(struct!.emrManagedSlaveSecurityGroup),
    instance_profile: cdktn.stringToTerraform(struct!.instanceProfile),
    key_name: cdktn.stringToTerraform(struct!.keyName),
    service_access_security_group: cdktn.stringToTerraform(struct!.serviceAccessSecurityGroup),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsEmrClusterEc2AttributesPropertyToHclTerraform(struct?: AwsEmrCluster.Ec2AttributesPropertyOutputReference | AwsEmrCluster.Ec2AttributesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_master_security_groups: {
      value: cdktn.stringToHclTerraform(struct!.additionalMasterSecurityGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_slave_security_groups: {
      value: cdktn.stringToHclTerraform(struct!.additionalSlaveSecurityGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emr_managed_master_security_group: {
      value: cdktn.stringToHclTerraform(struct!.emrManagedMasterSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emr_managed_slave_security_group: {
      value: cdktn.stringToHclTerraform(struct!.emrManagedSlaveSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_profile: {
      value: cdktn.stringToHclTerraform(struct!.instanceProfile),
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
    service_access_security_group: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccessSecurityGroup),
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


export function awsEmrClusterKerberosAttributesPropertyToTerraform(struct?: AwsEmrCluster.KerberosAttributesPropertyOutputReference | AwsEmrCluster.KerberosAttributesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ad_domain_join_password: cdktn.stringToTerraform(struct!.adDomainJoinPassword),
    ad_domain_join_user: cdktn.stringToTerraform(struct!.adDomainJoinUser),
    cross_realm_trust_principal_password: cdktn.stringToTerraform(struct!.crossRealmTrustPrincipalPassword),
    kdc_admin_password: cdktn.stringToTerraform(struct!.kdcAdminPassword),
    realm: cdktn.stringToTerraform(struct!.realm),
  }
}


export function awsEmrClusterKerberosAttributesPropertyToHclTerraform(struct?: AwsEmrCluster.KerberosAttributesPropertyOutputReference | AwsEmrCluster.KerberosAttributesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ad_domain_join_password: {
      value: cdktn.stringToHclTerraform(struct!.adDomainJoinPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ad_domain_join_user: {
      value: cdktn.stringToHclTerraform(struct!.adDomainJoinUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_realm_trust_principal_password: {
      value: cdktn.stringToHclTerraform(struct!.crossRealmTrustPrincipalPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kdc_admin_password: {
      value: cdktn.stringToHclTerraform(struct!.kdcAdminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktn.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceFleetInstanceTypeConfigsConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classification: cdktn.stringToTerraform(struct!.classification),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
  }
}


export function awsEmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceFleetInstanceTypeConfigsConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    classification: {
      value: cdktn.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceFleetInstanceTypeConfigsEbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iops: cdktn.numberToTerraform(struct!.iops),
    size: cdktn.numberToTerraform(struct!.size),
    type: cdktn.stringToTerraform(struct!.type),
    volumes_per_instance: cdktn.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function awsEmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceFleetInstanceTypeConfigsEbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktn.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceFleetInstanceTypeConfigsPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceFleetInstanceTypeConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bid_price: cdktn.stringToTerraform(struct!.bidPrice),
    bid_price_as_percentage_of_on_demand_price: cdktn.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktn.numberToTerraform(struct!.weightedCapacity),
    configurations: cdktn.listMapper(awsEmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyToTerraform, true)(struct!.configurations),
    ebs_config: cdktn.listMapper(awsEmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyToTerraform, true)(struct!.ebsConfig),
  }
}


export function awsEmrClusterMasterInstanceFleetInstanceTypeConfigsPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceFleetInstanceTypeConfigsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bid_price: {
      value: cdktn.stringToHclTerraform(struct!.bidPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bid_price_as_percentage_of_on_demand_price: {
      value: cdktn.numberToHclTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
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
    configurations: {
      value: cdktn.listMapperHcl(awsEmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyToHclTerraform, true)(struct!.configurations),
      isBlock: true,
      type: "set",
      storageClassType: "MasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyList",
    },
    ebs_config: {
      value: cdktn.listMapperHcl(awsEmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyToHclTerraform, true)(struct!.ebsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "MasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
  }
}


export function awsEmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceFleetLaunchSpecificationsSpotSpecificationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    block_duration_minutes: cdktn.numberToTerraform(struct!.blockDurationMinutes),
    timeout_action: cdktn.stringToTerraform(struct!.timeoutAction),
    timeout_duration_minutes: cdktn.numberToTerraform(struct!.timeoutDurationMinutes),
  }
}


export function awsEmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceFleetLaunchSpecificationsSpotSpecificationProperty | cdktn.IResolvable): any {
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
    block_duration_minutes: {
      value: cdktn.numberToHclTerraform(struct!.blockDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_action: {
      value: cdktn.stringToHclTerraform(struct!.timeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_duration_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceFleetLaunchSpecificationsPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceFleetLaunchSpecificationsPropertyOutputReference | AwsEmrCluster.MasterInstanceFleetLaunchSpecificationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_demand_specification: cdktn.listMapper(awsEmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyToTerraform, true)(struct!.onDemandSpecification),
    spot_specification: cdktn.listMapper(awsEmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyToTerraform, true)(struct!.spotSpecification),
  }
}


export function awsEmrClusterMasterInstanceFleetLaunchSpecificationsPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceFleetLaunchSpecificationsPropertyOutputReference | AwsEmrCluster.MasterInstanceFleetLaunchSpecificationsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_demand_specification: {
      value: cdktn.listMapperHcl(awsEmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyToHclTerraform, true)(struct!.onDemandSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyList",
    },
    spot_specification: {
      value: cdktn.listMapperHcl(awsEmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyToHclTerraform, true)(struct!.spotSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "MasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceFleetPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceFleetPropertyOutputReference | AwsEmrCluster.MasterInstanceFleetProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    target_on_demand_capacity: cdktn.numberToTerraform(struct!.targetOnDemandCapacity),
    target_spot_capacity: cdktn.numberToTerraform(struct!.targetSpotCapacity),
    instance_type_configs: cdktn.listMapper(awsEmrClusterMasterInstanceFleetInstanceTypeConfigsPropertyToTerraform, true)(struct!.instanceTypeConfigs),
    launch_specifications: awsEmrClusterMasterInstanceFleetLaunchSpecificationsPropertyToTerraform(struct!.launchSpecifications),
  }
}


export function awsEmrClusterMasterInstanceFleetPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceFleetPropertyOutputReference | AwsEmrCluster.MasterInstanceFleetProperty): any {
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
    target_on_demand_capacity: {
      value: cdktn.numberToHclTerraform(struct!.targetOnDemandCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_spot_capacity: {
      value: cdktn.numberToHclTerraform(struct!.targetSpotCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type_configs: {
      value: cdktn.listMapperHcl(awsEmrClusterMasterInstanceFleetInstanceTypeConfigsPropertyToHclTerraform, true)(struct!.instanceTypeConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "MasterInstanceFleetInstanceTypeConfigsPropertyList",
    },
    launch_specifications: {
      value: awsEmrClusterMasterInstanceFleetLaunchSpecificationsPropertyToHclTerraform(struct!.launchSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "MasterInstanceFleetLaunchSpecificationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceGroupEbsConfigPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceGroupEbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iops: cdktn.numberToTerraform(struct!.iops),
    size: cdktn.numberToTerraform(struct!.size),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    type: cdktn.stringToTerraform(struct!.type),
    volumes_per_instance: cdktn.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function awsEmrClusterMasterInstanceGroupEbsConfigPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceGroupEbsConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktn.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsEmrClusterMasterInstanceGroupPropertyToTerraform(struct?: AwsEmrCluster.MasterInstanceGroupPropertyOutputReference | AwsEmrCluster.MasterInstanceGroupProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bid_price: cdktn.stringToTerraform(struct!.bidPrice),
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    name: cdktn.stringToTerraform(struct!.name),
    ebs_config: cdktn.listMapper(awsEmrClusterMasterInstanceGroupEbsConfigPropertyToTerraform, true)(struct!.ebsConfig),
  }
}


export function awsEmrClusterMasterInstanceGroupPropertyToHclTerraform(struct?: AwsEmrCluster.MasterInstanceGroupPropertyOutputReference | AwsEmrCluster.MasterInstanceGroupProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bid_price: {
      value: cdktn.stringToHclTerraform(struct!.bidPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
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
    ebs_config: {
      value: cdktn.listMapperHcl(awsEmrClusterMasterInstanceGroupEbsConfigPropertyToHclTerraform, true)(struct!.ebsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "MasterInstanceGroupEbsConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsEmrCluster {
export interface PlacementGroupConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_role AwsEmrCluster#instance_role}
  */
  readonly instanceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#placement_strategy AwsEmrCluster#placement_strategy}
  */
  readonly placementStrategy?: string;
}
export class PlacementGroupConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PlacementGroupConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRole = this._instanceRole;
    }
    if (this._placementStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlacementGroupConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceRole = undefined;
      this._placementStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceRole = value.instanceRole;
      this._placementStrategy = value.placementStrategy;
    }
  }

  // instance_role - computed: false, optional: true, required: false
  private _instanceRole?: string; 
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }
  public set instanceRole(value: string) {
    this._instanceRole = value;
  }
  public resetInstanceRole() {
    this._instanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleInput() {
    return this._instanceRole;
  }

  // placement_strategy - computed: false, optional: true, required: false
  private _placementStrategy?: string; 
  public get placementStrategy() {
    return this.getStringAttribute('placement_strategy');
  }
  public set placementStrategy(value: string) {
    this._placementStrategy = value;
  }
  public resetPlacementStrategy() {
    this._placementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy;
  }
}

export class PlacementGroupConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : PlacementGroupConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): PlacementGroupConfigPropertyOutputReference {
    return new PlacementGroupConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HadoopJarStepProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#args AwsEmrCluster#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#jar AwsEmrCluster#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#main_class AwsEmrCluster#main_class}
  */
  readonly mainClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#properties AwsEmrCluster#properties}
  */
  readonly properties?: { [key: string]: string };
}
export class HadoopJarStepPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HadoopJarStepProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._mainClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HadoopJarStepProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._jar = undefined;
      this._mainClass = undefined;
      this._properties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._jar = value.jar;
      this._mainClass = value.mainClass;
      this._properties = value.properties;
    }
  }

  // args - computed: true, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // jar - computed: true, optional: true, required: false
  private _jar?: string; 
  public get jar() {
    return this.getStringAttribute('jar');
  }
  public set jar(value: string) {
    this._jar = value;
  }
  public resetJar() {
    this._jar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar;
  }

  // main_class - computed: true, optional: true, required: false
  private _mainClass?: string; 
  public get mainClass() {
    return this.getStringAttribute('main_class');
  }
  public set mainClass(value: string) {
    this._mainClass = value;
  }
  public resetMainClass() {
    this._mainClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class HadoopJarStepPropertyList extends cdktn.ComplexList {
  public internalValue? : HadoopJarStepProperty[] | cdktn.IResolvable

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
  public get(index: number): HadoopJarStepPropertyOutputReference {
    return new HadoopJarStepPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StepProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#action_on_failure AwsEmrCluster#action_on_failure}
  */
  readonly actionOnFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#hadoop_jar_step AwsEmrCluster#hadoop_jar_step}
  */
  readonly hadoopJarStep?: HadoopJarStepProperty[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#name AwsEmrCluster#name}
  */
  readonly name?: string;
}
export class StepPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StepProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnFailure = this._actionOnFailure;
    }
    if (this._hadoopJarStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hadoopJarStep = this._hadoopJarStep?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionOnFailure = undefined;
      this._hadoopJarStep.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionOnFailure = value.actionOnFailure;
      this._hadoopJarStep.internalValue = value.hadoopJarStep;
      this._name = value.name;
    }
  }

  // action_on_failure - computed: true, optional: true, required: false
  private _actionOnFailure?: string; 
  public get actionOnFailure() {
    return this.getStringAttribute('action_on_failure');
  }
  public set actionOnFailure(value: string) {
    this._actionOnFailure = value;
  }
  public resetActionOnFailure() {
    this._actionOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnFailureInput() {
    return this._actionOnFailure;
  }

  // hadoop_jar_step - computed: true, optional: true, required: false
  private _hadoopJarStep = new HadoopJarStepPropertyList(this, "hadoop_jar_step", false);
  public get hadoopJarStep() {
    return this._hadoopJarStep;
  }
  public putHadoopJarStep(value: HadoopJarStepProperty[] | cdktn.IResolvable) {
    this._hadoopJarStep.internalValue = value;
  }
  public resetHadoopJarStep() {
    this._hadoopJarStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopJarStepInput() {
    return this._hadoopJarStep.internalValue;
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
}

export class StepPropertyList extends cdktn.ComplexList {
  public internalValue? : StepProperty[] | cdktn.IResolvable

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
  public get(index: number): StepPropertyOutputReference {
    return new StepPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoTerminationPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#idle_timeout AwsEmrCluster#idle_timeout}
  */
  readonly idleTimeout?: number;
}
export class AutoTerminationPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoTerminationPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoTerminationPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface BootstrapActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#args AwsEmrCluster#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#name AwsEmrCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#path AwsEmrCluster#path}
  */
  readonly path: string;
}
export class BootstrapActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BootstrapActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BootstrapActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class BootstrapActionPropertyList extends cdktn.ComplexList {
  public internalValue? : BootstrapActionProperty[] | cdktn.IResolvable

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
  public get(index: number): BootstrapActionPropertyOutputReference {
    return new BootstrapActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceFleetInstanceTypeConfigsConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#classification AwsEmrCluster#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#properties AwsEmrCluster#properties}
  */
  readonly properties?: { [key: string]: string };
}
export class CoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoreInstanceFleetInstanceTypeConfigsConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceFleetInstanceTypeConfigsConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classification = undefined;
      this._properties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classification = value.classification;
      this._properties = value.properties;
    }
  }

  // classification - computed: false, optional: true, required: false
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  public resetClassification() {
    this._classification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class CoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : CoreInstanceFleetInstanceTypeConfigsConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): CoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyOutputReference {
    return new CoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceFleetInstanceTypeConfigsEbsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#iops AwsEmrCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#size AwsEmrCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#type AwsEmrCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#volumes_per_instance AwsEmrCluster#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}
export class CoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoreInstanceFleetInstanceTypeConfigsEbsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceFleetInstanceTypeConfigsEbsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._type = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._type = value.type;
      this._volumesPerInstance = value.volumesPerInstance;
    }
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class CoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CoreInstanceFleetInstanceTypeConfigsEbsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyOutputReference {
    return new CoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceFleetInstanceTypeConfigsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#bid_price AwsEmrCluster#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#bid_price_as_percentage_of_on_demand_price AwsEmrCluster#bid_price_as_percentage_of_on_demand_price}
  */
  readonly bidPriceAsPercentageOfOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_type AwsEmrCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#weighted_capacity AwsEmrCluster#weighted_capacity}
  */
  readonly weightedCapacity?: number;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#configurations AwsEmrCluster#configurations}
  */
  readonly configurations?: CoreInstanceFleetInstanceTypeConfigsConfigurationsProperty[] | cdktn.IResolvable;
  /**
  * ebs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#ebs_config AwsEmrCluster#ebs_config}
  */
  readonly ebsConfig?: CoreInstanceFleetInstanceTypeConfigsEbsConfigProperty[] | cdktn.IResolvable;
}
export class CoreInstanceFleetInstanceTypeConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoreInstanceFleetInstanceTypeConfigsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bidPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPrice = this._bidPrice;
    }
    if (this._bidPriceAsPercentageOfOnDemandPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPriceAsPercentageOfOnDemandPrice = this._bidPriceAsPercentageOfOnDemandPrice;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    if (this._ebsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsConfig = this._ebsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceFleetInstanceTypeConfigsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bidPrice = undefined;
      this._bidPriceAsPercentageOfOnDemandPrice = undefined;
      this._instanceType = undefined;
      this._weightedCapacity = undefined;
      this._configurations.internalValue = undefined;
      this._ebsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bidPrice = value.bidPrice;
      this._bidPriceAsPercentageOfOnDemandPrice = value.bidPriceAsPercentageOfOnDemandPrice;
      this._instanceType = value.instanceType;
      this._weightedCapacity = value.weightedCapacity;
      this._configurations.internalValue = value.configurations;
      this._ebsConfig.internalValue = value.ebsConfig;
    }
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string; 
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // bid_price_as_percentage_of_on_demand_price - computed: false, optional: true, required: false
  private _bidPriceAsPercentageOfOnDemandPrice?: number; 
  public get bidPriceAsPercentageOfOnDemandPrice() {
    return this.getNumberAttribute('bid_price_as_percentage_of_on_demand_price');
  }
  public set bidPriceAsPercentageOfOnDemandPrice(value: number) {
    this._bidPriceAsPercentageOfOnDemandPrice = value;
  }
  public resetBidPriceAsPercentageOfOnDemandPrice() {
    this._bidPriceAsPercentageOfOnDemandPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceAsPercentageOfOnDemandPriceInput() {
    return this._bidPriceAsPercentageOfOnDemandPrice;
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

  // configurations - computed: false, optional: true, required: false
  private _configurations = new CoreInstanceFleetInstanceTypeConfigsConfigurationsPropertyList(this, "configurations", true);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: CoreInstanceFleetInstanceTypeConfigsConfigurationsProperty[] | cdktn.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig = new CoreInstanceFleetInstanceTypeConfigsEbsConfigPropertyList(this, "ebs_config", true);
  public get ebsConfig() {
    return this._ebsConfig;
  }
  public putEbsConfig(value: CoreInstanceFleetInstanceTypeConfigsEbsConfigProperty[] | cdktn.IResolvable) {
    this._ebsConfig.internalValue = value;
  }
  public resetEbsConfig() {
    this._ebsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig.internalValue;
  }
}

export class CoreInstanceFleetInstanceTypeConfigsPropertyList extends cdktn.ComplexList {
  public internalValue? : CoreInstanceFleetInstanceTypeConfigsProperty[] | cdktn.IResolvable

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
  public get(index: number): CoreInstanceFleetInstanceTypeConfigsPropertyOutputReference {
    return new CoreInstanceFleetInstanceTypeConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#allocation_strategy AwsEmrCluster#allocation_strategy}
  */
  readonly allocationStrategy: string;
}
export class CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }
}

export class CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyOutputReference {
    return new CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceFleetLaunchSpecificationsSpotSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#allocation_strategy AwsEmrCluster#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#block_duration_minutes AwsEmrCluster#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#timeout_action AwsEmrCluster#timeout_action}
  */
  readonly timeoutAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#timeout_duration_minutes AwsEmrCluster#timeout_duration_minutes}
  */
  readonly timeoutDurationMinutes: number;
}
export class CoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoreInstanceFleetLaunchSpecificationsSpotSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._blockDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
    }
    if (this._timeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAction = this._timeoutAction;
    }
    if (this._timeoutDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutDurationMinutes = this._timeoutDurationMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceFleetLaunchSpecificationsSpotSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
      this._blockDurationMinutes = undefined;
      this._timeoutAction = undefined;
      this._timeoutDurationMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
      this._blockDurationMinutes = value.blockDurationMinutes;
      this._timeoutAction = value.timeoutAction;
      this._timeoutDurationMinutes = value.timeoutDurationMinutes;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // block_duration_minutes - computed: false, optional: true, required: false
  private _blockDurationMinutes?: number; 
  public get blockDurationMinutes() {
    return this.getNumberAttribute('block_duration_minutes');
  }
  public set blockDurationMinutes(value: number) {
    this._blockDurationMinutes = value;
  }
  public resetBlockDurationMinutes() {
    this._blockDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMinutesInput() {
    return this._blockDurationMinutes;
  }

  // timeout_action - computed: false, optional: false, required: true
  private _timeoutAction?: string; 
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
  public set timeoutAction(value: string) {
    this._timeoutAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActionInput() {
    return this._timeoutAction;
  }

  // timeout_duration_minutes - computed: false, optional: false, required: true
  private _timeoutDurationMinutes?: number; 
  public get timeoutDurationMinutes() {
    return this.getNumberAttribute('timeout_duration_minutes');
  }
  public set timeoutDurationMinutes(value: number) {
    this._timeoutDurationMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDurationMinutesInput() {
    return this._timeoutDurationMinutes;
  }
}

export class CoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : CoreInstanceFleetLaunchSpecificationsSpotSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): CoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyOutputReference {
    return new CoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceFleetLaunchSpecificationsProperty {
  /**
  * on_demand_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#on_demand_specification AwsEmrCluster#on_demand_specification}
  */
  readonly onDemandSpecification?: CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty[] | cdktn.IResolvable;
  /**
  * spot_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#spot_specification AwsEmrCluster#spot_specification}
  */
  readonly spotSpecification?: CoreInstanceFleetLaunchSpecificationsSpotSpecificationProperty[] | cdktn.IResolvable;
}
export class CoreInstanceFleetLaunchSpecificationsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceFleetLaunchSpecificationsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemandSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandSpecification = this._onDemandSpecification?.internalValue;
    }
    if (this._spotSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSpecification = this._spotSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceFleetLaunchSpecificationsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemandSpecification.internalValue = undefined;
      this._spotSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemandSpecification.internalValue = value.onDemandSpecification;
      this._spotSpecification.internalValue = value.spotSpecification;
    }
  }

  // on_demand_specification - computed: false, optional: true, required: false
  private _onDemandSpecification = new CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyList(this, "on_demand_specification", false);
  public get onDemandSpecification() {
    return this._onDemandSpecification;
  }
  public putOnDemandSpecification(value: CoreInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty[] | cdktn.IResolvable) {
    this._onDemandSpecification.internalValue = value;
  }
  public resetOnDemandSpecification() {
    this._onDemandSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandSpecificationInput() {
    return this._onDemandSpecification.internalValue;
  }

  // spot_specification - computed: false, optional: true, required: false
  private _spotSpecification = new CoreInstanceFleetLaunchSpecificationsSpotSpecificationPropertyList(this, "spot_specification", false);
  public get spotSpecification() {
    return this._spotSpecification;
  }
  public putSpotSpecification(value: CoreInstanceFleetLaunchSpecificationsSpotSpecificationProperty[] | cdktn.IResolvable) {
    this._spotSpecification.internalValue = value;
  }
  public resetSpotSpecification() {
    this._spotSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSpecificationInput() {
    return this._spotSpecification.internalValue;
  }
}
export interface CoreInstanceFleetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#name AwsEmrCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#target_on_demand_capacity AwsEmrCluster#target_on_demand_capacity}
  */
  readonly targetOnDemandCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#target_spot_capacity AwsEmrCluster#target_spot_capacity}
  */
  readonly targetSpotCapacity?: number;
  /**
  * instance_type_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_type_configs AwsEmrCluster#instance_type_configs}
  */
  readonly instanceTypeConfigs?: CoreInstanceFleetInstanceTypeConfigsProperty[] | cdktn.IResolvable;
  /**
  * launch_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#launch_specifications AwsEmrCluster#launch_specifications}
  */
  readonly launchSpecifications?: CoreInstanceFleetLaunchSpecificationsProperty;
}
export class CoreInstanceFleetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceFleetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetOnDemandCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOnDemandCapacity = this._targetOnDemandCapacity;
    }
    if (this._targetSpotCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSpotCapacity = this._targetSpotCapacity;
    }
    if (this._instanceTypeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypeConfigs = this._instanceTypeConfigs?.internalValue;
    }
    if (this._launchSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchSpecifications = this._launchSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceFleetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._targetOnDemandCapacity = undefined;
      this._targetSpotCapacity = undefined;
      this._instanceTypeConfigs.internalValue = undefined;
      this._launchSpecifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._targetOnDemandCapacity = value.targetOnDemandCapacity;
      this._targetSpotCapacity = value.targetSpotCapacity;
      this._instanceTypeConfigs.internalValue = value.instanceTypeConfigs;
      this._launchSpecifications.internalValue = value.launchSpecifications;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provisioned_on_demand_capacity - computed: true, optional: false, required: false
  public get provisionedOnDemandCapacity() {
    return this.getNumberAttribute('provisioned_on_demand_capacity');
  }

  // provisioned_spot_capacity - computed: true, optional: false, required: false
  public get provisionedSpotCapacity() {
    return this.getNumberAttribute('provisioned_spot_capacity');
  }

  // target_on_demand_capacity - computed: false, optional: true, required: false
  private _targetOnDemandCapacity?: number; 
  public get targetOnDemandCapacity() {
    return this.getNumberAttribute('target_on_demand_capacity');
  }
  public set targetOnDemandCapacity(value: number) {
    this._targetOnDemandCapacity = value;
  }
  public resetTargetOnDemandCapacity() {
    this._targetOnDemandCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOnDemandCapacityInput() {
    return this._targetOnDemandCapacity;
  }

  // target_spot_capacity - computed: false, optional: true, required: false
  private _targetSpotCapacity?: number; 
  public get targetSpotCapacity() {
    return this.getNumberAttribute('target_spot_capacity');
  }
  public set targetSpotCapacity(value: number) {
    this._targetSpotCapacity = value;
  }
  public resetTargetSpotCapacity() {
    this._targetSpotCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSpotCapacityInput() {
    return this._targetSpotCapacity;
  }

  // instance_type_configs - computed: false, optional: true, required: false
  private _instanceTypeConfigs = new CoreInstanceFleetInstanceTypeConfigsPropertyList(this, "instance_type_configs", true);
  public get instanceTypeConfigs() {
    return this._instanceTypeConfigs;
  }
  public putInstanceTypeConfigs(value: CoreInstanceFleetInstanceTypeConfigsProperty[] | cdktn.IResolvable) {
    this._instanceTypeConfigs.internalValue = value;
  }
  public resetInstanceTypeConfigs() {
    this._instanceTypeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeConfigsInput() {
    return this._instanceTypeConfigs.internalValue;
  }

  // launch_specifications - computed: false, optional: true, required: false
  private _launchSpecifications = new CoreInstanceFleetLaunchSpecificationsPropertyOutputReference(this, "launch_specifications");
  public get launchSpecifications() {
    return this._launchSpecifications;
  }
  public putLaunchSpecifications(value: CoreInstanceFleetLaunchSpecificationsProperty) {
    this._launchSpecifications.internalValue = value;
  }
  public resetLaunchSpecifications() {
    this._launchSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationsInput() {
    return this._launchSpecifications.internalValue;
  }
}
export interface CoreInstanceGroupEbsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#iops AwsEmrCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#size AwsEmrCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#throughput AwsEmrCluster#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#type AwsEmrCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#volumes_per_instance AwsEmrCluster#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}
export class CoreInstanceGroupEbsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CoreInstanceGroupEbsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceGroupEbsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._throughput = undefined;
      this._type = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._throughput = value.throughput;
      this._type = value.type;
      this._volumesPerInstance = value.volumesPerInstance;
    }
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class CoreInstanceGroupEbsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CoreInstanceGroupEbsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CoreInstanceGroupEbsConfigPropertyOutputReference {
    return new CoreInstanceGroupEbsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceGroupProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#autoscaling_policy AwsEmrCluster#autoscaling_policy}
  */
  readonly autoscalingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#bid_price AwsEmrCluster#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_count AwsEmrCluster#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_type AwsEmrCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#name AwsEmrCluster#name}
  */
  readonly name?: string;
  /**
  * ebs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#ebs_config AwsEmrCluster#ebs_config}
  */
  readonly ebsConfig?: CoreInstanceGroupEbsConfigProperty[] | cdktn.IResolvable;
}
export class CoreInstanceGroupPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceGroupProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingPolicy = this._autoscalingPolicy;
    }
    if (this._bidPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPrice = this._bidPrice;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ebsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsConfig = this._ebsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceGroupProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingPolicy = undefined;
      this._bidPrice = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._name = undefined;
      this._ebsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingPolicy = value.autoscalingPolicy;
      this._bidPrice = value.bidPrice;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._name = value.name;
      this._ebsConfig.internalValue = value.ebsConfig;
    }
  }

  // autoscaling_policy - computed: false, optional: true, required: false
  private _autoscalingPolicy?: string; 
  public get autoscalingPolicy() {
    return this.getStringAttribute('autoscaling_policy');
  }
  public set autoscalingPolicy(value: string) {
    this._autoscalingPolicy = value;
  }
  public resetAutoscalingPolicy() {
    this._autoscalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy;
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string; 
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
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

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig = new CoreInstanceGroupEbsConfigPropertyList(this, "ebs_config", true);
  public get ebsConfig() {
    return this._ebsConfig;
  }
  public putEbsConfig(value: CoreInstanceGroupEbsConfigProperty[] | cdktn.IResolvable) {
    this._ebsConfig.internalValue = value;
  }
  public resetEbsConfig() {
    this._ebsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig.internalValue;
  }
}
export interface Ec2AttributesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#additional_master_security_groups AwsEmrCluster#additional_master_security_groups}
  */
  readonly additionalMasterSecurityGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#additional_slave_security_groups AwsEmrCluster#additional_slave_security_groups}
  */
  readonly additionalSlaveSecurityGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#emr_managed_master_security_group AwsEmrCluster#emr_managed_master_security_group}
  */
  readonly emrManagedMasterSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#emr_managed_slave_security_group AwsEmrCluster#emr_managed_slave_security_group}
  */
  readonly emrManagedSlaveSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_profile AwsEmrCluster#instance_profile}
  */
  readonly instanceProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#key_name AwsEmrCluster#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#service_access_security_group AwsEmrCluster#service_access_security_group}
  */
  readonly serviceAccessSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#subnet_id AwsEmrCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#subnet_ids AwsEmrCluster#subnet_ids}
  */
  readonly subnetIds?: string[];
}
export class Ec2AttributesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2AttributesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMasterSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMasterSecurityGroups = this._additionalMasterSecurityGroups;
    }
    if (this._additionalSlaveSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSlaveSecurityGroups = this._additionalSlaveSecurityGroups;
    }
    if (this._emrManagedMasterSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrManagedMasterSecurityGroup = this._emrManagedMasterSecurityGroup;
    }
    if (this._emrManagedSlaveSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrManagedSlaveSecurityGroup = this._emrManagedSlaveSecurityGroup;
    }
    if (this._instanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfile = this._instanceProfile;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._serviceAccessSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessSecurityGroup = this._serviceAccessSecurityGroup;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2AttributesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalMasterSecurityGroups = undefined;
      this._additionalSlaveSecurityGroups = undefined;
      this._emrManagedMasterSecurityGroup = undefined;
      this._emrManagedSlaveSecurityGroup = undefined;
      this._instanceProfile = undefined;
      this._keyName = undefined;
      this._serviceAccessSecurityGroup = undefined;
      this._subnetId = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalMasterSecurityGroups = value.additionalMasterSecurityGroups;
      this._additionalSlaveSecurityGroups = value.additionalSlaveSecurityGroups;
      this._emrManagedMasterSecurityGroup = value.emrManagedMasterSecurityGroup;
      this._emrManagedSlaveSecurityGroup = value.emrManagedSlaveSecurityGroup;
      this._instanceProfile = value.instanceProfile;
      this._keyName = value.keyName;
      this._serviceAccessSecurityGroup = value.serviceAccessSecurityGroup;
      this._subnetId = value.subnetId;
      this._subnetIds = value.subnetIds;
    }
  }

  // additional_master_security_groups - computed: false, optional: true, required: false
  private _additionalMasterSecurityGroups?: string; 
  public get additionalMasterSecurityGroups() {
    return this.getStringAttribute('additional_master_security_groups');
  }
  public set additionalMasterSecurityGroups(value: string) {
    this._additionalMasterSecurityGroups = value;
  }
  public resetAdditionalMasterSecurityGroups() {
    this._additionalMasterSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMasterSecurityGroupsInput() {
    return this._additionalMasterSecurityGroups;
  }

  // additional_slave_security_groups - computed: false, optional: true, required: false
  private _additionalSlaveSecurityGroups?: string; 
  public get additionalSlaveSecurityGroups() {
    return this.getStringAttribute('additional_slave_security_groups');
  }
  public set additionalSlaveSecurityGroups(value: string) {
    this._additionalSlaveSecurityGroups = value;
  }
  public resetAdditionalSlaveSecurityGroups() {
    this._additionalSlaveSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSlaveSecurityGroupsInput() {
    return this._additionalSlaveSecurityGroups;
  }

  // emr_managed_master_security_group - computed: true, optional: true, required: false
  private _emrManagedMasterSecurityGroup?: string; 
  public get emrManagedMasterSecurityGroup() {
    return this.getStringAttribute('emr_managed_master_security_group');
  }
  public set emrManagedMasterSecurityGroup(value: string) {
    this._emrManagedMasterSecurityGroup = value;
  }
  public resetEmrManagedMasterSecurityGroup() {
    this._emrManagedMasterSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrManagedMasterSecurityGroupInput() {
    return this._emrManagedMasterSecurityGroup;
  }

  // emr_managed_slave_security_group - computed: true, optional: true, required: false
  private _emrManagedSlaveSecurityGroup?: string; 
  public get emrManagedSlaveSecurityGroup() {
    return this.getStringAttribute('emr_managed_slave_security_group');
  }
  public set emrManagedSlaveSecurityGroup(value: string) {
    this._emrManagedSlaveSecurityGroup = value;
  }
  public resetEmrManagedSlaveSecurityGroup() {
    this._emrManagedSlaveSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrManagedSlaveSecurityGroupInput() {
    return this._emrManagedSlaveSecurityGroup;
  }

  // instance_profile - computed: false, optional: false, required: true
  private _instanceProfile?: string; 
  public get instanceProfile() {
    return this.getStringAttribute('instance_profile');
  }
  public set instanceProfile(value: string) {
    this._instanceProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileInput() {
    return this._instanceProfile;
  }

  // key_name - computed: false, optional: true, required: false
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

  // service_access_security_group - computed: true, optional: true, required: false
  private _serviceAccessSecurityGroup?: string; 
  public get serviceAccessSecurityGroup() {
    return this.getStringAttribute('service_access_security_group');
  }
  public set serviceAccessSecurityGroup(value: string) {
    this._serviceAccessSecurityGroup = value;
  }
  public resetServiceAccessSecurityGroup() {
    this._serviceAccessSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessSecurityGroupInput() {
    return this._serviceAccessSecurityGroup;
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

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface KerberosAttributesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#ad_domain_join_password AwsEmrCluster#ad_domain_join_password}
  */
  readonly adDomainJoinPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#ad_domain_join_user AwsEmrCluster#ad_domain_join_user}
  */
  readonly adDomainJoinUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#cross_realm_trust_principal_password AwsEmrCluster#cross_realm_trust_principal_password}
  */
  readonly crossRealmTrustPrincipalPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#kdc_admin_password AwsEmrCluster#kdc_admin_password}
  */
  readonly kdcAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#realm AwsEmrCluster#realm}
  */
  readonly realm: string;
}
export class KerberosAttributesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KerberosAttributesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adDomainJoinPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomainJoinPassword = this._adDomainJoinPassword;
    }
    if (this._adDomainJoinUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomainJoinUser = this._adDomainJoinUser;
    }
    if (this._crossRealmTrustPrincipalPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustPrincipalPassword = this._crossRealmTrustPrincipalPassword;
    }
    if (this._kdcAdminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcAdminPassword = this._kdcAdminPassword;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KerberosAttributesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adDomainJoinPassword = undefined;
      this._adDomainJoinUser = undefined;
      this._crossRealmTrustPrincipalPassword = undefined;
      this._kdcAdminPassword = undefined;
      this._realm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adDomainJoinPassword = value.adDomainJoinPassword;
      this._adDomainJoinUser = value.adDomainJoinUser;
      this._crossRealmTrustPrincipalPassword = value.crossRealmTrustPrincipalPassword;
      this._kdcAdminPassword = value.kdcAdminPassword;
      this._realm = value.realm;
    }
  }

  // ad_domain_join_password - computed: false, optional: true, required: false
  private _adDomainJoinPassword?: string; 
  public get adDomainJoinPassword() {
    return this.getStringAttribute('ad_domain_join_password');
  }
  public set adDomainJoinPassword(value: string) {
    this._adDomainJoinPassword = value;
  }
  public resetAdDomainJoinPassword() {
    this._adDomainJoinPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainJoinPasswordInput() {
    return this._adDomainJoinPassword;
  }

  // ad_domain_join_user - computed: false, optional: true, required: false
  private _adDomainJoinUser?: string; 
  public get adDomainJoinUser() {
    return this.getStringAttribute('ad_domain_join_user');
  }
  public set adDomainJoinUser(value: string) {
    this._adDomainJoinUser = value;
  }
  public resetAdDomainJoinUser() {
    this._adDomainJoinUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainJoinUserInput() {
    return this._adDomainJoinUser;
  }

  // cross_realm_trust_principal_password - computed: false, optional: true, required: false
  private _crossRealmTrustPrincipalPassword?: string; 
  public get crossRealmTrustPrincipalPassword() {
    return this.getStringAttribute('cross_realm_trust_principal_password');
  }
  public set crossRealmTrustPrincipalPassword(value: string) {
    this._crossRealmTrustPrincipalPassword = value;
  }
  public resetCrossRealmTrustPrincipalPassword() {
    this._crossRealmTrustPrincipalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustPrincipalPasswordInput() {
    return this._crossRealmTrustPrincipalPassword;
  }

  // kdc_admin_password - computed: false, optional: false, required: true
  private _kdcAdminPassword?: string; 
  public get kdcAdminPassword() {
    return this.getStringAttribute('kdc_admin_password');
  }
  public set kdcAdminPassword(value: string) {
    this._kdcAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcAdminPasswordInput() {
    return this._kdcAdminPassword;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface MasterInstanceFleetInstanceTypeConfigsConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#classification AwsEmrCluster#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#properties AwsEmrCluster#properties}
  */
  readonly properties?: { [key: string]: string };
}
export class MasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MasterInstanceFleetInstanceTypeConfigsConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceFleetInstanceTypeConfigsConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classification = undefined;
      this._properties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classification = value.classification;
      this._properties = value.properties;
    }
  }

  // classification - computed: false, optional: true, required: false
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  public resetClassification() {
    this._classification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class MasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : MasterInstanceFleetInstanceTypeConfigsConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): MasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyOutputReference {
    return new MasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MasterInstanceFleetInstanceTypeConfigsEbsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#iops AwsEmrCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#size AwsEmrCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#type AwsEmrCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#volumes_per_instance AwsEmrCluster#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}
export class MasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MasterInstanceFleetInstanceTypeConfigsEbsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceFleetInstanceTypeConfigsEbsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._type = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._type = value.type;
      this._volumesPerInstance = value.volumesPerInstance;
    }
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class MasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : MasterInstanceFleetInstanceTypeConfigsEbsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): MasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyOutputReference {
    return new MasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MasterInstanceFleetInstanceTypeConfigsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#bid_price AwsEmrCluster#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#bid_price_as_percentage_of_on_demand_price AwsEmrCluster#bid_price_as_percentage_of_on_demand_price}
  */
  readonly bidPriceAsPercentageOfOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_type AwsEmrCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#weighted_capacity AwsEmrCluster#weighted_capacity}
  */
  readonly weightedCapacity?: number;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#configurations AwsEmrCluster#configurations}
  */
  readonly configurations?: MasterInstanceFleetInstanceTypeConfigsConfigurationsProperty[] | cdktn.IResolvable;
  /**
  * ebs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#ebs_config AwsEmrCluster#ebs_config}
  */
  readonly ebsConfig?: MasterInstanceFleetInstanceTypeConfigsEbsConfigProperty[] | cdktn.IResolvable;
}
export class MasterInstanceFleetInstanceTypeConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MasterInstanceFleetInstanceTypeConfigsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bidPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPrice = this._bidPrice;
    }
    if (this._bidPriceAsPercentageOfOnDemandPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPriceAsPercentageOfOnDemandPrice = this._bidPriceAsPercentageOfOnDemandPrice;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    if (this._ebsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsConfig = this._ebsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceFleetInstanceTypeConfigsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bidPrice = undefined;
      this._bidPriceAsPercentageOfOnDemandPrice = undefined;
      this._instanceType = undefined;
      this._weightedCapacity = undefined;
      this._configurations.internalValue = undefined;
      this._ebsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bidPrice = value.bidPrice;
      this._bidPriceAsPercentageOfOnDemandPrice = value.bidPriceAsPercentageOfOnDemandPrice;
      this._instanceType = value.instanceType;
      this._weightedCapacity = value.weightedCapacity;
      this._configurations.internalValue = value.configurations;
      this._ebsConfig.internalValue = value.ebsConfig;
    }
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string; 
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // bid_price_as_percentage_of_on_demand_price - computed: false, optional: true, required: false
  private _bidPriceAsPercentageOfOnDemandPrice?: number; 
  public get bidPriceAsPercentageOfOnDemandPrice() {
    return this.getNumberAttribute('bid_price_as_percentage_of_on_demand_price');
  }
  public set bidPriceAsPercentageOfOnDemandPrice(value: number) {
    this._bidPriceAsPercentageOfOnDemandPrice = value;
  }
  public resetBidPriceAsPercentageOfOnDemandPrice() {
    this._bidPriceAsPercentageOfOnDemandPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceAsPercentageOfOnDemandPriceInput() {
    return this._bidPriceAsPercentageOfOnDemandPrice;
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

  // configurations - computed: false, optional: true, required: false
  private _configurations = new MasterInstanceFleetInstanceTypeConfigsConfigurationsPropertyList(this, "configurations", true);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: MasterInstanceFleetInstanceTypeConfigsConfigurationsProperty[] | cdktn.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig = new MasterInstanceFleetInstanceTypeConfigsEbsConfigPropertyList(this, "ebs_config", true);
  public get ebsConfig() {
    return this._ebsConfig;
  }
  public putEbsConfig(value: MasterInstanceFleetInstanceTypeConfigsEbsConfigProperty[] | cdktn.IResolvable) {
    this._ebsConfig.internalValue = value;
  }
  public resetEbsConfig() {
    this._ebsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig.internalValue;
  }
}

export class MasterInstanceFleetInstanceTypeConfigsPropertyList extends cdktn.ComplexList {
  public internalValue? : MasterInstanceFleetInstanceTypeConfigsProperty[] | cdktn.IResolvable

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
  public get(index: number): MasterInstanceFleetInstanceTypeConfigsPropertyOutputReference {
    return new MasterInstanceFleetInstanceTypeConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#allocation_strategy AwsEmrCluster#allocation_strategy}
  */
  readonly allocationStrategy: string;
}
export class MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }
}

export class MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyOutputReference {
    return new MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MasterInstanceFleetLaunchSpecificationsSpotSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#allocation_strategy AwsEmrCluster#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#block_duration_minutes AwsEmrCluster#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#timeout_action AwsEmrCluster#timeout_action}
  */
  readonly timeoutAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#timeout_duration_minutes AwsEmrCluster#timeout_duration_minutes}
  */
  readonly timeoutDurationMinutes: number;
}
export class MasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MasterInstanceFleetLaunchSpecificationsSpotSpecificationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._blockDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
    }
    if (this._timeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAction = this._timeoutAction;
    }
    if (this._timeoutDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutDurationMinutes = this._timeoutDurationMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceFleetLaunchSpecificationsSpotSpecificationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
      this._blockDurationMinutes = undefined;
      this._timeoutAction = undefined;
      this._timeoutDurationMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
      this._blockDurationMinutes = value.blockDurationMinutes;
      this._timeoutAction = value.timeoutAction;
      this._timeoutDurationMinutes = value.timeoutDurationMinutes;
    }
  }

  // allocation_strategy - computed: false, optional: false, required: true
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // block_duration_minutes - computed: false, optional: true, required: false
  private _blockDurationMinutes?: number; 
  public get blockDurationMinutes() {
    return this.getNumberAttribute('block_duration_minutes');
  }
  public set blockDurationMinutes(value: number) {
    this._blockDurationMinutes = value;
  }
  public resetBlockDurationMinutes() {
    this._blockDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMinutesInput() {
    return this._blockDurationMinutes;
  }

  // timeout_action - computed: false, optional: false, required: true
  private _timeoutAction?: string; 
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
  public set timeoutAction(value: string) {
    this._timeoutAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActionInput() {
    return this._timeoutAction;
  }

  // timeout_duration_minutes - computed: false, optional: false, required: true
  private _timeoutDurationMinutes?: number; 
  public get timeoutDurationMinutes() {
    return this.getNumberAttribute('timeout_duration_minutes');
  }
  public set timeoutDurationMinutes(value: number) {
    this._timeoutDurationMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDurationMinutesInput() {
    return this._timeoutDurationMinutes;
  }
}

export class MasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyList extends cdktn.ComplexList {
  public internalValue? : MasterInstanceFleetLaunchSpecificationsSpotSpecificationProperty[] | cdktn.IResolvable

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
  public get(index: number): MasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyOutputReference {
    return new MasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MasterInstanceFleetLaunchSpecificationsProperty {
  /**
  * on_demand_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#on_demand_specification AwsEmrCluster#on_demand_specification}
  */
  readonly onDemandSpecification?: MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty[] | cdktn.IResolvable;
  /**
  * spot_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#spot_specification AwsEmrCluster#spot_specification}
  */
  readonly spotSpecification?: MasterInstanceFleetLaunchSpecificationsSpotSpecificationProperty[] | cdktn.IResolvable;
}
export class MasterInstanceFleetLaunchSpecificationsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MasterInstanceFleetLaunchSpecificationsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemandSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandSpecification = this._onDemandSpecification?.internalValue;
    }
    if (this._spotSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSpecification = this._spotSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceFleetLaunchSpecificationsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemandSpecification.internalValue = undefined;
      this._spotSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemandSpecification.internalValue = value.onDemandSpecification;
      this._spotSpecification.internalValue = value.spotSpecification;
    }
  }

  // on_demand_specification - computed: false, optional: true, required: false
  private _onDemandSpecification = new MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationPropertyList(this, "on_demand_specification", false);
  public get onDemandSpecification() {
    return this._onDemandSpecification;
  }
  public putOnDemandSpecification(value: MasterInstanceFleetLaunchSpecificationsOnDemandSpecificationProperty[] | cdktn.IResolvable) {
    this._onDemandSpecification.internalValue = value;
  }
  public resetOnDemandSpecification() {
    this._onDemandSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandSpecificationInput() {
    return this._onDemandSpecification.internalValue;
  }

  // spot_specification - computed: false, optional: true, required: false
  private _spotSpecification = new MasterInstanceFleetLaunchSpecificationsSpotSpecificationPropertyList(this, "spot_specification", false);
  public get spotSpecification() {
    return this._spotSpecification;
  }
  public putSpotSpecification(value: MasterInstanceFleetLaunchSpecificationsSpotSpecificationProperty[] | cdktn.IResolvable) {
    this._spotSpecification.internalValue = value;
  }
  public resetSpotSpecification() {
    this._spotSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSpecificationInput() {
    return this._spotSpecification.internalValue;
  }
}
export interface MasterInstanceFleetProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#name AwsEmrCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#target_on_demand_capacity AwsEmrCluster#target_on_demand_capacity}
  */
  readonly targetOnDemandCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#target_spot_capacity AwsEmrCluster#target_spot_capacity}
  */
  readonly targetSpotCapacity?: number;
  /**
  * instance_type_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_type_configs AwsEmrCluster#instance_type_configs}
  */
  readonly instanceTypeConfigs?: MasterInstanceFleetInstanceTypeConfigsProperty[] | cdktn.IResolvable;
  /**
  * launch_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#launch_specifications AwsEmrCluster#launch_specifications}
  */
  readonly launchSpecifications?: MasterInstanceFleetLaunchSpecificationsProperty;
}
export class MasterInstanceFleetPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MasterInstanceFleetProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetOnDemandCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOnDemandCapacity = this._targetOnDemandCapacity;
    }
    if (this._targetSpotCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSpotCapacity = this._targetSpotCapacity;
    }
    if (this._instanceTypeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypeConfigs = this._instanceTypeConfigs?.internalValue;
    }
    if (this._launchSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchSpecifications = this._launchSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceFleetProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._targetOnDemandCapacity = undefined;
      this._targetSpotCapacity = undefined;
      this._instanceTypeConfigs.internalValue = undefined;
      this._launchSpecifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._targetOnDemandCapacity = value.targetOnDemandCapacity;
      this._targetSpotCapacity = value.targetSpotCapacity;
      this._instanceTypeConfigs.internalValue = value.instanceTypeConfigs;
      this._launchSpecifications.internalValue = value.launchSpecifications;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provisioned_on_demand_capacity - computed: true, optional: false, required: false
  public get provisionedOnDemandCapacity() {
    return this.getNumberAttribute('provisioned_on_demand_capacity');
  }

  // provisioned_spot_capacity - computed: true, optional: false, required: false
  public get provisionedSpotCapacity() {
    return this.getNumberAttribute('provisioned_spot_capacity');
  }

  // target_on_demand_capacity - computed: false, optional: true, required: false
  private _targetOnDemandCapacity?: number; 
  public get targetOnDemandCapacity() {
    return this.getNumberAttribute('target_on_demand_capacity');
  }
  public set targetOnDemandCapacity(value: number) {
    this._targetOnDemandCapacity = value;
  }
  public resetTargetOnDemandCapacity() {
    this._targetOnDemandCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOnDemandCapacityInput() {
    return this._targetOnDemandCapacity;
  }

  // target_spot_capacity - computed: false, optional: true, required: false
  private _targetSpotCapacity?: number; 
  public get targetSpotCapacity() {
    return this.getNumberAttribute('target_spot_capacity');
  }
  public set targetSpotCapacity(value: number) {
    this._targetSpotCapacity = value;
  }
  public resetTargetSpotCapacity() {
    this._targetSpotCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSpotCapacityInput() {
    return this._targetSpotCapacity;
  }

  // instance_type_configs - computed: false, optional: true, required: false
  private _instanceTypeConfigs = new MasterInstanceFleetInstanceTypeConfigsPropertyList(this, "instance_type_configs", true);
  public get instanceTypeConfigs() {
    return this._instanceTypeConfigs;
  }
  public putInstanceTypeConfigs(value: MasterInstanceFleetInstanceTypeConfigsProperty[] | cdktn.IResolvable) {
    this._instanceTypeConfigs.internalValue = value;
  }
  public resetInstanceTypeConfigs() {
    this._instanceTypeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeConfigsInput() {
    return this._instanceTypeConfigs.internalValue;
  }

  // launch_specifications - computed: false, optional: true, required: false
  private _launchSpecifications = new MasterInstanceFleetLaunchSpecificationsPropertyOutputReference(this, "launch_specifications");
  public get launchSpecifications() {
    return this._launchSpecifications;
  }
  public putLaunchSpecifications(value: MasterInstanceFleetLaunchSpecificationsProperty) {
    this._launchSpecifications.internalValue = value;
  }
  public resetLaunchSpecifications() {
    this._launchSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationsInput() {
    return this._launchSpecifications.internalValue;
  }
}
export interface MasterInstanceGroupEbsConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#iops AwsEmrCluster#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#size AwsEmrCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#throughput AwsEmrCluster#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#type AwsEmrCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#volumes_per_instance AwsEmrCluster#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}
export class MasterInstanceGroupEbsConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MasterInstanceGroupEbsConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceGroupEbsConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._throughput = undefined;
      this._type = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._throughput = value.throughput;
      this._type = value.type;
      this._volumesPerInstance = value.volumesPerInstance;
    }
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class MasterInstanceGroupEbsConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : MasterInstanceGroupEbsConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): MasterInstanceGroupEbsConfigPropertyOutputReference {
    return new MasterInstanceGroupEbsConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MasterInstanceGroupProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#bid_price AwsEmrCluster#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_count AwsEmrCluster#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#instance_type AwsEmrCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#name AwsEmrCluster#name}
  */
  readonly name?: string;
  /**
  * ebs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/emr_cluster#ebs_config AwsEmrCluster#ebs_config}
  */
  readonly ebsConfig?: MasterInstanceGroupEbsConfigProperty[] | cdktn.IResolvable;
}
export class MasterInstanceGroupPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MasterInstanceGroupProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bidPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPrice = this._bidPrice;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ebsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsConfig = this._ebsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MasterInstanceGroupProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bidPrice = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._name = undefined;
      this._ebsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bidPrice = value.bidPrice;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._name = value.name;
      this._ebsConfig.internalValue = value.ebsConfig;
    }
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string; 
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
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

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig = new MasterInstanceGroupEbsConfigPropertyList(this, "ebs_config", true);
  public get ebsConfig() {
    return this._ebsConfig;
  }
  public putEbsConfig(value: MasterInstanceGroupEbsConfigProperty[] | cdktn.IResolvable) {
    this._ebsConfig.internalValue = value;
  }
  public resetEbsConfig() {
    this._ebsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig.internalValue;
  }
}
}
