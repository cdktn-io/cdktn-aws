// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfConnectorProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#connection_mode TfConnectorProfile#connection_mode}
  */
  readonly connectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#connector_label TfConnectorProfile#connector_label}
  */
  readonly connectorLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#connector_type TfConnectorProfile#connector_type}
  */
  readonly connectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#id TfConnectorProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#kms_arn TfConnectorProfile#kms_arn}
  */
  readonly kmsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#name TfConnectorProfile#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#region TfConnectorProfile#region}
  */
  readonly region?: string;
  /**
  * connector_profile_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#connector_profile_config TfConnectorProfile#connector_profile_config}
  */
  readonly connectorProfileConfig: TfConnectorProfile.ConnectorProfileConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile aws_appflow_connector_profile}
*/
export class TfConnectorProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appflow_connector_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfConnectorProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfConnectorProfile to import
  * @param importFromId The id of the existing TfConnectorProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfConnectorProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appflow_connector_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile aws_appflow_connector_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfConnectorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: TfConnectorProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appflow_connector_profile',
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
    this._connectionMode = config.connectionMode;
    this._connectorLabel = config.connectorLabel;
    this._connectorType = config.connectorType;
    this._id = config.id;
    this._kmsArn = config.kmsArn;
    this._name = config.name;
    this._region = config.region;
    this._connectorProfileConfig.internalValue = config.connectorProfileConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connection_mode - computed: false, optional: false, required: true
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // connector_label - computed: false, optional: true, required: false
  private _connectorLabel?: string; 
  public get connectorLabel() {
    return this.getStringAttribute('connector_label');
  }
  public set connectorLabel(value: string) {
    this._connectorLabel = value;
  }
  public resetConnectorLabel() {
    this._connectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorLabelInput() {
    return this._connectorLabel;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // credentials_arn - computed: true, optional: false, required: false
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
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

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string; 
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn;
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

  // connector_profile_config - computed: false, optional: false, required: true
  private _connectorProfileConfig = new TfConnectorProfile.ConnectorProfileConfigPropertyOutputReference(this, "connector_profile_config");
  public get connectorProfileConfig() {
    return this._connectorProfileConfig;
  }
  public putConnectorProfileConfig(value: TfConnectorProfile.ConnectorProfileConfigProperty) {
    this._connectorProfileConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileConfigInput() {
    return this._connectorProfileConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_mode: cdktn.stringToTerraform(this._connectionMode),
      connector_label: cdktn.stringToTerraform(this._connectorLabel),
      connector_type: cdktn.stringToTerraform(this._connectorType),
      id: cdktn.stringToTerraform(this._id),
      kms_arn: cdktn.stringToTerraform(this._kmsArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      connector_profile_config: tfConnectorProfileConnectorProfileConfigPropertyToTerraform(this._connectorProfileConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_mode: {
        value: cdktn.stringToHclTerraform(this._connectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_label: {
        value: cdktn.stringToHclTerraform(this._connectorLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_type: {
        value: cdktn.stringToHclTerraform(this._connectorType),
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
      kms_arn: {
        value: cdktn.stringToHclTerraform(this._kmsArn),
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
      connector_profile_config: {
        value: tfConnectorProfileConnectorProfileConfigPropertyToHclTerraform(this._connectorProfileConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfConnectorProfile.ConnectorProfileConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsAmplitudeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    secret_key: cdktn.stringToTerraform(struct!.secretKey),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsAmplitudeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktn.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileApiKeyPropertyToTerraform(struct?: TfConnectorProfile.ApiKeyPropertyOutputReference | TfConnectorProfile.ApiKeyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_secret_key: cdktn.stringToTerraform(struct!.apiSecretKey),
  }
}


export function tfConnectorProfileApiKeyPropertyToHclTerraform(struct?: TfConnectorProfile.ApiKeyPropertyOutputReference | TfConnectorProfile.ApiKeyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_secret_key: {
      value: cdktn.stringToHclTerraform(struct!.apiSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileBasicPropertyToTerraform(struct?: TfConnectorProfile.BasicPropertyOutputReference | TfConnectorProfile.BasicProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function tfConnectorProfileBasicPropertyToHclTerraform(struct?: TfConnectorProfile.BasicPropertyOutputReference | TfConnectorProfile.BasicProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfConnectorProfileCustomPropertyToTerraform(struct?: TfConnectorProfile.CustomPropertyOutputReference | TfConnectorProfile.CustomProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.credentialsMap),
    custom_authentication_type: cdktn.stringToTerraform(struct!.customAuthenticationType),
  }
}


export function tfConnectorProfileCustomPropertyToHclTerraform(struct?: TfConnectorProfile.CustomPropertyOutputReference | TfConnectorProfile.CustomProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.credentialsMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.customAuthenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileOauth2PropertyToTerraform(struct?: TfConnectorProfile.Oauth2PropertyOutputReference | TfConnectorProfile.Oauth2Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    oauth_request: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyToTerraform(struct!.oauthRequest),
  }
}


export function tfConnectorProfileOauth2PropertyToHclTerraform(struct?: TfConnectorProfile.Oauth2PropertyOutputReference | TfConnectorProfile.Oauth2Property): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_request: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyToHclTerraform(struct!.oauthRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    api_key: tfConnectorProfileApiKeyPropertyToTerraform(struct!.apiKey),
    basic: tfConnectorProfileBasicPropertyToTerraform(struct!.basic),
    custom: tfConnectorProfileCustomPropertyToTerraform(struct!.custom),
    oauth2: tfConnectorProfileOauth2PropertyToTerraform(struct!.oauth2),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key: {
      value: tfConnectorProfileApiKeyPropertyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApiKeyPropertyList",
    },
    basic: {
      value: tfConnectorProfileBasicPropertyToHclTerraform(struct!.basic),
      isBlock: true,
      type: "list",
      storageClassType: "BasicPropertyList",
    },
    custom: {
      value: tfConnectorProfileCustomPropertyToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPropertyList",
    },
    oauth2: {
      value: tfConnectorProfileOauth2PropertyToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "list",
      storageClassType: "Oauth2PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsDatadogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    application_key: cdktn.stringToTerraform(struct!.applicationKey),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsDatadogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_key: {
      value: cdktn.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsDynatraceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsDynatraceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    oauth_request: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyToTerraform(struct!.oauthRequest),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_request: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyToHclTerraform(struct!.oauthRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsHoneycodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    oauth_request: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyToTerraform(struct!.oauthRequest),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsHoneycodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_request: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyToHclTerraform(struct!.oauthRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsInforNexusProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    datakey: cdktn.stringToTerraform(struct!.datakey),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsInforNexusProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datakey: {
      value: cdktn.stringToHclTerraform(struct!.datakey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktn.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    oauth_request: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyToTerraform(struct!.oauthRequest),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsMarketoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_request: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyToHclTerraform(struct!.oauthRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsRedshiftProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsRedshiftProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_credentials_arn: cdktn.stringToTerraform(struct!.clientCredentialsArn),
    jwt_token: cdktn.stringToTerraform(struct!.jwtToken),
    oauth2_grant_type: cdktn.stringToTerraform(struct!.oauth2GrantType),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    oauth_request: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyToTerraform(struct!.oauthRequest),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSalesforceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_credentials_arn: {
      value: cdktn.stringToHclTerraform(struct!.clientCredentialsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_token: {
      value: cdktn.stringToHclTerraform(struct!.jwtToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oauth2GrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_request: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyToHclTerraform(struct!.oauthRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileBasicAuthCredentialsPropertyToTerraform(struct?: TfConnectorProfile.BasicAuthCredentialsPropertyOutputReference | TfConnectorProfile.BasicAuthCredentialsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function tfConnectorProfileBasicAuthCredentialsPropertyToHclTerraform(struct?: TfConnectorProfile.BasicAuthCredentialsPropertyOutputReference | TfConnectorProfile.BasicAuthCredentialsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileOauthCredentialsPropertyToTerraform(struct?: TfConnectorProfile.OauthCredentialsPropertyOutputReference | TfConnectorProfile.OauthCredentialsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
    oauth_request: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyToTerraform(struct!.oauthRequest),
  }
}


export function tfConnectorProfileOauthCredentialsPropertyToHclTerraform(struct?: TfConnectorProfile.OauthCredentialsPropertyOutputReference | TfConnectorProfile.OauthCredentialsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_request: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyToHclTerraform(struct!.oauthRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_auth_credentials: tfConnectorProfileBasicAuthCredentialsPropertyToTerraform(struct!.basicAuthCredentials),
    oauth_credentials: tfConnectorProfileOauthCredentialsPropertyToTerraform(struct!.oauthCredentials),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSapoDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_auth_credentials: {
      value: tfConnectorProfileBasicAuthCredentialsPropertyToHclTerraform(struct!.basicAuthCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "BasicAuthCredentialsPropertyList",
    },
    oauth_credentials: {
      value: tfConnectorProfileOauthCredentialsPropertyToHclTerraform(struct!.oauthCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "OauthCredentialsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsServiceNowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsServiceNowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSingularPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSingularProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSingularPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSingularProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    oauth_request: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyToTerraform(struct!.oauthRequest),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSlackProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_request: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyToHclTerraform(struct!.oauthRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSnowflakeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsSnowflakeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsTrendmicroProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_secret_key: cdktn.stringToTerraform(struct!.apiSecretKey),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsTrendmicroProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_secret_key: {
      value: cdktn.stringToHclTerraform(struct!.apiSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsVeevaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsVeevaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    oauth_request: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyToTerraform(struct!.oauthRequest),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfileCredentialsZendeskProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_request: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyToHclTerraform(struct!.oauthRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileCredentialsPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileCredentialsPropertyOutputReference | TfConnectorProfile.ConnectorProfileCredentialsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amplitude: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyToTerraform(struct!.amplitude),
    custom_connector: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyToTerraform(struct!.customConnector),
    datadog: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyToTerraform(struct!.datadog),
    dynatrace: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyToTerraform(struct!.dynatrace),
    google_analytics: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyToTerraform(struct!.googleAnalytics),
    honeycode: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyToTerraform(struct!.honeycode),
    infor_nexus: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyToTerraform(struct!.inforNexus),
    marketo: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyToTerraform(struct!.marketo),
    redshift: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyToTerraform(struct!.redshift),
    salesforce: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyToTerraform(struct!.salesforce),
    sapo_data: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyToTerraform(struct!.sapoData),
    service_now: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyToTerraform(struct!.serviceNow),
    singular: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularPropertyToTerraform(struct!.singular),
    slack: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackPropertyToTerraform(struct!.slack),
    snowflake: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyToTerraform(struct!.snowflake),
    trendmicro: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyToTerraform(struct!.trendmicro),
    veeva: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyToTerraform(struct!.veeva),
    zendesk: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyToTerraform(struct!.zendesk),
  }
}


export function tfConnectorProfileConnectorProfileCredentialsPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileCredentialsPropertyOutputReference | TfConnectorProfile.ConnectorProfileCredentialsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amplitude: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyToHclTerraform(struct!.amplitude),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyList",
    },
    custom_connector: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyList",
    },
    datadog: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyList",
    },
    dynatrace: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyToHclTerraform(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyList",
    },
    google_analytics: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyToHclTerraform(struct!.googleAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyList",
    },
    honeycode: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyToHclTerraform(struct!.honeycode),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyList",
    },
    infor_nexus: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyToHclTerraform(struct!.inforNexus),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyList",
    },
    marketo: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyList",
    },
    redshift: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyToHclTerraform(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyList",
    },
    salesforce: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyList",
    },
    sapo_data: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyToHclTerraform(struct!.sapoData),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyList",
    },
    service_now: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyList",
    },
    singular: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularPropertyToHclTerraform(struct!.singular),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSingularPropertyList",
    },
    slack: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackPropertyToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSlackPropertyList",
    },
    snowflake: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyToHclTerraform(struct!.snowflake),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyList",
    },
    trendmicro: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyToHclTerraform(struct!.trendmicro),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyList",
    },
    veeva: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyToHclTerraform(struct!.veeva),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyList",
    },
    zendesk: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesAmplitudeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesAmplitudeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfConnectorProfileOauth2PropertiesPropertyToTerraform(struct?: TfConnectorProfile.Oauth2PropertiesPropertyOutputReference | TfConnectorProfile.Oauth2PropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oauth2_grant_type: cdktn.stringToTerraform(struct!.oauth2GrantType),
    token_url: cdktn.stringToTerraform(struct!.tokenUrl),
    token_url_custom_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tokenUrlCustomProperties),
  }
}


export function tfConnectorProfileOauth2PropertiesPropertyToHclTerraform(struct?: TfConnectorProfile.Oauth2PropertiesPropertyOutputReference | TfConnectorProfile.Oauth2PropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oauth2_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oauth2GrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url_custom_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tokenUrlCustomProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    profile_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.profileProperties),
    oauth2_properties: tfConnectorProfileOauth2PropertiesPropertyToTerraform(struct!.oauth2Properties),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    profile_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.profileProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    oauth2_properties: {
      value: tfConnectorProfileOauth2PropertiesPropertyToHclTerraform(struct!.oauth2Properties),
      isBlock: true,
      type: "list",
      storageClassType: "Oauth2PropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesDatadogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesDatadogProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesDynatraceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesDynatraceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesHoneycodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesHoneycodeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesInforNexusProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesInforNexusProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesMarketoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesMarketoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesRedshiftProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
    data_api_role_arn: cdktn.stringToTerraform(struct!.dataApiRoleArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    database_url: cdktn.stringToTerraform(struct!.databaseUrl),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesRedshiftProperty): any {
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
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_api_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataApiRoleArn),
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
    database_url: {
      value: cdktn.stringToHclTerraform(struct!.databaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSalesforceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    is_sandbox_environment: cdktn.booleanToTerraform(struct!.isSandboxEnvironment),
    use_privatelink_for_metadata_and_authorization: cdktn.booleanToTerraform(struct!.usePrivatelinkForMetadataAndAuthorization),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSalesforceProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sandbox_environment: {
      value: cdktn.booleanToHclTerraform(struct!.isSandboxEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_privatelink_for_metadata_and_authorization: {
      value: cdktn.booleanToHclTerraform(struct!.usePrivatelinkForMetadataAndAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileOauthPropertiesPropertyToTerraform(struct?: TfConnectorProfile.OauthPropertiesPropertyOutputReference | TfConnectorProfile.OauthPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code_url: cdktn.stringToTerraform(struct!.authCodeUrl),
    oauth_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oauthScopes),
    token_url: cdktn.stringToTerraform(struct!.tokenUrl),
  }
}


export function tfConnectorProfileOauthPropertiesPropertyToHclTerraform(struct?: TfConnectorProfile.OauthPropertiesPropertyOutputReference | TfConnectorProfile.OauthPropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code_url: {
      value: cdktn.stringToHclTerraform(struct!.authCodeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSapoDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_host_url: cdktn.stringToTerraform(struct!.applicationHostUrl),
    application_service_path: cdktn.stringToTerraform(struct!.applicationServicePath),
    client_number: cdktn.stringToTerraform(struct!.clientNumber),
    logon_language: cdktn.stringToTerraform(struct!.logonLanguage),
    port_number: cdktn.numberToTerraform(struct!.portNumber),
    private_link_service_name: cdktn.stringToTerraform(struct!.privateLinkServiceName),
    oauth_properties: tfConnectorProfileOauthPropertiesPropertyToTerraform(struct!.oauthProperties),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSapoDataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_host_url: {
      value: cdktn.stringToHclTerraform(struct!.applicationHostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_service_path: {
      value: cdktn.stringToHclTerraform(struct!.applicationServicePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_number: {
      value: cdktn.stringToHclTerraform(struct!.clientNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logon_language: {
      value: cdktn.stringToHclTerraform(struct!.logonLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_number: {
      value: cdktn.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_link_service_name: {
      value: cdktn.stringToHclTerraform(struct!.privateLinkServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_properties: {
      value: tfConnectorProfileOauthPropertiesPropertyToHclTerraform(struct!.oauthProperties),
      isBlock: true,
      type: "list",
      storageClassType: "OauthPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesServiceNowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesServiceNowProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSingularPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSingularProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSingularPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSingularProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSlackPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSlackProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSlackPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSlackProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSnowflakeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_name: cdktn.stringToTerraform(struct!.accountName),
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    private_link_service_name: cdktn.stringToTerraform(struct!.privateLinkServiceName),
    region: cdktn.stringToTerraform(struct!.region),
    stage: cdktn.stringToTerraform(struct!.stage),
    warehouse: cdktn.stringToTerraform(struct!.warehouse),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesSnowflakeProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_name: {
      value: cdktn.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_link_service_name: {
      value: cdktn.stringToHclTerraform(struct!.privateLinkServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktn.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktn.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesTrendmicroProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesTrendmicroProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesVeevaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesVeevaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesZendeskProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigConnectorProfilePropertiesZendeskProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfilePropertiesPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfilePropertiesPropertyOutputReference | TfConnectorProfile.ConnectorProfilePropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amplitude: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyToTerraform(struct!.amplitude),
    custom_connector: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyToTerraform(struct!.customConnector),
    datadog: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyToTerraform(struct!.datadog),
    dynatrace: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyToTerraform(struct!.dynatrace),
    google_analytics: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyToTerraform(struct!.googleAnalytics),
    honeycode: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyToTerraform(struct!.honeycode),
    infor_nexus: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyToTerraform(struct!.inforNexus),
    marketo: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyToTerraform(struct!.marketo),
    redshift: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyToTerraform(struct!.redshift),
    salesforce: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyToTerraform(struct!.salesforce),
    sapo_data: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyToTerraform(struct!.sapoData),
    service_now: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyToTerraform(struct!.serviceNow),
    singular: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularPropertyToTerraform(struct!.singular),
    slack: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackPropertyToTerraform(struct!.slack),
    snowflake: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyToTerraform(struct!.snowflake),
    trendmicro: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyToTerraform(struct!.trendmicro),
    veeva: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyToTerraform(struct!.veeva),
    zendesk: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyToTerraform(struct!.zendesk),
  }
}


export function tfConnectorProfileConnectorProfilePropertiesPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfilePropertiesPropertyOutputReference | TfConnectorProfile.ConnectorProfilePropertiesProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amplitude: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyToHclTerraform(struct!.amplitude),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyList",
    },
    custom_connector: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyList",
    },
    datadog: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyList",
    },
    dynatrace: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyToHclTerraform(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyList",
    },
    google_analytics: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyToHclTerraform(struct!.googleAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyList",
    },
    honeycode: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyToHclTerraform(struct!.honeycode),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyList",
    },
    infor_nexus: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyToHclTerraform(struct!.inforNexus),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyList",
    },
    marketo: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyList",
    },
    redshift: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyToHclTerraform(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyList",
    },
    salesforce: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyList",
    },
    sapo_data: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyToHclTerraform(struct!.sapoData),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyList",
    },
    service_now: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyList",
    },
    singular: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularPropertyToHclTerraform(struct!.singular),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesSingularPropertyList",
    },
    slack: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackPropertyToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesSlackPropertyList",
    },
    snowflake: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyToHclTerraform(struct!.snowflake),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyList",
    },
    trendmicro: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyToHclTerraform(struct!.trendmicro),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyList",
    },
    veeva: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyToHclTerraform(struct!.veeva),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyList",
    },
    zendesk: {
      value: tfConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfConnectorProfileConnectorProfileConfigPropertyToTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_profile_credentials: tfConnectorProfileConnectorProfileCredentialsPropertyToTerraform(struct!.connectorProfileCredentials),
    connector_profile_properties: tfConnectorProfileConnectorProfilePropertiesPropertyToTerraform(struct!.connectorProfileProperties),
  }
}


export function tfConnectorProfileConnectorProfileConfigPropertyToHclTerraform(struct?: TfConnectorProfile.ConnectorProfileConfigPropertyOutputReference | TfConnectorProfile.ConnectorProfileConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_profile_credentials: {
      value: tfConnectorProfileConnectorProfileCredentialsPropertyToHclTerraform(struct!.connectorProfileCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfileCredentialsPropertyList",
    },
    connector_profile_properties: {
      value: tfConnectorProfileConnectorProfilePropertiesPropertyToHclTerraform(struct!.connectorProfileProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorProfilePropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfConnectorProfile {
export interface ConnectorProfileConfigConnectorProfileCredentialsAmplitudeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#api_key TfConnectorProfile#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#secret_key TfConnectorProfile#secret_key}
  */
  readonly secretKey: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsAmplitudeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsAmplitudeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._secretKey = value.secretKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface ApiKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#api_key TfConnectorProfile#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#api_secret_key TfConnectorProfile#api_secret_key}
  */
  readonly apiSecretKey?: string;
}
export class ApiKeyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiKeyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecretKey = this._apiSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiKeyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._apiSecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._apiSecretKey = value.apiSecretKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_secret_key - computed: false, optional: true, required: false
  private _apiSecretKey?: string; 
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
  public set apiSecretKey(value: string) {
    this._apiSecretKey = value;
  }
  public resetApiSecretKey() {
    this._apiSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretKeyInput() {
    return this._apiSecretKey;
  }
}
export interface BasicProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#password TfConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#username TfConnectorProfile#username}
  */
  readonly username: string;
}
export class BasicPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BasicProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BasicProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface CustomProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#credentials_map TfConnectorProfile#credentials_map}
  */
  readonly credentialsMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#custom_authentication_type TfConnectorProfile#custom_authentication_type}
  */
  readonly customAuthenticationType: string;
}
export class CustomPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsMap = this._credentialsMap;
    }
    if (this._customAuthenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthenticationType = this._customAuthenticationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialsMap = undefined;
      this._customAuthenticationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialsMap = value.credentialsMap;
      this._customAuthenticationType = value.customAuthenticationType;
    }
  }

  // credentials_map - computed: false, optional: true, required: false
  private _credentialsMap?: { [key: string]: string }; 
  public get credentialsMap() {
    return this.getStringMapAttribute('credentials_map');
  }
  public set credentialsMap(value: { [key: string]: string }) {
    this._credentialsMap = value;
  }
  public resetCredentialsMap() {
    this._credentialsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsMapInput() {
    return this._credentialsMap;
  }

  // custom_authentication_type - computed: false, optional: false, required: true
  private _customAuthenticationType?: string; 
  public get customAuthenticationType() {
    return this.getStringAttribute('custom_authentication_type');
  }
  public set customAuthenticationType(value: string) {
    this._customAuthenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationTypeInput() {
    return this._customAuthenticationType;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code TfConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redirect_uri TfConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface Oauth2Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_token TfConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_id TfConnectorProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_secret TfConnectorProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#refresh_token TfConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_request TfConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestProperty;
}
export class Oauth2PropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Oauth2Property | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2Property | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestPropertyOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestProperty) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#authentication_type TfConnectorProfile#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#api_key TfConnectorProfile#api_key}
  */
  readonly apiKey?: ApiKeyProperty;
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#basic TfConnectorProfile#basic}
  */
  readonly basic?: BasicProperty;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#custom TfConnectorProfile#custom}
  */
  readonly custom?: CustomProperty;
  /**
  * oauth2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth2 TfConnectorProfile#oauth2}
  */
  readonly oauth2?: Oauth2Property;
}
export class ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._apiKey.internalValue = undefined;
      this._basic.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._oauth2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._apiKey.internalValue = value.apiKey;
      this._basic.internalValue = value.basic;
      this._custom.internalValue = value.custom;
      this._oauth2.internalValue = value.oauth2;
    }
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ApiKeyPropertyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ApiKeyProperty) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new BasicPropertyOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: BasicProperty) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new CustomPropertyOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: CustomProperty) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new Oauth2PropertyOutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: Oauth2Property) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsDatadogProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#api_key TfConnectorProfile#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#application_key TfConnectorProfile#application_key}
  */
  readonly applicationKey: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsDatadogProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsDatadogProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._applicationKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._applicationKey = value.applicationKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_key - computed: false, optional: false, required: true
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsDynatraceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#api_token TfConnectorProfile#api_token}
  */
  readonly apiToken: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsDynatraceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsDynatraceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code TfConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redirect_uri TfConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_token TfConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_id TfConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_secret TfConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#refresh_token TfConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_request TfConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestProperty;
}
export class ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestPropertyOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestProperty) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code TfConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redirect_uri TfConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsHoneycodeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_token TfConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#refresh_token TfConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_request TfConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestProperty;
}
export class ConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsHoneycodeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsHoneycodeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestPropertyOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestProperty) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsInforNexusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_key_id TfConnectorProfile#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#datakey TfConnectorProfile#datakey}
  */
  readonly datakey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#secret_access_key TfConnectorProfile#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#user_id TfConnectorProfile#user_id}
  */
  readonly userId: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsInforNexusProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._datakey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datakey = this._datakey;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsInforNexusProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._datakey = undefined;
      this._secretAccessKey = undefined;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._datakey = value.datakey;
      this._secretAccessKey = value.secretAccessKey;
      this._userId = value.userId;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // datakey - computed: false, optional: false, required: true
  private _datakey?: string; 
  public get datakey() {
    return this.getStringAttribute('datakey');
  }
  public set datakey(value: string) {
    this._datakey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datakeyInput() {
    return this._datakey;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code TfConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redirect_uri TfConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsMarketoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_token TfConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_id TfConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_secret TfConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * oauth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_request TfConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestProperty;
}
export class ConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsMarketoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsMarketoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthRequest.internalValue = value.oauthRequest;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestPropertyOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestProperty) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsRedshiftProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#password TfConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#username TfConnectorProfile#username}
  */
  readonly username: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsRedshiftProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsRedshiftProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code TfConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redirect_uri TfConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsSalesforceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_token TfConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_credentials_arn TfConnectorProfile#client_credentials_arn}
  */
  readonly clientCredentialsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#jwt_token TfConnectorProfile#jwt_token}
  */
  readonly jwtToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth2_grant_type TfConnectorProfile#oauth2_grant_type}
  */
  readonly oauth2GrantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#refresh_token TfConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_request TfConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestProperty;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSalesforceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientCredentialsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsArn = this._clientCredentialsArn;
    }
    if (this._jwtToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtToken = this._jwtToken;
    }
    if (this._oauth2GrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2GrantType = this._oauth2GrantType;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSalesforceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientCredentialsArn = undefined;
      this._jwtToken = undefined;
      this._oauth2GrantType = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientCredentialsArn = value.clientCredentialsArn;
      this._jwtToken = value.jwtToken;
      this._oauth2GrantType = value.oauth2GrantType;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_credentials_arn - computed: false, optional: true, required: false
  private _clientCredentialsArn?: string; 
  public get clientCredentialsArn() {
    return this.getStringAttribute('client_credentials_arn');
  }
  public set clientCredentialsArn(value: string) {
    this._clientCredentialsArn = value;
  }
  public resetClientCredentialsArn() {
    this._clientCredentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsArnInput() {
    return this._clientCredentialsArn;
  }

  // jwt_token - computed: false, optional: true, required: false
  private _jwtToken?: string; 
  public get jwtToken() {
    return this.getStringAttribute('jwt_token');
  }
  public set jwtToken(value: string) {
    this._jwtToken = value;
  }
  public resetJwtToken() {
    this._jwtToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokenInput() {
    return this._jwtToken;
  }

  // oauth2_grant_type - computed: false, optional: true, required: false
  private _oauth2GrantType?: string; 
  public get oauth2GrantType() {
    return this.getStringAttribute('oauth2_grant_type');
  }
  public set oauth2GrantType(value: string) {
    this._oauth2GrantType = value;
  }
  public resetOauth2GrantType() {
    this._oauth2GrantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2GrantTypeInput() {
    return this._oauth2GrantType;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestPropertyOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestProperty) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface BasicAuthCredentialsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#password TfConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#username TfConnectorProfile#username}
  */
  readonly username: string;
}
export class BasicAuthCredentialsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BasicAuthCredentialsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BasicAuthCredentialsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code TfConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redirect_uri TfConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface OauthCredentialsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_token TfConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_id TfConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_secret TfConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#refresh_token TfConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_request TfConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestProperty;
}
export class OauthCredentialsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OauthCredentialsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthCredentialsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestPropertyOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestProperty) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsSapoDataProperty {
  /**
  * basic_auth_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#basic_auth_credentials TfConnectorProfile#basic_auth_credentials}
  */
  readonly basicAuthCredentials?: BasicAuthCredentialsProperty;
  /**
  * oauth_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_credentials TfConnectorProfile#oauth_credentials}
  */
  readonly oauthCredentials?: OauthCredentialsProperty;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSapoDataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthCredentials = this._basicAuthCredentials?.internalValue;
    }
    if (this._oauthCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthCredentials = this._oauthCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSapoDataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuthCredentials.internalValue = undefined;
      this._oauthCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuthCredentials.internalValue = value.basicAuthCredentials;
      this._oauthCredentials.internalValue = value.oauthCredentials;
    }
  }

  // basic_auth_credentials - computed: false, optional: true, required: false
  private _basicAuthCredentials = new BasicAuthCredentialsPropertyOutputReference(this, "basic_auth_credentials");
  public get basicAuthCredentials() {
    return this._basicAuthCredentials;
  }
  public putBasicAuthCredentials(value: BasicAuthCredentialsProperty) {
    this._basicAuthCredentials.internalValue = value;
  }
  public resetBasicAuthCredentials() {
    this._basicAuthCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthCredentialsInput() {
    return this._basicAuthCredentials.internalValue;
  }

  // oauth_credentials - computed: false, optional: true, required: false
  private _oauthCredentials = new OauthCredentialsPropertyOutputReference(this, "oauth_credentials");
  public get oauthCredentials() {
    return this._oauthCredentials;
  }
  public putOauthCredentials(value: OauthCredentialsProperty) {
    this._oauthCredentials.internalValue = value;
  }
  public resetOauthCredentials() {
    this._oauthCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthCredentialsInput() {
    return this._oauthCredentials.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsServiceNowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#password TfConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#username TfConnectorProfile#username}
  */
  readonly username: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsServiceNowProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsServiceNowProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface ConnectorProfileConfigConnectorProfileCredentialsSingularProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#api_key TfConnectorProfile#api_key}
  */
  readonly apiKey: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSingularPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSingularProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSingularProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code TfConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redirect_uri TfConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsSlackProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_token TfConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_id TfConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_secret TfConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * oauth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_request TfConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestProperty;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSlackPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSlackProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSlackProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthRequest.internalValue = value.oauthRequest;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestPropertyOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestProperty) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsSnowflakeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#password TfConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#username TfConnectorProfile#username}
  */
  readonly username: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsSnowflakeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsSnowflakeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface ConnectorProfileConfigConnectorProfileCredentialsTrendmicroProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#api_secret_key TfConnectorProfile#api_secret_key}
  */
  readonly apiSecretKey: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsTrendmicroProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecretKey = this._apiSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsTrendmicroProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiSecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiSecretKey = value.apiSecretKey;
    }
  }

  // api_secret_key - computed: false, optional: false, required: true
  private _apiSecretKey?: string; 
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
  public set apiSecretKey(value: string) {
    this._apiSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretKeyInput() {
    return this._apiSecretKey;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsVeevaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#password TfConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#username TfConnectorProfile#username}
  */
  readonly username: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsVeevaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsVeevaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code TfConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redirect_uri TfConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}
export class ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface ConnectorProfileConfigConnectorProfileCredentialsZendeskProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#access_token TfConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_id TfConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_secret TfConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * oauth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_request TfConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestProperty;
}
export class ConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfileCredentialsZendeskProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfileCredentialsZendeskProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthRequest.internalValue = value.oauthRequest;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestPropertyOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: ConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestProperty) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface ConnectorProfileCredentialsProperty {
  /**
  * amplitude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#amplitude TfConnectorProfile#amplitude}
  */
  readonly amplitude?: ConnectorProfileConfigConnectorProfileCredentialsAmplitudeProperty;
  /**
  * custom_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#custom_connector TfConnectorProfile#custom_connector}
  */
  readonly customConnector?: ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorProperty;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#datadog TfConnectorProfile#datadog}
  */
  readonly datadog?: ConnectorProfileConfigConnectorProfileCredentialsDatadogProperty;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#dynatrace TfConnectorProfile#dynatrace}
  */
  readonly dynatrace?: ConnectorProfileConfigConnectorProfileCredentialsDynatraceProperty;
  /**
  * google_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#google_analytics TfConnectorProfile#google_analytics}
  */
  readonly googleAnalytics?: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsProperty;
  /**
  * honeycode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#honeycode TfConnectorProfile#honeycode}
  */
  readonly honeycode?: ConnectorProfileConfigConnectorProfileCredentialsHoneycodeProperty;
  /**
  * infor_nexus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#infor_nexus TfConnectorProfile#infor_nexus}
  */
  readonly inforNexus?: ConnectorProfileConfigConnectorProfileCredentialsInforNexusProperty;
  /**
  * marketo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#marketo TfConnectorProfile#marketo}
  */
  readonly marketo?: ConnectorProfileConfigConnectorProfileCredentialsMarketoProperty;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redshift TfConnectorProfile#redshift}
  */
  readonly redshift?: ConnectorProfileConfigConnectorProfileCredentialsRedshiftProperty;
  /**
  * salesforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#salesforce TfConnectorProfile#salesforce}
  */
  readonly salesforce?: ConnectorProfileConfigConnectorProfileCredentialsSalesforceProperty;
  /**
  * sapo_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#sapo_data TfConnectorProfile#sapo_data}
  */
  readonly sapoData?: ConnectorProfileConfigConnectorProfileCredentialsSapoDataProperty;
  /**
  * service_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#service_now TfConnectorProfile#service_now}
  */
  readonly serviceNow?: ConnectorProfileConfigConnectorProfileCredentialsServiceNowProperty;
  /**
  * singular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#singular TfConnectorProfile#singular}
  */
  readonly singular?: ConnectorProfileConfigConnectorProfileCredentialsSingularProperty;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#slack TfConnectorProfile#slack}
  */
  readonly slack?: ConnectorProfileConfigConnectorProfileCredentialsSlackProperty;
  /**
  * snowflake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#snowflake TfConnectorProfile#snowflake}
  */
  readonly snowflake?: ConnectorProfileConfigConnectorProfileCredentialsSnowflakeProperty;
  /**
  * trendmicro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#trendmicro TfConnectorProfile#trendmicro}
  */
  readonly trendmicro?: ConnectorProfileConfigConnectorProfileCredentialsTrendmicroProperty;
  /**
  * veeva block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#veeva TfConnectorProfile#veeva}
  */
  readonly veeva?: ConnectorProfileConfigConnectorProfileCredentialsVeevaProperty;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#zendesk TfConnectorProfile#zendesk}
  */
  readonly zendesk?: ConnectorProfileConfigConnectorProfileCredentialsZendeskProperty;
}
export class ConnectorProfileCredentialsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileCredentialsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude?.internalValue;
    }
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._googleAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
    }
    if (this._honeycode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycode = this._honeycode?.internalValue;
    }
    if (this._inforNexus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._singular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._trendmicro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro?.internalValue;
    }
    if (this._veeva?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileCredentialsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amplitude.internalValue = undefined;
      this._customConnector.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._googleAnalytics.internalValue = undefined;
      this._honeycode.internalValue = undefined;
      this._inforNexus.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._singular.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._trendmicro.internalValue = undefined;
      this._veeva.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amplitude.internalValue = value.amplitude;
      this._customConnector.internalValue = value.customConnector;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._googleAnalytics.internalValue = value.googleAnalytics;
      this._honeycode.internalValue = value.honeycode;
      this._inforNexus.internalValue = value.inforNexus;
      this._marketo.internalValue = value.marketo;
      this._redshift.internalValue = value.redshift;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._serviceNow.internalValue = value.serviceNow;
      this._singular.internalValue = value.singular;
      this._slack.internalValue = value.slack;
      this._snowflake.internalValue = value.snowflake;
      this._trendmicro.internalValue = value.trendmicro;
      this._veeva.internalValue = value.veeva;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // amplitude - computed: false, optional: true, required: false
  private _amplitude = new ConnectorProfileConfigConnectorProfileCredentialsAmplitudePropertyOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }
  public putAmplitude(value: ConnectorProfileConfigConnectorProfileCredentialsAmplitudeProperty) {
    this._amplitude.internalValue = value;
  }
  public resetAmplitude() {
    this._amplitude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude.internalValue;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector = new ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorPropertyOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: ConnectorProfileConfigConnectorProfileCredentialsCustomConnectorProperty) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new ConnectorProfileConfigConnectorProfileCredentialsDatadogPropertyOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: ConnectorProfileConfigConnectorProfileCredentialsDatadogProperty) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new ConnectorProfileConfigConnectorProfileCredentialsDynatracePropertyOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: ConnectorProfileConfigConnectorProfileCredentialsDynatraceProperty) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // google_analytics - computed: false, optional: true, required: false
  private _googleAnalytics = new ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsPropertyOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }
  public putGoogleAnalytics(value: ConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsProperty) {
    this._googleAnalytics.internalValue = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics.internalValue;
  }

  // honeycode - computed: false, optional: true, required: false
  private _honeycode = new ConnectorProfileConfigConnectorProfileCredentialsHoneycodePropertyOutputReference(this, "honeycode");
  public get honeycode() {
    return this._honeycode;
  }
  public putHoneycode(value: ConnectorProfileConfigConnectorProfileCredentialsHoneycodeProperty) {
    this._honeycode.internalValue = value;
  }
  public resetHoneycode() {
    this._honeycode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycodeInput() {
    return this._honeycode.internalValue;
  }

  // infor_nexus - computed: false, optional: true, required: false
  private _inforNexus = new ConnectorProfileConfigConnectorProfileCredentialsInforNexusPropertyOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }
  public putInforNexus(value: ConnectorProfileConfigConnectorProfileCredentialsInforNexusProperty) {
    this._inforNexus.internalValue = value;
  }
  public resetInforNexus() {
    this._inforNexus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus.internalValue;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo = new ConnectorProfileConfigConnectorProfileCredentialsMarketoPropertyOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: ConnectorProfileConfigConnectorProfileCredentialsMarketoProperty) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new ConnectorProfileConfigConnectorProfileCredentialsRedshiftPropertyOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: ConnectorProfileConfigConnectorProfileCredentialsRedshiftProperty) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new ConnectorProfileConfigConnectorProfileCredentialsSalesforcePropertyOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: ConnectorProfileConfigConnectorProfileCredentialsSalesforceProperty) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData = new ConnectorProfileConfigConnectorProfileCredentialsSapoDataPropertyOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: ConnectorProfileConfigConnectorProfileCredentialsSapoDataProperty) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new ConnectorProfileConfigConnectorProfileCredentialsServiceNowPropertyOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: ConnectorProfileConfigConnectorProfileCredentialsServiceNowProperty) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // singular - computed: false, optional: true, required: false
  private _singular = new ConnectorProfileConfigConnectorProfileCredentialsSingularPropertyOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }
  public putSingular(value: ConnectorProfileConfigConnectorProfileCredentialsSingularProperty) {
    this._singular.internalValue = value;
  }
  public resetSingular() {
    this._singular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new ConnectorProfileConfigConnectorProfileCredentialsSlackPropertyOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: ConnectorProfileConfigConnectorProfileCredentialsSlackProperty) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new ConnectorProfileConfigConnectorProfileCredentialsSnowflakePropertyOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: ConnectorProfileConfigConnectorProfileCredentialsSnowflakeProperty) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // trendmicro - computed: false, optional: true, required: false
  private _trendmicro = new ConnectorProfileConfigConnectorProfileCredentialsTrendmicroPropertyOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }
  public putTrendmicro(value: ConnectorProfileConfigConnectorProfileCredentialsTrendmicroProperty) {
    this._trendmicro.internalValue = value;
  }
  public resetTrendmicro() {
    this._trendmicro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro.internalValue;
  }

  // veeva - computed: false, optional: true, required: false
  private _veeva = new ConnectorProfileConfigConnectorProfileCredentialsVeevaPropertyOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }
  public putVeeva(value: ConnectorProfileConfigConnectorProfileCredentialsVeevaProperty) {
    this._veeva.internalValue = value;
  }
  public resetVeeva() {
    this._veeva.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new ConnectorProfileConfigConnectorProfileCredentialsZendeskPropertyOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: ConnectorProfileConfigConnectorProfileCredentialsZendeskProperty) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesAmplitudeProperty {
}
export class ConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesAmplitudeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesAmplitudeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Oauth2PropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth2_grant_type TfConnectorProfile#oauth2_grant_type}
  */
  readonly oauth2GrantType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#token_url TfConnectorProfile#token_url}
  */
  readonly tokenUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#token_url_custom_properties TfConnectorProfile#token_url_custom_properties}
  */
  readonly tokenUrlCustomProperties?: { [key: string]: string };
}
export class Oauth2PropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Oauth2PropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauth2GrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2GrantType = this._oauth2GrantType;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._tokenUrlCustomProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrlCustomProperties = this._tokenUrlCustomProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2PropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauth2GrantType = undefined;
      this._tokenUrl = undefined;
      this._tokenUrlCustomProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauth2GrantType = value.oauth2GrantType;
      this._tokenUrl = value.tokenUrl;
      this._tokenUrlCustomProperties = value.tokenUrlCustomProperties;
    }
  }

  // oauth2_grant_type - computed: false, optional: false, required: true
  private _oauth2GrantType?: string; 
  public get oauth2GrantType() {
    return this.getStringAttribute('oauth2_grant_type');
  }
  public set oauth2GrantType(value: string) {
    this._oauth2GrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2GrantTypeInput() {
    return this._oauth2GrantType;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // token_url_custom_properties - computed: false, optional: true, required: false
  private _tokenUrlCustomProperties?: { [key: string]: string }; 
  public get tokenUrlCustomProperties() {
    return this.getStringMapAttribute('token_url_custom_properties');
  }
  public set tokenUrlCustomProperties(value: { [key: string]: string }) {
    this._tokenUrlCustomProperties = value;
  }
  public resetTokenUrlCustomProperties() {
    this._tokenUrlCustomProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlCustomPropertiesInput() {
    return this._tokenUrlCustomProperties;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#profile_properties TfConnectorProfile#profile_properties}
  */
  readonly profileProperties?: { [key: string]: string };
  /**
  * oauth2_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth2_properties TfConnectorProfile#oauth2_properties}
  */
  readonly oauth2Properties?: Oauth2PropertiesProperty;
}
export class ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileProperties = this._profileProperties;
    }
    if (this._oauth2Properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Properties = this._oauth2Properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._profileProperties = undefined;
      this._oauth2Properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._profileProperties = value.profileProperties;
      this._oauth2Properties.internalValue = value.oauth2Properties;
    }
  }

  // profile_properties - computed: false, optional: true, required: false
  private _profileProperties?: { [key: string]: string }; 
  public get profileProperties() {
    return this.getStringMapAttribute('profile_properties');
  }
  public set profileProperties(value: { [key: string]: string }) {
    this._profileProperties = value;
  }
  public resetProfileProperties() {
    this._profileProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePropertiesInput() {
    return this._profileProperties;
  }

  // oauth2_properties - computed: false, optional: true, required: false
  private _oauth2Properties = new Oauth2PropertiesPropertyOutputReference(this, "oauth2_properties");
  public get oauth2Properties() {
    return this._oauth2Properties;
  }
  public putOauth2Properties(value: Oauth2PropertiesProperty) {
    this._oauth2Properties.internalValue = value;
  }
  public resetOauth2Properties() {
    this._oauth2Properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PropertiesInput() {
    return this._oauth2Properties.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesDatadogProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesDatadogProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesDatadogProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesDynatraceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesDynatraceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesDynatraceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsProperty {
}
export class ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesHoneycodeProperty {
}
export class ConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesHoneycodeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesHoneycodeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesInforNexusProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesInforNexusProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesInforNexusProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesMarketoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesMarketoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesMarketoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesRedshiftProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#bucket_name TfConnectorProfile#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#bucket_prefix TfConnectorProfile#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#cluster_identifier TfConnectorProfile#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#data_api_role_arn TfConnectorProfile#data_api_role_arn}
  */
  readonly dataApiRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#database_name TfConnectorProfile#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#database_url TfConnectorProfile#database_url}
  */
  readonly databaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#role_arn TfConnectorProfile#role_arn}
  */
  readonly roleArn: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesRedshiftProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._dataApiRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataApiRoleArn = this._dataApiRoleArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._databaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUrl = this._databaseUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesRedshiftProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._clusterIdentifier = undefined;
      this._dataApiRoleArn = undefined;
      this._databaseName = undefined;
      this._databaseUrl = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._clusterIdentifier = value.clusterIdentifier;
      this._dataApiRoleArn = value.dataApiRoleArn;
      this._databaseName = value.databaseName;
      this._databaseUrl = value.databaseUrl;
      this._roleArn = value.roleArn;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // cluster_identifier - computed: false, optional: true, required: false
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // data_api_role_arn - computed: false, optional: true, required: false
  private _dataApiRoleArn?: string; 
  public get dataApiRoleArn() {
    return this.getStringAttribute('data_api_role_arn');
  }
  public set dataApiRoleArn(value: string) {
    this._dataApiRoleArn = value;
  }
  public resetDataApiRoleArn() {
    this._dataApiRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataApiRoleArnInput() {
    return this._dataApiRoleArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_url - computed: false, optional: true, required: false
  private _databaseUrl?: string; 
  public get databaseUrl() {
    return this.getStringAttribute('database_url');
  }
  public set databaseUrl(value: string) {
    this._databaseUrl = value;
  }
  public resetDatabaseUrl() {
    this._databaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUrlInput() {
    return this._databaseUrl;
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
}
export interface ConnectorProfileConfigConnectorProfilePropertiesSalesforceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#is_sandbox_environment TfConnectorProfile#is_sandbox_environment}
  */
  readonly isSandboxEnvironment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#use_privatelink_for_metadata_and_authorization TfConnectorProfile#use_privatelink_for_metadata_and_authorization}
  */
  readonly usePrivatelinkForMetadataAndAuthorization?: boolean | cdktn.IResolvable;
}
export class ConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesSalesforceProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    if (this._isSandboxEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSandboxEnvironment = this._isSandboxEnvironment;
    }
    if (this._usePrivatelinkForMetadataAndAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivatelinkForMetadataAndAuthorization = this._usePrivatelinkForMetadataAndAuthorization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesSalesforceProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
      this._isSandboxEnvironment = undefined;
      this._usePrivatelinkForMetadataAndAuthorization = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
      this._isSandboxEnvironment = value.isSandboxEnvironment;
      this._usePrivatelinkForMetadataAndAuthorization = value.usePrivatelinkForMetadataAndAuthorization;
    }
  }

  // instance_url - computed: false, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }

  // is_sandbox_environment - computed: false, optional: true, required: false
  private _isSandboxEnvironment?: boolean | cdktn.IResolvable; 
  public get isSandboxEnvironment() {
    return this.getBooleanAttribute('is_sandbox_environment');
  }
  public set isSandboxEnvironment(value: boolean | cdktn.IResolvable) {
    this._isSandboxEnvironment = value;
  }
  public resetIsSandboxEnvironment() {
    this._isSandboxEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSandboxEnvironmentInput() {
    return this._isSandboxEnvironment;
  }

  // use_privatelink_for_metadata_and_authorization - computed: false, optional: true, required: false
  private _usePrivatelinkForMetadataAndAuthorization?: boolean | cdktn.IResolvable; 
  public get usePrivatelinkForMetadataAndAuthorization() {
    return this.getBooleanAttribute('use_privatelink_for_metadata_and_authorization');
  }
  public set usePrivatelinkForMetadataAndAuthorization(value: boolean | cdktn.IResolvable) {
    this._usePrivatelinkForMetadataAndAuthorization = value;
  }
  public resetUsePrivatelinkForMetadataAndAuthorization() {
    this._usePrivatelinkForMetadataAndAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivatelinkForMetadataAndAuthorizationInput() {
    return this._usePrivatelinkForMetadataAndAuthorization;
  }
}
export interface OauthPropertiesProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#auth_code_url TfConnectorProfile#auth_code_url}
  */
  readonly authCodeUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_scopes TfConnectorProfile#oauth_scopes}
  */
  readonly oauthScopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#token_url TfConnectorProfile#token_url}
  */
  readonly tokenUrl: string;
}
export class OauthPropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OauthPropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCodeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCodeUrl = this._authCodeUrl;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthPropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCodeUrl = undefined;
      this._oauthScopes = undefined;
      this._tokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCodeUrl = value.authCodeUrl;
      this._oauthScopes = value.oauthScopes;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // auth_code_url - computed: false, optional: false, required: true
  private _authCodeUrl?: string; 
  public get authCodeUrl() {
    return this.getStringAttribute('auth_code_url');
  }
  public set authCodeUrl(value: string) {
    this._authCodeUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeUrlInput() {
    return this._authCodeUrl;
  }

  // oauth_scopes - computed: false, optional: false, required: true
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesSapoDataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#application_host_url TfConnectorProfile#application_host_url}
  */
  readonly applicationHostUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#application_service_path TfConnectorProfile#application_service_path}
  */
  readonly applicationServicePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#client_number TfConnectorProfile#client_number}
  */
  readonly clientNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#logon_language TfConnectorProfile#logon_language}
  */
  readonly logonLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#port_number TfConnectorProfile#port_number}
  */
  readonly portNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#private_link_service_name TfConnectorProfile#private_link_service_name}
  */
  readonly privateLinkServiceName?: string;
  /**
  * oauth_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#oauth_properties TfConnectorProfile#oauth_properties}
  */
  readonly oauthProperties?: OauthPropertiesProperty;
}
export class ConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesSapoDataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationHostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationHostUrl = this._applicationHostUrl;
    }
    if (this._applicationServicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationServicePath = this._applicationServicePath;
    }
    if (this._clientNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientNumber = this._clientNumber;
    }
    if (this._logonLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonLanguage = this._logonLanguage;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._privateLinkServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkServiceName = this._privateLinkServiceName;
    }
    if (this._oauthProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthProperties = this._oauthProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesSapoDataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationHostUrl = undefined;
      this._applicationServicePath = undefined;
      this._clientNumber = undefined;
      this._logonLanguage = undefined;
      this._portNumber = undefined;
      this._privateLinkServiceName = undefined;
      this._oauthProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationHostUrl = value.applicationHostUrl;
      this._applicationServicePath = value.applicationServicePath;
      this._clientNumber = value.clientNumber;
      this._logonLanguage = value.logonLanguage;
      this._portNumber = value.portNumber;
      this._privateLinkServiceName = value.privateLinkServiceName;
      this._oauthProperties.internalValue = value.oauthProperties;
    }
  }

  // application_host_url - computed: false, optional: false, required: true
  private _applicationHostUrl?: string; 
  public get applicationHostUrl() {
    return this.getStringAttribute('application_host_url');
  }
  public set applicationHostUrl(value: string) {
    this._applicationHostUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationHostUrlInput() {
    return this._applicationHostUrl;
  }

  // application_service_path - computed: false, optional: false, required: true
  private _applicationServicePath?: string; 
  public get applicationServicePath() {
    return this.getStringAttribute('application_service_path');
  }
  public set applicationServicePath(value: string) {
    this._applicationServicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationServicePathInput() {
    return this._applicationServicePath;
  }

  // client_number - computed: false, optional: false, required: true
  private _clientNumber?: string; 
  public get clientNumber() {
    return this.getStringAttribute('client_number');
  }
  public set clientNumber(value: string) {
    this._clientNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNumberInput() {
    return this._clientNumber;
  }

  // logon_language - computed: false, optional: true, required: false
  private _logonLanguage?: string; 
  public get logonLanguage() {
    return this.getStringAttribute('logon_language');
  }
  public set logonLanguage(value: string) {
    this._logonLanguage = value;
  }
  public resetLogonLanguage() {
    this._logonLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonLanguageInput() {
    return this._logonLanguage;
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // private_link_service_name - computed: false, optional: true, required: false
  private _privateLinkServiceName?: string; 
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }
  public set privateLinkServiceName(value: string) {
    this._privateLinkServiceName = value;
  }
  public resetPrivateLinkServiceName() {
    this._privateLinkServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceNameInput() {
    return this._privateLinkServiceName;
  }

  // oauth_properties - computed: false, optional: true, required: false
  private _oauthProperties = new OauthPropertiesPropertyOutputReference(this, "oauth_properties");
  public get oauthProperties() {
    return this._oauthProperties;
  }
  public putOauthProperties(value: OauthPropertiesProperty) {
    this._oauthProperties.internalValue = value;
  }
  public resetOauthProperties() {
    this._oauthProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthPropertiesInput() {
    return this._oauthProperties.internalValue;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesServiceNowProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesServiceNowProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesServiceNowProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesSingularProperty {
}
export class ConnectorProfileConfigConnectorProfilePropertiesSingularPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesSingularProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesSingularProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesSlackProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesSlackPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesSlackProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesSlackProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesSnowflakeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#account_name TfConnectorProfile#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#bucket_name TfConnectorProfile#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#bucket_prefix TfConnectorProfile#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#private_link_service_name TfConnectorProfile#private_link_service_name}
  */
  readonly privateLinkServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#region TfConnectorProfile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#stage TfConnectorProfile#stage}
  */
  readonly stage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#warehouse TfConnectorProfile#warehouse}
  */
  readonly warehouse: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesSnowflakeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._privateLinkServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkServiceName = this._privateLinkServiceName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesSnowflakeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._privateLinkServiceName = undefined;
      this._region = undefined;
      this._stage = undefined;
      this._warehouse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._privateLinkServiceName = value.privateLinkServiceName;
      this._region = value.region;
      this._stage = value.stage;
      this._warehouse = value.warehouse;
    }
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // private_link_service_name - computed: false, optional: true, required: false
  private _privateLinkServiceName?: string; 
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }
  public set privateLinkServiceName(value: string) {
    this._privateLinkServiceName = value;
  }
  public resetPrivateLinkServiceName() {
    this._privateLinkServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceNameInput() {
    return this._privateLinkServiceName;
  }

  // region - computed: false, optional: true, required: false
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

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesTrendmicroProperty {
}
export class ConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesTrendmicroProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesTrendmicroProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesVeevaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesVeevaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesVeevaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface ConnectorProfileConfigConnectorProfilePropertiesZendeskProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#instance_url TfConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}
export class ConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigConnectorProfilePropertiesZendeskProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigConnectorProfilePropertiesZendeskProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface ConnectorProfilePropertiesProperty {
  /**
  * amplitude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#amplitude TfConnectorProfile#amplitude}
  */
  readonly amplitude?: ConnectorProfileConfigConnectorProfilePropertiesAmplitudeProperty;
  /**
  * custom_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#custom_connector TfConnectorProfile#custom_connector}
  */
  readonly customConnector?: ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorProperty;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#datadog TfConnectorProfile#datadog}
  */
  readonly datadog?: ConnectorProfileConfigConnectorProfilePropertiesDatadogProperty;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#dynatrace TfConnectorProfile#dynatrace}
  */
  readonly dynatrace?: ConnectorProfileConfigConnectorProfilePropertiesDynatraceProperty;
  /**
  * google_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#google_analytics TfConnectorProfile#google_analytics}
  */
  readonly googleAnalytics?: ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsProperty;
  /**
  * honeycode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#honeycode TfConnectorProfile#honeycode}
  */
  readonly honeycode?: ConnectorProfileConfigConnectorProfilePropertiesHoneycodeProperty;
  /**
  * infor_nexus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#infor_nexus TfConnectorProfile#infor_nexus}
  */
  readonly inforNexus?: ConnectorProfileConfigConnectorProfilePropertiesInforNexusProperty;
  /**
  * marketo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#marketo TfConnectorProfile#marketo}
  */
  readonly marketo?: ConnectorProfileConfigConnectorProfilePropertiesMarketoProperty;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#redshift TfConnectorProfile#redshift}
  */
  readonly redshift?: ConnectorProfileConfigConnectorProfilePropertiesRedshiftProperty;
  /**
  * salesforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#salesforce TfConnectorProfile#salesforce}
  */
  readonly salesforce?: ConnectorProfileConfigConnectorProfilePropertiesSalesforceProperty;
  /**
  * sapo_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#sapo_data TfConnectorProfile#sapo_data}
  */
  readonly sapoData?: ConnectorProfileConfigConnectorProfilePropertiesSapoDataProperty;
  /**
  * service_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#service_now TfConnectorProfile#service_now}
  */
  readonly serviceNow?: ConnectorProfileConfigConnectorProfilePropertiesServiceNowProperty;
  /**
  * singular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#singular TfConnectorProfile#singular}
  */
  readonly singular?: ConnectorProfileConfigConnectorProfilePropertiesSingularProperty;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#slack TfConnectorProfile#slack}
  */
  readonly slack?: ConnectorProfileConfigConnectorProfilePropertiesSlackProperty;
  /**
  * snowflake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#snowflake TfConnectorProfile#snowflake}
  */
  readonly snowflake?: ConnectorProfileConfigConnectorProfilePropertiesSnowflakeProperty;
  /**
  * trendmicro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#trendmicro TfConnectorProfile#trendmicro}
  */
  readonly trendmicro?: ConnectorProfileConfigConnectorProfilePropertiesTrendmicroProperty;
  /**
  * veeva block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#veeva TfConnectorProfile#veeva}
  */
  readonly veeva?: ConnectorProfileConfigConnectorProfilePropertiesVeevaProperty;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#zendesk TfConnectorProfile#zendesk}
  */
  readonly zendesk?: ConnectorProfileConfigConnectorProfilePropertiesZendeskProperty;
}
export class ConnectorProfilePropertiesPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfilePropertiesProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude?.internalValue;
    }
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._googleAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
    }
    if (this._honeycode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycode = this._honeycode?.internalValue;
    }
    if (this._inforNexus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._singular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._trendmicro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro?.internalValue;
    }
    if (this._veeva?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfilePropertiesProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amplitude.internalValue = undefined;
      this._customConnector.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._googleAnalytics.internalValue = undefined;
      this._honeycode.internalValue = undefined;
      this._inforNexus.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._singular.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._trendmicro.internalValue = undefined;
      this._veeva.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amplitude.internalValue = value.amplitude;
      this._customConnector.internalValue = value.customConnector;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._googleAnalytics.internalValue = value.googleAnalytics;
      this._honeycode.internalValue = value.honeycode;
      this._inforNexus.internalValue = value.inforNexus;
      this._marketo.internalValue = value.marketo;
      this._redshift.internalValue = value.redshift;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._serviceNow.internalValue = value.serviceNow;
      this._singular.internalValue = value.singular;
      this._slack.internalValue = value.slack;
      this._snowflake.internalValue = value.snowflake;
      this._trendmicro.internalValue = value.trendmicro;
      this._veeva.internalValue = value.veeva;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // amplitude - computed: false, optional: true, required: false
  private _amplitude = new ConnectorProfileConfigConnectorProfilePropertiesAmplitudePropertyOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }
  public putAmplitude(value: ConnectorProfileConfigConnectorProfilePropertiesAmplitudeProperty) {
    this._amplitude.internalValue = value;
  }
  public resetAmplitude() {
    this._amplitude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude.internalValue;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector = new ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorPropertyOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: ConnectorProfileConfigConnectorProfilePropertiesCustomConnectorProperty) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new ConnectorProfileConfigConnectorProfilePropertiesDatadogPropertyOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: ConnectorProfileConfigConnectorProfilePropertiesDatadogProperty) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new ConnectorProfileConfigConnectorProfilePropertiesDynatracePropertyOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: ConnectorProfileConfigConnectorProfilePropertiesDynatraceProperty) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // google_analytics - computed: false, optional: true, required: false
  private _googleAnalytics = new ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsPropertyOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }
  public putGoogleAnalytics(value: ConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsProperty) {
    this._googleAnalytics.internalValue = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics.internalValue;
  }

  // honeycode - computed: false, optional: true, required: false
  private _honeycode = new ConnectorProfileConfigConnectorProfilePropertiesHoneycodePropertyOutputReference(this, "honeycode");
  public get honeycode() {
    return this._honeycode;
  }
  public putHoneycode(value: ConnectorProfileConfigConnectorProfilePropertiesHoneycodeProperty) {
    this._honeycode.internalValue = value;
  }
  public resetHoneycode() {
    this._honeycode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycodeInput() {
    return this._honeycode.internalValue;
  }

  // infor_nexus - computed: false, optional: true, required: false
  private _inforNexus = new ConnectorProfileConfigConnectorProfilePropertiesInforNexusPropertyOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }
  public putInforNexus(value: ConnectorProfileConfigConnectorProfilePropertiesInforNexusProperty) {
    this._inforNexus.internalValue = value;
  }
  public resetInforNexus() {
    this._inforNexus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus.internalValue;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo = new ConnectorProfileConfigConnectorProfilePropertiesMarketoPropertyOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: ConnectorProfileConfigConnectorProfilePropertiesMarketoProperty) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new ConnectorProfileConfigConnectorProfilePropertiesRedshiftPropertyOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: ConnectorProfileConfigConnectorProfilePropertiesRedshiftProperty) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new ConnectorProfileConfigConnectorProfilePropertiesSalesforcePropertyOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: ConnectorProfileConfigConnectorProfilePropertiesSalesforceProperty) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData = new ConnectorProfileConfigConnectorProfilePropertiesSapoDataPropertyOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: ConnectorProfileConfigConnectorProfilePropertiesSapoDataProperty) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new ConnectorProfileConfigConnectorProfilePropertiesServiceNowPropertyOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: ConnectorProfileConfigConnectorProfilePropertiesServiceNowProperty) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // singular - computed: false, optional: true, required: false
  private _singular = new ConnectorProfileConfigConnectorProfilePropertiesSingularPropertyOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }
  public putSingular(value: ConnectorProfileConfigConnectorProfilePropertiesSingularProperty) {
    this._singular.internalValue = value;
  }
  public resetSingular() {
    this._singular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new ConnectorProfileConfigConnectorProfilePropertiesSlackPropertyOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: ConnectorProfileConfigConnectorProfilePropertiesSlackProperty) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new ConnectorProfileConfigConnectorProfilePropertiesSnowflakePropertyOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: ConnectorProfileConfigConnectorProfilePropertiesSnowflakeProperty) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // trendmicro - computed: false, optional: true, required: false
  private _trendmicro = new ConnectorProfileConfigConnectorProfilePropertiesTrendmicroPropertyOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }
  public putTrendmicro(value: ConnectorProfileConfigConnectorProfilePropertiesTrendmicroProperty) {
    this._trendmicro.internalValue = value;
  }
  public resetTrendmicro() {
    this._trendmicro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro.internalValue;
  }

  // veeva - computed: false, optional: true, required: false
  private _veeva = new ConnectorProfileConfigConnectorProfilePropertiesVeevaPropertyOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }
  public putVeeva(value: ConnectorProfileConfigConnectorProfilePropertiesVeevaProperty) {
    this._veeva.internalValue = value;
  }
  public resetVeeva() {
    this._veeva.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new ConnectorProfileConfigConnectorProfilePropertiesZendeskPropertyOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: ConnectorProfileConfigConnectorProfilePropertiesZendeskProperty) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface ConnectorProfileConfigProperty {
  /**
  * connector_profile_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#connector_profile_credentials TfConnectorProfile#connector_profile_credentials}
  */
  readonly connectorProfileCredentials: ConnectorProfileCredentialsProperty;
  /**
  * connector_profile_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/appflow_connector_profile#connector_profile_properties TfConnectorProfile#connector_profile_properties}
  */
  readonly connectorProfileProperties: ConnectorProfilePropertiesProperty;
}
export class ConnectorProfileConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorProfileConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorProfileCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileCredentials = this._connectorProfileCredentials?.internalValue;
    }
    if (this._connectorProfileProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileProperties = this._connectorProfileProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorProfileConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectorProfileCredentials.internalValue = undefined;
      this._connectorProfileProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectorProfileCredentials.internalValue = value.connectorProfileCredentials;
      this._connectorProfileProperties.internalValue = value.connectorProfileProperties;
    }
  }

  // connector_profile_credentials - computed: false, optional: false, required: true
  private _connectorProfileCredentials = new ConnectorProfileCredentialsPropertyOutputReference(this, "connector_profile_credentials");
  public get connectorProfileCredentials() {
    return this._connectorProfileCredentials;
  }
  public putConnectorProfileCredentials(value: ConnectorProfileCredentialsProperty) {
    this._connectorProfileCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileCredentialsInput() {
    return this._connectorProfileCredentials.internalValue;
  }

  // connector_profile_properties - computed: false, optional: false, required: true
  private _connectorProfileProperties = new ConnectorProfilePropertiesPropertyOutputReference(this, "connector_profile_properties");
  public get connectorProfileProperties() {
    return this._connectorProfileProperties;
  }
  public putConnectorProfileProperties(value: ConnectorProfilePropertiesProperty) {
    this._connectorProfileProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfilePropertiesInput() {
    return this._connectorProfileProperties.internalValue;
  }
}
}
