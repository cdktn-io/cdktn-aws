// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#encryption_configuration TfTable#encryption_configuration}
  */
  readonly encryptionConfiguration?: TfTable.EncryptionConfigurationProperty;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#format TfTable#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#maintenance_configuration TfTable#maintenance_configuration}
  */
  readonly maintenanceConfiguration?: TfTable.MaintenanceConfigurationProperty;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#name TfTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#namespace TfTable#namespace}
  */
  readonly namespace: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#region TfTable#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#table_bucket_arn TfTable#table_bucket_arn}
  */
  readonly tableBucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#tags TfTable#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#metadata TfTable#metadata}
  */
  readonly metadata?: TfTable.MetadataProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table aws_s3tables_table}
*/
export class TfTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3tables_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfTable to import
  * @param importFromId The id of the existing TfTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3tables_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table aws_s3tables_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfTableConfig
  */
  public constructor(scope: Construct, id: string, config: TfTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3tables_table',
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
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._format = config.format;
    this._maintenanceConfiguration.internalValue = config.maintenanceConfiguration;
    this._name = config.name;
    this._namespace = config.namespace;
    this._region = config.region;
    this._tableBucketArn = config.tableBucketArn;
    this._tags = config.tags;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new TfTable.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: TfTable.EncryptionConfigurationProperty) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
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

  // maintenance_configuration - computed: true, optional: true, required: false
  private _maintenanceConfiguration = new TfTable.MaintenanceConfigurationPropertyOutputReference(this, "maintenance_configuration");
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }
  public putMaintenanceConfiguration(value: TfTable.MaintenanceConfigurationProperty) {
    this._maintenanceConfiguration.internalValue = value;
  }
  public resetMaintenanceConfiguration() {
    this._maintenanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationInput() {
    return this._maintenanceConfiguration.internalValue;
  }

  // metadata_location - computed: true, optional: false, required: false
  public get metadataLocation() {
    return this.getStringAttribute('metadata_location');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
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

  // table_bucket_arn - computed: false, optional: false, required: true
  private _tableBucketArn?: string; 
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
  public set tableBucketArn(value: string) {
    this._tableBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketArnInput() {
    return this._tableBucketArn;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version_token - computed: true, optional: false, required: false
  public get versionToken() {
    return this.getStringAttribute('version_token');
  }

  // warehouse_location - computed: true, optional: false, required: false
  public get warehouseLocation() {
    return this.getStringAttribute('warehouse_location');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new TfTable.MetadataPropertyList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: TfTable.MetadataProperty[] | cdktn.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_configuration: tfTableEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
      format: cdktn.stringToTerraform(this._format),
      maintenance_configuration: tfTableMaintenanceConfigurationPropertyToTerraform(this._maintenanceConfiguration.internalValue),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      region: cdktn.stringToTerraform(this._region),
      table_bucket_arn: cdktn.stringToTerraform(this._tableBucketArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      metadata: cdktn.listMapper(tfTableMetadataPropertyToTerraform, true)(this._metadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_configuration: {
        value: tfTableEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfTable.EncryptionConfigurationProperty",
      },
      format: {
        value: cdktn.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_configuration: {
        value: tfTableMaintenanceConfigurationPropertyToHclTerraform(this._maintenanceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfTable.MaintenanceConfigurationProperty",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
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
      table_bucket_arn: {
        value: cdktn.stringToHclTerraform(this._tableBucketArn),
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
      metadata: {
        value: cdktn.listMapperHcl(tfTableMetadataPropertyToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTable.MetadataPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfTableEncryptionConfigurationPropertyToTerraform(struct?: TfTable.EncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    sse_algorithm: cdktn.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function tfTableEncryptionConfigurationPropertyToHclTerraform(struct?: TfTable.EncryptionConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableMaintenanceConfigurationIcebergCompactionSettingsPropertyToTerraform(struct?: TfTable.MaintenanceConfigurationIcebergCompactionSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_file_size_mb: cdktn.numberToTerraform(struct!.targetFileSizeMb),
  }
}


export function tfTableMaintenanceConfigurationIcebergCompactionSettingsPropertyToHclTerraform(struct?: TfTable.MaintenanceConfigurationIcebergCompactionSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_file_size_mb: {
      value: cdktn.numberToHclTerraform(struct!.targetFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableIcebergCompactionPropertyToTerraform(struct?: TfTable.IcebergCompactionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    settings: tfTableMaintenanceConfigurationIcebergCompactionSettingsPropertyToTerraform(struct!.settings),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfTableIcebergCompactionPropertyToHclTerraform(struct?: TfTable.IcebergCompactionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    settings: {
      value: tfTableMaintenanceConfigurationIcebergCompactionSettingsPropertyToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "MaintenanceConfigurationIcebergCompactionSettingsProperty",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableMaintenanceConfigurationIcebergSnapshotManagementSettingsPropertyToTerraform(struct?: TfTable.MaintenanceConfigurationIcebergSnapshotManagementSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_snapshot_age_hours: cdktn.numberToTerraform(struct!.maxSnapshotAgeHours),
    min_snapshots_to_keep: cdktn.numberToTerraform(struct!.minSnapshotsToKeep),
  }
}


export function tfTableMaintenanceConfigurationIcebergSnapshotManagementSettingsPropertyToHclTerraform(struct?: TfTable.MaintenanceConfigurationIcebergSnapshotManagementSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_snapshot_age_hours: {
      value: cdktn.numberToHclTerraform(struct!.maxSnapshotAgeHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_snapshots_to_keep: {
      value: cdktn.numberToHclTerraform(struct!.minSnapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableIcebergSnapshotManagementPropertyToTerraform(struct?: TfTable.IcebergSnapshotManagementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    settings: tfTableMaintenanceConfigurationIcebergSnapshotManagementSettingsPropertyToTerraform(struct!.settings),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfTableIcebergSnapshotManagementPropertyToHclTerraform(struct?: TfTable.IcebergSnapshotManagementProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    settings: {
      value: tfTableMaintenanceConfigurationIcebergSnapshotManagementSettingsPropertyToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "MaintenanceConfigurationIcebergSnapshotManagementSettingsProperty",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableMaintenanceConfigurationPropertyToTerraform(struct?: TfTable.MaintenanceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_compaction: tfTableIcebergCompactionPropertyToTerraform(struct!.icebergCompaction),
    iceberg_snapshot_management: tfTableIcebergSnapshotManagementPropertyToTerraform(struct!.icebergSnapshotManagement),
  }
}


export function tfTableMaintenanceConfigurationPropertyToHclTerraform(struct?: TfTable.MaintenanceConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_compaction: {
      value: tfTableIcebergCompactionPropertyToHclTerraform(struct!.icebergCompaction),
      isBlock: true,
      type: "struct",
      storageClassType: "IcebergCompactionProperty",
    },
    iceberg_snapshot_management: {
      value: tfTableIcebergSnapshotManagementPropertyToHclTerraform(struct!.icebergSnapshotManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "IcebergSnapshotManagementProperty",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableFieldPropertyToTerraform(struct?: TfTable.FieldProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfTableFieldPropertyToHclTerraform(struct?: TfTable.FieldProperty | cdktn.IResolvable): any {
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
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function tfTableSchemaPropertyToTerraform(struct?: TfTable.SchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.listMapper(tfTableFieldPropertyToTerraform, true)(struct!.field),
  }
}


export function tfTableSchemaPropertyToHclTerraform(struct?: TfTable.SchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.listMapperHcl(tfTableFieldPropertyToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "FieldPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableIcebergPropertyToTerraform(struct?: TfTable.IcebergProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
    schema: cdktn.listMapper(tfTableSchemaPropertyToTerraform, true)(struct!.schema),
  }
}


export function tfTableIcebergPropertyToHclTerraform(struct?: TfTable.IcebergProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    schema: {
      value: cdktn.listMapperHcl(tfTableSchemaPropertyToHclTerraform, true)(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableMetadataPropertyToTerraform(struct?: TfTable.MetadataProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg: cdktn.listMapper(tfTableIcebergPropertyToTerraform, true)(struct!.iceberg),
  }
}


export function tfTableMetadataPropertyToHclTerraform(struct?: TfTable.MetadataProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg: {
      value: cdktn.listMapperHcl(tfTableIcebergPropertyToHclTerraform, true)(struct!.iceberg),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfTable {
export interface EncryptionConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#kms_key_arn TfTable#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#sse_algorithm TfTable#sse_algorithm}
  */
  readonly sseAlgorithm?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._sseAlgorithm = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sseAlgorithm = value.sseAlgorithm;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // sse_algorithm - computed: true, optional: true, required: false
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  public resetSseAlgorithm() {
    this._sseAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }
}
export interface MaintenanceConfigurationIcebergCompactionSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#target_file_size_mb TfTable#target_file_size_mb}
  */
  readonly targetFileSizeMb?: number;
}
export class MaintenanceConfigurationIcebergCompactionSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaintenanceConfigurationIcebergCompactionSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFileSizeMb = this._targetFileSizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceConfigurationIcebergCompactionSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetFileSizeMb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetFileSizeMb = value.targetFileSizeMb;
    }
  }

  // target_file_size_mb - computed: true, optional: true, required: false
  private _targetFileSizeMb?: number; 
  public get targetFileSizeMb() {
    return this.getNumberAttribute('target_file_size_mb');
  }
  public set targetFileSizeMb(value: number) {
    this._targetFileSizeMb = value;
  }
  public resetTargetFileSizeMb() {
    this._targetFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFileSizeMbInput() {
    return this._targetFileSizeMb;
  }
}
export interface IcebergCompactionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#settings TfTable#settings}
  */
  readonly settings?: MaintenanceConfigurationIcebergCompactionSettingsProperty;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#status TfTable#status}
  */
  readonly status?: string;
}
export class IcebergCompactionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IcebergCompactionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergCompactionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settings.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settings.internalValue = value.settings;
      this._status = value.status;
    }
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new MaintenanceConfigurationIcebergCompactionSettingsPropertyOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: MaintenanceConfigurationIcebergCompactionSettingsProperty) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface MaintenanceConfigurationIcebergSnapshotManagementSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#max_snapshot_age_hours TfTable#max_snapshot_age_hours}
  */
  readonly maxSnapshotAgeHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#min_snapshots_to_keep TfTable#min_snapshots_to_keep}
  */
  readonly minSnapshotsToKeep?: number;
}
export class MaintenanceConfigurationIcebergSnapshotManagementSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaintenanceConfigurationIcebergSnapshotManagementSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSnapshotAgeHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotAgeHours = this._maxSnapshotAgeHours;
    }
    if (this._minSnapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSnapshotsToKeep = this._minSnapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceConfigurationIcebergSnapshotManagementSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSnapshotAgeHours = undefined;
      this._minSnapshotsToKeep = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSnapshotAgeHours = value.maxSnapshotAgeHours;
      this._minSnapshotsToKeep = value.minSnapshotsToKeep;
    }
  }

  // max_snapshot_age_hours - computed: true, optional: true, required: false
  private _maxSnapshotAgeHours?: number; 
  public get maxSnapshotAgeHours() {
    return this.getNumberAttribute('max_snapshot_age_hours');
  }
  public set maxSnapshotAgeHours(value: number) {
    this._maxSnapshotAgeHours = value;
  }
  public resetMaxSnapshotAgeHours() {
    this._maxSnapshotAgeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotAgeHoursInput() {
    return this._maxSnapshotAgeHours;
  }

  // min_snapshots_to_keep - computed: true, optional: true, required: false
  private _minSnapshotsToKeep?: number; 
  public get minSnapshotsToKeep() {
    return this.getNumberAttribute('min_snapshots_to_keep');
  }
  public set minSnapshotsToKeep(value: number) {
    this._minSnapshotsToKeep = value;
  }
  public resetMinSnapshotsToKeep() {
    this._minSnapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSnapshotsToKeepInput() {
    return this._minSnapshotsToKeep;
  }
}
export interface IcebergSnapshotManagementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#settings TfTable#settings}
  */
  readonly settings?: MaintenanceConfigurationIcebergSnapshotManagementSettingsProperty;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#status TfTable#status}
  */
  readonly status?: string;
}
export class IcebergSnapshotManagementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IcebergSnapshotManagementProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergSnapshotManagementProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settings.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settings.internalValue = value.settings;
      this._status = value.status;
    }
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new MaintenanceConfigurationIcebergSnapshotManagementSettingsPropertyOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: MaintenanceConfigurationIcebergSnapshotManagementSettingsProperty) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface MaintenanceConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#iceberg_compaction TfTable#iceberg_compaction}
  */
  readonly icebergCompaction?: IcebergCompactionProperty;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#iceberg_snapshot_management TfTable#iceberg_snapshot_management}
  */
  readonly icebergSnapshotManagement?: IcebergSnapshotManagementProperty;
}
export class MaintenanceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaintenanceConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergCompaction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergCompaction = this._icebergCompaction?.internalValue;
    }
    if (this._icebergSnapshotManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergSnapshotManagement = this._icebergSnapshotManagement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergCompaction.internalValue = undefined;
      this._icebergSnapshotManagement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergCompaction.internalValue = value.icebergCompaction;
      this._icebergSnapshotManagement.internalValue = value.icebergSnapshotManagement;
    }
  }

  // iceberg_compaction - computed: true, optional: true, required: false
  private _icebergCompaction = new IcebergCompactionPropertyOutputReference(this, "iceberg_compaction");
  public get icebergCompaction() {
    return this._icebergCompaction;
  }
  public putIcebergCompaction(value: IcebergCompactionProperty) {
    this._icebergCompaction.internalValue = value;
  }
  public resetIcebergCompaction() {
    this._icebergCompaction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergCompactionInput() {
    return this._icebergCompaction.internalValue;
  }

  // iceberg_snapshot_management - computed: true, optional: true, required: false
  private _icebergSnapshotManagement = new IcebergSnapshotManagementPropertyOutputReference(this, "iceberg_snapshot_management");
  public get icebergSnapshotManagement() {
    return this._icebergSnapshotManagement;
  }
  public putIcebergSnapshotManagement(value: IcebergSnapshotManagementProperty) {
    this._icebergSnapshotManagement.internalValue = value;
  }
  public resetIcebergSnapshotManagement() {
    this._icebergSnapshotManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergSnapshotManagementInput() {
    return this._icebergSnapshotManagement.internalValue;
  }
}
export interface FieldProperty {
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#name TfTable#name}
  */
  readonly name: string;
  /**
  * A Boolean value that specifies whether values are required for each row in this field. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#required TfTable#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * The field type. S3 Tables supports all Apache Iceberg primitive types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#type TfTable#type}
  */
  readonly type: string;
}
export class FieldPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FieldProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FieldProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class FieldPropertyList extends cdktn.ComplexList {
  public internalValue? : FieldProperty[] | cdktn.IResolvable

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
  public get(index: number): FieldPropertyOutputReference {
    return new FieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchemaProperty {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#field TfTable#field}
  */
  readonly field?: FieldProperty[] | cdktn.IResolvable;
}
export class SchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field.internalValue = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field = new FieldPropertyList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: FieldProperty[] | cdktn.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}

export class SchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : SchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): SchemaPropertyOutputReference {
    return new SchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergProperty {
  /**
  * A map of configuration properties for the Iceberg table, for example `write.distribution-mode` and `write.sort-order`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#properties TfTable#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#schema TfTable#schema}
  */
  readonly schema?: SchemaProperty[] | cdktn.IResolvable;
}
export class IcebergPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._properties = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._properties = value.properties;
      this._schema.internalValue = value.schema;
    }
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

  // schema - computed: false, optional: true, required: false
  private _schema = new SchemaPropertyList(this, "schema", false);
  public get schema() {
    return this._schema;
  }
  public putSchema(value: SchemaProperty[] | cdktn.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class IcebergPropertyList extends cdktn.ComplexList {
  public internalValue? : IcebergProperty[] | cdktn.IResolvable

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
  public get(index: number): IcebergPropertyOutputReference {
    return new IcebergPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetadataProperty {
  /**
  * iceberg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/s3tables_table#iceberg TfTable#iceberg}
  */
  readonly iceberg?: IcebergProperty[] | cdktn.IResolvable;
}
export class MetadataPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MetadataProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iceberg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iceberg = this._iceberg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetadataProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iceberg.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iceberg.internalValue = value.iceberg;
    }
  }

  // iceberg - computed: false, optional: true, required: false
  private _iceberg = new IcebergPropertyList(this, "iceberg", false);
  public get iceberg() {
    return this._iceberg;
  }
  public putIceberg(value: IcebergProperty[] | cdktn.IResolvable) {
    this._iceberg.internalValue = value;
  }
  public resetIceberg() {
    this._iceberg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergInput() {
    return this._iceberg.internalValue;
  }
}

export class MetadataPropertyList extends cdktn.ComplexList {
  public internalValue? : MetadataProperty[] | cdktn.IResolvable

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
  public get(index: number): MetadataPropertyOutputReference {
    return new MetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
