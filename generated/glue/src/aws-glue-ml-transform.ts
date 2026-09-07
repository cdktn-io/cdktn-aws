// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsMlTransformConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#description AwsMlTransform#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#glue_version AwsMlTransform#glue_version}
  */
  readonly glueVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#id AwsMlTransform#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#max_capacity AwsMlTransform#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#max_retries AwsMlTransform#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#name AwsMlTransform#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#number_of_workers AwsMlTransform#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#region AwsMlTransform#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#role_arn AwsMlTransform#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#tags AwsMlTransform#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#tags_all AwsMlTransform#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#timeout AwsMlTransform#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#worker_type AwsMlTransform#worker_type}
  */
  readonly workerType?: string;
  /**
  * input_record_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#input_record_tables AwsMlTransform#input_record_tables}
  */
  readonly inputRecordTables: AwsMlTransform.InputRecordTablesProperty[] | cdktn.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#parameters AwsMlTransform#parameters}
  */
  readonly parameters: AwsMlTransform.ParametersProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform aws_glue_ml_transform}
*/
export class AwsMlTransform extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_ml_transform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsMlTransform resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsMlTransform to import
  * @param importFromId The id of the existing AwsMlTransform that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsMlTransform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_ml_transform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform aws_glue_ml_transform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsMlTransformConfig
  */
  public constructor(scope: Construct, id: string, config: AwsMlTransformConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_ml_transform',
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
    this._description = config.description;
    this._glueVersion = config.glueVersion;
    this._id = config.id;
    this._maxCapacity = config.maxCapacity;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._numberOfWorkers = config.numberOfWorkers;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeout = config.timeout;
    this._workerType = config.workerType;
    this._inputRecordTables.internalValue = config.inputRecordTables;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // glue_version - computed: true, optional: true, required: false
  private _glueVersion?: string; 
  public get glueVersion() {
    return this.getStringAttribute('glue_version');
  }
  public set glueVersion(value: string) {
    this._glueVersion = value;
  }
  public resetGlueVersion() {
    this._glueVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueVersionInput() {
    return this._glueVersion;
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

  // label_count - computed: true, optional: false, required: false
  public get labelCount() {
    return this.getNumberAttribute('label_count');
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
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

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number; 
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }
  public set numberOfWorkers(value: number) {
    this._numberOfWorkers = value;
  }
  public resetNumberOfWorkers() {
    this._numberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWorkersInput() {
    return this._numberOfWorkers;
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

  // schema - computed: true, optional: false, required: false
  private _schema = new AwsMlTransform.SchemaPropertyList(this, "schema", false);
  public get schema() {
    return this._schema;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string; 
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType;
  }

  // input_record_tables - computed: false, optional: false, required: true
  private _inputRecordTables = new AwsMlTransform.InputRecordTablesPropertyList(this, "input_record_tables", false);
  public get inputRecordTables() {
    return this._inputRecordTables;
  }
  public putInputRecordTables(value: AwsMlTransform.InputRecordTablesProperty[] | cdktn.IResolvable) {
    this._inputRecordTables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputRecordTablesInput() {
    return this._inputRecordTables.internalValue;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new AwsMlTransform.ParametersPropertyOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: AwsMlTransform.ParametersProperty) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      glue_version: cdktn.stringToTerraform(this._glueVersion),
      id: cdktn.stringToTerraform(this._id),
      max_capacity: cdktn.numberToTerraform(this._maxCapacity),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      name: cdktn.stringToTerraform(this._name),
      number_of_workers: cdktn.numberToTerraform(this._numberOfWorkers),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      timeout: cdktn.numberToTerraform(this._timeout),
      worker_type: cdktn.stringToTerraform(this._workerType),
      input_record_tables: cdktn.listMapper(awsMlTransformInputRecordTablesPropertyToTerraform, true)(this._inputRecordTables.internalValue),
      parameters: awsMlTransformParametersPropertyToTerraform(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glue_version: {
        value: cdktn.stringToHclTerraform(this._glueVersion),
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
      max_capacity: {
        value: cdktn.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
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
      number_of_workers: {
        value: cdktn.numberToHclTerraform(this._numberOfWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
      timeout: {
        value: cdktn.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_type: {
        value: cdktn.stringToHclTerraform(this._workerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_record_tables: {
        value: cdktn.listMapperHcl(awsMlTransformInputRecordTablesPropertyToHclTerraform, true)(this._inputRecordTables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMlTransform.InputRecordTablesPropertyList",
      },
      parameters: {
        value: awsMlTransformParametersPropertyToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsMlTransform.ParametersPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsMlTransformSchemaPropertyToTerraform(struct?: AwsMlTransform.SchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsMlTransformSchemaPropertyToHclTerraform(struct?: AwsMlTransform.SchemaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsMlTransformInputRecordTablesPropertyToTerraform(struct?: AwsMlTransform.InputRecordTablesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function awsMlTransformInputRecordTablesPropertyToHclTerraform(struct?: AwsMlTransform.InputRecordTablesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
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
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMlTransformFindMatchesParametersPropertyToTerraform(struct?: AwsMlTransform.FindMatchesParametersPropertyOutputReference | AwsMlTransform.FindMatchesParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accuracy_cost_trade_off: cdktn.numberToTerraform(struct!.accuracyCostTradeOff),
    enforce_provided_labels: cdktn.booleanToTerraform(struct!.enforceProvidedLabels),
    precision_recall_trade_off: cdktn.numberToTerraform(struct!.precisionRecallTradeOff),
    primary_key_column_name: cdktn.stringToTerraform(struct!.primaryKeyColumnName),
  }
}


export function awsMlTransformFindMatchesParametersPropertyToHclTerraform(struct?: AwsMlTransform.FindMatchesParametersPropertyOutputReference | AwsMlTransform.FindMatchesParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accuracy_cost_trade_off: {
      value: cdktn.numberToHclTerraform(struct!.accuracyCostTradeOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_provided_labels: {
      value: cdktn.booleanToHclTerraform(struct!.enforceProvidedLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    precision_recall_trade_off: {
      value: cdktn.numberToHclTerraform(struct!.precisionRecallTradeOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_key_column_name: {
      value: cdktn.stringToHclTerraform(struct!.primaryKeyColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsMlTransformParametersPropertyToTerraform(struct?: AwsMlTransform.ParametersPropertyOutputReference | AwsMlTransform.ParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transform_type: cdktn.stringToTerraform(struct!.transformType),
    find_matches_parameters: awsMlTransformFindMatchesParametersPropertyToTerraform(struct!.findMatchesParameters),
  }
}


export function awsMlTransformParametersPropertyToHclTerraform(struct?: AwsMlTransform.ParametersPropertyOutputReference | AwsMlTransform.ParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transform_type: {
      value: cdktn.stringToHclTerraform(struct!.transformType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    find_matches_parameters: {
      value: awsMlTransformFindMatchesParametersPropertyToHclTerraform(struct!.findMatchesParameters),
      isBlock: true,
      type: "list",
      storageClassType: "FindMatchesParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsMlTransform {
export interface SchemaProperty {
}
export class SchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SchemaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SchemaPropertyList extends cdktn.ComplexList {

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
export interface InputRecordTablesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#catalog_id AwsMlTransform#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#connection_name AwsMlTransform#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#database_name AwsMlTransform#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#table_name AwsMlTransform#table_name}
  */
  readonly tableName: string;
}
export class InputRecordTablesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InputRecordTablesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputRecordTablesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._connectionName = undefined;
      this._databaseName = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._connectionName = value.connectionName;
      this._databaseName = value.databaseName;
      this._tableName = value.tableName;
    }
  }

  // catalog_id - computed: false, optional: true, required: false
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

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
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
}

export class InputRecordTablesPropertyList extends cdktn.ComplexList {
  public internalValue? : InputRecordTablesProperty[] | cdktn.IResolvable

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
  public get(index: number): InputRecordTablesPropertyOutputReference {
    return new InputRecordTablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FindMatchesParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#accuracy_cost_trade_off AwsMlTransform#accuracy_cost_trade_off}
  */
  readonly accuracyCostTradeOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#enforce_provided_labels AwsMlTransform#enforce_provided_labels}
  */
  readonly enforceProvidedLabels?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#precision_recall_trade_off AwsMlTransform#precision_recall_trade_off}
  */
  readonly precisionRecallTradeOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#primary_key_column_name AwsMlTransform#primary_key_column_name}
  */
  readonly primaryKeyColumnName?: string;
}
export class FindMatchesParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FindMatchesParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accuracyCostTradeOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.accuracyCostTradeOff = this._accuracyCostTradeOff;
    }
    if (this._enforceProvidedLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceProvidedLabels = this._enforceProvidedLabels;
    }
    if (this._precisionRecallTradeOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.precisionRecallTradeOff = this._precisionRecallTradeOff;
    }
    if (this._primaryKeyColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyColumnName = this._primaryKeyColumnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FindMatchesParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accuracyCostTradeOff = undefined;
      this._enforceProvidedLabels = undefined;
      this._precisionRecallTradeOff = undefined;
      this._primaryKeyColumnName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accuracyCostTradeOff = value.accuracyCostTradeOff;
      this._enforceProvidedLabels = value.enforceProvidedLabels;
      this._precisionRecallTradeOff = value.precisionRecallTradeOff;
      this._primaryKeyColumnName = value.primaryKeyColumnName;
    }
  }

  // accuracy_cost_trade_off - computed: false, optional: true, required: false
  private _accuracyCostTradeOff?: number; 
  public get accuracyCostTradeOff() {
    return this.getNumberAttribute('accuracy_cost_trade_off');
  }
  public set accuracyCostTradeOff(value: number) {
    this._accuracyCostTradeOff = value;
  }
  public resetAccuracyCostTradeOff() {
    this._accuracyCostTradeOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accuracyCostTradeOffInput() {
    return this._accuracyCostTradeOff;
  }

  // enforce_provided_labels - computed: false, optional: true, required: false
  private _enforceProvidedLabels?: boolean | cdktn.IResolvable; 
  public get enforceProvidedLabels() {
    return this.getBooleanAttribute('enforce_provided_labels');
  }
  public set enforceProvidedLabels(value: boolean | cdktn.IResolvable) {
    this._enforceProvidedLabels = value;
  }
  public resetEnforceProvidedLabels() {
    this._enforceProvidedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceProvidedLabelsInput() {
    return this._enforceProvidedLabels;
  }

  // precision_recall_trade_off - computed: false, optional: true, required: false
  private _precisionRecallTradeOff?: number; 
  public get precisionRecallTradeOff() {
    return this.getNumberAttribute('precision_recall_trade_off');
  }
  public set precisionRecallTradeOff(value: number) {
    this._precisionRecallTradeOff = value;
  }
  public resetPrecisionRecallTradeOff() {
    this._precisionRecallTradeOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionRecallTradeOffInput() {
    return this._precisionRecallTradeOff;
  }

  // primary_key_column_name - computed: false, optional: true, required: false
  private _primaryKeyColumnName?: string; 
  public get primaryKeyColumnName() {
    return this.getStringAttribute('primary_key_column_name');
  }
  public set primaryKeyColumnName(value: string) {
    this._primaryKeyColumnName = value;
  }
  public resetPrimaryKeyColumnName() {
    this._primaryKeyColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyColumnNameInput() {
    return this._primaryKeyColumnName;
  }
}
export interface ParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#transform_type AwsMlTransform#transform_type}
  */
  readonly transformType: string;
  /**
  * find_matches_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_ml_transform#find_matches_parameters AwsMlTransform#find_matches_parameters}
  */
  readonly findMatchesParameters: FindMatchesParametersProperty;
}
export class ParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformType = this._transformType;
    }
    if (this._findMatchesParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findMatchesParameters = this._findMatchesParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformType = undefined;
      this._findMatchesParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformType = value.transformType;
      this._findMatchesParameters.internalValue = value.findMatchesParameters;
    }
  }

  // transform_type - computed: false, optional: false, required: true
  private _transformType?: string; 
  public get transformType() {
    return this.getStringAttribute('transform_type');
  }
  public set transformType(value: string) {
    this._transformType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformTypeInput() {
    return this._transformType;
  }

  // find_matches_parameters - computed: false, optional: false, required: true
  private _findMatchesParameters = new FindMatchesParametersPropertyOutputReference(this, "find_matches_parameters");
  public get findMatchesParameters() {
    return this._findMatchesParameters;
  }
  public putFindMatchesParameters(value: FindMatchesParametersProperty) {
    this._findMatchesParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findMatchesParametersInput() {
    return this._findMatchesParameters.internalValue;
  }
}
}
