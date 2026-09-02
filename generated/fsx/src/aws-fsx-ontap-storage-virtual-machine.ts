// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfOntapStorageVirtualMachineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#file_system_id TfOntapStorageVirtualMachine#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#id TfOntapStorageVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#name TfOntapStorageVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#region TfOntapStorageVirtualMachine#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#root_volume_security_style TfOntapStorageVirtualMachine#root_volume_security_style}
  */
  readonly rootVolumeSecurityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#svm_admin_password TfOntapStorageVirtualMachine#svm_admin_password}
  */
  readonly svmAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#tags TfOntapStorageVirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#tags_all TfOntapStorageVirtualMachine#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * active_directory_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#active_directory_configuration TfOntapStorageVirtualMachine#active_directory_configuration}
  */
  readonly activeDirectoryConfiguration?: TfOntapStorageVirtualMachine.ActiveDirectoryConfigurationProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#timeouts TfOntapStorageVirtualMachine#timeouts}
  */
  readonly timeouts?: TfOntapStorageVirtualMachine.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine}
*/
export class TfOntapStorageVirtualMachine extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_ontap_storage_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfOntapStorageVirtualMachine resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfOntapStorageVirtualMachine to import
  * @param importFromId The id of the existing TfOntapStorageVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfOntapStorageVirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_ontap_storage_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfOntapStorageVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: TfOntapStorageVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_ontap_storage_virtual_machine',
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
    this._name = config.name;
    this._region = config.region;
    this._rootVolumeSecurityStyle = config.rootVolumeSecurityStyle;
    this._svmAdminPassword = config.svmAdminPassword;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._activeDirectoryConfiguration.internalValue = config.activeDirectoryConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new TfOntapStorageVirtualMachine.EndpointsPropertyList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
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

  // root_volume_security_style - computed: false, optional: true, required: false
  private _rootVolumeSecurityStyle?: string; 
  public get rootVolumeSecurityStyle() {
    return this.getStringAttribute('root_volume_security_style');
  }
  public set rootVolumeSecurityStyle(value: string) {
    this._rootVolumeSecurityStyle = value;
  }
  public resetRootVolumeSecurityStyle() {
    this._rootVolumeSecurityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSecurityStyleInput() {
    return this._rootVolumeSecurityStyle;
  }

  // subtype - computed: true, optional: false, required: false
  public get subtype() {
    return this.getStringAttribute('subtype');
  }

  // svm_admin_password - computed: false, optional: true, required: false
  private _svmAdminPassword?: string; 
  public get svmAdminPassword() {
    return this.getStringAttribute('svm_admin_password');
  }
  public set svmAdminPassword(value: string) {
    this._svmAdminPassword = value;
  }
  public resetSvmAdminPassword() {
    this._svmAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmAdminPasswordInput() {
    return this._svmAdminPassword;
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

  // active_directory_configuration - computed: false, optional: true, required: false
  private _activeDirectoryConfiguration = new TfOntapStorageVirtualMachine.ActiveDirectoryConfigurationPropertyOutputReference(this, "active_directory_configuration");
  public get activeDirectoryConfiguration() {
    return this._activeDirectoryConfiguration;
  }
  public putActiveDirectoryConfiguration(value: TfOntapStorageVirtualMachine.ActiveDirectoryConfigurationProperty) {
    this._activeDirectoryConfiguration.internalValue = value;
  }
  public resetActiveDirectoryConfiguration() {
    this._activeDirectoryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryConfigurationInput() {
    return this._activeDirectoryConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfOntapStorageVirtualMachine.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfOntapStorageVirtualMachine.TimeoutsProperty) {
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
      file_system_id: cdktn.stringToTerraform(this._fileSystemId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      root_volume_security_style: cdktn.stringToTerraform(this._rootVolumeSecurityStyle),
      svm_admin_password: cdktn.stringToTerraform(this._svmAdminPassword),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      active_directory_configuration: tfOntapStorageVirtualMachineActiveDirectoryConfigurationPropertyToTerraform(this._activeDirectoryConfiguration.internalValue),
      timeouts: tfOntapStorageVirtualMachineTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      root_volume_security_style: {
        value: cdktn.stringToHclTerraform(this._rootVolumeSecurityStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_admin_password: {
        value: cdktn.stringToHclTerraform(this._svmAdminPassword),
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
      active_directory_configuration: {
        value: tfOntapStorageVirtualMachineActiveDirectoryConfigurationPropertyToHclTerraform(this._activeDirectoryConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfOntapStorageVirtualMachine.ActiveDirectoryConfigurationPropertyList",
      },
      timeouts: {
        value: tfOntapStorageVirtualMachineTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfOntapStorageVirtualMachine.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfOntapStorageVirtualMachineIscsiPropertyToTerraform(struct?: TfOntapStorageVirtualMachine.IscsiProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOntapStorageVirtualMachineIscsiPropertyToHclTerraform(struct?: TfOntapStorageVirtualMachine.IscsiProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOntapStorageVirtualMachineManagementPropertyToTerraform(struct?: TfOntapStorageVirtualMachine.ManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOntapStorageVirtualMachineManagementPropertyToHclTerraform(struct?: TfOntapStorageVirtualMachine.ManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOntapStorageVirtualMachineNfsPropertyToTerraform(struct?: TfOntapStorageVirtualMachine.NfsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOntapStorageVirtualMachineNfsPropertyToHclTerraform(struct?: TfOntapStorageVirtualMachine.NfsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOntapStorageVirtualMachineSmbPropertyToTerraform(struct?: TfOntapStorageVirtualMachine.SmbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOntapStorageVirtualMachineSmbPropertyToHclTerraform(struct?: TfOntapStorageVirtualMachine.SmbProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOntapStorageVirtualMachineEndpointsPropertyToTerraform(struct?: TfOntapStorageVirtualMachine.EndpointsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOntapStorageVirtualMachineEndpointsPropertyToHclTerraform(struct?: TfOntapStorageVirtualMachine.EndpointsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOntapStorageVirtualMachineSelfManagedActiveDirectoryConfigurationPropertyToTerraform(struct?: TfOntapStorageVirtualMachine.SelfManagedActiveDirectoryConfigurationPropertyOutputReference | TfOntapStorageVirtualMachine.SelfManagedActiveDirectoryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dns_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dnsIps),
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    file_system_administrators_group: cdktn.stringToTerraform(struct!.fileSystemAdministratorsGroup),
    organizational_unit_distinguished_name: cdktn.stringToTerraform(struct!.organizationalUnitDistinguishedName),
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function tfOntapStorageVirtualMachineSelfManagedActiveDirectoryConfigurationPropertyToHclTerraform(struct?: TfOntapStorageVirtualMachine.SelfManagedActiveDirectoryConfigurationPropertyOutputReference | TfOntapStorageVirtualMachine.SelfManagedActiveDirectoryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dns_ips: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dnsIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_administrators_group: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemAdministratorsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit_distinguished_name: {
      value: cdktn.stringToHclTerraform(struct!.organizationalUnitDistinguishedName),
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


export function tfOntapStorageVirtualMachineActiveDirectoryConfigurationPropertyToTerraform(struct?: TfOntapStorageVirtualMachine.ActiveDirectoryConfigurationPropertyOutputReference | TfOntapStorageVirtualMachine.ActiveDirectoryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    netbios_name: cdktn.stringToTerraform(struct!.netbiosName),
    self_managed_active_directory_configuration: tfOntapStorageVirtualMachineSelfManagedActiveDirectoryConfigurationPropertyToTerraform(struct!.selfManagedActiveDirectoryConfiguration),
  }
}


export function tfOntapStorageVirtualMachineActiveDirectoryConfigurationPropertyToHclTerraform(struct?: TfOntapStorageVirtualMachine.ActiveDirectoryConfigurationPropertyOutputReference | TfOntapStorageVirtualMachine.ActiveDirectoryConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    netbios_name: {
      value: cdktn.stringToHclTerraform(struct!.netbiosName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_managed_active_directory_configuration: {
      value: tfOntapStorageVirtualMachineSelfManagedActiveDirectoryConfigurationPropertyToHclTerraform(struct!.selfManagedActiveDirectoryConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SelfManagedActiveDirectoryConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOntapStorageVirtualMachineTimeoutsPropertyToTerraform(struct?: TfOntapStorageVirtualMachine.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfOntapStorageVirtualMachineTimeoutsPropertyToHclTerraform(struct?: TfOntapStorageVirtualMachine.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfOntapStorageVirtualMachine {
export interface IscsiProperty {
}
export class IscsiPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IscsiProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IscsiProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class IscsiPropertyList extends cdktn.ComplexList {

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
  public get(index: number): IscsiPropertyOutputReference {
    return new IscsiPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementProperty {
}
export class ManagementPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class ManagementPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ManagementPropertyOutputReference {
    return new ManagementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfsProperty {
}
export class NfsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NfsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class NfsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): NfsPropertyOutputReference {
    return new NfsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmbProperty {
}
export class SmbPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SmbProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmbProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class SmbPropertyList extends cdktn.ComplexList {

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
  public get(index: number): SmbPropertyOutputReference {
    return new SmbPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointsProperty {
}
export class EndpointsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EndpointsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iscsi - computed: true, optional: false, required: false
  private _iscsi = new IscsiPropertyList(this, "iscsi", false);
  public get iscsi() {
    return this._iscsi;
  }

  // management - computed: true, optional: false, required: false
  private _management = new ManagementPropertyList(this, "management", false);
  public get management() {
    return this._management;
  }

  // nfs - computed: true, optional: false, required: false
  private _nfs = new NfsPropertyList(this, "nfs", false);
  public get nfs() {
    return this._nfs;
  }

  // smb - computed: true, optional: false, required: false
  private _smb = new SmbPropertyList(this, "smb", false);
  public get smb() {
    return this._smb;
  }
}

export class EndpointsPropertyList extends cdktn.ComplexList {

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
  public get(index: number): EndpointsPropertyOutputReference {
    return new EndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelfManagedActiveDirectoryConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#dns_ips TfOntapStorageVirtualMachine#dns_ips}
  */
  readonly dnsIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#domain_name TfOntapStorageVirtualMachine#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#file_system_administrators_group TfOntapStorageVirtualMachine#file_system_administrators_group}
  */
  readonly fileSystemAdministratorsGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#organizational_unit_distinguished_name TfOntapStorageVirtualMachine#organizational_unit_distinguished_name}
  */
  readonly organizationalUnitDistinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#password TfOntapStorageVirtualMachine#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#username TfOntapStorageVirtualMachine#username}
  */
  readonly username: string;
}
export class SelfManagedActiveDirectoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SelfManagedActiveDirectoryConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIps = this._dnsIps;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._fileSystemAdministratorsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAdministratorsGroup = this._fileSystemAdministratorsGroup;
    }
    if (this._organizationalUnitDistinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitDistinguishedName = this._organizationalUnitDistinguishedName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfManagedActiveDirectoryConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsIps = undefined;
      this._domainName = undefined;
      this._fileSystemAdministratorsGroup = undefined;
      this._organizationalUnitDistinguishedName = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsIps = value.dnsIps;
      this._domainName = value.domainName;
      this._fileSystemAdministratorsGroup = value.fileSystemAdministratorsGroup;
      this._organizationalUnitDistinguishedName = value.organizationalUnitDistinguishedName;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // dns_ips - computed: false, optional: false, required: true
  private _dnsIps?: string[]; 
  public get dnsIps() {
    return cdktn.Fn.tolist(this.getListAttribute('dns_ips'));
  }
  public set dnsIps(value: string[]) {
    this._dnsIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpsInput() {
    return this._dnsIps;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // file_system_administrators_group - computed: false, optional: true, required: false
  private _fileSystemAdministratorsGroup?: string; 
  public get fileSystemAdministratorsGroup() {
    return this.getStringAttribute('file_system_administrators_group');
  }
  public set fileSystemAdministratorsGroup(value: string) {
    this._fileSystemAdministratorsGroup = value;
  }
  public resetFileSystemAdministratorsGroup() {
    this._fileSystemAdministratorsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAdministratorsGroupInput() {
    return this._fileSystemAdministratorsGroup;
  }

  // organizational_unit_distinguished_name - computed: false, optional: true, required: false
  private _organizationalUnitDistinguishedName?: string; 
  public get organizationalUnitDistinguishedName() {
    return this.getStringAttribute('organizational_unit_distinguished_name');
  }
  public set organizationalUnitDistinguishedName(value: string) {
    this._organizationalUnitDistinguishedName = value;
  }
  public resetOrganizationalUnitDistinguishedName() {
    this._organizationalUnitDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitDistinguishedNameInput() {
    return this._organizationalUnitDistinguishedName;
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
export interface ActiveDirectoryConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#netbios_name TfOntapStorageVirtualMachine#netbios_name}
  */
  readonly netbiosName?: string;
  /**
  * self_managed_active_directory_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#self_managed_active_directory_configuration TfOntapStorageVirtualMachine#self_managed_active_directory_configuration}
  */
  readonly selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationProperty;
}
export class ActiveDirectoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveDirectoryConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._netbiosName !== undefined) {
      hasAnyValues = true;
      internalValueResult.netbiosName = this._netbiosName;
    }
    if (this._selfManagedActiveDirectoryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedActiveDirectoryConfiguration = this._selfManagedActiveDirectoryConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._netbiosName = undefined;
      this._selfManagedActiveDirectoryConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._netbiosName = value.netbiosName;
      this._selfManagedActiveDirectoryConfiguration.internalValue = value.selfManagedActiveDirectoryConfiguration;
    }
  }

  // netbios_name - computed: false, optional: true, required: false
  private _netbiosName?: string; 
  public get netbiosName() {
    return this.getStringAttribute('netbios_name');
  }
  public set netbiosName(value: string) {
    this._netbiosName = value;
  }
  public resetNetbiosName() {
    this._netbiosName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNameInput() {
    return this._netbiosName;
  }

  // self_managed_active_directory_configuration - computed: false, optional: true, required: false
  private _selfManagedActiveDirectoryConfiguration = new SelfManagedActiveDirectoryConfigurationPropertyOutputReference(this, "self_managed_active_directory_configuration");
  public get selfManagedActiveDirectoryConfiguration() {
    return this._selfManagedActiveDirectoryConfiguration;
  }
  public putSelfManagedActiveDirectoryConfiguration(value: SelfManagedActiveDirectoryConfigurationProperty) {
    this._selfManagedActiveDirectoryConfiguration.internalValue = value;
  }
  public resetSelfManagedActiveDirectoryConfiguration() {
    this._selfManagedActiveDirectoryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedActiveDirectoryConfigurationInput() {
    return this._selfManagedActiveDirectoryConfiguration.internalValue;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#create TfOntapStorageVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#delete TfOntapStorageVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/fsx_ontap_storage_virtual_machine#update TfOntapStorageVirtualMachine#update}
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
