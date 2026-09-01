// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBedrockagentcoreGatewayTargetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#gateway_identifier AwsBedrockagentcoreGatewayTarget#gateway_identifier}
  */
  readonly gatewayIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#region AwsBedrockagentcoreGatewayTarget#region}
  */
  readonly region?: string;
  /**
  * credential_provider_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#credential_provider_configuration AwsBedrockagentcoreGatewayTarget#credential_provider_configuration}
  */
  readonly credentialProviderConfiguration?: AwsBedrockagentcoreGatewayTarget.CredentialProviderConfigurationProperty[] | cdktn.IResolvable;
  /**
  * metadata_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#metadata_configuration AwsBedrockagentcoreGatewayTarget#metadata_configuration}
  */
  readonly metadataConfiguration?: AwsBedrockagentcoreGatewayTarget.MetadataConfigurationProperty[] | cdktn.IResolvable;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#private_endpoint AwsBedrockagentcoreGatewayTarget#private_endpoint}
  */
  readonly privateEndpoint?: AwsBedrockagentcoreGatewayTarget.PrivateEndpointProperty[] | cdktn.IResolvable;
  /**
  * target_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#target_configuration AwsBedrockagentcoreGatewayTarget#target_configuration}
  */
  readonly targetConfiguration?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#timeouts AwsBedrockagentcoreGatewayTarget#timeouts}
  */
  readonly timeouts?: AwsBedrockagentcoreGatewayTarget.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target aws_bedrockagentcore_gateway_target}
*/
export class AwsBedrockagentcoreGatewayTarget extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_gateway_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBedrockagentcoreGatewayTarget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBedrockagentcoreGatewayTarget to import
  * @param importFromId The id of the existing AwsBedrockagentcoreGatewayTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBedrockagentcoreGatewayTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_gateway_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target aws_bedrockagentcore_gateway_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBedrockagentcoreGatewayTargetConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBedrockagentcoreGatewayTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_gateway_target',
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
    this._gatewayIdentifier = config.gatewayIdentifier;
    this._name = config.name;
    this._region = config.region;
    this._credentialProviderConfiguration.internalValue = config.credentialProviderConfiguration;
    this._metadataConfiguration.internalValue = config.metadataConfiguration;
    this._privateEndpoint.internalValue = config.privateEndpoint;
    this._targetConfiguration.internalValue = config.targetConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // gateway_identifier - computed: false, optional: false, required: true
  private _gatewayIdentifier?: string; 
  public get gatewayIdentifier() {
    return this.getStringAttribute('gateway_identifier');
  }
  public set gatewayIdentifier(value: string) {
    this._gatewayIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdentifierInput() {
    return this._gatewayIdentifier;
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

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // credential_provider_configuration - computed: false, optional: true, required: false
  private _credentialProviderConfiguration = new AwsBedrockagentcoreGatewayTarget.CredentialProviderConfigurationPropertyList(this, "credential_provider_configuration", false);
  public get credentialProviderConfiguration() {
    return this._credentialProviderConfiguration;
  }
  public putCredentialProviderConfiguration(value: AwsBedrockagentcoreGatewayTarget.CredentialProviderConfigurationProperty[] | cdktn.IResolvable) {
    this._credentialProviderConfiguration.internalValue = value;
  }
  public resetCredentialProviderConfiguration() {
    this._credentialProviderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderConfigurationInput() {
    return this._credentialProviderConfiguration.internalValue;
  }

  // metadata_configuration - computed: false, optional: true, required: false
  private _metadataConfiguration = new AwsBedrockagentcoreGatewayTarget.MetadataConfigurationPropertyList(this, "metadata_configuration", false);
  public get metadataConfiguration() {
    return this._metadataConfiguration;
  }
  public putMetadataConfiguration(value: AwsBedrockagentcoreGatewayTarget.MetadataConfigurationProperty[] | cdktn.IResolvable) {
    this._metadataConfiguration.internalValue = value;
  }
  public resetMetadataConfiguration() {
    this._metadataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConfigurationInput() {
    return this._metadataConfiguration.internalValue;
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new AwsBedrockagentcoreGatewayTarget.PrivateEndpointPropertyList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: AwsBedrockagentcoreGatewayTarget.PrivateEndpointProperty[] | cdktn.IResolvable) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }

  // target_configuration - computed: false, optional: true, required: false
  private _targetConfiguration = new AwsBedrockagentcoreGatewayTarget.TargetConfigurationPropertyList(this, "target_configuration", false);
  public get targetConfiguration() {
    return this._targetConfiguration;
  }
  public putTargetConfiguration(value: AwsBedrockagentcoreGatewayTarget.TargetConfigurationProperty[] | cdktn.IResolvable) {
    this._targetConfiguration.internalValue = value;
  }
  public resetTargetConfiguration() {
    this._targetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConfigurationInput() {
    return this._targetConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBedrockagentcoreGatewayTarget.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBedrockagentcoreGatewayTarget.TimeoutsProperty) {
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
      description: cdktn.stringToTerraform(this._description),
      gateway_identifier: cdktn.stringToTerraform(this._gatewayIdentifier),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      credential_provider_configuration: cdktn.listMapper(awsBedrockagentcoreGatewayTargetCredentialProviderConfigurationPropertyToTerraform, true)(this._credentialProviderConfiguration.internalValue),
      metadata_configuration: cdktn.listMapper(awsBedrockagentcoreGatewayTargetMetadataConfigurationPropertyToTerraform, true)(this._metadataConfiguration.internalValue),
      private_endpoint: cdktn.listMapper(awsBedrockagentcoreGatewayTargetPrivateEndpointPropertyToTerraform, true)(this._privateEndpoint.internalValue),
      target_configuration: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationPropertyToTerraform, true)(this._targetConfiguration.internalValue),
      timeouts: awsBedrockagentcoreGatewayTargetTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      gateway_identifier: {
        value: cdktn.stringToHclTerraform(this._gatewayIdentifier),
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
      credential_provider_configuration: {
        value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetCredentialProviderConfigurationPropertyToHclTerraform, true)(this._credentialProviderConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockagentcoreGatewayTarget.CredentialProviderConfigurationPropertyList",
      },
      metadata_configuration: {
        value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetMetadataConfigurationPropertyToHclTerraform, true)(this._metadataConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockagentcoreGatewayTarget.MetadataConfigurationPropertyList",
      },
      private_endpoint: {
        value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetPrivateEndpointPropertyToHclTerraform, true)(this._privateEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockagentcoreGatewayTarget.PrivateEndpointPropertyList",
      },
      target_configuration: {
        value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationPropertyToHclTerraform, true)(this._targetConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBedrockagentcoreGatewayTarget.TargetConfigurationPropertyList",
      },
      timeouts: {
        value: awsBedrockagentcoreGatewayTargetTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBedrockagentcoreGatewayTarget.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBedrockagentcoreGatewayTargetApiKeyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ApiKeyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credential_location: cdktn.stringToTerraform(struct!.credentialLocation),
    credential_parameter_name: cdktn.stringToTerraform(struct!.credentialParameterName),
    credential_prefix: cdktn.stringToTerraform(struct!.credentialPrefix),
    provider_arn: cdktn.stringToTerraform(struct!.providerArn),
  }
}


export function awsBedrockagentcoreGatewayTargetApiKeyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ApiKeyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credential_location: {
      value: cdktn.stringToHclTerraform(struct!.credentialLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.credentialParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_prefix: {
      value: cdktn.stringToHclTerraform(struct!.credentialPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.providerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetCallerIamCredentialsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.CallerIamCredentialsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function awsBedrockagentcoreGatewayTargetCallerIamCredentialsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.CallerIamCredentialsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetGatewayIamRolePropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.GatewayIamRoleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function awsBedrockagentcoreGatewayTargetGatewayIamRolePropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.GatewayIamRoleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetJwtPassthroughPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.JwtPassthroughProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function awsBedrockagentcoreGatewayTargetJwtPassthroughPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.JwtPassthroughProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function awsBedrockagentcoreGatewayTargetOauthPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.OauthProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customParameters),
    default_return_url: cdktn.stringToTerraform(struct!.defaultReturnUrl),
    grant_type: cdktn.stringToTerraform(struct!.grantType),
    provider_arn: cdktn.stringToTerraform(struct!.providerArn),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function awsBedrockagentcoreGatewayTargetOauthPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.OauthProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_return_url: {
      value: cdktn.stringToHclTerraform(struct!.defaultReturnUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_type: {
      value: cdktn.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.providerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetCredentialProviderConfigurationPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.CredentialProviderConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.listMapper(awsBedrockagentcoreGatewayTargetApiKeyPropertyToTerraform, true)(struct!.apiKey),
    caller_iam_credentials: cdktn.listMapper(awsBedrockagentcoreGatewayTargetCallerIamCredentialsPropertyToTerraform, true)(struct!.callerIamCredentials),
    gateway_iam_role: cdktn.listMapper(awsBedrockagentcoreGatewayTargetGatewayIamRolePropertyToTerraform, true)(struct!.gatewayIamRole),
    jwt_passthrough: cdktn.listMapper(awsBedrockagentcoreGatewayTargetJwtPassthroughPropertyToTerraform, true)(struct!.jwtPassthrough),
    oauth: cdktn.listMapper(awsBedrockagentcoreGatewayTargetOauthPropertyToTerraform, true)(struct!.oauth),
  }
}


export function awsBedrockagentcoreGatewayTargetCredentialProviderConfigurationPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.CredentialProviderConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetApiKeyPropertyToHclTerraform, true)(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApiKeyPropertyList",
    },
    caller_iam_credentials: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetCallerIamCredentialsPropertyToHclTerraform, true)(struct!.callerIamCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "CallerIamCredentialsPropertyList",
    },
    gateway_iam_role: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetGatewayIamRolePropertyToHclTerraform, true)(struct!.gatewayIamRole),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayIamRolePropertyList",
    },
    jwt_passthrough: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetJwtPassthroughPropertyToHclTerraform, true)(struct!.jwtPassthrough),
      isBlock: true,
      type: "list",
      storageClassType: "JwtPassthroughPropertyList",
    },
    oauth: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetOauthPropertyToHclTerraform, true)(struct!.oauth),
      isBlock: true,
      type: "list",
      storageClassType: "OauthPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetMetadataConfigurationPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.MetadataConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedQueryParameters),
    allowed_request_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedRequestHeaders),
    allowed_response_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedResponseHeaders),
  }
}


export function awsBedrockagentcoreGatewayTargetMetadataConfigurationPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.MetadataConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedQueryParameters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_request_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedRequestHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_response_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedResponseHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetManagedVpcResourcePropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ManagedVpcResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
    routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
  }
}


export function awsBedrockagentcoreGatewayTargetManagedVpcResourcePropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ManagedVpcResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_domain: {
      value: cdktn.stringToHclTerraform(struct!.routingDomain),
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
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_identifier: {
      value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetSelfManagedLatticeResourcePropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.SelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function awsBedrockagentcoreGatewayTargetSelfManagedLatticeResourcePropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.SelfManagedLatticeResourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetPrivateEndpointPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.PrivateEndpointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(awsBedrockagentcoreGatewayTargetManagedVpcResourcePropertyToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(awsBedrockagentcoreGatewayTargetSelfManagedLatticeResourcePropertyToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function awsBedrockagentcoreGatewayTargetPrivateEndpointPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.PrivateEndpointProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetManagedVpcResourcePropertyToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedVpcResourcePropertyList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetSelfManagedLatticeResourcePropertyToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "SelfManagedLatticeResourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetAgentcoreRuntimePropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.AgentcoreRuntimeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    qualifier: cdktn.stringToTerraform(struct!.qualifier),
  }
}


export function awsBedrockagentcoreGatewayTargetAgentcoreRuntimePropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.AgentcoreRuntimeProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktn.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetHttpPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.HttpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentcore_runtime: cdktn.listMapper(awsBedrockagentcoreGatewayTargetAgentcoreRuntimePropertyToTerraform, true)(struct!.agentcoreRuntime),
  }
}


export function awsBedrockagentcoreGatewayTargetHttpPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.HttpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentcore_runtime: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetAgentcoreRuntimePropertyToHclTerraform, true)(struct!.agentcoreRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "AgentcoreRuntimePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetToolFilterPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ToolFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_path: cdktn.stringToTerraform(struct!.filterPath),
    methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.methods),
  }
}


export function awsBedrockagentcoreGatewayTargetToolFilterPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ToolFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_path: {
      value: cdktn.stringToHclTerraform(struct!.filterPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetToolOverridePropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ToolOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    method: cdktn.stringToTerraform(struct!.method),
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsBedrockagentcoreGatewayTargetToolOverridePropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ToolOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetApiGatewayToolConfigurationPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ApiGatewayToolConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tool_filter: cdktn.listMapper(awsBedrockagentcoreGatewayTargetToolFilterPropertyToTerraform, true)(struct!.toolFilter),
    tool_override: cdktn.listMapper(awsBedrockagentcoreGatewayTargetToolOverridePropertyToTerraform, true)(struct!.toolOverride),
  }
}


export function awsBedrockagentcoreGatewayTargetApiGatewayToolConfigurationPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ApiGatewayToolConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tool_filter: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetToolFilterPropertyToHclTerraform, true)(struct!.toolFilter),
      isBlock: true,
      type: "set",
      storageClassType: "ToolFilterPropertyList",
    },
    tool_override: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetToolOverridePropertyToHclTerraform, true)(struct!.toolOverride),
      isBlock: true,
      type: "set",
      storageClassType: "ToolOverridePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetApiGatewayPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ApiGatewayProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rest_api_id: cdktn.stringToTerraform(struct!.restApiId),
    stage: cdktn.stringToTerraform(struct!.stage),
    api_gateway_tool_configuration: cdktn.listMapper(awsBedrockagentcoreGatewayTargetApiGatewayToolConfigurationPropertyToTerraform, true)(struct!.apiGatewayToolConfiguration),
  }
}


export function awsBedrockagentcoreGatewayTargetApiGatewayPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ApiGatewayProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rest_api_id: {
      value: cdktn.stringToHclTerraform(struct!.restApiId),
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
    api_gateway_tool_configuration: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetApiGatewayToolConfigurationPropertyToHclTerraform, true)(struct!.apiGatewayToolConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApiGatewayToolConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    name: cdktn.stringToTerraform(struct!.name),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    type: cdktn.stringToTerraform(struct!.type),
    items: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyToTerraform, true)(struct!.items),
    property: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyToTerraform, true)(struct!.property),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    items: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyList",
    },
    property: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    name: cdktn.stringToTerraform(struct!.name),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    type: cdktn.stringToTerraform(struct!.type),
    items: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyToTerraform, true)(struct!.items),
    property: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyToTerraform, true)(struct!.property),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    items: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyList",
    },
    property: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    name: cdktn.stringToTerraform(struct!.name),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
    items: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyToTerraform, true)(struct!.items),
    property: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyToTerraform, true)(struct!.property),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyList",
    },
    property: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetInputSchemaPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.InputSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    type: cdktn.stringToTerraform(struct!.type),
    items: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyToTerraform, true)(struct!.items),
    property: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyToTerraform, true)(struct!.property),
  }
}


export function awsBedrockagentcoreGatewayTargetInputSchemaPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.InputSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    items: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyList",
    },
    property: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    name: cdktn.stringToTerraform(struct!.name),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    type: cdktn.stringToTerraform(struct!.type),
    items: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyToTerraform, true)(struct!.items),
    property: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyToTerraform, true)(struct!.property),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    items: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyList",
    },
    property: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    name: cdktn.stringToTerraform(struct!.name),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    type: cdktn.stringToTerraform(struct!.type),
    items: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyToTerraform, true)(struct!.items),
    property: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyToTerraform, true)(struct!.property),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    items: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyList",
    },
    property: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    items_json: cdktn.stringToTerraform(struct!.itemsJson),
    name: cdktn.stringToTerraform(struct!.name),
    properties_json: cdktn.stringToTerraform(struct!.propertiesJson),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items_json: {
      value: cdktn.stringToHclTerraform(struct!.itemsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_json: {
      value: cdktn.stringToHclTerraform(struct!.propertiesJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
    items: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyToTerraform, true)(struct!.items),
    property: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyToTerraform, true)(struct!.property),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyList",
    },
    property: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetOutputSchemaPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.OutputSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    type: cdktn.stringToTerraform(struct!.type),
    items: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyToTerraform, true)(struct!.items),
    property: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyToTerraform, true)(struct!.property),
  }
}


export function awsBedrockagentcoreGatewayTargetOutputSchemaPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.OutputSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    items: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyList",
    },
    property: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "set",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    input_schema: cdktn.listMapper(awsBedrockagentcoreGatewayTargetInputSchemaPropertyToTerraform, true)(struct!.inputSchema),
    output_schema: cdktn.listMapper(awsBedrockagentcoreGatewayTargetOutputSchemaPropertyToTerraform, true)(struct!.outputSchema),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaInlinePayloadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_schema: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetInputSchemaPropertyToHclTerraform, true)(struct!.inputSchema),
      isBlock: true,
      type: "list",
      storageClassType: "InputSchemaPropertyList",
    },
    output_schema: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetOutputSchemaPropertyToHclTerraform, true)(struct!.outputSchema),
      isBlock: true,
      type: "list",
      storageClassType: "OutputSchemaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaS3PropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_owner_account_id: cdktn.stringToTerraform(struct!.bucketOwnerAccountId),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaS3PropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpLambdaToolSchemaS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_owner_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetToolSchemaPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ToolSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inline_payload: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyToTerraform, true)(struct!.inlinePayload),
    s3: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaS3PropertyToTerraform, true)(struct!.s3),
  }
}


export function awsBedrockagentcoreGatewayTargetToolSchemaPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.ToolSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inline_payload: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyToHclTerraform, true)(struct!.inlinePayload),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyList",
    },
    s3: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpLambdaToolSchemaS3PropertyToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpLambdaToolSchemaS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetLambdaPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.LambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    tool_schema: cdktn.listMapper(awsBedrockagentcoreGatewayTargetToolSchemaPropertyToTerraform, true)(struct!.toolSchema),
  }
}


export function awsBedrockagentcoreGatewayTargetLambdaPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.LambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_schema: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetToolSchemaPropertyToHclTerraform, true)(struct!.toolSchema),
      isBlock: true,
      type: "list",
      storageClassType: "ToolSchemaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: cdktn.stringToTerraform(struct!.payload),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: cdktn.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpMcpServerMcpToolSchemaS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_owner_account_id: cdktn.stringToTerraform(struct!.bucketOwnerAccountId),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpMcpServerMcpToolSchemaS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_owner_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetMcpToolSchemaPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.McpToolSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inline_payload: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyToTerraform, true)(struct!.inlinePayload),
    s3: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyToTerraform, true)(struct!.s3),
  }
}


export function awsBedrockagentcoreGatewayTargetMcpToolSchemaPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.McpToolSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inline_payload: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyToHclTerraform, true)(struct!.inlinePayload),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyList",
    },
    s3: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetMcpServerPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.McpServerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    listing_mode: cdktn.stringToTerraform(struct!.listingMode),
    resource_priority: cdktn.numberToTerraform(struct!.resourcePriority),
    mcp_tool_schema: cdktn.listMapper(awsBedrockagentcoreGatewayTargetMcpToolSchemaPropertyToTerraform, true)(struct!.mcpToolSchema),
  }
}


export function awsBedrockagentcoreGatewayTargetMcpServerPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.McpServerProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listing_mode: {
      value: cdktn.stringToHclTerraform(struct!.listingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_priority: {
      value: cdktn.numberToHclTerraform(struct!.resourcePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcp_tool_schema: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetMcpToolSchemaPropertyToHclTerraform, true)(struct!.mcpToolSchema),
      isBlock: true,
      type: "list",
      storageClassType: "McpToolSchemaPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpOpenApiSchemaInlinePayloadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: cdktn.stringToTerraform(struct!.payload),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpOpenApiSchemaInlinePayloadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: cdktn.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpOpenApiSchemaS3PropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpOpenApiSchemaS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_owner_account_id: cdktn.stringToTerraform(struct!.bucketOwnerAccountId),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpOpenApiSchemaS3PropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpOpenApiSchemaS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_owner_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetOpenApiSchemaPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.OpenApiSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inline_payload: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyToTerraform, true)(struct!.inlinePayload),
    s3: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpOpenApiSchemaS3PropertyToTerraform, true)(struct!.s3),
  }
}


export function awsBedrockagentcoreGatewayTargetOpenApiSchemaPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.OpenApiSchemaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inline_payload: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyToHclTerraform, true)(struct!.inlinePayload),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyList",
    },
    s3: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpOpenApiSchemaS3PropertyToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpOpenApiSchemaS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpSmithyModelInlinePayloadPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpSmithyModelInlinePayloadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: cdktn.stringToTerraform(struct!.payload),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpSmithyModelInlinePayloadPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpSmithyModelInlinePayloadProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: cdktn.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpSmithyModelS3PropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpSmithyModelS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_owner_account_id: cdktn.stringToTerraform(struct!.bucketOwnerAccountId),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationMcpSmithyModelS3PropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationMcpSmithyModelS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_owner_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetSmithyModelPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.SmithyModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inline_payload: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpSmithyModelInlinePayloadPropertyToTerraform, true)(struct!.inlinePayload),
    s3: cdktn.listMapper(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpSmithyModelS3PropertyToTerraform, true)(struct!.s3),
  }
}


export function awsBedrockagentcoreGatewayTargetSmithyModelPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.SmithyModelProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inline_payload: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpSmithyModelInlinePayloadPropertyToHclTerraform, true)(struct!.inlinePayload),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpSmithyModelInlinePayloadPropertyList",
    },
    s3: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetTargetConfigurationMcpSmithyModelS3PropertyToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "TargetConfigurationMcpSmithyModelS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetMcpPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.McpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_gateway: cdktn.listMapper(awsBedrockagentcoreGatewayTargetApiGatewayPropertyToTerraform, true)(struct!.apiGateway),
    lambda: cdktn.listMapper(awsBedrockagentcoreGatewayTargetLambdaPropertyToTerraform, true)(struct!.lambda),
    mcp_server: cdktn.listMapper(awsBedrockagentcoreGatewayTargetMcpServerPropertyToTerraform, true)(struct!.mcpServer),
    open_api_schema: cdktn.listMapper(awsBedrockagentcoreGatewayTargetOpenApiSchemaPropertyToTerraform, true)(struct!.openApiSchema),
    smithy_model: cdktn.listMapper(awsBedrockagentcoreGatewayTargetSmithyModelPropertyToTerraform, true)(struct!.smithyModel),
  }
}


export function awsBedrockagentcoreGatewayTargetMcpPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.McpProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_gateway: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetApiGatewayPropertyToHclTerraform, true)(struct!.apiGateway),
      isBlock: true,
      type: "list",
      storageClassType: "ApiGatewayPropertyList",
    },
    lambda: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetLambdaPropertyToHclTerraform, true)(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaPropertyList",
    },
    mcp_server: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetMcpServerPropertyToHclTerraform, true)(struct!.mcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "McpServerPropertyList",
    },
    open_api_schema: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetOpenApiSchemaPropertyToHclTerraform, true)(struct!.openApiSchema),
      isBlock: true,
      type: "list",
      storageClassType: "OpenApiSchemaPropertyList",
    },
    smithy_model: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetSmithyModelPropertyToHclTerraform, true)(struct!.smithyModel),
      isBlock: true,
      type: "list",
      storageClassType: "SmithyModelPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http: cdktn.listMapper(awsBedrockagentcoreGatewayTargetHttpPropertyToTerraform, true)(struct!.http),
    mcp: cdktn.listMapper(awsBedrockagentcoreGatewayTargetMcpPropertyToTerraform, true)(struct!.mcp),
  }
}


export function awsBedrockagentcoreGatewayTargetTargetConfigurationPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TargetConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetHttpPropertyToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "HttpPropertyList",
    },
    mcp: {
      value: cdktn.listMapperHcl(awsBedrockagentcoreGatewayTargetMcpPropertyToHclTerraform, true)(struct!.mcp),
      isBlock: true,
      type: "list",
      storageClassType: "McpPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBedrockagentcoreGatewayTargetTimeoutsPropertyToTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsBedrockagentcoreGatewayTargetTimeoutsPropertyToHclTerraform(struct?: AwsBedrockagentcoreGatewayTarget.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsBedrockagentcoreGatewayTarget {
export interface ApiKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#credential_location AwsBedrockagentcoreGatewayTarget#credential_location}
  */
  readonly credentialLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#credential_parameter_name AwsBedrockagentcoreGatewayTarget#credential_parameter_name}
  */
  readonly credentialParameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#credential_prefix AwsBedrockagentcoreGatewayTarget#credential_prefix}
  */
  readonly credentialPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#provider_arn AwsBedrockagentcoreGatewayTarget#provider_arn}
  */
  readonly providerArn: string;
}
export class ApiKeyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiKeyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialLocation = this._credentialLocation;
    }
    if (this._credentialParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialParameterName = this._credentialParameterName;
    }
    if (this._credentialPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialPrefix = this._credentialPrefix;
    }
    if (this._providerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerArn = this._providerArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiKeyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialLocation = undefined;
      this._credentialParameterName = undefined;
      this._credentialPrefix = undefined;
      this._providerArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialLocation = value.credentialLocation;
      this._credentialParameterName = value.credentialParameterName;
      this._credentialPrefix = value.credentialPrefix;
      this._providerArn = value.providerArn;
    }
  }

  // credential_location - computed: false, optional: true, required: false
  private _credentialLocation?: string; 
  public get credentialLocation() {
    return this.getStringAttribute('credential_location');
  }
  public set credentialLocation(value: string) {
    this._credentialLocation = value;
  }
  public resetCredentialLocation() {
    this._credentialLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialLocationInput() {
    return this._credentialLocation;
  }

  // credential_parameter_name - computed: false, optional: true, required: false
  private _credentialParameterName?: string; 
  public get credentialParameterName() {
    return this.getStringAttribute('credential_parameter_name');
  }
  public set credentialParameterName(value: string) {
    this._credentialParameterName = value;
  }
  public resetCredentialParameterName() {
    this._credentialParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialParameterNameInput() {
    return this._credentialParameterName;
  }

  // credential_prefix - computed: false, optional: true, required: false
  private _credentialPrefix?: string; 
  public get credentialPrefix() {
    return this.getStringAttribute('credential_prefix');
  }
  public set credentialPrefix(value: string) {
    this._credentialPrefix = value;
  }
  public resetCredentialPrefix() {
    this._credentialPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialPrefixInput() {
    return this._credentialPrefix;
  }

  // provider_arn - computed: false, optional: false, required: true
  private _providerArn?: string; 
  public get providerArn() {
    return this.getStringAttribute('provider_arn');
  }
  public set providerArn(value: string) {
    this._providerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArnInput() {
    return this._providerArn;
  }
}

export class ApiKeyPropertyList extends cdktn.ComplexList {
  public internalValue? : ApiKeyProperty[] | cdktn.IResolvable

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
  public get(index: number): ApiKeyPropertyOutputReference {
    return new ApiKeyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallerIamCredentialsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#region AwsBedrockagentcoreGatewayTarget#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#service AwsBedrockagentcoreGatewayTarget#service}
  */
  readonly service: string;
}
export class CallerIamCredentialsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CallerIamCredentialsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallerIamCredentialsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._service = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._service = value.service;
    }
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class CallerIamCredentialsPropertyList extends cdktn.ComplexList {
  public internalValue? : CallerIamCredentialsProperty[] | cdktn.IResolvable

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
  public get(index: number): CallerIamCredentialsPropertyOutputReference {
    return new CallerIamCredentialsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayIamRoleProperty {
  /**
  * AWS Region used for SigV4 signing of upstream requests. Defaults to the gateway's Region when omitted. Only meaningful when `service` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#region AwsBedrockagentcoreGatewayTarget#region}
  */
  readonly region?: string;
  /**
  * The target AWS service name used for SigV4 signing of upstream requests. Required when calling SigV4-protected endpoints such as another Bedrock AgentCore Runtime (use `bedrock-agentcore`). Omit for non-SigV4 IAM-role-based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#service AwsBedrockagentcoreGatewayTarget#service}
  */
  readonly service?: string;
}
export class GatewayIamRolePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GatewayIamRoleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayIamRoleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._service = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._service = value.service;
    }
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class GatewayIamRolePropertyList extends cdktn.ComplexList {
  public internalValue? : GatewayIamRoleProperty[] | cdktn.IResolvable

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
  public get(index: number): GatewayIamRolePropertyOutputReference {
    return new GatewayIamRolePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JwtPassthroughProperty {
}
export class JwtPassthroughPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JwtPassthroughProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JwtPassthroughProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class JwtPassthroughPropertyList extends cdktn.ComplexList {
  public internalValue? : JwtPassthroughProperty[] | cdktn.IResolvable

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
  public get(index: number): JwtPassthroughPropertyOutputReference {
    return new JwtPassthroughPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#custom_parameters AwsBedrockagentcoreGatewayTarget#custom_parameters}
  */
  readonly customParameters?: { [key: string]: string };
  /**
  * The URL where the end user's browser is redirected after obtaining the authorization code. Required when grant_type is AUTHORIZATION_CODE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#default_return_url AwsBedrockagentcoreGatewayTarget#default_return_url}
  */
  readonly defaultReturnUrl?: string;
  /**
  * The OAuth grant type. Valid values are AUTHORIZATION_CODE and CLIENT_CREDENTIALS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#grant_type AwsBedrockagentcoreGatewayTarget#grant_type}
  */
  readonly grantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#provider_arn AwsBedrockagentcoreGatewayTarget#provider_arn}
  */
  readonly providerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#scopes AwsBedrockagentcoreGatewayTarget#scopes}
  */
  readonly scopes: string[];
}
export class OauthPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OauthProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParameters = this._customParameters;
    }
    if (this._defaultReturnUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultReturnUrl = this._defaultReturnUrl;
    }
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._providerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerArn = this._providerArn;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customParameters = undefined;
      this._defaultReturnUrl = undefined;
      this._grantType = undefined;
      this._providerArn = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customParameters = value.customParameters;
      this._defaultReturnUrl = value.defaultReturnUrl;
      this._grantType = value.grantType;
      this._providerArn = value.providerArn;
      this._scopes = value.scopes;
    }
  }

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters?: { [key: string]: string }; 
  public get customParameters() {
    return this.getStringMapAttribute('custom_parameters');
  }
  public set customParameters(value: { [key: string]: string }) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters;
  }

  // default_return_url - computed: false, optional: true, required: false
  private _defaultReturnUrl?: string; 
  public get defaultReturnUrl() {
    return this.getStringAttribute('default_return_url');
  }
  public set defaultReturnUrl(value: string) {
    this._defaultReturnUrl = value;
  }
  public resetDefaultReturnUrl() {
    this._defaultReturnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReturnUrlInput() {
    return this._defaultReturnUrl;
  }

  // grant_type - computed: false, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // provider_arn - computed: false, optional: false, required: true
  private _providerArn?: string; 
  public get providerArn() {
    return this.getStringAttribute('provider_arn');
  }
  public set providerArn(value: string) {
    this._providerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArnInput() {
    return this._providerArn;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktn.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}

export class OauthPropertyList extends cdktn.ComplexList {
  public internalValue? : OauthProperty[] | cdktn.IResolvable

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
  public get(index: number): OauthPropertyOutputReference {
    return new OauthPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialProviderConfigurationProperty {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#api_key AwsBedrockagentcoreGatewayTarget#api_key}
  */
  readonly apiKey?: ApiKeyProperty[] | cdktn.IResolvable;
  /**
  * caller_iam_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#caller_iam_credentials AwsBedrockagentcoreGatewayTarget#caller_iam_credentials}
  */
  readonly callerIamCredentials?: CallerIamCredentialsProperty[] | cdktn.IResolvable;
  /**
  * gateway_iam_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#gateway_iam_role AwsBedrockagentcoreGatewayTarget#gateway_iam_role}
  */
  readonly gatewayIamRole?: GatewayIamRoleProperty[] | cdktn.IResolvable;
  /**
  * jwt_passthrough block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#jwt_passthrough AwsBedrockagentcoreGatewayTarget#jwt_passthrough}
  */
  readonly jwtPassthrough?: JwtPassthroughProperty[] | cdktn.IResolvable;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#oauth AwsBedrockagentcoreGatewayTarget#oauth}
  */
  readonly oauth?: OauthProperty[] | cdktn.IResolvable;
}
export class CredentialProviderConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CredentialProviderConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._callerIamCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callerIamCredentials = this._callerIamCredentials?.internalValue;
    }
    if (this._gatewayIamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIamRole = this._gatewayIamRole?.internalValue;
    }
    if (this._jwtPassthrough?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtPassthrough = this._jwtPassthrough?.internalValue;
    }
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._callerIamCredentials.internalValue = undefined;
      this._gatewayIamRole.internalValue = undefined;
      this._jwtPassthrough.internalValue = undefined;
      this._oauth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._callerIamCredentials.internalValue = value.callerIamCredentials;
      this._gatewayIamRole.internalValue = value.gatewayIamRole;
      this._jwtPassthrough.internalValue = value.jwtPassthrough;
      this._oauth.internalValue = value.oauth;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ApiKeyPropertyList(this, "api_key", false);
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ApiKeyProperty[] | cdktn.IResolvable) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // caller_iam_credentials - computed: false, optional: true, required: false
  private _callerIamCredentials = new CallerIamCredentialsPropertyList(this, "caller_iam_credentials", false);
  public get callerIamCredentials() {
    return this._callerIamCredentials;
  }
  public putCallerIamCredentials(value: CallerIamCredentialsProperty[] | cdktn.IResolvable) {
    this._callerIamCredentials.internalValue = value;
  }
  public resetCallerIamCredentials() {
    this._callerIamCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerIamCredentialsInput() {
    return this._callerIamCredentials.internalValue;
  }

  // gateway_iam_role - computed: false, optional: true, required: false
  private _gatewayIamRole = new GatewayIamRolePropertyList(this, "gateway_iam_role", false);
  public get gatewayIamRole() {
    return this._gatewayIamRole;
  }
  public putGatewayIamRole(value: GatewayIamRoleProperty[] | cdktn.IResolvable) {
    this._gatewayIamRole.internalValue = value;
  }
  public resetGatewayIamRole() {
    this._gatewayIamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIamRoleInput() {
    return this._gatewayIamRole.internalValue;
  }

  // jwt_passthrough - computed: false, optional: true, required: false
  private _jwtPassthrough = new JwtPassthroughPropertyList(this, "jwt_passthrough", false);
  public get jwtPassthrough() {
    return this._jwtPassthrough;
  }
  public putJwtPassthrough(value: JwtPassthroughProperty[] | cdktn.IResolvable) {
    this._jwtPassthrough.internalValue = value;
  }
  public resetJwtPassthrough() {
    this._jwtPassthrough.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtPassthroughInput() {
    return this._jwtPassthrough.internalValue;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new OauthPropertyList(this, "oauth", false);
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: OauthProperty[] | cdktn.IResolvable) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }
}

export class CredentialProviderConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : CredentialProviderConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): CredentialProviderConfigurationPropertyOutputReference {
    return new CredentialProviderConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetadataConfigurationProperty {
  /**
  * A list of URL query parameters that are allowed to be propagated from incoming gateway URL to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#allowed_query_parameters AwsBedrockagentcoreGatewayTarget#allowed_query_parameters}
  */
  readonly allowedQueryParameters?: string[];
  /**
  * A list of HTTP headers that are allowed to be propagated from incoming client requests to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#allowed_request_headers AwsBedrockagentcoreGatewayTarget#allowed_request_headers}
  */
  readonly allowedRequestHeaders?: string[];
  /**
  * A list of HTTP headers that are allowed to be propagated from the target response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#allowed_response_headers AwsBedrockagentcoreGatewayTarget#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
}
export class MetadataConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MetadataConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedQueryParameters = this._allowedQueryParameters;
    }
    if (this._allowedRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRequestHeaders = this._allowedRequestHeaders;
    }
    if (this._allowedResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedResponseHeaders = this._allowedResponseHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetadataConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedQueryParameters = undefined;
      this._allowedRequestHeaders = undefined;
      this._allowedResponseHeaders = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedQueryParameters = value.allowedQueryParameters;
      this._allowedRequestHeaders = value.allowedRequestHeaders;
      this._allowedResponseHeaders = value.allowedResponseHeaders;
    }
  }

  // allowed_query_parameters - computed: false, optional: true, required: false
  private _allowedQueryParameters?: string[]; 
  public get allowedQueryParameters() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_query_parameters'));
  }
  public set allowedQueryParameters(value: string[]) {
    this._allowedQueryParameters = value;
  }
  public resetAllowedQueryParameters() {
    this._allowedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedQueryParametersInput() {
    return this._allowedQueryParameters;
  }

  // allowed_request_headers - computed: false, optional: true, required: false
  private _allowedRequestHeaders?: string[]; 
  public get allowedRequestHeaders() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_request_headers'));
  }
  public set allowedRequestHeaders(value: string[]) {
    this._allowedRequestHeaders = value;
  }
  public resetAllowedRequestHeaders() {
    this._allowedRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestHeadersInput() {
    return this._allowedRequestHeaders;
  }

  // allowed_response_headers - computed: false, optional: true, required: false
  private _allowedResponseHeaders?: string[]; 
  public get allowedResponseHeaders() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_response_headers'));
  }
  public set allowedResponseHeaders(value: string[]) {
    this._allowedResponseHeaders = value;
  }
  public resetAllowedResponseHeaders() {
    this._allowedResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedResponseHeadersInput() {
    return this._allowedResponseHeaders;
  }
}

export class MetadataConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : MetadataConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): MetadataConfigurationPropertyOutputReference {
    return new MetadataConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedVpcResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#endpoint_ip_address_type AwsBedrockagentcoreGatewayTarget#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#routing_domain AwsBedrockagentcoreGatewayTarget#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#security_group_ids AwsBedrockagentcoreGatewayTarget#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#subnet_ids AwsBedrockagentcoreGatewayTarget#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#tags AwsBedrockagentcoreGatewayTarget#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#vpc_identifier AwsBedrockagentcoreGatewayTarget#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}
export class ManagedVpcResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ManagedVpcResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIpAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
    }
    if (this._routingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingDomain = this._routingDomain;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vpcIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIdentifier = this._vpcIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedVpcResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = undefined;
      this._routingDomain = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._vpcIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = value.endpointIpAddressType;
      this._routingDomain = value.routingDomain;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._vpcIdentifier = value.vpcIdentifier;
    }
  }

  // endpoint_ip_address_type - computed: false, optional: false, required: true
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
  }

  // routing_domain - computed: false, optional: true, required: false
  private _routingDomain?: string; 
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }
  public set routingDomain(value: string) {
    this._routingDomain = value;
  }
  public resetRoutingDomain() {
    this._routingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingDomainInput() {
    return this._routingDomain;
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

  // vpc_identifier - computed: false, optional: false, required: true
  private _vpcIdentifier?: string; 
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
  public set vpcIdentifier(value: string) {
    this._vpcIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdentifierInput() {
    return this._vpcIdentifier;
  }
}

export class ManagedVpcResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : ManagedVpcResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): ManagedVpcResourcePropertyOutputReference {
    return new ManagedVpcResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelfManagedLatticeResourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#resource_configuration_identifier AwsBedrockagentcoreGatewayTarget#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier: string;
}
export class SelfManagedLatticeResourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelfManagedLatticeResourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
    }
  }

  // resource_configuration_identifier - computed: false, optional: false, required: true
  private _resourceConfigurationIdentifier?: string; 
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
  public set resourceConfigurationIdentifier(value: string) {
    this._resourceConfigurationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationIdentifierInput() {
    return this._resourceConfigurationIdentifier;
  }
}

export class SelfManagedLatticeResourcePropertyList extends cdktn.ComplexList {
  public internalValue? : SelfManagedLatticeResourceProperty[] | cdktn.IResolvable

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
  public get(index: number): SelfManagedLatticeResourcePropertyOutputReference {
    return new SelfManagedLatticeResourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateEndpointProperty {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#managed_vpc_resource AwsBedrockagentcoreGatewayTarget#managed_vpc_resource}
  */
  readonly managedVpcResource?: ManagedVpcResourceProperty[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#self_managed_lattice_resource AwsBedrockagentcoreGatewayTarget#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: SelfManagedLatticeResourceProperty[] | cdktn.IResolvable;
}
export class PrivateEndpointPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivateEndpointProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedVpcResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
    }
    if (this._selfManagedLatticeResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = undefined;
      this._selfManagedLatticeResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = value.managedVpcResource;
      this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
    }
  }

  // managed_vpc_resource - computed: false, optional: true, required: false
  private _managedVpcResource = new ManagedVpcResourcePropertyList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: ManagedVpcResourceProperty[] | cdktn.IResolvable) {
    this._managedVpcResource.internalValue = value;
  }
  public resetManagedVpcResource() {
    this._managedVpcResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVpcResourceInput() {
    return this._managedVpcResource.internalValue;
  }

  // self_managed_lattice_resource - computed: false, optional: true, required: false
  private _selfManagedLatticeResource = new SelfManagedLatticeResourcePropertyList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: SelfManagedLatticeResourceProperty[] | cdktn.IResolvable) {
    this._selfManagedLatticeResource.internalValue = value;
  }
  public resetSelfManagedLatticeResource() {
    this._selfManagedLatticeResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedLatticeResourceInput() {
    return this._selfManagedLatticeResource.internalValue;
  }
}

export class PrivateEndpointPropertyList extends cdktn.ComplexList {
  public internalValue? : PrivateEndpointProperty[] | cdktn.IResolvable

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
  public get(index: number): PrivateEndpointPropertyOutputReference {
    return new PrivateEndpointPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentcoreRuntimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#arn AwsBedrockagentcoreGatewayTarget#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#qualifier AwsBedrockagentcoreGatewayTarget#qualifier}
  */
  readonly qualifier?: string;
}
export class AgentcoreRuntimePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AgentcoreRuntimeProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentcoreRuntimeProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._qualifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._qualifier = value.qualifier;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }
}

export class AgentcoreRuntimePropertyList extends cdktn.ComplexList {
  public internalValue? : AgentcoreRuntimeProperty[] | cdktn.IResolvable

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
  public get(index: number): AgentcoreRuntimePropertyOutputReference {
    return new AgentcoreRuntimePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpProperty {
  /**
  * agentcore_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#agentcore_runtime AwsBedrockagentcoreGatewayTarget#agentcore_runtime}
  */
  readonly agentcoreRuntime?: AgentcoreRuntimeProperty[] | cdktn.IResolvable;
}
export class HttpPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HttpProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentcoreRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentcoreRuntime = this._agentcoreRuntime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentcoreRuntime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentcoreRuntime.internalValue = value.agentcoreRuntime;
    }
  }

  // agentcore_runtime - computed: false, optional: true, required: false
  private _agentcoreRuntime = new AgentcoreRuntimePropertyList(this, "agentcore_runtime", false);
  public get agentcoreRuntime() {
    return this._agentcoreRuntime;
  }
  public putAgentcoreRuntime(value: AgentcoreRuntimeProperty[] | cdktn.IResolvable) {
    this._agentcoreRuntime.internalValue = value;
  }
  public resetAgentcoreRuntime() {
    this._agentcoreRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentcoreRuntimeInput() {
    return this._agentcoreRuntime.internalValue;
  }
}

export class HttpPropertyList extends cdktn.ComplexList {
  public internalValue? : HttpProperty[] | cdktn.IResolvable

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
  public get(index: number): HttpPropertyOutputReference {
    return new HttpPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ToolFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#filter_path AwsBedrockagentcoreGatewayTarget#filter_path}
  */
  readonly filterPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#methods AwsBedrockagentcoreGatewayTarget#methods}
  */
  readonly methods: string[];
}
export class ToolFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ToolFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPath = this._filterPath;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ToolFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterPath = undefined;
      this._methods = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterPath = value.filterPath;
      this._methods = value.methods;
    }
  }

  // filter_path - computed: false, optional: false, required: true
  private _filterPath?: string; 
  public get filterPath() {
    return this.getStringAttribute('filter_path');
  }
  public set filterPath(value: string) {
    this._filterPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPathInput() {
    return this._filterPath;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return cdktn.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}

export class ToolFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : ToolFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): ToolFilterPropertyOutputReference {
    return new ToolFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ToolOverrideProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#method AwsBedrockagentcoreGatewayTarget#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#path AwsBedrockagentcoreGatewayTarget#path}
  */
  readonly path: string;
}
export class ToolOverridePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ToolOverrideProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ToolOverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._method = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._method = value.method;
      this._name = value.name;
      this._path = value.path;
    }
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ToolOverridePropertyList extends cdktn.ComplexList {
  public internalValue? : ToolOverrideProperty[] | cdktn.IResolvable

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
  public get(index: number): ToolOverridePropertyOutputReference {
    return new ToolOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayToolConfigurationProperty {
  /**
  * tool_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#tool_filter AwsBedrockagentcoreGatewayTarget#tool_filter}
  */
  readonly toolFilter?: ToolFilterProperty[] | cdktn.IResolvable;
  /**
  * tool_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#tool_override AwsBedrockagentcoreGatewayTarget#tool_override}
  */
  readonly toolOverride?: ToolOverrideProperty[] | cdktn.IResolvable;
}
export class ApiGatewayToolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiGatewayToolConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolFilter = this._toolFilter?.internalValue;
    }
    if (this._toolOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolOverride = this._toolOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayToolConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._toolFilter.internalValue = undefined;
      this._toolOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._toolFilter.internalValue = value.toolFilter;
      this._toolOverride.internalValue = value.toolOverride;
    }
  }

  // tool_filter - computed: false, optional: true, required: false
  private _toolFilter = new ToolFilterPropertyList(this, "tool_filter", true);
  public get toolFilter() {
    return this._toolFilter;
  }
  public putToolFilter(value: ToolFilterProperty[] | cdktn.IResolvable) {
    this._toolFilter.internalValue = value;
  }
  public resetToolFilter() {
    this._toolFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolFilterInput() {
    return this._toolFilter.internalValue;
  }

  // tool_override - computed: false, optional: true, required: false
  private _toolOverride = new ToolOverridePropertyList(this, "tool_override", true);
  public get toolOverride() {
    return this._toolOverride;
  }
  public putToolOverride(value: ToolOverrideProperty[] | cdktn.IResolvable) {
    this._toolOverride.internalValue = value;
  }
  public resetToolOverride() {
    this._toolOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolOverrideInput() {
    return this._toolOverride.internalValue;
  }
}

export class ApiGatewayToolConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ApiGatewayToolConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ApiGatewayToolConfigurationPropertyOutputReference {
    return new ApiGatewayToolConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#rest_api_id AwsBedrockagentcoreGatewayTarget#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#stage AwsBedrockagentcoreGatewayTarget#stage}
  */
  readonly stage: string;
  /**
  * api_gateway_tool_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#api_gateway_tool_configuration AwsBedrockagentcoreGatewayTarget#api_gateway_tool_configuration}
  */
  readonly apiGatewayToolConfiguration?: ApiGatewayToolConfigurationProperty[] | cdktn.IResolvable;
}
export class ApiGatewayPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiGatewayProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restApiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.restApiId = this._restApiId;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._apiGatewayToolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGatewayToolConfiguration = this._apiGatewayToolConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restApiId = undefined;
      this._stage = undefined;
      this._apiGatewayToolConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restApiId = value.restApiId;
      this._stage = value.stage;
      this._apiGatewayToolConfiguration.internalValue = value.apiGatewayToolConfiguration;
    }
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId;
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

  // api_gateway_tool_configuration - computed: false, optional: true, required: false
  private _apiGatewayToolConfiguration = new ApiGatewayToolConfigurationPropertyList(this, "api_gateway_tool_configuration", false);
  public get apiGatewayToolConfiguration() {
    return this._apiGatewayToolConfiguration;
  }
  public putApiGatewayToolConfiguration(value: ApiGatewayToolConfigurationProperty[] | cdktn.IResolvable) {
    this._apiGatewayToolConfiguration.internalValue = value;
  }
  public resetApiGatewayToolConfiguration() {
    this._apiGatewayToolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayToolConfigurationInput() {
    return this._apiGatewayToolConfiguration.internalValue;
  }
}

export class ApiGatewayPropertyList extends cdktn.ComplexList {
  public internalValue? : ApiGatewayProperty[] | cdktn.IResolvable

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
  public get(index: number): ApiGatewayPropertyOutputReference {
    return new ApiGatewayPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._propertiesJson = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._propertiesJson = value.propertiesJson;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
  }

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#required AwsBedrockagentcoreGatewayTarget#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._name = undefined;
      this._propertiesJson = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._name = value.name;
      this._propertiesJson = value.propertiesJson;
      this._required = value.required;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
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

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items AwsBedrockagentcoreGatewayTarget#items}
  */
  readonly items?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsProperty[] | cdktn.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#property AwsBedrockagentcoreGatewayTarget#property}
  */
  readonly property?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._type = undefined;
      this._items.internalValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._type = value.type;
      this._items.internalValue = value.items;
      this._property.internalValue = value.property;
    }
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

  // items - computed: false, optional: true, required: false
  private _items = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._propertiesJson = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._propertiesJson = value.propertiesJson;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
  }

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#required AwsBedrockagentcoreGatewayTarget#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._name = undefined;
      this._propertiesJson = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._name = value.name;
      this._propertiesJson = value.propertiesJson;
      this._required = value.required;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
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

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items AwsBedrockagentcoreGatewayTarget#items}
  */
  readonly items?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsProperty[] | cdktn.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#property AwsBedrockagentcoreGatewayTarget#property}
  */
  readonly property?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._type = undefined;
      this._items.internalValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._type = value.type;
      this._items.internalValue = value.items;
      this._property.internalValue = value.property;
    }
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

  // items - computed: false, optional: true, required: false
  private _items = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#required AwsBedrockagentcoreGatewayTarget#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._name = undefined;
      this._propertiesJson = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._name = value.name;
      this._propertiesJson = value.propertiesJson;
      this._required = value.required;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
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

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#required AwsBedrockagentcoreGatewayTarget#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items AwsBedrockagentcoreGatewayTarget#items}
  */
  readonly items?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsProperty[] | cdktn.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#property AwsBedrockagentcoreGatewayTarget#property}
  */
  readonly property?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
      this._items.internalValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
      this._items.internalValue = value.items;
      this._property.internalValue = value.property;
    }
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

  // items - computed: false, optional: true, required: false
  private _items = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InputSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items AwsBedrockagentcoreGatewayTarget#items}
  */
  readonly items?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsProperty[] | cdktn.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#property AwsBedrockagentcoreGatewayTarget#property}
  */
  readonly property?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyProperty[] | cdktn.IResolvable;
}
export class InputSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InputSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InputSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._type = undefined;
      this._items.internalValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._type = value.type;
      this._items.internalValue = value.items;
      this._property.internalValue = value.property;
    }
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

  // items - computed: false, optional: true, required: false
  private _items = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadInputSchemaPropertyProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class InputSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : InputSchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): InputSchemaPropertyOutputReference {
    return new InputSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._propertiesJson = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._propertiesJson = value.propertiesJson;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
  }

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#required AwsBedrockagentcoreGatewayTarget#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._name = undefined;
      this._propertiesJson = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._name = value.name;
      this._propertiesJson = value.propertiesJson;
      this._required = value.required;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
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

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items AwsBedrockagentcoreGatewayTarget#items}
  */
  readonly items?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsProperty[] | cdktn.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#property AwsBedrockagentcoreGatewayTarget#property}
  */
  readonly property?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._type = undefined;
      this._items.internalValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._type = value.type;
      this._items.internalValue = value.items;
      this._property.internalValue = value.property;
    }
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

  // items - computed: false, optional: true, required: false
  private _items = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._propertiesJson = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._propertiesJson = value.propertiesJson;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
  }

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#required AwsBedrockagentcoreGatewayTarget#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._name = undefined;
      this._propertiesJson = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._name = value.name;
      this._propertiesJson = value.propertiesJson;
      this._required = value.required;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
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

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items AwsBedrockagentcoreGatewayTarget#items}
  */
  readonly items?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsProperty[] | cdktn.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#property AwsBedrockagentcoreGatewayTarget#property}
  */
  readonly property?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._type = undefined;
      this._items.internalValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._type = value.type;
      this._items.internalValue = value.items;
      this._property.internalValue = value.property;
    }
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

  // items - computed: false, optional: true, required: false
  private _items = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items_json AwsBedrockagentcoreGatewayTarget#items_json}
  */
  readonly itemsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#properties_json AwsBedrockagentcoreGatewayTarget#properties_json}
  */
  readonly propertiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#required AwsBedrockagentcoreGatewayTarget#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._itemsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemsJson = this._itemsJson;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._propertiesJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesJson = this._propertiesJson;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._itemsJson = undefined;
      this._name = undefined;
      this._propertiesJson = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._itemsJson = value.itemsJson;
      this._name = value.name;
      this._propertiesJson = value.propertiesJson;
      this._required = value.required;
      this._type = value.type;
    }
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

  // items_json - computed: false, optional: true, required: false
  private _itemsJson?: string; 
  public get itemsJson() {
    return this.getStringAttribute('items_json');
  }
  public set itemsJson(value: string) {
    this._itemsJson = value;
  }
  public resetItemsJson() {
    this._itemsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsJsonInput() {
    return this._itemsJson;
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

  // properties_json - computed: false, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#required AwsBedrockagentcoreGatewayTarget#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items AwsBedrockagentcoreGatewayTarget#items}
  */
  readonly items?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsProperty[] | cdktn.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#property AwsBedrockagentcoreGatewayTarget#property}
  */
  readonly property?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
      this._items.internalValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
      this._items.internalValue = value.items;
      this._property.internalValue = value.property;
    }
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

  // items - computed: false, optional: true, required: false
  private _items = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutputSchemaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#type AwsBedrockagentcoreGatewayTarget#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#items AwsBedrockagentcoreGatewayTarget#items}
  */
  readonly items?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsProperty[] | cdktn.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#property AwsBedrockagentcoreGatewayTarget#property}
  */
  readonly property?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyProperty[] | cdktn.IResolvable;
}
export class OutputSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OutputSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutputSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._type = undefined;
      this._items.internalValue = undefined;
      this._property.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._type = value.type;
      this._items.internalValue = value.items;
      this._property.internalValue = value.property;
    }
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

  // items - computed: false, optional: true, required: false
  private _items = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsPropertyList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaItemsProperty[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadOutputSchemaPropertyProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}

export class OutputSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : OutputSchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): OutputSchemaPropertyOutputReference {
    return new OutputSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaInlinePayloadProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#description AwsBedrockagentcoreGatewayTarget#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#name AwsBedrockagentcoreGatewayTarget#name}
  */
  readonly name: string;
  /**
  * input_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#input_schema AwsBedrockagentcoreGatewayTarget#input_schema}
  */
  readonly inputSchema?: InputSchemaProperty[] | cdktn.IResolvable;
  /**
  * output_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#output_schema AwsBedrockagentcoreGatewayTarget#output_schema}
  */
  readonly outputSchema?: OutputSchemaProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaInlinePayloadProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._inputSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema?.internalValue;
    }
    if (this._outputSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchema = this._outputSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._inputSchema.internalValue = undefined;
      this._outputSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._inputSchema.internalValue = value.inputSchema;
      this._outputSchema.internalValue = value.outputSchema;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema = new InputSchemaPropertyList(this, "input_schema", false);
  public get inputSchema() {
    return this._inputSchema;
  }
  public putInputSchema(value: InputSchemaProperty[] | cdktn.IResolvable) {
    this._inputSchema.internalValue = value;
  }
  public resetInputSchema() {
    this._inputSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema.internalValue;
  }

  // output_schema - computed: false, optional: true, required: false
  private _outputSchema = new OutputSchemaPropertyList(this, "output_schema", false);
  public get outputSchema() {
    return this._outputSchema;
  }
  public putOutputSchema(value: OutputSchemaProperty[] | cdktn.IResolvable) {
    this._outputSchema.internalValue = value;
  }
  public resetOutputSchema() {
    this._outputSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema.internalValue;
  }
}

export class TargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaInlinePayloadProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpLambdaToolSchemaS3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#bucket_owner_account_id AwsBedrockagentcoreGatewayTarget#bucket_owner_account_id}
  */
  readonly bucketOwnerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#uri AwsBedrockagentcoreGatewayTarget#uri}
  */
  readonly uri?: string;
}
export class TargetConfigurationMcpLambdaToolSchemaS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpLambdaToolSchemaS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwnerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccountId = this._bucketOwnerAccountId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpLambdaToolSchemaS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketOwnerAccountId = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketOwnerAccountId = value.bucketOwnerAccountId;
      this._uri = value.uri;
    }
  }

  // bucket_owner_account_id - computed: false, optional: true, required: false
  private _bucketOwnerAccountId?: string; 
  public get bucketOwnerAccountId() {
    return this.getStringAttribute('bucket_owner_account_id');
  }
  public set bucketOwnerAccountId(value: string) {
    this._bucketOwnerAccountId = value;
  }
  public resetBucketOwnerAccountId() {
    this._bucketOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccountIdInput() {
    return this._bucketOwnerAccountId;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class TargetConfigurationMcpLambdaToolSchemaS3PropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpLambdaToolSchemaS3Property[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpLambdaToolSchemaS3PropertyOutputReference {
    return new TargetConfigurationMcpLambdaToolSchemaS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ToolSchemaProperty {
  /**
  * inline_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#inline_payload AwsBedrockagentcoreGatewayTarget#inline_payload}
  */
  readonly inlinePayload?: TargetConfigurationMcpLambdaToolSchemaInlinePayloadProperty[] | cdktn.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#s3 AwsBedrockagentcoreGatewayTarget#s3}
  */
  readonly s3?: TargetConfigurationMcpLambdaToolSchemaS3Property[] | cdktn.IResolvable;
}
export class ToolSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ToolSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlinePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlinePayload = this._inlinePayload?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ToolSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlinePayload.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlinePayload.internalValue = value.inlinePayload;
      this._s3.internalValue = value.s3;
    }
  }

  // inline_payload - computed: false, optional: true, required: false
  private _inlinePayload = new TargetConfigurationMcpLambdaToolSchemaInlinePayloadPropertyList(this, "inline_payload", false);
  public get inlinePayload() {
    return this._inlinePayload;
  }
  public putInlinePayload(value: TargetConfigurationMcpLambdaToolSchemaInlinePayloadProperty[] | cdktn.IResolvable) {
    this._inlinePayload.internalValue = value;
  }
  public resetInlinePayload() {
    this._inlinePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePayloadInput() {
    return this._inlinePayload.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TargetConfigurationMcpLambdaToolSchemaS3PropertyList(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: TargetConfigurationMcpLambdaToolSchemaS3Property[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class ToolSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : ToolSchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): ToolSchemaPropertyOutputReference {
    return new ToolSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#lambda_arn AwsBedrockagentcoreGatewayTarget#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * tool_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#tool_schema AwsBedrockagentcoreGatewayTarget#tool_schema}
  */
  readonly toolSchema?: ToolSchemaProperty[] | cdktn.IResolvable;
}
export class LambdaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._toolSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolSchema = this._toolSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
      this._toolSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
      this._toolSchema.internalValue = value.toolSchema;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // tool_schema - computed: false, optional: true, required: false
  private _toolSchema = new ToolSchemaPropertyList(this, "tool_schema", false);
  public get toolSchema() {
    return this._toolSchema;
  }
  public putToolSchema(value: ToolSchemaProperty[] | cdktn.IResolvable) {
    this._toolSchema.internalValue = value;
  }
  public resetToolSchema() {
    this._toolSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolSchemaInput() {
    return this._toolSchema.internalValue;
  }
}

export class LambdaPropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaPropertyOutputReference {
    return new LambdaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#payload AwsBedrockagentcoreGatewayTarget#payload}
  */
  readonly payload: string;
}
export class TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload = value.payload;
    }
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}

export class TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyOutputReference {
    return new TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpMcpServerMcpToolSchemaS3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#bucket_owner_account_id AwsBedrockagentcoreGatewayTarget#bucket_owner_account_id}
  */
  readonly bucketOwnerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#uri AwsBedrockagentcoreGatewayTarget#uri}
  */
  readonly uri: string;
}
export class TargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpMcpServerMcpToolSchemaS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwnerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccountId = this._bucketOwnerAccountId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpMcpServerMcpToolSchemaS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketOwnerAccountId = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketOwnerAccountId = value.bucketOwnerAccountId;
      this._uri = value.uri;
    }
  }

  // bucket_owner_account_id - computed: false, optional: true, required: false
  private _bucketOwnerAccountId?: string; 
  public get bucketOwnerAccountId() {
    return this.getStringAttribute('bucket_owner_account_id');
  }
  public set bucketOwnerAccountId(value: string) {
    this._bucketOwnerAccountId = value;
  }
  public resetBucketOwnerAccountId() {
    this._bucketOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccountIdInput() {
    return this._bucketOwnerAccountId;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class TargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpMcpServerMcpToolSchemaS3Property[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyOutputReference {
    return new TargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface McpToolSchemaProperty {
  /**
  * inline_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#inline_payload AwsBedrockagentcoreGatewayTarget#inline_payload}
  */
  readonly inlinePayload?: TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadProperty[] | cdktn.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#s3 AwsBedrockagentcoreGatewayTarget#s3}
  */
  readonly s3?: TargetConfigurationMcpMcpServerMcpToolSchemaS3Property[] | cdktn.IResolvable;
}
export class McpToolSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): McpToolSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlinePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlinePayload = this._inlinePayload?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: McpToolSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlinePayload.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlinePayload.internalValue = value.inlinePayload;
      this._s3.internalValue = value.s3;
    }
  }

  // inline_payload - computed: false, optional: true, required: false
  private _inlinePayload = new TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadPropertyList(this, "inline_payload", false);
  public get inlinePayload() {
    return this._inlinePayload;
  }
  public putInlinePayload(value: TargetConfigurationMcpMcpServerMcpToolSchemaInlinePayloadProperty[] | cdktn.IResolvable) {
    this._inlinePayload.internalValue = value;
  }
  public resetInlinePayload() {
    this._inlinePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePayloadInput() {
    return this._inlinePayload.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TargetConfigurationMcpMcpServerMcpToolSchemaS3PropertyList(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: TargetConfigurationMcpMcpServerMcpToolSchemaS3Property[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class McpToolSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : McpToolSchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): McpToolSchemaPropertyOutputReference {
    return new McpToolSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface McpServerProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#endpoint AwsBedrockagentcoreGatewayTarget#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#listing_mode AwsBedrockagentcoreGatewayTarget#listing_mode}
  */
  readonly listingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#resource_priority AwsBedrockagentcoreGatewayTarget#resource_priority}
  */
  readonly resourcePriority?: number;
  /**
  * mcp_tool_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#mcp_tool_schema AwsBedrockagentcoreGatewayTarget#mcp_tool_schema}
  */
  readonly mcpToolSchema?: McpToolSchemaProperty[] | cdktn.IResolvable;
}
export class McpServerPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): McpServerProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._listingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.listingMode = this._listingMode;
    }
    if (this._resourcePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePriority = this._resourcePriority;
    }
    if (this._mcpToolSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpToolSchema = this._mcpToolSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: McpServerProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._listingMode = undefined;
      this._resourcePriority = undefined;
      this._mcpToolSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._listingMode = value.listingMode;
      this._resourcePriority = value.resourcePriority;
      this._mcpToolSchema.internalValue = value.mcpToolSchema;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // listing_mode - computed: true, optional: true, required: false
  private _listingMode?: string; 
  public get listingMode() {
    return this.getStringAttribute('listing_mode');
  }
  public set listingMode(value: string) {
    this._listingMode = value;
  }
  public resetListingMode() {
    this._listingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingModeInput() {
    return this._listingMode;
  }

  // resource_priority - computed: true, optional: true, required: false
  private _resourcePriority?: number; 
  public get resourcePriority() {
    return this.getNumberAttribute('resource_priority');
  }
  public set resourcePriority(value: number) {
    this._resourcePriority = value;
  }
  public resetResourcePriority() {
    this._resourcePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePriorityInput() {
    return this._resourcePriority;
  }

  // mcp_tool_schema - computed: false, optional: true, required: false
  private _mcpToolSchema = new McpToolSchemaPropertyList(this, "mcp_tool_schema", false);
  public get mcpToolSchema() {
    return this._mcpToolSchema;
  }
  public putMcpToolSchema(value: McpToolSchemaProperty[] | cdktn.IResolvable) {
    this._mcpToolSchema.internalValue = value;
  }
  public resetMcpToolSchema() {
    this._mcpToolSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpToolSchemaInput() {
    return this._mcpToolSchema.internalValue;
  }
}

export class McpServerPropertyList extends cdktn.ComplexList {
  public internalValue? : McpServerProperty[] | cdktn.IResolvable

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
  public get(index: number): McpServerPropertyOutputReference {
    return new McpServerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpOpenApiSchemaInlinePayloadProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#payload AwsBedrockagentcoreGatewayTarget#payload}
  */
  readonly payload: string;
}
export class TargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpOpenApiSchemaInlinePayloadProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpOpenApiSchemaInlinePayloadProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload = value.payload;
    }
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}

export class TargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpOpenApiSchemaInlinePayloadProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyOutputReference {
    return new TargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpOpenApiSchemaS3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#bucket_owner_account_id AwsBedrockagentcoreGatewayTarget#bucket_owner_account_id}
  */
  readonly bucketOwnerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#uri AwsBedrockagentcoreGatewayTarget#uri}
  */
  readonly uri?: string;
}
export class TargetConfigurationMcpOpenApiSchemaS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpOpenApiSchemaS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwnerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccountId = this._bucketOwnerAccountId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpOpenApiSchemaS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketOwnerAccountId = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketOwnerAccountId = value.bucketOwnerAccountId;
      this._uri = value.uri;
    }
  }

  // bucket_owner_account_id - computed: false, optional: true, required: false
  private _bucketOwnerAccountId?: string; 
  public get bucketOwnerAccountId() {
    return this.getStringAttribute('bucket_owner_account_id');
  }
  public set bucketOwnerAccountId(value: string) {
    this._bucketOwnerAccountId = value;
  }
  public resetBucketOwnerAccountId() {
    this._bucketOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccountIdInput() {
    return this._bucketOwnerAccountId;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class TargetConfigurationMcpOpenApiSchemaS3PropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpOpenApiSchemaS3Property[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpOpenApiSchemaS3PropertyOutputReference {
    return new TargetConfigurationMcpOpenApiSchemaS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenApiSchemaProperty {
  /**
  * inline_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#inline_payload AwsBedrockagentcoreGatewayTarget#inline_payload}
  */
  readonly inlinePayload?: TargetConfigurationMcpOpenApiSchemaInlinePayloadProperty[] | cdktn.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#s3 AwsBedrockagentcoreGatewayTarget#s3}
  */
  readonly s3?: TargetConfigurationMcpOpenApiSchemaS3Property[] | cdktn.IResolvable;
}
export class OpenApiSchemaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenApiSchemaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlinePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlinePayload = this._inlinePayload?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenApiSchemaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlinePayload.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlinePayload.internalValue = value.inlinePayload;
      this._s3.internalValue = value.s3;
    }
  }

  // inline_payload - computed: false, optional: true, required: false
  private _inlinePayload = new TargetConfigurationMcpOpenApiSchemaInlinePayloadPropertyList(this, "inline_payload", false);
  public get inlinePayload() {
    return this._inlinePayload;
  }
  public putInlinePayload(value: TargetConfigurationMcpOpenApiSchemaInlinePayloadProperty[] | cdktn.IResolvable) {
    this._inlinePayload.internalValue = value;
  }
  public resetInlinePayload() {
    this._inlinePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePayloadInput() {
    return this._inlinePayload.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TargetConfigurationMcpOpenApiSchemaS3PropertyList(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: TargetConfigurationMcpOpenApiSchemaS3Property[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class OpenApiSchemaPropertyList extends cdktn.ComplexList {
  public internalValue? : OpenApiSchemaProperty[] | cdktn.IResolvable

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
  public get(index: number): OpenApiSchemaPropertyOutputReference {
    return new OpenApiSchemaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpSmithyModelInlinePayloadProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#payload AwsBedrockagentcoreGatewayTarget#payload}
  */
  readonly payload: string;
}
export class TargetConfigurationMcpSmithyModelInlinePayloadPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpSmithyModelInlinePayloadProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpSmithyModelInlinePayloadProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload = value.payload;
    }
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}

export class TargetConfigurationMcpSmithyModelInlinePayloadPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpSmithyModelInlinePayloadProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpSmithyModelInlinePayloadPropertyOutputReference {
    return new TargetConfigurationMcpSmithyModelInlinePayloadPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationMcpSmithyModelS3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#bucket_owner_account_id AwsBedrockagentcoreGatewayTarget#bucket_owner_account_id}
  */
  readonly bucketOwnerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#uri AwsBedrockagentcoreGatewayTarget#uri}
  */
  readonly uri?: string;
}
export class TargetConfigurationMcpSmithyModelS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationMcpSmithyModelS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwnerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccountId = this._bucketOwnerAccountId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationMcpSmithyModelS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketOwnerAccountId = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketOwnerAccountId = value.bucketOwnerAccountId;
      this._uri = value.uri;
    }
  }

  // bucket_owner_account_id - computed: false, optional: true, required: false
  private _bucketOwnerAccountId?: string; 
  public get bucketOwnerAccountId() {
    return this.getStringAttribute('bucket_owner_account_id');
  }
  public set bucketOwnerAccountId(value: string) {
    this._bucketOwnerAccountId = value;
  }
  public resetBucketOwnerAccountId() {
    this._bucketOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccountIdInput() {
    return this._bucketOwnerAccountId;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class TargetConfigurationMcpSmithyModelS3PropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationMcpSmithyModelS3Property[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationMcpSmithyModelS3PropertyOutputReference {
    return new TargetConfigurationMcpSmithyModelS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmithyModelProperty {
  /**
  * inline_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#inline_payload AwsBedrockagentcoreGatewayTarget#inline_payload}
  */
  readonly inlinePayload?: TargetConfigurationMcpSmithyModelInlinePayloadProperty[] | cdktn.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#s3 AwsBedrockagentcoreGatewayTarget#s3}
  */
  readonly s3?: TargetConfigurationMcpSmithyModelS3Property[] | cdktn.IResolvable;
}
export class SmithyModelPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SmithyModelProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlinePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlinePayload = this._inlinePayload?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmithyModelProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlinePayload.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlinePayload.internalValue = value.inlinePayload;
      this._s3.internalValue = value.s3;
    }
  }

  // inline_payload - computed: false, optional: true, required: false
  private _inlinePayload = new TargetConfigurationMcpSmithyModelInlinePayloadPropertyList(this, "inline_payload", false);
  public get inlinePayload() {
    return this._inlinePayload;
  }
  public putInlinePayload(value: TargetConfigurationMcpSmithyModelInlinePayloadProperty[] | cdktn.IResolvable) {
    this._inlinePayload.internalValue = value;
  }
  public resetInlinePayload() {
    this._inlinePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePayloadInput() {
    return this._inlinePayload.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TargetConfigurationMcpSmithyModelS3PropertyList(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: TargetConfigurationMcpSmithyModelS3Property[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class SmithyModelPropertyList extends cdktn.ComplexList {
  public internalValue? : SmithyModelProperty[] | cdktn.IResolvable

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
  public get(index: number): SmithyModelPropertyOutputReference {
    return new SmithyModelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface McpProperty {
  /**
  * api_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#api_gateway AwsBedrockagentcoreGatewayTarget#api_gateway}
  */
  readonly apiGateway?: ApiGatewayProperty[] | cdktn.IResolvable;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#lambda AwsBedrockagentcoreGatewayTarget#lambda}
  */
  readonly lambda?: LambdaProperty[] | cdktn.IResolvable;
  /**
  * mcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#mcp_server AwsBedrockagentcoreGatewayTarget#mcp_server}
  */
  readonly mcpServer?: McpServerProperty[] | cdktn.IResolvable;
  /**
  * open_api_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#open_api_schema AwsBedrockagentcoreGatewayTarget#open_api_schema}
  */
  readonly openApiSchema?: OpenApiSchemaProperty[] | cdktn.IResolvable;
  /**
  * smithy_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#smithy_model AwsBedrockagentcoreGatewayTarget#smithy_model}
  */
  readonly smithyModel?: SmithyModelProperty[] | cdktn.IResolvable;
}
export class McpPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): McpProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGateway = this._apiGateway?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._mcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServer = this._mcpServer?.internalValue;
    }
    if (this._openApiSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiSchema = this._openApiSchema?.internalValue;
    }
    if (this._smithyModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smithyModel = this._smithyModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: McpProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGateway.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._mcpServer.internalValue = undefined;
      this._openApiSchema.internalValue = undefined;
      this._smithyModel.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGateway.internalValue = value.apiGateway;
      this._lambda.internalValue = value.lambda;
      this._mcpServer.internalValue = value.mcpServer;
      this._openApiSchema.internalValue = value.openApiSchema;
      this._smithyModel.internalValue = value.smithyModel;
    }
  }

  // api_gateway - computed: false, optional: true, required: false
  private _apiGateway = new ApiGatewayPropertyList(this, "api_gateway", false);
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: ApiGatewayProperty[] | cdktn.IResolvable) {
    this._apiGateway.internalValue = value;
  }
  public resetApiGateway() {
    this._apiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new LambdaPropertyList(this, "lambda", false);
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: LambdaProperty[] | cdktn.IResolvable) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // mcp_server - computed: false, optional: true, required: false
  private _mcpServer = new McpServerPropertyList(this, "mcp_server", false);
  public get mcpServer() {
    return this._mcpServer;
  }
  public putMcpServer(value: McpServerProperty[] | cdktn.IResolvable) {
    this._mcpServer.internalValue = value;
  }
  public resetMcpServer() {
    this._mcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerInput() {
    return this._mcpServer.internalValue;
  }

  // open_api_schema - computed: false, optional: true, required: false
  private _openApiSchema = new OpenApiSchemaPropertyList(this, "open_api_schema", false);
  public get openApiSchema() {
    return this._openApiSchema;
  }
  public putOpenApiSchema(value: OpenApiSchemaProperty[] | cdktn.IResolvable) {
    this._openApiSchema.internalValue = value;
  }
  public resetOpenApiSchema() {
    this._openApiSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiSchemaInput() {
    return this._openApiSchema.internalValue;
  }

  // smithy_model - computed: false, optional: true, required: false
  private _smithyModel = new SmithyModelPropertyList(this, "smithy_model", false);
  public get smithyModel() {
    return this._smithyModel;
  }
  public putSmithyModel(value: SmithyModelProperty[] | cdktn.IResolvable) {
    this._smithyModel.internalValue = value;
  }
  public resetSmithyModel() {
    this._smithyModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smithyModelInput() {
    return this._smithyModel.internalValue;
  }
}

export class McpPropertyList extends cdktn.ComplexList {
  public internalValue? : McpProperty[] | cdktn.IResolvable

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
  public get(index: number): McpPropertyOutputReference {
    return new McpPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetConfigurationProperty {
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#http AwsBedrockagentcoreGatewayTarget#http}
  */
  readonly http?: HttpProperty[] | cdktn.IResolvable;
  /**
  * mcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#mcp AwsBedrockagentcoreGatewayTarget#mcp}
  */
  readonly mcp?: McpProperty[] | cdktn.IResolvable;
}
export class TargetConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._mcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcp = this._mcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._mcp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._mcp.internalValue = value.mcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new HttpPropertyList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: HttpProperty[] | cdktn.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // mcp - computed: false, optional: true, required: false
  private _mcp = new McpPropertyList(this, "mcp", false);
  public get mcp() {
    return this._mcp;
  }
  public putMcp(value: McpProperty[] | cdktn.IResolvable) {
    this._mcp.internalValue = value;
  }
  public resetMcp() {
    this._mcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpInput() {
    return this._mcp.internalValue;
  }
}

export class TargetConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetConfigurationPropertyOutputReference {
    return new TargetConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#create AwsBedrockagentcoreGatewayTarget#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#delete AwsBedrockagentcoreGatewayTarget#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_target#update AwsBedrockagentcoreGatewayTarget#update}
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
