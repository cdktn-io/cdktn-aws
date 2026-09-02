// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfOauth2CredentialProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#credential_provider_vendor TfOauth2CredentialProvider#credential_provider_vendor}
  */
  readonly credentialProviderVendor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#name TfOauth2CredentialProvider#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#region TfOauth2CredentialProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#tags TfOauth2CredentialProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * oauth2_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#oauth2_provider_config TfOauth2CredentialProvider#oauth2_provider_config}
  */
  readonly oauth2ProviderConfig?: TfOauth2CredentialProvider.Oauth2ProviderConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider aws_bedrockagentcore_oauth2_credential_provider}
*/
export class TfOauth2CredentialProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_oauth2_credential_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfOauth2CredentialProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfOauth2CredentialProvider to import
  * @param importFromId The id of the existing TfOauth2CredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfOauth2CredentialProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_oauth2_credential_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider aws_bedrockagentcore_oauth2_credential_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfOauth2CredentialProviderConfig
  */
  public constructor(scope: Construct, id: string, config: TfOauth2CredentialProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_oauth2_credential_provider',
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
    this._credentialProviderVendor = config.credentialProviderVendor;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._oauth2ProviderConfig.internalValue = config.oauth2ProviderConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_secret_arn - computed: true, optional: false, required: false
  private _clientSecretArn = new TfOauth2CredentialProvider.ClientSecretArnPropertyList(this, "client_secret_arn", false);
  public get clientSecretArn() {
    return this._clientSecretArn;
  }

  // credential_provider_arn - computed: true, optional: false, required: false
  public get credentialProviderArn() {
    return this.getStringAttribute('credential_provider_arn');
  }

  // credential_provider_vendor - computed: false, optional: false, required: true
  private _credentialProviderVendor?: string; 
  public get credentialProviderVendor() {
    return this.getStringAttribute('credential_provider_vendor');
  }
  public set credentialProviderVendor(value: string) {
    this._credentialProviderVendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderVendorInput() {
    return this._credentialProviderVendor;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // oauth2_provider_config - computed: false, optional: true, required: false
  private _oauth2ProviderConfig = new TfOauth2CredentialProvider.Oauth2ProviderConfigPropertyList(this, "oauth2_provider_config", false);
  public get oauth2ProviderConfig() {
    return this._oauth2ProviderConfig;
  }
  public putOauth2ProviderConfig(value: TfOauth2CredentialProvider.Oauth2ProviderConfigProperty[] | cdktn.IResolvable) {
    this._oauth2ProviderConfig.internalValue = value;
  }
  public resetOauth2ProviderConfig() {
    this._oauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ProviderConfigInput() {
    return this._oauth2ProviderConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_provider_vendor: cdktn.stringToTerraform(this._credentialProviderVendor),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      oauth2_provider_config: cdktn.listMapper(tfOauth2CredentialProviderOauth2ProviderConfigPropertyToTerraform, true)(this._oauth2ProviderConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_provider_vendor: {
        value: cdktn.stringToHclTerraform(this._credentialProviderVendor),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      oauth2_provider_config: {
        value: cdktn.listMapperHcl(tfOauth2CredentialProviderOauth2ProviderConfigPropertyToHclTerraform, true)(this._oauth2ProviderConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfOauth2CredentialProvider.Oauth2ProviderConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfOauth2CredentialProviderClientSecretArnPropertyToTerraform(struct?: TfOauth2CredentialProvider.ClientSecretArnProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderClientSecretArnPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.ClientSecretArnProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    response_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseTypes),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    authorization_server_metadata: cdktn.listMapper(tfOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToTerraform, true)(struct!.authorizationServerMetadata),
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    discovery_url: {
      value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_server_metadata: {
      value: cdktn.listMapperHcl(tfOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToHclTerraform, true)(struct!.authorizationServerMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOauth2CredentialProviderCustomOauth2ProviderConfigPropertyToTerraform(struct?: TfOauth2CredentialProvider.CustomOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_credentials_wo_version: cdktn.numberToTerraform(struct!.clientCredentialsWoVersion),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_id_wo: cdktn.stringToTerraform(struct!.clientIdWo),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
    oauth_discovery: cdktn.listMapper(tfOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyToTerraform, true)(struct!.oauthDiscovery),
  }
}


export function tfOauth2CredentialProviderCustomOauth2ProviderConfigPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.CustomOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_credentials_wo_version: {
      value: cdktn.numberToHclTerraform(struct!.clientCredentialsWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientIdWo),
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
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_discovery: {
      value: cdktn.listMapperHcl(tfOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyToHclTerraform, true)(struct!.oauthDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderGithubOauth2ProviderConfigPropertyToTerraform(struct?: TfOauth2CredentialProvider.GithubOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_credentials_wo_version: cdktn.numberToTerraform(struct!.clientCredentialsWoVersion),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_id_wo: cdktn.stringToTerraform(struct!.clientIdWo),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
  }
}


export function tfOauth2CredentialProviderGithubOauth2ProviderConfigPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.GithubOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_credentials_wo_version: {
      value: cdktn.numberToHclTerraform(struct!.clientCredentialsWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientIdWo),
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
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderGoogleOauth2ProviderConfigPropertyToTerraform(struct?: TfOauth2CredentialProvider.GoogleOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_credentials_wo_version: cdktn.numberToTerraform(struct!.clientCredentialsWoVersion),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_id_wo: cdktn.stringToTerraform(struct!.clientIdWo),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
  }
}


export function tfOauth2CredentialProviderGoogleOauth2ProviderConfigPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.GoogleOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_credentials_wo_version: {
      value: cdktn.numberToHclTerraform(struct!.clientCredentialsWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientIdWo),
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
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderMicrosoftOauth2ProviderConfigPropertyToTerraform(struct?: TfOauth2CredentialProvider.MicrosoftOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_credentials_wo_version: cdktn.numberToTerraform(struct!.clientCredentialsWoVersion),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_id_wo: cdktn.stringToTerraform(struct!.clientIdWo),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
  }
}


export function tfOauth2CredentialProviderMicrosoftOauth2ProviderConfigPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.MicrosoftOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_credentials_wo_version: {
      value: cdktn.numberToHclTerraform(struct!.clientCredentialsWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientIdWo),
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
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderSalesforceOauth2ProviderConfigPropertyToTerraform(struct?: TfOauth2CredentialProvider.SalesforceOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_credentials_wo_version: cdktn.numberToTerraform(struct!.clientCredentialsWoVersion),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_id_wo: cdktn.stringToTerraform(struct!.clientIdWo),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
  }
}


export function tfOauth2CredentialProviderSalesforceOauth2ProviderConfigPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.SalesforceOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_credentials_wo_version: {
      value: cdktn.numberToHclTerraform(struct!.clientCredentialsWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientIdWo),
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
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfOauth2CredentialProviderSlackOauth2ProviderConfigPropertyToTerraform(struct?: TfOauth2CredentialProvider.SlackOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_credentials_wo_version: cdktn.numberToTerraform(struct!.clientCredentialsWoVersion),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_id_wo: cdktn.stringToTerraform(struct!.clientIdWo),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_wo: cdktn.stringToTerraform(struct!.clientSecretWo),
  }
}


export function tfOauth2CredentialProviderSlackOauth2ProviderConfigPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.SlackOauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_credentials_wo_version: {
      value: cdktn.numberToHclTerraform(struct!.clientCredentialsWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientIdWo),
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
    client_secret_wo: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfOauth2CredentialProviderOauth2ProviderConfigPropertyToTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_oauth2_provider_config: cdktn.listMapper(tfOauth2CredentialProviderCustomOauth2ProviderConfigPropertyToTerraform, true)(struct!.customOauth2ProviderConfig),
    github_oauth2_provider_config: cdktn.listMapper(tfOauth2CredentialProviderGithubOauth2ProviderConfigPropertyToTerraform, true)(struct!.githubOauth2ProviderConfig),
    google_oauth2_provider_config: cdktn.listMapper(tfOauth2CredentialProviderGoogleOauth2ProviderConfigPropertyToTerraform, true)(struct!.googleOauth2ProviderConfig),
    microsoft_oauth2_provider_config: cdktn.listMapper(tfOauth2CredentialProviderMicrosoftOauth2ProviderConfigPropertyToTerraform, true)(struct!.microsoftOauth2ProviderConfig),
    salesforce_oauth2_provider_config: cdktn.listMapper(tfOauth2CredentialProviderSalesforceOauth2ProviderConfigPropertyToTerraform, true)(struct!.salesforceOauth2ProviderConfig),
    slack_oauth2_provider_config: cdktn.listMapper(tfOauth2CredentialProviderSlackOauth2ProviderConfigPropertyToTerraform, true)(struct!.slackOauth2ProviderConfig),
  }
}


export function tfOauth2CredentialProviderOauth2ProviderConfigPropertyToHclTerraform(struct?: TfOauth2CredentialProvider.Oauth2ProviderConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_oauth2_provider_config: {
      value: cdktn.listMapperHcl(tfOauth2CredentialProviderCustomOauth2ProviderConfigPropertyToHclTerraform, true)(struct!.customOauth2ProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomOauth2ProviderConfigPropertyList",
    },
    github_oauth2_provider_config: {
      value: cdktn.listMapperHcl(tfOauth2CredentialProviderGithubOauth2ProviderConfigPropertyToHclTerraform, true)(struct!.githubOauth2ProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GithubOauth2ProviderConfigPropertyList",
    },
    google_oauth2_provider_config: {
      value: cdktn.listMapperHcl(tfOauth2CredentialProviderGoogleOauth2ProviderConfigPropertyToHclTerraform, true)(struct!.googleOauth2ProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleOauth2ProviderConfigPropertyList",
    },
    microsoft_oauth2_provider_config: {
      value: cdktn.listMapperHcl(tfOauth2CredentialProviderMicrosoftOauth2ProviderConfigPropertyToHclTerraform, true)(struct!.microsoftOauth2ProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MicrosoftOauth2ProviderConfigPropertyList",
    },
    salesforce_oauth2_provider_config: {
      value: cdktn.listMapperHcl(tfOauth2CredentialProviderSalesforceOauth2ProviderConfigPropertyToHclTerraform, true)(struct!.salesforceOauth2ProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SalesforceOauth2ProviderConfigPropertyList",
    },
    slack_oauth2_provider_config: {
      value: cdktn.listMapperHcl(tfOauth2CredentialProviderSlackOauth2ProviderConfigPropertyToHclTerraform, true)(struct!.slackOauth2ProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SlackOauth2ProviderConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfOauth2CredentialProvider {
export interface ClientSecretArnProperty {
}
export class ClientSecretArnPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClientSecretArnProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientSecretArnProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}

export class ClientSecretArnPropertyList extends cdktn.ComplexList {

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
  public get(index: number): ClientSecretArnPropertyOutputReference {
    return new ClientSecretArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#authorization_endpoint TfOauth2CredentialProvider#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#issuer TfOauth2CredentialProvider#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#response_types TfOauth2CredentialProvider#response_types}
  */
  readonly responseTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#token_endpoint TfOauth2CredentialProvider#token_endpoint}
  */
  readonly tokenEndpoint: string;
}
export class Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._responseTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTypes = this._responseTypes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = undefined;
      this._issuer = undefined;
      this._responseTypes = undefined;
      this._tokenEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._issuer = value.issuer;
      this._responseTypes = value.responseTypes;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // response_types - computed: false, optional: true, required: false
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('response_types'));
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  public resetResponseTypes() {
    this._responseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}

export class Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList extends cdktn.ComplexList {
  public internalValue? : Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty[] | cdktn.IResolvable

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
  public get(index: number): Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference {
    return new Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#discovery_url TfOauth2CredentialProvider#discovery_url}
  */
  readonly discoveryUrl?: string;
  /**
  * authorization_server_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#authorization_server_metadata TfOauth2CredentialProvider#authorization_server_metadata}
  */
  readonly authorizationServerMetadata?: Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty[] | cdktn.IResolvable;
}
export class Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._authorizationServerMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationServerMetadata = this._authorizationServerMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoveryUrl = undefined;
      this._authorizationServerMetadata.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoveryUrl = value.discoveryUrl;
      this._authorizationServerMetadata.internalValue = value.authorizationServerMetadata;
    }
  }

  // discovery_url - computed: false, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // authorization_server_metadata - computed: false, optional: true, required: false
  private _authorizationServerMetadata = new Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList(this, "authorization_server_metadata", false);
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }
  public putAuthorizationServerMetadata(value: Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty[] | cdktn.IResolvable) {
    this._authorizationServerMetadata.internalValue = value;
  }
  public resetAuthorizationServerMetadata() {
    this._authorizationServerMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServerMetadataInput() {
    return this._authorizationServerMetadata.internalValue;
  }
}

export class Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyList extends cdktn.ComplexList {
  public internalValue? : Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryProperty[] | cdktn.IResolvable

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
  public get(index: number): Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyOutputReference {
    return new Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomOauth2ProviderConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version TfOauth2CredentialProvider#client_credentials_wo_version}
  */
  readonly clientCredentialsWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id TfOauth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo TfOauth2CredentialProvider#client_id_wo}
  */
  readonly clientIdWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret TfOauth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo TfOauth2CredentialProvider#client_secret_wo}
  */
  readonly clientSecretWo?: string;
  /**
  * oauth_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#oauth_discovery TfOauth2CredentialProvider#oauth_discovery}
  */
  readonly oauthDiscovery?: Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryProperty[] | cdktn.IResolvable;
}
export class CustomOauth2ProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomOauth2ProviderConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentialsWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsWoVersion = this._clientCredentialsWoVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientIdWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdWo = this._clientIdWo;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    if (this._oauthDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthDiscovery = this._oauthDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomOauth2ProviderConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = undefined;
      this._clientId = undefined;
      this._clientIdWo = undefined;
      this._clientSecret = undefined;
      this._clientSecretWo = undefined;
      this._oauthDiscovery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = value.clientCredentialsWoVersion;
      this._clientId = value.clientId;
      this._clientIdWo = value.clientIdWo;
      this._clientSecret = value.clientSecret;
      this._clientSecretWo = value.clientSecretWo;
      this._oauthDiscovery.internalValue = value.oauthDiscovery;
    }
  }

  // client_credentials_wo_version - computed: false, optional: true, required: false
  private _clientCredentialsWoVersion?: number; 
  public get clientCredentialsWoVersion() {
    return this.getNumberAttribute('client_credentials_wo_version');
  }
  public set clientCredentialsWoVersion(value: number) {
    this._clientCredentialsWoVersion = value;
  }
  public resetClientCredentialsWoVersion() {
    this._clientCredentialsWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsWoVersionInput() {
    return this._clientCredentialsWoVersion;
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

  // client_id_wo - computed: false, optional: true, required: false
  private _clientIdWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientIdWo() {
    return this.getStringAttribute('client_id_wo');
  }
  public set clientIdWo(value: string) {
    this._clientIdWo = value;
  }
  public resetClientIdWo() {
    this._clientIdWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdWoInput() {
    return this._clientIdWo;
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

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // oauth_discovery - computed: false, optional: true, required: false
  private _oauthDiscovery = new Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryPropertyList(this, "oauth_discovery", false);
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }
  public putOauthDiscovery(value: Oauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryProperty[] | cdktn.IResolvable) {
    this._oauthDiscovery.internalValue = value;
  }
  public resetOauthDiscovery() {
    this._oauthDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthDiscoveryInput() {
    return this._oauthDiscovery.internalValue;
  }
}

export class CustomOauth2ProviderConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : CustomOauth2ProviderConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): CustomOauth2ProviderConfigPropertyOutputReference {
    return new CustomOauth2ProviderConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty {
}
export class Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('response_types'));
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference {
    return new Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryProperty {
}
export class Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_server_metadata - computed: true, optional: false, required: false
  private _authorizationServerMetadata = new Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList(this, "authorization_server_metadata", false);
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}

export class Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryPropertyOutputReference {
    return new Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GithubOauth2ProviderConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version TfOauth2CredentialProvider#client_credentials_wo_version}
  */
  readonly clientCredentialsWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id TfOauth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo TfOauth2CredentialProvider#client_id_wo}
  */
  readonly clientIdWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret TfOauth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo TfOauth2CredentialProvider#client_secret_wo}
  */
  readonly clientSecretWo?: string;
}
export class GithubOauth2ProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GithubOauth2ProviderConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentialsWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsWoVersion = this._clientCredentialsWoVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientIdWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdWo = this._clientIdWo;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GithubOauth2ProviderConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = undefined;
      this._clientId = undefined;
      this._clientIdWo = undefined;
      this._clientSecret = undefined;
      this._clientSecretWo = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = value.clientCredentialsWoVersion;
      this._clientId = value.clientId;
      this._clientIdWo = value.clientIdWo;
      this._clientSecret = value.clientSecret;
      this._clientSecretWo = value.clientSecretWo;
    }
  }

  // client_credentials_wo_version - computed: false, optional: true, required: false
  private _clientCredentialsWoVersion?: number; 
  public get clientCredentialsWoVersion() {
    return this.getNumberAttribute('client_credentials_wo_version');
  }
  public set clientCredentialsWoVersion(value: number) {
    this._clientCredentialsWoVersion = value;
  }
  public resetClientCredentialsWoVersion() {
    this._clientCredentialsWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsWoVersionInput() {
    return this._clientCredentialsWoVersion;
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

  // client_id_wo - computed: false, optional: true, required: false
  private _clientIdWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientIdWo() {
    return this.getStringAttribute('client_id_wo');
  }
  public set clientIdWo(value: string) {
    this._clientIdWo = value;
  }
  public resetClientIdWo() {
    this._clientIdWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdWoInput() {
    return this._clientIdWo;
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

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // oauth_discovery - computed: true, optional: false, required: false
  private _oauthDiscovery = new Oauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryPropertyList(this, "oauth_discovery", false);
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }
}

export class GithubOauth2ProviderConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : GithubOauth2ProviderConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): GithubOauth2ProviderConfigPropertyOutputReference {
    return new GithubOauth2ProviderConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty {
}
export class Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('response_types'));
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference {
    return new Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryProperty {
}
export class Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_server_metadata - computed: true, optional: false, required: false
  private _authorizationServerMetadata = new Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList(this, "authorization_server_metadata", false);
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}

export class Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryPropertyOutputReference {
    return new Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleOauth2ProviderConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version TfOauth2CredentialProvider#client_credentials_wo_version}
  */
  readonly clientCredentialsWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id TfOauth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo TfOauth2CredentialProvider#client_id_wo}
  */
  readonly clientIdWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret TfOauth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo TfOauth2CredentialProvider#client_secret_wo}
  */
  readonly clientSecretWo?: string;
}
export class GoogleOauth2ProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GoogleOauth2ProviderConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentialsWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsWoVersion = this._clientCredentialsWoVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientIdWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdWo = this._clientIdWo;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOauth2ProviderConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = undefined;
      this._clientId = undefined;
      this._clientIdWo = undefined;
      this._clientSecret = undefined;
      this._clientSecretWo = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = value.clientCredentialsWoVersion;
      this._clientId = value.clientId;
      this._clientIdWo = value.clientIdWo;
      this._clientSecret = value.clientSecret;
      this._clientSecretWo = value.clientSecretWo;
    }
  }

  // client_credentials_wo_version - computed: false, optional: true, required: false
  private _clientCredentialsWoVersion?: number; 
  public get clientCredentialsWoVersion() {
    return this.getNumberAttribute('client_credentials_wo_version');
  }
  public set clientCredentialsWoVersion(value: number) {
    this._clientCredentialsWoVersion = value;
  }
  public resetClientCredentialsWoVersion() {
    this._clientCredentialsWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsWoVersionInput() {
    return this._clientCredentialsWoVersion;
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

  // client_id_wo - computed: false, optional: true, required: false
  private _clientIdWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientIdWo() {
    return this.getStringAttribute('client_id_wo');
  }
  public set clientIdWo(value: string) {
    this._clientIdWo = value;
  }
  public resetClientIdWo() {
    this._clientIdWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdWoInput() {
    return this._clientIdWo;
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

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // oauth_discovery - computed: true, optional: false, required: false
  private _oauthDiscovery = new Oauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryPropertyList(this, "oauth_discovery", false);
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }
}

export class GoogleOauth2ProviderConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : GoogleOauth2ProviderConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): GoogleOauth2ProviderConfigPropertyOutputReference {
    return new GoogleOauth2ProviderConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty {
}
export class Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('response_types'));
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference {
    return new Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryProperty {
}
export class Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_server_metadata - computed: true, optional: false, required: false
  private _authorizationServerMetadata = new Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList(this, "authorization_server_metadata", false);
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}

export class Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryPropertyOutputReference {
    return new Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MicrosoftOauth2ProviderConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version TfOauth2CredentialProvider#client_credentials_wo_version}
  */
  readonly clientCredentialsWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id TfOauth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo TfOauth2CredentialProvider#client_id_wo}
  */
  readonly clientIdWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret TfOauth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo TfOauth2CredentialProvider#client_secret_wo}
  */
  readonly clientSecretWo?: string;
}
export class MicrosoftOauth2ProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MicrosoftOauth2ProviderConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentialsWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsWoVersion = this._clientCredentialsWoVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientIdWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdWo = this._clientIdWo;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MicrosoftOauth2ProviderConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = undefined;
      this._clientId = undefined;
      this._clientIdWo = undefined;
      this._clientSecret = undefined;
      this._clientSecretWo = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = value.clientCredentialsWoVersion;
      this._clientId = value.clientId;
      this._clientIdWo = value.clientIdWo;
      this._clientSecret = value.clientSecret;
      this._clientSecretWo = value.clientSecretWo;
    }
  }

  // client_credentials_wo_version - computed: false, optional: true, required: false
  private _clientCredentialsWoVersion?: number; 
  public get clientCredentialsWoVersion() {
    return this.getNumberAttribute('client_credentials_wo_version');
  }
  public set clientCredentialsWoVersion(value: number) {
    this._clientCredentialsWoVersion = value;
  }
  public resetClientCredentialsWoVersion() {
    this._clientCredentialsWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsWoVersionInput() {
    return this._clientCredentialsWoVersion;
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

  // client_id_wo - computed: false, optional: true, required: false
  private _clientIdWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientIdWo() {
    return this.getStringAttribute('client_id_wo');
  }
  public set clientIdWo(value: string) {
    this._clientIdWo = value;
  }
  public resetClientIdWo() {
    this._clientIdWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdWoInput() {
    return this._clientIdWo;
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

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // oauth_discovery - computed: true, optional: false, required: false
  private _oauthDiscovery = new Oauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryPropertyList(this, "oauth_discovery", false);
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }
}

export class MicrosoftOauth2ProviderConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : MicrosoftOauth2ProviderConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): MicrosoftOauth2ProviderConfigPropertyOutputReference {
    return new MicrosoftOauth2ProviderConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty {
}
export class Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('response_types'));
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference {
    return new Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryProperty {
}
export class Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_server_metadata - computed: true, optional: false, required: false
  private _authorizationServerMetadata = new Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList(this, "authorization_server_metadata", false);
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}

export class Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryPropertyOutputReference {
    return new Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SalesforceOauth2ProviderConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version TfOauth2CredentialProvider#client_credentials_wo_version}
  */
  readonly clientCredentialsWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id TfOauth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo TfOauth2CredentialProvider#client_id_wo}
  */
  readonly clientIdWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret TfOauth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo TfOauth2CredentialProvider#client_secret_wo}
  */
  readonly clientSecretWo?: string;
}
export class SalesforceOauth2ProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SalesforceOauth2ProviderConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentialsWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsWoVersion = this._clientCredentialsWoVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientIdWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdWo = this._clientIdWo;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SalesforceOauth2ProviderConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = undefined;
      this._clientId = undefined;
      this._clientIdWo = undefined;
      this._clientSecret = undefined;
      this._clientSecretWo = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = value.clientCredentialsWoVersion;
      this._clientId = value.clientId;
      this._clientIdWo = value.clientIdWo;
      this._clientSecret = value.clientSecret;
      this._clientSecretWo = value.clientSecretWo;
    }
  }

  // client_credentials_wo_version - computed: false, optional: true, required: false
  private _clientCredentialsWoVersion?: number; 
  public get clientCredentialsWoVersion() {
    return this.getNumberAttribute('client_credentials_wo_version');
  }
  public set clientCredentialsWoVersion(value: number) {
    this._clientCredentialsWoVersion = value;
  }
  public resetClientCredentialsWoVersion() {
    this._clientCredentialsWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsWoVersionInput() {
    return this._clientCredentialsWoVersion;
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

  // client_id_wo - computed: false, optional: true, required: false
  private _clientIdWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientIdWo() {
    return this.getStringAttribute('client_id_wo');
  }
  public set clientIdWo(value: string) {
    this._clientIdWo = value;
  }
  public resetClientIdWo() {
    this._clientIdWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdWoInput() {
    return this._clientIdWo;
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

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // oauth_discovery - computed: true, optional: false, required: false
  private _oauthDiscovery = new Oauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryPropertyList(this, "oauth_discovery", false);
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }
}

export class SalesforceOauth2ProviderConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SalesforceOauth2ProviderConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SalesforceOauth2ProviderConfigPropertyOutputReference {
    return new SalesforceOauth2ProviderConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty {
}
export class Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('response_types'));
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference {
    return new Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryProperty {
}
export class Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_server_metadata - computed: true, optional: false, required: false
  private _authorizationServerMetadata = new Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataPropertyList(this, "authorization_server_metadata", false);
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}

export class Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryPropertyList extends cdktn.ComplexList {

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
  public get(index: number): Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryPropertyOutputReference {
    return new Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlackOauth2ProviderConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version TfOauth2CredentialProvider#client_credentials_wo_version}
  */
  readonly clientCredentialsWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id TfOauth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo TfOauth2CredentialProvider#client_id_wo}
  */
  readonly clientIdWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret TfOauth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo TfOauth2CredentialProvider#client_secret_wo}
  */
  readonly clientSecretWo?: string;
}
export class SlackOauth2ProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SlackOauth2ProviderConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentialsWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsWoVersion = this._clientCredentialsWoVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientIdWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdWo = this._clientIdWo;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretWo = this._clientSecretWo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlackOauth2ProviderConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = undefined;
      this._clientId = undefined;
      this._clientIdWo = undefined;
      this._clientSecret = undefined;
      this._clientSecretWo = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCredentialsWoVersion = value.clientCredentialsWoVersion;
      this._clientId = value.clientId;
      this._clientIdWo = value.clientIdWo;
      this._clientSecret = value.clientSecret;
      this._clientSecretWo = value.clientSecretWo;
    }
  }

  // client_credentials_wo_version - computed: false, optional: true, required: false
  private _clientCredentialsWoVersion?: number; 
  public get clientCredentialsWoVersion() {
    return this.getNumberAttribute('client_credentials_wo_version');
  }
  public set clientCredentialsWoVersion(value: number) {
    this._clientCredentialsWoVersion = value;
  }
  public resetClientCredentialsWoVersion() {
    this._clientCredentialsWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsWoVersionInput() {
    return this._clientCredentialsWoVersion;
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

  // client_id_wo - computed: false, optional: true, required: false
  private _clientIdWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientIdWo() {
    return this.getStringAttribute('client_id_wo');
  }
  public set clientIdWo(value: string) {
    this._clientIdWo = value;
  }
  public resetClientIdWo() {
    this._clientIdWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdWoInput() {
    return this._clientIdWo;
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

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // oauth_discovery - computed: true, optional: false, required: false
  private _oauthDiscovery = new Oauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryPropertyList(this, "oauth_discovery", false);
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }
}

export class SlackOauth2ProviderConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : SlackOauth2ProviderConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): SlackOauth2ProviderConfigPropertyOutputReference {
    return new SlackOauth2ProviderConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Oauth2ProviderConfigProperty {
  /**
  * custom_oauth2_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#custom_oauth2_provider_config TfOauth2CredentialProvider#custom_oauth2_provider_config}
  */
  readonly customOauth2ProviderConfig?: CustomOauth2ProviderConfigProperty[] | cdktn.IResolvable;
  /**
  * github_oauth2_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#github_oauth2_provider_config TfOauth2CredentialProvider#github_oauth2_provider_config}
  */
  readonly githubOauth2ProviderConfig?: GithubOauth2ProviderConfigProperty[] | cdktn.IResolvable;
  /**
  * google_oauth2_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#google_oauth2_provider_config TfOauth2CredentialProvider#google_oauth2_provider_config}
  */
  readonly googleOauth2ProviderConfig?: GoogleOauth2ProviderConfigProperty[] | cdktn.IResolvable;
  /**
  * microsoft_oauth2_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#microsoft_oauth2_provider_config TfOauth2CredentialProvider#microsoft_oauth2_provider_config}
  */
  readonly microsoftOauth2ProviderConfig?: MicrosoftOauth2ProviderConfigProperty[] | cdktn.IResolvable;
  /**
  * salesforce_oauth2_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#salesforce_oauth2_provider_config TfOauth2CredentialProvider#salesforce_oauth2_provider_config}
  */
  readonly salesforceOauth2ProviderConfig?: SalesforceOauth2ProviderConfigProperty[] | cdktn.IResolvable;
  /**
  * slack_oauth2_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_oauth2_credential_provider#slack_oauth2_provider_config TfOauth2CredentialProvider#slack_oauth2_provider_config}
  */
  readonly slackOauth2ProviderConfig?: SlackOauth2ProviderConfigProperty[] | cdktn.IResolvable;
}
export class Oauth2ProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Oauth2ProviderConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOauth2ProviderConfig = this._customOauth2ProviderConfig?.internalValue;
    }
    if (this._githubOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOauth2ProviderConfig = this._githubOauth2ProviderConfig?.internalValue;
    }
    if (this._googleOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleOauth2ProviderConfig = this._googleOauth2ProviderConfig?.internalValue;
    }
    if (this._microsoftOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftOauth2ProviderConfig = this._microsoftOauth2ProviderConfig?.internalValue;
    }
    if (this._salesforceOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceOauth2ProviderConfig = this._salesforceOauth2ProviderConfig?.internalValue;
    }
    if (this._slackOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackOauth2ProviderConfig = this._slackOauth2ProviderConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Oauth2ProviderConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customOauth2ProviderConfig.internalValue = undefined;
      this._githubOauth2ProviderConfig.internalValue = undefined;
      this._googleOauth2ProviderConfig.internalValue = undefined;
      this._microsoftOauth2ProviderConfig.internalValue = undefined;
      this._salesforceOauth2ProviderConfig.internalValue = undefined;
      this._slackOauth2ProviderConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customOauth2ProviderConfig.internalValue = value.customOauth2ProviderConfig;
      this._githubOauth2ProviderConfig.internalValue = value.githubOauth2ProviderConfig;
      this._googleOauth2ProviderConfig.internalValue = value.googleOauth2ProviderConfig;
      this._microsoftOauth2ProviderConfig.internalValue = value.microsoftOauth2ProviderConfig;
      this._salesforceOauth2ProviderConfig.internalValue = value.salesforceOauth2ProviderConfig;
      this._slackOauth2ProviderConfig.internalValue = value.slackOauth2ProviderConfig;
    }
  }

  // custom_oauth2_provider_config - computed: false, optional: true, required: false
  private _customOauth2ProviderConfig = new CustomOauth2ProviderConfigPropertyList(this, "custom_oauth2_provider_config", false);
  public get customOauth2ProviderConfig() {
    return this._customOauth2ProviderConfig;
  }
  public putCustomOauth2ProviderConfig(value: CustomOauth2ProviderConfigProperty[] | cdktn.IResolvable) {
    this._customOauth2ProviderConfig.internalValue = value;
  }
  public resetCustomOauth2ProviderConfig() {
    this._customOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOauth2ProviderConfigInput() {
    return this._customOauth2ProviderConfig.internalValue;
  }

  // github_oauth2_provider_config - computed: false, optional: true, required: false
  private _githubOauth2ProviderConfig = new GithubOauth2ProviderConfigPropertyList(this, "github_oauth2_provider_config", false);
  public get githubOauth2ProviderConfig() {
    return this._githubOauth2ProviderConfig;
  }
  public putGithubOauth2ProviderConfig(value: GithubOauth2ProviderConfigProperty[] | cdktn.IResolvable) {
    this._githubOauth2ProviderConfig.internalValue = value;
  }
  public resetGithubOauth2ProviderConfig() {
    this._githubOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOauth2ProviderConfigInput() {
    return this._githubOauth2ProviderConfig.internalValue;
  }

  // google_oauth2_provider_config - computed: false, optional: true, required: false
  private _googleOauth2ProviderConfig = new GoogleOauth2ProviderConfigPropertyList(this, "google_oauth2_provider_config", false);
  public get googleOauth2ProviderConfig() {
    return this._googleOauth2ProviderConfig;
  }
  public putGoogleOauth2ProviderConfig(value: GoogleOauth2ProviderConfigProperty[] | cdktn.IResolvable) {
    this._googleOauth2ProviderConfig.internalValue = value;
  }
  public resetGoogleOauth2ProviderConfig() {
    this._googleOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleOauth2ProviderConfigInput() {
    return this._googleOauth2ProviderConfig.internalValue;
  }

  // microsoft_oauth2_provider_config - computed: false, optional: true, required: false
  private _microsoftOauth2ProviderConfig = new MicrosoftOauth2ProviderConfigPropertyList(this, "microsoft_oauth2_provider_config", false);
  public get microsoftOauth2ProviderConfig() {
    return this._microsoftOauth2ProviderConfig;
  }
  public putMicrosoftOauth2ProviderConfig(value: MicrosoftOauth2ProviderConfigProperty[] | cdktn.IResolvable) {
    this._microsoftOauth2ProviderConfig.internalValue = value;
  }
  public resetMicrosoftOauth2ProviderConfig() {
    this._microsoftOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftOauth2ProviderConfigInput() {
    return this._microsoftOauth2ProviderConfig.internalValue;
  }

  // salesforce_oauth2_provider_config - computed: false, optional: true, required: false
  private _salesforceOauth2ProviderConfig = new SalesforceOauth2ProviderConfigPropertyList(this, "salesforce_oauth2_provider_config", false);
  public get salesforceOauth2ProviderConfig() {
    return this._salesforceOauth2ProviderConfig;
  }
  public putSalesforceOauth2ProviderConfig(value: SalesforceOauth2ProviderConfigProperty[] | cdktn.IResolvable) {
    this._salesforceOauth2ProviderConfig.internalValue = value;
  }
  public resetSalesforceOauth2ProviderConfig() {
    this._salesforceOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceOauth2ProviderConfigInput() {
    return this._salesforceOauth2ProviderConfig.internalValue;
  }

  // slack_oauth2_provider_config - computed: false, optional: true, required: false
  private _slackOauth2ProviderConfig = new SlackOauth2ProviderConfigPropertyList(this, "slack_oauth2_provider_config", false);
  public get slackOauth2ProviderConfig() {
    return this._slackOauth2ProviderConfig;
  }
  public putSlackOauth2ProviderConfig(value: SlackOauth2ProviderConfigProperty[] | cdktn.IResolvable) {
    this._slackOauth2ProviderConfig.internalValue = value;
  }
  public resetSlackOauth2ProviderConfig() {
    this._slackOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackOauth2ProviderConfigInput() {
    return this._slackOauth2ProviderConfig.internalValue;
  }
}

export class Oauth2ProviderConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : Oauth2ProviderConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): Oauth2ProviderConfigPropertyOutputReference {
    return new Oauth2ProviderConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
