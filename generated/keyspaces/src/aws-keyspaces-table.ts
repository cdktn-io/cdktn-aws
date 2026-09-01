// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsKeyspacesTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#default_time_to_live AwsKeyspacesTable#default_time_to_live}
  */
  readonly defaultTimeToLive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#id AwsKeyspacesTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#keyspace_name AwsKeyspacesTable#keyspace_name}
  */
  readonly keyspaceName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#region AwsKeyspacesTable#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#table_name AwsKeyspacesTable#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#tags AwsKeyspacesTable#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#tags_all AwsKeyspacesTable#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * capacity_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#capacity_specification AwsKeyspacesTable#capacity_specification}
  */
  readonly capacitySpecification?: AwsKeyspacesTable.CapacitySpecificationProperty;
  /**
  * client_side_timestamps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#client_side_timestamps AwsKeyspacesTable#client_side_timestamps}
  */
  readonly clientSideTimestamps?: AwsKeyspacesTable.ClientSideTimestampsProperty;
  /**
  * comment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#comment AwsKeyspacesTable#comment}
  */
  readonly comment?: AwsKeyspacesTable.CommentProperty;
  /**
  * encryption_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#encryption_specification AwsKeyspacesTable#encryption_specification}
  */
  readonly encryptionSpecification?: AwsKeyspacesTable.EncryptionSpecificationProperty;
  /**
  * point_in_time_recovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#point_in_time_recovery AwsKeyspacesTable#point_in_time_recovery}
  */
  readonly pointInTimeRecovery?: AwsKeyspacesTable.PointInTimeRecoveryProperty;
  /**
  * schema_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#schema_definition AwsKeyspacesTable#schema_definition}
  */
  readonly schemaDefinition: AwsKeyspacesTable.SchemaDefinitionProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#timeouts AwsKeyspacesTable#timeouts}
  */
  readonly timeouts?: AwsKeyspacesTable.TimeoutsProperty;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#ttl AwsKeyspacesTable#ttl}
  */
  readonly ttl?: AwsKeyspacesTable.TtlProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table aws_keyspaces_table}
*/
export class AwsKeyspacesTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_keyspaces_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsKeyspacesTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsKeyspacesTable to import
  * @param importFromId The id of the existing AwsKeyspacesTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsKeyspacesTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_keyspaces_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table aws_keyspaces_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsKeyspacesTableConfig
  */
  public constructor(scope: Construct, id: string, config: AwsKeyspacesTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_keyspaces_table',
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
    this._defaultTimeToLive = config.defaultTimeToLive;
    this._id = config.id;
    this._keyspaceName = config.keyspaceName;
    this._region = config.region;
    this._tableName = config.tableName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._capacitySpecification.internalValue = config.capacitySpecification;
    this._clientSideTimestamps.internalValue = config.clientSideTimestamps;
    this._comment.internalValue = config.comment;
    this._encryptionSpecification.internalValue = config.encryptionSpecification;
    this._pointInTimeRecovery.internalValue = config.pointInTimeRecovery;
    this._schemaDefinition.internalValue = config.schemaDefinition;
    this._timeouts.internalValue = config.timeouts;
    this._ttl.internalValue = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_time_to_live - computed: false, optional: true, required: false
  private _defaultTimeToLive?: number; 
  public get defaultTimeToLive() {
    return this.getNumberAttribute('default_time_to_live');
  }
  public set defaultTimeToLive(value: number) {
    this._defaultTimeToLive = value;
  }
  public resetDefaultTimeToLive() {
    this._defaultTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeToLiveInput() {
    return this._defaultTimeToLive;
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

  // keyspace_name - computed: false, optional: false, required: true
  private _keyspaceName?: string; 
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }
  public set keyspaceName(value: string) {
    this._keyspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceNameInput() {
    return this._keyspaceName;
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

  // capacity_specification - computed: false, optional: true, required: false
  private _capacitySpecification = new AwsKeyspacesTable.CapacitySpecificationPropertyOutputReference(this, "capacity_specification");
  public get capacitySpecification() {
    return this._capacitySpecification;
  }
  public putCapacitySpecification(value: AwsKeyspacesTable.CapacitySpecificationProperty) {
    this._capacitySpecification.internalValue = value;
  }
  public resetCapacitySpecification() {
    this._capacitySpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacitySpecificationInput() {
    return this._capacitySpecification.internalValue;
  }

  // client_side_timestamps - computed: false, optional: true, required: false
  private _clientSideTimestamps = new AwsKeyspacesTable.ClientSideTimestampsPropertyOutputReference(this, "client_side_timestamps");
  public get clientSideTimestamps() {
    return this._clientSideTimestamps;
  }
  public putClientSideTimestamps(value: AwsKeyspacesTable.ClientSideTimestampsProperty) {
    this._clientSideTimestamps.internalValue = value;
  }
  public resetClientSideTimestamps() {
    this._clientSideTimestamps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideTimestampsInput() {
    return this._clientSideTimestamps.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment = new AwsKeyspacesTable.CommentPropertyOutputReference(this, "comment");
  public get comment() {
    return this._comment;
  }
  public putComment(value: AwsKeyspacesTable.CommentProperty) {
    this._comment.internalValue = value;
  }
  public resetComment() {
    this._comment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment.internalValue;
  }

  // encryption_specification - computed: false, optional: true, required: false
  private _encryptionSpecification = new AwsKeyspacesTable.EncryptionSpecificationPropertyOutputReference(this, "encryption_specification");
  public get encryptionSpecification() {
    return this._encryptionSpecification;
  }
  public putEncryptionSpecification(value: AwsKeyspacesTable.EncryptionSpecificationProperty) {
    this._encryptionSpecification.internalValue = value;
  }
  public resetEncryptionSpecification() {
    this._encryptionSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecificationInput() {
    return this._encryptionSpecification.internalValue;
  }

  // point_in_time_recovery - computed: false, optional: true, required: false
  private _pointInTimeRecovery = new AwsKeyspacesTable.PointInTimeRecoveryPropertyOutputReference(this, "point_in_time_recovery");
  public get pointInTimeRecovery() {
    return this._pointInTimeRecovery;
  }
  public putPointInTimeRecovery(value: AwsKeyspacesTable.PointInTimeRecoveryProperty) {
    this._pointInTimeRecovery.internalValue = value;
  }
  public resetPointInTimeRecovery() {
    this._pointInTimeRecovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryInput() {
    return this._pointInTimeRecovery.internalValue;
  }

  // schema_definition - computed: false, optional: false, required: true
  private _schemaDefinition = new AwsKeyspacesTable.SchemaDefinitionPropertyOutputReference(this, "schema_definition");
  public get schemaDefinition() {
    return this._schemaDefinition;
  }
  public putSchemaDefinition(value: AwsKeyspacesTable.SchemaDefinitionProperty) {
    this._schemaDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsKeyspacesTable.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsKeyspacesTable.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new AwsKeyspacesTable.TtlPropertyOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: AwsKeyspacesTable.TtlProperty) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_time_to_live: cdktn.numberToTerraform(this._defaultTimeToLive),
      id: cdktn.stringToTerraform(this._id),
      keyspace_name: cdktn.stringToTerraform(this._keyspaceName),
      region: cdktn.stringToTerraform(this._region),
      table_name: cdktn.stringToTerraform(this._tableName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      capacity_specification: awsKeyspacesTableCapacitySpecificationPropertyToTerraform(this._capacitySpecification.internalValue),
      client_side_timestamps: awsKeyspacesTableClientSideTimestampsPropertyToTerraform(this._clientSideTimestamps.internalValue),
      comment: awsKeyspacesTableCommentPropertyToTerraform(this._comment.internalValue),
      encryption_specification: awsKeyspacesTableEncryptionSpecificationPropertyToTerraform(this._encryptionSpecification.internalValue),
      point_in_time_recovery: awsKeyspacesTablePointInTimeRecoveryPropertyToTerraform(this._pointInTimeRecovery.internalValue),
      schema_definition: awsKeyspacesTableSchemaDefinitionPropertyToTerraform(this._schemaDefinition.internalValue),
      timeouts: awsKeyspacesTableTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      ttl: awsKeyspacesTableTtlPropertyToTerraform(this._ttl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_time_to_live: {
        value: cdktn.numberToHclTerraform(this._defaultTimeToLive),
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
      keyspace_name: {
        value: cdktn.stringToHclTerraform(this._keyspaceName),
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
      capacity_specification: {
        value: awsKeyspacesTableCapacitySpecificationPropertyToHclTerraform(this._capacitySpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKeyspacesTable.CapacitySpecificationPropertyList",
      },
      client_side_timestamps: {
        value: awsKeyspacesTableClientSideTimestampsPropertyToHclTerraform(this._clientSideTimestamps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKeyspacesTable.ClientSideTimestampsPropertyList",
      },
      comment: {
        value: awsKeyspacesTableCommentPropertyToHclTerraform(this._comment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKeyspacesTable.CommentPropertyList",
      },
      encryption_specification: {
        value: awsKeyspacesTableEncryptionSpecificationPropertyToHclTerraform(this._encryptionSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKeyspacesTable.EncryptionSpecificationPropertyList",
      },
      point_in_time_recovery: {
        value: awsKeyspacesTablePointInTimeRecoveryPropertyToHclTerraform(this._pointInTimeRecovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKeyspacesTable.PointInTimeRecoveryPropertyList",
      },
      schema_definition: {
        value: awsKeyspacesTableSchemaDefinitionPropertyToHclTerraform(this._schemaDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKeyspacesTable.SchemaDefinitionPropertyList",
      },
      timeouts: {
        value: awsKeyspacesTableTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsKeyspacesTable.TimeoutsProperty",
      },
      ttl: {
        value: awsKeyspacesTableTtlPropertyToHclTerraform(this._ttl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsKeyspacesTable.TtlPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsKeyspacesTableCapacitySpecificationPropertyToTerraform(struct?: AwsKeyspacesTable.CapacitySpecificationPropertyOutputReference | AwsKeyspacesTable.CapacitySpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
    throughput_mode: cdktn.stringToTerraform(struct!.throughputMode),
    write_capacity_units: cdktn.numberToTerraform(struct!.writeCapacityUnits),
  }
}


export function awsKeyspacesTableCapacitySpecificationPropertyToHclTerraform(struct?: AwsKeyspacesTable.CapacitySpecificationPropertyOutputReference | AwsKeyspacesTable.CapacitySpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput_mode: {
      value: cdktn.stringToHclTerraform(struct!.throughputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_capacity_units: {
      value: cdktn.numberToHclTerraform(struct!.writeCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKeyspacesTableClientSideTimestampsPropertyToTerraform(struct?: AwsKeyspacesTable.ClientSideTimestampsPropertyOutputReference | AwsKeyspacesTable.ClientSideTimestampsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsKeyspacesTableClientSideTimestampsPropertyToHclTerraform(struct?: AwsKeyspacesTable.ClientSideTimestampsPropertyOutputReference | AwsKeyspacesTable.ClientSideTimestampsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsKeyspacesTableCommentPropertyToTerraform(struct?: AwsKeyspacesTable.CommentPropertyOutputReference | AwsKeyspacesTable.CommentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
  }
}


export function awsKeyspacesTableCommentPropertyToHclTerraform(struct?: AwsKeyspacesTable.CommentPropertyOutputReference | AwsKeyspacesTable.CommentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKeyspacesTableEncryptionSpecificationPropertyToTerraform(struct?: AwsKeyspacesTable.EncryptionSpecificationPropertyOutputReference | AwsKeyspacesTable.EncryptionSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_identifier: cdktn.stringToTerraform(struct!.kmsKeyIdentifier),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsKeyspacesTableEncryptionSpecificationPropertyToHclTerraform(struct?: AwsKeyspacesTable.EncryptionSpecificationPropertyOutputReference | AwsKeyspacesTable.EncryptionSpecificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_identifier: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyIdentifier),
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


export function awsKeyspacesTablePointInTimeRecoveryPropertyToTerraform(struct?: AwsKeyspacesTable.PointInTimeRecoveryPropertyOutputReference | AwsKeyspacesTable.PointInTimeRecoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsKeyspacesTablePointInTimeRecoveryPropertyToHclTerraform(struct?: AwsKeyspacesTable.PointInTimeRecoveryPropertyOutputReference | AwsKeyspacesTable.PointInTimeRecoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsKeyspacesTableClusteringKeyPropertyToTerraform(struct?: AwsKeyspacesTable.ClusteringKeyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    order_by: cdktn.stringToTerraform(struct!.orderBy),
  }
}


export function awsKeyspacesTableClusteringKeyPropertyToHclTerraform(struct?: AwsKeyspacesTable.ClusteringKeyProperty | cdktn.IResolvable): any {
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
    order_by: {
      value: cdktn.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKeyspacesTableColumnPropertyToTerraform(struct?: AwsKeyspacesTable.ColumnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsKeyspacesTableColumnPropertyToHclTerraform(struct?: AwsKeyspacesTable.ColumnProperty | cdktn.IResolvable): any {
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


export function awsKeyspacesTablePartitionKeyPropertyToTerraform(struct?: AwsKeyspacesTable.PartitionKeyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsKeyspacesTablePartitionKeyPropertyToHclTerraform(struct?: AwsKeyspacesTable.PartitionKeyProperty | cdktn.IResolvable): any {
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


export function awsKeyspacesTableStaticColumnPropertyToTerraform(struct?: AwsKeyspacesTable.StaticColumnProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function awsKeyspacesTableStaticColumnPropertyToHclTerraform(struct?: AwsKeyspacesTable.StaticColumnProperty | cdktn.IResolvable): any {
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


export function awsKeyspacesTableSchemaDefinitionPropertyToTerraform(struct?: AwsKeyspacesTable.SchemaDefinitionPropertyOutputReference | AwsKeyspacesTable.SchemaDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clustering_key: cdktn.listMapper(awsKeyspacesTableClusteringKeyPropertyToTerraform, true)(struct!.clusteringKey),
    column: cdktn.listMapper(awsKeyspacesTableColumnPropertyToTerraform, true)(struct!.column),
    partition_key: cdktn.listMapper(awsKeyspacesTablePartitionKeyPropertyToTerraform, true)(struct!.partitionKey),
    static_column: cdktn.listMapper(awsKeyspacesTableStaticColumnPropertyToTerraform, true)(struct!.staticColumn),
  }
}


export function awsKeyspacesTableSchemaDefinitionPropertyToHclTerraform(struct?: AwsKeyspacesTable.SchemaDefinitionPropertyOutputReference | AwsKeyspacesTable.SchemaDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clustering_key: {
      value: cdktn.listMapperHcl(awsKeyspacesTableClusteringKeyPropertyToHclTerraform, true)(struct!.clusteringKey),
      isBlock: true,
      type: "list",
      storageClassType: "ClusteringKeyPropertyList",
    },
    column: {
      value: cdktn.listMapperHcl(awsKeyspacesTableColumnPropertyToHclTerraform, true)(struct!.column),
      isBlock: true,
      type: "set",
      storageClassType: "ColumnPropertyList",
    },
    partition_key: {
      value: cdktn.listMapperHcl(awsKeyspacesTablePartitionKeyPropertyToHclTerraform, true)(struct!.partitionKey),
      isBlock: true,
      type: "list",
      storageClassType: "PartitionKeyPropertyList",
    },
    static_column: {
      value: cdktn.listMapperHcl(awsKeyspacesTableStaticColumnPropertyToHclTerraform, true)(struct!.staticColumn),
      isBlock: true,
      type: "set",
      storageClassType: "StaticColumnPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsKeyspacesTableTimeoutsPropertyToTerraform(struct?: AwsKeyspacesTable.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsKeyspacesTableTimeoutsPropertyToHclTerraform(struct?: AwsKeyspacesTable.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsKeyspacesTableTtlPropertyToTerraform(struct?: AwsKeyspacesTable.TtlPropertyOutputReference | AwsKeyspacesTable.TtlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsKeyspacesTableTtlPropertyToHclTerraform(struct?: AwsKeyspacesTable.TtlPropertyOutputReference | AwsKeyspacesTable.TtlProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export namespace AwsKeyspacesTable {
export interface CapacitySpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#read_capacity_units AwsKeyspacesTable#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#throughput_mode AwsKeyspacesTable#throughput_mode}
  */
  readonly throughputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#write_capacity_units AwsKeyspacesTable#write_capacity_units}
  */
  readonly writeCapacityUnits?: number;
}
export class CapacitySpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacitySpecificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    if (this._throughputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputMode = this._throughputMode;
    }
    if (this._writeCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacitySpecificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._readCapacityUnits = undefined;
      this._throughputMode = undefined;
      this._writeCapacityUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._readCapacityUnits = value.readCapacityUnits;
      this._throughputMode = value.throughputMode;
      this._writeCapacityUnits = value.writeCapacityUnits;
    }
  }

  // read_capacity_units - computed: false, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }

  // throughput_mode - computed: true, optional: true, required: false
  private _throughputMode?: string; 
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
  public set throughputMode(value: string) {
    this._throughputMode = value;
  }
  public resetThroughputMode() {
    this._throughputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputModeInput() {
    return this._throughputMode;
  }

  // write_capacity_units - computed: false, optional: true, required: false
  private _writeCapacityUnits?: number; 
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
  public set writeCapacityUnits(value: number) {
    this._writeCapacityUnits = value;
  }
  public resetWriteCapacityUnits() {
    this._writeCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityUnitsInput() {
    return this._writeCapacityUnits;
  }
}
export interface ClientSideTimestampsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#status AwsKeyspacesTable#status}
  */
  readonly status: string;
}
export class ClientSideTimestampsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientSideTimestampsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientSideTimestampsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface CommentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#message AwsKeyspacesTable#message}
  */
  readonly message?: string;
}
export class CommentPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CommentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface EncryptionSpecificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#kms_key_identifier AwsKeyspacesTable#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#type AwsKeyspacesTable#type}
  */
  readonly type?: string;
}
export class EncryptionSpecificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionSpecificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyIdentifier = this._kmsKeyIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionSpecificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyIdentifier = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyIdentifier = value.kmsKeyIdentifier;
      this._type = value.type;
    }
  }

  // kms_key_identifier - computed: false, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
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
}
export interface PointInTimeRecoveryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#status AwsKeyspacesTable#status}
  */
  readonly status?: string;
}
export class PointInTimeRecoveryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PointInTimeRecoveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PointInTimeRecoveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
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
export interface ClusteringKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#name AwsKeyspacesTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#order_by AwsKeyspacesTable#order_by}
  */
  readonly orderBy: string;
}
export class ClusteringKeyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClusteringKeyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusteringKeyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._orderBy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._orderBy = value.orderBy;
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

  // order_by - computed: false, optional: false, required: true
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }
}

export class ClusteringKeyPropertyList extends cdktn.ComplexList {
  public internalValue? : ClusteringKeyProperty[] | cdktn.IResolvable

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
  public get(index: number): ClusteringKeyPropertyOutputReference {
    return new ClusteringKeyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ColumnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#name AwsKeyspacesTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#type AwsKeyspacesTable#type}
  */
  readonly type: string;
}
export class ColumnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ColumnProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ColumnProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
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

export class ColumnPropertyList extends cdktn.ComplexList {
  public internalValue? : ColumnProperty[] | cdktn.IResolvable

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
  public get(index: number): ColumnPropertyOutputReference {
    return new ColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PartitionKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#name AwsKeyspacesTable#name}
  */
  readonly name: string;
}
export class PartitionKeyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PartitionKeyProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PartitionKeyProperty | cdktn.IResolvable | undefined) {
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

export class PartitionKeyPropertyList extends cdktn.ComplexList {
  public internalValue? : PartitionKeyProperty[] | cdktn.IResolvable

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
  public get(index: number): PartitionKeyPropertyOutputReference {
    return new PartitionKeyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticColumnProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#name AwsKeyspacesTable#name}
  */
  readonly name: string;
}
export class StaticColumnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StaticColumnProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StaticColumnProperty | cdktn.IResolvable | undefined) {
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

export class StaticColumnPropertyList extends cdktn.ComplexList {
  public internalValue? : StaticColumnProperty[] | cdktn.IResolvable

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
  public get(index: number): StaticColumnPropertyOutputReference {
    return new StaticColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchemaDefinitionProperty {
  /**
  * clustering_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#clustering_key AwsKeyspacesTable#clustering_key}
  */
  readonly clusteringKey?: ClusteringKeyProperty[] | cdktn.IResolvable;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#column AwsKeyspacesTable#column}
  */
  readonly column: ColumnProperty[] | cdktn.IResolvable;
  /**
  * partition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#partition_key AwsKeyspacesTable#partition_key}
  */
  readonly partitionKey: PartitionKeyProperty[] | cdktn.IResolvable;
  /**
  * static_column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#static_column AwsKeyspacesTable#static_column}
  */
  readonly staticColumn?: StaticColumnProperty[] | cdktn.IResolvable;
}
export class SchemaDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusteringKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusteringKey = this._clusteringKey?.internalValue;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._partitionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey?.internalValue;
    }
    if (this._staticColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticColumn = this._staticColumn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusteringKey.internalValue = undefined;
      this._column.internalValue = undefined;
      this._partitionKey.internalValue = undefined;
      this._staticColumn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusteringKey.internalValue = value.clusteringKey;
      this._column.internalValue = value.column;
      this._partitionKey.internalValue = value.partitionKey;
      this._staticColumn.internalValue = value.staticColumn;
    }
  }

  // clustering_key - computed: false, optional: true, required: false
  private _clusteringKey = new ClusteringKeyPropertyList(this, "clustering_key", false);
  public get clusteringKey() {
    return this._clusteringKey;
  }
  public putClusteringKey(value: ClusteringKeyProperty[] | cdktn.IResolvable) {
    this._clusteringKey.internalValue = value;
  }
  public resetClusteringKey() {
    this._clusteringKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringKeyInput() {
    return this._clusteringKey.internalValue;
  }

  // column - computed: false, optional: false, required: true
  private _column = new ColumnPropertyList(this, "column", true);
  public get column() {
    return this._column;
  }
  public putColumn(value: ColumnProperty[] | cdktn.IResolvable) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // partition_key - computed: false, optional: false, required: true
  private _partitionKey = new PartitionKeyPropertyList(this, "partition_key", false);
  public get partitionKey() {
    return this._partitionKey;
  }
  public putPartitionKey(value: PartitionKeyProperty[] | cdktn.IResolvable) {
    this._partitionKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey.internalValue;
  }

  // static_column - computed: false, optional: true, required: false
  private _staticColumn = new StaticColumnPropertyList(this, "static_column", true);
  public get staticColumn() {
    return this._staticColumn;
  }
  public putStaticColumn(value: StaticColumnProperty[] | cdktn.IResolvable) {
    this._staticColumn.internalValue = value;
  }
  public resetStaticColumn() {
    this._staticColumn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticColumnInput() {
    return this._staticColumn.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#create AwsKeyspacesTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#delete AwsKeyspacesTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#update AwsKeyspacesTable#update}
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
export interface TtlProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/keyspaces_table#status AwsKeyspacesTable#status}
  */
  readonly status: string;
}
export class TtlPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TtlProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TtlProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
}
