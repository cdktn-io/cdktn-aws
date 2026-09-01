// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsFsxDataRepositoryAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#batch_import_meta_data_on_create AwsFsxDataRepositoryAssociation#batch_import_meta_data_on_create}
  */
  readonly batchImportMetaDataOnCreate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#data_repository_path AwsFsxDataRepositoryAssociation#data_repository_path}
  */
  readonly dataRepositoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#delete_data_in_filesystem AwsFsxDataRepositoryAssociation#delete_data_in_filesystem}
  */
  readonly deleteDataInFilesystem?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#file_system_id AwsFsxDataRepositoryAssociation#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#file_system_path AwsFsxDataRepositoryAssociation#file_system_path}
  */
  readonly fileSystemPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#id AwsFsxDataRepositoryAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#imported_file_chunk_size AwsFsxDataRepositoryAssociation#imported_file_chunk_size}
  */
  readonly importedFileChunkSize?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#region AwsFsxDataRepositoryAssociation#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#tags AwsFsxDataRepositoryAssociation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#tags_all AwsFsxDataRepositoryAssociation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#s3 AwsFsxDataRepositoryAssociation#s3}
  */
  readonly s3?: AwsFsxDataRepositoryAssociation.S3Property;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#timeouts AwsFsxDataRepositoryAssociation#timeouts}
  */
  readonly timeouts?: AwsFsxDataRepositoryAssociation.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association aws_fsx_data_repository_association}
*/
export class AwsFsxDataRepositoryAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_data_repository_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsFsxDataRepositoryAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsFsxDataRepositoryAssociation to import
  * @param importFromId The id of the existing AwsFsxDataRepositoryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsFsxDataRepositoryAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_data_repository_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association aws_fsx_data_repository_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsFsxDataRepositoryAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsFsxDataRepositoryAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_data_repository_association',
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
    this._batchImportMetaDataOnCreate = config.batchImportMetaDataOnCreate;
    this._dataRepositoryPath = config.dataRepositoryPath;
    this._deleteDataInFilesystem = config.deleteDataInFilesystem;
    this._fileSystemId = config.fileSystemId;
    this._fileSystemPath = config.fileSystemPath;
    this._id = config.id;
    this._importedFileChunkSize = config.importedFileChunkSize;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._s3.internalValue = config.s3;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // batch_import_meta_data_on_create - computed: false, optional: true, required: false
  private _batchImportMetaDataOnCreate?: boolean | cdktn.IResolvable; 
  public get batchImportMetaDataOnCreate() {
    return this.getBooleanAttribute('batch_import_meta_data_on_create');
  }
  public set batchImportMetaDataOnCreate(value: boolean | cdktn.IResolvable) {
    this._batchImportMetaDataOnCreate = value;
  }
  public resetBatchImportMetaDataOnCreate() {
    this._batchImportMetaDataOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchImportMetaDataOnCreateInput() {
    return this._batchImportMetaDataOnCreate;
  }

  // data_repository_path - computed: false, optional: false, required: true
  private _dataRepositoryPath?: string; 
  public get dataRepositoryPath() {
    return this.getStringAttribute('data_repository_path');
  }
  public set dataRepositoryPath(value: string) {
    this._dataRepositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRepositoryPathInput() {
    return this._dataRepositoryPath;
  }

  // delete_data_in_filesystem - computed: false, optional: true, required: false
  private _deleteDataInFilesystem?: boolean | cdktn.IResolvable; 
  public get deleteDataInFilesystem() {
    return this.getBooleanAttribute('delete_data_in_filesystem');
  }
  public set deleteDataInFilesystem(value: boolean | cdktn.IResolvable) {
    this._deleteDataInFilesystem = value;
  }
  public resetDeleteDataInFilesystem() {
    this._deleteDataInFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDataInFilesystemInput() {
    return this._deleteDataInFilesystem;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: false, optional: false, required: true
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
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

  // imported_file_chunk_size - computed: true, optional: true, required: false
  private _importedFileChunkSize?: number; 
  public get importedFileChunkSize() {
    return this.getNumberAttribute('imported_file_chunk_size');
  }
  public set importedFileChunkSize(value: number) {
    this._importedFileChunkSize = value;
  }
  public resetImportedFileChunkSize() {
    this._importedFileChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedFileChunkSizeInput() {
    return this._importedFileChunkSize;
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

  // s3 - computed: false, optional: true, required: false
  private _s3 = new AwsFsxDataRepositoryAssociation.S3PropertyOutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: AwsFsxDataRepositoryAssociation.S3Property) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsFsxDataRepositoryAssociation.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsFsxDataRepositoryAssociation.TimeoutsProperty) {
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
      batch_import_meta_data_on_create: cdktn.booleanToTerraform(this._batchImportMetaDataOnCreate),
      data_repository_path: cdktn.stringToTerraform(this._dataRepositoryPath),
      delete_data_in_filesystem: cdktn.booleanToTerraform(this._deleteDataInFilesystem),
      file_system_id: cdktn.stringToTerraform(this._fileSystemId),
      file_system_path: cdktn.stringToTerraform(this._fileSystemPath),
      id: cdktn.stringToTerraform(this._id),
      imported_file_chunk_size: cdktn.numberToTerraform(this._importedFileChunkSize),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      s3: awsFsxDataRepositoryAssociationS3PropertyToTerraform(this._s3.internalValue),
      timeouts: awsFsxDataRepositoryAssociationTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_import_meta_data_on_create: {
        value: cdktn.booleanToHclTerraform(this._batchImportMetaDataOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_repository_path: {
        value: cdktn.stringToHclTerraform(this._dataRepositoryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_data_in_filesystem: {
        value: cdktn.booleanToHclTerraform(this._deleteDataInFilesystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_system_id: {
        value: cdktn.stringToHclTerraform(this._fileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_path: {
        value: cdktn.stringToHclTerraform(this._fileSystemPath),
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
      imported_file_chunk_size: {
        value: cdktn.numberToHclTerraform(this._importedFileChunkSize),
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
      s3: {
        value: awsFsxDataRepositoryAssociationS3PropertyToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsFsxDataRepositoryAssociation.S3PropertyList",
      },
      timeouts: {
        value: awsFsxDataRepositoryAssociationTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsFsxDataRepositoryAssociation.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsFsxDataRepositoryAssociationAutoExportPolicyPropertyToTerraform(struct?: AwsFsxDataRepositoryAssociation.AutoExportPolicyPropertyOutputReference | AwsFsxDataRepositoryAssociation.AutoExportPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
  }
}


export function awsFsxDataRepositoryAssociationAutoExportPolicyPropertyToHclTerraform(struct?: AwsFsxDataRepositoryAssociation.AutoExportPolicyPropertyOutputReference | AwsFsxDataRepositoryAssociation.AutoExportPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxDataRepositoryAssociationAutoImportPolicyPropertyToTerraform(struct?: AwsFsxDataRepositoryAssociation.AutoImportPolicyPropertyOutputReference | AwsFsxDataRepositoryAssociation.AutoImportPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
  }
}


export function awsFsxDataRepositoryAssociationAutoImportPolicyPropertyToHclTerraform(struct?: AwsFsxDataRepositoryAssociation.AutoImportPolicyPropertyOutputReference | AwsFsxDataRepositoryAssociation.AutoImportPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxDataRepositoryAssociationS3PropertyToTerraform(struct?: AwsFsxDataRepositoryAssociation.S3PropertyOutputReference | AwsFsxDataRepositoryAssociation.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_export_policy: awsFsxDataRepositoryAssociationAutoExportPolicyPropertyToTerraform(struct!.autoExportPolicy),
    auto_import_policy: awsFsxDataRepositoryAssociationAutoImportPolicyPropertyToTerraform(struct!.autoImportPolicy),
  }
}


export function awsFsxDataRepositoryAssociationS3PropertyToHclTerraform(struct?: AwsFsxDataRepositoryAssociation.S3PropertyOutputReference | AwsFsxDataRepositoryAssociation.S3Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_export_policy: {
      value: awsFsxDataRepositoryAssociationAutoExportPolicyPropertyToHclTerraform(struct!.autoExportPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AutoExportPolicyPropertyList",
    },
    auto_import_policy: {
      value: awsFsxDataRepositoryAssociationAutoImportPolicyPropertyToHclTerraform(struct!.autoImportPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AutoImportPolicyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsFsxDataRepositoryAssociationTimeoutsPropertyToTerraform(struct?: AwsFsxDataRepositoryAssociation.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsFsxDataRepositoryAssociationTimeoutsPropertyToHclTerraform(struct?: AwsFsxDataRepositoryAssociation.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsFsxDataRepositoryAssociation {
export interface AutoExportPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#events AwsFsxDataRepositoryAssociation#events}
  */
  readonly events?: string[];
}
export class AutoExportPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoExportPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoExportPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }
}
export interface AutoImportPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#events AwsFsxDataRepositoryAssociation#events}
  */
  readonly events?: string[];
}
export class AutoImportPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoImportPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoImportPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }
}
export interface S3Property {
  /**
  * auto_export_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#auto_export_policy AwsFsxDataRepositoryAssociation#auto_export_policy}
  */
  readonly autoExportPolicy?: AutoExportPolicyProperty;
  /**
  * auto_import_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#auto_import_policy AwsFsxDataRepositoryAssociation#auto_import_policy}
  */
  readonly autoImportPolicy?: AutoImportPolicyProperty;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoExportPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExportPolicy = this._autoExportPolicy?.internalValue;
    }
    if (this._autoImportPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoImportPolicy = this._autoImportPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoExportPolicy.internalValue = undefined;
      this._autoImportPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoExportPolicy.internalValue = value.autoExportPolicy;
      this._autoImportPolicy.internalValue = value.autoImportPolicy;
    }
  }

  // auto_export_policy - computed: false, optional: true, required: false
  private _autoExportPolicy = new AutoExportPolicyPropertyOutputReference(this, "auto_export_policy");
  public get autoExportPolicy() {
    return this._autoExportPolicy;
  }
  public putAutoExportPolicy(value: AutoExportPolicyProperty) {
    this._autoExportPolicy.internalValue = value;
  }
  public resetAutoExportPolicy() {
    this._autoExportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExportPolicyInput() {
    return this._autoExportPolicy.internalValue;
  }

  // auto_import_policy - computed: false, optional: true, required: false
  private _autoImportPolicy = new AutoImportPolicyPropertyOutputReference(this, "auto_import_policy");
  public get autoImportPolicy() {
    return this._autoImportPolicy;
  }
  public putAutoImportPolicy(value: AutoImportPolicyProperty) {
    this._autoImportPolicy.internalValue = value;
  }
  public resetAutoImportPolicy() {
    this._autoImportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoImportPolicyInput() {
    return this._autoImportPolicy.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#create AwsFsxDataRepositoryAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#delete AwsFsxDataRepositoryAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_data_repository_association#update AwsFsxDataRepositoryAssociation#update}
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
