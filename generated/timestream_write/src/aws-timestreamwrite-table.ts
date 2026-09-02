// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#database_name TfTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#id TfTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#region TfTable#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#table_name TfTable#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#tags TfTable#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#tags_all TfTable#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * magnetic_store_write_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#magnetic_store_write_properties TfTable#magnetic_store_write_properties}
  */
  readonly magneticStoreWriteProperties?: TfTable.MagneticStoreWritePropertiesProperty;
  /**
  * retention_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#retention_properties TfTable#retention_properties}
  */
  readonly retentionProperties?: TfTable.RetentionPropertiesProperty;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#schema TfTable#schema}
  */
  readonly schema?: TfTable.SchemaProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table aws_timestreamwrite_table}
*/
export class TfTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_timestreamwrite_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfTable to import
  * @param importFromId The id of the existing TfTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_timestreamwrite_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table aws_timestreamwrite_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfTableConfig
  */
  public constructor(scope: Construct, id: string, config: TfTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_timestreamwrite_table',
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
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._region = config.region;
    this._tableName = config.tableName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._magneticStoreWriteProperties.internalValue = config.magneticStoreWriteProperties;
    this._retentionProperties.internalValue = config.retentionProperties;
    this._schema.internalValue = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
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

  // magnetic_store_write_properties - computed: false, optional: true, required: false
  private _magneticStoreWriteProperties = new TfTable.MagneticStoreWritePropertiesPropertyOutputReference(this, "magnetic_store_write_properties");
  public get magneticStoreWriteProperties() {
    return this._magneticStoreWriteProperties;
  }
  public putMagneticStoreWriteProperties(value: TfTable.MagneticStoreWritePropertiesProperty) {
    this._magneticStoreWriteProperties.internalValue = value;
  }
  public resetMagneticStoreWriteProperties() {
    this._magneticStoreWriteProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreWritePropertiesInput() {
    return this._magneticStoreWriteProperties.internalValue;
  }

  // retention_properties - computed: false, optional: true, required: false
  private _retentionProperties = new TfTable.RetentionPropertiesPropertyOutputReference(this, "retention_properties");
  public get retentionProperties() {
    return this._retentionProperties;
  }
  public putRetentionProperties(value: TfTable.RetentionPropertiesProperty) {
    this._retentionProperties.internalValue = value;
  }
  public resetRetentionProperties() {
    this._retentionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPropertiesInput() {
    return this._retentionProperties.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new TfTable.SchemaPropertyOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: TfTable.SchemaProperty) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktn.stringToTerraform(this._databaseName),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      table_name: cdktn.stringToTerraform(this._tableName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      magnetic_store_write_properties: tfTableMagneticStoreWritePropertiesPropertyToTerraform(this._magneticStoreWriteProperties.internalValue),
      retention_properties: tfTableRetentionPropertiesPropertyToTerraform(this._retentionProperties.internalValue),
      schema: tfTableSchemaPropertyToTerraform(this._schema.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktn.stringToHclTerraform(this._tableName),
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
      magnetic_store_write_properties: {
        value: tfTableMagneticStoreWritePropertiesPropertyToHclTerraform(this._magneticStoreWriteProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTable.MagneticStoreWritePropertiesPropertyList",
      },
      retention_properties: {
        value: tfTableRetentionPropertiesPropertyToHclTerraform(this._retentionProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTable.RetentionPropertiesPropertyList",
      },
      schema: {
        value: tfTableSchemaPropertyToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTable.SchemaPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfTableS3ConfigurationPropertyToTerraform(struct?: TfTable.S3ConfigurationPropertyOutputReference | TfTable.S3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    object_key_prefix: cdktn.stringToTerraform(struct!.objectKeyPrefix),
  }
}


export function tfTableS3ConfigurationPropertyToHclTerraform(struct?: TfTable.S3ConfigurationPropertyOutputReference | TfTable.S3ConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_option: {
      value: cdktn.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.objectKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableMagneticStoreRejectedDataLocationPropertyToTerraform(struct?: TfTable.MagneticStoreRejectedDataLocationPropertyOutputReference | TfTable.MagneticStoreRejectedDataLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_configuration: tfTableS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
  }
}


export function tfTableMagneticStoreRejectedDataLocationPropertyToHclTerraform(struct?: TfTable.MagneticStoreRejectedDataLocationPropertyOutputReference | TfTable.MagneticStoreRejectedDataLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_configuration: {
      value: tfTableS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "S3ConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableMagneticStoreWritePropertiesPropertyToTerraform(struct?: TfTable.MagneticStoreWritePropertiesPropertyOutputReference | TfTable.MagneticStoreWritePropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_magnetic_store_writes: cdktn.booleanToTerraform(struct!.enableMagneticStoreWrites),
    magnetic_store_rejected_data_location: tfTableMagneticStoreRejectedDataLocationPropertyToTerraform(struct!.magneticStoreRejectedDataLocation),
  }
}


export function tfTableMagneticStoreWritePropertiesPropertyToHclTerraform(struct?: TfTable.MagneticStoreWritePropertiesPropertyOutputReference | TfTable.MagneticStoreWritePropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_magnetic_store_writes: {
      value: cdktn.booleanToHclTerraform(struct!.enableMagneticStoreWrites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    magnetic_store_rejected_data_location: {
      value: tfTableMagneticStoreRejectedDataLocationPropertyToHclTerraform(struct!.magneticStoreRejectedDataLocation),
      isBlock: true,
      type: "list",
      storageClassType: "MagneticStoreRejectedDataLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableRetentionPropertiesPropertyToTerraform(struct?: TfTable.RetentionPropertiesPropertyOutputReference | TfTable.RetentionPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    magnetic_store_retention_period_in_days: cdktn.numberToTerraform(struct!.magneticStoreRetentionPeriodInDays),
    memory_store_retention_period_in_hours: cdktn.numberToTerraform(struct!.memoryStoreRetentionPeriodInHours),
  }
}


export function tfTableRetentionPropertiesPropertyToHclTerraform(struct?: TfTable.RetentionPropertiesPropertyOutputReference | TfTable.RetentionPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    magnetic_store_retention_period_in_days: {
      value: cdktn.numberToHclTerraform(struct!.magneticStoreRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_store_retention_period_in_hours: {
      value: cdktn.numberToHclTerraform(struct!.memoryStoreRetentionPeriodInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTableCompositePartitionKeyPropertyToTerraform(struct?: TfTable.CompositePartitionKeyPropertyOutputReference | TfTable.CompositePartitionKeyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforcement_in_record: cdktn.stringToTerraform(struct!.enforcementInRecord),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfTableCompositePartitionKeyPropertyToHclTerraform(struct?: TfTable.CompositePartitionKeyPropertyOutputReference | TfTable.CompositePartitionKeyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforcement_in_record: {
      value: cdktn.stringToHclTerraform(struct!.enforcementInRecord),
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


export function tfTableSchemaPropertyToTerraform(struct?: TfTable.SchemaPropertyOutputReference | TfTable.SchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    composite_partition_key: tfTableCompositePartitionKeyPropertyToTerraform(struct!.compositePartitionKey),
  }
}


export function tfTableSchemaPropertyToHclTerraform(struct?: TfTable.SchemaPropertyOutputReference | TfTable.SchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    composite_partition_key: {
      value: tfTableCompositePartitionKeyPropertyToHclTerraform(struct!.compositePartitionKey),
      isBlock: true,
      type: "list",
      storageClassType: "CompositePartitionKeyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfTable {
export interface S3ConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#bucket_name TfTable#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#encryption_option TfTable#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#kms_key_id TfTable#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#object_key_prefix TfTable#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._objectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._encryptionOption = undefined;
      this._kmsKeyId = undefined;
      this._objectKeyPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._encryptionOption = value.encryptionOption;
      this._kmsKeyId = value.kmsKeyId;
      this._objectKeyPrefix = value.objectKeyPrefix;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // encryption_option - computed: false, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
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

  // object_key_prefix - computed: false, optional: true, required: false
  private _objectKeyPrefix?: string; 
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }
  public set objectKeyPrefix(value: string) {
    this._objectKeyPrefix = value;
  }
  public resetObjectKeyPrefix() {
    this._objectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyPrefixInput() {
    return this._objectKeyPrefix;
  }
}
export interface MagneticStoreRejectedDataLocationProperty {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#s3_configuration TfTable#s3_configuration}
  */
  readonly s3Configuration?: S3ConfigurationProperty;
}
export class MagneticStoreRejectedDataLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MagneticStoreRejectedDataLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagneticStoreRejectedDataLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new S3ConfigurationPropertyOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: S3ConfigurationProperty) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}
export interface MagneticStoreWritePropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#enable_magnetic_store_writes TfTable#enable_magnetic_store_writes}
  */
  readonly enableMagneticStoreWrites?: boolean | cdktn.IResolvable;
  /**
  * magnetic_store_rejected_data_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#magnetic_store_rejected_data_location TfTable#magnetic_store_rejected_data_location}
  */
  readonly magneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocationProperty;
}
export class MagneticStoreWritePropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MagneticStoreWritePropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMagneticStoreWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMagneticStoreWrites = this._enableMagneticStoreWrites;
    }
    if (this._magneticStoreRejectedDataLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.magneticStoreRejectedDataLocation = this._magneticStoreRejectedDataLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagneticStoreWritePropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableMagneticStoreWrites = undefined;
      this._magneticStoreRejectedDataLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableMagneticStoreWrites = value.enableMagneticStoreWrites;
      this._magneticStoreRejectedDataLocation.internalValue = value.magneticStoreRejectedDataLocation;
    }
  }

  // enable_magnetic_store_writes - computed: false, optional: true, required: false
  private _enableMagneticStoreWrites?: boolean | cdktn.IResolvable; 
  public get enableMagneticStoreWrites() {
    return this.getBooleanAttribute('enable_magnetic_store_writes');
  }
  public set enableMagneticStoreWrites(value: boolean | cdktn.IResolvable) {
    this._enableMagneticStoreWrites = value;
  }
  public resetEnableMagneticStoreWrites() {
    this._enableMagneticStoreWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMagneticStoreWritesInput() {
    return this._enableMagneticStoreWrites;
  }

  // magnetic_store_rejected_data_location - computed: false, optional: true, required: false
  private _magneticStoreRejectedDataLocation = new MagneticStoreRejectedDataLocationPropertyOutputReference(this, "magnetic_store_rejected_data_location");
  public get magneticStoreRejectedDataLocation() {
    return this._magneticStoreRejectedDataLocation;
  }
  public putMagneticStoreRejectedDataLocation(value: MagneticStoreRejectedDataLocationProperty) {
    this._magneticStoreRejectedDataLocation.internalValue = value;
  }
  public resetMagneticStoreRejectedDataLocation() {
    this._magneticStoreRejectedDataLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreRejectedDataLocationInput() {
    return this._magneticStoreRejectedDataLocation.internalValue;
  }
}
export interface RetentionPropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#magnetic_store_retention_period_in_days TfTable#magnetic_store_retention_period_in_days}
  */
  readonly magneticStoreRetentionPeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#memory_store_retention_period_in_hours TfTable#memory_store_retention_period_in_hours}
  */
  readonly memoryStoreRetentionPeriodInHours: number;
}
export class RetentionPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetentionPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._magneticStoreRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.magneticStoreRetentionPeriodInDays = this._magneticStoreRetentionPeriodInDays;
    }
    if (this._memoryStoreRetentionPeriodInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryStoreRetentionPeriodInHours = this._memoryStoreRetentionPeriodInHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetentionPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._magneticStoreRetentionPeriodInDays = undefined;
      this._memoryStoreRetentionPeriodInHours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._magneticStoreRetentionPeriodInDays = value.magneticStoreRetentionPeriodInDays;
      this._memoryStoreRetentionPeriodInHours = value.memoryStoreRetentionPeriodInHours;
    }
  }

  // magnetic_store_retention_period_in_days - computed: false, optional: false, required: true
  private _magneticStoreRetentionPeriodInDays?: number; 
  public get magneticStoreRetentionPeriodInDays() {
    return this.getNumberAttribute('magnetic_store_retention_period_in_days');
  }
  public set magneticStoreRetentionPeriodInDays(value: number) {
    this._magneticStoreRetentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get magneticStoreRetentionPeriodInDaysInput() {
    return this._magneticStoreRetentionPeriodInDays;
  }

  // memory_store_retention_period_in_hours - computed: false, optional: false, required: true
  private _memoryStoreRetentionPeriodInHours?: number; 
  public get memoryStoreRetentionPeriodInHours() {
    return this.getNumberAttribute('memory_store_retention_period_in_hours');
  }
  public set memoryStoreRetentionPeriodInHours(value: number) {
    this._memoryStoreRetentionPeriodInHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStoreRetentionPeriodInHoursInput() {
    return this._memoryStoreRetentionPeriodInHours;
  }
}
export interface CompositePartitionKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#enforcement_in_record TfTable#enforcement_in_record}
  */
  readonly enforcementInRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#name TfTable#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#type TfTable#type}
  */
  readonly type: string;
}
export class CompositePartitionKeyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CompositePartitionKeyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementInRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementInRecord = this._enforcementInRecord;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CompositePartitionKeyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementInRecord = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementInRecord = value.enforcementInRecord;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // enforcement_in_record - computed: false, optional: true, required: false
  private _enforcementInRecord?: string; 
  public get enforcementInRecord() {
    return this.getStringAttribute('enforcement_in_record');
  }
  public set enforcementInRecord(value: string) {
    this._enforcementInRecord = value;
  }
  public resetEnforcementInRecord() {
    this._enforcementInRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementInRecordInput() {
    return this._enforcementInRecord;
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
export interface SchemaProperty {
  /**
  * composite_partition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/timestreamwrite_table#composite_partition_key TfTable#composite_partition_key}
  */
  readonly compositePartitionKey?: CompositePartitionKeyProperty;
}
export class SchemaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositePartitionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositePartitionKey = this._compositePartitionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compositePartitionKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compositePartitionKey.internalValue = value.compositePartitionKey;
    }
  }

  // composite_partition_key - computed: false, optional: true, required: false
  private _compositePartitionKey = new CompositePartitionKeyPropertyOutputReference(this, "composite_partition_key");
  public get compositePartitionKey() {
    return this._compositePartitionKey;
  }
  public putCompositePartitionKey(value: CompositePartitionKeyProperty) {
    this._compositePartitionKey.internalValue = value;
  }
  public resetCompositePartitionKey() {
    this._compositePartitionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositePartitionKeyInput() {
    return this._compositePartitionKey.internalValue;
  }
}
}
