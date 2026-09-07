// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#authorization_type AwsConnection#authorization_type}
  */
  readonly authorizationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#description AwsConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#id AwsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#kms_key_identifier AwsConnection#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#name AwsConnection#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#region AwsConnection#region}
  */
  readonly region?: string;
  /**
  * auth_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#auth_parameters AwsConnection#auth_parameters}
  */
  readonly authParameters: AwsConnection.AuthParametersProperty;
  /**
  * invocation_connectivity_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#invocation_connectivity_parameters AwsConnection#invocation_connectivity_parameters}
  */
  readonly invocationConnectivityParameters?: AwsConnection.InvocationConnectivityParametersProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection aws_cloudwatch_event_connection}
*/
export class AwsConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_event_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConnection to import
  * @param importFromId The id of the existing AwsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_event_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection aws_cloudwatch_event_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_connection',
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
    this._authorizationType = config.authorizationType;
    this._description = config.description;
    this._id = config.id;
    this._kmsKeyIdentifier = config.kmsKeyIdentifier;
    this._name = config.name;
    this._region = config.region;
    this._authParameters.internalValue = config.authParameters;
    this._invocationConnectivityParameters.internalValue = config.invocationConnectivityParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorization_type - computed: false, optional: false, required: true
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
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

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // auth_parameters - computed: false, optional: false, required: true
  private _authParameters = new AwsConnection.AuthParametersPropertyOutputReference(this, "auth_parameters");
  public get authParameters() {
    return this._authParameters;
  }
  public putAuthParameters(value: AwsConnection.AuthParametersProperty) {
    this._authParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authParametersInput() {
    return this._authParameters.internalValue;
  }

  // invocation_connectivity_parameters - computed: false, optional: true, required: false
  private _invocationConnectivityParameters = new AwsConnection.InvocationConnectivityParametersPropertyOutputReference(this, "invocation_connectivity_parameters");
  public get invocationConnectivityParameters() {
    return this._invocationConnectivityParameters;
  }
  public putInvocationConnectivityParameters(value: AwsConnection.InvocationConnectivityParametersProperty) {
    this._invocationConnectivityParameters.internalValue = value;
  }
  public resetInvocationConnectivityParameters() {
    this._invocationConnectivityParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConnectivityParametersInput() {
    return this._invocationConnectivityParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_type: cdktn.stringToTerraform(this._authorizationType),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      auth_parameters: awsConnectionAuthParametersPropertyToTerraform(this._authParameters.internalValue),
      invocation_connectivity_parameters: awsConnectionInvocationConnectivityParametersPropertyToTerraform(this._invocationConnectivityParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_type: {
        value: cdktn.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      kms_key_identifier: {
        value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
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
      auth_parameters: {
        value: awsConnectionAuthParametersPropertyToHclTerraform(this._authParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnection.AuthParametersPropertyList",
      },
      invocation_connectivity_parameters: {
        value: awsConnectionInvocationConnectivityParametersPropertyToHclTerraform(this._invocationConnectivityParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnection.InvocationConnectivityParametersPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsConnectionApiKeyPropertyToTerraform(struct?: AwsConnection.ApiKeyPropertyOutputReference | AwsConnection.ApiKeyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsConnectionApiKeyPropertyToHclTerraform(struct?: AwsConnection.ApiKeyPropertyOutputReference | AwsConnection.ApiKeyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionBasicPropertyToTerraform(struct?: AwsConnection.BasicPropertyOutputReference | AwsConnection.BasicProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function awsConnectionBasicPropertyToHclTerraform(struct?: AwsConnection.BasicPropertyOutputReference | AwsConnection.BasicProperty): any {
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


export function awsConnectionAuthParametersConnectivityParametersResourceParametersPropertyToTerraform(struct?: AwsConnection.AuthParametersConnectivityParametersResourceParametersPropertyOutputReference | AwsConnection.AuthParametersConnectivityParametersResourceParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_arn: cdktn.stringToTerraform(struct!.resourceConfigurationArn),
  }
}


export function awsConnectionAuthParametersConnectivityParametersResourceParametersPropertyToHclTerraform(struct?: AwsConnection.AuthParametersConnectivityParametersResourceParametersPropertyOutputReference | AwsConnection.AuthParametersConnectivityParametersResourceParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionConnectivityParametersPropertyToTerraform(struct?: AwsConnection.ConnectivityParametersPropertyOutputReference | AwsConnection.ConnectivityParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_parameters: awsConnectionAuthParametersConnectivityParametersResourceParametersPropertyToTerraform(struct!.resourceParameters),
  }
}


export function awsConnectionConnectivityParametersPropertyToHclTerraform(struct?: AwsConnection.ConnectivityParametersPropertyOutputReference | AwsConnection.ConnectivityParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_parameters: {
      value: awsConnectionAuthParametersConnectivityParametersResourceParametersPropertyToHclTerraform(struct!.resourceParameters),
      isBlock: true,
      type: "list",
      storageClassType: "AuthParametersConnectivityParametersResourceParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionAuthParametersInvocationHttpParametersBodyPropertyToTerraform(struct?: AwsConnection.AuthParametersInvocationHttpParametersBodyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsConnectionAuthParametersInvocationHttpParametersBodyPropertyToHclTerraform(struct?: AwsConnection.AuthParametersInvocationHttpParametersBodyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionAuthParametersInvocationHttpParametersHeaderPropertyToTerraform(struct?: AwsConnection.AuthParametersInvocationHttpParametersHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsConnectionAuthParametersInvocationHttpParametersHeaderPropertyToHclTerraform(struct?: AwsConnection.AuthParametersInvocationHttpParametersHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionAuthParametersInvocationHttpParametersQueryStringPropertyToTerraform(struct?: AwsConnection.AuthParametersInvocationHttpParametersQueryStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsConnectionAuthParametersInvocationHttpParametersQueryStringPropertyToHclTerraform(struct?: AwsConnection.AuthParametersInvocationHttpParametersQueryStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionInvocationHttpParametersPropertyToTerraform(struct?: AwsConnection.InvocationHttpParametersPropertyOutputReference | AwsConnection.InvocationHttpParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body: cdktn.listMapper(awsConnectionAuthParametersInvocationHttpParametersBodyPropertyToTerraform, true)(struct!.body),
    header: cdktn.listMapper(awsConnectionAuthParametersInvocationHttpParametersHeaderPropertyToTerraform, true)(struct!.header),
    query_string: cdktn.listMapper(awsConnectionAuthParametersInvocationHttpParametersQueryStringPropertyToTerraform, true)(struct!.queryString),
  }
}


export function awsConnectionInvocationHttpParametersPropertyToHclTerraform(struct?: AwsConnection.InvocationHttpParametersPropertyOutputReference | AwsConnection.InvocationHttpParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body: {
      value: cdktn.listMapperHcl(awsConnectionAuthParametersInvocationHttpParametersBodyPropertyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "AuthParametersInvocationHttpParametersBodyPropertyList",
    },
    header: {
      value: cdktn.listMapperHcl(awsConnectionAuthParametersInvocationHttpParametersHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "AuthParametersInvocationHttpParametersHeaderPropertyList",
    },
    query_string: {
      value: cdktn.listMapperHcl(awsConnectionAuthParametersInvocationHttpParametersQueryStringPropertyToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "AuthParametersInvocationHttpParametersQueryStringPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionClientParametersPropertyToTerraform(struct?: AwsConnection.ClientParametersPropertyOutputReference | AwsConnection.ClientParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function awsConnectionClientParametersPropertyToHclTerraform(struct?: AwsConnection.ClientParametersPropertyOutputReference | AwsConnection.ClientParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionAuthParametersOauthOauthHttpParametersBodyPropertyToTerraform(struct?: AwsConnection.AuthParametersOauthOauthHttpParametersBodyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsConnectionAuthParametersOauthOauthHttpParametersBodyPropertyToHclTerraform(struct?: AwsConnection.AuthParametersOauthOauthHttpParametersBodyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionAuthParametersOauthOauthHttpParametersHeaderPropertyToTerraform(struct?: AwsConnection.AuthParametersOauthOauthHttpParametersHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsConnectionAuthParametersOauthOauthHttpParametersHeaderPropertyToHclTerraform(struct?: AwsConnection.AuthParametersOauthOauthHttpParametersHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionAuthParametersOauthOauthHttpParametersQueryStringPropertyToTerraform(struct?: AwsConnection.AuthParametersOauthOauthHttpParametersQueryStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsConnectionAuthParametersOauthOauthHttpParametersQueryStringPropertyToHclTerraform(struct?: AwsConnection.AuthParametersOauthOauthHttpParametersQueryStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionOauthHttpParametersPropertyToTerraform(struct?: AwsConnection.OauthHttpParametersPropertyOutputReference | AwsConnection.OauthHttpParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body: cdktn.listMapper(awsConnectionAuthParametersOauthOauthHttpParametersBodyPropertyToTerraform, true)(struct!.body),
    header: cdktn.listMapper(awsConnectionAuthParametersOauthOauthHttpParametersHeaderPropertyToTerraform, true)(struct!.header),
    query_string: cdktn.listMapper(awsConnectionAuthParametersOauthOauthHttpParametersQueryStringPropertyToTerraform, true)(struct!.queryString),
  }
}


export function awsConnectionOauthHttpParametersPropertyToHclTerraform(struct?: AwsConnection.OauthHttpParametersPropertyOutputReference | AwsConnection.OauthHttpParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body: {
      value: cdktn.listMapperHcl(awsConnectionAuthParametersOauthOauthHttpParametersBodyPropertyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "AuthParametersOauthOauthHttpParametersBodyPropertyList",
    },
    header: {
      value: cdktn.listMapperHcl(awsConnectionAuthParametersOauthOauthHttpParametersHeaderPropertyToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "AuthParametersOauthOauthHttpParametersHeaderPropertyList",
    },
    query_string: {
      value: cdktn.listMapperHcl(awsConnectionAuthParametersOauthOauthHttpParametersQueryStringPropertyToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "AuthParametersOauthOauthHttpParametersQueryStringPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionOauthPropertyToTerraform(struct?: AwsConnection.OauthPropertyOutputReference | AwsConnection.OauthProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    http_method: cdktn.stringToTerraform(struct!.httpMethod),
    client_parameters: awsConnectionClientParametersPropertyToTerraform(struct!.clientParameters),
    oauth_http_parameters: awsConnectionOauthHttpParametersPropertyToTerraform(struct!.oauthHttpParameters),
  }
}


export function awsConnectionOauthPropertyToHclTerraform(struct?: AwsConnection.OauthPropertyOutputReference | AwsConnection.OauthProperty): any {
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
    http_method: {
      value: cdktn.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_parameters: {
      value: awsConnectionClientParametersPropertyToHclTerraform(struct!.clientParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ClientParametersPropertyList",
    },
    oauth_http_parameters: {
      value: awsConnectionOauthHttpParametersPropertyToHclTerraform(struct!.oauthHttpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "OauthHttpParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionAuthParametersPropertyToTerraform(struct?: AwsConnection.AuthParametersPropertyOutputReference | AwsConnection.AuthParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: awsConnectionApiKeyPropertyToTerraform(struct!.apiKey),
    basic: awsConnectionBasicPropertyToTerraform(struct!.basic),
    connectivity_parameters: awsConnectionConnectivityParametersPropertyToTerraform(struct!.connectivityParameters),
    invocation_http_parameters: awsConnectionInvocationHttpParametersPropertyToTerraform(struct!.invocationHttpParameters),
    oauth: awsConnectionOauthPropertyToTerraform(struct!.oauth),
  }
}


export function awsConnectionAuthParametersPropertyToHclTerraform(struct?: AwsConnection.AuthParametersPropertyOutputReference | AwsConnection.AuthParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: awsConnectionApiKeyPropertyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApiKeyPropertyList",
    },
    basic: {
      value: awsConnectionBasicPropertyToHclTerraform(struct!.basic),
      isBlock: true,
      type: "list",
      storageClassType: "BasicPropertyList",
    },
    connectivity_parameters: {
      value: awsConnectionConnectivityParametersPropertyToHclTerraform(struct!.connectivityParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectivityParametersPropertyList",
    },
    invocation_http_parameters: {
      value: awsConnectionInvocationHttpParametersPropertyToHclTerraform(struct!.invocationHttpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "InvocationHttpParametersPropertyList",
    },
    oauth: {
      value: awsConnectionOauthPropertyToHclTerraform(struct!.oauth),
      isBlock: true,
      type: "list",
      storageClassType: "OauthPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionInvocationConnectivityParametersResourceParametersPropertyToTerraform(struct?: AwsConnection.InvocationConnectivityParametersResourceParametersPropertyOutputReference | AwsConnection.InvocationConnectivityParametersResourceParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_arn: cdktn.stringToTerraform(struct!.resourceConfigurationArn),
  }
}


export function awsConnectionInvocationConnectivityParametersResourceParametersPropertyToHclTerraform(struct?: AwsConnection.InvocationConnectivityParametersResourceParametersPropertyOutputReference | AwsConnection.InvocationConnectivityParametersResourceParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsConnectionInvocationConnectivityParametersPropertyToTerraform(struct?: AwsConnection.InvocationConnectivityParametersPropertyOutputReference | AwsConnection.InvocationConnectivityParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_parameters: awsConnectionInvocationConnectivityParametersResourceParametersPropertyToTerraform(struct!.resourceParameters),
  }
}


export function awsConnectionInvocationConnectivityParametersPropertyToHclTerraform(struct?: AwsConnection.InvocationConnectivityParametersPropertyOutputReference | AwsConnection.InvocationConnectivityParametersProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_parameters: {
      value: awsConnectionInvocationConnectivityParametersResourceParametersPropertyToHclTerraform(struct!.resourceParameters),
      isBlock: true,
      type: "list",
      storageClassType: "InvocationConnectivityParametersResourceParametersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsConnection {
export interface ApiKeyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#key AwsConnection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#value AwsConnection#value}
  */
  readonly value: string;
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
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiKeyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BasicProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#password AwsConnection#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#username AwsConnection#username}
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
export interface AuthParametersConnectivityParametersResourceParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#resource_configuration_arn AwsConnection#resource_configuration_arn}
  */
  readonly resourceConfigurationArn: string;
}
export class AuthParametersConnectivityParametersResourceParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthParametersConnectivityParametersResourceParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationArn = this._resourceConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthParametersConnectivityParametersResourceParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceConfigurationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceConfigurationArn = value.resourceConfigurationArn;
    }
  }

  // resource_association_arn - computed: true, optional: false, required: false
  public get resourceAssociationArn() {
    return this.getStringAttribute('resource_association_arn');
  }

  // resource_configuration_arn - computed: false, optional: false, required: true
  private _resourceConfigurationArn?: string; 
  public get resourceConfigurationArn() {
    return this.getStringAttribute('resource_configuration_arn');
  }
  public set resourceConfigurationArn(value: string) {
    this._resourceConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationArnInput() {
    return this._resourceConfigurationArn;
  }
}
export interface ConnectivityParametersProperty {
  /**
  * resource_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#resource_parameters AwsConnection#resource_parameters}
  */
  readonly resourceParameters: AuthParametersConnectivityParametersResourceParametersProperty;
}
export class ConnectivityParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectivityParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceParameters = this._resourceParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectivityParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceParameters.internalValue = value.resourceParameters;
    }
  }

  // resource_parameters - computed: false, optional: false, required: true
  private _resourceParameters = new AuthParametersConnectivityParametersResourceParametersPropertyOutputReference(this, "resource_parameters");
  public get resourceParameters() {
    return this._resourceParameters;
  }
  public putResourceParameters(value: AuthParametersConnectivityParametersResourceParametersProperty) {
    this._resourceParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceParametersInput() {
    return this._resourceParameters.internalValue;
  }
}
export interface AuthParametersInvocationHttpParametersBodyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#is_value_secret AwsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#key AwsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#value AwsConnection#value}
  */
  readonly value?: string;
}
export class AuthParametersInvocationHttpParametersBodyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthParametersInvocationHttpParametersBodyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthParametersInvocationHttpParametersBodyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AuthParametersInvocationHttpParametersBodyPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthParametersInvocationHttpParametersBodyProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthParametersInvocationHttpParametersBodyPropertyOutputReference {
    return new AuthParametersInvocationHttpParametersBodyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthParametersInvocationHttpParametersHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#is_value_secret AwsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#key AwsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#value AwsConnection#value}
  */
  readonly value?: string;
}
export class AuthParametersInvocationHttpParametersHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthParametersInvocationHttpParametersHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthParametersInvocationHttpParametersHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AuthParametersInvocationHttpParametersHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthParametersInvocationHttpParametersHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthParametersInvocationHttpParametersHeaderPropertyOutputReference {
    return new AuthParametersInvocationHttpParametersHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthParametersInvocationHttpParametersQueryStringProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#is_value_secret AwsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#key AwsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#value AwsConnection#value}
  */
  readonly value?: string;
}
export class AuthParametersInvocationHttpParametersQueryStringPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthParametersInvocationHttpParametersQueryStringProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthParametersInvocationHttpParametersQueryStringProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AuthParametersInvocationHttpParametersQueryStringPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthParametersInvocationHttpParametersQueryStringProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthParametersInvocationHttpParametersQueryStringPropertyOutputReference {
    return new AuthParametersInvocationHttpParametersQueryStringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InvocationHttpParametersProperty {
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#body AwsConnection#body}
  */
  readonly body?: AuthParametersInvocationHttpParametersBodyProperty[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#header AwsConnection#header}
  */
  readonly header?: AuthParametersInvocationHttpParametersHeaderProperty[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#query_string AwsConnection#query_string}
  */
  readonly queryString?: AuthParametersInvocationHttpParametersQueryStringProperty[] | cdktn.IResolvable;
}
export class InvocationHttpParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InvocationHttpParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InvocationHttpParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body.internalValue = undefined;
      this._header.internalValue = undefined;
      this._queryString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body.internalValue = value.body;
      this._header.internalValue = value.header;
      this._queryString.internalValue = value.queryString;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new AuthParametersInvocationHttpParametersBodyPropertyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: AuthParametersInvocationHttpParametersBodyProperty[] | cdktn.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new AuthParametersInvocationHttpParametersHeaderPropertyList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: AuthParametersInvocationHttpParametersHeaderProperty[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new AuthParametersInvocationHttpParametersQueryStringPropertyList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: AuthParametersInvocationHttpParametersQueryStringProperty[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}
export interface ClientParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#client_id AwsConnection#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#client_secret AwsConnection#client_secret}
  */
  readonly clientSecret: string;
}
export class ClientParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClientParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClientParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
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
}
export interface AuthParametersOauthOauthHttpParametersBodyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#is_value_secret AwsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#key AwsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#value AwsConnection#value}
  */
  readonly value?: string;
}
export class AuthParametersOauthOauthHttpParametersBodyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthParametersOauthOauthHttpParametersBodyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthParametersOauthOauthHttpParametersBodyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AuthParametersOauthOauthHttpParametersBodyPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthParametersOauthOauthHttpParametersBodyProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthParametersOauthOauthHttpParametersBodyPropertyOutputReference {
    return new AuthParametersOauthOauthHttpParametersBodyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthParametersOauthOauthHttpParametersHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#is_value_secret AwsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#key AwsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#value AwsConnection#value}
  */
  readonly value?: string;
}
export class AuthParametersOauthOauthHttpParametersHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthParametersOauthOauthHttpParametersHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthParametersOauthOauthHttpParametersHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AuthParametersOauthOauthHttpParametersHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthParametersOauthOauthHttpParametersHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthParametersOauthOauthHttpParametersHeaderPropertyOutputReference {
    return new AuthParametersOauthOauthHttpParametersHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthParametersOauthOauthHttpParametersQueryStringProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#is_value_secret AwsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#key AwsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#value AwsConnection#value}
  */
  readonly value?: string;
}
export class AuthParametersOauthOauthHttpParametersQueryStringPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AuthParametersOauthOauthHttpParametersQueryStringProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthParametersOauthOauthHttpParametersQueryStringProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AuthParametersOauthOauthHttpParametersQueryStringPropertyList extends cdktn.ComplexList {
  public internalValue? : AuthParametersOauthOauthHttpParametersQueryStringProperty[] | cdktn.IResolvable

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
  public get(index: number): AuthParametersOauthOauthHttpParametersQueryStringPropertyOutputReference {
    return new AuthParametersOauthOauthHttpParametersQueryStringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthHttpParametersProperty {
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#body AwsConnection#body}
  */
  readonly body?: AuthParametersOauthOauthHttpParametersBodyProperty[] | cdktn.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#header AwsConnection#header}
  */
  readonly header?: AuthParametersOauthOauthHttpParametersHeaderProperty[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#query_string AwsConnection#query_string}
  */
  readonly queryString?: AuthParametersOauthOauthHttpParametersQueryStringProperty[] | cdktn.IResolvable;
}
export class OauthHttpParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OauthHttpParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthHttpParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body.internalValue = undefined;
      this._header.internalValue = undefined;
      this._queryString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body.internalValue = value.body;
      this._header.internalValue = value.header;
      this._queryString.internalValue = value.queryString;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new AuthParametersOauthOauthHttpParametersBodyPropertyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: AuthParametersOauthOauthHttpParametersBodyProperty[] | cdktn.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new AuthParametersOauthOauthHttpParametersHeaderPropertyList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: AuthParametersOauthOauthHttpParametersHeaderProperty[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new AuthParametersOauthOauthHttpParametersQueryStringPropertyList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: AuthParametersOauthOauthHttpParametersQueryStringProperty[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}
export interface OauthProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#authorization_endpoint AwsConnection#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#http_method AwsConnection#http_method}
  */
  readonly httpMethod: string;
  /**
  * client_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#client_parameters AwsConnection#client_parameters}
  */
  readonly clientParameters?: ClientParametersProperty;
  /**
  * oauth_http_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#oauth_http_parameters AwsConnection#oauth_http_parameters}
  */
  readonly oauthHttpParameters: OauthHttpParametersProperty;
}
export class OauthPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OauthProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._clientParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientParameters = this._clientParameters?.internalValue;
    }
    if (this._oauthHttpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthHttpParameters = this._oauthHttpParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationEndpoint = undefined;
      this._httpMethod = undefined;
      this._clientParameters.internalValue = undefined;
      this._oauthHttpParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._httpMethod = value.httpMethod;
      this._clientParameters.internalValue = value.clientParameters;
      this._oauthHttpParameters.internalValue = value.oauthHttpParameters;
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

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // client_parameters - computed: false, optional: true, required: false
  private _clientParameters = new ClientParametersPropertyOutputReference(this, "client_parameters");
  public get clientParameters() {
    return this._clientParameters;
  }
  public putClientParameters(value: ClientParametersProperty) {
    this._clientParameters.internalValue = value;
  }
  public resetClientParameters() {
    this._clientParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientParametersInput() {
    return this._clientParameters.internalValue;
  }

  // oauth_http_parameters - computed: false, optional: false, required: true
  private _oauthHttpParameters = new OauthHttpParametersPropertyOutputReference(this, "oauth_http_parameters");
  public get oauthHttpParameters() {
    return this._oauthHttpParameters;
  }
  public putOauthHttpParameters(value: OauthHttpParametersProperty) {
    this._oauthHttpParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthHttpParametersInput() {
    return this._oauthHttpParameters.internalValue;
  }
}
export interface AuthParametersProperty {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#api_key AwsConnection#api_key}
  */
  readonly apiKey?: ApiKeyProperty;
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#basic AwsConnection#basic}
  */
  readonly basic?: BasicProperty;
  /**
  * connectivity_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#connectivity_parameters AwsConnection#connectivity_parameters}
  */
  readonly connectivityParameters?: ConnectivityParametersProperty;
  /**
  * invocation_http_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#invocation_http_parameters AwsConnection#invocation_http_parameters}
  */
  readonly invocationHttpParameters?: InvocationHttpParametersProperty;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#oauth AwsConnection#oauth}
  */
  readonly oauth?: OauthProperty;
}
export class AuthParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._connectivityParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityParameters = this._connectivityParameters?.internalValue;
    }
    if (this._invocationHttpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationHttpParameters = this._invocationHttpParameters?.internalValue;
    }
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey.internalValue = undefined;
      this._basic.internalValue = undefined;
      this._connectivityParameters.internalValue = undefined;
      this._invocationHttpParameters.internalValue = undefined;
      this._oauth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey.internalValue = value.apiKey;
      this._basic.internalValue = value.basic;
      this._connectivityParameters.internalValue = value.connectivityParameters;
      this._invocationHttpParameters.internalValue = value.invocationHttpParameters;
      this._oauth.internalValue = value.oauth;
    }
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

  // connectivity_parameters - computed: false, optional: true, required: false
  private _connectivityParameters = new ConnectivityParametersPropertyOutputReference(this, "connectivity_parameters");
  public get connectivityParameters() {
    return this._connectivityParameters;
  }
  public putConnectivityParameters(value: ConnectivityParametersProperty) {
    this._connectivityParameters.internalValue = value;
  }
  public resetConnectivityParameters() {
    this._connectivityParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityParametersInput() {
    return this._connectivityParameters.internalValue;
  }

  // invocation_http_parameters - computed: false, optional: true, required: false
  private _invocationHttpParameters = new InvocationHttpParametersPropertyOutputReference(this, "invocation_http_parameters");
  public get invocationHttpParameters() {
    return this._invocationHttpParameters;
  }
  public putInvocationHttpParameters(value: InvocationHttpParametersProperty) {
    this._invocationHttpParameters.internalValue = value;
  }
  public resetInvocationHttpParameters() {
    this._invocationHttpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationHttpParametersInput() {
    return this._invocationHttpParameters.internalValue;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new OauthPropertyOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: OauthProperty) {
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
export interface InvocationConnectivityParametersResourceParametersProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#resource_configuration_arn AwsConnection#resource_configuration_arn}
  */
  readonly resourceConfigurationArn: string;
}
export class InvocationConnectivityParametersResourceParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InvocationConnectivityParametersResourceParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationArn = this._resourceConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InvocationConnectivityParametersResourceParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceConfigurationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceConfigurationArn = value.resourceConfigurationArn;
    }
  }

  // resource_association_arn - computed: true, optional: false, required: false
  public get resourceAssociationArn() {
    return this.getStringAttribute('resource_association_arn');
  }

  // resource_configuration_arn - computed: false, optional: false, required: true
  private _resourceConfigurationArn?: string; 
  public get resourceConfigurationArn() {
    return this.getStringAttribute('resource_configuration_arn');
  }
  public set resourceConfigurationArn(value: string) {
    this._resourceConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationArnInput() {
    return this._resourceConfigurationArn;
  }
}
export interface InvocationConnectivityParametersProperty {
  /**
  * resource_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_event_connection#resource_parameters AwsConnection#resource_parameters}
  */
  readonly resourceParameters: InvocationConnectivityParametersResourceParametersProperty;
}
export class InvocationConnectivityParametersPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InvocationConnectivityParametersProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceParameters = this._resourceParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InvocationConnectivityParametersProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceParameters.internalValue = value.resourceParameters;
    }
  }

  // resource_parameters - computed: false, optional: false, required: true
  private _resourceParameters = new InvocationConnectivityParametersResourceParametersPropertyOutputReference(this, "resource_parameters");
  public get resourceParameters() {
    return this._resourceParameters;
  }
  public putResourceParameters(value: InvocationConnectivityParametersResourceParametersProperty) {
    this._resourceParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceParametersInput() {
    return this._resourceParameters.internalValue;
  }
}
}
