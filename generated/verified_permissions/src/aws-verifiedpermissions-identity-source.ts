// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsIdentitySourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#policy_store_id AwsIdentitySource#policy_store_id}
  */
  readonly policyStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#principal_entity_type AwsIdentitySource#principal_entity_type}
  */
  readonly principalEntityType?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#region AwsIdentitySource#region}
  */
  readonly region?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#configuration AwsIdentitySource#configuration}
  */
  readonly configuration?: AwsIdentitySource.ConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source aws_verifiedpermissions_identity_source}
*/
export class AwsIdentitySource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedpermissions_identity_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsIdentitySource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsIdentitySource to import
  * @param importFromId The id of the existing AwsIdentitySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsIdentitySource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedpermissions_identity_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source aws_verifiedpermissions_identity_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsIdentitySourceConfig
  */
  public constructor(scope: Construct, id: string, config: AwsIdentitySourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedpermissions_identity_source',
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
    this._policyStoreId = config.policyStoreId;
    this._principalEntityType = config.principalEntityType;
    this._region = config.region;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_store_id - computed: false, optional: false, required: true
  private _policyStoreId?: string; 
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }
  public set policyStoreId(value: string) {
    this._policyStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStoreIdInput() {
    return this._policyStoreId;
  }

  // principal_entity_type - computed: true, optional: true, required: false
  private _principalEntityType?: string; 
  public get principalEntityType() {
    return this.getStringAttribute('principal_entity_type');
  }
  public set principalEntityType(value: string) {
    this._principalEntityType = value;
  }
  public resetPrincipalEntityType() {
    this._principalEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalEntityTypeInput() {
    return this._principalEntityType;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AwsIdentitySource.ConfigurationPropertyList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AwsIdentitySource.ConfigurationProperty[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_store_id: cdktn.stringToTerraform(this._policyStoreId),
      principal_entity_type: cdktn.stringToTerraform(this._principalEntityType),
      region: cdktn.stringToTerraform(this._region),
      configuration: cdktn.listMapper(awsIdentitySourceConfigurationPropertyToTerraform, true)(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_store_id: {
        value: cdktn.stringToHclTerraform(this._policyStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_entity_type: {
        value: cdktn.stringToHclTerraform(this._principalEntityType),
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
      configuration: {
        value: cdktn.listMapperHcl(awsIdentitySourceConfigurationPropertyToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsIdentitySource.ConfigurationPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyToTerraform(struct?: AwsIdentitySource.ConfigurationCognitoUserPoolConfigurationGroupConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_entity_type: cdktn.stringToTerraform(struct!.groupEntityType),
  }
}


export function awsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyToHclTerraform(struct?: AwsIdentitySource.ConfigurationCognitoUserPoolConfigurationGroupConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_entity_type: {
      value: cdktn.stringToHclTerraform(struct!.groupEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsIdentitySourceCognitoUserPoolConfigurationPropertyToTerraform(struct?: AwsIdentitySource.CognitoUserPoolConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clientIds),
    user_pool_arn: cdktn.stringToTerraform(struct!.userPoolArn),
    group_configuration: cdktn.listMapper(awsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyToTerraform, true)(struct!.groupConfiguration),
  }
}


export function awsIdentitySourceCognitoUserPoolConfigurationPropertyToHclTerraform(struct?: AwsIdentitySource.CognitoUserPoolConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clientIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_pool_arn: {
      value: cdktn.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_configuration: {
      value: cdktn.listMapperHcl(awsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyToHclTerraform, true)(struct!.groupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyToTerraform(struct?: AwsIdentitySource.ConfigurationOpenIdConnectConfigurationGroupConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_claim: cdktn.stringToTerraform(struct!.groupClaim),
    group_entity_type: cdktn.stringToTerraform(struct!.groupEntityType),
  }
}


export function awsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyToHclTerraform(struct?: AwsIdentitySource.ConfigurationOpenIdConnectConfigurationGroupConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_claim: {
      value: cdktn.stringToHclTerraform(struct!.groupClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_entity_type: {
      value: cdktn.stringToHclTerraform(struct!.groupEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsIdentitySourceAccessTokenOnlyPropertyToTerraform(struct?: AwsIdentitySource.AccessTokenOnlyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audiences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.audiences),
    principal_id_claim: cdktn.stringToTerraform(struct!.principalIdClaim),
  }
}


export function awsIdentitySourceAccessTokenOnlyPropertyToHclTerraform(struct?: AwsIdentitySource.AccessTokenOnlyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audiences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal_id_claim: {
      value: cdktn.stringToHclTerraform(struct!.principalIdClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsIdentitySourceIdentityTokenOnlyPropertyToTerraform(struct?: AwsIdentitySource.IdentityTokenOnlyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clientIds),
    principal_id_claim: cdktn.stringToTerraform(struct!.principalIdClaim),
  }
}


export function awsIdentitySourceIdentityTokenOnlyPropertyToHclTerraform(struct?: AwsIdentitySource.IdentityTokenOnlyProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clientIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal_id_claim: {
      value: cdktn.stringToHclTerraform(struct!.principalIdClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsIdentitySourceTokenSelectionPropertyToTerraform(struct?: AwsIdentitySource.TokenSelectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token_only: cdktn.listMapper(awsIdentitySourceAccessTokenOnlyPropertyToTerraform, true)(struct!.accessTokenOnly),
    identity_token_only: cdktn.listMapper(awsIdentitySourceIdentityTokenOnlyPropertyToTerraform, true)(struct!.identityTokenOnly),
  }
}


export function awsIdentitySourceTokenSelectionPropertyToHclTerraform(struct?: AwsIdentitySource.TokenSelectionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token_only: {
      value: cdktn.listMapperHcl(awsIdentitySourceAccessTokenOnlyPropertyToHclTerraform, true)(struct!.accessTokenOnly),
      isBlock: true,
      type: "list",
      storageClassType: "AccessTokenOnlyPropertyList",
    },
    identity_token_only: {
      value: cdktn.listMapperHcl(awsIdentitySourceIdentityTokenOnlyPropertyToHclTerraform, true)(struct!.identityTokenOnly),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityTokenOnlyPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsIdentitySourceOpenIdConnectConfigurationPropertyToTerraform(struct?: AwsIdentitySource.OpenIdConnectConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_id_prefix: cdktn.stringToTerraform(struct!.entityIdPrefix),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    group_configuration: cdktn.listMapper(awsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyToTerraform, true)(struct!.groupConfiguration),
    token_selection: cdktn.listMapper(awsIdentitySourceTokenSelectionPropertyToTerraform, true)(struct!.tokenSelection),
  }
}


export function awsIdentitySourceOpenIdConnectConfigurationPropertyToHclTerraform(struct?: AwsIdentitySource.OpenIdConnectConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_id_prefix: {
      value: cdktn.stringToHclTerraform(struct!.entityIdPrefix),
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
    group_configuration: {
      value: cdktn.listMapperHcl(awsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyToHclTerraform, true)(struct!.groupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyList",
    },
    token_selection: {
      value: cdktn.listMapperHcl(awsIdentitySourceTokenSelectionPropertyToHclTerraform, true)(struct!.tokenSelection),
      isBlock: true,
      type: "list",
      storageClassType: "TokenSelectionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsIdentitySourceConfigurationPropertyToTerraform(struct?: AwsIdentitySource.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cognito_user_pool_configuration: cdktn.listMapper(awsIdentitySourceCognitoUserPoolConfigurationPropertyToTerraform, true)(struct!.cognitoUserPoolConfiguration),
    open_id_connect_configuration: cdktn.listMapper(awsIdentitySourceOpenIdConnectConfigurationPropertyToTerraform, true)(struct!.openIdConnectConfiguration),
  }
}


export function awsIdentitySourceConfigurationPropertyToHclTerraform(struct?: AwsIdentitySource.ConfigurationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cognito_user_pool_configuration: {
      value: cdktn.listMapperHcl(awsIdentitySourceCognitoUserPoolConfigurationPropertyToHclTerraform, true)(struct!.cognitoUserPoolConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CognitoUserPoolConfigurationPropertyList",
    },
    open_id_connect_configuration: {
      value: cdktn.listMapperHcl(awsIdentitySourceOpenIdConnectConfigurationPropertyToHclTerraform, true)(struct!.openIdConnectConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OpenIdConnectConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsIdentitySource {
export interface ConfigurationCognitoUserPoolConfigurationGroupConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#group_entity_type AwsIdentitySource#group_entity_type}
  */
  readonly groupEntityType: string;
}
export class ConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationCognitoUserPoolConfigurationGroupConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEntityType = this._groupEntityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationCognitoUserPoolConfigurationGroupConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupEntityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupEntityType = value.groupEntityType;
    }
  }

  // group_entity_type - computed: false, optional: false, required: true
  private _groupEntityType?: string; 
  public get groupEntityType() {
    return this.getStringAttribute('group_entity_type');
  }
  public set groupEntityType(value: string) {
    this._groupEntityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEntityTypeInput() {
    return this._groupEntityType;
  }
}

export class ConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationCognitoUserPoolConfigurationGroupConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyOutputReference {
    return new ConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitoUserPoolConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#client_ids AwsIdentitySource#client_ids}
  */
  readonly clientIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#user_pool_arn AwsIdentitySource#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#group_configuration AwsIdentitySource#group_configuration}
  */
  readonly groupConfiguration?: ConfigurationCognitoUserPoolConfigurationGroupConfigurationProperty[] | cdktn.IResolvable;
}
export class CognitoUserPoolConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CognitoUserPoolConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIds = this._clientIds;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._groupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConfiguration = this._groupConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIds = undefined;
      this._userPoolArn = undefined;
      this._groupConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIds = value.clientIds;
      this._userPoolArn = value.userPoolArn;
      this._groupConfiguration.internalValue = value.groupConfiguration;
    }
  }

  // client_ids - computed: true, optional: true, required: false
  private _clientIds?: string[]; 
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // user_pool_arn - computed: false, optional: false, required: true
  private _userPoolArn?: string; 
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }

  // group_configuration - computed: false, optional: true, required: false
  private _groupConfiguration = new ConfigurationCognitoUserPoolConfigurationGroupConfigurationPropertyList(this, "group_configuration", false);
  public get groupConfiguration() {
    return this._groupConfiguration;
  }
  public putGroupConfiguration(value: ConfigurationCognitoUserPoolConfigurationGroupConfigurationProperty[] | cdktn.IResolvable) {
    this._groupConfiguration.internalValue = value;
  }
  public resetGroupConfiguration() {
    this._groupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConfigurationInput() {
    return this._groupConfiguration.internalValue;
  }
}

export class CognitoUserPoolConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : CognitoUserPoolConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): CognitoUserPoolConfigurationPropertyOutputReference {
    return new CognitoUserPoolConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationOpenIdConnectConfigurationGroupConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#group_claim AwsIdentitySource#group_claim}
  */
  readonly groupClaim: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#group_entity_type AwsIdentitySource#group_entity_type}
  */
  readonly groupEntityType: string;
}
export class ConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationOpenIdConnectConfigurationGroupConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupClaim = this._groupClaim;
    }
    if (this._groupEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEntityType = this._groupEntityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationOpenIdConnectConfigurationGroupConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupClaim = undefined;
      this._groupEntityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupClaim = value.groupClaim;
      this._groupEntityType = value.groupEntityType;
    }
  }

  // group_claim - computed: false, optional: false, required: true
  private _groupClaim?: string; 
  public get groupClaim() {
    return this.getStringAttribute('group_claim');
  }
  public set groupClaim(value: string) {
    this._groupClaim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimInput() {
    return this._groupClaim;
  }

  // group_entity_type - computed: false, optional: false, required: true
  private _groupEntityType?: string; 
  public get groupEntityType() {
    return this.getStringAttribute('group_entity_type');
  }
  public set groupEntityType(value: string) {
    this._groupEntityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEntityTypeInput() {
    return this._groupEntityType;
  }
}

export class ConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationOpenIdConnectConfigurationGroupConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyOutputReference {
    return new ConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessTokenOnlyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#audiences AwsIdentitySource#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim AwsIdentitySource#principal_id_claim}
  */
  readonly principalIdClaim?: string;
}
export class AccessTokenOnlyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessTokenOnlyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._principalIdClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalIdClaim = this._principalIdClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessTokenOnlyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._principalIdClaim = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._principalIdClaim = value.principalIdClaim;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // principal_id_claim - computed: false, optional: true, required: false
  private _principalIdClaim?: string; 
  public get principalIdClaim() {
    return this.getStringAttribute('principal_id_claim');
  }
  public set principalIdClaim(value: string) {
    this._principalIdClaim = value;
  }
  public resetPrincipalIdClaim() {
    this._principalIdClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdClaimInput() {
    return this._principalIdClaim;
  }
}

export class AccessTokenOnlyPropertyList extends cdktn.ComplexList {
  public internalValue? : AccessTokenOnlyProperty[] | cdktn.IResolvable

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
  public get(index: number): AccessTokenOnlyPropertyOutputReference {
    return new AccessTokenOnlyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityTokenOnlyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#client_ids AwsIdentitySource#client_ids}
  */
  readonly clientIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim AwsIdentitySource#principal_id_claim}
  */
  readonly principalIdClaim?: string;
}
export class IdentityTokenOnlyPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IdentityTokenOnlyProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIds = this._clientIds;
    }
    if (this._principalIdClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalIdClaim = this._principalIdClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityTokenOnlyProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIds = undefined;
      this._principalIdClaim = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIds = value.clientIds;
      this._principalIdClaim = value.principalIdClaim;
    }
  }

  // client_ids - computed: false, optional: true, required: false
  private _clientIds?: string[]; 
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // principal_id_claim - computed: false, optional: true, required: false
  private _principalIdClaim?: string; 
  public get principalIdClaim() {
    return this.getStringAttribute('principal_id_claim');
  }
  public set principalIdClaim(value: string) {
    this._principalIdClaim = value;
  }
  public resetPrincipalIdClaim() {
    this._principalIdClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdClaimInput() {
    return this._principalIdClaim;
  }
}

export class IdentityTokenOnlyPropertyList extends cdktn.ComplexList {
  public internalValue? : IdentityTokenOnlyProperty[] | cdktn.IResolvable

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
  public get(index: number): IdentityTokenOnlyPropertyOutputReference {
    return new IdentityTokenOnlyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TokenSelectionProperty {
  /**
  * access_token_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#access_token_only AwsIdentitySource#access_token_only}
  */
  readonly accessTokenOnly?: AccessTokenOnlyProperty[] | cdktn.IResolvable;
  /**
  * identity_token_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#identity_token_only AwsIdentitySource#identity_token_only}
  */
  readonly identityTokenOnly?: IdentityTokenOnlyProperty[] | cdktn.IResolvable;
}
export class TokenSelectionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TokenSelectionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenOnly = this._accessTokenOnly?.internalValue;
    }
    if (this._identityTokenOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityTokenOnly = this._identityTokenOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenSelectionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenOnly.internalValue = undefined;
      this._identityTokenOnly.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenOnly.internalValue = value.accessTokenOnly;
      this._identityTokenOnly.internalValue = value.identityTokenOnly;
    }
  }

  // access_token_only - computed: false, optional: true, required: false
  private _accessTokenOnly = new AccessTokenOnlyPropertyList(this, "access_token_only", false);
  public get accessTokenOnly() {
    return this._accessTokenOnly;
  }
  public putAccessTokenOnly(value: AccessTokenOnlyProperty[] | cdktn.IResolvable) {
    this._accessTokenOnly.internalValue = value;
  }
  public resetAccessTokenOnly() {
    this._accessTokenOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenOnlyInput() {
    return this._accessTokenOnly.internalValue;
  }

  // identity_token_only - computed: false, optional: true, required: false
  private _identityTokenOnly = new IdentityTokenOnlyPropertyList(this, "identity_token_only", false);
  public get identityTokenOnly() {
    return this._identityTokenOnly;
  }
  public putIdentityTokenOnly(value: IdentityTokenOnlyProperty[] | cdktn.IResolvable) {
    this._identityTokenOnly.internalValue = value;
  }
  public resetIdentityTokenOnly() {
    this._identityTokenOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenOnlyInput() {
    return this._identityTokenOnly.internalValue;
  }
}

export class TokenSelectionPropertyList extends cdktn.ComplexList {
  public internalValue? : TokenSelectionProperty[] | cdktn.IResolvable

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
  public get(index: number): TokenSelectionPropertyOutputReference {
    return new TokenSelectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenIdConnectConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#entity_id_prefix AwsIdentitySource#entity_id_prefix}
  */
  readonly entityIdPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#issuer AwsIdentitySource#issuer}
  */
  readonly issuer: string;
  /**
  * group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#group_configuration AwsIdentitySource#group_configuration}
  */
  readonly groupConfiguration?: ConfigurationOpenIdConnectConfigurationGroupConfigurationProperty[] | cdktn.IResolvable;
  /**
  * token_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#token_selection AwsIdentitySource#token_selection}
  */
  readonly tokenSelection?: TokenSelectionProperty[] | cdktn.IResolvable;
}
export class OpenIdConnectConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenIdConnectConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdPrefix = this._entityIdPrefix;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._groupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConfiguration = this._groupConfiguration?.internalValue;
    }
    if (this._tokenSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSelection = this._tokenSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenIdConnectConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityIdPrefix = undefined;
      this._issuer = undefined;
      this._groupConfiguration.internalValue = undefined;
      this._tokenSelection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityIdPrefix = value.entityIdPrefix;
      this._issuer = value.issuer;
      this._groupConfiguration.internalValue = value.groupConfiguration;
      this._tokenSelection.internalValue = value.tokenSelection;
    }
  }

  // entity_id_prefix - computed: false, optional: true, required: false
  private _entityIdPrefix?: string; 
  public get entityIdPrefix() {
    return this.getStringAttribute('entity_id_prefix');
  }
  public set entityIdPrefix(value: string) {
    this._entityIdPrefix = value;
  }
  public resetEntityIdPrefix() {
    this._entityIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdPrefixInput() {
    return this._entityIdPrefix;
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

  // group_configuration - computed: false, optional: true, required: false
  private _groupConfiguration = new ConfigurationOpenIdConnectConfigurationGroupConfigurationPropertyList(this, "group_configuration", false);
  public get groupConfiguration() {
    return this._groupConfiguration;
  }
  public putGroupConfiguration(value: ConfigurationOpenIdConnectConfigurationGroupConfigurationProperty[] | cdktn.IResolvable) {
    this._groupConfiguration.internalValue = value;
  }
  public resetGroupConfiguration() {
    this._groupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConfigurationInput() {
    return this._groupConfiguration.internalValue;
  }

  // token_selection - computed: false, optional: true, required: false
  private _tokenSelection = new TokenSelectionPropertyList(this, "token_selection", false);
  public get tokenSelection() {
    return this._tokenSelection;
  }
  public putTokenSelection(value: TokenSelectionProperty[] | cdktn.IResolvable) {
    this._tokenSelection.internalValue = value;
  }
  public resetTokenSelection() {
    this._tokenSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSelectionInput() {
    return this._tokenSelection.internalValue;
  }
}

export class OpenIdConnectConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : OpenIdConnectConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): OpenIdConnectConfigurationPropertyOutputReference {
    return new OpenIdConnectConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationProperty {
  /**
  * cognito_user_pool_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#cognito_user_pool_configuration AwsIdentitySource#cognito_user_pool_configuration}
  */
  readonly cognitoUserPoolConfiguration?: CognitoUserPoolConfigurationProperty[] | cdktn.IResolvable;
  /**
  * open_id_connect_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/verifiedpermissions_identity_source#open_id_connect_configuration AwsIdentitySource#open_id_connect_configuration}
  */
  readonly openIdConnectConfiguration?: OpenIdConnectConfigurationProperty[] | cdktn.IResolvable;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigurationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cognitoUserPoolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoUserPoolConfiguration = this._cognitoUserPoolConfiguration?.internalValue;
    }
    if (this._openIdConnectConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIdConnectConfiguration = this._openIdConnectConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cognitoUserPoolConfiguration.internalValue = undefined;
      this._openIdConnectConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cognitoUserPoolConfiguration.internalValue = value.cognitoUserPoolConfiguration;
      this._openIdConnectConfiguration.internalValue = value.openIdConnectConfiguration;
    }
  }

  // cognito_user_pool_configuration - computed: false, optional: true, required: false
  private _cognitoUserPoolConfiguration = new CognitoUserPoolConfigurationPropertyList(this, "cognito_user_pool_configuration", false);
  public get cognitoUserPoolConfiguration() {
    return this._cognitoUserPoolConfiguration;
  }
  public putCognitoUserPoolConfiguration(value: CognitoUserPoolConfigurationProperty[] | cdktn.IResolvable) {
    this._cognitoUserPoolConfiguration.internalValue = value;
  }
  public resetCognitoUserPoolConfiguration() {
    this._cognitoUserPoolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoUserPoolConfigurationInput() {
    return this._cognitoUserPoolConfiguration.internalValue;
  }

  // open_id_connect_configuration - computed: false, optional: true, required: false
  private _openIdConnectConfiguration = new OpenIdConnectConfigurationPropertyList(this, "open_id_connect_configuration", false);
  public get openIdConnectConfiguration() {
    return this._openIdConnectConfiguration;
  }
  public putOpenIdConnectConfiguration(value: OpenIdConnectConfigurationProperty[] | cdktn.IResolvable) {
    this._openIdConnectConfiguration.internalValue = value;
  }
  public resetOpenIdConnectConfiguration() {
    this._openIdConnectConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConnectConfigurationInput() {
    return this._openIdConnectConfiguration.internalValue;
  }
}

export class ConfigurationPropertyList extends cdktn.ComplexList {
  public internalValue? : ConfigurationProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfigurationPropertyOutputReference {
    return new ConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
