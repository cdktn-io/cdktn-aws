// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSecurityConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Description of the security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#description AwsSecurityConfig#description}
  */
  readonly description?: string;
  /**
  * Name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#name AwsSecurityConfig#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#region AwsSecurityConfig#region}
  */
  readonly region?: string;
  /**
  * Type of configuration. Valid values: `saml`, `iamidentitycenter` or `iamfederation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#type AwsSecurityConfig#type}
  */
  readonly type: string;
  /**
  * iam_federation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#iam_federation_options AwsSecurityConfig#iam_federation_options}
  */
  readonly iamFederationOptions?: AwsSecurityConfig.IamFederationOptionsProperty[] | cdktn.IResolvable;
  /**
  * iam_identity_center_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#iam_identity_center_options AwsSecurityConfig#iam_identity_center_options}
  */
  readonly iamIdentityCenterOptions?: AwsSecurityConfig.IamIdentityCenterOptionsProperty[] | cdktn.IResolvable;
  /**
  * saml_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#saml_options AwsSecurityConfig#saml_options}
  */
  readonly samlOptions?: AwsSecurityConfig.SamlOptionsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config aws_opensearchserverless_security_config}
*/
export class AwsSecurityConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearchserverless_security_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSecurityConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSecurityConfig to import
  * @param importFromId The id of the existing AwsSecurityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSecurityConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_opensearchserverless_security_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config aws_opensearchserverless_security_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSecurityConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSecurityConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearchserverless_security_config',
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
    this._name = config.name;
    this._region = config.region;
    this._type = config.type;
    this._iamFederationOptions.internalValue = config.iamFederationOptions;
    this._iamIdentityCenterOptions.internalValue = config.iamIdentityCenterOptions;
    this._samlOptions.internalValue = config.samlOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_version - computed: true, optional: false, required: false
  public get configVersion() {
    return this.getStringAttribute('config_version');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // iam_federation_options - computed: false, optional: true, required: false
  private _iamFederationOptions = new AwsSecurityConfig.IamFederationOptionsPropertyList(this, "iam_federation_options", false);
  public get iamFederationOptions() {
    return this._iamFederationOptions;
  }
  public putIamFederationOptions(value: AwsSecurityConfig.IamFederationOptionsProperty[] | cdktn.IResolvable) {
    this._iamFederationOptions.internalValue = value;
  }
  public resetIamFederationOptions() {
    this._iamFederationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamFederationOptionsInput() {
    return this._iamFederationOptions.internalValue;
  }

  // iam_identity_center_options - computed: false, optional: true, required: false
  private _iamIdentityCenterOptions = new AwsSecurityConfig.IamIdentityCenterOptionsPropertyList(this, "iam_identity_center_options", false);
  public get iamIdentityCenterOptions() {
    return this._iamIdentityCenterOptions;
  }
  public putIamIdentityCenterOptions(value: AwsSecurityConfig.IamIdentityCenterOptionsProperty[] | cdktn.IResolvable) {
    this._iamIdentityCenterOptions.internalValue = value;
  }
  public resetIamIdentityCenterOptions() {
    this._iamIdentityCenterOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityCenterOptionsInput() {
    return this._iamIdentityCenterOptions.internalValue;
  }

  // saml_options - computed: false, optional: true, required: false
  private _samlOptions = new AwsSecurityConfig.SamlOptionsPropertyList(this, "saml_options", false);
  public get samlOptions() {
    return this._samlOptions;
  }
  public putSamlOptions(value: AwsSecurityConfig.SamlOptionsProperty[] | cdktn.IResolvable) {
    this._samlOptions.internalValue = value;
  }
  public resetSamlOptions() {
    this._samlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlOptionsInput() {
    return this._samlOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      type: cdktn.stringToTerraform(this._type),
      iam_federation_options: cdktn.listMapper(awsSecurityConfigIamFederationOptionsPropertyToTerraform, true)(this._iamFederationOptions.internalValue),
      iam_identity_center_options: cdktn.listMapper(awsSecurityConfigIamIdentityCenterOptionsPropertyToTerraform, true)(this._iamIdentityCenterOptions.internalValue),
      saml_options: cdktn.listMapper(awsSecurityConfigSamlOptionsPropertyToTerraform, true)(this._samlOptions.internalValue),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_federation_options: {
        value: cdktn.listMapperHcl(awsSecurityConfigIamFederationOptionsPropertyToHclTerraform, true)(this._iamFederationOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSecurityConfig.IamFederationOptionsPropertyList",
      },
      iam_identity_center_options: {
        value: cdktn.listMapperHcl(awsSecurityConfigIamIdentityCenterOptionsPropertyToHclTerraform, true)(this._iamIdentityCenterOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSecurityConfig.IamIdentityCenterOptionsPropertyList",
      },
      saml_options: {
        value: cdktn.listMapperHcl(awsSecurityConfigSamlOptionsPropertyToHclTerraform, true)(this._samlOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSecurityConfig.SamlOptionsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSecurityConfigIamFederationOptionsPropertyToTerraform(struct?: AwsSecurityConfig.IamFederationOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_attribute: cdktn.stringToTerraform(struct!.groupAttribute),
    user_attribute: cdktn.stringToTerraform(struct!.userAttribute),
  }
}


export function awsSecurityConfigIamFederationOptionsPropertyToHclTerraform(struct?: AwsSecurityConfig.IamFederationOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_attribute: {
      value: cdktn.stringToHclTerraform(struct!.groupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_attribute: {
      value: cdktn.stringToHclTerraform(struct!.userAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityConfigIamIdentityCenterOptionsPropertyToTerraform(struct?: AwsSecurityConfig.IamIdentityCenterOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_attribute: cdktn.stringToTerraform(struct!.groupAttribute),
    instance_arn: cdktn.stringToTerraform(struct!.instanceArn),
    user_attribute: cdktn.stringToTerraform(struct!.userAttribute),
  }
}


export function awsSecurityConfigIamIdentityCenterOptionsPropertyToHclTerraform(struct?: AwsSecurityConfig.IamIdentityCenterOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_attribute: {
      value: cdktn.stringToHclTerraform(struct!.groupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_attribute: {
      value: cdktn.stringToHclTerraform(struct!.userAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityConfigSamlOptionsPropertyToTerraform(struct?: AwsSecurityConfig.SamlOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_attribute: cdktn.stringToTerraform(struct!.groupAttribute),
    metadata: cdktn.stringToTerraform(struct!.metadata),
    session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
    user_attribute: cdktn.stringToTerraform(struct!.userAttribute),
  }
}


export function awsSecurityConfigSamlOptionsPropertyToHclTerraform(struct?: AwsSecurityConfig.SamlOptionsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_attribute: {
      value: cdktn.stringToHclTerraform(struct!.groupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_attribute: {
      value: cdktn.stringToHclTerraform(struct!.userAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSecurityConfig {
export interface IamFederationOptionsProperty {
  /**
  * Group attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#group_attribute AwsSecurityConfig#group_attribute}
  */
  readonly groupAttribute?: string;
  /**
  * User attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#user_attribute AwsSecurityConfig#user_attribute}
  */
  readonly userAttribute?: string;
}
export class IamFederationOptionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IamFederationOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttribute = this._groupAttribute;
    }
    if (this._userAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttribute = this._userAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamFederationOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAttribute = undefined;
      this._userAttribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAttribute = value.groupAttribute;
      this._userAttribute = value.userAttribute;
    }
  }

  // group_attribute - computed: false, optional: true, required: false
  private _groupAttribute?: string; 
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }
  public set groupAttribute(value: string) {
    this._groupAttribute = value;
  }
  public resetGroupAttribute() {
    this._groupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeInput() {
    return this._groupAttribute;
  }

  // user_attribute - computed: false, optional: true, required: false
  private _userAttribute?: string; 
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
  public set userAttribute(value: string) {
    this._userAttribute = value;
  }
  public resetUserAttribute() {
    this._userAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeInput() {
    return this._userAttribute;
  }
}

export class IamFederationOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : IamFederationOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): IamFederationOptionsPropertyOutputReference {
    return new IamFederationOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamIdentityCenterOptionsProperty {
  /**
  * Group attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#group_attribute AwsSecurityConfig#group_attribute}
  */
  readonly groupAttribute?: string;
  /**
  * Instance ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#instance_arn AwsSecurityConfig#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * User attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#user_attribute AwsSecurityConfig#user_attribute}
  */
  readonly userAttribute?: string;
}
export class IamIdentityCenterOptionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IamIdentityCenterOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttribute = this._groupAttribute;
    }
    if (this._instanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArn = this._instanceArn;
    }
    if (this._userAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttribute = this._userAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamIdentityCenterOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAttribute = undefined;
      this._instanceArn = undefined;
      this._userAttribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAttribute = value.groupAttribute;
      this._instanceArn = value.instanceArn;
      this._userAttribute = value.userAttribute;
    }
  }

  // group_attribute - computed: true, optional: true, required: false
  private _groupAttribute?: string; 
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }
  public set groupAttribute(value: string) {
    this._groupAttribute = value;
  }
  public resetGroupAttribute() {
    this._groupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeInput() {
    return this._groupAttribute;
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // user_attribute - computed: true, optional: true, required: false
  private _userAttribute?: string; 
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
  public set userAttribute(value: string) {
    this._userAttribute = value;
  }
  public resetUserAttribute() {
    this._userAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeInput() {
    return this._userAttribute;
  }
}

export class IamIdentityCenterOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : IamIdentityCenterOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): IamIdentityCenterOptionsPropertyOutputReference {
    return new IamIdentityCenterOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SamlOptionsProperty {
  /**
  * Group attribute for this SAML integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#group_attribute AwsSecurityConfig#group_attribute}
  */
  readonly groupAttribute?: string;
  /**
  * The XML IdP metadata file generated from your identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#metadata AwsSecurityConfig#metadata}
  */
  readonly metadata: string;
  /**
  * Session timeout, in minutes. Minimum is 5 minutes and maximum is 720 minutes (12 hours). Default is 60 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#session_timeout AwsSecurityConfig#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * User attribute for this SAML integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/opensearchserverless_security_config#user_attribute AwsSecurityConfig#user_attribute}
  */
  readonly userAttribute?: string;
}
export class SamlOptionsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SamlOptionsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttribute = this._groupAttribute;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._userAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttribute = this._userAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlOptionsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAttribute = undefined;
      this._metadata = undefined;
      this._sessionTimeout = undefined;
      this._userAttribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAttribute = value.groupAttribute;
      this._metadata = value.metadata;
      this._sessionTimeout = value.sessionTimeout;
      this._userAttribute = value.userAttribute;
    }
  }

  // group_attribute - computed: false, optional: true, required: false
  private _groupAttribute?: string; 
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }
  public set groupAttribute(value: string) {
    this._groupAttribute = value;
  }
  public resetGroupAttribute() {
    this._groupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeInput() {
    return this._groupAttribute;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // user_attribute - computed: false, optional: true, required: false
  private _userAttribute?: string; 
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
  public set userAttribute(value: string) {
    this._userAttribute = value;
  }
  public resetUserAttribute() {
    this._userAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeInput() {
    return this._userAttribute;
  }
}

export class SamlOptionsPropertyList extends cdktn.ComplexList {
  public internalValue? : SamlOptionsProperty[] | cdktn.IResolvable

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
  public get(index: number): SamlOptionsPropertyOutputReference {
    return new SamlOptionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
