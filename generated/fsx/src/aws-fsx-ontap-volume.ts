// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsFsxOntapVolumeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention AwsFsxOntapVolume#bypass_snaplock_enterprise_retention}
  */
  readonly bypassSnaplockEnterpriseRetention?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups AwsFsxOntapVolume#copy_tags_to_backups}
  */
  readonly copyTagsToBackups?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#final_backup_tags AwsFsxOntapVolume#final_backup_tags}
  */
  readonly finalBackupTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#id AwsFsxOntapVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#junction_path AwsFsxOntapVolume#junction_path}
  */
  readonly junctionPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#name AwsFsxOntapVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#ontap_volume_type AwsFsxOntapVolume#ontap_volume_type}
  */
  readonly ontapVolumeType?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#region AwsFsxOntapVolume#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#security_style AwsFsxOntapVolume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#size_in_bytes AwsFsxOntapVolume#size_in_bytes}
  */
  readonly sizeInBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#size_in_megabytes AwsFsxOntapVolume#size_in_megabytes}
  */
  readonly sizeInMegabytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#skip_final_backup AwsFsxOntapVolume#skip_final_backup}
  */
  readonly skipFinalBackup?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#snapshot_policy AwsFsxOntapVolume#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled AwsFsxOntapVolume#storage_efficiency_enabled}
  */
  readonly storageEfficiencyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id AwsFsxOntapVolume#storage_virtual_machine_id}
  */
  readonly storageVirtualMachineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#tags AwsFsxOntapVolume#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#tags_all AwsFsxOntapVolume#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#volume_style AwsFsxOntapVolume#volume_style}
  */
  readonly volumeStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#volume_type AwsFsxOntapVolume#volume_type}
  */
  readonly volumeType?: string;
  /**
  * aggregate_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#aggregate_configuration AwsFsxOntapVolume#aggregate_configuration}
  */
  readonly aggregateConfiguration?: AwsFsxOntapVolume.AggregateConfigurationProperty;
  /**
  * snaplock_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#snaplock_configuration AwsFsxOntapVolume#snaplock_configuration}
  */
  readonly snaplockConfiguration?: AwsFsxOntapVolume.SnaplockConfigurationProperty;
  /**
  * tiering_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#tiering_policy AwsFsxOntapVolume#tiering_policy}
  */
  readonly tieringPolicy?: AwsFsxOntapVolume.TieringPolicyProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#timeouts AwsFsxOntapVolume#timeouts}
  */
  readonly timeouts?: AwsFsxOntapVolume.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume}
*/
export class AwsFsxOntapVolume extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_ontap_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsFsxOntapVolume resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsFsxOntapVolume to import
  * @param importFromId The id of the existing AwsFsxOntapVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsFsxOntapVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_ontap_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsFsxOntapVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: AwsFsxOntapVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_ontap_volume',
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
    this._bypassSnaplockEnterpriseRetention = config.bypassSnaplockEnterpriseRetention;
    this._copyTagsToBackups = config.copyTagsToBackups;
    this._finalBackupTags = config.finalBackupTags;
    this._id = config.id;
    this._junctionPath = config.junctionPath;
    this._name = config.name;
    this._ontapVolumeType = config.ontapVolumeType;
    this._region = config.region;
    this._securityStyle = config.securityStyle;
    this._sizeInBytes = config.sizeInBytes;
    this._sizeInMegabytes = config.sizeInMegabytes;
    this._skipFinalBackup = config.skipFinalBackup;
    this._snapshotPolicy = config.snapshotPolicy;
    this._storageEfficiencyEnabled = config.storageEfficiencyEnabled;
    this._storageVirtualMachineId = config.storageVirtualMachineId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._volumeStyle = config.volumeStyle;
    this._volumeType = config.volumeType;
    this._aggregateConfiguration.internalValue = config.aggregateConfiguration;
    this._snaplockConfiguration.internalValue = config.snaplockConfiguration;
    this._tieringPolicy.internalValue = config.tieringPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bypass_snaplock_enterprise_retention - computed: false, optional: true, required: false
  private _bypassSnaplockEnterpriseRetention?: boolean | cdktn.IResolvable; 
  public get bypassSnaplockEnterpriseRetention() {
    return this.getBooleanAttribute('bypass_snaplock_enterprise_retention');
  }
  public set bypassSnaplockEnterpriseRetention(value: boolean | cdktn.IResolvable) {
    this._bypassSnaplockEnterpriseRetention = value;
  }
  public resetBypassSnaplockEnterpriseRetention() {
    this._bypassSnaplockEnterpriseRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassSnaplockEnterpriseRetentionInput() {
    return this._bypassSnaplockEnterpriseRetention;
  }

  // copy_tags_to_backups - computed: false, optional: true, required: false
  private _copyTagsToBackups?: boolean | cdktn.IResolvable; 
  public get copyTagsToBackups() {
    return this.getBooleanAttribute('copy_tags_to_backups');
  }
  public set copyTagsToBackups(value: boolean | cdktn.IResolvable) {
    this._copyTagsToBackups = value;
  }
  public resetCopyTagsToBackups() {
    this._copyTagsToBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToBackupsInput() {
    return this._copyTagsToBackups;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // final_backup_tags - computed: false, optional: true, required: false
  private _finalBackupTags?: { [key: string]: string }; 
  public get finalBackupTags() {
    return this.getStringMapAttribute('final_backup_tags');
  }
  public set finalBackupTags(value: { [key: string]: string }) {
    this._finalBackupTags = value;
  }
  public resetFinalBackupTags() {
    this._finalBackupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBackupTagsInput() {
    return this._finalBackupTags;
  }

  // flexcache_endpoint_type - computed: true, optional: false, required: false
  public get flexcacheEndpointType() {
    return this.getStringAttribute('flexcache_endpoint_type');
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

  // junction_path - computed: false, optional: true, required: false
  private _junctionPath?: string; 
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
  }
  public set junctionPath(value: string) {
    this._junctionPath = value;
  }
  public resetJunctionPath() {
    this._junctionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junctionPathInput() {
    return this._junctionPath;
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

  // ontap_volume_type - computed: true, optional: true, required: false
  private _ontapVolumeType?: string; 
  public get ontapVolumeType() {
    return this.getStringAttribute('ontap_volume_type');
  }
  public set ontapVolumeType(value: string) {
    this._ontapVolumeType = value;
  }
  public resetOntapVolumeType() {
    this._ontapVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ontapVolumeTypeInput() {
    return this._ontapVolumeType;
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

  // security_style - computed: true, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // size_in_bytes - computed: true, optional: true, required: false
  private _sizeInBytes?: string; 
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }
  public set sizeInBytes(value: string) {
    this._sizeInBytes = value;
  }
  public resetSizeInBytes() {
    this._sizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInBytesInput() {
    return this._sizeInBytes;
  }

  // size_in_megabytes - computed: true, optional: true, required: false
  private _sizeInMegabytes?: number; 
  public get sizeInMegabytes() {
    return this.getNumberAttribute('size_in_megabytes');
  }
  public set sizeInMegabytes(value: number) {
    this._sizeInMegabytes = value;
  }
  public resetSizeInMegabytes() {
    this._sizeInMegabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMegabytesInput() {
    return this._sizeInMegabytes;
  }

  // skip_final_backup - computed: false, optional: true, required: false
  private _skipFinalBackup?: boolean | cdktn.IResolvable; 
  public get skipFinalBackup() {
    return this.getBooleanAttribute('skip_final_backup');
  }
  public set skipFinalBackup(value: boolean | cdktn.IResolvable) {
    this._skipFinalBackup = value;
  }
  public resetSkipFinalBackup() {
    this._skipFinalBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalBackupInput() {
    return this._skipFinalBackup;
  }

  // snapshot_policy - computed: true, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // storage_efficiency_enabled - computed: false, optional: true, required: false
  private _storageEfficiencyEnabled?: boolean | cdktn.IResolvable; 
  public get storageEfficiencyEnabled() {
    return this.getBooleanAttribute('storage_efficiency_enabled');
  }
  public set storageEfficiencyEnabled(value: boolean | cdktn.IResolvable) {
    this._storageEfficiencyEnabled = value;
  }
  public resetStorageEfficiencyEnabled() {
    this._storageEfficiencyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEfficiencyEnabledInput() {
    return this._storageEfficiencyEnabled;
  }

  // storage_virtual_machine_id - computed: false, optional: false, required: true
  private _storageVirtualMachineId?: string; 
  public get storageVirtualMachineId() {
    return this.getStringAttribute('storage_virtual_machine_id');
  }
  public set storageVirtualMachineId(value: string) {
    this._storageVirtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVirtualMachineIdInput() {
    return this._storageVirtualMachineId;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // volume_style - computed: true, optional: true, required: false
  private _volumeStyle?: string; 
  public get volumeStyle() {
    return this.getStringAttribute('volume_style');
  }
  public set volumeStyle(value: string) {
    this._volumeStyle = value;
  }
  public resetVolumeStyle() {
    this._volumeStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeStyleInput() {
    return this._volumeStyle;
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

  // aggregate_configuration - computed: false, optional: true, required: false
  private _aggregateConfiguration = new AwsFsxOntapVolume.AggregateConfigurationPropertyOutputReference(this, "aggregate_configuration");
  public get aggregateConfiguration() {
    return this._aggregateConfiguration;
  }
  public putAggregateConfiguration(value: AwsFsxOntapVolume.AggregateConfigurationProperty) {
    this._aggregateConfiguration.internalValue = value;
  }
  public resetAggregateConfiguration() {
    this._aggregateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateConfigurationInput() {
    return this._aggregateConfiguration.internalValue;
  }

  // snaplock_configuration - computed: false, optional: true, required: false
  private _snaplockConfiguration = new AwsFsxOntapVolume.SnaplockConfigurationPropertyOutputReference(this, "snaplock_configuration");
  public get snaplockConfiguration() {
    return this._snaplockConfiguration;
  }
  public putSnaplockConfiguration(value: AwsFsxOntapVolume.SnaplockConfigurationProperty) {
    this._snaplockConfiguration.internalValue = value;
  }
  public resetSnaplockConfiguration() {
    this._snaplockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockConfigurationInput() {
    return this._snaplockConfiguration.internalValue;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy = new AwsFsxOntapVolume.TieringPolicyPropertyOutputReference(this, "tiering_policy");
  public get tieringPolicy() {
    return this._tieringPolicy;
  }
  public putTieringPolicy(value: AwsFsxOntapVolume.TieringPolicyProperty) {
    this._tieringPolicy.internalValue = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsFsxOntapVolume.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsFsxOntapVolume.TimeoutsProperty) {
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
      bypass_snaplock_enterprise_retention: cdktn.booleanToTerraform(this._bypassSnaplockEnterpriseRetention),
      copy_tags_to_backups: cdktn.booleanToTerraform(this._copyTagsToBackups),
      final_backup_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._finalBackupTags),
      id: cdktn.stringToTerraform(this._id),
      junction_path: cdktn.stringToTerraform(this._junctionPath),
      name: cdktn.stringToTerraform(this._name),
      ontap_volume_type: cdktn.stringToTerraform(this._ontapVolumeType),
      region: cdktn.stringToTerraform(this._region),
      security_style: cdktn.stringToTerraform(this._securityStyle),
      size_in_bytes: cdktn.stringToTerraform(this._sizeInBytes),
      size_in_megabytes: cdktn.numberToTerraform(this._sizeInMegabytes),
      skip_final_backup: cdktn.booleanToTerraform(this._skipFinalBackup),
      snapshot_policy: cdktn.stringToTerraform(this._snapshotPolicy),
      storage_efficiency_enabled: cdktn.booleanToTerraform(this._storageEfficiencyEnabled),
      storage_virtual_machine_id: cdktn.stringToTerraform(this._storageVirtualMachineId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      volume_style: cdktn.stringToTerraform(this._volumeStyle),
      volume_type: cdktn.stringToTerraform(this._volumeType),
      aggregate_configuration: awsFsxOntapVolumeAggregateConfigurationPropertyToTerraform(this._aggregateConfiguration.internalValue),
      snaplock_configuration: awsFsxOntapVolumeSnaplockConfigurationPropertyToTerraform(this._snaplockConfiguration.internalValue),
      tiering_policy: awsFsxOntapVolumeTieringPolicyPropertyToTerraform(this._tieringPolicy.internalValue),
      timeouts: awsFsxOntapVolumeTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_snaplock_enterprise_retention: {
        value: cdktn.booleanToHclTerraform(this._bypassSnaplockEnterpriseRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copy_tags_to_backups: {
        value: cdktn.booleanToHclTerraform(this._copyTagsToBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      final_backup_tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._finalBackupTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      junction_path: {
        value: cdktn.stringToHclTerraform(this._junctionPath),
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
      ontap_volume_type: {
        value: cdktn.stringToHclTerraform(this._ontapVolumeType),
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
      security_style: {
        value: cdktn.stringToHclTerraform(this._securityStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_in_bytes: {
        value: cdktn.stringToHclTerraform(this._sizeInBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_in_megabytes: {
        value: cdktn.numberToHclTerraform(this._sizeInMegabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_final_backup: {
        value: cdktn.booleanToHclTerraform(this._skipFinalBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_policy: {
        value: cdktn.stringToHclTerraform(this._snapshotPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_efficiency_enabled: {
        value: cdktn.booleanToHclTerraform(this._storageEfficiencyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_virtual_machine_id: {
        value: cdktn.stringToHclTerraform(this._storageVirtualMachineId),
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
      volume_style: {
        value: cdktn.stringToHclTerraform(this._volumeStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_type: {
        value: cdktn.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregate_configuration: {
        value: awsFsxOntapVolumeAggregateConfigurationPropertyToHclTerraform(this._aggregateConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFsxOntapVolume.AggregateConfigurationPropertyList",
      },
      snaplock_configuration: {
        value: awsFsxOntapVolumeSnaplockConfigurationPropertyToHclTerraform(this._snaplockConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFsxOntapVolume.SnaplockConfigurationPropertyList",
      },
      tiering_policy: {
        value: awsFsxOntapVolumeTieringPolicyPropertyToHclTerraform(this._tieringPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFsxOntapVolume.TieringPolicyPropertyList",
      },
      timeouts: {
        value: awsFsxOntapVolumeTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsFsxOntapVolume.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsFsxOntapVolumeAggregateConfigurationPropertyToTerraform(struct?: AwsFsxOntapVolume.AggregateConfigurationPropertyOutputReference | AwsFsxOntapVolume.AggregateConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.aggregates),
    constituents_per_aggregate: cdktn.numberToTerraform(struct!.constituentsPerAggregate),
  }
}


export function awsFsxOntapVolumeAggregateConfigurationPropertyToHclTerraform(struct?: AwsFsxOntapVolume.AggregateConfigurationPropertyOutputReference | AwsFsxOntapVolume.AggregateConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.aggregates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    constituents_per_aggregate: {
      value: cdktn.numberToHclTerraform(struct!.constituentsPerAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxOntapVolumeAutocommitPeriodPropertyToTerraform(struct?: AwsFsxOntapVolume.AutocommitPeriodPropertyOutputReference | AwsFsxOntapVolume.AutocommitPeriodProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsFsxOntapVolumeAutocommitPeriodPropertyToHclTerraform(struct?: AwsFsxOntapVolume.AutocommitPeriodPropertyOutputReference | AwsFsxOntapVolume.AutocommitPeriodProperty): any {
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
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxOntapVolumeDefaultRetentionPropertyToTerraform(struct?: AwsFsxOntapVolume.DefaultRetentionPropertyOutputReference | AwsFsxOntapVolume.DefaultRetentionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsFsxOntapVolumeDefaultRetentionPropertyToHclTerraform(struct?: AwsFsxOntapVolume.DefaultRetentionPropertyOutputReference | AwsFsxOntapVolume.DefaultRetentionProperty): any {
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
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxOntapVolumeMaximumRetentionPropertyToTerraform(struct?: AwsFsxOntapVolume.MaximumRetentionPropertyOutputReference | AwsFsxOntapVolume.MaximumRetentionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsFsxOntapVolumeMaximumRetentionPropertyToHclTerraform(struct?: AwsFsxOntapVolume.MaximumRetentionPropertyOutputReference | AwsFsxOntapVolume.MaximumRetentionProperty): any {
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
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxOntapVolumeMinimumRetentionPropertyToTerraform(struct?: AwsFsxOntapVolume.MinimumRetentionPropertyOutputReference | AwsFsxOntapVolume.MinimumRetentionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsFsxOntapVolumeMinimumRetentionPropertyToHclTerraform(struct?: AwsFsxOntapVolume.MinimumRetentionPropertyOutputReference | AwsFsxOntapVolume.MinimumRetentionProperty): any {
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
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxOntapVolumeRetentionPeriodPropertyToTerraform(struct?: AwsFsxOntapVolume.RetentionPeriodPropertyOutputReference | AwsFsxOntapVolume.RetentionPeriodProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_retention: awsFsxOntapVolumeDefaultRetentionPropertyToTerraform(struct!.defaultRetention),
    maximum_retention: awsFsxOntapVolumeMaximumRetentionPropertyToTerraform(struct!.maximumRetention),
    minimum_retention: awsFsxOntapVolumeMinimumRetentionPropertyToTerraform(struct!.minimumRetention),
  }
}


export function awsFsxOntapVolumeRetentionPeriodPropertyToHclTerraform(struct?: AwsFsxOntapVolume.RetentionPeriodPropertyOutputReference | AwsFsxOntapVolume.RetentionPeriodProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_retention: {
      value: awsFsxOntapVolumeDefaultRetentionPropertyToHclTerraform(struct!.defaultRetention),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultRetentionPropertyList",
    },
    maximum_retention: {
      value: awsFsxOntapVolumeMaximumRetentionPropertyToHclTerraform(struct!.maximumRetention),
      isBlock: true,
      type: "list",
      storageClassType: "MaximumRetentionPropertyList",
    },
    minimum_retention: {
      value: awsFsxOntapVolumeMinimumRetentionPropertyToHclTerraform(struct!.minimumRetention),
      isBlock: true,
      type: "list",
      storageClassType: "MinimumRetentionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxOntapVolumeSnaplockConfigurationPropertyToTerraform(struct?: AwsFsxOntapVolume.SnaplockConfigurationPropertyOutputReference | AwsFsxOntapVolume.SnaplockConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit_log_volume: cdktn.booleanToTerraform(struct!.auditLogVolume),
    privileged_delete: cdktn.stringToTerraform(struct!.privilegedDelete),
    snaplock_type: cdktn.stringToTerraform(struct!.snaplockType),
    volume_append_mode_enabled: cdktn.booleanToTerraform(struct!.volumeAppendModeEnabled),
    autocommit_period: awsFsxOntapVolumeAutocommitPeriodPropertyToTerraform(struct!.autocommitPeriod),
    retention_period: awsFsxOntapVolumeRetentionPeriodPropertyToTerraform(struct!.retentionPeriod),
  }
}


export function awsFsxOntapVolumeSnaplockConfigurationPropertyToHclTerraform(struct?: AwsFsxOntapVolume.SnaplockConfigurationPropertyOutputReference | AwsFsxOntapVolume.SnaplockConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit_log_volume: {
      value: cdktn.booleanToHclTerraform(struct!.auditLogVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privileged_delete: {
      value: cdktn.stringToHclTerraform(struct!.privilegedDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snaplock_type: {
      value: cdktn.stringToHclTerraform(struct!.snaplockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_append_mode_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.volumeAppendModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autocommit_period: {
      value: awsFsxOntapVolumeAutocommitPeriodPropertyToHclTerraform(struct!.autocommitPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "AutocommitPeriodPropertyList",
    },
    retention_period: {
      value: awsFsxOntapVolumeRetentionPeriodPropertyToHclTerraform(struct!.retentionPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "RetentionPeriodPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxOntapVolumeTieringPolicyPropertyToTerraform(struct?: AwsFsxOntapVolume.TieringPolicyPropertyOutputReference | AwsFsxOntapVolume.TieringPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cooling_period: cdktn.numberToTerraform(struct!.coolingPeriod),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsFsxOntapVolumeTieringPolicyPropertyToHclTerraform(struct?: AwsFsxOntapVolume.TieringPolicyPropertyOutputReference | AwsFsxOntapVolume.TieringPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cooling_period: {
      value: cdktn.numberToHclTerraform(struct!.coolingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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


export function awsFsxOntapVolumeTimeoutsPropertyToTerraform(struct?: AwsFsxOntapVolume.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsFsxOntapVolumeTimeoutsPropertyToHclTerraform(struct?: AwsFsxOntapVolume.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsFsxOntapVolume {
export interface AggregateConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#aggregates AwsFsxOntapVolume#aggregates}
  */
  readonly aggregates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#constituents_per_aggregate AwsFsxOntapVolume#constituents_per_aggregate}
  */
  readonly constituentsPerAggregate?: number;
}
export class AggregateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AggregateConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregates !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregates = this._aggregates;
    }
    if (this._constituentsPerAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.constituentsPerAggregate = this._constituentsPerAggregate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AggregateConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregates = undefined;
      this._constituentsPerAggregate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregates = value.aggregates;
      this._constituentsPerAggregate = value.constituentsPerAggregate;
    }
  }

  // aggregates - computed: true, optional: true, required: false
  private _aggregates?: string[]; 
  public get aggregates() {
    return this.getListAttribute('aggregates');
  }
  public set aggregates(value: string[]) {
    this._aggregates = value;
  }
  public resetAggregates() {
    this._aggregates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatesInput() {
    return this._aggregates;
  }

  // constituents_per_aggregate - computed: true, optional: true, required: false
  private _constituentsPerAggregate?: number; 
  public get constituentsPerAggregate() {
    return this.getNumberAttribute('constituents_per_aggregate');
  }
  public set constituentsPerAggregate(value: number) {
    this._constituentsPerAggregate = value;
  }
  public resetConstituentsPerAggregate() {
    this._constituentsPerAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constituentsPerAggregateInput() {
    return this._constituentsPerAggregate;
  }

  // total_constituents - computed: true, optional: false, required: false
  public get totalConstituents() {
    return this.getNumberAttribute('total_constituents');
  }
}
export interface AutocommitPeriodProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#type AwsFsxOntapVolume#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#value AwsFsxOntapVolume#value}
  */
  readonly value?: number;
}
export class AutocommitPeriodPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutocommitPeriodProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AutocommitPeriodProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface DefaultRetentionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#type AwsFsxOntapVolume#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#value AwsFsxOntapVolume#value}
  */
  readonly value?: number;
}
export class DefaultRetentionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultRetentionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DefaultRetentionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface MaximumRetentionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#type AwsFsxOntapVolume#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#value AwsFsxOntapVolume#value}
  */
  readonly value?: number;
}
export class MaximumRetentionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaximumRetentionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: MaximumRetentionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface MinimumRetentionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#type AwsFsxOntapVolume#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#value AwsFsxOntapVolume#value}
  */
  readonly value?: number;
}
export class MinimumRetentionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MinimumRetentionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: MinimumRetentionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface RetentionPeriodProperty {
  /**
  * default_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#default_retention AwsFsxOntapVolume#default_retention}
  */
  readonly defaultRetention?: DefaultRetentionProperty;
  /**
  * maximum_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#maximum_retention AwsFsxOntapVolume#maximum_retention}
  */
  readonly maximumRetention?: MaximumRetentionProperty;
  /**
  * minimum_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#minimum_retention AwsFsxOntapVolume#minimum_retention}
  */
  readonly minimumRetention?: MinimumRetentionProperty;
}
export class RetentionPeriodPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetentionPeriodProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
    }
    if (this._maximumRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetention = this._maximumRetention?.internalValue;
    }
    if (this._minimumRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRetention = this._minimumRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetentionPeriodProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultRetention.internalValue = undefined;
      this._maximumRetention.internalValue = undefined;
      this._minimumRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultRetention.internalValue = value.defaultRetention;
      this._maximumRetention.internalValue = value.maximumRetention;
      this._minimumRetention.internalValue = value.minimumRetention;
    }
  }

  // default_retention - computed: false, optional: true, required: false
  private _defaultRetention = new DefaultRetentionPropertyOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
  public putDefaultRetention(value: DefaultRetentionProperty) {
    this._defaultRetention.internalValue = value;
  }
  public resetDefaultRetention() {
    this._defaultRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionInput() {
    return this._defaultRetention.internalValue;
  }

  // maximum_retention - computed: false, optional: true, required: false
  private _maximumRetention = new MaximumRetentionPropertyOutputReference(this, "maximum_retention");
  public get maximumRetention() {
    return this._maximumRetention;
  }
  public putMaximumRetention(value: MaximumRetentionProperty) {
    this._maximumRetention.internalValue = value;
  }
  public resetMaximumRetention() {
    this._maximumRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetentionInput() {
    return this._maximumRetention.internalValue;
  }

  // minimum_retention - computed: false, optional: true, required: false
  private _minimumRetention = new MinimumRetentionPropertyOutputReference(this, "minimum_retention");
  public get minimumRetention() {
    return this._minimumRetention;
  }
  public putMinimumRetention(value: MinimumRetentionProperty) {
    this._minimumRetention.internalValue = value;
  }
  public resetMinimumRetention() {
    this._minimumRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRetentionInput() {
    return this._minimumRetention.internalValue;
  }
}
export interface SnaplockConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#audit_log_volume AwsFsxOntapVolume#audit_log_volume}
  */
  readonly auditLogVolume?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#privileged_delete AwsFsxOntapVolume#privileged_delete}
  */
  readonly privilegedDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#snaplock_type AwsFsxOntapVolume#snaplock_type}
  */
  readonly snaplockType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#volume_append_mode_enabled AwsFsxOntapVolume#volume_append_mode_enabled}
  */
  readonly volumeAppendModeEnabled?: boolean | cdktn.IResolvable;
  /**
  * autocommit_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#autocommit_period AwsFsxOntapVolume#autocommit_period}
  */
  readonly autocommitPeriod?: AutocommitPeriodProperty;
  /**
  * retention_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#retention_period AwsFsxOntapVolume#retention_period}
  */
  readonly retentionPeriod?: RetentionPeriodProperty;
}
export class SnaplockConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnaplockConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogVolume = this._auditLogVolume;
    }
    if (this._privilegedDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedDelete = this._privilegedDelete;
    }
    if (this._snaplockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.snaplockType = this._snaplockType;
    }
    if (this._volumeAppendModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAppendModeEnabled = this._volumeAppendModeEnabled;
    }
    if (this._autocommitPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autocommitPeriod = this._autocommitPeriod?.internalValue;
    }
    if (this._retentionPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnaplockConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogVolume = undefined;
      this._privilegedDelete = undefined;
      this._snaplockType = undefined;
      this._volumeAppendModeEnabled = undefined;
      this._autocommitPeriod.internalValue = undefined;
      this._retentionPeriod.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogVolume = value.auditLogVolume;
      this._privilegedDelete = value.privilegedDelete;
      this._snaplockType = value.snaplockType;
      this._volumeAppendModeEnabled = value.volumeAppendModeEnabled;
      this._autocommitPeriod.internalValue = value.autocommitPeriod;
      this._retentionPeriod.internalValue = value.retentionPeriod;
    }
  }

  // audit_log_volume - computed: false, optional: true, required: false
  private _auditLogVolume?: boolean | cdktn.IResolvable; 
  public get auditLogVolume() {
    return this.getBooleanAttribute('audit_log_volume');
  }
  public set auditLogVolume(value: boolean | cdktn.IResolvable) {
    this._auditLogVolume = value;
  }
  public resetAuditLogVolume() {
    this._auditLogVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogVolumeInput() {
    return this._auditLogVolume;
  }

  // privileged_delete - computed: false, optional: true, required: false
  private _privilegedDelete?: string; 
  public get privilegedDelete() {
    return this.getStringAttribute('privileged_delete');
  }
  public set privilegedDelete(value: string) {
    this._privilegedDelete = value;
  }
  public resetPrivilegedDelete() {
    this._privilegedDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedDeleteInput() {
    return this._privilegedDelete;
  }

  // snaplock_type - computed: false, optional: false, required: true
  private _snaplockType?: string; 
  public get snaplockType() {
    return this.getStringAttribute('snaplock_type');
  }
  public set snaplockType(value: string) {
    this._snaplockType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockTypeInput() {
    return this._snaplockType;
  }

  // volume_append_mode_enabled - computed: false, optional: true, required: false
  private _volumeAppendModeEnabled?: boolean | cdktn.IResolvable; 
  public get volumeAppendModeEnabled() {
    return this.getBooleanAttribute('volume_append_mode_enabled');
  }
  public set volumeAppendModeEnabled(value: boolean | cdktn.IResolvable) {
    this._volumeAppendModeEnabled = value;
  }
  public resetVolumeAppendModeEnabled() {
    this._volumeAppendModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAppendModeEnabledInput() {
    return this._volumeAppendModeEnabled;
  }

  // autocommit_period - computed: false, optional: true, required: false
  private _autocommitPeriod = new AutocommitPeriodPropertyOutputReference(this, "autocommit_period");
  public get autocommitPeriod() {
    return this._autocommitPeriod;
  }
  public putAutocommitPeriod(value: AutocommitPeriodProperty) {
    this._autocommitPeriod.internalValue = value;
  }
  public resetAutocommitPeriod() {
    this._autocommitPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocommitPeriodInput() {
    return this._autocommitPeriod.internalValue;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod = new RetentionPeriodPropertyOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }
  public putRetentionPeriod(value: RetentionPeriodProperty) {
    this._retentionPeriod.internalValue = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod.internalValue;
  }
}
export interface TieringPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#cooling_period AwsFsxOntapVolume#cooling_period}
  */
  readonly coolingPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#name AwsFsxOntapVolume#name}
  */
  readonly name?: string;
}
export class TieringPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TieringPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolingPeriod = this._coolingPeriod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TieringPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolingPeriod = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolingPeriod = value.coolingPeriod;
      this._name = value.name;
    }
  }

  // cooling_period - computed: true, optional: true, required: false
  private _coolingPeriod?: number; 
  public get coolingPeriod() {
    return this.getNumberAttribute('cooling_period');
  }
  public set coolingPeriod(value: number) {
    this._coolingPeriod = value;
  }
  public resetCoolingPeriod() {
    this._coolingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolingPeriodInput() {
    return this._coolingPeriod;
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
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#create AwsFsxOntapVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#delete AwsFsxOntapVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_volume#update AwsFsxOntapVolume#update}
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
