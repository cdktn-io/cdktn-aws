// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsFinspaceKxClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#availability_zone_id AwsFinspaceKxCluster#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#az_mode AwsFinspaceKxCluster#az_mode}
  */
  readonly azMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#command_line_arguments AwsFinspaceKxCluster#command_line_arguments}
  */
  readonly commandLineArguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#description AwsFinspaceKxCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#environment_id AwsFinspaceKxCluster#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#execution_role AwsFinspaceKxCluster#execution_role}
  */
  readonly executionRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#id AwsFinspaceKxCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#initialization_script AwsFinspaceKxCluster#initialization_script}
  */
  readonly initializationScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#name AwsFinspaceKxCluster#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#region AwsFinspaceKxCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#release_label AwsFinspaceKxCluster#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#tags AwsFinspaceKxCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#tags_all AwsFinspaceKxCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#type AwsFinspaceKxCluster#type}
  */
  readonly type: string;
  /**
  * auto_scaling_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration AwsFinspaceKxCluster#auto_scaling_configuration}
  */
  readonly autoScalingConfiguration?: AwsFinspaceKxCluster.AutoScalingConfigurationProperty;
  /**
  * cache_storage_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#cache_storage_configurations AwsFinspaceKxCluster#cache_storage_configurations}
  */
  readonly cacheStorageConfigurations?: AwsFinspaceKxCluster.CacheStorageConfigurationsProperty[] | cdktn.IResolvable;
  /**
  * capacity_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#capacity_configuration AwsFinspaceKxCluster#capacity_configuration}
  */
  readonly capacityConfiguration?: AwsFinspaceKxCluster.CapacityConfigurationProperty;
  /**
  * code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#code AwsFinspaceKxCluster#code}
  */
  readonly code?: AwsFinspaceKxCluster.CodeProperty;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#database AwsFinspaceKxCluster#database}
  */
  readonly database?: AwsFinspaceKxCluster.DatabaseProperty[] | cdktn.IResolvable;
  /**
  * savedown_storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration AwsFinspaceKxCluster#savedown_storage_configuration}
  */
  readonly savedownStorageConfiguration?: AwsFinspaceKxCluster.SavedownStorageConfigurationProperty;
  /**
  * scaling_group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#scaling_group_configuration AwsFinspaceKxCluster#scaling_group_configuration}
  */
  readonly scalingGroupConfiguration?: AwsFinspaceKxCluster.ScalingGroupConfigurationProperty;
  /**
  * tickerplant_log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#tickerplant_log_configuration AwsFinspaceKxCluster#tickerplant_log_configuration}
  */
  readonly tickerplantLogConfiguration?: AwsFinspaceKxCluster.TickerplantLogConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#timeouts AwsFinspaceKxCluster#timeouts}
  */
  readonly timeouts?: AwsFinspaceKxCluster.TimeoutsProperty;
  /**
  * vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#vpc_configuration AwsFinspaceKxCluster#vpc_configuration}
  */
  readonly vpcConfiguration: AwsFinspaceKxCluster.VpcConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster}
*/
export class AwsFinspaceKxCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_finspace_kx_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsFinspaceKxCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsFinspaceKxCluster to import
  * @param importFromId The id of the existing AwsFinspaceKxCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsFinspaceKxCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_finspace_kx_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsFinspaceKxClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AwsFinspaceKxClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_finspace_kx_cluster',
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
    this._availabilityZoneId = config.availabilityZoneId;
    this._azMode = config.azMode;
    this._commandLineArguments = config.commandLineArguments;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._executionRole = config.executionRole;
    this._id = config.id;
    this._initializationScript = config.initializationScript;
    this._name = config.name;
    this._region = config.region;
    this._releaseLabel = config.releaseLabel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._autoScalingConfiguration.internalValue = config.autoScalingConfiguration;
    this._cacheStorageConfigurations.internalValue = config.cacheStorageConfigurations;
    this._capacityConfiguration.internalValue = config.capacityConfiguration;
    this._code.internalValue = config.code;
    this._database.internalValue = config.database;
    this._savedownStorageConfiguration.internalValue = config.savedownStorageConfiguration;
    this._scalingGroupConfiguration.internalValue = config.scalingGroupConfiguration;
    this._tickerplantLogConfiguration.internalValue = config.tickerplantLogConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfiguration.internalValue = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_id - computed: false, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // az_mode - computed: false, optional: false, required: true
  private _azMode?: string; 
  public get azMode() {
    return this.getStringAttribute('az_mode');
  }
  public set azMode(value: string) {
    this._azMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azModeInput() {
    return this._azMode;
  }

  // command_line_arguments - computed: false, optional: true, required: false
  private _commandLineArguments?: { [key: string]: string }; 
  public get commandLineArguments() {
    return this.getStringMapAttribute('command_line_arguments');
  }
  public set commandLineArguments(value: { [key: string]: string }) {
    this._commandLineArguments = value;
  }
  public resetCommandLineArguments() {
    this._commandLineArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineArgumentsInput() {
    return this._commandLineArguments;
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // execution_role - computed: false, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
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

  // initialization_script - computed: false, optional: true, required: false
  private _initializationScript?: string; 
  public get initializationScript() {
    return this.getStringAttribute('initialization_script');
  }
  public set initializationScript(value: string) {
    this._initializationScript = value;
  }
  public resetInitializationScript() {
    this._initializationScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationScriptInput() {
    return this._initializationScript;
  }

  // last_modified_timestamp - computed: true, optional: false, required: false
  public get lastModifiedTimestamp() {
    return this.getStringAttribute('last_modified_timestamp');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
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

  // auto_scaling_configuration - computed: false, optional: true, required: false
  private _autoScalingConfiguration = new AwsFinspaceKxCluster.AutoScalingConfigurationPropertyOutputReference(this, "auto_scaling_configuration");
  public get autoScalingConfiguration() {
    return this._autoScalingConfiguration;
  }
  public putAutoScalingConfiguration(value: AwsFinspaceKxCluster.AutoScalingConfigurationProperty) {
    this._autoScalingConfiguration.internalValue = value;
  }
  public resetAutoScalingConfiguration() {
    this._autoScalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationInput() {
    return this._autoScalingConfiguration.internalValue;
  }

  // cache_storage_configurations - computed: false, optional: true, required: false
  private _cacheStorageConfigurations = new AwsFinspaceKxCluster.CacheStorageConfigurationsPropertyList(this, "cache_storage_configurations", false);
  public get cacheStorageConfigurations() {
    return this._cacheStorageConfigurations;
  }
  public putCacheStorageConfigurations(value: AwsFinspaceKxCluster.CacheStorageConfigurationsProperty[] | cdktn.IResolvable) {
    this._cacheStorageConfigurations.internalValue = value;
  }
  public resetCacheStorageConfigurations() {
    this._cacheStorageConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheStorageConfigurationsInput() {
    return this._cacheStorageConfigurations.internalValue;
  }

  // capacity_configuration - computed: false, optional: true, required: false
  private _capacityConfiguration = new AwsFinspaceKxCluster.CapacityConfigurationPropertyOutputReference(this, "capacity_configuration");
  public get capacityConfiguration() {
    return this._capacityConfiguration;
  }
  public putCapacityConfiguration(value: AwsFinspaceKxCluster.CapacityConfigurationProperty) {
    this._capacityConfiguration.internalValue = value;
  }
  public resetCapacityConfiguration() {
    this._capacityConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityConfigurationInput() {
    return this._capacityConfiguration.internalValue;
  }

  // code - computed: false, optional: true, required: false
  private _code = new AwsFinspaceKxCluster.CodePropertyOutputReference(this, "code");
  public get code() {
    return this._code;
  }
  public putCode(value: AwsFinspaceKxCluster.CodeProperty) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new AwsFinspaceKxCluster.DatabasePropertyList(this, "database", false);
  public get database() {
    return this._database;
  }
  public putDatabase(value: AwsFinspaceKxCluster.DatabaseProperty[] | cdktn.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // savedown_storage_configuration - computed: false, optional: true, required: false
  private _savedownStorageConfiguration = new AwsFinspaceKxCluster.SavedownStorageConfigurationPropertyOutputReference(this, "savedown_storage_configuration");
  public get savedownStorageConfiguration() {
    return this._savedownStorageConfiguration;
  }
  public putSavedownStorageConfiguration(value: AwsFinspaceKxCluster.SavedownStorageConfigurationProperty) {
    this._savedownStorageConfiguration.internalValue = value;
  }
  public resetSavedownStorageConfiguration() {
    this._savedownStorageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedownStorageConfigurationInput() {
    return this._savedownStorageConfiguration.internalValue;
  }

  // scaling_group_configuration - computed: false, optional: true, required: false
  private _scalingGroupConfiguration = new AwsFinspaceKxCluster.ScalingGroupConfigurationPropertyOutputReference(this, "scaling_group_configuration");
  public get scalingGroupConfiguration() {
    return this._scalingGroupConfiguration;
  }
  public putScalingGroupConfiguration(value: AwsFinspaceKxCluster.ScalingGroupConfigurationProperty) {
    this._scalingGroupConfiguration.internalValue = value;
  }
  public resetScalingGroupConfiguration() {
    this._scalingGroupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupConfigurationInput() {
    return this._scalingGroupConfiguration.internalValue;
  }

  // tickerplant_log_configuration - computed: false, optional: true, required: false
  private _tickerplantLogConfiguration = new AwsFinspaceKxCluster.TickerplantLogConfigurationPropertyList(this, "tickerplant_log_configuration", false);
  public get tickerplantLogConfiguration() {
    return this._tickerplantLogConfiguration;
  }
  public putTickerplantLogConfiguration(value: AwsFinspaceKxCluster.TickerplantLogConfigurationProperty[] | cdktn.IResolvable) {
    this._tickerplantLogConfiguration.internalValue = value;
  }
  public resetTickerplantLogConfiguration() {
    this._tickerplantLogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickerplantLogConfigurationInput() {
    return this._tickerplantLogConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsFinspaceKxCluster.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsFinspaceKxCluster.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_configuration - computed: false, optional: false, required: true
  private _vpcConfiguration = new AwsFinspaceKxCluster.VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: AwsFinspaceKxCluster.VpcConfigurationProperty) {
    this._vpcConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_id: cdktn.stringToTerraform(this._availabilityZoneId),
      az_mode: cdktn.stringToTerraform(this._azMode),
      command_line_arguments: cdktn.hashMapper(cdktn.stringToTerraform)(this._commandLineArguments),
      description: cdktn.stringToTerraform(this._description),
      environment_id: cdktn.stringToTerraform(this._environmentId),
      execution_role: cdktn.stringToTerraform(this._executionRole),
      id: cdktn.stringToTerraform(this._id),
      initialization_script: cdktn.stringToTerraform(this._initializationScript),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      release_label: cdktn.stringToTerraform(this._releaseLabel),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      type: cdktn.stringToTerraform(this._type),
      auto_scaling_configuration: awsFinspaceKxClusterAutoScalingConfigurationPropertyToTerraform(this._autoScalingConfiguration.internalValue),
      cache_storage_configurations: cdktn.listMapper(awsFinspaceKxClusterCacheStorageConfigurationsPropertyToTerraform, true)(this._cacheStorageConfigurations.internalValue),
      capacity_configuration: awsFinspaceKxClusterCapacityConfigurationPropertyToTerraform(this._capacityConfiguration.internalValue),
      code: awsFinspaceKxClusterCodePropertyToTerraform(this._code.internalValue),
      database: cdktn.listMapper(awsFinspaceKxClusterDatabasePropertyToTerraform, true)(this._database.internalValue),
      savedown_storage_configuration: awsFinspaceKxClusterSavedownStorageConfigurationPropertyToTerraform(this._savedownStorageConfiguration.internalValue),
      scaling_group_configuration: awsFinspaceKxClusterScalingGroupConfigurationPropertyToTerraform(this._scalingGroupConfiguration.internalValue),
      tickerplant_log_configuration: cdktn.listMapper(awsFinspaceKxClusterTickerplantLogConfigurationPropertyToTerraform, true)(this._tickerplantLogConfiguration.internalValue),
      timeouts: awsFinspaceKxClusterTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      vpc_configuration: awsFinspaceKxClusterVpcConfigurationPropertyToTerraform(this._vpcConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_id: {
        value: cdktn.stringToHclTerraform(this._availabilityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      az_mode: {
        value: cdktn.stringToHclTerraform(this._azMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_line_arguments: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._commandLineArguments),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktn.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role: {
        value: cdktn.stringToHclTerraform(this._executionRole),
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
      initialization_script: {
        value: cdktn.stringToHclTerraform(this._initializationScript),
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
      release_label: {
        value: cdktn.stringToHclTerraform(this._releaseLabel),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scaling_configuration: {
        value: awsFinspaceKxClusterAutoScalingConfigurationPropertyToHclTerraform(this._autoScalingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.AutoScalingConfigurationPropertyList",
      },
      cache_storage_configurations: {
        value: cdktn.listMapperHcl(awsFinspaceKxClusterCacheStorageConfigurationsPropertyToHclTerraform, true)(this._cacheStorageConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.CacheStorageConfigurationsPropertyList",
      },
      capacity_configuration: {
        value: awsFinspaceKxClusterCapacityConfigurationPropertyToHclTerraform(this._capacityConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.CapacityConfigurationPropertyList",
      },
      code: {
        value: awsFinspaceKxClusterCodePropertyToHclTerraform(this._code.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.CodePropertyList",
      },
      database: {
        value: cdktn.listMapperHcl(awsFinspaceKxClusterDatabasePropertyToHclTerraform, true)(this._database.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.DatabasePropertyList",
      },
      savedown_storage_configuration: {
        value: awsFinspaceKxClusterSavedownStorageConfigurationPropertyToHclTerraform(this._savedownStorageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.SavedownStorageConfigurationPropertyList",
      },
      scaling_group_configuration: {
        value: awsFinspaceKxClusterScalingGroupConfigurationPropertyToHclTerraform(this._scalingGroupConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.ScalingGroupConfigurationPropertyList",
      },
      tickerplant_log_configuration: {
        value: cdktn.listMapperHcl(awsFinspaceKxClusterTickerplantLogConfigurationPropertyToHclTerraform, true)(this._tickerplantLogConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.TickerplantLogConfigurationPropertyList",
      },
      timeouts: {
        value: awsFinspaceKxClusterTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsFinspaceKxCluster.TimeoutsProperty",
      },
      vpc_configuration: {
        value: awsFinspaceKxClusterVpcConfigurationPropertyToHclTerraform(this._vpcConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFinspaceKxCluster.VpcConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsFinspaceKxClusterAutoScalingConfigurationPropertyToTerraform(struct?: AwsFinspaceKxCluster.AutoScalingConfigurationPropertyOutputReference | AwsFinspaceKxCluster.AutoScalingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_scaling_metric: cdktn.stringToTerraform(struct!.autoScalingMetric),
    max_node_count: cdktn.numberToTerraform(struct!.maxNodeCount),
    metric_target: cdktn.numberToTerraform(struct!.metricTarget),
    min_node_count: cdktn.numberToTerraform(struct!.minNodeCount),
    scale_in_cooldown_seconds: cdktn.numberToTerraform(struct!.scaleInCooldownSeconds),
    scale_out_cooldown_seconds: cdktn.numberToTerraform(struct!.scaleOutCooldownSeconds),
  }
}


export function awsFinspaceKxClusterAutoScalingConfigurationPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.AutoScalingConfigurationPropertyOutputReference | AwsFinspaceKxCluster.AutoScalingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_scaling_metric: {
      value: cdktn.stringToHclTerraform(struct!.autoScalingMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_count: {
      value: cdktn.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_target: {
      value: cdktn.numberToHclTerraform(struct!.metricTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktn.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_in_cooldown_seconds: {
      value: cdktn.numberToHclTerraform(struct!.scaleInCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown_seconds: {
      value: cdktn.numberToHclTerraform(struct!.scaleOutCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterCacheStorageConfigurationsPropertyToTerraform(struct?: AwsFinspaceKxCluster.CacheStorageConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    size: cdktn.numberToTerraform(struct!.size),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsFinspaceKxClusterCacheStorageConfigurationsPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.CacheStorageConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterCapacityConfigurationPropertyToTerraform(struct?: AwsFinspaceKxCluster.CapacityConfigurationPropertyOutputReference | AwsFinspaceKxCluster.CapacityConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_count: cdktn.numberToTerraform(struct!.nodeCount),
    node_type: cdktn.stringToTerraform(struct!.nodeType),
  }
}


export function awsFinspaceKxClusterCapacityConfigurationPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.CapacityConfigurationPropertyOutputReference | AwsFinspaceKxCluster.CapacityConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_count: {
      value: cdktn.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktn.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterCodePropertyToTerraform(struct?: AwsFinspaceKxCluster.CodePropertyOutputReference | AwsFinspaceKxCluster.CodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktn.stringToTerraform(struct!.s3Key),
    s3_object_version: cdktn.stringToTerraform(struct!.s3ObjectVersion),
  }
}


export function awsFinspaceKxClusterCodePropertyToHclTerraform(struct?: AwsFinspaceKxCluster.CodePropertyOutputReference | AwsFinspaceKxCluster.CodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key: {
      value: cdktn.stringToHclTerraform(struct!.s3Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_version: {
      value: cdktn.stringToHclTerraform(struct!.s3ObjectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterCacheConfigurationsPropertyToTerraform(struct?: AwsFinspaceKxCluster.CacheConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_type: cdktn.stringToTerraform(struct!.cacheType),
    db_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dbPaths),
  }
}


export function awsFinspaceKxClusterCacheConfigurationsPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.CacheConfigurationsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_type: {
      value: cdktn.stringToHclTerraform(struct!.cacheType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dbPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterDatabasePropertyToTerraform(struct?: AwsFinspaceKxCluster.DatabaseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    changeset_id: cdktn.stringToTerraform(struct!.changesetId),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    dataview_name: cdktn.stringToTerraform(struct!.dataviewName),
    cache_configurations: cdktn.listMapper(awsFinspaceKxClusterCacheConfigurationsPropertyToTerraform, true)(struct!.cacheConfigurations),
  }
}


export function awsFinspaceKxClusterDatabasePropertyToHclTerraform(struct?: AwsFinspaceKxCluster.DatabaseProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    changeset_id: {
      value: cdktn.stringToHclTerraform(struct!.changesetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataview_name: {
      value: cdktn.stringToHclTerraform(struct!.dataviewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_configurations: {
      value: cdktn.listMapperHcl(awsFinspaceKxClusterCacheConfigurationsPropertyToHclTerraform, true)(struct!.cacheConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "CacheConfigurationsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterSavedownStorageConfigurationPropertyToTerraform(struct?: AwsFinspaceKxCluster.SavedownStorageConfigurationPropertyOutputReference | AwsFinspaceKxCluster.SavedownStorageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    size: cdktn.numberToTerraform(struct!.size),
    type: cdktn.stringToTerraform(struct!.type),
    volume_name: cdktn.stringToTerraform(struct!.volumeName),
  }
}


export function awsFinspaceKxClusterSavedownStorageConfigurationPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.SavedownStorageConfigurationPropertyOutputReference | AwsFinspaceKxCluster.SavedownStorageConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    volume_name: {
      value: cdktn.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterScalingGroupConfigurationPropertyToTerraform(struct?: AwsFinspaceKxCluster.ScalingGroupConfigurationPropertyOutputReference | AwsFinspaceKxCluster.ScalingGroupConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu: cdktn.numberToTerraform(struct!.cpu),
    memory_limit: cdktn.numberToTerraform(struct!.memoryLimit),
    memory_reservation: cdktn.numberToTerraform(struct!.memoryReservation),
    node_count: cdktn.numberToTerraform(struct!.nodeCount),
    scaling_group_name: cdktn.stringToTerraform(struct!.scalingGroupName),
  }
}


export function awsFinspaceKxClusterScalingGroupConfigurationPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.ScalingGroupConfigurationPropertyOutputReference | AwsFinspaceKxCluster.ScalingGroupConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu: {
      value: cdktn.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit: {
      value: cdktn.numberToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation: {
      value: cdktn.numberToHclTerraform(struct!.memoryReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktn.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_group_name: {
      value: cdktn.stringToHclTerraform(struct!.scalingGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterTickerplantLogConfigurationPropertyToTerraform(struct?: AwsFinspaceKxCluster.TickerplantLogConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tickerplant_log_volumes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tickerplantLogVolumes),
  }
}


export function awsFinspaceKxClusterTickerplantLogConfigurationPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.TickerplantLogConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tickerplant_log_volumes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tickerplantLogVolumes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFinspaceKxClusterTimeoutsPropertyToTerraform(struct?: AwsFinspaceKxCluster.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsFinspaceKxClusterTimeoutsPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsFinspaceKxClusterVpcConfigurationPropertyToTerraform(struct?: AwsFinspaceKxCluster.VpcConfigurationPropertyOutputReference | AwsFinspaceKxCluster.VpcConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function awsFinspaceKxClusterVpcConfigurationPropertyToHclTerraform(struct?: AwsFinspaceKxCluster.VpcConfigurationPropertyOutputReference | AwsFinspaceKxCluster.VpcConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsFinspaceKxCluster {
export interface AutoScalingConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#auto_scaling_metric AwsFinspaceKxCluster#auto_scaling_metric}
  */
  readonly autoScalingMetric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#max_node_count AwsFinspaceKxCluster#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#metric_target AwsFinspaceKxCluster#metric_target}
  */
  readonly metricTarget: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#min_node_count AwsFinspaceKxCluster#min_node_count}
  */
  readonly minNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds AwsFinspaceKxCluster#scale_in_cooldown_seconds}
  */
  readonly scaleInCooldownSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds AwsFinspaceKxCluster#scale_out_cooldown_seconds}
  */
  readonly scaleOutCooldownSeconds: number;
}
export class AutoScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoScalingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingMetric = this._autoScalingMetric;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._metricTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTarget = this._metricTarget;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._scaleInCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldownSeconds = this._scaleInCooldownSeconds;
    }
    if (this._scaleOutCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldownSeconds = this._scaleOutCooldownSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoScalingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScalingMetric = undefined;
      this._maxNodeCount = undefined;
      this._metricTarget = undefined;
      this._minNodeCount = undefined;
      this._scaleInCooldownSeconds = undefined;
      this._scaleOutCooldownSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScalingMetric = value.autoScalingMetric;
      this._maxNodeCount = value.maxNodeCount;
      this._metricTarget = value.metricTarget;
      this._minNodeCount = value.minNodeCount;
      this._scaleInCooldownSeconds = value.scaleInCooldownSeconds;
      this._scaleOutCooldownSeconds = value.scaleOutCooldownSeconds;
    }
  }

  // auto_scaling_metric - computed: false, optional: false, required: true
  private _autoScalingMetric?: string; 
  public get autoScalingMetric() {
    return this.getStringAttribute('auto_scaling_metric');
  }
  public set autoScalingMetric(value: string) {
    this._autoScalingMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingMetricInput() {
    return this._autoScalingMetric;
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // metric_target - computed: false, optional: false, required: true
  private _metricTarget?: number; 
  public get metricTarget() {
    return this.getNumberAttribute('metric_target');
  }
  public set metricTarget(value: number) {
    this._metricTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTargetInput() {
    return this._metricTarget;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }

  // scale_in_cooldown_seconds - computed: false, optional: false, required: true
  private _scaleInCooldownSeconds?: number; 
  public get scaleInCooldownSeconds() {
    return this.getNumberAttribute('scale_in_cooldown_seconds');
  }
  public set scaleInCooldownSeconds(value: number) {
    this._scaleInCooldownSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownSecondsInput() {
    return this._scaleInCooldownSeconds;
  }

  // scale_out_cooldown_seconds - computed: false, optional: false, required: true
  private _scaleOutCooldownSeconds?: number; 
  public get scaleOutCooldownSeconds() {
    return this.getNumberAttribute('scale_out_cooldown_seconds');
  }
  public set scaleOutCooldownSeconds(value: number) {
    this._scaleOutCooldownSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownSecondsInput() {
    return this._scaleOutCooldownSeconds;
  }
}
export interface CacheStorageConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#size AwsFinspaceKxCluster#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#type AwsFinspaceKxCluster#type}
  */
  readonly type: string;
}
export class CacheStorageConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CacheStorageConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheStorageConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._type = value.type;
    }
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
}

export class CacheStorageConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : CacheStorageConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): CacheStorageConfigurationsPropertyOutputReference {
    return new CacheStorageConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapacityConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#node_count AwsFinspaceKxCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#node_type AwsFinspaceKxCluster#node_type}
  */
  readonly nodeType: string;
}
export class CapacityConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCount = undefined;
      this._nodeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCount = value.nodeCount;
      this._nodeType = value.nodeType;
    }
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }
}
export interface CodeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#s3_bucket AwsFinspaceKxCluster#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#s3_key AwsFinspaceKxCluster#s3_key}
  */
  readonly s3Key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#s3_object_version AwsFinspaceKxCluster#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
}
export class CodePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key;
    }
    if (this._s3ObjectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectVersion = this._s3ObjectVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Key = undefined;
      this._s3ObjectVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Key = value.s3Key;
      this._s3ObjectVersion = value.s3ObjectVersion;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: false, optional: false, required: true
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string; 
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion;
  }
}
export interface CacheConfigurationsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#cache_type AwsFinspaceKxCluster#cache_type}
  */
  readonly cacheType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#db_paths AwsFinspaceKxCluster#db_paths}
  */
  readonly dbPaths?: string[];
}
export class CacheConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CacheConfigurationsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheType = this._cacheType;
    }
    if (this._dbPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPaths = this._dbPaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheConfigurationsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheType = undefined;
      this._dbPaths = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheType = value.cacheType;
      this._dbPaths = value.dbPaths;
    }
  }

  // cache_type - computed: false, optional: false, required: true
  private _cacheType?: string; 
  public get cacheType() {
    return this.getStringAttribute('cache_type');
  }
  public set cacheType(value: string) {
    this._cacheType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTypeInput() {
    return this._cacheType;
  }

  // db_paths - computed: false, optional: true, required: false
  private _dbPaths?: string[]; 
  public get dbPaths() {
    return cdktn.Fn.tolist(this.getListAttribute('db_paths'));
  }
  public set dbPaths(value: string[]) {
    this._dbPaths = value;
  }
  public resetDbPaths() {
    this._dbPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPathsInput() {
    return this._dbPaths;
  }
}

export class CacheConfigurationsPropertyList extends cdktn.ComplexList {
  public internalValue? : CacheConfigurationsProperty[] | cdktn.IResolvable

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
  public get(index: number): CacheConfigurationsPropertyOutputReference {
    return new CacheConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#changeset_id AwsFinspaceKxCluster#changeset_id}
  */
  readonly changesetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#database_name AwsFinspaceKxCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#dataview_name AwsFinspaceKxCluster#dataview_name}
  */
  readonly dataviewName?: string;
  /**
  * cache_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#cache_configurations AwsFinspaceKxCluster#cache_configurations}
  */
  readonly cacheConfigurations?: CacheConfigurationsProperty[] | cdktn.IResolvable;
}
export class DatabasePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabaseProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changesetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.changesetId = this._changesetId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dataviewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataviewName = this._dataviewName;
    }
    if (this._cacheConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheConfigurations = this._cacheConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changesetId = undefined;
      this._databaseName = undefined;
      this._dataviewName = undefined;
      this._cacheConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changesetId = value.changesetId;
      this._databaseName = value.databaseName;
      this._dataviewName = value.dataviewName;
      this._cacheConfigurations.internalValue = value.cacheConfigurations;
    }
  }

  // changeset_id - computed: false, optional: true, required: false
  private _changesetId?: string; 
  public get changesetId() {
    return this.getStringAttribute('changeset_id');
  }
  public set changesetId(value: string) {
    this._changesetId = value;
  }
  public resetChangesetId() {
    this._changesetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changesetIdInput() {
    return this._changesetId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // dataview_name - computed: false, optional: true, required: false
  private _dataviewName?: string; 
  public get dataviewName() {
    return this.getStringAttribute('dataview_name');
  }
  public set dataviewName(value: string) {
    this._dataviewName = value;
  }
  public resetDataviewName() {
    this._dataviewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataviewNameInput() {
    return this._dataviewName;
  }

  // cache_configurations - computed: false, optional: true, required: false
  private _cacheConfigurations = new CacheConfigurationsPropertyList(this, "cache_configurations", false);
  public get cacheConfigurations() {
    return this._cacheConfigurations;
  }
  public putCacheConfigurations(value: CacheConfigurationsProperty[] | cdktn.IResolvable) {
    this._cacheConfigurations.internalValue = value;
  }
  public resetCacheConfigurations() {
    this._cacheConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigurationsInput() {
    return this._cacheConfigurations.internalValue;
  }
}

export class DatabasePropertyList extends cdktn.ComplexList {
  public internalValue? : DatabaseProperty[] | cdktn.IResolvable

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
  public get(index: number): DatabasePropertyOutputReference {
    return new DatabasePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SavedownStorageConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#size AwsFinspaceKxCluster#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#type AwsFinspaceKxCluster#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#volume_name AwsFinspaceKxCluster#volume_name}
  */
  readonly volumeName?: string;
}
export class SavedownStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SavedownStorageConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SavedownStorageConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._type = undefined;
      this._volumeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._type = value.type;
      this._volumeName = value.volumeName;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface ScalingGroupConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#cpu AwsFinspaceKxCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#memory_limit AwsFinspaceKxCluster#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#memory_reservation AwsFinspaceKxCluster#memory_reservation}
  */
  readonly memoryReservation: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#node_count AwsFinspaceKxCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#scaling_group_name AwsFinspaceKxCluster#scaling_group_name}
  */
  readonly scalingGroupName: string;
}
export class ScalingGroupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScalingGroupConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservation = this._memoryReservation;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._scalingGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingGroupName = this._scalingGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScalingGroupConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memoryLimit = undefined;
      this._memoryReservation = undefined;
      this._nodeCount = undefined;
      this._scalingGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memoryLimit = value.memoryLimit;
      this._memoryReservation = value.memoryReservation;
      this._nodeCount = value.nodeCount;
      this._scalingGroupName = value.scalingGroupName;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_reservation - computed: false, optional: false, required: true
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // scaling_group_name - computed: false, optional: false, required: true
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }
}
export interface TickerplantLogConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes AwsFinspaceKxCluster#tickerplant_log_volumes}
  */
  readonly tickerplantLogVolumes: string[];
}
export class TickerplantLogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TickerplantLogConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tickerplantLogVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickerplantLogVolumes = this._tickerplantLogVolumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TickerplantLogConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tickerplantLogVolumes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tickerplantLogVolumes = value.tickerplantLogVolumes;
    }
  }

  // tickerplant_log_volumes - computed: false, optional: false, required: true
  private _tickerplantLogVolumes?: string[]; 
  public get tickerplantLogVolumes() {
    return cdktn.Fn.tolist(this.getListAttribute('tickerplant_log_volumes'));
  }
  public set tickerplantLogVolumes(value: string[]) {
    this._tickerplantLogVolumes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tickerplantLogVolumesInput() {
    return this._tickerplantLogVolumes;
  }
}

export class TickerplantLogConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TickerplantLogConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TickerplantLogConfigurationPropertyOutputReference {
    return new TickerplantLogConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#create AwsFinspaceKxCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#delete AwsFinspaceKxCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#update AwsFinspaceKxCluster#update}
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
export interface VpcConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#ip_address_type AwsFinspaceKxCluster#ip_address_type}
  */
  readonly ipAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#security_group_ids AwsFinspaceKxCluster#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#subnet_ids AwsFinspaceKxCluster#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/finspace_kx_cluster#vpc_id AwsFinspaceKxCluster#vpc_id}
  */
  readonly vpcId: string;
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressType = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressType = value.ipAddressType;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // ip_address_type - computed: false, optional: false, required: true
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
}
