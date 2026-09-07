// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_network_access_type AwsDomain#app_network_access_type}
  */
  readonly appNetworkAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_security_group_management AwsDomain#app_security_group_management}
  */
  readonly appSecurityGroupManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#auth_mode AwsDomain#auth_mode}
  */
  readonly authMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#domain_name AwsDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#id AwsDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#kms_key_id AwsDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#region AwsDomain#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#subnet_ids AwsDomain#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#tag_propagation AwsDomain#tag_propagation}
  */
  readonly tagPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#tags AwsDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#tags_all AwsDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#vpc_id AwsDomain#vpc_id}
  */
  readonly vpcId: string;
  /**
  * default_space_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_space_settings AwsDomain#default_space_settings}
  */
  readonly defaultSpaceSettings?: AwsDomain.DefaultSpaceSettingsProperty;
  /**
  * default_user_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_user_settings AwsDomain#default_user_settings}
  */
  readonly defaultUserSettings: AwsDomain.DefaultUserSettingsProperty;
  /**
  * domain_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#domain_settings AwsDomain#domain_settings}
  */
  readonly domainSettings?: AwsDomain.DomainSettingsProperty;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#retention_policy AwsDomain#retention_policy}
  */
  readonly retentionPolicy?: AwsDomain.RetentionPolicyProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain aws_sagemaker_domain}
*/
export class AwsDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsDomain to import
  * @param importFromId The id of the existing AwsDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain aws_sagemaker_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsDomainConfig
  */
  public constructor(scope: Construct, id: string, config: AwsDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_domain',
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
    this._appNetworkAccessType = config.appNetworkAccessType;
    this._appSecurityGroupManagement = config.appSecurityGroupManagement;
    this._authMode = config.authMode;
    this._domainName = config.domainName;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._region = config.region;
    this._subnetIds = config.subnetIds;
    this._tagPropagation = config.tagPropagation;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
    this._defaultSpaceSettings.internalValue = config.defaultSpaceSettings;
    this._defaultUserSettings.internalValue = config.defaultUserSettings;
    this._domainSettings.internalValue = config.domainSettings;
    this._retentionPolicy.internalValue = config.retentionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: false, optional: true, required: false
  private _appNetworkAccessType?: string; 
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }
  public set appNetworkAccessType(value: string) {
    this._appNetworkAccessType = value;
  }
  public resetAppNetworkAccessType() {
    this._appNetworkAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkAccessTypeInput() {
    return this._appNetworkAccessType;
  }

  // app_security_group_management - computed: false, optional: true, required: false
  private _appSecurityGroupManagement?: string; 
  public get appSecurityGroupManagement() {
    return this.getStringAttribute('app_security_group_management');
  }
  public set appSecurityGroupManagement(value: string) {
    this._appSecurityGroupManagement = value;
  }
  public resetAppSecurityGroupManagement() {
    this._appSecurityGroupManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecurityGroupManagementInput() {
    return this._appSecurityGroupManagement;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
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

  // home_efs_file_system_id - computed: true, optional: false, required: false
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
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

  // security_group_id_for_domain_boundary - computed: true, optional: false, required: false
  public get securityGroupIdForDomainBoundary() {
    return this.getStringAttribute('security_group_id_for_domain_boundary');
  }

  // single_sign_on_application_arn - computed: true, optional: false, required: false
  public get singleSignOnApplicationArn() {
    return this.getStringAttribute('single_sign_on_application_arn');
  }

  // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
  public get singleSignOnManagedApplicationInstanceId() {
    return this.getStringAttribute('single_sign_on_managed_application_instance_id');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tag_propagation - computed: false, optional: true, required: false
  private _tagPropagation?: string; 
  public get tagPropagation() {
    return this.getStringAttribute('tag_propagation');
  }
  public set tagPropagation(value: string) {
    this._tagPropagation = value;
  }
  public resetTagPropagation() {
    this._tagPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPropagationInput() {
    return this._tagPropagation;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // default_space_settings - computed: false, optional: true, required: false
  private _defaultSpaceSettings = new AwsDomain.DefaultSpaceSettingsPropertyOutputReference(this, "default_space_settings");
  public get defaultSpaceSettings() {
    return this._defaultSpaceSettings;
  }
  public putDefaultSpaceSettings(value: AwsDomain.DefaultSpaceSettingsProperty) {
    this._defaultSpaceSettings.internalValue = value;
  }
  public resetDefaultSpaceSettings() {
    this._defaultSpaceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSpaceSettingsInput() {
    return this._defaultSpaceSettings.internalValue;
  }

  // default_user_settings - computed: false, optional: false, required: true
  private _defaultUserSettings = new AwsDomain.DefaultUserSettingsPropertyOutputReference(this, "default_user_settings");
  public get defaultUserSettings() {
    return this._defaultUserSettings;
  }
  public putDefaultUserSettings(value: AwsDomain.DefaultUserSettingsProperty) {
    this._defaultUserSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserSettingsInput() {
    return this._defaultUserSettings.internalValue;
  }

  // domain_settings - computed: false, optional: true, required: false
  private _domainSettings = new AwsDomain.DomainSettingsPropertyOutputReference(this, "domain_settings");
  public get domainSettings() {
    return this._domainSettings;
  }
  public putDomainSettings(value: AwsDomain.DomainSettingsProperty) {
    this._domainSettings.internalValue = value;
  }
  public resetDomainSettings() {
    this._domainSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSettingsInput() {
    return this._domainSettings.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new AwsDomain.RetentionPolicyPropertyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: AwsDomain.RetentionPolicyProperty) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_network_access_type: cdktn.stringToTerraform(this._appNetworkAccessType),
      app_security_group_management: cdktn.stringToTerraform(this._appSecurityGroupManagement),
      auth_mode: cdktn.stringToTerraform(this._authMode),
      domain_name: cdktn.stringToTerraform(this._domainName),
      id: cdktn.stringToTerraform(this._id),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      region: cdktn.stringToTerraform(this._region),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tag_propagation: cdktn.stringToTerraform(this._tagPropagation),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
      default_space_settings: awsDomainDefaultSpaceSettingsPropertyToTerraform(this._defaultSpaceSettings.internalValue),
      default_user_settings: awsDomainDefaultUserSettingsPropertyToTerraform(this._defaultUserSettings.internalValue),
      domain_settings: awsDomainDomainSettingsPropertyToTerraform(this._domainSettings.internalValue),
      retention_policy: awsDomainRetentionPolicyPropertyToTerraform(this._retentionPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_network_access_type: {
        value: cdktn.stringToHclTerraform(this._appNetworkAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_security_group_management: {
        value: cdktn.stringToHclTerraform(this._appSecurityGroupManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_mode: {
        value: cdktn.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
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
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_propagation: {
        value: cdktn.stringToHclTerraform(this._tagPropagation),
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
      vpc_id: {
        value: cdktn.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_space_settings: {
        value: awsDomainDefaultSpaceSettingsPropertyToHclTerraform(this._defaultSpaceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.DefaultSpaceSettingsPropertyList",
      },
      default_user_settings: {
        value: awsDomainDefaultUserSettingsPropertyToHclTerraform(this._defaultUserSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.DefaultUserSettingsPropertyList",
      },
      domain_settings: {
        value: awsDomainDomainSettingsPropertyToHclTerraform(this._domainSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.DomainSettingsPropertyList",
      },
      retention_policy: {
        value: awsDomainRetentionPolicyPropertyToHclTerraform(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsDomain.RetentionPolicyPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyOutputReference | AwsDomain.DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function awsDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyOutputReference | AwsDomain.DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsCustomFileSystemConfigPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsCustomFileSystemConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_system_config: awsDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyToTerraform(struct!.efsFileSystemConfig),
  }
}


export function awsDomainDefaultSpaceSettingsCustomFileSystemConfigPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsCustomFileSystemConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_system_config: {
      value: awsDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsCustomPosixUserConfigPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsCustomPosixUserConfigPropertyOutputReference | AwsDomain.DefaultSpaceSettingsCustomPosixUserConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
    uid: cdktn.numberToTerraform(struct!.uid),
  }
}


export function awsDomainDefaultSpaceSettingsCustomPosixUserConfigPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsCustomPosixUserConfigPropertyOutputReference | AwsDomain.DefaultSpaceSettingsCustomPosixUserConfigProperty): any {
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


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
    lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
    max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
    min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_management: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct!.idleSettings),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_url: {
      value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assumable_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.assumableRoleArns),
    execution_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.executionRoleArns),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assumable_role_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.assumableRoleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    execution_role_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.executionRoleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    app_lifecycle_management: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
    code_repository: cdktn.listMapper(awsDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyToTerraform, true)(struct!.codeRepository),
    custom_image: cdktn.listMapper(awsDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
    emr_settings: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyToTerraform(struct!.emrSettings),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterLabAppSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterLabAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    built_in_lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_lifecycle_management: {
      value: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyList",
    },
    code_repository: {
      value: cdktn.listMapperHcl(awsDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyList",
    },
    custom_image: {
      value: cdktn.listMapperHcl(awsDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyList",
    },
    emr_settings: {
      value: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyToHclTerraform(struct!.emrSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_url: {
      value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsJupyterServerAppSettingsPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    code_repository: cdktn.listMapper(awsDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyToTerraform, true)(struct!.codeRepository),
    default_resource_spec: awsDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function awsDomainDefaultSpaceSettingsJupyterServerAppSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsJupyterServerAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    code_repository: {
      value: cdktn.listMapperHcl(awsDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyList",
    },
    default_resource_spec: {
      value: awsDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktn.listMapper(awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsKernelGatewayAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_image: {
      value: cdktn.listMapperHcl(awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function awsDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ebs_volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsSpaceStorageSettingsPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsSpaceStorageSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsSpaceStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_storage_settings: awsDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function awsDomainDefaultSpaceSettingsSpaceStorageSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsSpaceStorageSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsSpaceStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: awsDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultSpaceSettingsPropertyToTerraform(struct?: AwsDomain.DefaultSpaceSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_role: cdktn.stringToTerraform(struct!.executionRole),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    custom_file_system_config: cdktn.listMapper(awsDomainDefaultSpaceSettingsCustomFileSystemConfigPropertyToTerraform, true)(struct!.customFileSystemConfig),
    custom_posix_user_config: awsDomainDefaultSpaceSettingsCustomPosixUserConfigPropertyToTerraform(struct!.customPosixUserConfig),
    jupyter_lab_app_settings: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsPropertyToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: awsDomainDefaultSpaceSettingsJupyterServerAppSettingsPropertyToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsPropertyToTerraform(struct!.kernelGatewayAppSettings),
    space_storage_settings: awsDomainDefaultSpaceSettingsSpaceStorageSettingsPropertyToTerraform(struct!.spaceStorageSettings),
  }
}


export function awsDomainDefaultSpaceSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultSpaceSettingsPropertyOutputReference | AwsDomain.DefaultSpaceSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_role: {
      value: cdktn.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_file_system_config: {
      value: cdktn.listMapperHcl(awsDomainDefaultSpaceSettingsCustomFileSystemConfigPropertyToHclTerraform, true)(struct!.customFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsCustomFileSystemConfigPropertyList",
    },
    custom_posix_user_config: {
      value: awsDomainDefaultSpaceSettingsCustomPosixUserConfigPropertyToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsCustomPosixUserConfigPropertyList",
    },
    jupyter_lab_app_settings: {
      value: awsDomainDefaultSpaceSettingsJupyterLabAppSettingsPropertyToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsJupyterLabAppSettingsPropertyList",
    },
    jupyter_server_app_settings: {
      value: awsDomainDefaultSpaceSettingsJupyterServerAppSettingsPropertyToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsJupyterServerAppSettingsPropertyList",
    },
    kernel_gateway_app_settings: {
      value: awsDomainDefaultSpaceSettingsKernelGatewayAppSettingsPropertyToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsKernelGatewayAppSettingsPropertyList",
    },
    space_storage_settings: {
      value: awsDomainDefaultSpaceSettingsSpaceStorageSettingsPropertyToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultSpaceSettingsSpaceStorageSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDirectDeploySettingsPropertyToTerraform(struct?: AwsDomain.DirectDeploySettingsPropertyOutputReference | AwsDomain.DirectDeploySettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsDomainDirectDeploySettingsPropertyToHclTerraform(struct?: AwsDomain.DirectDeploySettingsPropertyOutputReference | AwsDomain.DirectDeploySettingsProperty): any {
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


export function awsDomainEmrServerlessSettingsPropertyToTerraform(struct?: AwsDomain.EmrServerlessSettingsPropertyOutputReference | AwsDomain.EmrServerlessSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsDomainEmrServerlessSettingsPropertyToHclTerraform(struct?: AwsDomain.EmrServerlessSettingsPropertyOutputReference | AwsDomain.EmrServerlessSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsDomainGenerativeAiSettingsPropertyToTerraform(struct?: AwsDomain.GenerativeAiSettingsPropertyOutputReference | AwsDomain.GenerativeAiSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_bedrock_role_arn: cdktn.stringToTerraform(struct!.amazonBedrockRoleArn),
  }
}


export function awsDomainGenerativeAiSettingsPropertyToHclTerraform(struct?: AwsDomain.GenerativeAiSettingsPropertyOutputReference | AwsDomain.GenerativeAiSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amazon_bedrock_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.amazonBedrockRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainIdentityProviderOauthSettingsPropertyToTerraform(struct?: AwsDomain.IdentityProviderOauthSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsDomainIdentityProviderOauthSettingsPropertyToHclTerraform(struct?: AwsDomain.IdentityProviderOauthSettingsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsDomainKendraSettingsPropertyToTerraform(struct?: AwsDomain.KendraSettingsPropertyOutputReference | AwsDomain.KendraSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsDomainKendraSettingsPropertyToHclTerraform(struct?: AwsDomain.KendraSettingsPropertyOutputReference | AwsDomain.KendraSettingsProperty): any {
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


export function awsDomainModelRegisterSettingsPropertyToTerraform(struct?: AwsDomain.ModelRegisterSettingsPropertyOutputReference | AwsDomain.ModelRegisterSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_model_register_role_arn: cdktn.stringToTerraform(struct!.crossAccountModelRegisterRoleArn),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsDomainModelRegisterSettingsPropertyToHclTerraform(struct?: AwsDomain.ModelRegisterSettingsPropertyOutputReference | AwsDomain.ModelRegisterSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_model_register_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountModelRegisterRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsDomainTimeSeriesForecastingSettingsPropertyToTerraform(struct?: AwsDomain.TimeSeriesForecastingSettingsPropertyOutputReference | AwsDomain.TimeSeriesForecastingSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_forecast_role_arn: cdktn.stringToTerraform(struct!.amazonForecastRoleArn),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsDomainTimeSeriesForecastingSettingsPropertyToHclTerraform(struct?: AwsDomain.TimeSeriesForecastingSettingsPropertyOutputReference | AwsDomain.TimeSeriesForecastingSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amazon_forecast_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.amazonForecastRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsDomainWorkspaceSettingsPropertyToTerraform(struct?: AwsDomain.WorkspaceSettingsPropertyOutputReference | AwsDomain.WorkspaceSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_artifact_path: cdktn.stringToTerraform(struct!.s3ArtifactPath),
    s3_kms_key_id: cdktn.stringToTerraform(struct!.s3KmsKeyId),
  }
}


export function awsDomainWorkspaceSettingsPropertyToHclTerraform(struct?: AwsDomain.WorkspaceSettingsPropertyOutputReference | AwsDomain.WorkspaceSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_artifact_path: {
      value: cdktn.stringToHclTerraform(struct!.s3ArtifactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainCanvasAppSettingsPropertyToTerraform(struct?: AwsDomain.CanvasAppSettingsPropertyOutputReference | AwsDomain.CanvasAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct_deploy_settings: awsDomainDirectDeploySettingsPropertyToTerraform(struct!.directDeploySettings),
    emr_serverless_settings: awsDomainEmrServerlessSettingsPropertyToTerraform(struct!.emrServerlessSettings),
    generative_ai_settings: awsDomainGenerativeAiSettingsPropertyToTerraform(struct!.generativeAiSettings),
    identity_provider_oauth_settings: cdktn.listMapper(awsDomainIdentityProviderOauthSettingsPropertyToTerraform, true)(struct!.identityProviderOauthSettings),
    kendra_settings: awsDomainKendraSettingsPropertyToTerraform(struct!.kendraSettings),
    model_register_settings: awsDomainModelRegisterSettingsPropertyToTerraform(struct!.modelRegisterSettings),
    time_series_forecasting_settings: awsDomainTimeSeriesForecastingSettingsPropertyToTerraform(struct!.timeSeriesForecastingSettings),
    workspace_settings: awsDomainWorkspaceSettingsPropertyToTerraform(struct!.workspaceSettings),
  }
}


export function awsDomainCanvasAppSettingsPropertyToHclTerraform(struct?: AwsDomain.CanvasAppSettingsPropertyOutputReference | AwsDomain.CanvasAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct_deploy_settings: {
      value: awsDomainDirectDeploySettingsPropertyToHclTerraform(struct!.directDeploySettings),
      isBlock: true,
      type: "list",
      storageClassType: "DirectDeploySettingsPropertyList",
    },
    emr_serverless_settings: {
      value: awsDomainEmrServerlessSettingsPropertyToHclTerraform(struct!.emrServerlessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "EmrServerlessSettingsPropertyList",
    },
    generative_ai_settings: {
      value: awsDomainGenerativeAiSettingsPropertyToHclTerraform(struct!.generativeAiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiSettingsPropertyList",
    },
    identity_provider_oauth_settings: {
      value: cdktn.listMapperHcl(awsDomainIdentityProviderOauthSettingsPropertyToHclTerraform, true)(struct!.identityProviderOauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityProviderOauthSettingsPropertyList",
    },
    kendra_settings: {
      value: awsDomainKendraSettingsPropertyToHclTerraform(struct!.kendraSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraSettingsPropertyList",
    },
    model_register_settings: {
      value: awsDomainModelRegisterSettingsPropertyToHclTerraform(struct!.modelRegisterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ModelRegisterSettingsPropertyList",
    },
    time_series_forecasting_settings: {
      value: awsDomainTimeSeriesForecastingSettingsPropertyToHclTerraform(struct!.timeSeriesForecastingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TimeSeriesForecastingSettingsPropertyList",
    },
    workspace_settings: {
      value: awsDomainWorkspaceSettingsPropertyToHclTerraform(struct!.workspaceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
    lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
    max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
    min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
  }
}


export function awsDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_management: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference | AwsDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: awsDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct!.idleSettings),
  }
}


export function awsDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference | AwsDomain.DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: awsDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsCodeEditorAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function awsDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsCodeEditorAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainCodeEditorAppSettingsPropertyToTerraform(struct?: AwsDomain.CodeEditorAppSettingsPropertyOutputReference | AwsDomain.CodeEditorAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    app_lifecycle_management: awsDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
    custom_image: cdktn.listMapper(awsDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: awsDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function awsDomainCodeEditorAppSettingsPropertyToHclTerraform(struct?: AwsDomain.CodeEditorAppSettingsPropertyOutputReference | AwsDomain.CodeEditorAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    built_in_lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_lifecycle_management: {
      value: awsDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyList",
    },
    custom_image: {
      value: cdktn.listMapperHcl(awsDomainDefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: awsDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyOutputReference | AwsDomain.DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function awsDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyOutputReference | AwsDomain.DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsCustomFileSystemConfigPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsCustomFileSystemConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_system_config: awsDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyToTerraform(struct!.efsFileSystemConfig),
  }
}


export function awsDomainDefaultUserSettingsCustomFileSystemConfigPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsCustomFileSystemConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_system_config: {
      value: awsDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsCustomPosixUserConfigPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsCustomPosixUserConfigPropertyOutputReference | AwsDomain.DefaultUserSettingsCustomPosixUserConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
    uid: cdktn.numberToTerraform(struct!.uid),
  }
}


export function awsDomainDefaultUserSettingsCustomPosixUserConfigPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsCustomPosixUserConfigPropertyOutputReference | AwsDomain.DefaultUserSettingsCustomPosixUserConfigProperty): any {
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


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.idleTimeoutInMinutes),
    lifecycle_management: cdktn.stringToTerraform(struct!.lifecycleManagement),
    max_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
    min_idle_timeout_in_minutes: cdktn.numberToTerraform(struct!.minIdleTimeoutInMinutes),
  }
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_management: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: awsDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct!.idleSettings),
  }
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: awsDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_url: {
      value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsEmrSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assumable_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.assumableRoleArns),
    execution_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.executionRoleArns),
  }
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsEmrSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assumable_role_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.assumableRoleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    execution_role_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.executionRoleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    app_lifecycle_management: awsDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
    code_repository: cdktn.listMapper(awsDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyToTerraform, true)(struct!.codeRepository),
    custom_image: cdktn.listMapper(awsDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: awsDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
    emr_settings: awsDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyToTerraform(struct!.emrSettings),
  }
}


export function awsDomainDefaultUserSettingsJupyterLabAppSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterLabAppSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterLabAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    built_in_lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_lifecycle_management: {
      value: awsDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyList",
    },
    code_repository: {
      value: cdktn.listMapperHcl(awsDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyList",
    },
    custom_image: {
      value: cdktn.listMapperHcl(awsDomainDefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: awsDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyList",
    },
    emr_settings: {
      value: awsDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyToHclTerraform(struct!.emrSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function awsDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_url: {
      value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsJupyterServerAppSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterServerAppSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterServerAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    code_repository: cdktn.listMapper(awsDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyToTerraform, true)(struct!.codeRepository),
    default_resource_spec: awsDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function awsDomainDefaultUserSettingsJupyterServerAppSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsJupyterServerAppSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsJupyterServerAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    code_repository: {
      value: cdktn.listMapperHcl(awsDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyList",
    },
    default_resource_spec: {
      value: awsDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function awsDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsKernelGatewayAppSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktn.listMapper(awsDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: awsDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function awsDomainDefaultUserSettingsKernelGatewayAppSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsKernelGatewayAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_image: {
      value: cdktn.listMapperHcl(awsDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: awsDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsRSessionAppSettingsCustomImagePropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsRSessionAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_image_config_name: cdktn.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktn.stringToTerraform(struct!.imageName),
    image_version_number: cdktn.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function awsDomainDefaultUserSettingsRSessionAppSettingsCustomImagePropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsRSessionAppSettingsCustomImageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktn.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktn.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktn.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainRSessionAppSettingsPropertyToTerraform(struct?: AwsDomain.RSessionAppSettingsPropertyOutputReference | AwsDomain.RSessionAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_image: cdktn.listMapper(awsDomainDefaultUserSettingsRSessionAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: awsDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function awsDomainRSessionAppSettingsPropertyToHclTerraform(struct?: AwsDomain.RSessionAppSettingsPropertyOutputReference | AwsDomain.RSessionAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_image: {
      value: cdktn.listMapperHcl(awsDomainDefaultUserSettingsRSessionAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsRSessionAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: awsDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainRStudioServerProAppSettingsPropertyToTerraform(struct?: AwsDomain.RStudioServerProAppSettingsPropertyOutputReference | AwsDomain.RStudioServerProAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_status: cdktn.stringToTerraform(struct!.accessStatus),
    user_group: cdktn.stringToTerraform(struct!.userGroup),
  }
}


export function awsDomainRStudioServerProAppSettingsPropertyToHclTerraform(struct?: AwsDomain.RStudioServerProAppSettingsPropertyOutputReference | AwsDomain.RStudioServerProAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_status: {
      value: cdktn.stringToHclTerraform(struct!.accessStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group: {
      value: cdktn.stringToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainSharingSettingsPropertyToTerraform(struct?: AwsDomain.SharingSettingsPropertyOutputReference | AwsDomain.SharingSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    notebook_output_option: cdktn.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktn.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function awsDomainSharingSettingsPropertyToHclTerraform(struct?: AwsDomain.SharingSettingsPropertyOutputReference | AwsDomain.SharingSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    notebook_output_option: {
      value: cdktn.stringToHclTerraform(struct!.notebookOutputOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function awsDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ebs_volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsSpaceStorageSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsSpaceStorageSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsSpaceStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_storage_settings: awsDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function awsDomainDefaultUserSettingsSpaceStorageSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsSpaceStorageSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsSpaceStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: awsDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainStudioWebPortalSettingsPropertyToTerraform(struct?: AwsDomain.StudioWebPortalSettingsPropertyOutputReference | AwsDomain.StudioWebPortalSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hidden_app_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenAppTypes),
    hidden_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenInstanceTypes),
    hidden_ml_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hiddenMlTools),
  }
}


export function awsDomainStudioWebPortalSettingsPropertyToHclTerraform(struct?: AwsDomain.StudioWebPortalSettingsPropertyOutputReference | AwsDomain.StudioWebPortalSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hidden_app_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenAppTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hidden_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hidden_ml_tools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hiddenMlTools),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainTensorBoardAppSettingsPropertyToTerraform(struct?: AwsDomain.TensorBoardAppSettingsPropertyOutputReference | AwsDomain.TensorBoardAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_resource_spec: awsDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function awsDomainTensorBoardAppSettingsPropertyToHclTerraform(struct?: AwsDomain.TensorBoardAppSettingsPropertyOutputReference | AwsDomain.TensorBoardAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_resource_spec: {
      value: awsDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDefaultUserSettingsPropertyToTerraform(struct?: AwsDomain.DefaultUserSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_mount_home_efs: cdktn.stringToTerraform(struct!.autoMountHomeEfs),
    default_landing_uri: cdktn.stringToTerraform(struct!.defaultLandingUri),
    execution_role: cdktn.stringToTerraform(struct!.executionRole),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    studio_web_portal: cdktn.stringToTerraform(struct!.studioWebPortal),
    canvas_app_settings: awsDomainCanvasAppSettingsPropertyToTerraform(struct!.canvasAppSettings),
    code_editor_app_settings: awsDomainCodeEditorAppSettingsPropertyToTerraform(struct!.codeEditorAppSettings),
    custom_file_system_config: cdktn.listMapper(awsDomainDefaultUserSettingsCustomFileSystemConfigPropertyToTerraform, true)(struct!.customFileSystemConfig),
    custom_posix_user_config: awsDomainDefaultUserSettingsCustomPosixUserConfigPropertyToTerraform(struct!.customPosixUserConfig),
    jupyter_lab_app_settings: awsDomainDefaultUserSettingsJupyterLabAppSettingsPropertyToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: awsDomainDefaultUserSettingsJupyterServerAppSettingsPropertyToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: awsDomainDefaultUserSettingsKernelGatewayAppSettingsPropertyToTerraform(struct!.kernelGatewayAppSettings),
    r_session_app_settings: awsDomainRSessionAppSettingsPropertyToTerraform(struct!.rSessionAppSettings),
    r_studio_server_pro_app_settings: awsDomainRStudioServerProAppSettingsPropertyToTerraform(struct!.rStudioServerProAppSettings),
    sharing_settings: awsDomainSharingSettingsPropertyToTerraform(struct!.sharingSettings),
    space_storage_settings: awsDomainDefaultUserSettingsSpaceStorageSettingsPropertyToTerraform(struct!.spaceStorageSettings),
    studio_web_portal_settings: awsDomainStudioWebPortalSettingsPropertyToTerraform(struct!.studioWebPortalSettings),
    tensor_board_app_settings: awsDomainTensorBoardAppSettingsPropertyToTerraform(struct!.tensorBoardAppSettings),
  }
}


export function awsDomainDefaultUserSettingsPropertyToHclTerraform(struct?: AwsDomain.DefaultUserSettingsPropertyOutputReference | AwsDomain.DefaultUserSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_mount_home_efs: {
      value: cdktn.stringToHclTerraform(struct!.autoMountHomeEfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_landing_uri: {
      value: cdktn.stringToHclTerraform(struct!.defaultLandingUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role: {
      value: cdktn.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    studio_web_portal: {
      value: cdktn.stringToHclTerraform(struct!.studioWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canvas_app_settings: {
      value: awsDomainCanvasAppSettingsPropertyToHclTerraform(struct!.canvasAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CanvasAppSettingsPropertyList",
    },
    code_editor_app_settings: {
      value: awsDomainCodeEditorAppSettingsPropertyToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CodeEditorAppSettingsPropertyList",
    },
    custom_file_system_config: {
      value: cdktn.listMapperHcl(awsDomainDefaultUserSettingsCustomFileSystemConfigPropertyToHclTerraform, true)(struct!.customFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsCustomFileSystemConfigPropertyList",
    },
    custom_posix_user_config: {
      value: awsDomainDefaultUserSettingsCustomPosixUserConfigPropertyToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsCustomPosixUserConfigPropertyList",
    },
    jupyter_lab_app_settings: {
      value: awsDomainDefaultUserSettingsJupyterLabAppSettingsPropertyToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsJupyterLabAppSettingsPropertyList",
    },
    jupyter_server_app_settings: {
      value: awsDomainDefaultUserSettingsJupyterServerAppSettingsPropertyToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsJupyterServerAppSettingsPropertyList",
    },
    kernel_gateway_app_settings: {
      value: awsDomainDefaultUserSettingsKernelGatewayAppSettingsPropertyToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsKernelGatewayAppSettingsPropertyList",
    },
    r_session_app_settings: {
      value: awsDomainRSessionAppSettingsPropertyToHclTerraform(struct!.rSessionAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RSessionAppSettingsPropertyList",
    },
    r_studio_server_pro_app_settings: {
      value: awsDomainRStudioServerProAppSettingsPropertyToHclTerraform(struct!.rStudioServerProAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RStudioServerProAppSettingsPropertyList",
    },
    sharing_settings: {
      value: awsDomainSharingSettingsPropertyToHclTerraform(struct!.sharingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SharingSettingsPropertyList",
    },
    space_storage_settings: {
      value: awsDomainDefaultUserSettingsSpaceStorageSettingsPropertyToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultUserSettingsSpaceStorageSettingsPropertyList",
    },
    studio_web_portal_settings: {
      value: awsDomainStudioWebPortalSettingsPropertyToHclTerraform(struct!.studioWebPortalSettings),
      isBlock: true,
      type: "list",
      storageClassType: "StudioWebPortalSettingsPropertyList",
    },
    tensor_board_app_settings: {
      value: awsDomainTensorBoardAppSettingsPropertyToHclTerraform(struct!.tensorBoardAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TensorBoardAppSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDockerSettingsPropertyToTerraform(struct?: AwsDomain.DockerSettingsPropertyOutputReference | AwsDomain.DockerSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_docker_access: cdktn.stringToTerraform(struct!.enableDockerAccess),
    vpc_only_trusted_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcOnlyTrustedAccounts),
  }
}


export function awsDomainDockerSettingsPropertyToHclTerraform(struct?: AwsDomain.DockerSettingsPropertyOutputReference | AwsDomain.DockerSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_docker_access: {
      value: cdktn.stringToHclTerraform(struct!.enableDockerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_only_trusted_accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcOnlyTrustedAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyToTerraform(struct?: AwsDomain.DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktn.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktn.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktn.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function awsDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: AwsDomain.DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyOutputReference | AwsDomain.DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainRStudioServerProDomainSettingsPropertyToTerraform(struct?: AwsDomain.RStudioServerProDomainSettingsPropertyOutputReference | AwsDomain.RStudioServerProDomainSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_execution_role_arn: cdktn.stringToTerraform(struct!.domainExecutionRoleArn),
    r_studio_connect_url: cdktn.stringToTerraform(struct!.rStudioConnectUrl),
    r_studio_package_manager_url: cdktn.stringToTerraform(struct!.rStudioPackageManagerUrl),
    default_resource_spec: awsDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function awsDomainRStudioServerProDomainSettingsPropertyToHclTerraform(struct?: AwsDomain.RStudioServerProDomainSettingsPropertyOutputReference | AwsDomain.RStudioServerProDomainSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.domainExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_connect_url: {
      value: cdktn.stringToHclTerraform(struct!.rStudioConnectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_package_manager_url: {
      value: cdktn.stringToHclTerraform(struct!.rStudioPackageManagerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_resource_spec: {
      value: awsDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainTrustedIdentityPropagationSettingsPropertyToTerraform(struct?: AwsDomain.TrustedIdentityPropagationSettingsPropertyOutputReference | AwsDomain.TrustedIdentityPropagationSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function awsDomainTrustedIdentityPropagationSettingsPropertyToHclTerraform(struct?: AwsDomain.TrustedIdentityPropagationSettingsPropertyOutputReference | AwsDomain.TrustedIdentityPropagationSettingsProperty): any {
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


export function awsDomainDomainSettingsPropertyToTerraform(struct?: AwsDomain.DomainSettingsPropertyOutputReference | AwsDomain.DomainSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_role_identity_config: cdktn.stringToTerraform(struct!.executionRoleIdentityConfig),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    docker_settings: awsDomainDockerSettingsPropertyToTerraform(struct!.dockerSettings),
    r_studio_server_pro_domain_settings: awsDomainRStudioServerProDomainSettingsPropertyToTerraform(struct!.rStudioServerProDomainSettings),
    trusted_identity_propagation_settings: awsDomainTrustedIdentityPropagationSettingsPropertyToTerraform(struct!.trustedIdentityPropagationSettings),
  }
}


export function awsDomainDomainSettingsPropertyToHclTerraform(struct?: AwsDomain.DomainSettingsPropertyOutputReference | AwsDomain.DomainSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_role_identity_config: {
      value: cdktn.stringToHclTerraform(struct!.executionRoleIdentityConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    docker_settings: {
      value: awsDomainDockerSettingsPropertyToHclTerraform(struct!.dockerSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DockerSettingsPropertyList",
    },
    r_studio_server_pro_domain_settings: {
      value: awsDomainRStudioServerProDomainSettingsPropertyToHclTerraform(struct!.rStudioServerProDomainSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RStudioServerProDomainSettingsPropertyList",
    },
    trusted_identity_propagation_settings: {
      value: awsDomainTrustedIdentityPropagationSettingsPropertyToHclTerraform(struct!.trustedIdentityPropagationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TrustedIdentityPropagationSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsDomainRetentionPolicyPropertyToTerraform(struct?: AwsDomain.RetentionPolicyPropertyOutputReference | AwsDomain.RetentionPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    home_efs_file_system: cdktn.stringToTerraform(struct!.homeEfsFileSystem),
  }
}


export function awsDomainRetentionPolicyPropertyToHclTerraform(struct?: AwsDomain.RetentionPolicyPropertyOutputReference | AwsDomain.RetentionPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    home_efs_file_system: {
      value: cdktn.stringToHclTerraform(struct!.homeEfsFileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsDomain {
export interface DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#file_system_id AwsDomain#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#file_system_path AwsDomain#file_system_path}
  */
  readonly fileSystemPath: string;
}
export class DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
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
}
export interface DefaultSpaceSettingsCustomFileSystemConfigProperty {
  /**
  * efs_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#efs_file_system_config AwsDomain#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigProperty;
}
export class DefaultSpaceSettingsCustomFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultSpaceSettingsCustomFileSystemConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsCustomFileSystemConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
    }
  }

  // efs_file_system_config - computed: false, optional: true, required: false
  private _efsFileSystemConfig = new DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: DefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigProperty) {
    this._efsFileSystemConfig.internalValue = value;
  }
  public resetEfsFileSystemConfig() {
    this._efsFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemConfigInput() {
    return this._efsFileSystemConfig.internalValue;
  }
}

export class DefaultSpaceSettingsCustomFileSystemConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultSpaceSettingsCustomFileSystemConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultSpaceSettingsCustomFileSystemConfigPropertyOutputReference {
    return new DefaultSpaceSettingsCustomFileSystemConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultSpaceSettingsCustomPosixUserConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#gid AwsDomain#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#uid AwsDomain#uid}
  */
  readonly uid: number;
}
export class DefaultSpaceSettingsCustomPosixUserConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsCustomPosixUserConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsCustomPosixUserConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gid = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gid = value.gid;
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
export interface DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes AwsDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_management AwsDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes AwsDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes AwsDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}
export class DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._lifecycleManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleManagement = this._lifecycleManagement;
    }
    if (this._maxIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
    }
    if (this._minIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._lifecycleManagement = undefined;
      this._maxIdleTimeoutInMinutes = undefined;
      this._minIdleTimeoutInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._lifecycleManagement = value.lifecycleManagement;
      this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
      this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // lifecycle_management - computed: false, optional: true, required: false
  private _lifecycleManagement?: string; 
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }
  public set lifecycleManagement(value: string) {
    this._lifecycleManagement = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement;
  }

  // max_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxIdleTimeoutInMinutes?: number; 
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }
  public set maxIdleTimeoutInMinutes(value: number) {
    this._maxIdleTimeoutInMinutes = value;
  }
  public resetMaxIdleTimeoutInMinutes() {
    this._maxIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInMinutesInput() {
    return this._maxIdleTimeoutInMinutes;
  }

  // min_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _minIdleTimeoutInMinutes?: number; 
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
  public set minIdleTimeoutInMinutes(value: number) {
    this._minIdleTimeoutInMinutes = value;
  }
  public resetMinIdleTimeoutInMinutes() {
    this._minIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleTimeoutInMinutesInput() {
    return this._minIdleTimeoutInMinutes;
  }
}
export interface DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementProperty {
  /**
  * idle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#idle_settings AwsDomain#idle_settings}
  */
  readonly idleSettings?: DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty;
}
export class DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleSettings.internalValue = value.idleSettings;
    }
  }

  // idle_settings - computed: false, optional: true, required: false
  private _idleSettings = new DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty) {
    this._idleSettings.internalValue = value;
  }
  public resetIdleSettings() {
    this._idleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSettingsInput() {
    return this._idleSettings.internalValue;
  }
}
export interface DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#repository_url AwsDomain#repository_url}
  */
  readonly repositoryUrl: string;
}
export class DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference {
    return new DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultSpaceSettingsJupyterLabAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_image_config_name AwsDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_name AwsDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_version_number AwsDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class DefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultSpaceSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultSpaceSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference {
    return new DefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#assumable_role_arns AwsDomain#assumable_role_arns}
  */
  readonly assumableRoleArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#execution_role_arns AwsDomain#execution_role_arns}
  */
  readonly executionRoleArns?: string[];
}
export class DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumableRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumableRoleArns = this._assumableRoleArns;
    }
    if (this._executionRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArns = this._executionRoleArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assumableRoleArns = undefined;
      this._executionRoleArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assumableRoleArns = value.assumableRoleArns;
      this._executionRoleArns = value.executionRoleArns;
    }
  }

  // assumable_role_arns - computed: false, optional: true, required: false
  private _assumableRoleArns?: string[]; 
  public get assumableRoleArns() {
    return cdktn.Fn.tolist(this.getListAttribute('assumable_role_arns'));
  }
  public set assumableRoleArns(value: string[]) {
    this._assumableRoleArns = value;
  }
  public resetAssumableRoleArns() {
    this._assumableRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumableRoleArnsInput() {
    return this._assumableRoleArns;
  }

  // execution_role_arns - computed: false, optional: true, required: false
  private _executionRoleArns?: string[]; 
  public get executionRoleArns() {
    return cdktn.Fn.tolist(this.getListAttribute('execution_role_arns'));
  }
  public set executionRoleArns(value: string[]) {
    this._executionRoleArns = value;
  }
  public resetExecutionRoleArns() {
    this._executionRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnsInput() {
    return this._executionRoleArns;
  }
}
export interface DefaultSpaceSettingsJupyterLabAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn AwsDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arns AwsDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * app_lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_lifecycle_management AwsDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementProperty;
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#code_repository AwsDomain#code_repository}
  */
  readonly codeRepository?: DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_image AwsDomain#custom_image}
  */
  readonly customImage?: DefaultSpaceSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty;
  /**
  * emr_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#emr_settings AwsDomain#emr_settings}
  */
  readonly emrSettings?: DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsProperty;
}
export class DefaultSpaceSettingsJupyterLabAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsJupyterLabAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInLifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._appLifecycleManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._emrSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrSettings = this._emrSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterLabAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtInLifecycleConfigArn = undefined;
      this._lifecycleConfigArns = undefined;
      this._appLifecycleManagement.internalValue = undefined;
      this._codeRepository.internalValue = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._emrSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
      this._codeRepository.internalValue = value.codeRepository;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._emrSettings.internalValue = value.emrSettings;
    }
  }

  // built_in_lifecycle_config_arn - computed: false, optional: true, required: false
  private _builtInLifecycleConfigArn?: string; 
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }
  public set builtInLifecycleConfigArn(value: string) {
    this._builtInLifecycleConfigArn = value;
  }
  public resetBuiltInLifecycleConfigArn() {
    this._builtInLifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInLifecycleConfigArnInput() {
    return this._builtInLifecycleConfigArn;
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktn.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // app_lifecycle_management - computed: false, optional: true, required: false
  private _appLifecycleManagement = new DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: DefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementProperty) {
    this._appLifecycleManagement.internalValue = value;
  }
  public resetAppLifecycleManagement() {
    this._appLifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLifecycleManagementInput() {
    return this._appLifecycleManagement.internalValue;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryPropertyList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: DefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new DefaultSpaceSettingsJupyterLabAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: DefaultSpaceSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // emr_settings - computed: false, optional: true, required: false
  private _emrSettings = new DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsPropertyOutputReference(this, "emr_settings");
  public get emrSettings() {
    return this._emrSettings;
  }
  public putEmrSettings(value: DefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsProperty) {
    this._emrSettings.internalValue = value;
  }
  public resetEmrSettings() {
    this._emrSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrSettingsInput() {
    return this._emrSettings.internalValue;
  }
}
export interface DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#repository_url AwsDomain#repository_url}
  */
  readonly repositoryUrl: string;
}
export class DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference {
    return new DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface DefaultSpaceSettingsJupyterServerAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arns AwsDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#code_repository AwsDomain#code_repository}
  */
  readonly codeRepository?: DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty;
}
export class DefaultSpaceSettingsJupyterServerAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsJupyterServerAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsJupyterServerAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._codeRepository.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._codeRepository.internalValue = value.codeRepository;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktn.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryPropertyList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: DefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface DefaultSpaceSettingsKernelGatewayAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_image_config_name AwsDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_name AwsDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_version_number AwsDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultSpaceSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultSpaceSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference {
    return new DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface DefaultSpaceSettingsKernelGatewayAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arns AwsDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_image AwsDomain#custom_image}
  */
  readonly customImage?: DefaultSpaceSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty;
}
export class DefaultSpaceSettingsKernelGatewayAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsKernelGatewayAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsKernelGatewayAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktn.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new DefaultSpaceSettingsKernelGatewayAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: DefaultSpaceSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb AwsDomain#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb AwsDomain#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb: number;
}
export class DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
    }
    if (this._maximumEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsVolumeSizeInGb = undefined;
      this._maximumEbsVolumeSizeInGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
      this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
    }
  }

  // default_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _defaultEbsVolumeSizeInGb?: number; 
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }
  public set defaultEbsVolumeSizeInGb(value: number) {
    this._defaultEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsVolumeSizeInGbInput() {
    return this._defaultEbsVolumeSizeInGb;
  }

  // maximum_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _maximumEbsVolumeSizeInGb?: number; 
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
  public set maximumEbsVolumeSizeInGb(value: number) {
    this._maximumEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEbsVolumeSizeInGbInput() {
    return this._maximumEbsVolumeSizeInGb;
  }
}
export interface DefaultSpaceSettingsSpaceStorageSettingsProperty {
  /**
  * default_ebs_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_ebs_storage_settings AwsDomain#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty;
}
export class DefaultSpaceSettingsSpaceStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsSpaceStorageSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsSpaceStorageSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
    }
  }

  // default_ebs_storage_settings - computed: false, optional: true, required: false
  private _defaultEbsStorageSettings = new DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: DefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty) {
    this._defaultEbsStorageSettings.internalValue = value;
  }
  public resetDefaultEbsStorageSettings() {
    this._defaultEbsStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsStorageSettingsInput() {
    return this._defaultEbsStorageSettings.internalValue;
  }
}
export interface DefaultSpaceSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#execution_role AwsDomain#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#security_groups AwsDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * custom_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_file_system_config AwsDomain#custom_file_system_config}
  */
  readonly customFileSystemConfig?: DefaultSpaceSettingsCustomFileSystemConfigProperty[] | cdktn.IResolvable;
  /**
  * custom_posix_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_posix_user_config AwsDomain#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: DefaultSpaceSettingsCustomPosixUserConfigProperty;
  /**
  * jupyter_lab_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#jupyter_lab_app_settings AwsDomain#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: DefaultSpaceSettingsJupyterLabAppSettingsProperty;
  /**
  * jupyter_server_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#jupyter_server_app_settings AwsDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: DefaultSpaceSettingsJupyterServerAppSettingsProperty;
  /**
  * kernel_gateway_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#kernel_gateway_app_settings AwsDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: DefaultSpaceSettingsKernelGatewayAppSettingsProperty;
  /**
  * space_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#space_storage_settings AwsDomain#space_storage_settings}
  */
  readonly spaceStorageSettings?: DefaultSpaceSettingsSpaceStorageSettingsProperty;
}
export class DefaultSpaceSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultSpaceSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._customFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfig = this._customFileSystemConfig?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultSpaceSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRole = undefined;
      this._securityGroups = undefined;
      this._customFileSystemConfig.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRole = value.executionRole;
      this._securityGroups = value.securityGroups;
      this._customFileSystemConfig.internalValue = value.customFileSystemConfig;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
    }
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // custom_file_system_config - computed: false, optional: true, required: false
  private _customFileSystemConfig = new DefaultSpaceSettingsCustomFileSystemConfigPropertyList(this, "custom_file_system_config", false);
  public get customFileSystemConfig() {
    return this._customFileSystemConfig;
  }
  public putCustomFileSystemConfig(value: DefaultSpaceSettingsCustomFileSystemConfigProperty[] | cdktn.IResolvable) {
    this._customFileSystemConfig.internalValue = value;
  }
  public resetCustomFileSystemConfig() {
    this._customFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemConfigInput() {
    return this._customFileSystemConfig.internalValue;
  }

  // custom_posix_user_config - computed: false, optional: true, required: false
  private _customPosixUserConfig = new DefaultSpaceSettingsCustomPosixUserConfigPropertyOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: DefaultSpaceSettingsCustomPosixUserConfigProperty) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
  }

  // jupyter_lab_app_settings - computed: false, optional: true, required: false
  private _jupyterLabAppSettings = new DefaultSpaceSettingsJupyterLabAppSettingsPropertyOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: DefaultSpaceSettingsJupyterLabAppSettingsProperty) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new DefaultSpaceSettingsJupyterServerAppSettingsPropertyOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: DefaultSpaceSettingsJupyterServerAppSettingsProperty) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new DefaultSpaceSettingsKernelGatewayAppSettingsPropertyOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: DefaultSpaceSettingsKernelGatewayAppSettingsProperty) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // space_storage_settings - computed: false, optional: true, required: false
  private _spaceStorageSettings = new DefaultSpaceSettingsSpaceStorageSettingsPropertyOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: DefaultSpaceSettingsSpaceStorageSettingsProperty) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }
}
export interface DirectDeploySettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#status AwsDomain#status}
  */
  readonly status?: string;
}
export class DirectDeploySettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DirectDeploySettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectDeploySettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
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
export interface EmrServerlessSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#execution_role_arn AwsDomain#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#status AwsDomain#status}
  */
  readonly status?: string;
}
export class EmrServerlessSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrServerlessSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrServerlessSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRoleArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRoleArn = value.executionRoleArn;
      this._status = value.status;
    }
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // status - computed: false, optional: true, required: false
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
export interface GenerativeAiSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#amazon_bedrock_role_arn AwsDomain#amazon_bedrock_role_arn}
  */
  readonly amazonBedrockRoleArn?: string;
}
export class GenerativeAiSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonBedrockRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonBedrockRoleArn = this._amazonBedrockRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonBedrockRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonBedrockRoleArn = value.amazonBedrockRoleArn;
    }
  }

  // amazon_bedrock_role_arn - computed: false, optional: true, required: false
  private _amazonBedrockRoleArn?: string; 
  public get amazonBedrockRoleArn() {
    return this.getStringAttribute('amazon_bedrock_role_arn');
  }
  public set amazonBedrockRoleArn(value: string) {
    this._amazonBedrockRoleArn = value;
  }
  public resetAmazonBedrockRoleArn() {
    this._amazonBedrockRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonBedrockRoleArnInput() {
    return this._amazonBedrockRoleArn;
  }
}
export interface IdentityProviderOauthSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#data_source_name AwsDomain#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#secret_arn AwsDomain#secret_arn}
  */
  readonly secretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#status AwsDomain#status}
  */
  readonly status?: string;
}
export class IdentityProviderOauthSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdentityProviderOauthSettingsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderOauthSettingsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._secretArn = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._secretArn = value.secretArn;
      this._status = value.status;
    }
  }

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // status - computed: false, optional: true, required: false
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

export class IdentityProviderOauthSettingsPropertyList extends cdktn.ComplexList {
  public internalValue? : IdentityProviderOauthSettingsProperty[] | cdktn.IResolvable

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
  public get(index: number): IdentityProviderOauthSettingsPropertyOutputReference {
    return new IdentityProviderOauthSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#status AwsDomain#status}
  */
  readonly status?: string;
}
export class KendraSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
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
export interface ModelRegisterSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#cross_account_model_register_role_arn AwsDomain#cross_account_model_register_role_arn}
  */
  readonly crossAccountModelRegisterRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#status AwsDomain#status}
  */
  readonly status?: string;
}
export class ModelRegisterSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelRegisterSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountModelRegisterRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountModelRegisterRoleArn = this._crossAccountModelRegisterRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelRegisterSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossAccountModelRegisterRoleArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossAccountModelRegisterRoleArn = value.crossAccountModelRegisterRoleArn;
      this._status = value.status;
    }
  }

  // cross_account_model_register_role_arn - computed: false, optional: true, required: false
  private _crossAccountModelRegisterRoleArn?: string; 
  public get crossAccountModelRegisterRoleArn() {
    return this.getStringAttribute('cross_account_model_register_role_arn');
  }
  public set crossAccountModelRegisterRoleArn(value: string) {
    this._crossAccountModelRegisterRoleArn = value;
  }
  public resetCrossAccountModelRegisterRoleArn() {
    this._crossAccountModelRegisterRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountModelRegisterRoleArnInput() {
    return this._crossAccountModelRegisterRoleArn;
  }

  // status - computed: false, optional: true, required: false
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
export interface TimeSeriesForecastingSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#amazon_forecast_role_arn AwsDomain#amazon_forecast_role_arn}
  */
  readonly amazonForecastRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#status AwsDomain#status}
  */
  readonly status?: string;
}
export class TimeSeriesForecastingSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TimeSeriesForecastingSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonForecastRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonForecastRoleArn = this._amazonForecastRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimeSeriesForecastingSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonForecastRoleArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonForecastRoleArn = value.amazonForecastRoleArn;
      this._status = value.status;
    }
  }

  // amazon_forecast_role_arn - computed: false, optional: true, required: false
  private _amazonForecastRoleArn?: string; 
  public get amazonForecastRoleArn() {
    return this.getStringAttribute('amazon_forecast_role_arn');
  }
  public set amazonForecastRoleArn(value: string) {
    this._amazonForecastRoleArn = value;
  }
  public resetAmazonForecastRoleArn() {
    this._amazonForecastRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonForecastRoleArnInput() {
    return this._amazonForecastRoleArn;
  }

  // status - computed: false, optional: true, required: false
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
export interface WorkspaceSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#s3_artifact_path AwsDomain#s3_artifact_path}
  */
  readonly s3ArtifactPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#s3_kms_key_id AwsDomain#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
}
export class WorkspaceSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspaceSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ArtifactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ArtifactPath = this._s3ArtifactPath;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3ArtifactPath = undefined;
      this._s3KmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3ArtifactPath = value.s3ArtifactPath;
      this._s3KmsKeyId = value.s3KmsKeyId;
    }
  }

  // s3_artifact_path - computed: false, optional: true, required: false
  private _s3ArtifactPath?: string; 
  public get s3ArtifactPath() {
    return this.getStringAttribute('s3_artifact_path');
  }
  public set s3ArtifactPath(value: string) {
    this._s3ArtifactPath = value;
  }
  public resetS3ArtifactPath() {
    this._s3ArtifactPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ArtifactPathInput() {
    return this._s3ArtifactPath;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }
}
export interface CanvasAppSettingsProperty {
  /**
  * direct_deploy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#direct_deploy_settings AwsDomain#direct_deploy_settings}
  */
  readonly directDeploySettings?: DirectDeploySettingsProperty;
  /**
  * emr_serverless_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#emr_serverless_settings AwsDomain#emr_serverless_settings}
  */
  readonly emrServerlessSettings?: EmrServerlessSettingsProperty;
  /**
  * generative_ai_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#generative_ai_settings AwsDomain#generative_ai_settings}
  */
  readonly generativeAiSettings?: GenerativeAiSettingsProperty;
  /**
  * identity_provider_oauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#identity_provider_oauth_settings AwsDomain#identity_provider_oauth_settings}
  */
  readonly identityProviderOauthSettings?: IdentityProviderOauthSettingsProperty[] | cdktn.IResolvable;
  /**
  * kendra_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#kendra_settings AwsDomain#kendra_settings}
  */
  readonly kendraSettings?: KendraSettingsProperty;
  /**
  * model_register_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#model_register_settings AwsDomain#model_register_settings}
  */
  readonly modelRegisterSettings?: ModelRegisterSettingsProperty;
  /**
  * time_series_forecasting_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#time_series_forecasting_settings AwsDomain#time_series_forecasting_settings}
  */
  readonly timeSeriesForecastingSettings?: TimeSeriesForecastingSettingsProperty;
  /**
  * workspace_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#workspace_settings AwsDomain#workspace_settings}
  */
  readonly workspaceSettings?: WorkspaceSettingsProperty;
}
export class CanvasAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CanvasAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directDeploySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directDeploySettings = this._directDeploySettings?.internalValue;
    }
    if (this._emrServerlessSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrServerlessSettings = this._emrServerlessSettings?.internalValue;
    }
    if (this._generativeAiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeAiSettings = this._generativeAiSettings?.internalValue;
    }
    if (this._identityProviderOauthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderOauthSettings = this._identityProviderOauthSettings?.internalValue;
    }
    if (this._kendraSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraSettings = this._kendraSettings?.internalValue;
    }
    if (this._modelRegisterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelRegisterSettings = this._modelRegisterSettings?.internalValue;
    }
    if (this._timeSeriesForecastingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeriesForecastingSettings = this._timeSeriesForecastingSettings?.internalValue;
    }
    if (this._workspaceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceSettings = this._workspaceSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CanvasAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directDeploySettings.internalValue = undefined;
      this._emrServerlessSettings.internalValue = undefined;
      this._generativeAiSettings.internalValue = undefined;
      this._identityProviderOauthSettings.internalValue = undefined;
      this._kendraSettings.internalValue = undefined;
      this._modelRegisterSettings.internalValue = undefined;
      this._timeSeriesForecastingSettings.internalValue = undefined;
      this._workspaceSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directDeploySettings.internalValue = value.directDeploySettings;
      this._emrServerlessSettings.internalValue = value.emrServerlessSettings;
      this._generativeAiSettings.internalValue = value.generativeAiSettings;
      this._identityProviderOauthSettings.internalValue = value.identityProviderOauthSettings;
      this._kendraSettings.internalValue = value.kendraSettings;
      this._modelRegisterSettings.internalValue = value.modelRegisterSettings;
      this._timeSeriesForecastingSettings.internalValue = value.timeSeriesForecastingSettings;
      this._workspaceSettings.internalValue = value.workspaceSettings;
    }
  }

  // direct_deploy_settings - computed: false, optional: true, required: false
  private _directDeploySettings = new DirectDeploySettingsPropertyOutputReference(this, "direct_deploy_settings");
  public get directDeploySettings() {
    return this._directDeploySettings;
  }
  public putDirectDeploySettings(value: DirectDeploySettingsProperty) {
    this._directDeploySettings.internalValue = value;
  }
  public resetDirectDeploySettings() {
    this._directDeploySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directDeploySettingsInput() {
    return this._directDeploySettings.internalValue;
  }

  // emr_serverless_settings - computed: false, optional: true, required: false
  private _emrServerlessSettings = new EmrServerlessSettingsPropertyOutputReference(this, "emr_serverless_settings");
  public get emrServerlessSettings() {
    return this._emrServerlessSettings;
  }
  public putEmrServerlessSettings(value: EmrServerlessSettingsProperty) {
    this._emrServerlessSettings.internalValue = value;
  }
  public resetEmrServerlessSettings() {
    this._emrServerlessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrServerlessSettingsInput() {
    return this._emrServerlessSettings.internalValue;
  }

  // generative_ai_settings - computed: false, optional: true, required: false
  private _generativeAiSettings = new GenerativeAiSettingsPropertyOutputReference(this, "generative_ai_settings");
  public get generativeAiSettings() {
    return this._generativeAiSettings;
  }
  public putGenerativeAiSettings(value: GenerativeAiSettingsProperty) {
    this._generativeAiSettings.internalValue = value;
  }
  public resetGenerativeAiSettings() {
    this._generativeAiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeAiSettingsInput() {
    return this._generativeAiSettings.internalValue;
  }

  // identity_provider_oauth_settings - computed: false, optional: true, required: false
  private _identityProviderOauthSettings = new IdentityProviderOauthSettingsPropertyList(this, "identity_provider_oauth_settings", false);
  public get identityProviderOauthSettings() {
    return this._identityProviderOauthSettings;
  }
  public putIdentityProviderOauthSettings(value: IdentityProviderOauthSettingsProperty[] | cdktn.IResolvable) {
    this._identityProviderOauthSettings.internalValue = value;
  }
  public resetIdentityProviderOauthSettings() {
    this._identityProviderOauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderOauthSettingsInput() {
    return this._identityProviderOauthSettings.internalValue;
  }

  // kendra_settings - computed: false, optional: true, required: false
  private _kendraSettings = new KendraSettingsPropertyOutputReference(this, "kendra_settings");
  public get kendraSettings() {
    return this._kendraSettings;
  }
  public putKendraSettings(value: KendraSettingsProperty) {
    this._kendraSettings.internalValue = value;
  }
  public resetKendraSettings() {
    this._kendraSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraSettingsInput() {
    return this._kendraSettings.internalValue;
  }

  // model_register_settings - computed: false, optional: true, required: false
  private _modelRegisterSettings = new ModelRegisterSettingsPropertyOutputReference(this, "model_register_settings");
  public get modelRegisterSettings() {
    return this._modelRegisterSettings;
  }
  public putModelRegisterSettings(value: ModelRegisterSettingsProperty) {
    this._modelRegisterSettings.internalValue = value;
  }
  public resetModelRegisterSettings() {
    this._modelRegisterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelRegisterSettingsInput() {
    return this._modelRegisterSettings.internalValue;
  }

  // time_series_forecasting_settings - computed: false, optional: true, required: false
  private _timeSeriesForecastingSettings = new TimeSeriesForecastingSettingsPropertyOutputReference(this, "time_series_forecasting_settings");
  public get timeSeriesForecastingSettings() {
    return this._timeSeriesForecastingSettings;
  }
  public putTimeSeriesForecastingSettings(value: TimeSeriesForecastingSettingsProperty) {
    this._timeSeriesForecastingSettings.internalValue = value;
  }
  public resetTimeSeriesForecastingSettings() {
    this._timeSeriesForecastingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesForecastingSettingsInput() {
    return this._timeSeriesForecastingSettings.internalValue;
  }

  // workspace_settings - computed: false, optional: true, required: false
  private _workspaceSettings = new WorkspaceSettingsPropertyOutputReference(this, "workspace_settings");
  public get workspaceSettings() {
    return this._workspaceSettings;
  }
  public putWorkspaceSettings(value: WorkspaceSettingsProperty) {
    this._workspaceSettings.internalValue = value;
  }
  public resetWorkspaceSettings() {
    this._workspaceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSettingsInput() {
    return this._workspaceSettings.internalValue;
  }
}
export interface DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes AwsDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_management AwsDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes AwsDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes AwsDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}
export class DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._lifecycleManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleManagement = this._lifecycleManagement;
    }
    if (this._maxIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
    }
    if (this._minIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._lifecycleManagement = undefined;
      this._maxIdleTimeoutInMinutes = undefined;
      this._minIdleTimeoutInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._lifecycleManagement = value.lifecycleManagement;
      this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
      this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // lifecycle_management - computed: false, optional: true, required: false
  private _lifecycleManagement?: string; 
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }
  public set lifecycleManagement(value: string) {
    this._lifecycleManagement = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement;
  }

  // max_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxIdleTimeoutInMinutes?: number; 
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }
  public set maxIdleTimeoutInMinutes(value: number) {
    this._maxIdleTimeoutInMinutes = value;
  }
  public resetMaxIdleTimeoutInMinutes() {
    this._maxIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInMinutesInput() {
    return this._maxIdleTimeoutInMinutes;
  }

  // min_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _minIdleTimeoutInMinutes?: number; 
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
  public set minIdleTimeoutInMinutes(value: number) {
    this._minIdleTimeoutInMinutes = value;
  }
  public resetMinIdleTimeoutInMinutes() {
    this._minIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleTimeoutInMinutesInput() {
    return this._minIdleTimeoutInMinutes;
  }
}
export interface DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty {
  /**
  * idle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#idle_settings AwsDomain#idle_settings}
  */
  readonly idleSettings?: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty;
}
export class DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleSettings.internalValue = value.idleSettings;
    }
  }

  // idle_settings - computed: false, optional: true, required: false
  private _idleSettings = new DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty) {
    this._idleSettings.internalValue = value;
  }
  public resetIdleSettings() {
    this._idleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSettingsInput() {
    return this._idleSettings.internalValue;
  }
}
export interface DefaultUserSettingsCodeEditorAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_image_config_name AwsDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_name AwsDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_version_number AwsDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class DefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultUserSettingsCodeEditorAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsCodeEditorAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultUserSettingsCodeEditorAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyOutputReference {
    return new DefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface CodeEditorAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn AwsDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arns AwsDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * app_lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_lifecycle_management AwsDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_image AwsDomain#custom_image}
  */
  readonly customImage?: DefaultUserSettingsCodeEditorAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty;
}
export class CodeEditorAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeEditorAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInLifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._appLifecycleManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeEditorAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtInLifecycleConfigArn = undefined;
      this._lifecycleConfigArns = undefined;
      this._appLifecycleManagement.internalValue = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // built_in_lifecycle_config_arn - computed: false, optional: true, required: false
  private _builtInLifecycleConfigArn?: string; 
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }
  public set builtInLifecycleConfigArn(value: string) {
    this._builtInLifecycleConfigArn = value;
  }
  public resetBuiltInLifecycleConfigArn() {
    this._builtInLifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInLifecycleConfigArnInput() {
    return this._builtInLifecycleConfigArn;
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktn.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // app_lifecycle_management - computed: false, optional: true, required: false
  private _appLifecycleManagement = new DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: DefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty) {
    this._appLifecycleManagement.internalValue = value;
  }
  public resetAppLifecycleManagement() {
    this._appLifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLifecycleManagementInput() {
    return this._appLifecycleManagement.internalValue;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new DefaultUserSettingsCodeEditorAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: DefaultUserSettingsCodeEditorAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#file_system_id AwsDomain#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#file_system_path AwsDomain#file_system_path}
  */
  readonly fileSystemPath: string;
}
export class DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
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
}
export interface DefaultUserSettingsCustomFileSystemConfigProperty {
  /**
  * efs_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#efs_file_system_config AwsDomain#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigProperty;
}
export class DefaultUserSettingsCustomFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultUserSettingsCustomFileSystemConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsCustomFileSystemConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
    }
  }

  // efs_file_system_config - computed: false, optional: true, required: false
  private _efsFileSystemConfig = new DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigPropertyOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: DefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigProperty) {
    this._efsFileSystemConfig.internalValue = value;
  }
  public resetEfsFileSystemConfig() {
    this._efsFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemConfigInput() {
    return this._efsFileSystemConfig.internalValue;
  }
}

export class DefaultUserSettingsCustomFileSystemConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultUserSettingsCustomFileSystemConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultUserSettingsCustomFileSystemConfigPropertyOutputReference {
    return new DefaultUserSettingsCustomFileSystemConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultUserSettingsCustomPosixUserConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#gid AwsDomain#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#uid AwsDomain#uid}
  */
  readonly uid: number;
}
export class DefaultUserSettingsCustomPosixUserConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsCustomPosixUserConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsCustomPosixUserConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gid = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gid = value.gid;
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
export interface DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes AwsDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_management AwsDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes AwsDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes AwsDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}
export class DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._lifecycleManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleManagement = this._lifecycleManagement;
    }
    if (this._maxIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
    }
    if (this._minIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._lifecycleManagement = undefined;
      this._maxIdleTimeoutInMinutes = undefined;
      this._minIdleTimeoutInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._lifecycleManagement = value.lifecycleManagement;
      this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
      this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // lifecycle_management - computed: false, optional: true, required: false
  private _lifecycleManagement?: string; 
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }
  public set lifecycleManagement(value: string) {
    this._lifecycleManagement = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement;
  }

  // max_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxIdleTimeoutInMinutes?: number; 
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }
  public set maxIdleTimeoutInMinutes(value: number) {
    this._maxIdleTimeoutInMinutes = value;
  }
  public resetMaxIdleTimeoutInMinutes() {
    this._maxIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInMinutesInput() {
    return this._maxIdleTimeoutInMinutes;
  }

  // min_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _minIdleTimeoutInMinutes?: number; 
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
  public set minIdleTimeoutInMinutes(value: number) {
    this._minIdleTimeoutInMinutes = value;
  }
  public resetMinIdleTimeoutInMinutes() {
    this._minIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleTimeoutInMinutesInput() {
    return this._minIdleTimeoutInMinutes;
  }
}
export interface DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty {
  /**
  * idle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#idle_settings AwsDomain#idle_settings}
  */
  readonly idleSettings?: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty;
}
export class DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleSettings.internalValue = value.idleSettings;
    }
  }

  // idle_settings - computed: false, optional: true, required: false
  private _idleSettings = new DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty) {
    this._idleSettings.internalValue = value;
  }
  public resetIdleSettings() {
    this._idleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSettingsInput() {
    return this._idleSettings.internalValue;
  }
}
export interface DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#repository_url AwsDomain#repository_url}
  */
  readonly repositoryUrl: string;
}
export class DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference {
    return new DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultUserSettingsJupyterLabAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_image_config_name AwsDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_name AwsDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_version_number AwsDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class DefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultUserSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference {
    return new DefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface DefaultUserSettingsJupyterLabAppSettingsEmrSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#assumable_role_arns AwsDomain#assumable_role_arns}
  */
  readonly assumableRoleArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#execution_role_arns AwsDomain#execution_role_arns}
  */
  readonly executionRoleArns?: string[];
}
export class DefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsEmrSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumableRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumableRoleArns = this._assumableRoleArns;
    }
    if (this._executionRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArns = this._executionRoleArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsEmrSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assumableRoleArns = undefined;
      this._executionRoleArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assumableRoleArns = value.assumableRoleArns;
      this._executionRoleArns = value.executionRoleArns;
    }
  }

  // assumable_role_arns - computed: false, optional: true, required: false
  private _assumableRoleArns?: string[]; 
  public get assumableRoleArns() {
    return cdktn.Fn.tolist(this.getListAttribute('assumable_role_arns'));
  }
  public set assumableRoleArns(value: string[]) {
    this._assumableRoleArns = value;
  }
  public resetAssumableRoleArns() {
    this._assumableRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumableRoleArnsInput() {
    return this._assumableRoleArns;
  }

  // execution_role_arns - computed: false, optional: true, required: false
  private _executionRoleArns?: string[]; 
  public get executionRoleArns() {
    return cdktn.Fn.tolist(this.getListAttribute('execution_role_arns'));
  }
  public set executionRoleArns(value: string[]) {
    this._executionRoleArns = value;
  }
  public resetExecutionRoleArns() {
    this._executionRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnsInput() {
    return this._executionRoleArns;
  }
}
export interface DefaultUserSettingsJupyterLabAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn AwsDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arns AwsDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * app_lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_lifecycle_management AwsDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty;
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#code_repository AwsDomain#code_repository}
  */
  readonly codeRepository?: DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_image AwsDomain#custom_image}
  */
  readonly customImage?: DefaultUserSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty;
  /**
  * emr_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#emr_settings AwsDomain#emr_settings}
  */
  readonly emrSettings?: DefaultUserSettingsJupyterLabAppSettingsEmrSettingsProperty;
}
export class DefaultUserSettingsJupyterLabAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsJupyterLabAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInLifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._appLifecycleManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._emrSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrSettings = this._emrSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterLabAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtInLifecycleConfigArn = undefined;
      this._lifecycleConfigArns = undefined;
      this._appLifecycleManagement.internalValue = undefined;
      this._codeRepository.internalValue = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._emrSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
      this._codeRepository.internalValue = value.codeRepository;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._emrSettings.internalValue = value.emrSettings;
    }
  }

  // built_in_lifecycle_config_arn - computed: false, optional: true, required: false
  private _builtInLifecycleConfigArn?: string; 
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }
  public set builtInLifecycleConfigArn(value: string) {
    this._builtInLifecycleConfigArn = value;
  }
  public resetBuiltInLifecycleConfigArn() {
    this._builtInLifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInLifecycleConfigArnInput() {
    return this._builtInLifecycleConfigArn;
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktn.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // app_lifecycle_management - computed: false, optional: true, required: false
  private _appLifecycleManagement = new DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: DefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty) {
    this._appLifecycleManagement.internalValue = value;
  }
  public resetAppLifecycleManagement() {
    this._appLifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLifecycleManagementInput() {
    return this._appLifecycleManagement.internalValue;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: DefaultUserSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new DefaultUserSettingsJupyterLabAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: DefaultUserSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // emr_settings - computed: false, optional: true, required: false
  private _emrSettings = new DefaultUserSettingsJupyterLabAppSettingsEmrSettingsPropertyOutputReference(this, "emr_settings");
  public get emrSettings() {
    return this._emrSettings;
  }
  public putEmrSettings(value: DefaultUserSettingsJupyterLabAppSettingsEmrSettingsProperty) {
    this._emrSettings.internalValue = value;
  }
  public resetEmrSettings() {
    this._emrSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrSettingsInput() {
    return this._emrSettings.internalValue;
  }
}
export interface DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#repository_url AwsDomain#repository_url}
  */
  readonly repositoryUrl: string;
}
export class DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference {
    return new DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface DefaultUserSettingsJupyterServerAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arns AwsDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#code_repository AwsDomain#code_repository}
  */
  readonly codeRepository?: DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty;
}
export class DefaultUserSettingsJupyterServerAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsJupyterServerAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsJupyterServerAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._codeRepository.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._codeRepository.internalValue = value.codeRepository;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktn.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: DefaultUserSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface DefaultUserSettingsKernelGatewayAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_image_config_name AwsDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_name AwsDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_version_number AwsDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class DefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultUserSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultUserSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference {
    return new DefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface DefaultUserSettingsKernelGatewayAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arns AwsDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_image AwsDomain#custom_image}
  */
  readonly customImage?: DefaultUserSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty;
}
export class DefaultUserSettingsKernelGatewayAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsKernelGatewayAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsKernelGatewayAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktn.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new DefaultUserSettingsKernelGatewayAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: DefaultUserSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface DefaultUserSettingsRSessionAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#app_image_config_name AwsDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_name AwsDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#image_version_number AwsDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class DefaultUserSettingsRSessionAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DefaultUserSettingsRSessionAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsRSessionAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DefaultUserSettingsRSessionAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : DefaultUserSettingsRSessionAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): DefaultUserSettingsRSessionAppSettingsCustomImagePropertyOutputReference {
    return new DefaultUserSettingsRSessionAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface RSessionAppSettingsProperty {
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_image AwsDomain#custom_image}
  */
  readonly customImage?: DefaultUserSettingsRSessionAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty;
}
export class RSessionAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RSessionAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RSessionAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new DefaultUserSettingsRSessionAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: DefaultUserSettingsRSessionAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultUserSettingsRSessionAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface RStudioServerProAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#access_status AwsDomain#access_status}
  */
  readonly accessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#user_group AwsDomain#user_group}
  */
  readonly userGroup?: string;
}
export class RStudioServerProAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RStudioServerProAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStatus = this._accessStatus;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RStudioServerProAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessStatus = undefined;
      this._userGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessStatus = value.accessStatus;
      this._userGroup = value.userGroup;
    }
  }

  // access_status - computed: false, optional: true, required: false
  private _accessStatus?: string; 
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }
  public set accessStatus(value: string) {
    this._accessStatus = value;
  }
  public resetAccessStatus() {
    this._accessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStatusInput() {
    return this._accessStatus;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}
export interface SharingSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#notebook_output_option AwsDomain#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#s3_kms_key_id AwsDomain#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#s3_output_path AwsDomain#s3_output_path}
  */
  readonly s3OutputPath?: string;
}
export class SharingSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SharingSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookOutputOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookOutputOption = this._notebookOutputOption;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharingSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookOutputOption = undefined;
      this._s3KmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookOutputOption = value.notebookOutputOption;
      this._s3KmsKeyId = value.s3KmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // notebook_output_option - computed: false, optional: true, required: false
  private _notebookOutputOption?: string; 
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }
  public set notebookOutputOption(value: string) {
    this._notebookOutputOption = value;
  }
  public resetNotebookOutputOption() {
    this._notebookOutputOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookOutputOptionInput() {
    return this._notebookOutputOption;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb AwsDomain#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb AwsDomain#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb: number;
}
export class DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
    }
    if (this._maximumEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsVolumeSizeInGb = undefined;
      this._maximumEbsVolumeSizeInGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
      this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
    }
  }

  // default_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _defaultEbsVolumeSizeInGb?: number; 
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }
  public set defaultEbsVolumeSizeInGb(value: number) {
    this._defaultEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsVolumeSizeInGbInput() {
    return this._defaultEbsVolumeSizeInGb;
  }

  // maximum_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _maximumEbsVolumeSizeInGb?: number; 
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
  public set maximumEbsVolumeSizeInGb(value: number) {
    this._maximumEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEbsVolumeSizeInGbInput() {
    return this._maximumEbsVolumeSizeInGb;
  }
}
export interface DefaultUserSettingsSpaceStorageSettingsProperty {
  /**
  * default_ebs_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_ebs_storage_settings AwsDomain#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty;
}
export class DefaultUserSettingsSpaceStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsSpaceStorageSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsSpaceStorageSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
    }
  }

  // default_ebs_storage_settings - computed: false, optional: true, required: false
  private _defaultEbsStorageSettings = new DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsPropertyOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: DefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsProperty) {
    this._defaultEbsStorageSettings.internalValue = value;
  }
  public resetDefaultEbsStorageSettings() {
    this._defaultEbsStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsStorageSettingsInput() {
    return this._defaultEbsStorageSettings.internalValue;
  }
}
export interface StudioWebPortalSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#hidden_app_types AwsDomain#hidden_app_types}
  */
  readonly hiddenAppTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#hidden_instance_types AwsDomain#hidden_instance_types}
  */
  readonly hiddenInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#hidden_ml_tools AwsDomain#hidden_ml_tools}
  */
  readonly hiddenMlTools?: string[];
}
export class StudioWebPortalSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StudioWebPortalSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hiddenAppTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenAppTypes = this._hiddenAppTypes;
    }
    if (this._hiddenInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenInstanceTypes = this._hiddenInstanceTypes;
    }
    if (this._hiddenMlTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenMlTools = this._hiddenMlTools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StudioWebPortalSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hiddenAppTypes = undefined;
      this._hiddenInstanceTypes = undefined;
      this._hiddenMlTools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hiddenAppTypes = value.hiddenAppTypes;
      this._hiddenInstanceTypes = value.hiddenInstanceTypes;
      this._hiddenMlTools = value.hiddenMlTools;
    }
  }

  // hidden_app_types - computed: false, optional: true, required: false
  private _hiddenAppTypes?: string[]; 
  public get hiddenAppTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_app_types'));
  }
  public set hiddenAppTypes(value: string[]) {
    this._hiddenAppTypes = value;
  }
  public resetHiddenAppTypes() {
    this._hiddenAppTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenAppTypesInput() {
    return this._hiddenAppTypes;
  }

  // hidden_instance_types - computed: false, optional: true, required: false
  private _hiddenInstanceTypes?: string[]; 
  public get hiddenInstanceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_instance_types'));
  }
  public set hiddenInstanceTypes(value: string[]) {
    this._hiddenInstanceTypes = value;
  }
  public resetHiddenInstanceTypes() {
    this._hiddenInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInstanceTypesInput() {
    return this._hiddenInstanceTypes;
  }

  // hidden_ml_tools - computed: false, optional: true, required: false
  private _hiddenMlTools?: string[]; 
  public get hiddenMlTools() {
    return cdktn.Fn.tolist(this.getListAttribute('hidden_ml_tools'));
  }
  public set hiddenMlTools(value: string[]) {
    this._hiddenMlTools = value;
  }
  public resetHiddenMlTools() {
    this._hiddenMlTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenMlToolsInput() {
    return this._hiddenMlTools;
  }
}
export interface DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface TensorBoardAppSettingsProperty {
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty;
}
export class TensorBoardAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TensorBoardAppSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TensorBoardAppSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface DefaultUserSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#auto_mount_home_efs AwsDomain#auto_mount_home_efs}
  */
  readonly autoMountHomeEfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_landing_uri AwsDomain#default_landing_uri}
  */
  readonly defaultLandingUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#execution_role AwsDomain#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#security_groups AwsDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#studio_web_portal AwsDomain#studio_web_portal}
  */
  readonly studioWebPortal?: string;
  /**
  * canvas_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#canvas_app_settings AwsDomain#canvas_app_settings}
  */
  readonly canvasAppSettings?: CanvasAppSettingsProperty;
  /**
  * code_editor_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#code_editor_app_settings AwsDomain#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: CodeEditorAppSettingsProperty;
  /**
  * custom_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_file_system_config AwsDomain#custom_file_system_config}
  */
  readonly customFileSystemConfig?: DefaultUserSettingsCustomFileSystemConfigProperty[] | cdktn.IResolvable;
  /**
  * custom_posix_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#custom_posix_user_config AwsDomain#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: DefaultUserSettingsCustomPosixUserConfigProperty;
  /**
  * jupyter_lab_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#jupyter_lab_app_settings AwsDomain#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: DefaultUserSettingsJupyterLabAppSettingsProperty;
  /**
  * jupyter_server_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#jupyter_server_app_settings AwsDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: DefaultUserSettingsJupyterServerAppSettingsProperty;
  /**
  * kernel_gateway_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#kernel_gateway_app_settings AwsDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: DefaultUserSettingsKernelGatewayAppSettingsProperty;
  /**
  * r_session_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#r_session_app_settings AwsDomain#r_session_app_settings}
  */
  readonly rSessionAppSettings?: RSessionAppSettingsProperty;
  /**
  * r_studio_server_pro_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#r_studio_server_pro_app_settings AwsDomain#r_studio_server_pro_app_settings}
  */
  readonly rStudioServerProAppSettings?: RStudioServerProAppSettingsProperty;
  /**
  * sharing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sharing_settings AwsDomain#sharing_settings}
  */
  readonly sharingSettings?: SharingSettingsProperty;
  /**
  * space_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#space_storage_settings AwsDomain#space_storage_settings}
  */
  readonly spaceStorageSettings?: DefaultUserSettingsSpaceStorageSettingsProperty;
  /**
  * studio_web_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#studio_web_portal_settings AwsDomain#studio_web_portal_settings}
  */
  readonly studioWebPortalSettings?: StudioWebPortalSettingsProperty;
  /**
  * tensor_board_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#tensor_board_app_settings AwsDomain#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: TensorBoardAppSettingsProperty;
}
export class DefaultUserSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultUserSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoMountHomeEfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMountHomeEfs = this._autoMountHomeEfs;
    }
    if (this._defaultLandingUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLandingUri = this._defaultLandingUri;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._studioWebPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortal = this._studioWebPortal;
    }
    if (this._canvasAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasAppSettings = this._canvasAppSettings?.internalValue;
    }
    if (this._codeEditorAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
    }
    if (this._customFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfig = this._customFileSystemConfig?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._rSessionAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rSessionAppSettings = this._rSessionAppSettings?.internalValue;
    }
    if (this._rStudioServerProAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProAppSettings = this._rStudioServerProAppSettings?.internalValue;
    }
    if (this._sharingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    if (this._studioWebPortalSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortalSettings = this._studioWebPortalSettings?.internalValue;
    }
    if (this._tensorBoardAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultUserSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoMountHomeEfs = undefined;
      this._defaultLandingUri = undefined;
      this._executionRole = undefined;
      this._securityGroups = undefined;
      this._studioWebPortal = undefined;
      this._canvasAppSettings.internalValue = undefined;
      this._codeEditorAppSettings.internalValue = undefined;
      this._customFileSystemConfig.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._rSessionAppSettings.internalValue = undefined;
      this._rStudioServerProAppSettings.internalValue = undefined;
      this._sharingSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
      this._studioWebPortalSettings.internalValue = undefined;
      this._tensorBoardAppSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoMountHomeEfs = value.autoMountHomeEfs;
      this._defaultLandingUri = value.defaultLandingUri;
      this._executionRole = value.executionRole;
      this._securityGroups = value.securityGroups;
      this._studioWebPortal = value.studioWebPortal;
      this._canvasAppSettings.internalValue = value.canvasAppSettings;
      this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
      this._customFileSystemConfig.internalValue = value.customFileSystemConfig;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._rSessionAppSettings.internalValue = value.rSessionAppSettings;
      this._rStudioServerProAppSettings.internalValue = value.rStudioServerProAppSettings;
      this._sharingSettings.internalValue = value.sharingSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
      this._studioWebPortalSettings.internalValue = value.studioWebPortalSettings;
      this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
    }
  }

  // auto_mount_home_efs - computed: true, optional: true, required: false
  private _autoMountHomeEfs?: string; 
  public get autoMountHomeEfs() {
    return this.getStringAttribute('auto_mount_home_efs');
  }
  public set autoMountHomeEfs(value: string) {
    this._autoMountHomeEfs = value;
  }
  public resetAutoMountHomeEfs() {
    this._autoMountHomeEfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMountHomeEfsInput() {
    return this._autoMountHomeEfs;
  }

  // default_landing_uri - computed: true, optional: true, required: false
  private _defaultLandingUri?: string; 
  public get defaultLandingUri() {
    return this.getStringAttribute('default_landing_uri');
  }
  public set defaultLandingUri(value: string) {
    this._defaultLandingUri = value;
  }
  public resetDefaultLandingUri() {
    this._defaultLandingUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLandingUriInput() {
    return this._defaultLandingUri;
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // studio_web_portal - computed: true, optional: true, required: false
  private _studioWebPortal?: string; 
  public get studioWebPortal() {
    return this.getStringAttribute('studio_web_portal');
  }
  public set studioWebPortal(value: string) {
    this._studioWebPortal = value;
  }
  public resetStudioWebPortal() {
    this._studioWebPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalInput() {
    return this._studioWebPortal;
  }

  // canvas_app_settings - computed: false, optional: true, required: false
  private _canvasAppSettings = new CanvasAppSettingsPropertyOutputReference(this, "canvas_app_settings");
  public get canvasAppSettings() {
    return this._canvasAppSettings;
  }
  public putCanvasAppSettings(value: CanvasAppSettingsProperty) {
    this._canvasAppSettings.internalValue = value;
  }
  public resetCanvasAppSettings() {
    this._canvasAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasAppSettingsInput() {
    return this._canvasAppSettings.internalValue;
  }

  // code_editor_app_settings - computed: false, optional: true, required: false
  private _codeEditorAppSettings = new CodeEditorAppSettingsPropertyOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }
  public putCodeEditorAppSettings(value: CodeEditorAppSettingsProperty) {
    this._codeEditorAppSettings.internalValue = value;
  }
  public resetCodeEditorAppSettings() {
    this._codeEditorAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppSettingsInput() {
    return this._codeEditorAppSettings.internalValue;
  }

  // custom_file_system_config - computed: false, optional: true, required: false
  private _customFileSystemConfig = new DefaultUserSettingsCustomFileSystemConfigPropertyList(this, "custom_file_system_config", false);
  public get customFileSystemConfig() {
    return this._customFileSystemConfig;
  }
  public putCustomFileSystemConfig(value: DefaultUserSettingsCustomFileSystemConfigProperty[] | cdktn.IResolvable) {
    this._customFileSystemConfig.internalValue = value;
  }
  public resetCustomFileSystemConfig() {
    this._customFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemConfigInput() {
    return this._customFileSystemConfig.internalValue;
  }

  // custom_posix_user_config - computed: false, optional: true, required: false
  private _customPosixUserConfig = new DefaultUserSettingsCustomPosixUserConfigPropertyOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: DefaultUserSettingsCustomPosixUserConfigProperty) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
  }

  // jupyter_lab_app_settings - computed: false, optional: true, required: false
  private _jupyterLabAppSettings = new DefaultUserSettingsJupyterLabAppSettingsPropertyOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: DefaultUserSettingsJupyterLabAppSettingsProperty) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new DefaultUserSettingsJupyterServerAppSettingsPropertyOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: DefaultUserSettingsJupyterServerAppSettingsProperty) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new DefaultUserSettingsKernelGatewayAppSettingsPropertyOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: DefaultUserSettingsKernelGatewayAppSettingsProperty) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // r_session_app_settings - computed: false, optional: true, required: false
  private _rSessionAppSettings = new RSessionAppSettingsPropertyOutputReference(this, "r_session_app_settings");
  public get rSessionAppSettings() {
    return this._rSessionAppSettings;
  }
  public putRSessionAppSettings(value: RSessionAppSettingsProperty) {
    this._rSessionAppSettings.internalValue = value;
  }
  public resetRSessionAppSettings() {
    this._rSessionAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rSessionAppSettingsInput() {
    return this._rSessionAppSettings.internalValue;
  }

  // r_studio_server_pro_app_settings - computed: false, optional: true, required: false
  private _rStudioServerProAppSettings = new RStudioServerProAppSettingsPropertyOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }
  public putRStudioServerProAppSettings(value: RStudioServerProAppSettingsProperty) {
    this._rStudioServerProAppSettings.internalValue = value;
  }
  public resetRStudioServerProAppSettings() {
    this._rStudioServerProAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProAppSettingsInput() {
    return this._rStudioServerProAppSettings.internalValue;
  }

  // sharing_settings - computed: false, optional: true, required: false
  private _sharingSettings = new SharingSettingsPropertyOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }
  public putSharingSettings(value: SharingSettingsProperty) {
    this._sharingSettings.internalValue = value;
  }
  public resetSharingSettings() {
    this._sharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingSettingsInput() {
    return this._sharingSettings.internalValue;
  }

  // space_storage_settings - computed: false, optional: true, required: false
  private _spaceStorageSettings = new DefaultUserSettingsSpaceStorageSettingsPropertyOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: DefaultUserSettingsSpaceStorageSettingsProperty) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }

  // studio_web_portal_settings - computed: false, optional: true, required: false
  private _studioWebPortalSettings = new StudioWebPortalSettingsPropertyOutputReference(this, "studio_web_portal_settings");
  public get studioWebPortalSettings() {
    return this._studioWebPortalSettings;
  }
  public putStudioWebPortalSettings(value: StudioWebPortalSettingsProperty) {
    this._studioWebPortalSettings.internalValue = value;
  }
  public resetStudioWebPortalSettings() {
    this._studioWebPortalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalSettingsInput() {
    return this._studioWebPortalSettings.internalValue;
  }

  // tensor_board_app_settings - computed: false, optional: true, required: false
  private _tensorBoardAppSettings = new TensorBoardAppSettingsPropertyOutputReference(this, "tensor_board_app_settings");
  public get tensorBoardAppSettings() {
    return this._tensorBoardAppSettings;
  }
  public putTensorBoardAppSettings(value: TensorBoardAppSettingsProperty) {
    this._tensorBoardAppSettings.internalValue = value;
  }
  public resetTensorBoardAppSettings() {
    this._tensorBoardAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardAppSettingsInput() {
    return this._tensorBoardAppSettings.internalValue;
  }
}
export interface DockerSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#enable_docker_access AwsDomain#enable_docker_access}
  */
  readonly enableDockerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#vpc_only_trusted_accounts AwsDomain#vpc_only_trusted_accounts}
  */
  readonly vpcOnlyTrustedAccounts?: string[];
}
export class DockerSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DockerSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDockerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDockerAccess = this._enableDockerAccess;
    }
    if (this._vpcOnlyTrustedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOnlyTrustedAccounts = this._vpcOnlyTrustedAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDockerAccess = undefined;
      this._vpcOnlyTrustedAccounts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDockerAccess = value.enableDockerAccess;
      this._vpcOnlyTrustedAccounts = value.vpcOnlyTrustedAccounts;
    }
  }

  // enable_docker_access - computed: false, optional: true, required: false
  private _enableDockerAccess?: string; 
  public get enableDockerAccess() {
    return this.getStringAttribute('enable_docker_access');
  }
  public set enableDockerAccess(value: string) {
    this._enableDockerAccess = value;
  }
  public resetEnableDockerAccess() {
    this._enableDockerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDockerAccessInput() {
    return this._enableDockerAccess;
  }

  // vpc_only_trusted_accounts - computed: false, optional: true, required: false
  private _vpcOnlyTrustedAccounts?: string[]; 
  public get vpcOnlyTrustedAccounts() {
    return cdktn.Fn.tolist(this.getListAttribute('vpc_only_trusted_accounts'));
  }
  public set vpcOnlyTrustedAccounts(value: string[]) {
    this._vpcOnlyTrustedAccounts = value;
  }
  public resetVpcOnlyTrustedAccounts() {
    this._vpcOnlyTrustedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOnlyTrustedAccountsInput() {
    return this._vpcOnlyTrustedAccounts;
  }
}
export interface DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#instance_type AwsDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#lifecycle_config_arn AwsDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_arn AwsDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias AwsDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn AwsDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface RStudioServerProDomainSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#domain_execution_role_arn AwsDomain#domain_execution_role_arn}
  */
  readonly domainExecutionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#r_studio_connect_url AwsDomain#r_studio_connect_url}
  */
  readonly rStudioConnectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#r_studio_package_manager_url AwsDomain#r_studio_package_manager_url}
  */
  readonly rStudioPackageManagerUrl?: string;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#default_resource_spec AwsDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty;
}
export class RStudioServerProDomainSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RStudioServerProDomainSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainExecutionRoleArn = this._domainExecutionRoleArn;
    }
    if (this._rStudioConnectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioConnectUrl = this._rStudioConnectUrl;
    }
    if (this._rStudioPackageManagerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioPackageManagerUrl = this._rStudioPackageManagerUrl;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RStudioServerProDomainSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainExecutionRoleArn = undefined;
      this._rStudioConnectUrl = undefined;
      this._rStudioPackageManagerUrl = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainExecutionRoleArn = value.domainExecutionRoleArn;
      this._rStudioConnectUrl = value.rStudioConnectUrl;
      this._rStudioPackageManagerUrl = value.rStudioPackageManagerUrl;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // domain_execution_role_arn - computed: false, optional: false, required: true
  private _domainExecutionRoleArn?: string; 
  public get domainExecutionRoleArn() {
    return this.getStringAttribute('domain_execution_role_arn');
  }
  public set domainExecutionRoleArn(value: string) {
    this._domainExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainExecutionRoleArnInput() {
    return this._domainExecutionRoleArn;
  }

  // r_studio_connect_url - computed: false, optional: true, required: false
  private _rStudioConnectUrl?: string; 
  public get rStudioConnectUrl() {
    return this.getStringAttribute('r_studio_connect_url');
  }
  public set rStudioConnectUrl(value: string) {
    this._rStudioConnectUrl = value;
  }
  public resetRStudioConnectUrl() {
    this._rStudioConnectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioConnectUrlInput() {
    return this._rStudioConnectUrl;
  }

  // r_studio_package_manager_url - computed: false, optional: true, required: false
  private _rStudioPackageManagerUrl?: string; 
  public get rStudioPackageManagerUrl() {
    return this.getStringAttribute('r_studio_package_manager_url');
  }
  public set rStudioPackageManagerUrl(value: string) {
    this._rStudioPackageManagerUrl = value;
  }
  public resetRStudioPackageManagerUrl() {
    this._rStudioPackageManagerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioPackageManagerUrlInput() {
    return this._rStudioPackageManagerUrl;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecProperty) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface TrustedIdentityPropagationSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#status AwsDomain#status}
  */
  readonly status: string;
}
export class TrustedIdentityPropagationSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TrustedIdentityPropagationSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrustedIdentityPropagationSettingsProperty | undefined) {
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
export interface DomainSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#execution_role_identity_config AwsDomain#execution_role_identity_config}
  */
  readonly executionRoleIdentityConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#security_group_ids AwsDomain#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * docker_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#docker_settings AwsDomain#docker_settings}
  */
  readonly dockerSettings?: DockerSettingsProperty;
  /**
  * r_studio_server_pro_domain_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#r_studio_server_pro_domain_settings AwsDomain#r_studio_server_pro_domain_settings}
  */
  readonly rStudioServerProDomainSettings?: RStudioServerProDomainSettingsProperty;
  /**
  * trusted_identity_propagation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#trusted_identity_propagation_settings AwsDomain#trusted_identity_propagation_settings}
  */
  readonly trustedIdentityPropagationSettings?: TrustedIdentityPropagationSettingsProperty;
}
export class DomainSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DomainSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRoleIdentityConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleIdentityConfig = this._executionRoleIdentityConfig;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._dockerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSettings = this._dockerSettings?.internalValue;
    }
    if (this._rStudioServerProDomainSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProDomainSettings = this._rStudioServerProDomainSettings?.internalValue;
    }
    if (this._trustedIdentityPropagationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedIdentityPropagationSettings = this._trustedIdentityPropagationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSettingsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRoleIdentityConfig = undefined;
      this._securityGroupIds = undefined;
      this._dockerSettings.internalValue = undefined;
      this._rStudioServerProDomainSettings.internalValue = undefined;
      this._trustedIdentityPropagationSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRoleIdentityConfig = value.executionRoleIdentityConfig;
      this._securityGroupIds = value.securityGroupIds;
      this._dockerSettings.internalValue = value.dockerSettings;
      this._rStudioServerProDomainSettings.internalValue = value.rStudioServerProDomainSettings;
      this._trustedIdentityPropagationSettings.internalValue = value.trustedIdentityPropagationSettings;
    }
  }

  // execution_role_identity_config - computed: false, optional: true, required: false
  private _executionRoleIdentityConfig?: string; 
  public get executionRoleIdentityConfig() {
    return this.getStringAttribute('execution_role_identity_config');
  }
  public set executionRoleIdentityConfig(value: string) {
    this._executionRoleIdentityConfig = value;
  }
  public resetExecutionRoleIdentityConfig() {
    this._executionRoleIdentityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleIdentityConfigInput() {
    return this._executionRoleIdentityConfig;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // docker_settings - computed: false, optional: true, required: false
  private _dockerSettings = new DockerSettingsPropertyOutputReference(this, "docker_settings");
  public get dockerSettings() {
    return this._dockerSettings;
  }
  public putDockerSettings(value: DockerSettingsProperty) {
    this._dockerSettings.internalValue = value;
  }
  public resetDockerSettings() {
    this._dockerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSettingsInput() {
    return this._dockerSettings.internalValue;
  }

  // r_studio_server_pro_domain_settings - computed: false, optional: true, required: false
  private _rStudioServerProDomainSettings = new RStudioServerProDomainSettingsPropertyOutputReference(this, "r_studio_server_pro_domain_settings");
  public get rStudioServerProDomainSettings() {
    return this._rStudioServerProDomainSettings;
  }
  public putRStudioServerProDomainSettings(value: RStudioServerProDomainSettingsProperty) {
    this._rStudioServerProDomainSettings.internalValue = value;
  }
  public resetRStudioServerProDomainSettings() {
    this._rStudioServerProDomainSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProDomainSettingsInput() {
    return this._rStudioServerProDomainSettings.internalValue;
  }

  // trusted_identity_propagation_settings - computed: false, optional: true, required: false
  private _trustedIdentityPropagationSettings = new TrustedIdentityPropagationSettingsPropertyOutputReference(this, "trusted_identity_propagation_settings");
  public get trustedIdentityPropagationSettings() {
    return this._trustedIdentityPropagationSettings;
  }
  public putTrustedIdentityPropagationSettings(value: TrustedIdentityPropagationSettingsProperty) {
    this._trustedIdentityPropagationSettings.internalValue = value;
  }
  public resetTrustedIdentityPropagationSettings() {
    this._trustedIdentityPropagationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedIdentityPropagationSettingsInput() {
    return this._trustedIdentityPropagationSettings.internalValue;
  }
}
export interface RetentionPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_domain#home_efs_file_system AwsDomain#home_efs_file_system}
  */
  readonly homeEfsFileSystem?: string;
}
export class RetentionPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetentionPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homeEfsFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeEfsFileSystem = this._homeEfsFileSystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetentionPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._homeEfsFileSystem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._homeEfsFileSystem = value.homeEfsFileSystem;
    }
  }

  // home_efs_file_system - computed: false, optional: true, required: false
  private _homeEfsFileSystem?: string; 
  public get homeEfsFileSystem() {
    return this.getStringAttribute('home_efs_file_system');
  }
  public set homeEfsFileSystem(value: string) {
    this._homeEfsFileSystem = value;
  }
  public resetHomeEfsFileSystem() {
    this._homeEfsFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeEfsFileSystemInput() {
    return this._homeEfsFileSystem;
  }
}
}
