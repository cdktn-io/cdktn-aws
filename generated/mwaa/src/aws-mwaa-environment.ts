// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#airflow_configuration_options TfEnvironment#airflow_configuration_options}
  */
  readonly airflowConfigurationOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#airflow_version TfEnvironment#airflow_version}
  */
  readonly airflowVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#dag_s3_path TfEnvironment#dag_s3_path}
  */
  readonly dagS3Path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#endpoint_management TfEnvironment#endpoint_management}
  */
  readonly endpointManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#environment_class TfEnvironment#environment_class}
  */
  readonly environmentClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#execution_role_arn TfEnvironment#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#id TfEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#kms_key TfEnvironment#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#max_webservers TfEnvironment#max_webservers}
  */
  readonly maxWebservers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#max_workers TfEnvironment#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#min_webservers TfEnvironment#min_webservers}
  */
  readonly minWebservers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#min_workers TfEnvironment#min_workers}
  */
  readonly minWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#name TfEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#plugins_s3_object_version TfEnvironment#plugins_s3_object_version}
  */
  readonly pluginsS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#plugins_s3_path TfEnvironment#plugins_s3_path}
  */
  readonly pluginsS3Path?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#region TfEnvironment#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#requirements_s3_object_version TfEnvironment#requirements_s3_object_version}
  */
  readonly requirementsS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#requirements_s3_path TfEnvironment#requirements_s3_path}
  */
  readonly requirementsS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#schedulers TfEnvironment#schedulers}
  */
  readonly schedulers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#source_bucket_arn TfEnvironment#source_bucket_arn}
  */
  readonly sourceBucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#startup_script_s3_object_version TfEnvironment#startup_script_s3_object_version}
  */
  readonly startupScriptS3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#startup_script_s3_path TfEnvironment#startup_script_s3_path}
  */
  readonly startupScriptS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#tags TfEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#tags_all TfEnvironment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#webserver_access_mode TfEnvironment#webserver_access_mode}
  */
  readonly webserverAccessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#weekly_maintenance_window_start TfEnvironment#weekly_maintenance_window_start}
  */
  readonly weeklyMaintenanceWindowStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#worker_replacement_strategy TfEnvironment#worker_replacement_strategy}
  */
  readonly workerReplacementStrategy?: string;
  /**
  * logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#logging_configuration TfEnvironment#logging_configuration}
  */
  readonly loggingConfiguration?: TfEnvironment.LoggingConfigurationProperty;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#network_configuration TfEnvironment#network_configuration}
  */
  readonly networkConfiguration: TfEnvironment.NetworkConfigurationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#timeouts TfEnvironment#timeouts}
  */
  readonly timeouts?: TfEnvironment.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment aws_mwaa_environment}
*/
export class TfEnvironment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mwaa_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfEnvironment to import
  * @param importFromId The id of the existing TfEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mwaa_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment aws_mwaa_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: TfEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mwaa_environment',
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
    this._airflowConfigurationOptions = config.airflowConfigurationOptions;
    this._airflowVersion = config.airflowVersion;
    this._dagS3Path = config.dagS3Path;
    this._endpointManagement = config.endpointManagement;
    this._environmentClass = config.environmentClass;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._kmsKey = config.kmsKey;
    this._maxWebservers = config.maxWebservers;
    this._maxWorkers = config.maxWorkers;
    this._minWebservers = config.minWebservers;
    this._minWorkers = config.minWorkers;
    this._name = config.name;
    this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
    this._pluginsS3Path = config.pluginsS3Path;
    this._region = config.region;
    this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
    this._requirementsS3Path = config.requirementsS3Path;
    this._schedulers = config.schedulers;
    this._sourceBucketArn = config.sourceBucketArn;
    this._startupScriptS3ObjectVersion = config.startupScriptS3ObjectVersion;
    this._startupScriptS3Path = config.startupScriptS3Path;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._webserverAccessMode = config.webserverAccessMode;
    this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
    this._workerReplacementStrategy = config.workerReplacementStrategy;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // airflow_configuration_options - computed: false, optional: true, required: false
  private _airflowConfigurationOptions?: { [key: string]: string }; 
  public get airflowConfigurationOptions() {
    return this.getStringMapAttribute('airflow_configuration_options');
  }
  public set airflowConfigurationOptions(value: { [key: string]: string }) {
    this._airflowConfigurationOptions = value;
  }
  public resetAirflowConfigurationOptions() {
    this._airflowConfigurationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowConfigurationOptionsInput() {
    return this._airflowConfigurationOptions;
  }

  // airflow_version - computed: true, optional: true, required: false
  private _airflowVersion?: string; 
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }
  public set airflowVersion(value: string) {
    this._airflowVersion = value;
  }
  public resetAirflowVersion() {
    this._airflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowVersionInput() {
    return this._airflowVersion;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dag_s3_path - computed: false, optional: false, required: true
  private _dagS3Path?: string; 
  public get dagS3Path() {
    return this.getStringAttribute('dag_s3_path');
  }
  public set dagS3Path(value: string) {
    this._dagS3Path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dagS3PathInput() {
    return this._dagS3Path;
  }

  // database_vpc_endpoint_service - computed: true, optional: false, required: false
  public get databaseVpcEndpointService() {
    return this.getStringAttribute('database_vpc_endpoint_service');
  }

  // endpoint_management - computed: true, optional: true, required: false
  private _endpointManagement?: string; 
  public get endpointManagement() {
    return this.getStringAttribute('endpoint_management');
  }
  public set endpointManagement(value: string) {
    this._endpointManagement = value;
  }
  public resetEndpointManagement() {
    this._endpointManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointManagementInput() {
    return this._endpointManagement;
  }

  // environment_class - computed: true, optional: true, required: false
  private _environmentClass?: string; 
  public get environmentClass() {
    return this.getStringAttribute('environment_class');
  }
  public set environmentClass(value: string) {
    this._environmentClass = value;
  }
  public resetEnvironmentClass() {
    this._environmentClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentClassInput() {
    return this._environmentClass;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // last_updated - computed: true, optional: false, required: false
  private _lastUpdated = new TfEnvironment.LastUpdatedPropertyList(this, "last_updated", false);
  public get lastUpdated() {
    return this._lastUpdated;
  }

  // max_webservers - computed: true, optional: true, required: false
  private _maxWebservers?: number; 
  public get maxWebservers() {
    return this.getNumberAttribute('max_webservers');
  }
  public set maxWebservers(value: number) {
    this._maxWebservers = value;
  }
  public resetMaxWebservers() {
    this._maxWebservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWebserversInput() {
    return this._maxWebservers;
  }

  // max_workers - computed: true, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_webservers - computed: true, optional: true, required: false
  private _minWebservers?: number; 
  public get minWebservers() {
    return this.getNumberAttribute('min_webservers');
  }
  public set minWebservers(value: number) {
    this._minWebservers = value;
  }
  public resetMinWebservers() {
    this._minWebservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWebserversInput() {
    return this._minWebservers;
  }

  // min_workers - computed: true, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
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

  // plugins_s3_object_version - computed: true, optional: true, required: false
  private _pluginsS3ObjectVersion?: string; 
  public get pluginsS3ObjectVersion() {
    return this.getStringAttribute('plugins_s3_object_version');
  }
  public set pluginsS3ObjectVersion(value: string) {
    this._pluginsS3ObjectVersion = value;
  }
  public resetPluginsS3ObjectVersion() {
    this._pluginsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3ObjectVersionInput() {
    return this._pluginsS3ObjectVersion;
  }

  // plugins_s3_path - computed: false, optional: true, required: false
  private _pluginsS3Path?: string; 
  public get pluginsS3Path() {
    return this.getStringAttribute('plugins_s3_path');
  }
  public set pluginsS3Path(value: string) {
    this._pluginsS3Path = value;
  }
  public resetPluginsS3Path() {
    this._pluginsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsS3PathInput() {
    return this._pluginsS3Path;
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

  // requirements_s3_object_version - computed: true, optional: true, required: false
  private _requirementsS3ObjectVersion?: string; 
  public get requirementsS3ObjectVersion() {
    return this.getStringAttribute('requirements_s3_object_version');
  }
  public set requirementsS3ObjectVersion(value: string) {
    this._requirementsS3ObjectVersion = value;
  }
  public resetRequirementsS3ObjectVersion() {
    this._requirementsS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3ObjectVersionInput() {
    return this._requirementsS3ObjectVersion;
  }

  // requirements_s3_path - computed: false, optional: true, required: false
  private _requirementsS3Path?: string; 
  public get requirementsS3Path() {
    return this.getStringAttribute('requirements_s3_path');
  }
  public set requirementsS3Path(value: string) {
    this._requirementsS3Path = value;
  }
  public resetRequirementsS3Path() {
    this._requirementsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsS3PathInput() {
    return this._requirementsS3Path;
  }

  // schedulers - computed: true, optional: true, required: false
  private _schedulers?: number; 
  public get schedulers() {
    return this.getNumberAttribute('schedulers');
  }
  public set schedulers(value: number) {
    this._schedulers = value;
  }
  public resetSchedulers() {
    this._schedulers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulersInput() {
    return this._schedulers;
  }

  // service_role_arn - computed: true, optional: false, required: false
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }

  // source_bucket_arn - computed: false, optional: false, required: true
  private _sourceBucketArn?: string; 
  public get sourceBucketArn() {
    return this.getStringAttribute('source_bucket_arn');
  }
  public set sourceBucketArn(value: string) {
    this._sourceBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBucketArnInput() {
    return this._sourceBucketArn;
  }

  // startup_script_s3_object_version - computed: true, optional: true, required: false
  private _startupScriptS3ObjectVersion?: string; 
  public get startupScriptS3ObjectVersion() {
    return this.getStringAttribute('startup_script_s3_object_version');
  }
  public set startupScriptS3ObjectVersion(value: string) {
    this._startupScriptS3ObjectVersion = value;
  }
  public resetStartupScriptS3ObjectVersion() {
    this._startupScriptS3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptS3ObjectVersionInput() {
    return this._startupScriptS3ObjectVersion;
  }

  // startup_script_s3_path - computed: false, optional: true, required: false
  private _startupScriptS3Path?: string; 
  public get startupScriptS3Path() {
    return this.getStringAttribute('startup_script_s3_path');
  }
  public set startupScriptS3Path(value: string) {
    this._startupScriptS3Path = value;
  }
  public resetStartupScriptS3Path() {
    this._startupScriptS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptS3PathInput() {
    return this._startupScriptS3Path;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // webserver_access_mode - computed: true, optional: true, required: false
  private _webserverAccessMode?: string; 
  public get webserverAccessMode() {
    return this.getStringAttribute('webserver_access_mode');
  }
  public set webserverAccessMode(value: string) {
    this._webserverAccessMode = value;
  }
  public resetWebserverAccessMode() {
    this._webserverAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserverAccessModeInput() {
    return this._webserverAccessMode;
  }

  // webserver_url - computed: true, optional: false, required: false
  public get webserverUrl() {
    return this.getStringAttribute('webserver_url');
  }

  // webserver_vpc_endpoint_service - computed: true, optional: false, required: false
  public get webserverVpcEndpointService() {
    return this.getStringAttribute('webserver_vpc_endpoint_service');
  }

  // weekly_maintenance_window_start - computed: true, optional: true, required: false
  private _weeklyMaintenanceWindowStart?: string; 
  public get weeklyMaintenanceWindowStart() {
    return this.getStringAttribute('weekly_maintenance_window_start');
  }
  public set weeklyMaintenanceWindowStart(value: string) {
    this._weeklyMaintenanceWindowStart = value;
  }
  public resetWeeklyMaintenanceWindowStart() {
    this._weeklyMaintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowStartInput() {
    return this._weeklyMaintenanceWindowStart;
  }

  // worker_replacement_strategy - computed: true, optional: true, required: false
  private _workerReplacementStrategy?: string; 
  public get workerReplacementStrategy() {
    return this.getStringAttribute('worker_replacement_strategy');
  }
  public set workerReplacementStrategy(value: string) {
    this._workerReplacementStrategy = value;
  }
  public resetWorkerReplacementStrategy() {
    this._workerReplacementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerReplacementStrategyInput() {
    return this._workerReplacementStrategy;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration = new TfEnvironment.LoggingConfigurationPropertyOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: TfEnvironment.LoggingConfigurationProperty) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new TfEnvironment.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: TfEnvironment.NetworkConfigurationProperty) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfEnvironment.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfEnvironment.TimeoutsProperty) {
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
      airflow_configuration_options: cdktn.hashMapper(cdktn.stringToTerraform)(this._airflowConfigurationOptions),
      airflow_version: cdktn.stringToTerraform(this._airflowVersion),
      dag_s3_path: cdktn.stringToTerraform(this._dagS3Path),
      endpoint_management: cdktn.stringToTerraform(this._endpointManagement),
      environment_class: cdktn.stringToTerraform(this._environmentClass),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      id: cdktn.stringToTerraform(this._id),
      kms_key: cdktn.stringToTerraform(this._kmsKey),
      max_webservers: cdktn.numberToTerraform(this._maxWebservers),
      max_workers: cdktn.numberToTerraform(this._maxWorkers),
      min_webservers: cdktn.numberToTerraform(this._minWebservers),
      min_workers: cdktn.numberToTerraform(this._minWorkers),
      name: cdktn.stringToTerraform(this._name),
      plugins_s3_object_version: cdktn.stringToTerraform(this._pluginsS3ObjectVersion),
      plugins_s3_path: cdktn.stringToTerraform(this._pluginsS3Path),
      region: cdktn.stringToTerraform(this._region),
      requirements_s3_object_version: cdktn.stringToTerraform(this._requirementsS3ObjectVersion),
      requirements_s3_path: cdktn.stringToTerraform(this._requirementsS3Path),
      schedulers: cdktn.numberToTerraform(this._schedulers),
      source_bucket_arn: cdktn.stringToTerraform(this._sourceBucketArn),
      startup_script_s3_object_version: cdktn.stringToTerraform(this._startupScriptS3ObjectVersion),
      startup_script_s3_path: cdktn.stringToTerraform(this._startupScriptS3Path),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      webserver_access_mode: cdktn.stringToTerraform(this._webserverAccessMode),
      weekly_maintenance_window_start: cdktn.stringToTerraform(this._weeklyMaintenanceWindowStart),
      worker_replacement_strategy: cdktn.stringToTerraform(this._workerReplacementStrategy),
      logging_configuration: tfEnvironmentLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
      network_configuration: tfEnvironmentNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
      timeouts: tfEnvironmentTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      airflow_configuration_options: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._airflowConfigurationOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      airflow_version: {
        value: cdktn.stringToHclTerraform(this._airflowVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dag_s3_path: {
        value: cdktn.stringToHclTerraform(this._dagS3Path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_management: {
        value: cdktn.stringToHclTerraform(this._endpointManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_class: {
        value: cdktn.stringToHclTerraform(this._environmentClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
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
      kms_key: {
        value: cdktn.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_webservers: {
        value: cdktn.numberToHclTerraform(this._maxWebservers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_workers: {
        value: cdktn.numberToHclTerraform(this._maxWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_webservers: {
        value: cdktn.numberToHclTerraform(this._minWebservers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_workers: {
        value: cdktn.numberToHclTerraform(this._minWorkers),
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
      plugins_s3_object_version: {
        value: cdktn.stringToHclTerraform(this._pluginsS3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugins_s3_path: {
        value: cdktn.stringToHclTerraform(this._pluginsS3Path),
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
      requirements_s3_object_version: {
        value: cdktn.stringToHclTerraform(this._requirementsS3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirements_s3_path: {
        value: cdktn.stringToHclTerraform(this._requirementsS3Path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedulers: {
        value: cdktn.numberToHclTerraform(this._schedulers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_bucket_arn: {
        value: cdktn.stringToHclTerraform(this._sourceBucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script_s3_object_version: {
        value: cdktn.stringToHclTerraform(this._startupScriptS3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script_s3_path: {
        value: cdktn.stringToHclTerraform(this._startupScriptS3Path),
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
      webserver_access_mode: {
        value: cdktn.stringToHclTerraform(this._webserverAccessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weekly_maintenance_window_start: {
        value: cdktn.stringToHclTerraform(this._weeklyMaintenanceWindowStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_replacement_strategy: {
        value: cdktn.stringToHclTerraform(this._workerReplacementStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_configuration: {
        value: tfEnvironmentLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEnvironment.LoggingConfigurationPropertyList",
      },
      network_configuration: {
        value: tfEnvironmentNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfEnvironment.NetworkConfigurationPropertyList",
      },
      timeouts: {
        value: tfEnvironmentTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfEnvironment.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfEnvironmentErrorPropertyToTerraform(struct?: TfEnvironment.ErrorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEnvironmentErrorPropertyToHclTerraform(struct?: TfEnvironment.ErrorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEnvironmentLastUpdatedPropertyToTerraform(struct?: TfEnvironment.LastUpdatedProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfEnvironmentLastUpdatedPropertyToHclTerraform(struct?: TfEnvironment.LastUpdatedProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfEnvironmentDagProcessingLogsPropertyToTerraform(struct?: TfEnvironment.DagProcessingLogsPropertyOutputReference | TfEnvironment.DagProcessingLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
  }
}


export function tfEnvironmentDagProcessingLogsPropertyToHclTerraform(struct?: TfEnvironment.DagProcessingLogsPropertyOutputReference | TfEnvironment.DagProcessingLogsProperty): any {
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
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEnvironmentSchedulerLogsPropertyToTerraform(struct?: TfEnvironment.SchedulerLogsPropertyOutputReference | TfEnvironment.SchedulerLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
  }
}


export function tfEnvironmentSchedulerLogsPropertyToHclTerraform(struct?: TfEnvironment.SchedulerLogsPropertyOutputReference | TfEnvironment.SchedulerLogsProperty): any {
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
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEnvironmentTaskLogsPropertyToTerraform(struct?: TfEnvironment.TaskLogsPropertyOutputReference | TfEnvironment.TaskLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
  }
}


export function tfEnvironmentTaskLogsPropertyToHclTerraform(struct?: TfEnvironment.TaskLogsPropertyOutputReference | TfEnvironment.TaskLogsProperty): any {
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
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEnvironmentWebserverLogsPropertyToTerraform(struct?: TfEnvironment.WebserverLogsPropertyOutputReference | TfEnvironment.WebserverLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
  }
}


export function tfEnvironmentWebserverLogsPropertyToHclTerraform(struct?: TfEnvironment.WebserverLogsPropertyOutputReference | TfEnvironment.WebserverLogsProperty): any {
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
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEnvironmentWorkerLogsPropertyToTerraform(struct?: TfEnvironment.WorkerLogsPropertyOutputReference | TfEnvironment.WorkerLogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
  }
}


export function tfEnvironmentWorkerLogsPropertyToHclTerraform(struct?: TfEnvironment.WorkerLogsPropertyOutputReference | TfEnvironment.WorkerLogsProperty): any {
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
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEnvironmentLoggingConfigurationPropertyToTerraform(struct?: TfEnvironment.LoggingConfigurationPropertyOutputReference | TfEnvironment.LoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dag_processing_logs: tfEnvironmentDagProcessingLogsPropertyToTerraform(struct!.dagProcessingLogs),
    scheduler_logs: tfEnvironmentSchedulerLogsPropertyToTerraform(struct!.schedulerLogs),
    task_logs: tfEnvironmentTaskLogsPropertyToTerraform(struct!.taskLogs),
    webserver_logs: tfEnvironmentWebserverLogsPropertyToTerraform(struct!.webserverLogs),
    worker_logs: tfEnvironmentWorkerLogsPropertyToTerraform(struct!.workerLogs),
  }
}


export function tfEnvironmentLoggingConfigurationPropertyToHclTerraform(struct?: TfEnvironment.LoggingConfigurationPropertyOutputReference | TfEnvironment.LoggingConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dag_processing_logs: {
      value: tfEnvironmentDagProcessingLogsPropertyToHclTerraform(struct!.dagProcessingLogs),
      isBlock: true,
      type: "list",
      storageClassType: "DagProcessingLogsPropertyList",
    },
    scheduler_logs: {
      value: tfEnvironmentSchedulerLogsPropertyToHclTerraform(struct!.schedulerLogs),
      isBlock: true,
      type: "list",
      storageClassType: "SchedulerLogsPropertyList",
    },
    task_logs: {
      value: tfEnvironmentTaskLogsPropertyToHclTerraform(struct!.taskLogs),
      isBlock: true,
      type: "list",
      storageClassType: "TaskLogsPropertyList",
    },
    webserver_logs: {
      value: tfEnvironmentWebserverLogsPropertyToHclTerraform(struct!.webserverLogs),
      isBlock: true,
      type: "list",
      storageClassType: "WebserverLogsPropertyList",
    },
    worker_logs: {
      value: tfEnvironmentWorkerLogsPropertyToHclTerraform(struct!.workerLogs),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerLogsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfEnvironmentNetworkConfigurationPropertyToTerraform(struct?: TfEnvironment.NetworkConfigurationPropertyOutputReference | TfEnvironment.NetworkConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function tfEnvironmentNetworkConfigurationPropertyToHclTerraform(struct?: TfEnvironment.NetworkConfigurationPropertyOutputReference | TfEnvironment.NetworkConfigurationProperty): any {
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


export function tfEnvironmentTimeoutsPropertyToTerraform(struct?: TfEnvironment.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfEnvironmentTimeoutsPropertyToHclTerraform(struct?: TfEnvironment.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfEnvironment {
export interface ErrorProperty {
}
export class ErrorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ErrorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ErrorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class ErrorPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ErrorPropertyOutputReference {
    return new ErrorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LastUpdatedProperty {
}
export class LastUpdatedPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LastUpdatedProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LastUpdatedProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // error - computed: true, optional: false, required: false
  private _error = new ErrorPropertyList(this, "error", false);
  public get error() {
    return this._error;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class LastUpdatedPropertyList extends cdktn.ComplexList {

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
  public get(index: number): LastUpdatedPropertyOutputReference {
    return new LastUpdatedPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DagProcessingLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#enabled TfEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#log_level TfEnvironment#log_level}
  */
  readonly logLevel?: string;
}
export class DagProcessingLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DagProcessingLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DagProcessingLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface SchedulerLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#enabled TfEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#log_level TfEnvironment#log_level}
  */
  readonly logLevel?: string;
}
export class SchedulerLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface TaskLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#enabled TfEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#log_level TfEnvironment#log_level}
  */
  readonly logLevel?: string;
}
export class TaskLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TaskLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface WebserverLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#enabled TfEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#log_level TfEnvironment#log_level}
  */
  readonly logLevel?: string;
}
export class WebserverLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebserverLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebserverLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface WorkerLogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#enabled TfEnvironment#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#log_level TfEnvironment#log_level}
  */
  readonly logLevel?: string;
}
export class WorkerLogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkerLogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerLogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
    }
  }

  // cloud_watch_log_group_arn - computed: true, optional: false, required: false
  public get cloudWatchLogGroupArn() {
    return this.getStringAttribute('cloud_watch_log_group_arn');
  }

  // enabled - computed: true, optional: true, required: false
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

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface LoggingConfigurationProperty {
  /**
  * dag_processing_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#dag_processing_logs TfEnvironment#dag_processing_logs}
  */
  readonly dagProcessingLogs?: DagProcessingLogsProperty;
  /**
  * scheduler_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#scheduler_logs TfEnvironment#scheduler_logs}
  */
  readonly schedulerLogs?: SchedulerLogsProperty;
  /**
  * task_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#task_logs TfEnvironment#task_logs}
  */
  readonly taskLogs?: TaskLogsProperty;
  /**
  * webserver_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#webserver_logs TfEnvironment#webserver_logs}
  */
  readonly webserverLogs?: WebserverLogsProperty;
  /**
  * worker_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#worker_logs TfEnvironment#worker_logs}
  */
  readonly workerLogs?: WorkerLogsProperty;
}
export class LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dagProcessingLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dagProcessingLogs = this._dagProcessingLogs?.internalValue;
    }
    if (this._schedulerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerLogs = this._schedulerLogs?.internalValue;
    }
    if (this._taskLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskLogs = this._taskLogs?.internalValue;
    }
    if (this._webserverLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webserverLogs = this._webserverLogs?.internalValue;
    }
    if (this._workerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerLogs = this._workerLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dagProcessingLogs.internalValue = undefined;
      this._schedulerLogs.internalValue = undefined;
      this._taskLogs.internalValue = undefined;
      this._webserverLogs.internalValue = undefined;
      this._workerLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dagProcessingLogs.internalValue = value.dagProcessingLogs;
      this._schedulerLogs.internalValue = value.schedulerLogs;
      this._taskLogs.internalValue = value.taskLogs;
      this._webserverLogs.internalValue = value.webserverLogs;
      this._workerLogs.internalValue = value.workerLogs;
    }
  }

  // dag_processing_logs - computed: false, optional: true, required: false
  private _dagProcessingLogs = new DagProcessingLogsPropertyOutputReference(this, "dag_processing_logs");
  public get dagProcessingLogs() {
    return this._dagProcessingLogs;
  }
  public putDagProcessingLogs(value: DagProcessingLogsProperty) {
    this._dagProcessingLogs.internalValue = value;
  }
  public resetDagProcessingLogs() {
    this._dagProcessingLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagProcessingLogsInput() {
    return this._dagProcessingLogs.internalValue;
  }

  // scheduler_logs - computed: false, optional: true, required: false
  private _schedulerLogs = new SchedulerLogsPropertyOutputReference(this, "scheduler_logs");
  public get schedulerLogs() {
    return this._schedulerLogs;
  }
  public putSchedulerLogs(value: SchedulerLogsProperty) {
    this._schedulerLogs.internalValue = value;
  }
  public resetSchedulerLogs() {
    this._schedulerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerLogsInput() {
    return this._schedulerLogs.internalValue;
  }

  // task_logs - computed: false, optional: true, required: false
  private _taskLogs = new TaskLogsPropertyOutputReference(this, "task_logs");
  public get taskLogs() {
    return this._taskLogs;
  }
  public putTaskLogs(value: TaskLogsProperty) {
    this._taskLogs.internalValue = value;
  }
  public resetTaskLogs() {
    this._taskLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskLogsInput() {
    return this._taskLogs.internalValue;
  }

  // webserver_logs - computed: false, optional: true, required: false
  private _webserverLogs = new WebserverLogsPropertyOutputReference(this, "webserver_logs");
  public get webserverLogs() {
    return this._webserverLogs;
  }
  public putWebserverLogs(value: WebserverLogsProperty) {
    this._webserverLogs.internalValue = value;
  }
  public resetWebserverLogs() {
    this._webserverLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserverLogsInput() {
    return this._webserverLogs.internalValue;
  }

  // worker_logs - computed: false, optional: true, required: false
  private _workerLogs = new WorkerLogsPropertyOutputReference(this, "worker_logs");
  public get workerLogs() {
    return this._workerLogs;
  }
  public putWorkerLogs(value: WorkerLogsProperty) {
    this._workerLogs.internalValue = value;
  }
  public resetWorkerLogs() {
    this._workerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerLogsInput() {
    return this._workerLogs.internalValue;
  }
}
export interface NetworkConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#security_group_ids TfEnvironment#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#subnet_ids TfEnvironment#subnet_ids}
  */
  readonly subnetIds: string[];
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

  public set internalValue(value: NetworkConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#create TfEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#delete TfEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mwaa_environment#update TfEnvironment#update}
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
