// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSecurityhubConfigurationPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#description AwsSecurityhubConfigurationPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#id AwsSecurityhubConfigurationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#name AwsSecurityhubConfigurationPolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#region AwsSecurityhubConfigurationPolicy#region}
  */
  readonly region?: string;
  /**
  * configuration_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#configuration_policy AwsSecurityhubConfigurationPolicy#configuration_policy}
  */
  readonly configurationPolicy: AwsSecurityhubConfigurationPolicy.ConfigurationPolicyProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy aws_securityhub_configuration_policy}
*/
export class AwsSecurityhubConfigurationPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_configuration_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSecurityhubConfigurationPolicy to import
  * @param importFromId The id of the existing AwsSecurityhubConfigurationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSecurityhubConfigurationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_configuration_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy aws_securityhub_configuration_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSecurityhubConfigurationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSecurityhubConfigurationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_configuration_policy',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._configurationPolicy.internalValue = config.configurationPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // configuration_policy - computed: false, optional: false, required: true
  private _configurationPolicy = new AwsSecurityhubConfigurationPolicy.ConfigurationPolicyPropertyOutputReference(this, "configuration_policy");
  public get configurationPolicy() {
    return this._configurationPolicy;
  }
  public putConfigurationPolicy(value: AwsSecurityhubConfigurationPolicy.ConfigurationPolicyProperty) {
    this._configurationPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationPolicyInput() {
    return this._configurationPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      configuration_policy: awsSecurityhubConfigurationPolicyConfigurationPolicyPropertyToTerraform(this._configurationPolicy.internalValue),
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
      configuration_policy: {
        value: awsSecurityhubConfigurationPolicyConfigurationPolicyPropertyToHclTerraform(this._configurationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSecurityhubConfigurationPolicy.ConfigurationPolicyPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSecurityhubConfigurationPolicyBoolPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.BoolPropertyOutputReference | AwsSecurityhubConfigurationPolicy.BoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function awsSecurityhubConfigurationPolicyBoolPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.BoolPropertyOutputReference | AwsSecurityhubConfigurationPolicy.BoolProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicyDoublePropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.DoublePropertyOutputReference | AwsSecurityhubConfigurationPolicy.DoubleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsSecurityhubConfigurationPolicyDoublePropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.DoublePropertyOutputReference | AwsSecurityhubConfigurationPolicy.DoubleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicyEnumPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.EnumPropertyOutputReference | AwsSecurityhubConfigurationPolicy.EnumProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsSecurityhubConfigurationPolicyEnumPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.EnumPropertyOutputReference | AwsSecurityhubConfigurationPolicy.EnumProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsSecurityhubConfigurationPolicyEnumListPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.EnumListPropertyOutputReference | AwsSecurityhubConfigurationPolicy.EnumListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function awsSecurityhubConfigurationPolicyEnumListPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.EnumListPropertyOutputReference | AwsSecurityhubConfigurationPolicy.EnumListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicyIntPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.IntPropertyOutputReference | AwsSecurityhubConfigurationPolicy.IntProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function awsSecurityhubConfigurationPolicyIntPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.IntPropertyOutputReference | AwsSecurityhubConfigurationPolicy.IntProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicyIntListPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.IntListPropertyOutputReference | AwsSecurityhubConfigurationPolicy.IntListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.value),
  }
}


export function awsSecurityhubConfigurationPolicyIntListPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.IntListPropertyOutputReference | AwsSecurityhubConfigurationPolicy.IntListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicyStringPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.StringPropertyOutputReference | AwsSecurityhubConfigurationPolicy.StringProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsSecurityhubConfigurationPolicyStringPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.StringPropertyOutputReference | AwsSecurityhubConfigurationPolicy.StringProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsSecurityhubConfigurationPolicyStringListPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.StringListPropertyOutputReference | AwsSecurityhubConfigurationPolicy.StringListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function awsSecurityhubConfigurationPolicyStringListPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.StringListPropertyOutputReference | AwsSecurityhubConfigurationPolicy.StringListProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicyParameterPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.ParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_type: cdktn.stringToTerraform(struct!.valueType),
    bool: awsSecurityhubConfigurationPolicyBoolPropertyToTerraform(struct!.bool),
    double: awsSecurityhubConfigurationPolicyDoublePropertyToTerraform(struct!.double),
    enum: awsSecurityhubConfigurationPolicyEnumPropertyToTerraform(struct!.enum),
    enum_list: awsSecurityhubConfigurationPolicyEnumListPropertyToTerraform(struct!.enumList),
    int: awsSecurityhubConfigurationPolicyIntPropertyToTerraform(struct!.int),
    int_list: awsSecurityhubConfigurationPolicyIntListPropertyToTerraform(struct!.intList),
    string: awsSecurityhubConfigurationPolicyStringPropertyToTerraform(struct!.string),
    string_list: awsSecurityhubConfigurationPolicyStringListPropertyToTerraform(struct!.stringList),
  }
}


export function awsSecurityhubConfigurationPolicyParameterPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.ParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktn.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bool: {
      value: awsSecurityhubConfigurationPolicyBoolPropertyToHclTerraform(struct!.bool),
      isBlock: true,
      type: "list",
      storageClassType: "BoolPropertyList",
    },
    double: {
      value: awsSecurityhubConfigurationPolicyDoublePropertyToHclTerraform(struct!.double),
      isBlock: true,
      type: "list",
      storageClassType: "DoublePropertyList",
    },
    enum: {
      value: awsSecurityhubConfigurationPolicyEnumPropertyToHclTerraform(struct!.enum),
      isBlock: true,
      type: "list",
      storageClassType: "EnumPropertyList",
    },
    enum_list: {
      value: awsSecurityhubConfigurationPolicyEnumListPropertyToHclTerraform(struct!.enumList),
      isBlock: true,
      type: "list",
      storageClassType: "EnumListPropertyList",
    },
    int: {
      value: awsSecurityhubConfigurationPolicyIntPropertyToHclTerraform(struct!.int),
      isBlock: true,
      type: "list",
      storageClassType: "IntPropertyList",
    },
    int_list: {
      value: awsSecurityhubConfigurationPolicyIntListPropertyToHclTerraform(struct!.intList),
      isBlock: true,
      type: "list",
      storageClassType: "IntListPropertyList",
    },
    string: {
      value: awsSecurityhubConfigurationPolicyStringPropertyToHclTerraform(struct!.string),
      isBlock: true,
      type: "list",
      storageClassType: "StringPropertyList",
    },
    string_list: {
      value: awsSecurityhubConfigurationPolicyStringListPropertyToHclTerraform(struct!.stringList),
      isBlock: true,
      type: "list",
      storageClassType: "StringListPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicySecurityControlCustomParameterPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.SecurityControlCustomParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_control_id: cdktn.stringToTerraform(struct!.securityControlId),
    parameter: cdktn.listMapper(awsSecurityhubConfigurationPolicyParameterPropertyToTerraform, true)(struct!.parameter),
  }
}


export function awsSecurityhubConfigurationPolicySecurityControlCustomParameterPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.SecurityControlCustomParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_control_id: {
      value: cdktn.stringToHclTerraform(struct!.securityControlId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: cdktn.listMapperHcl(awsSecurityhubConfigurationPolicyParameterPropertyToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicySecurityControlsConfigurationPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.SecurityControlsConfigurationPropertyOutputReference | AwsSecurityhubConfigurationPolicy.SecurityControlsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disabled_control_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.disabledControlIdentifiers),
    enabled_control_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledControlIdentifiers),
    security_control_custom_parameter: cdktn.listMapper(awsSecurityhubConfigurationPolicySecurityControlCustomParameterPropertyToTerraform, true)(struct!.securityControlCustomParameter),
  }
}


export function awsSecurityhubConfigurationPolicySecurityControlsConfigurationPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.SecurityControlsConfigurationPropertyOutputReference | AwsSecurityhubConfigurationPolicy.SecurityControlsConfigurationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disabled_control_identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.disabledControlIdentifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled_control_identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledControlIdentifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    security_control_custom_parameter: {
      value: cdktn.listMapperHcl(awsSecurityhubConfigurationPolicySecurityControlCustomParameterPropertyToHclTerraform, true)(struct!.securityControlCustomParameter),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityControlCustomParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSecurityhubConfigurationPolicyConfigurationPolicyPropertyToTerraform(struct?: AwsSecurityhubConfigurationPolicy.ConfigurationPolicyPropertyOutputReference | AwsSecurityhubConfigurationPolicy.ConfigurationPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled_standard_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledStandardArns),
    service_enabled: cdktn.booleanToTerraform(struct!.serviceEnabled),
    security_controls_configuration: awsSecurityhubConfigurationPolicySecurityControlsConfigurationPropertyToTerraform(struct!.securityControlsConfiguration),
  }
}


export function awsSecurityhubConfigurationPolicyConfigurationPolicyPropertyToHclTerraform(struct?: AwsSecurityhubConfigurationPolicy.ConfigurationPolicyPropertyOutputReference | AwsSecurityhubConfigurationPolicy.ConfigurationPolicyProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled_standard_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledStandardArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.serviceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_controls_configuration: {
      value: awsSecurityhubConfigurationPolicySecurityControlsConfigurationPropertyToHclTerraform(struct!.securityControlsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityControlsConfigurationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSecurityhubConfigurationPolicy {
export interface BoolProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value AwsSecurityhubConfigurationPolicy#value}
  */
  readonly value: boolean | cdktn.IResolvable;
}
export class BoolPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BoolProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BoolProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktn.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktn.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DoubleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value AwsSecurityhubConfigurationPolicy#value}
  */
  readonly value: number;
}
export class DoublePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DoubleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DoubleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface EnumProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value AwsSecurityhubConfigurationPolicy#value}
  */
  readonly value: string;
}
export class EnumPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnumProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnumProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
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
export interface EnumListProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value AwsSecurityhubConfigurationPolicy#value}
  */
  readonly value: string[];
}
export class EnumListPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnumListProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnumListProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IntProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value AwsSecurityhubConfigurationPolicy#value}
  */
  readonly value: number;
}
export class IntPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IntListProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value AwsSecurityhubConfigurationPolicy#value}
  */
  readonly value: number[];
}
export class IntListPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntListProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntListProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number[]; 
  public get value() {
    return this.getNumberListAttribute('value');
  }
  public set value(value: number[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface StringProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value AwsSecurityhubConfigurationPolicy#value}
  */
  readonly value: string;
}
export class StringPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StringProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StringProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
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
export interface StringListProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value AwsSecurityhubConfigurationPolicy#value}
  */
  readonly value: string[];
}
export class StringListPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StringListProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StringListProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ParameterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#name AwsSecurityhubConfigurationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#value_type AwsSecurityhubConfigurationPolicy#value_type}
  */
  readonly valueType: string;
  /**
  * bool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#bool AwsSecurityhubConfigurationPolicy#bool}
  */
  readonly bool?: BoolProperty;
  /**
  * double block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#double AwsSecurityhubConfigurationPolicy#double}
  */
  readonly double?: DoubleProperty;
  /**
  * enum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#enum AwsSecurityhubConfigurationPolicy#enum}
  */
  readonly enum?: EnumProperty;
  /**
  * enum_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#enum_list AwsSecurityhubConfigurationPolicy#enum_list}
  */
  readonly enumList?: EnumListProperty;
  /**
  * int block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#int AwsSecurityhubConfigurationPolicy#int}
  */
  readonly int?: IntProperty;
  /**
  * int_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#int_list AwsSecurityhubConfigurationPolicy#int_list}
  */
  readonly intList?: IntListProperty;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#string AwsSecurityhubConfigurationPolicy#string}
  */
  readonly string?: StringProperty;
  /**
  * string_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#string_list AwsSecurityhubConfigurationPolicy#string_list}
  */
  readonly stringList?: StringListProperty;
}
export class ParameterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParameterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._bool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bool = this._bool?.internalValue;
    }
    if (this._double?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.double = this._double?.internalValue;
    }
    if (this._enum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum?.internalValue;
    }
    if (this._enumList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumList = this._enumList?.internalValue;
    }
    if (this._int?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int = this._int?.internalValue;
    }
    if (this._intList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intList = this._intList?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._stringList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParameterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueType = undefined;
      this._bool.internalValue = undefined;
      this._double.internalValue = undefined;
      this._enum.internalValue = undefined;
      this._enumList.internalValue = undefined;
      this._int.internalValue = undefined;
      this._intList.internalValue = undefined;
      this._string.internalValue = undefined;
      this._stringList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueType = value.valueType;
      this._bool.internalValue = value.bool;
      this._double.internalValue = value.double;
      this._enum.internalValue = value.enum;
      this._enumList.internalValue = value.enumList;
      this._int.internalValue = value.int;
      this._intList.internalValue = value.intList;
      this._string.internalValue = value.string;
      this._stringList.internalValue = value.stringList;
    }
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

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // bool - computed: false, optional: true, required: false
  private _bool = new BoolPropertyOutputReference(this, "bool");
  public get bool() {
    return this._bool;
  }
  public putBool(value: BoolProperty) {
    this._bool.internalValue = value;
  }
  public resetBool() {
    this._bool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolInput() {
    return this._bool.internalValue;
  }

  // double - computed: false, optional: true, required: false
  private _double = new DoublePropertyOutputReference(this, "double");
  public get double() {
    return this._double;
  }
  public putDouble(value: DoubleProperty) {
    this._double.internalValue = value;
  }
  public resetDouble() {
    this._double.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleInput() {
    return this._double.internalValue;
  }

  // enum - computed: false, optional: true, required: false
  private _enum = new EnumPropertyOutputReference(this, "enum");
  public get enum() {
    return this._enum;
  }
  public putEnum(value: EnumProperty) {
    this._enum.internalValue = value;
  }
  public resetEnum() {
    this._enum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum.internalValue;
  }

  // enum_list - computed: false, optional: true, required: false
  private _enumList = new EnumListPropertyOutputReference(this, "enum_list");
  public get enumList() {
    return this._enumList;
  }
  public putEnumList(value: EnumListProperty) {
    this._enumList.internalValue = value;
  }
  public resetEnumList() {
    this._enumList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumListInput() {
    return this._enumList.internalValue;
  }

  // int - computed: false, optional: true, required: false
  private _int = new IntPropertyOutputReference(this, "int");
  public get int() {
    return this._int;
  }
  public putInt(value: IntProperty) {
    this._int.internalValue = value;
  }
  public resetInt() {
    this._int.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intInput() {
    return this._int.internalValue;
  }

  // int_list - computed: false, optional: true, required: false
  private _intList = new IntListPropertyOutputReference(this, "int_list");
  public get intList() {
    return this._intList;
  }
  public putIntList(value: IntListProperty) {
    this._intList.internalValue = value;
  }
  public resetIntList() {
    this._intList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intListInput() {
    return this._intList.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new StringPropertyOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: StringProperty) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // string_list - computed: false, optional: true, required: false
  private _stringList = new StringListPropertyOutputReference(this, "string_list");
  public get stringList() {
    return this._stringList;
  }
  public putStringList(value: StringListProperty) {
    this._stringList.internalValue = value;
  }
  public resetStringList() {
    this._stringList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList.internalValue;
  }
}

export class ParameterPropertyList extends cdktn.ComplexList {
  public internalValue? : ParameterProperty[] | cdktn.IResolvable

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
  public get(index: number): ParameterPropertyOutputReference {
    return new ParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityControlCustomParameterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#security_control_id AwsSecurityhubConfigurationPolicy#security_control_id}
  */
  readonly securityControlId: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#parameter AwsSecurityhubConfigurationPolicy#parameter}
  */
  readonly parameter: ParameterProperty[] | cdktn.IResolvable;
}
export class SecurityControlCustomParameterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityControlCustomParameterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityControlId = this._securityControlId;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityControlCustomParameterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityControlId = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityControlId = value.securityControlId;
      this._parameter.internalValue = value.parameter;
    }
  }

  // security_control_id - computed: false, optional: false, required: true
  private _securityControlId?: string; 
  public get securityControlId() {
    return this.getStringAttribute('security_control_id');
  }
  public set securityControlId(value: string) {
    this._securityControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlIdInput() {
    return this._securityControlId;
  }

  // parameter - computed: false, optional: false, required: true
  private _parameter = new ParameterPropertyList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ParameterProperty[] | cdktn.IResolvable) {
    this._parameter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class SecurityControlCustomParameterPropertyList extends cdktn.ComplexList {
  public internalValue? : SecurityControlCustomParameterProperty[] | cdktn.IResolvable

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
  public get(index: number): SecurityControlCustomParameterPropertyOutputReference {
    return new SecurityControlCustomParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityControlsConfigurationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#disabled_control_identifiers AwsSecurityhubConfigurationPolicy#disabled_control_identifiers}
  */
  readonly disabledControlIdentifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#enabled_control_identifiers AwsSecurityhubConfigurationPolicy#enabled_control_identifiers}
  */
  readonly enabledControlIdentifiers?: string[];
  /**
  * security_control_custom_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#security_control_custom_parameter AwsSecurityhubConfigurationPolicy#security_control_custom_parameter}
  */
  readonly securityControlCustomParameter?: SecurityControlCustomParameterProperty[] | cdktn.IResolvable;
}
export class SecurityControlsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityControlsConfigurationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledControlIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledControlIdentifiers = this._disabledControlIdentifiers;
    }
    if (this._enabledControlIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledControlIdentifiers = this._enabledControlIdentifiers;
    }
    if (this._securityControlCustomParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityControlCustomParameter = this._securityControlCustomParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityControlsConfigurationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledControlIdentifiers = undefined;
      this._enabledControlIdentifiers = undefined;
      this._securityControlCustomParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledControlIdentifiers = value.disabledControlIdentifiers;
      this._enabledControlIdentifiers = value.enabledControlIdentifiers;
      this._securityControlCustomParameter.internalValue = value.securityControlCustomParameter;
    }
  }

  // disabled_control_identifiers - computed: false, optional: true, required: false
  private _disabledControlIdentifiers?: string[]; 
  public get disabledControlIdentifiers() {
    return cdktn.Fn.tolist(this.getListAttribute('disabled_control_identifiers'));
  }
  public set disabledControlIdentifiers(value: string[]) {
    this._disabledControlIdentifiers = value;
  }
  public resetDisabledControlIdentifiers() {
    this._disabledControlIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledControlIdentifiersInput() {
    return this._disabledControlIdentifiers;
  }

  // enabled_control_identifiers - computed: false, optional: true, required: false
  private _enabledControlIdentifiers?: string[]; 
  public get enabledControlIdentifiers() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_control_identifiers'));
  }
  public set enabledControlIdentifiers(value: string[]) {
    this._enabledControlIdentifiers = value;
  }
  public resetEnabledControlIdentifiers() {
    this._enabledControlIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledControlIdentifiersInput() {
    return this._enabledControlIdentifiers;
  }

  // security_control_custom_parameter - computed: false, optional: true, required: false
  private _securityControlCustomParameter = new SecurityControlCustomParameterPropertyList(this, "security_control_custom_parameter", false);
  public get securityControlCustomParameter() {
    return this._securityControlCustomParameter;
  }
  public putSecurityControlCustomParameter(value: SecurityControlCustomParameterProperty[] | cdktn.IResolvable) {
    this._securityControlCustomParameter.internalValue = value;
  }
  public resetSecurityControlCustomParameter() {
    this._securityControlCustomParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlCustomParameterInput() {
    return this._securityControlCustomParameter.internalValue;
  }
}
export interface ConfigurationPolicyProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#enabled_standard_arns AwsSecurityhubConfigurationPolicy#enabled_standard_arns}
  */
  readonly enabledStandardArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#service_enabled AwsSecurityhubConfigurationPolicy#service_enabled}
  */
  readonly serviceEnabled: boolean | cdktn.IResolvable;
  /**
  * security_controls_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/securityhub_configuration_policy#security_controls_configuration AwsSecurityhubConfigurationPolicy#security_controls_configuration}
  */
  readonly securityControlsConfiguration?: SecurityControlsConfigurationProperty;
}
export class ConfigurationPolicyPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationPolicyProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledStandardArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledStandardArns = this._enabledStandardArns;
    }
    if (this._serviceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEnabled = this._serviceEnabled;
    }
    if (this._securityControlsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityControlsConfiguration = this._securityControlsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationPolicyProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledStandardArns = undefined;
      this._serviceEnabled = undefined;
      this._securityControlsConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledStandardArns = value.enabledStandardArns;
      this._serviceEnabled = value.serviceEnabled;
      this._securityControlsConfiguration.internalValue = value.securityControlsConfiguration;
    }
  }

  // enabled_standard_arns - computed: false, optional: true, required: false
  private _enabledStandardArns?: string[]; 
  public get enabledStandardArns() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_standard_arns'));
  }
  public set enabledStandardArns(value: string[]) {
    this._enabledStandardArns = value;
  }
  public resetEnabledStandardArns() {
    this._enabledStandardArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledStandardArnsInput() {
    return this._enabledStandardArns;
  }

  // service_enabled - computed: false, optional: false, required: true
  private _serviceEnabled?: boolean | cdktn.IResolvable; 
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }
  public set serviceEnabled(value: boolean | cdktn.IResolvable) {
    this._serviceEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEnabledInput() {
    return this._serviceEnabled;
  }

  // security_controls_configuration - computed: false, optional: true, required: false
  private _securityControlsConfiguration = new SecurityControlsConfigurationPropertyOutputReference(this, "security_controls_configuration");
  public get securityControlsConfiguration() {
    return this._securityControlsConfiguration;
  }
  public putSecurityControlsConfiguration(value: SecurityControlsConfigurationProperty) {
    this._securityControlsConfiguration.internalValue = value;
  }
  public resetSecurityControlsConfiguration() {
    this._securityControlsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlsConfigurationInput() {
    return this._securityControlsConfiguration.internalValue;
  }
}
}
