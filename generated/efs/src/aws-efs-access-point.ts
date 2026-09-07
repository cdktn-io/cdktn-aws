// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsAccessPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#file_system_id AwsAccessPoint#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#id AwsAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#region AwsAccessPoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#tags AwsAccessPoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#tags_all AwsAccessPoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * posix_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#posix_user AwsAccessPoint#posix_user}
  */
  readonly posixUser?: AwsAccessPoint.PosixUserProperty;
  /**
  * root_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#root_directory AwsAccessPoint#root_directory}
  */
  readonly rootDirectory?: AwsAccessPoint.RootDirectoryProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point aws_efs_access_point}
*/
export class AwsAccessPoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_efs_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAccessPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAccessPoint to import
  * @param importFromId The id of the existing AwsAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_efs_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point aws_efs_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_efs_access_point',
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
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._posixUser.internalValue = config.posixUser;
    this._rootDirectory.internalValue = config.rootDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // file_system_arn - computed: true, optional: false, required: false
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // posix_user - computed: false, optional: true, required: false
  private _posixUser = new AwsAccessPoint.PosixUserPropertyOutputReference(this, "posix_user");
  public get posixUser() {
    return this._posixUser;
  }
  public putPosixUser(value: AwsAccessPoint.PosixUserProperty) {
    this._posixUser.internalValue = value;
  }
  public resetPosixUser() {
    this._posixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserInput() {
    return this._posixUser.internalValue;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory = new AwsAccessPoint.RootDirectoryPropertyOutputReference(this, "root_directory");
  public get rootDirectory() {
    return this._rootDirectory;
  }
  public putRootDirectory(value: AwsAccessPoint.RootDirectoryProperty) {
    this._rootDirectory.internalValue = value;
  }
  public resetRootDirectory() {
    this._rootDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktn.stringToTerraform(this._fileSystemId),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      posix_user: awsAccessPointPosixUserPropertyToTerraform(this._posixUser.internalValue),
      root_directory: awsAccessPointRootDirectoryPropertyToTerraform(this._rootDirectory.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_system_id: {
        value: cdktn.stringToHclTerraform(this._fileSystemId),
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
      posix_user: {
        value: awsAccessPointPosixUserPropertyToHclTerraform(this._posixUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccessPoint.PosixUserPropertyList",
      },
      root_directory: {
        value: awsAccessPointRootDirectoryPropertyToHclTerraform(this._rootDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccessPoint.RootDirectoryPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsAccessPointPosixUserPropertyToTerraform(struct?: AwsAccessPoint.PosixUserPropertyOutputReference | AwsAccessPoint.PosixUserProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
    secondary_gids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.secondaryGids),
    uid: cdktn.numberToTerraform(struct!.uid),
  }
}


export function awsAccessPointPosixUserPropertyToHclTerraform(struct?: AwsAccessPoint.PosixUserPropertyOutputReference | AwsAccessPoint.PosixUserProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gid: {
      value: cdktn.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_gids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.secondaryGids),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    uid: {
      value: cdktn.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAccessPointCreationInfoPropertyToTerraform(struct?: AwsAccessPoint.CreationInfoPropertyOutputReference | AwsAccessPoint.CreationInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    owner_gid: cdktn.numberToTerraform(struct!.ownerGid),
    owner_uid: cdktn.numberToTerraform(struct!.ownerUid),
    permissions: cdktn.stringToTerraform(struct!.permissions),
  }
}


export function awsAccessPointCreationInfoPropertyToHclTerraform(struct?: AwsAccessPoint.CreationInfoPropertyOutputReference | AwsAccessPoint.CreationInfoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    owner_gid: {
      value: cdktn.numberToHclTerraform(struct!.ownerGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    owner_uid: {
      value: cdktn.numberToHclTerraform(struct!.ownerUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permissions: {
      value: cdktn.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsAccessPointRootDirectoryPropertyToTerraform(struct?: AwsAccessPoint.RootDirectoryPropertyOutputReference | AwsAccessPoint.RootDirectoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    creation_info: awsAccessPointCreationInfoPropertyToTerraform(struct!.creationInfo),
  }
}


export function awsAccessPointRootDirectoryPropertyToHclTerraform(struct?: AwsAccessPoint.RootDirectoryPropertyOutputReference | AwsAccessPoint.RootDirectoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation_info: {
      value: awsAccessPointCreationInfoPropertyToHclTerraform(struct!.creationInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CreationInfoPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsAccessPoint {
export interface PosixUserProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#gid AwsAccessPoint#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#secondary_gids AwsAccessPoint#secondary_gids}
  */
  readonly secondaryGids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#uid AwsAccessPoint#uid}
  */
  readonly uid: number;
}
export class PosixUserPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PosixUserProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._secondaryGids !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGids = this._secondaryGids;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PosixUserProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gid = undefined;
      this._secondaryGids = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gid = value.gid;
      this._secondaryGids = value.secondaryGids;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // secondary_gids - computed: false, optional: true, required: false
  private _secondaryGids?: number[]; 
  public get secondaryGids() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('secondary_gids')));
  }
  public set secondaryGids(value: number[]) {
    this._secondaryGids = value;
  }
  public resetSecondaryGids() {
    this._secondaryGids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGidsInput() {
    return this._secondaryGids;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface CreationInfoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#owner_gid AwsAccessPoint#owner_gid}
  */
  readonly ownerGid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#owner_uid AwsAccessPoint#owner_uid}
  */
  readonly ownerUid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#permissions AwsAccessPoint#permissions}
  */
  readonly permissions: string;
}
export class CreationInfoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CreationInfoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerGid = this._ownerGid;
    }
    if (this._ownerUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUid = this._ownerUid;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreationInfoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ownerGid = undefined;
      this._ownerUid = undefined;
      this._permissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ownerGid = value.ownerGid;
      this._ownerUid = value.ownerUid;
      this._permissions = value.permissions;
    }
  }

  // owner_gid - computed: false, optional: false, required: true
  private _ownerGid?: number; 
  public get ownerGid() {
    return this.getNumberAttribute('owner_gid');
  }
  public set ownerGid(value: number) {
    this._ownerGid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGidInput() {
    return this._ownerGid;
  }

  // owner_uid - computed: false, optional: false, required: true
  private _ownerUid?: number; 
  public get ownerUid() {
    return this.getNumberAttribute('owner_uid');
  }
  public set ownerUid(value: number) {
    this._ownerUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUidInput() {
    return this._ownerUid;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}
export interface RootDirectoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#path AwsAccessPoint#path}
  */
  readonly path?: string;
  /**
  * creation_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/efs_access_point#creation_info AwsAccessPoint#creation_info}
  */
  readonly creationInfo?: CreationInfoProperty;
}
export class RootDirectoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RootDirectoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._creationInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationInfo = this._creationInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RootDirectoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._creationInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._creationInfo.internalValue = value.creationInfo;
    }
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // creation_info - computed: false, optional: true, required: false
  private _creationInfo = new CreationInfoPropertyOutputReference(this, "creation_info");
  public get creationInfo() {
    return this._creationInfo;
  }
  public putCreationInfo(value: CreationInfoProperty) {
    this._creationInfo.internalValue = value;
  }
  public resetCreationInfo() {
    this._creationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInfoInput() {
    return this._creationInfo.internalValue;
  }
}
}
