// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBrokerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#apply_immediately AwsBroker#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#authentication_strategy AwsBroker#authentication_strategy}
  */
  readonly authenticationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#auto_minor_version_upgrade AwsBroker#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#broker_name AwsBroker#broker_name}
  */
  readonly brokerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_mode AwsBroker#data_replication_mode}
  */
  readonly dataReplicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#data_replication_primary_broker_arn AwsBroker#data_replication_primary_broker_arn}
  */
  readonly dataReplicationPrimaryBrokerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#deployment_mode AwsBroker#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_type AwsBroker#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#engine_version AwsBroker#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#host_instance_type AwsBroker#host_instance_type}
  */
  readonly hostInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#id AwsBroker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#publicly_accessible AwsBroker#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#region AwsBroker#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#resource_share_arns AwsBroker#resource_share_arns}
  */
  readonly resourceShareArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#security_groups AwsBroker#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#storage_type AwsBroker#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#subnet_ids AwsBroker#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags AwsBroker#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#tags_all AwsBroker#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#configuration AwsBroker#configuration}
  */
  readonly configuration?: AwsBroker.ConfigurationProperty;
  /**
  * encryption_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#encryption_options AwsBroker#encryption_options}
  */
  readonly encryptionOptions?: AwsBroker.EncryptionOptionsProperty;
  /**
  * ldap_server_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#ldap_server_metadata AwsBroker#ldap_server_metadata}
  */
  readonly ldapServerMetadata?: AwsBroker.LdapServerMetadataProperty;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#logs AwsBroker#logs}
  */
  readonly logs?: AwsBroker.LogsProperty;
  /**
  * maintenance_window_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#maintenance_window_start_time AwsBroker#maintenance_window_start_time}
  */
  readonly maintenanceWindowStartTime?: AwsBroker.MaintenanceWindowStartTimeProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#timeouts AwsBroker#timeouts}
  */
  readonly timeouts?: AwsBroker.TimeoutsProperty;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user AwsBroker#user}
  */
  readonly user?: AwsBroker.UserProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker aws_mq_broker}
*/
export class AwsBroker extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mq_broker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBroker resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBroker to import
  * @param importFromId The id of the existing AwsBroker that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBroker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mq_broker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker aws_mq_broker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBrokerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBrokerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mq_broker',
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
    this._applyImmediately = config.applyImmediately;
    this._authenticationStrategy = config.authenticationStrategy;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._brokerName = config.brokerName;
    this._dataReplicationMode = config.dataReplicationMode;
    this._dataReplicationPrimaryBrokerArn = config.dataReplicationPrimaryBrokerArn;
    this._deploymentMode = config.deploymentMode;
    this._engineType = config.engineType;
    this._engineVersion = config.engineVersion;
    this._hostInstanceType = config.hostInstanceType;
    this._id = config.id;
    this._publiclyAccessible = config.publiclyAccessible;
    this._region = config.region;
    this._resourceShareArns = config.resourceShareArns;
    this._securityGroups = config.securityGroups;
    this._storageType = config.storageType;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration.internalValue = config.configuration;
    this._encryptionOptions.internalValue = config.encryptionOptions;
    this._ldapServerMetadata.internalValue = config.ldapServerMetadata;
    this._logs.internalValue = config.logs;
    this._maintenanceWindowStartTime.internalValue = config.maintenanceWindowStartTime;
    this._timeouts.internalValue = config.timeouts;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: false, optional: true, required: false
  private _applyImmediately?: boolean | cdktn.IResolvable; 
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | cdktn.IResolvable) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_strategy - computed: true, optional: true, required: false
  private _authenticationStrategy?: string; 
  public get authenticationStrategy() {
    return this.getStringAttribute('authentication_strategy');
  }
  public set authenticationStrategy(value: string) {
    this._authenticationStrategy = value;
  }
  public resetAuthenticationStrategy() {
    this._authenticationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationStrategyInput() {
    return this._authenticationStrategy;
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktn.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktn.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
  }

  // broker_name - computed: false, optional: false, required: true
  private _brokerName?: string; 
  public get brokerName() {
    return this.getStringAttribute('broker_name');
  }
  public set brokerName(value: string) {
    this._brokerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNameInput() {
    return this._brokerName;
  }

  // data_replication_mode - computed: true, optional: true, required: false
  private _dataReplicationMode?: string; 
  public get dataReplicationMode() {
    return this.getStringAttribute('data_replication_mode');
  }
  public set dataReplicationMode(value: string) {
    this._dataReplicationMode = value;
  }
  public resetDataReplicationMode() {
    this._dataReplicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataReplicationModeInput() {
    return this._dataReplicationMode;
  }

  // data_replication_primary_broker_arn - computed: false, optional: true, required: false
  private _dataReplicationPrimaryBrokerArn?: string; 
  public get dataReplicationPrimaryBrokerArn() {
    return this.getStringAttribute('data_replication_primary_broker_arn');
  }
  public set dataReplicationPrimaryBrokerArn(value: string) {
    this._dataReplicationPrimaryBrokerArn = value;
  }
  public resetDataReplicationPrimaryBrokerArn() {
    this._dataReplicationPrimaryBrokerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataReplicationPrimaryBrokerArnInput() {
    return this._dataReplicationPrimaryBrokerArn;
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // host_instance_type - computed: false, optional: false, required: true
  private _hostInstanceType?: string; 
  public get hostInstanceType() {
    return this.getStringAttribute('host_instance_type');
  }
  public set hostInstanceType(value: string) {
    this._hostInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInstanceTypeInput() {
    return this._hostInstanceType;
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

  // instances - computed: true, optional: false, required: false
  private _instances = new AwsBroker.InstancesPropertyList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // pending_data_replication_mode - computed: true, optional: false, required: false
  public get pendingDataReplicationMode() {
    return this.getStringAttribute('pending_data_replication_mode');
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktn.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktn.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
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

  // resource_share_arns - computed: false, optional: true, required: false
  private _resourceShareArns?: string[]; 
  public get resourceShareArns() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_share_arns'));
  }
  public set resourceShareArns(value: string[]) {
    this._resourceShareArns = value;
  }
  public resetResourceShareArns() {
    this._resourceShareArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceShareArnsInput() {
    return this._resourceShareArns;
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

  // shared_resources - computed: true, optional: false, required: false
  private _sharedResources = new AwsBroker.SharedResourcesPropertyList(this, "shared_resources", false);
  public get sharedResources() {
    return this._sharedResources;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AwsBroker.ConfigurationPropertyOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AwsBroker.ConfigurationProperty) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // encryption_options - computed: false, optional: true, required: false
  private _encryptionOptions = new AwsBroker.EncryptionOptionsPropertyOutputReference(this, "encryption_options");
  public get encryptionOptions() {
    return this._encryptionOptions;
  }
  public putEncryptionOptions(value: AwsBroker.EncryptionOptionsProperty) {
    this._encryptionOptions.internalValue = value;
  }
  public resetEncryptionOptions() {
    this._encryptionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionsInput() {
    return this._encryptionOptions.internalValue;
  }

  // ldap_server_metadata - computed: false, optional: true, required: false
  private _ldapServerMetadata = new AwsBroker.LdapServerMetadataPropertyOutputReference(this, "ldap_server_metadata");
  public get ldapServerMetadata() {
    return this._ldapServerMetadata;
  }
  public putLdapServerMetadata(value: AwsBroker.LdapServerMetadataProperty) {
    this._ldapServerMetadata.internalValue = value;
  }
  public resetLdapServerMetadata() {
    this._ldapServerMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerMetadataInput() {
    return this._ldapServerMetadata.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new AwsBroker.LogsPropertyOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: AwsBroker.LogsProperty) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // maintenance_window_start_time - computed: false, optional: true, required: false
  private _maintenanceWindowStartTime = new AwsBroker.MaintenanceWindowStartTimePropertyOutputReference(this, "maintenance_window_start_time");
  public get maintenanceWindowStartTime() {
    return this._maintenanceWindowStartTime;
  }
  public putMaintenanceWindowStartTime(value: AwsBroker.MaintenanceWindowStartTimeProperty) {
    this._maintenanceWindowStartTime.internalValue = value;
  }
  public resetMaintenanceWindowStartTime() {
    this._maintenanceWindowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartTimeInput() {
    return this._maintenanceWindowStartTime.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBroker.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBroker.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new AwsBroker.UserPropertyList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: AwsBroker.UserProperty[] | cdktn.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: cdktn.booleanToTerraform(this._applyImmediately),
      authentication_strategy: cdktn.stringToTerraform(this._authenticationStrategy),
      auto_minor_version_upgrade: cdktn.booleanToTerraform(this._autoMinorVersionUpgrade),
      broker_name: cdktn.stringToTerraform(this._brokerName),
      data_replication_mode: cdktn.stringToTerraform(this._dataReplicationMode),
      data_replication_primary_broker_arn: cdktn.stringToTerraform(this._dataReplicationPrimaryBrokerArn),
      deployment_mode: cdktn.stringToTerraform(this._deploymentMode),
      engine_type: cdktn.stringToTerraform(this._engineType),
      engine_version: cdktn.stringToTerraform(this._engineVersion),
      host_instance_type: cdktn.stringToTerraform(this._hostInstanceType),
      id: cdktn.stringToTerraform(this._id),
      publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
      region: cdktn.stringToTerraform(this._region),
      resource_share_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceShareArns),
      security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
      storage_type: cdktn.stringToTerraform(this._storageType),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      configuration: awsBrokerConfigurationPropertyToTerraform(this._configuration.internalValue),
      encryption_options: awsBrokerEncryptionOptionsPropertyToTerraform(this._encryptionOptions.internalValue),
      ldap_server_metadata: awsBrokerLdapServerMetadataPropertyToTerraform(this._ldapServerMetadata.internalValue),
      logs: awsBrokerLogsPropertyToTerraform(this._logs.internalValue),
      maintenance_window_start_time: awsBrokerMaintenanceWindowStartTimePropertyToTerraform(this._maintenanceWindowStartTime.internalValue),
      timeouts: awsBrokerTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      user: cdktn.listMapper(awsBrokerUserPropertyToTerraform, true)(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_immediately: {
        value: cdktn.booleanToHclTerraform(this._applyImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_strategy: {
        value: cdktn.stringToHclTerraform(this._authenticationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_minor_version_upgrade: {
        value: cdktn.booleanToHclTerraform(this._autoMinorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      broker_name: {
        value: cdktn.stringToHclTerraform(this._brokerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_replication_mode: {
        value: cdktn.stringToHclTerraform(this._dataReplicationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_replication_primary_broker_arn: {
        value: cdktn.stringToHclTerraform(this._dataReplicationPrimaryBrokerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_mode: {
        value: cdktn.stringToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktn.stringToHclTerraform(this._engineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktn.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_instance_type: {
        value: cdktn.stringToHclTerraform(this._hostInstanceType),
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
      publicly_accessible: {
        value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
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
      resource_share_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceShareArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_groups: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_type: {
        value: cdktn.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      configuration: {
        value: awsBrokerConfigurationPropertyToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBroker.ConfigurationPropertyList",
      },
      encryption_options: {
        value: awsBrokerEncryptionOptionsPropertyToHclTerraform(this._encryptionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBroker.EncryptionOptionsPropertyList",
      },
      ldap_server_metadata: {
        value: awsBrokerLdapServerMetadataPropertyToHclTerraform(this._ldapServerMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBroker.LdapServerMetadataPropertyList",
      },
      logs: {
        value: awsBrokerLogsPropertyToHclTerraform(this._logs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBroker.LogsPropertyList",
      },
      maintenance_window_start_time: {
        value: awsBrokerMaintenanceWindowStartTimePropertyToHclTerraform(this._maintenanceWindowStartTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBroker.MaintenanceWindowStartTimePropertyList",
      },
      timeouts: {
        value: awsBrokerTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBroker.TimeoutsProperty",
      },
      user: {
        value: cdktn.listMapperHcl(awsBrokerUserPropertyToHclTerraform, true)(this._user.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsBroker.UserPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBrokerInstancesPropertyToTerraform(struct?: AwsBroker.InstancesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsBrokerInstancesPropertyToHclTerraform(struct?: AwsBroker.InstancesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsBrokerSharedResourcesPropertyToTerraform(struct?: AwsBroker.SharedResourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsBrokerSharedResourcesPropertyToHclTerraform(struct?: AwsBroker.SharedResourcesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsBrokerConfigurationPropertyToTerraform(struct?: AwsBroker.ConfigurationPropertyOutputReference | AwsBroker.ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    revision: cdktn.numberToTerraform(struct!.revision),
  }
}


export function awsBrokerConfigurationPropertyToHclTerraform(struct?: AwsBroker.ConfigurationPropertyOutputReference | AwsBroker.ConfigurationProperty): any {
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
    revision: {
      value: cdktn.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBrokerEncryptionOptionsPropertyToTerraform(struct?: AwsBroker.EncryptionOptionsPropertyOutputReference | AwsBroker.EncryptionOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    use_aws_owned_key: cdktn.booleanToTerraform(struct!.useAwsOwnedKey),
  }
}


export function awsBrokerEncryptionOptionsPropertyToHclTerraform(struct?: AwsBroker.EncryptionOptionsPropertyOutputReference | AwsBroker.EncryptionOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_aws_owned_key: {
      value: cdktn.booleanToHclTerraform(struct!.useAwsOwnedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBrokerLdapServerMetadataPropertyToTerraform(struct?: AwsBroker.LdapServerMetadataPropertyOutputReference | AwsBroker.LdapServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hosts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hosts),
    role_base: cdktn.stringToTerraform(struct!.roleBase),
    role_name: cdktn.stringToTerraform(struct!.roleName),
    role_search_matching: cdktn.stringToTerraform(struct!.roleSearchMatching),
    role_search_subtree: cdktn.booleanToTerraform(struct!.roleSearchSubtree),
    service_account_password: cdktn.stringToTerraform(struct!.serviceAccountPassword),
    service_account_username: cdktn.stringToTerraform(struct!.serviceAccountUsername),
    user_base: cdktn.stringToTerraform(struct!.userBase),
    user_role_name: cdktn.stringToTerraform(struct!.userRoleName),
    user_search_matching: cdktn.stringToTerraform(struct!.userSearchMatching),
    user_search_subtree: cdktn.booleanToTerraform(struct!.userSearchSubtree),
  }
}


export function awsBrokerLdapServerMetadataPropertyToHclTerraform(struct?: AwsBroker.LdapServerMetadataPropertyOutputReference | AwsBroker.LdapServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hosts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_base: {
      value: cdktn.stringToHclTerraform(struct!.roleBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktn.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_search_matching: {
      value: cdktn.stringToHclTerraform(struct!.roleSearchMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_search_subtree: {
      value: cdktn.booleanToHclTerraform(struct!.roleSearchSubtree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_password: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_username: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_base: {
      value: cdktn.stringToHclTerraform(struct!.userBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_role_name: {
      value: cdktn.stringToHclTerraform(struct!.userRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_search_matching: {
      value: cdktn.stringToHclTerraform(struct!.userSearchMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_search_subtree: {
      value: cdktn.booleanToHclTerraform(struct!.userSearchSubtree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBrokerLogsPropertyToTerraform(struct?: AwsBroker.LogsPropertyOutputReference | AwsBroker.LogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit: cdktn.stringToTerraform(struct!.audit),
    general: cdktn.booleanToTerraform(struct!.general),
  }
}


export function awsBrokerLogsPropertyToHclTerraform(struct?: AwsBroker.LogsPropertyOutputReference | AwsBroker.LogsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit: {
      value: cdktn.stringToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    general: {
      value: cdktn.booleanToHclTerraform(struct!.general),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBrokerMaintenanceWindowStartTimePropertyToTerraform(struct?: AwsBroker.MaintenanceWindowStartTimePropertyOutputReference | AwsBroker.MaintenanceWindowStartTimeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    time_of_day: cdktn.stringToTerraform(struct!.timeOfDay),
    time_zone: cdktn.stringToTerraform(struct!.timeZone),
  }
}


export function awsBrokerMaintenanceWindowStartTimePropertyToHclTerraform(struct?: AwsBroker.MaintenanceWindowStartTimePropertyOutputReference | AwsBroker.MaintenanceWindowStartTimeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_day: {
      value: cdktn.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktn.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBrokerTimeoutsPropertyToTerraform(struct?: AwsBroker.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsBrokerTimeoutsPropertyToHclTerraform(struct?: AwsBroker.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsBrokerUserPropertyToTerraform(struct?: AwsBroker.UserProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    console_access: cdktn.booleanToTerraform(struct!.consoleAccess),
    groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groups),
    password: cdktn.stringToTerraform(struct!.password),
    replication_user: cdktn.booleanToTerraform(struct!.replicationUser),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function awsBrokerUserPropertyToHclTerraform(struct?: AwsBroker.UserProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    console_access: {
      value: cdktn.booleanToHclTerraform(struct!.consoleAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_user: {
      value: cdktn.booleanToHclTerraform(struct!.replicationUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsBroker {
export interface InstancesProperty {
}
export class InstancesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InstancesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class InstancesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): InstancesPropertyOutputReference {
    return new InstancesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SharedResourcesProperty {
}
export class SharedResourcesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SharedResourcesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedResourcesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SharedResourcesPropertyList extends cdktn.ComplexList {

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
  public get(index: number): SharedResourcesPropertyOutputReference {
    return new SharedResourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#id AwsBroker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#revision AwsBroker#revision}
  */
  readonly revision?: number;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._revision = value.revision;
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

  // revision - computed: true, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface EncryptionOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#kms_key_id AwsBroker#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#use_aws_owned_key AwsBroker#use_aws_owned_key}
  */
  readonly useAwsOwnedKey?: boolean | cdktn.IResolvable;
}
export class EncryptionOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._useAwsOwnedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAwsOwnedKey = this._useAwsOwnedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._useAwsOwnedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._useAwsOwnedKey = value.useAwsOwnedKey;
    }
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

  // use_aws_owned_key - computed: false, optional: true, required: false
  private _useAwsOwnedKey?: boolean | cdktn.IResolvable; 
  public get useAwsOwnedKey() {
    return this.getBooleanAttribute('use_aws_owned_key');
  }
  public set useAwsOwnedKey(value: boolean | cdktn.IResolvable) {
    this._useAwsOwnedKey = value;
  }
  public resetUseAwsOwnedKey() {
    this._useAwsOwnedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAwsOwnedKeyInput() {
    return this._useAwsOwnedKey;
  }
}
export interface LdapServerMetadataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#hosts AwsBroker#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_base AwsBroker#role_base}
  */
  readonly roleBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_name AwsBroker#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_search_matching AwsBroker#role_search_matching}
  */
  readonly roleSearchMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#role_search_subtree AwsBroker#role_search_subtree}
  */
  readonly roleSearchSubtree?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#service_account_password AwsBroker#service_account_password}
  */
  readonly serviceAccountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#service_account_username AwsBroker#service_account_username}
  */
  readonly serviceAccountUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_base AwsBroker#user_base}
  */
  readonly userBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_role_name AwsBroker#user_role_name}
  */
  readonly userRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_search_matching AwsBroker#user_search_matching}
  */
  readonly userSearchMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#user_search_subtree AwsBroker#user_search_subtree}
  */
  readonly userSearchSubtree?: boolean | cdktn.IResolvable;
}
export class LdapServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapServerMetadataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._roleBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBase = this._roleBase;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._roleSearchMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSearchMatching = this._roleSearchMatching;
    }
    if (this._roleSearchSubtree !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSearchSubtree = this._roleSearchSubtree;
    }
    if (this._serviceAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountPassword = this._serviceAccountPassword;
    }
    if (this._serviceAccountUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountUsername = this._serviceAccountUsername;
    }
    if (this._userBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBase = this._userBase;
    }
    if (this._userRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRoleName = this._userRoleName;
    }
    if (this._userSearchMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchMatching = this._userSearchMatching;
    }
    if (this._userSearchSubtree !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchSubtree = this._userSearchSubtree;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapServerMetadataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._roleBase = undefined;
      this._roleName = undefined;
      this._roleSearchMatching = undefined;
      this._roleSearchSubtree = undefined;
      this._serviceAccountPassword = undefined;
      this._serviceAccountUsername = undefined;
      this._userBase = undefined;
      this._userRoleName = undefined;
      this._userSearchMatching = undefined;
      this._userSearchSubtree = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._roleBase = value.roleBase;
      this._roleName = value.roleName;
      this._roleSearchMatching = value.roleSearchMatching;
      this._roleSearchSubtree = value.roleSearchSubtree;
      this._serviceAccountPassword = value.serviceAccountPassword;
      this._serviceAccountUsername = value.serviceAccountUsername;
      this._userBase = value.userBase;
      this._userRoleName = value.userRoleName;
      this._userSearchMatching = value.userSearchMatching;
      this._userSearchSubtree = value.userSearchSubtree;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // role_base - computed: false, optional: true, required: false
  private _roleBase?: string; 
  public get roleBase() {
    return this.getStringAttribute('role_base');
  }
  public set roleBase(value: string) {
    this._roleBase = value;
  }
  public resetRoleBase() {
    this._roleBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBaseInput() {
    return this._roleBase;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_search_matching - computed: false, optional: true, required: false
  private _roleSearchMatching?: string; 
  public get roleSearchMatching() {
    return this.getStringAttribute('role_search_matching');
  }
  public set roleSearchMatching(value: string) {
    this._roleSearchMatching = value;
  }
  public resetRoleSearchMatching() {
    this._roleSearchMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSearchMatchingInput() {
    return this._roleSearchMatching;
  }

  // role_search_subtree - computed: false, optional: true, required: false
  private _roleSearchSubtree?: boolean | cdktn.IResolvable; 
  public get roleSearchSubtree() {
    return this.getBooleanAttribute('role_search_subtree');
  }
  public set roleSearchSubtree(value: boolean | cdktn.IResolvable) {
    this._roleSearchSubtree = value;
  }
  public resetRoleSearchSubtree() {
    this._roleSearchSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSearchSubtreeInput() {
    return this._roleSearchSubtree;
  }

  // service_account_password - computed: false, optional: true, required: false
  private _serviceAccountPassword?: string; 
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }
  public set serviceAccountPassword(value: string) {
    this._serviceAccountPassword = value;
  }
  public resetServiceAccountPassword() {
    this._serviceAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPasswordInput() {
    return this._serviceAccountPassword;
  }

  // service_account_username - computed: false, optional: true, required: false
  private _serviceAccountUsername?: string; 
  public get serviceAccountUsername() {
    return this.getStringAttribute('service_account_username');
  }
  public set serviceAccountUsername(value: string) {
    this._serviceAccountUsername = value;
  }
  public resetServiceAccountUsername() {
    this._serviceAccountUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUsernameInput() {
    return this._serviceAccountUsername;
  }

  // user_base - computed: false, optional: true, required: false
  private _userBase?: string; 
  public get userBase() {
    return this.getStringAttribute('user_base');
  }
  public set userBase(value: string) {
    this._userBase = value;
  }
  public resetUserBase() {
    this._userBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBaseInput() {
    return this._userBase;
  }

  // user_role_name - computed: false, optional: true, required: false
  private _userRoleName?: string; 
  public get userRoleName() {
    return this.getStringAttribute('user_role_name');
  }
  public set userRoleName(value: string) {
    this._userRoleName = value;
  }
  public resetUserRoleName() {
    this._userRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleNameInput() {
    return this._userRoleName;
  }

  // user_search_matching - computed: false, optional: true, required: false
  private _userSearchMatching?: string; 
  public get userSearchMatching() {
    return this.getStringAttribute('user_search_matching');
  }
  public set userSearchMatching(value: string) {
    this._userSearchMatching = value;
  }
  public resetUserSearchMatching() {
    this._userSearchMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchMatchingInput() {
    return this._userSearchMatching;
  }

  // user_search_subtree - computed: false, optional: true, required: false
  private _userSearchSubtree?: boolean | cdktn.IResolvable; 
  public get userSearchSubtree() {
    return this.getBooleanAttribute('user_search_subtree');
  }
  public set userSearchSubtree(value: boolean | cdktn.IResolvable) {
    this._userSearchSubtree = value;
  }
  public resetUserSearchSubtree() {
    this._userSearchSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchSubtreeInput() {
    return this._userSearchSubtree;
  }
}
export interface LogsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#audit AwsBroker#audit}
  */
  readonly audit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#general AwsBroker#general}
  */
  readonly general?: boolean | cdktn.IResolvable;
}
export class LogsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._general !== undefined) {
      hasAnyValues = true;
      internalValueResult.general = this._general;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._general = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._general = value.general;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: string; 
  public get audit() {
    return this.getStringAttribute('audit');
  }
  public set audit(value: string) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // general - computed: false, optional: true, required: false
  private _general?: boolean | cdktn.IResolvable; 
  public get general() {
    return this.getBooleanAttribute('general');
  }
  public set general(value: boolean | cdktn.IResolvable) {
    this._general = value;
  }
  public resetGeneral() {
    this._general = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalInput() {
    return this._general;
  }
}
export interface MaintenanceWindowStartTimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#day_of_week AwsBroker#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#time_of_day AwsBroker#time_of_day}
  */
  readonly timeOfDay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#time_zone AwsBroker#time_zone}
  */
  readonly timeZone: string;
}
export class MaintenanceWindowStartTimePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceWindowStartTimeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceWindowStartTimeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._timeOfDay = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._timeOfDay = value.timeOfDay;
      this._timeZone = value.timeZone;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // time_of_day - computed: false, optional: false, required: true
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#create AwsBroker#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#delete AwsBroker#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#update AwsBroker#update}
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
export interface UserProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#console_access AwsBroker#console_access}
  */
  readonly consoleAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#groups AwsBroker#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#password AwsBroker#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#replication_user AwsBroker#replication_user}
  */
  readonly replicationUser?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mq_broker#username AwsBroker#username}
  */
  readonly username: string;
}
export class UserPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consoleAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleAccess = this._consoleAccess;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._replicationUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationUser = this._replicationUser;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consoleAccess = undefined;
      this._groups = undefined;
      this._password = undefined;
      this._replicationUser = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consoleAccess = value.consoleAccess;
      this._groups = value.groups;
      this._password = value.password;
      this._replicationUser = value.replicationUser;
      this._username = value.username;
    }
  }

  // console_access - computed: false, optional: true, required: false
  private _consoleAccess?: boolean | cdktn.IResolvable; 
  public get consoleAccess() {
    return this.getBooleanAttribute('console_access');
  }
  public set consoleAccess(value: boolean | cdktn.IResolvable) {
    this._consoleAccess = value;
  }
  public resetConsoleAccess() {
    this._consoleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleAccessInput() {
    return this._consoleAccess;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktn.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // replication_user - computed: false, optional: true, required: false
  private _replicationUser?: boolean | cdktn.IResolvable; 
  public get replicationUser() {
    return this.getBooleanAttribute('replication_user');
  }
  public set replicationUser(value: boolean | cdktn.IResolvable) {
    this._replicationUser = value;
  }
  public resetReplicationUser() {
    this._replicationUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationUserInput() {
    return this._replicationUser;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class UserPropertyList extends cdktn.ComplexList {
  public internalValue? : UserProperty[] | cdktn.IResolvable

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
  public get(index: number): UserPropertyOutputReference {
    return new UserPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
