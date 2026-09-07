// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsPartitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#catalog_id AwsPartition#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#database_name AwsPartition#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#id AwsPartition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#parameters AwsPartition#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#partition_values AwsPartition#partition_values}
  */
  readonly partitionValues: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#region AwsPartition#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#table_name AwsPartition#table_name}
  */
  readonly tableName: string;
  /**
  * storage_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#storage_descriptor AwsPartition#storage_descriptor}
  */
  readonly storageDescriptor?: AwsPartition.StorageDescriptorProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition aws_glue_partition}
*/
export class AwsPartition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_partition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsPartition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPartition to import
  * @param importFromId The id of the existing AwsPartition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPartition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_partition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition aws_glue_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPartitionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_partition',
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
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._parameters = config.parameters;
    this._partitionValues = config.partitionValues;
    this._region = config.region;
    this._tableName = config.tableName;
    this._storageDescriptor.internalValue = config.storageDescriptor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // last_accessed_time - computed: true, optional: false, required: false
  public get lastAccessedTime() {
    return this.getStringAttribute('last_accessed_time');
  }

  // last_analyzed_time - computed: true, optional: false, required: false
  public get lastAnalyzedTime() {
    return this.getStringAttribute('last_analyzed_time');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // partition_values - computed: false, optional: false, required: true
  private _partitionValues?: string[]; 
  public get partitionValues() {
    return this.getListAttribute('partition_values');
  }
  public set partitionValues(value: string[]) {
    this._partitionValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionValuesInput() {
    return this._partitionValues;
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

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor = new AwsPartition.StorageDescriptorPropertyOutputReference(this, "storage_descriptor");
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public putStorageDescriptor(value: AwsPartition.StorageDescriptorProperty) {
    this._storageDescriptor.internalValue = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktn.stringToTerraform(this._catalogId),
      database_name: cdktn.stringToTerraform(this._databaseName),
      id: cdktn.stringToTerraform(this._id),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      partition_values: cdktn.listMapper(cdktn.stringToTerraform, false)(this._partitionValues),
      region: cdktn.stringToTerraform(this._region),
      table_name: cdktn.stringToTerraform(this._tableName),
      storage_descriptor: awsPartitionStorageDescriptorPropertyToTerraform(this._storageDescriptor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktn.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      partition_values: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._partitionValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      storage_descriptor: {
        value: awsPartitionStorageDescriptorPropertyToHclTerraform(this._storageDescriptor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsPartition.StorageDescriptorPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsPartitionColumnsPropertyToTerraform(struct?: AwsPartition.ColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsPartitionColumnsPropertyToHclTerraform(struct?: AwsPartition.ColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
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


export function awsPartitionSerDeInfoPropertyToTerraform(struct?: AwsPartition.SerDeInfoPropertyOutputReference | AwsPartition.SerDeInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    serialization_library: cdktn.stringToTerraform(struct!.serializationLibrary),
  }
}


export function awsPartitionSerDeInfoPropertyToHclTerraform(struct?: AwsPartition.SerDeInfoPropertyOutputReference | AwsPartition.SerDeInfoProperty): any {
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
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    serialization_library: {
      value: cdktn.stringToHclTerraform(struct!.serializationLibrary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPartitionSkewedInfoPropertyToTerraform(struct?: AwsPartition.SkewedInfoPropertyOutputReference | AwsPartition.SkewedInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skewed_column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColumnNames),
    skewed_column_value_location_maps: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.skewedColumnValueLocationMaps),
    skewed_column_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColumnValues),
  }
}


export function awsPartitionSkewedInfoPropertyToHclTerraform(struct?: AwsPartition.SkewedInfoPropertyOutputReference | AwsPartition.SkewedInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skewed_column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColumnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skewed_column_value_location_maps: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.skewedColumnValueLocationMaps),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skewed_column_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColumnValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPartitionSortColumnsPropertyToTerraform(struct?: AwsPartition.SortColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    sort_order: cdktn.numberToTerraform(struct!.sortOrder),
  }
}


export function awsPartitionSortColumnsPropertyToHclTerraform(struct?: AwsPartition.SortColumnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktn.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsPartitionStorageDescriptorPropertyToTerraform(struct?: AwsPartition.StorageDescriptorPropertyOutputReference | AwsPartition.StorageDescriptorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalLocations),
    bucket_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bucketColumns),
    compressed: cdktn.booleanToTerraform(struct!.compressed),
    input_format: cdktn.stringToTerraform(struct!.inputFormat),
    location: cdktn.stringToTerraform(struct!.location),
    number_of_buckets: cdktn.numberToTerraform(struct!.numberOfBuckets),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    stored_as_sub_directories: cdktn.booleanToTerraform(struct!.storedAsSubDirectories),
    columns: cdktn.listMapper(awsPartitionColumnsPropertyToTerraform, true)(struct!.columns),
    ser_de_info: awsPartitionSerDeInfoPropertyToTerraform(struct!.serDeInfo),
    skewed_info: awsPartitionSkewedInfoPropertyToTerraform(struct!.skewedInfo),
    sort_columns: cdktn.listMapper(awsPartitionSortColumnsPropertyToTerraform, true)(struct!.sortColumns),
  }
}


export function awsPartitionStorageDescriptorPropertyToHclTerraform(struct?: AwsPartition.StorageDescriptorPropertyOutputReference | AwsPartition.StorageDescriptorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bucket_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bucketColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compressed: {
      value: cdktn.booleanToHclTerraform(struct!.compressed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format: {
      value: cdktn.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_buckets: {
      value: cdktn.numberToHclTerraform(struct!.numberOfBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    stored_as_sub_directories: {
      value: cdktn.booleanToHclTerraform(struct!.storedAsSubDirectories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    columns: {
      value: cdktn.listMapperHcl(awsPartitionColumnsPropertyToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "ColumnsPropertyList",
    },
    ser_de_info: {
      value: awsPartitionSerDeInfoPropertyToHclTerraform(struct!.serDeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SerDeInfoPropertyList",
    },
    skewed_info: {
      value: awsPartitionSkewedInfoPropertyToHclTerraform(struct!.skewedInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SkewedInfoPropertyList",
    },
    sort_columns: {
      value: cdktn.listMapperHcl(awsPartitionSortColumnsPropertyToHclTerraform, true)(struct!.sortColumns),
      isBlock: true,
      type: "list",
      storageClassType: "SortColumnsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsPartition {
export interface ColumnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#comment AwsPartition#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#name AwsPartition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#type AwsPartition#type}
  */
  readonly type?: string;
}
export class ColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ColumnsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
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

  public set internalValue(value: ColumnsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

export class ColumnsPropertyList extends cdktn.ComplexList {
  public internalValue? : ColumnsProperty[] | cdktn.IResolvable

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
  public get(index: number): ColumnsPropertyOutputReference {
    return new ColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SerDeInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#name AwsPartition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#parameters AwsPartition#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#serialization_library AwsPartition#serialization_library}
  */
  readonly serializationLibrary?: string;
}
export class SerDeInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SerDeInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serializationLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializationLibrary = this._serializationLibrary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SerDeInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._parameters = undefined;
      this._serializationLibrary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._parameters = value.parameters;
      this._serializationLibrary = value.serializationLibrary;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // serialization_library - computed: false, optional: true, required: false
  private _serializationLibrary?: string; 
  public get serializationLibrary() {
    return this.getStringAttribute('serialization_library');
  }
  public set serializationLibrary(value: string) {
    this._serializationLibrary = value;
  }
  public resetSerializationLibrary() {
    this._serializationLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibraryInput() {
    return this._serializationLibrary;
  }
}
export interface SkewedInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#skewed_column_names AwsPartition#skewed_column_names}
  */
  readonly skewedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#skewed_column_value_location_maps AwsPartition#skewed_column_value_location_maps}
  */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#skewed_column_values AwsPartition#skewed_column_values}
  */
  readonly skewedColumnValues?: string[];
}
export class SkewedInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SkewedInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skewedColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnNames = this._skewedColumnNames;
    }
    if (this._skewedColumnValueLocationMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnValueLocationMaps = this._skewedColumnValueLocationMaps;
    }
    if (this._skewedColumnValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnValues = this._skewedColumnValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SkewedInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skewedColumnNames = undefined;
      this._skewedColumnValueLocationMaps = undefined;
      this._skewedColumnValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skewedColumnNames = value.skewedColumnNames;
      this._skewedColumnValueLocationMaps = value.skewedColumnValueLocationMaps;
      this._skewedColumnValues = value.skewedColumnValues;
    }
  }

  // skewed_column_names - computed: false, optional: true, required: false
  private _skewedColumnNames?: string[]; 
  public get skewedColumnNames() {
    return this.getListAttribute('skewed_column_names');
  }
  public set skewedColumnNames(value: string[]) {
    this._skewedColumnNames = value;
  }
  public resetSkewedColumnNames() {
    this._skewedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnNamesInput() {
    return this._skewedColumnNames;
  }

  // skewed_column_value_location_maps - computed: false, optional: true, required: false
  private _skewedColumnValueLocationMaps?: { [key: string]: string }; 
  public get skewedColumnValueLocationMaps() {
    return this.getStringMapAttribute('skewed_column_value_location_maps');
  }
  public set skewedColumnValueLocationMaps(value: { [key: string]: string }) {
    this._skewedColumnValueLocationMaps = value;
  }
  public resetSkewedColumnValueLocationMaps() {
    this._skewedColumnValueLocationMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValueLocationMapsInput() {
    return this._skewedColumnValueLocationMaps;
  }

  // skewed_column_values - computed: false, optional: true, required: false
  private _skewedColumnValues?: string[]; 
  public get skewedColumnValues() {
    return this.getListAttribute('skewed_column_values');
  }
  public set skewedColumnValues(value: string[]) {
    this._skewedColumnValues = value;
  }
  public resetSkewedColumnValues() {
    this._skewedColumnValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValuesInput() {
    return this._skewedColumnValues;
  }
}
export interface SortColumnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#column AwsPartition#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#sort_order AwsPartition#sort_order}
  */
  readonly sortOrder: number;
}
export class SortColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SortColumnsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SortColumnsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._sortOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._sortOrder = value.sortOrder;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // sort_order - computed: false, optional: false, required: true
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }
}

export class SortColumnsPropertyList extends cdktn.ComplexList {
  public internalValue? : SortColumnsProperty[] | cdktn.IResolvable

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
  public get(index: number): SortColumnsPropertyOutputReference {
    return new SortColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageDescriptorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#additional_locations AwsPartition#additional_locations}
  */
  readonly additionalLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#bucket_columns AwsPartition#bucket_columns}
  */
  readonly bucketColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#compressed AwsPartition#compressed}
  */
  readonly compressed?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#input_format AwsPartition#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#location AwsPartition#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#number_of_buckets AwsPartition#number_of_buckets}
  */
  readonly numberOfBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#output_format AwsPartition#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#parameters AwsPartition#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#stored_as_sub_directories AwsPartition#stored_as_sub_directories}
  */
  readonly storedAsSubDirectories?: boolean | cdktn.IResolvable;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#columns AwsPartition#columns}
  */
  readonly columns?: ColumnsProperty[] | cdktn.IResolvable;
  /**
  * ser_de_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#ser_de_info AwsPartition#ser_de_info}
  */
  readonly serDeInfo?: SerDeInfoProperty;
  /**
  * skewed_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#skewed_info AwsPartition#skewed_info}
  */
  readonly skewedInfo?: SkewedInfoProperty;
  /**
  * sort_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_partition#sort_columns AwsPartition#sort_columns}
  */
  readonly sortColumns?: SortColumnsProperty[] | cdktn.IResolvable;
}
export class StorageDescriptorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageDescriptorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLocations = this._additionalLocations;
    }
    if (this._bucketColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketColumns = this._bucketColumns;
    }
    if (this._compressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressed = this._compressed;
    }
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._numberOfBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfBuckets = this._numberOfBuckets;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._storedAsSubDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedAsSubDirectories = this._storedAsSubDirectories;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._serDeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serDeInfo = this._serDeInfo?.internalValue;
    }
    if (this._skewedInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedInfo = this._skewedInfo?.internalValue;
    }
    if (this._sortColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortColumns = this._sortColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageDescriptorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalLocations = undefined;
      this._bucketColumns = undefined;
      this._compressed = undefined;
      this._inputFormat = undefined;
      this._location = undefined;
      this._numberOfBuckets = undefined;
      this._outputFormat = undefined;
      this._parameters = undefined;
      this._storedAsSubDirectories = undefined;
      this._columns.internalValue = undefined;
      this._serDeInfo.internalValue = undefined;
      this._skewedInfo.internalValue = undefined;
      this._sortColumns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalLocations = value.additionalLocations;
      this._bucketColumns = value.bucketColumns;
      this._compressed = value.compressed;
      this._inputFormat = value.inputFormat;
      this._location = value.location;
      this._numberOfBuckets = value.numberOfBuckets;
      this._outputFormat = value.outputFormat;
      this._parameters = value.parameters;
      this._storedAsSubDirectories = value.storedAsSubDirectories;
      this._columns.internalValue = value.columns;
      this._serDeInfo.internalValue = value.serDeInfo;
      this._skewedInfo.internalValue = value.skewedInfo;
      this._sortColumns.internalValue = value.sortColumns;
    }
  }

  // additional_locations - computed: false, optional: true, required: false
  private _additionalLocations?: string[]; 
  public get additionalLocations() {
    return this.getListAttribute('additional_locations');
  }
  public set additionalLocations(value: string[]) {
    this._additionalLocations = value;
  }
  public resetAdditionalLocations() {
    this._additionalLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLocationsInput() {
    return this._additionalLocations;
  }

  // bucket_columns - computed: false, optional: true, required: false
  private _bucketColumns?: string[]; 
  public get bucketColumns() {
    return this.getListAttribute('bucket_columns');
  }
  public set bucketColumns(value: string[]) {
    this._bucketColumns = value;
  }
  public resetBucketColumns() {
    this._bucketColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketColumnsInput() {
    return this._bucketColumns;
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktn.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }
  public set compressed(value: boolean | cdktn.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // number_of_buckets - computed: false, optional: true, required: false
  private _numberOfBuckets?: number; 
  public get numberOfBuckets() {
    return this.getNumberAttribute('number_of_buckets');
  }
  public set numberOfBuckets(value: number) {
    this._numberOfBuckets = value;
  }
  public resetNumberOfBuckets() {
    this._numberOfBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBucketsInput() {
    return this._numberOfBuckets;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // stored_as_sub_directories - computed: false, optional: true, required: false
  private _storedAsSubDirectories?: boolean | cdktn.IResolvable; 
  public get storedAsSubDirectories() {
    return this.getBooleanAttribute('stored_as_sub_directories');
  }
  public set storedAsSubDirectories(value: boolean | cdktn.IResolvable) {
    this._storedAsSubDirectories = value;
  }
  public resetStoredAsSubDirectories() {
    this._storedAsSubDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedAsSubDirectoriesInput() {
    return this._storedAsSubDirectories;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new ColumnsPropertyList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: ColumnsProperty[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // ser_de_info - computed: false, optional: true, required: false
  private _serDeInfo = new SerDeInfoPropertyOutputReference(this, "ser_de_info");
  public get serDeInfo() {
    return this._serDeInfo;
  }
  public putSerDeInfo(value: SerDeInfoProperty) {
    this._serDeInfo.internalValue = value;
  }
  public resetSerDeInfo() {
    this._serDeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serDeInfoInput() {
    return this._serDeInfo.internalValue;
  }

  // skewed_info - computed: false, optional: true, required: false
  private _skewedInfo = new SkewedInfoPropertyOutputReference(this, "skewed_info");
  public get skewedInfo() {
    return this._skewedInfo;
  }
  public putSkewedInfo(value: SkewedInfoProperty) {
    this._skewedInfo.internalValue = value;
  }
  public resetSkewedInfo() {
    this._skewedInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedInfoInput() {
    return this._skewedInfo.internalValue;
  }

  // sort_columns - computed: false, optional: true, required: false
  private _sortColumns = new SortColumnsPropertyList(this, "sort_columns", false);
  public get sortColumns() {
    return this._sortColumns;
  }
  public putSortColumns(value: SortColumnsProperty[] | cdktn.IResolvable) {
    this._sortColumns.internalValue = value;
  }
  public resetSortColumns() {
    this._sortColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColumnsInput() {
    return this._sortColumns.internalValue;
  }
}
}
