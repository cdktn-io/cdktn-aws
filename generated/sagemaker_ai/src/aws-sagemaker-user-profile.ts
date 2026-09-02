// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfUserProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#domain_id TfUserProfile#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#id TfUserProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#region TfUserProfile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier TfUserProfile#single_sign_on_user_identifier}
  */
  readonly singleSignOnUserIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value TfUserProfile#single_sign_on_user_value}
  */
  readonly singleSignOnUserValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#tags TfUserProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#tags_all TfUserProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#user_profile_name TfUserProfile#user_profile_name}
  */
  readonly userProfileName: string;
  /**
  * user_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#user_settings TfUserProfile#user_settings}
  */
  readonly userSettings?: TfUserProfile.UserSettingsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile}
*/
export class TfUserProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_user_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfUserProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfUserProfile to import
  * @param importFromId The id of the existing TfUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfUserProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_user_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: TfUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_user_profile',
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
    this._domainId = config.domainId;
    this._id = config.id;
    this._region = config.region;
    this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
    this._singleSignOnUserValue = config.singleSignOnUserValue;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userProfileName = config.userProfileName;
    this._userSettings.internalValue = config.userSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // home_efs_file_system_uid - computed: true, optional: false, required: false
  public get homeEfsFileSystemUid() {
    return this.getStringAttribute('home_efs_file_system_uid');
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

  // single_sign_on_user_identifier - computed: false, optional: true, required: false
  private _singleSignOnUserIdentifier?: string; 
  public get singleSignOnUserIdentifier() {
    return this.getStringAttribute('single_sign_on_user_identifier');
  }
  public set singleSignOnUserIdentifier(value: string) {
    this._singleSignOnUserIdentifier = value;
  }
  public resetSingleSignOnUserIdentifier() {
    this._singleSignOnUserIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserIdentifierInput() {
    return this._singleSignOnUserIdentifier;
  }

  // single_sign_on_user_value - computed: false, optional: true, required: false
  private _singleSignOnUserValue?: string; 
  public get singleSignOnUserValue() {
    return this.getStringAttribute('single_sign_on_user_value');
  }
  public set singleSignOnUserValue(value: string) {
    this._singleSignOnUserValue = value;
  }
  public resetSingleSignOnUserValue() {
    this._singleSignOnUserValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserValueInput() {
    return this._singleSignOnUserValue;
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

  // user_profile_name - computed: false, optional: false, required: true
  private _userProfileName?: string; 
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }
  public set userProfileName(value: string) {
    this._userProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileNameInput() {
    return this._userProfileName;
  }

  // user_settings - computed: false, optional: true, required: false
  private _userSettings = new TfUserProfile.UserSettingsPropertyOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
  }
  public putUserSettings(value: TfUserProfile.UserSettingsProperty) {
    this._userSettings.internalValue = value;
  }
  public resetUserSettings() {
    this._userSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktn.stringToTerraform(this._domainId),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      single_sign_on_user_identifier: cdktn.stringToTerraform(this._singleSignOnUserIdentifier),
      single_sign_on_user_value: cdktn.stringToTerraform(this._singleSignOnUserValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      user_profile_name: cdktn.stringToTerraform(this._userProfileName),
      user_settings: tfUserProfileUserSettingsPropertyToTerraform(this._userSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktn.stringToHclTerraform(this._domainId),
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
      single_sign_on_user_identifier: {
        value: cdktn.stringToHclTerraform(this._singleSignOnUserIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_user_value: {
        value: cdktn.stringToHclTerraform(this._singleSignOnUserValue),
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
      user_profile_name: {
        value: cdktn.stringToHclTerraform(this._userProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_settings: {
        value: tfUserProfileUserSettingsPropertyToHclTerraform(this._userSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfUserProfile.UserSettingsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfUserProfileDirectDeploySettingsPropertyToTerraform(struct?: TfUserProfile.DirectDeploySettingsPropertyOutputReference | TfUserProfile.DirectDeploySettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfUserProfileDirectDeploySettingsPropertyToHclTerraform(struct?: TfUserProfile.DirectDeploySettingsPropertyOutputReference | TfUserProfile.DirectDeploySettingsProperty): any {
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


export function tfUserProfileEmrServerlessSettingsPropertyToTerraform(struct?: TfUserProfile.EmrServerlessSettingsPropertyOutputReference | TfUserProfile.EmrServerlessSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfUserProfileEmrServerlessSettingsPropertyToHclTerraform(struct?: TfUserProfile.EmrServerlessSettingsPropertyOutputReference | TfUserProfile.EmrServerlessSettingsProperty): any {
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


export function tfUserProfileGenerativeAiSettingsPropertyToTerraform(struct?: TfUserProfile.GenerativeAiSettingsPropertyOutputReference | TfUserProfile.GenerativeAiSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_bedrock_role_arn: cdktn.stringToTerraform(struct!.amazonBedrockRoleArn),
  }
}


export function tfUserProfileGenerativeAiSettingsPropertyToHclTerraform(struct?: TfUserProfile.GenerativeAiSettingsPropertyOutputReference | TfUserProfile.GenerativeAiSettingsProperty): any {
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


export function tfUserProfileIdentityProviderOauthSettingsPropertyToTerraform(struct?: TfUserProfile.IdentityProviderOauthSettingsProperty | cdktn.IResolvable): any {
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


export function tfUserProfileIdentityProviderOauthSettingsPropertyToHclTerraform(struct?: TfUserProfile.IdentityProviderOauthSettingsProperty | cdktn.IResolvable): any {
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


export function tfUserProfileKendraSettingsPropertyToTerraform(struct?: TfUserProfile.KendraSettingsPropertyOutputReference | TfUserProfile.KendraSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfUserProfileKendraSettingsPropertyToHclTerraform(struct?: TfUserProfile.KendraSettingsPropertyOutputReference | TfUserProfile.KendraSettingsProperty): any {
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


export function tfUserProfileModelRegisterSettingsPropertyToTerraform(struct?: TfUserProfile.ModelRegisterSettingsPropertyOutputReference | TfUserProfile.ModelRegisterSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_model_register_role_arn: cdktn.stringToTerraform(struct!.crossAccountModelRegisterRoleArn),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfUserProfileModelRegisterSettingsPropertyToHclTerraform(struct?: TfUserProfile.ModelRegisterSettingsPropertyOutputReference | TfUserProfile.ModelRegisterSettingsProperty): any {
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


export function tfUserProfileTimeSeriesForecastingSettingsPropertyToTerraform(struct?: TfUserProfile.TimeSeriesForecastingSettingsPropertyOutputReference | TfUserProfile.TimeSeriesForecastingSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_forecast_role_arn: cdktn.stringToTerraform(struct!.amazonForecastRoleArn),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function tfUserProfileTimeSeriesForecastingSettingsPropertyToHclTerraform(struct?: TfUserProfile.TimeSeriesForecastingSettingsPropertyOutputReference | TfUserProfile.TimeSeriesForecastingSettingsProperty): any {
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


export function tfUserProfileWorkspaceSettingsPropertyToTerraform(struct?: TfUserProfile.WorkspaceSettingsPropertyOutputReference | TfUserProfile.WorkspaceSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_artifact_path: cdktn.stringToTerraform(struct!.s3ArtifactPath),
    s3_kms_key_id: cdktn.stringToTerraform(struct!.s3KmsKeyId),
  }
}


export function tfUserProfileWorkspaceSettingsPropertyToHclTerraform(struct?: TfUserProfile.WorkspaceSettingsPropertyOutputReference | TfUserProfile.WorkspaceSettingsProperty): any {
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


export function tfUserProfileCanvasAppSettingsPropertyToTerraform(struct?: TfUserProfile.CanvasAppSettingsPropertyOutputReference | TfUserProfile.CanvasAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct_deploy_settings: tfUserProfileDirectDeploySettingsPropertyToTerraform(struct!.directDeploySettings),
    emr_serverless_settings: tfUserProfileEmrServerlessSettingsPropertyToTerraform(struct!.emrServerlessSettings),
    generative_ai_settings: tfUserProfileGenerativeAiSettingsPropertyToTerraform(struct!.generativeAiSettings),
    identity_provider_oauth_settings: cdktn.listMapper(tfUserProfileIdentityProviderOauthSettingsPropertyToTerraform, true)(struct!.identityProviderOauthSettings),
    kendra_settings: tfUserProfileKendraSettingsPropertyToTerraform(struct!.kendraSettings),
    model_register_settings: tfUserProfileModelRegisterSettingsPropertyToTerraform(struct!.modelRegisterSettings),
    time_series_forecasting_settings: tfUserProfileTimeSeriesForecastingSettingsPropertyToTerraform(struct!.timeSeriesForecastingSettings),
    workspace_settings: tfUserProfileWorkspaceSettingsPropertyToTerraform(struct!.workspaceSettings),
  }
}


export function tfUserProfileCanvasAppSettingsPropertyToHclTerraform(struct?: TfUserProfile.CanvasAppSettingsPropertyOutputReference | TfUserProfile.CanvasAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct_deploy_settings: {
      value: tfUserProfileDirectDeploySettingsPropertyToHclTerraform(struct!.directDeploySettings),
      isBlock: true,
      type: "list",
      storageClassType: "DirectDeploySettingsPropertyList",
    },
    emr_serverless_settings: {
      value: tfUserProfileEmrServerlessSettingsPropertyToHclTerraform(struct!.emrServerlessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "EmrServerlessSettingsPropertyList",
    },
    generative_ai_settings: {
      value: tfUserProfileGenerativeAiSettingsPropertyToHclTerraform(struct!.generativeAiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiSettingsPropertyList",
    },
    identity_provider_oauth_settings: {
      value: cdktn.listMapperHcl(tfUserProfileIdentityProviderOauthSettingsPropertyToHclTerraform, true)(struct!.identityProviderOauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityProviderOauthSettingsPropertyList",
    },
    kendra_settings: {
      value: tfUserProfileKendraSettingsPropertyToHclTerraform(struct!.kendraSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KendraSettingsPropertyList",
    },
    model_register_settings: {
      value: tfUserProfileModelRegisterSettingsPropertyToHclTerraform(struct!.modelRegisterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ModelRegisterSettingsPropertyList",
    },
    time_series_forecasting_settings: {
      value: tfUserProfileTimeSeriesForecastingSettingsPropertyToHclTerraform(struct!.timeSeriesForecastingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TimeSeriesForecastingSettingsPropertyList",
    },
    workspace_settings: {
      value: tfUserProfileWorkspaceSettingsPropertyToHclTerraform(struct!.workspaceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct?: TfUserProfile.UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | TfUserProfile.UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
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


export function tfUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | TfUserProfile.UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
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


export function tfUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToTerraform(struct?: TfUserProfile.UserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference | TfUserProfile.UserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: tfUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct!.idleSettings),
  }
}


export function tfUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference | TfUserProfile.UserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: tfUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileUserSettingsCodeEditorAppSettingsCustomImagePropertyToTerraform(struct?: TfUserProfile.UserSettingsCodeEditorAppSettingsCustomImageProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsCodeEditorAppSettingsCustomImagePropertyToHclTerraform(struct?: TfUserProfile.UserSettingsCodeEditorAppSettingsCustomImageProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: TfUserProfile.UserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileCodeEditorAppSettingsPropertyToTerraform(struct?: TfUserProfile.CodeEditorAppSettingsPropertyOutputReference | TfUserProfile.CodeEditorAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    app_lifecycle_management: tfUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
    custom_image: cdktn.listMapper(tfUserProfileUserSettingsCodeEditorAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: tfUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function tfUserProfileCodeEditorAppSettingsPropertyToHclTerraform(struct?: TfUserProfile.CodeEditorAppSettingsPropertyOutputReference | TfUserProfile.CodeEditorAppSettingsProperty): any {
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
      value: tfUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyList",
    },
    custom_image: {
      value: cdktn.listMapperHcl(tfUserProfileUserSettingsCodeEditorAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsCodeEditorAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: tfUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileEfsFileSystemConfigPropertyToTerraform(struct?: TfUserProfile.EfsFileSystemConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktn.stringToTerraform(struct!.fileSystemPath),
  }
}


export function tfUserProfileEfsFileSystemConfigPropertyToHclTerraform(struct?: TfUserProfile.EfsFileSystemConfigProperty | cdktn.IResolvable): any {
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


export function tfUserProfileCustomFileSystemConfigPropertyToTerraform(struct?: TfUserProfile.CustomFileSystemConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_system_config: cdktn.listMapper(tfUserProfileEfsFileSystemConfigPropertyToTerraform, true)(struct!.efsFileSystemConfig),
  }
}


export function tfUserProfileCustomFileSystemConfigPropertyToHclTerraform(struct?: TfUserProfile.CustomFileSystemConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_system_config: {
      value: cdktn.listMapperHcl(tfUserProfileEfsFileSystemConfigPropertyToHclTerraform, true)(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EfsFileSystemConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileCustomPosixUserConfigPropertyToTerraform(struct?: TfUserProfile.CustomPosixUserConfigPropertyOutputReference | TfUserProfile.CustomPosixUserConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gid: cdktn.numberToTerraform(struct!.gid),
    uid: cdktn.numberToTerraform(struct!.uid),
  }
}


export function tfUserProfileCustomPosixUserConfigPropertyToHclTerraform(struct?: TfUserProfile.CustomPosixUserConfigPropertyOutputReference | TfUserProfile.CustomPosixUserConfigProperty): any {
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


export function tfUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | TfUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
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


export function tfUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference | TfUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty): any {
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


export function tfUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference | TfUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_settings: tfUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToTerraform(struct!.idleSettings),
  }
}


export function tfUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference | TfUserProfile.UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_settings: {
      value: tfUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyToTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function tfUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsJupyterLabAppSettingsCustomImagePropertyToTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsJupyterLabAppSettingsCustomImagePropertyToHclTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileEmrSettingsPropertyToTerraform(struct?: TfUserProfile.EmrSettingsPropertyOutputReference | TfUserProfile.EmrSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assumable_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.assumableRoleArns),
    execution_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.executionRoleArns),
  }
}


export function tfUserProfileEmrSettingsPropertyToHclTerraform(struct?: TfUserProfile.EmrSettingsPropertyOutputReference | TfUserProfile.EmrSettingsProperty): any {
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


export function tfUserProfileJupyterLabAppSettingsPropertyToTerraform(struct?: TfUserProfile.JupyterLabAppSettingsPropertyOutputReference | TfUserProfile.JupyterLabAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    built_in_lifecycle_config_arn: cdktn.stringToTerraform(struct!.builtInLifecycleConfigArn),
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    app_lifecycle_management: tfUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToTerraform(struct!.appLifecycleManagement),
    code_repository: cdktn.listMapper(tfUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyToTerraform, true)(struct!.codeRepository),
    custom_image: cdktn.listMapper(tfUserProfileUserSettingsJupyterLabAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: tfUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
    emr_settings: tfUserProfileEmrSettingsPropertyToTerraform(struct!.emrSettings),
  }
}


export function tfUserProfileJupyterLabAppSettingsPropertyToHclTerraform(struct?: TfUserProfile.JupyterLabAppSettingsPropertyOutputReference | TfUserProfile.JupyterLabAppSettingsProperty): any {
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
      value: tfUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyList",
    },
    code_repository: {
      value: cdktn.listMapperHcl(tfUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryPropertyToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "UserSettingsJupyterLabAppSettingsCodeRepositoryPropertyList",
    },
    custom_image: {
      value: cdktn.listMapperHcl(tfUserProfileUserSettingsJupyterLabAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsJupyterLabAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: tfUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyList",
    },
    emr_settings: {
      value: tfUserProfileEmrSettingsPropertyToHclTerraform(struct!.emrSettings),
      isBlock: true,
      type: "list",
      storageClassType: "EmrSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyToTerraform(struct?: TfUserProfile.UserSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
  }
}


export function tfUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: TfUserProfile.UserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileJupyterServerAppSettingsPropertyToTerraform(struct?: TfUserProfile.JupyterServerAppSettingsPropertyOutputReference | TfUserProfile.JupyterServerAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    code_repository: cdktn.listMapper(tfUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyToTerraform, true)(struct!.codeRepository),
    default_resource_spec: tfUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function tfUserProfileJupyterServerAppSettingsPropertyToHclTerraform(struct?: TfUserProfile.JupyterServerAppSettingsPropertyOutputReference | TfUserProfile.JupyterServerAppSettingsProperty): any {
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
      value: cdktn.listMapperHcl(tfUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryPropertyToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "UserSettingsJupyterServerAppSettingsCodeRepositoryPropertyList",
    },
    default_resource_spec: {
      value: tfUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileUserSettingsKernelGatewayAppSettingsCustomImagePropertyToTerraform(struct?: TfUserProfile.UserSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsKernelGatewayAppSettingsCustomImagePropertyToHclTerraform(struct?: TfUserProfile.UserSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: TfUserProfile.UserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileKernelGatewayAppSettingsPropertyToTerraform(struct?: TfUserProfile.KernelGatewayAppSettingsPropertyOutputReference | TfUserProfile.KernelGatewayAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_config_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktn.listMapper(tfUserProfileUserSettingsKernelGatewayAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: tfUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function tfUserProfileKernelGatewayAppSettingsPropertyToHclTerraform(struct?: TfUserProfile.KernelGatewayAppSettingsPropertyOutputReference | TfUserProfile.KernelGatewayAppSettingsProperty): any {
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
      value: cdktn.listMapperHcl(tfUserProfileUserSettingsKernelGatewayAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsKernelGatewayAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: tfUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileUserSettingsRSessionAppSettingsCustomImagePropertyToTerraform(struct?: TfUserProfile.UserSettingsRSessionAppSettingsCustomImageProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsRSessionAppSettingsCustomImagePropertyToHclTerraform(struct?: TfUserProfile.UserSettingsRSessionAppSettingsCustomImageProperty | cdktn.IResolvable): any {
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


export function tfUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: TfUserProfile.UserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsRSessionAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsRSessionAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileRSessionAppSettingsPropertyToTerraform(struct?: TfUserProfile.RSessionAppSettingsPropertyOutputReference | TfUserProfile.RSessionAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_image: cdktn.listMapper(tfUserProfileUserSettingsRSessionAppSettingsCustomImagePropertyToTerraform, true)(struct!.customImage),
    default_resource_spec: tfUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function tfUserProfileRSessionAppSettingsPropertyToHclTerraform(struct?: TfUserProfile.RSessionAppSettingsPropertyOutputReference | TfUserProfile.RSessionAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_image: {
      value: cdktn.listMapperHcl(tfUserProfileUserSettingsRSessionAppSettingsCustomImagePropertyToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsRSessionAppSettingsCustomImagePropertyList",
    },
    default_resource_spec: {
      value: tfUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsRSessionAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileRStudioServerProAppSettingsPropertyToTerraform(struct?: TfUserProfile.RStudioServerProAppSettingsPropertyOutputReference | TfUserProfile.RStudioServerProAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_status: cdktn.stringToTerraform(struct!.accessStatus),
    user_group: cdktn.stringToTerraform(struct!.userGroup),
  }
}


export function tfUserProfileRStudioServerProAppSettingsPropertyToHclTerraform(struct?: TfUserProfile.RStudioServerProAppSettingsPropertyOutputReference | TfUserProfile.RStudioServerProAppSettingsProperty): any {
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


export function tfUserProfileSharingSettingsPropertyToTerraform(struct?: TfUserProfile.SharingSettingsPropertyOutputReference | TfUserProfile.SharingSettingsProperty): any {
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


export function tfUserProfileSharingSettingsPropertyToHclTerraform(struct?: TfUserProfile.SharingSettingsPropertyOutputReference | TfUserProfile.SharingSettingsProperty): any {
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


export function tfUserProfileDefaultEbsStorageSettingsPropertyToTerraform(struct?: TfUserProfile.DefaultEbsStorageSettingsPropertyOutputReference | TfUserProfile.DefaultEbsStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktn.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function tfUserProfileDefaultEbsStorageSettingsPropertyToHclTerraform(struct?: TfUserProfile.DefaultEbsStorageSettingsPropertyOutputReference | TfUserProfile.DefaultEbsStorageSettingsProperty): any {
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


export function tfUserProfileSpaceStorageSettingsPropertyToTerraform(struct?: TfUserProfile.SpaceStorageSettingsPropertyOutputReference | TfUserProfile.SpaceStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ebs_storage_settings: tfUserProfileDefaultEbsStorageSettingsPropertyToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function tfUserProfileSpaceStorageSettingsPropertyToHclTerraform(struct?: TfUserProfile.SpaceStorageSettingsPropertyOutputReference | TfUserProfile.SpaceStorageSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: tfUserProfileDefaultEbsStorageSettingsPropertyToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DefaultEbsStorageSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileStudioWebPortalSettingsPropertyToTerraform(struct?: TfUserProfile.StudioWebPortalSettingsPropertyOutputReference | TfUserProfile.StudioWebPortalSettingsProperty): any {
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


export function tfUserProfileStudioWebPortalSettingsPropertyToHclTerraform(struct?: TfUserProfile.StudioWebPortalSettingsPropertyOutputReference | TfUserProfile.StudioWebPortalSettingsProperty): any {
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


export function tfUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyToTerraform(struct?: TfUserProfile.UserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyOutputReference | TfUserProfile.UserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty): any {
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


export function tfUserProfileTensorBoardAppSettingsPropertyToTerraform(struct?: TfUserProfile.TensorBoardAppSettingsPropertyOutputReference | TfUserProfile.TensorBoardAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_resource_spec: tfUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyToTerraform(struct!.defaultResourceSpec),
  }
}


export function tfUserProfileTensorBoardAppSettingsPropertyToHclTerraform(struct?: TfUserProfile.TensorBoardAppSettingsPropertyOutputReference | TfUserProfile.TensorBoardAppSettingsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_resource_spec: {
      value: tfUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "UserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfUserProfileUserSettingsPropertyToTerraform(struct?: TfUserProfile.UserSettingsPropertyOutputReference | TfUserProfile.UserSettingsProperty): any {
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
    canvas_app_settings: tfUserProfileCanvasAppSettingsPropertyToTerraform(struct!.canvasAppSettings),
    code_editor_app_settings: tfUserProfileCodeEditorAppSettingsPropertyToTerraform(struct!.codeEditorAppSettings),
    custom_file_system_config: cdktn.listMapper(tfUserProfileCustomFileSystemConfigPropertyToTerraform, true)(struct!.customFileSystemConfig),
    custom_posix_user_config: tfUserProfileCustomPosixUserConfigPropertyToTerraform(struct!.customPosixUserConfig),
    jupyter_lab_app_settings: tfUserProfileJupyterLabAppSettingsPropertyToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: tfUserProfileJupyterServerAppSettingsPropertyToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: tfUserProfileKernelGatewayAppSettingsPropertyToTerraform(struct!.kernelGatewayAppSettings),
    r_session_app_settings: tfUserProfileRSessionAppSettingsPropertyToTerraform(struct!.rSessionAppSettings),
    r_studio_server_pro_app_settings: tfUserProfileRStudioServerProAppSettingsPropertyToTerraform(struct!.rStudioServerProAppSettings),
    sharing_settings: tfUserProfileSharingSettingsPropertyToTerraform(struct!.sharingSettings),
    space_storage_settings: tfUserProfileSpaceStorageSettingsPropertyToTerraform(struct!.spaceStorageSettings),
    studio_web_portal_settings: tfUserProfileStudioWebPortalSettingsPropertyToTerraform(struct!.studioWebPortalSettings),
    tensor_board_app_settings: tfUserProfileTensorBoardAppSettingsPropertyToTerraform(struct!.tensorBoardAppSettings),
  }
}


export function tfUserProfileUserSettingsPropertyToHclTerraform(struct?: TfUserProfile.UserSettingsPropertyOutputReference | TfUserProfile.UserSettingsProperty): any {
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
      value: tfUserProfileCanvasAppSettingsPropertyToHclTerraform(struct!.canvasAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CanvasAppSettingsPropertyList",
    },
    code_editor_app_settings: {
      value: tfUserProfileCodeEditorAppSettingsPropertyToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CodeEditorAppSettingsPropertyList",
    },
    custom_file_system_config: {
      value: cdktn.listMapperHcl(tfUserProfileCustomFileSystemConfigPropertyToHclTerraform, true)(struct!.customFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomFileSystemConfigPropertyList",
    },
    custom_posix_user_config: {
      value: tfUserProfileCustomPosixUserConfigPropertyToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPosixUserConfigPropertyList",
    },
    jupyter_lab_app_settings: {
      value: tfUserProfileJupyterLabAppSettingsPropertyToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "JupyterLabAppSettingsPropertyList",
    },
    jupyter_server_app_settings: {
      value: tfUserProfileJupyterServerAppSettingsPropertyToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "JupyterServerAppSettingsPropertyList",
    },
    kernel_gateway_app_settings: {
      value: tfUserProfileKernelGatewayAppSettingsPropertyToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KernelGatewayAppSettingsPropertyList",
    },
    r_session_app_settings: {
      value: tfUserProfileRSessionAppSettingsPropertyToHclTerraform(struct!.rSessionAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RSessionAppSettingsPropertyList",
    },
    r_studio_server_pro_app_settings: {
      value: tfUserProfileRStudioServerProAppSettingsPropertyToHclTerraform(struct!.rStudioServerProAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RStudioServerProAppSettingsPropertyList",
    },
    sharing_settings: {
      value: tfUserProfileSharingSettingsPropertyToHclTerraform(struct!.sharingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SharingSettingsPropertyList",
    },
    space_storage_settings: {
      value: tfUserProfileSpaceStorageSettingsPropertyToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SpaceStorageSettingsPropertyList",
    },
    studio_web_portal_settings: {
      value: tfUserProfileStudioWebPortalSettingsPropertyToHclTerraform(struct!.studioWebPortalSettings),
      isBlock: true,
      type: "list",
      storageClassType: "StudioWebPortalSettingsPropertyList",
    },
    tensor_board_app_settings: {
      value: tfUserProfileTensorBoardAppSettingsPropertyToHclTerraform(struct!.tensorBoardAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TensorBoardAppSettingsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfUserProfile {
export interface DirectDeploySettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#status TfUserProfile#status}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#execution_role_arn TfUserProfile#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#status TfUserProfile#status}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#amazon_bedrock_role_arn TfUserProfile#amazon_bedrock_role_arn}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#data_source_name TfUserProfile#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#secret_arn TfUserProfile#secret_arn}
  */
  readonly secretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#status TfUserProfile#status}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#status TfUserProfile#status}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#cross_account_model_register_role_arn TfUserProfile#cross_account_model_register_role_arn}
  */
  readonly crossAccountModelRegisterRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#status TfUserProfile#status}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#amazon_forecast_role_arn TfUserProfile#amazon_forecast_role_arn}
  */
  readonly amazonForecastRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#status TfUserProfile#status}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#s3_artifact_path TfUserProfile#s3_artifact_path}
  */
  readonly s3ArtifactPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#s3_kms_key_id TfUserProfile#s3_kms_key_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#direct_deploy_settings TfUserProfile#direct_deploy_settings}
  */
  readonly directDeploySettings?: DirectDeploySettingsProperty;
  /**
  * emr_serverless_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#emr_serverless_settings TfUserProfile#emr_serverless_settings}
  */
  readonly emrServerlessSettings?: EmrServerlessSettingsProperty;
  /**
  * generative_ai_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#generative_ai_settings TfUserProfile#generative_ai_settings}
  */
  readonly generativeAiSettings?: GenerativeAiSettingsProperty;
  /**
  * identity_provider_oauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#identity_provider_oauth_settings TfUserProfile#identity_provider_oauth_settings}
  */
  readonly identityProviderOauthSettings?: IdentityProviderOauthSettingsProperty[] | cdktn.IResolvable;
  /**
  * kendra_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#kendra_settings TfUserProfile#kendra_settings}
  */
  readonly kendraSettings?: KendraSettingsProperty;
  /**
  * model_register_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#model_register_settings TfUserProfile#model_register_settings}
  */
  readonly modelRegisterSettings?: ModelRegisterSettingsProperty;
  /**
  * time_series_forecasting_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#time_series_forecasting_settings TfUserProfile#time_series_forecasting_settings}
  */
  readonly timeSeriesForecastingSettings?: TimeSeriesForecastingSettingsProperty;
  /**
  * workspace_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#workspace_settings TfUserProfile#workspace_settings}
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
export interface UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes TfUserProfile#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_management TfUserProfile#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes TfUserProfile#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes TfUserProfile#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}
export class UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined {
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

  public set internalValue(value: UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined) {
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
export interface UserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty {
  /**
  * idle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#idle_settings TfUserProfile#idle_settings}
  */
  readonly idleSettings?: UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty;
}
export class UserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty | undefined) {
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
  private _idleSettings = new UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: UserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsProperty) {
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
export interface UserSettingsCodeEditorAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#app_image_config_name TfUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#image_name TfUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#image_version_number TfUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class UserSettingsCodeEditorAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserSettingsCodeEditorAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: UserSettingsCodeEditorAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
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

export class UserSettingsCodeEditorAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : UserSettingsCodeEditorAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): UserSettingsCodeEditorAppSettingsCustomImagePropertyOutputReference {
    return new UserSettingsCodeEditorAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#instance_type TfUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn TfUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn TfUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias TfUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn TfUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class UserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty | undefined {
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

  public set internalValue(value: UserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn TfUserProfile#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns TfUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * app_lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#app_lifecycle_management TfUserProfile#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: UserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#custom_image TfUserProfile#custom_image}
  */
  readonly customImage?: UserSettingsCodeEditorAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_resource_spec TfUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: UserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty;
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
  private _appLifecycleManagement = new UserSettingsCodeEditorAppSettingsAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: UserSettingsCodeEditorAppSettingsAppLifecycleManagementProperty) {
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
  private _customImage = new UserSettingsCodeEditorAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: UserSettingsCodeEditorAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new UserSettingsCodeEditorAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: UserSettingsCodeEditorAppSettingsDefaultResourceSpecProperty) {
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
export interface EfsFileSystemConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#file_system_id TfUserProfile#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#file_system_path TfUserProfile#file_system_path}
  */
  readonly fileSystemPath?: string;
}
export class EfsFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EfsFileSystemConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: EfsFileSystemConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // file_system_path - computed: false, optional: true, required: false
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  public resetFileSystemPath() {
    this._fileSystemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
  }
}

export class EfsFileSystemConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : EfsFileSystemConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): EfsFileSystemConfigPropertyOutputReference {
    return new EfsFileSystemConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomFileSystemConfigProperty {
  /**
  * efs_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#efs_file_system_config TfUserProfile#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: EfsFileSystemConfigProperty[] | cdktn.IResolvable;
}
export class CustomFileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomFileSystemConfigProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CustomFileSystemConfigProperty | cdktn.IResolvable | undefined) {
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
  private _efsFileSystemConfig = new EfsFileSystemConfigPropertyList(this, "efs_file_system_config", false);
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: EfsFileSystemConfigProperty[] | cdktn.IResolvable) {
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

export class CustomFileSystemConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomFileSystemConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomFileSystemConfigPropertyOutputReference {
    return new CustomFileSystemConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPosixUserConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#gid TfUserProfile#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#uid TfUserProfile#uid}
  */
  readonly uid: number;
}
export class CustomPosixUserConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPosixUserConfigProperty | undefined {
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

  public set internalValue(value: CustomPosixUserConfigProperty | undefined) {
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
export interface UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes TfUserProfile#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_management TfUserProfile#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes TfUserProfile#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes TfUserProfile#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}
export class UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined {
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

  public set internalValue(value: UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty | undefined) {
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
export interface UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty {
  /**
  * idle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#idle_settings TfUserProfile#idle_settings}
  */
  readonly idleSettings?: UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty;
}
export class UserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty | undefined) {
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
  private _idleSettings = new UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsPropertyOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: UserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsProperty) {
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
export interface UserSettingsJupyterLabAppSettingsCodeRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#repository_url TfUserProfile#repository_url}
  */
  readonly repositoryUrl: string;
}
export class UserSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: UserSettingsJupyterLabAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined) {
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

export class UserSettingsJupyterLabAppSettingsCodeRepositoryPropertyList extends cdktn.ComplexList {
  public internalValue? : UserSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable

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
  public get(index: number): UserSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference {
    return new UserSettingsJupyterLabAppSettingsCodeRepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSettingsJupyterLabAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#app_image_config_name TfUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#image_name TfUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#image_version_number TfUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class UserSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: UserSettingsJupyterLabAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
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

export class UserSettingsJupyterLabAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : UserSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): UserSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference {
    return new UserSettingsJupyterLabAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#instance_type TfUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn TfUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn TfUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias TfUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn TfUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class UserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | undefined {
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

  public set internalValue(value: UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty | undefined) {
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
export interface EmrSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#assumable_role_arns TfUserProfile#assumable_role_arns}
  */
  readonly assumableRoleArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#execution_role_arns TfUserProfile#execution_role_arns}
  */
  readonly executionRoleArns?: string[];
}
export class EmrSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrSettingsProperty | undefined {
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

  public set internalValue(value: EmrSettingsProperty | undefined) {
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
export interface JupyterLabAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn TfUserProfile#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns TfUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * app_lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#app_lifecycle_management TfUserProfile#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty;
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#code_repository TfUserProfile#code_repository}
  */
  readonly codeRepository?: UserSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#custom_image TfUserProfile#custom_image}
  */
  readonly customImage?: UserSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_resource_spec TfUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty;
  /**
  * emr_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#emr_settings TfUserProfile#emr_settings}
  */
  readonly emrSettings?: EmrSettingsProperty;
}
export class JupyterLabAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JupyterLabAppSettingsProperty | undefined {
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

  public set internalValue(value: JupyterLabAppSettingsProperty | undefined) {
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
  private _appLifecycleManagement = new UserSettingsJupyterLabAppSettingsAppLifecycleManagementPropertyOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: UserSettingsJupyterLabAppSettingsAppLifecycleManagementProperty) {
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
  private _codeRepository = new UserSettingsJupyterLabAppSettingsCodeRepositoryPropertyList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: UserSettingsJupyterLabAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable) {
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
  private _customImage = new UserSettingsJupyterLabAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: UserSettingsJupyterLabAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new UserSettingsJupyterLabAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: UserSettingsJupyterLabAppSettingsDefaultResourceSpecProperty) {
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
  private _emrSettings = new EmrSettingsPropertyOutputReference(this, "emr_settings");
  public get emrSettings() {
    return this._emrSettings;
  }
  public putEmrSettings(value: EmrSettingsProperty) {
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
export interface UserSettingsJupyterServerAppSettingsCodeRepositoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#repository_url TfUserProfile#repository_url}
  */
  readonly repositoryUrl: string;
}
export class UserSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: UserSettingsJupyterServerAppSettingsCodeRepositoryProperty | cdktn.IResolvable | undefined) {
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

export class UserSettingsJupyterServerAppSettingsCodeRepositoryPropertyList extends cdktn.ComplexList {
  public internalValue? : UserSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable

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
  public get(index: number): UserSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference {
    return new UserSettingsJupyterServerAppSettingsCodeRepositoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#instance_type TfUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn TfUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn TfUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias TfUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn TfUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class UserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | undefined {
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

  public set internalValue(value: UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty | undefined) {
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
export interface JupyterServerAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns TfUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#code_repository TfUserProfile#code_repository}
  */
  readonly codeRepository?: UserSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_resource_spec TfUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty;
}
export class JupyterServerAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JupyterServerAppSettingsProperty | undefined {
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

  public set internalValue(value: JupyterServerAppSettingsProperty | undefined) {
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
  private _codeRepository = new UserSettingsJupyterServerAppSettingsCodeRepositoryPropertyList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: UserSettingsJupyterServerAppSettingsCodeRepositoryProperty[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new UserSettingsJupyterServerAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: UserSettingsJupyterServerAppSettingsDefaultResourceSpecProperty) {
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
export interface UserSettingsKernelGatewayAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#app_image_config_name TfUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#image_name TfUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#image_version_number TfUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class UserSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: UserSettingsKernelGatewayAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
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

export class UserSettingsKernelGatewayAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : UserSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): UserSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference {
    return new UserSettingsKernelGatewayAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#instance_type TfUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn TfUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn TfUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias TfUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn TfUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class UserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | undefined {
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

  public set internalValue(value: UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty | undefined) {
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
export interface KernelGatewayAppSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns TfUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#custom_image TfUserProfile#custom_image}
  */
  readonly customImage?: UserSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_resource_spec TfUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty;
}
export class KernelGatewayAppSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KernelGatewayAppSettingsProperty | undefined {
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

  public set internalValue(value: KernelGatewayAppSettingsProperty | undefined) {
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
  private _customImage = new UserSettingsKernelGatewayAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: UserSettingsKernelGatewayAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new UserSettingsKernelGatewayAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: UserSettingsKernelGatewayAppSettingsDefaultResourceSpecProperty) {
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
export interface UserSettingsRSessionAppSettingsCustomImageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#app_image_config_name TfUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#image_name TfUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#image_version_number TfUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}
export class UserSettingsRSessionAppSettingsCustomImagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UserSettingsRSessionAppSettingsCustomImageProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: UserSettingsRSessionAppSettingsCustomImageProperty | cdktn.IResolvable | undefined) {
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

export class UserSettingsRSessionAppSettingsCustomImagePropertyList extends cdktn.ComplexList {
  public internalValue? : UserSettingsRSessionAppSettingsCustomImageProperty[] | cdktn.IResolvable

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
  public get(index: number): UserSettingsRSessionAppSettingsCustomImagePropertyOutputReference {
    return new UserSettingsRSessionAppSettingsCustomImagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSettingsRSessionAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#instance_type TfUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn TfUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn TfUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias TfUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn TfUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class UserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsRSessionAppSettingsDefaultResourceSpecProperty | undefined {
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

  public set internalValue(value: UserSettingsRSessionAppSettingsDefaultResourceSpecProperty | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#custom_image TfUserProfile#custom_image}
  */
  readonly customImage?: UserSettingsRSessionAppSettingsCustomImageProperty[] | cdktn.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_resource_spec TfUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: UserSettingsRSessionAppSettingsDefaultResourceSpecProperty;
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
  private _customImage = new UserSettingsRSessionAppSettingsCustomImagePropertyList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: UserSettingsRSessionAppSettingsCustomImageProperty[] | cdktn.IResolvable) {
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
  private _defaultResourceSpec = new UserSettingsRSessionAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: UserSettingsRSessionAppSettingsDefaultResourceSpecProperty) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#access_status TfUserProfile#access_status}
  */
  readonly accessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#user_group TfUserProfile#user_group}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#notebook_output_option TfUserProfile#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#s3_kms_key_id TfUserProfile#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#s3_output_path TfUserProfile#s3_output_path}
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
export interface DefaultEbsStorageSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb TfUserProfile#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb TfUserProfile#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb: number;
}
export class DefaultEbsStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultEbsStorageSettingsProperty | undefined {
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

  public set internalValue(value: DefaultEbsStorageSettingsProperty | undefined) {
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
export interface SpaceStorageSettingsProperty {
  /**
  * default_ebs_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings TfUserProfile#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: DefaultEbsStorageSettingsProperty;
}
export class SpaceStorageSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpaceStorageSettingsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpaceStorageSettingsProperty | undefined) {
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
  private _defaultEbsStorageSettings = new DefaultEbsStorageSettingsPropertyOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: DefaultEbsStorageSettingsProperty) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#hidden_app_types TfUserProfile#hidden_app_types}
  */
  readonly hiddenAppTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#hidden_instance_types TfUserProfile#hidden_instance_types}
  */
  readonly hiddenInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#hidden_ml_tools TfUserProfile#hidden_ml_tools}
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
export interface UserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#instance_type TfUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn TfUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn TfUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias TfUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn TfUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}
export class UserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty | undefined {
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

  public set internalValue(value: UserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_resource_spec TfUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: UserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty;
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
  private _defaultResourceSpec = new UserSettingsTensorBoardAppSettingsDefaultResourceSpecPropertyOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: UserSettingsTensorBoardAppSettingsDefaultResourceSpecProperty) {
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
export interface UserSettingsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#auto_mount_home_efs TfUserProfile#auto_mount_home_efs}
  */
  readonly autoMountHomeEfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#default_landing_uri TfUserProfile#default_landing_uri}
  */
  readonly defaultLandingUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#execution_role TfUserProfile#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#security_groups TfUserProfile#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#studio_web_portal TfUserProfile#studio_web_portal}
  */
  readonly studioWebPortal?: string;
  /**
  * canvas_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#canvas_app_settings TfUserProfile#canvas_app_settings}
  */
  readonly canvasAppSettings?: CanvasAppSettingsProperty;
  /**
  * code_editor_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#code_editor_app_settings TfUserProfile#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: CodeEditorAppSettingsProperty;
  /**
  * custom_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#custom_file_system_config TfUserProfile#custom_file_system_config}
  */
  readonly customFileSystemConfig?: CustomFileSystemConfigProperty[] | cdktn.IResolvable;
  /**
  * custom_posix_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#custom_posix_user_config TfUserProfile#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: CustomPosixUserConfigProperty;
  /**
  * jupyter_lab_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings TfUserProfile#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: JupyterLabAppSettingsProperty;
  /**
  * jupyter_server_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings TfUserProfile#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: JupyterServerAppSettingsProperty;
  /**
  * kernel_gateway_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings TfUserProfile#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: KernelGatewayAppSettingsProperty;
  /**
  * r_session_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#r_session_app_settings TfUserProfile#r_session_app_settings}
  */
  readonly rSessionAppSettings?: RSessionAppSettingsProperty;
  /**
  * r_studio_server_pro_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings TfUserProfile#r_studio_server_pro_app_settings}
  */
  readonly rStudioServerProAppSettings?: RStudioServerProAppSettingsProperty;
  /**
  * sharing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#sharing_settings TfUserProfile#sharing_settings}
  */
  readonly sharingSettings?: SharingSettingsProperty;
  /**
  * space_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#space_storage_settings TfUserProfile#space_storage_settings}
  */
  readonly spaceStorageSettings?: SpaceStorageSettingsProperty;
  /**
  * studio_web_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#studio_web_portal_settings TfUserProfile#studio_web_portal_settings}
  */
  readonly studioWebPortalSettings?: StudioWebPortalSettingsProperty;
  /**
  * tensor_board_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_user_profile#tensor_board_app_settings TfUserProfile#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: TensorBoardAppSettingsProperty;
}
export class UserSettingsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserSettingsProperty | undefined {
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

  public set internalValue(value: UserSettingsProperty | undefined) {
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

  // default_landing_uri - computed: false, optional: true, required: false
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
  private _customFileSystemConfig = new CustomFileSystemConfigPropertyList(this, "custom_file_system_config", false);
  public get customFileSystemConfig() {
    return this._customFileSystemConfig;
  }
  public putCustomFileSystemConfig(value: CustomFileSystemConfigProperty[] | cdktn.IResolvable) {
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
  private _customPosixUserConfig = new CustomPosixUserConfigPropertyOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: CustomPosixUserConfigProperty) {
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
  private _jupyterLabAppSettings = new JupyterLabAppSettingsPropertyOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: JupyterLabAppSettingsProperty) {
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
  private _jupyterServerAppSettings = new JupyterServerAppSettingsPropertyOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: JupyterServerAppSettingsProperty) {
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
  private _kernelGatewayAppSettings = new KernelGatewayAppSettingsPropertyOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: KernelGatewayAppSettingsProperty) {
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
  private _spaceStorageSettings = new SpaceStorageSettingsPropertyOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: SpaceStorageSettingsProperty) {
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
}
