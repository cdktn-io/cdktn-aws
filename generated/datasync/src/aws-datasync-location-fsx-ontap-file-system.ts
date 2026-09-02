// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfLocationFsxOntapFileSystemConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#id TfLocationFsxOntapFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#region TfLocationFsxOntapFileSystem#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#security_group_arns TfLocationFsxOntapFileSystem#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#storage_virtual_machine_arn TfLocationFsxOntapFileSystem#storage_virtual_machine_arn}
  */
  readonly storageVirtualMachineArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#subdirectory TfLocationFsxOntapFileSystem#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#tags TfLocationFsxOntapFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#tags_all TfLocationFsxOntapFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#protocol TfLocationFsxOntapFileSystem#protocol}
  */
  readonly protocol: TfLocationFsxOntapFileSystem.ProtocolProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system aws_datasync_location_fsx_ontap_file_system}
*/
export class TfLocationFsxOntapFileSystem extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_location_fsx_ontap_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfLocationFsxOntapFileSystem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfLocationFsxOntapFileSystem to import
  * @param importFromId The id of the existing TfLocationFsxOntapFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfLocationFsxOntapFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_location_fsx_ontap_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system aws_datasync_location_fsx_ontap_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfLocationFsxOntapFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: TfLocationFsxOntapFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_fsx_ontap_file_system',
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
    this._id = config.id;
    this._region = config.region;
    this._securityGroupArns = config.securityGroupArns;
    this._storageVirtualMachineArn = config.storageVirtualMachineArn;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._protocol.internalValue = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // fsx_filesystem_arn - computed: true, optional: false, required: false
  public get fsxFilesystemArn() {
    return this.getStringAttribute('fsx_filesystem_arn');
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

  // security_group_arns - computed: false, optional: false, required: true
  private _securityGroupArns?: string[]; 
  public get securityGroupArns() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_arns'));
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns;
  }

  // storage_virtual_machine_arn - computed: false, optional: false, required: true
  private _storageVirtualMachineArn?: string; 
  public get storageVirtualMachineArn() {
    return this.getStringAttribute('storage_virtual_machine_arn');
  }
  public set storageVirtualMachineArn(value: string) {
    this._storageVirtualMachineArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVirtualMachineArnInput() {
    return this._storageVirtualMachineArn;
  }

  // subdirectory - computed: true, optional: true, required: false
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol = new TfLocationFsxOntapFileSystem.ProtocolPropertyOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: TfLocationFsxOntapFileSystem.ProtocolProperty) {
    this._protocol.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      security_group_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupArns),
      storage_virtual_machine_arn: cdktn.stringToTerraform(this._storageVirtualMachineArn),
      subdirectory: cdktn.stringToTerraform(this._subdirectory),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      protocol: tfLocationFsxOntapFileSystemProtocolPropertyToTerraform(this._protocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      security_group_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_virtual_machine_arn: {
        value: cdktn.stringToHclTerraform(this._storageVirtualMachineArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdirectory: {
        value: cdktn.stringToHclTerraform(this._subdirectory),
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
      protocol: {
        value: tfLocationFsxOntapFileSystemProtocolPropertyToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfLocationFsxOntapFileSystem.ProtocolPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfLocationFsxOntapFileSystemProtocolNfsMountOptionsPropertyToTerraform(struct?: TfLocationFsxOntapFileSystem.ProtocolNfsMountOptionsPropertyOutputReference | TfLocationFsxOntapFileSystem.ProtocolNfsMountOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function tfLocationFsxOntapFileSystemProtocolNfsMountOptionsPropertyToHclTerraform(struct?: TfLocationFsxOntapFileSystem.ProtocolNfsMountOptionsPropertyOutputReference | TfLocationFsxOntapFileSystem.ProtocolNfsMountOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLocationFsxOntapFileSystemNfsPropertyToTerraform(struct?: TfLocationFsxOntapFileSystem.NfsPropertyOutputReference | TfLocationFsxOntapFileSystem.NfsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_options: tfLocationFsxOntapFileSystemProtocolNfsMountOptionsPropertyToTerraform(struct!.mountOptions),
  }
}


export function tfLocationFsxOntapFileSystemNfsPropertyToHclTerraform(struct?: TfLocationFsxOntapFileSystem.NfsPropertyOutputReference | TfLocationFsxOntapFileSystem.NfsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_options: {
      value: tfLocationFsxOntapFileSystemProtocolNfsMountOptionsPropertyToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ProtocolNfsMountOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLocationFsxOntapFileSystemProtocolSmbMountOptionsPropertyToTerraform(struct?: TfLocationFsxOntapFileSystem.ProtocolSmbMountOptionsPropertyOutputReference | TfLocationFsxOntapFileSystem.ProtocolSmbMountOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function tfLocationFsxOntapFileSystemProtocolSmbMountOptionsPropertyToHclTerraform(struct?: TfLocationFsxOntapFileSystem.ProtocolSmbMountOptionsPropertyOutputReference | TfLocationFsxOntapFileSystem.ProtocolSmbMountOptionsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLocationFsxOntapFileSystemSmbPropertyToTerraform(struct?: TfLocationFsxOntapFileSystem.SmbPropertyOutputReference | TfLocationFsxOntapFileSystem.SmbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    password: cdktn.stringToTerraform(struct!.password),
    user: cdktn.stringToTerraform(struct!.user),
    mount_options: tfLocationFsxOntapFileSystemProtocolSmbMountOptionsPropertyToTerraform(struct!.mountOptions),
  }
}


export function tfLocationFsxOntapFileSystemSmbPropertyToHclTerraform(struct?: TfLocationFsxOntapFileSystem.SmbPropertyOutputReference | TfLocationFsxOntapFileSystem.SmbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: tfLocationFsxOntapFileSystemProtocolSmbMountOptionsPropertyToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ProtocolSmbMountOptionsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfLocationFsxOntapFileSystemProtocolPropertyToTerraform(struct?: TfLocationFsxOntapFileSystem.ProtocolPropertyOutputReference | TfLocationFsxOntapFileSystem.ProtocolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    nfs: tfLocationFsxOntapFileSystemNfsPropertyToTerraform(struct!.nfs),
    smb: tfLocationFsxOntapFileSystemSmbPropertyToTerraform(struct!.smb),
  }
}


export function tfLocationFsxOntapFileSystemProtocolPropertyToHclTerraform(struct?: TfLocationFsxOntapFileSystem.ProtocolPropertyOutputReference | TfLocationFsxOntapFileSystem.ProtocolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    nfs: {
      value: tfLocationFsxOntapFileSystemNfsPropertyToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "list",
      storageClassType: "NfsPropertyList",
    },
    smb: {
      value: tfLocationFsxOntapFileSystemSmbPropertyToHclTerraform(struct!.smb),
      isBlock: true,
      type: "list",
      storageClassType: "SmbPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfLocationFsxOntapFileSystem {
export interface ProtocolNfsMountOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#version TfLocationFsxOntapFileSystem#version}
  */
  readonly version?: string;
}
export class ProtocolNfsMountOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtocolNfsMountOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolNfsMountOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface NfsProperty {
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#mount_options TfLocationFsxOntapFileSystem#mount_options}
  */
  readonly mountOptions: ProtocolNfsMountOptionsProperty;
}
export class NfsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountOptions.internalValue = value.mountOptions;
    }
  }

  // mount_options - computed: false, optional: false, required: true
  private _mountOptions = new ProtocolNfsMountOptionsPropertyOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: ProtocolNfsMountOptionsProperty) {
    this._mountOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }
}
export interface ProtocolSmbMountOptionsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#version TfLocationFsxOntapFileSystem#version}
  */
  readonly version?: string;
}
export class ProtocolSmbMountOptionsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtocolSmbMountOptionsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolSmbMountOptionsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SmbProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#domain TfLocationFsxOntapFileSystem#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#password TfLocationFsxOntapFileSystem#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#user TfLocationFsxOntapFileSystem#user}
  */
  readonly user: string;
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#mount_options TfLocationFsxOntapFileSystem#mount_options}
  */
  readonly mountOptions: ProtocolSmbMountOptionsProperty;
}
export class SmbPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmbProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmbProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._password = undefined;
      this._user = undefined;
      this._mountOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._password = value.password;
      this._user = value.user;
      this._mountOptions.internalValue = value.mountOptions;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // mount_options - computed: false, optional: false, required: true
  private _mountOptions = new ProtocolSmbMountOptionsPropertyOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: ProtocolSmbMountOptionsProperty) {
    this._mountOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }
}
export interface ProtocolProperty {
  /**
  * nfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#nfs TfLocationFsxOntapFileSystem#nfs}
  */
  readonly nfs?: NfsProperty;
  /**
  * smb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/datasync_location_fsx_ontap_file_system#smb TfLocationFsxOntapFileSystem#smb}
  */
  readonly smb?: SmbProperty;
}
export class ProtocolPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtocolProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._smb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smb = this._smb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nfs.internalValue = undefined;
      this._smb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nfs.internalValue = value.nfs;
      this._smb.internalValue = value.smb;
    }
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new NfsPropertyOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: NfsProperty) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // smb - computed: false, optional: true, required: false
  private _smb = new SmbPropertyOutputReference(this, "smb");
  public get smb() {
    return this._smb;
  }
  public putSmb(value: SmbProperty) {
    this._smb.internalValue = value;
  }
  public resetSmb() {
    this._smb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbInput() {
    return this._smb.internalValue;
  }
}
}
