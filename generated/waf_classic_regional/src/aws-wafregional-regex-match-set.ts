// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsRegexMatchSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#id AwsRegexMatchSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#name AwsRegexMatchSet#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#region AwsRegexMatchSet#region}
  */
  readonly region?: string;
  /**
  * regex_match_tuple block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#regex_match_tuple AwsRegexMatchSet#regex_match_tuple}
  */
  readonly regexMatchTuple?: AwsRegexMatchSet.RegexMatchTupleProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set aws_wafregional_regex_match_set}
*/
export class AwsRegexMatchSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafregional_regex_match_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsRegexMatchSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsRegexMatchSet to import
  * @param importFromId The id of the existing AwsRegexMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsRegexMatchSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafregional_regex_match_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set aws_wafregional_regex_match_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsRegexMatchSetConfig
  */
  public constructor(scope: Construct, id: string, config: AwsRegexMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_regex_match_set',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._regexMatchTuple.internalValue = config.regexMatchTuple;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // regex_match_tuple - computed: false, optional: true, required: false
  private _regexMatchTuple = new AwsRegexMatchSet.RegexMatchTuplePropertyList(this, "regex_match_tuple", true);
  public get regexMatchTuple() {
    return this._regexMatchTuple;
  }
  public putRegexMatchTuple(value: AwsRegexMatchSet.RegexMatchTupleProperty[] | cdktn.IResolvable) {
    this._regexMatchTuple.internalValue = value;
  }
  public resetRegexMatchTuple() {
    this._regexMatchTuple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchTupleInput() {
    return this._regexMatchTuple.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      regex_match_tuple: cdktn.listMapper(awsRegexMatchSetRegexMatchTuplePropertyToTerraform, true)(this._regexMatchTuple.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      regex_match_tuple: {
        value: cdktn.listMapperHcl(awsRegexMatchSetRegexMatchTuplePropertyToHclTerraform, true)(this._regexMatchTuple.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsRegexMatchSet.RegexMatchTuplePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsRegexMatchSetFieldToMatchPropertyToTerraform(struct?: AwsRegexMatchSet.FieldToMatchPropertyOutputReference | AwsRegexMatchSet.FieldToMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: cdktn.stringToTerraform(struct!.data),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function awsRegexMatchSetFieldToMatchPropertyToHclTerraform(struct?: AwsRegexMatchSet.FieldToMatchPropertyOutputReference | AwsRegexMatchSet.FieldToMatchProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data: {
      value: cdktn.stringToHclTerraform(struct!.data),
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


export function awsRegexMatchSetRegexMatchTuplePropertyToTerraform(struct?: AwsRegexMatchSet.RegexMatchTupleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex_pattern_set_id: cdktn.stringToTerraform(struct!.regexPatternSetId),
    text_transformation: cdktn.stringToTerraform(struct!.textTransformation),
    field_to_match: awsRegexMatchSetFieldToMatchPropertyToTerraform(struct!.fieldToMatch),
  }
}


export function awsRegexMatchSetRegexMatchTuplePropertyToHclTerraform(struct?: AwsRegexMatchSet.RegexMatchTupleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex_pattern_set_id: {
      value: cdktn.stringToHclTerraform(struct!.regexPatternSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_transformation: {
      value: cdktn.stringToHclTerraform(struct!.textTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_to_match: {
      value: awsRegexMatchSetFieldToMatchPropertyToHclTerraform(struct!.fieldToMatch),
      isBlock: true,
      type: "list",
      storageClassType: "FieldToMatchPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsRegexMatchSet {
export interface FieldToMatchProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#data AwsRegexMatchSet#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#type AwsRegexMatchSet#type}
  */
  readonly type: string;
}
export class FieldToMatchPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FieldToMatchProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FieldToMatchProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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
export interface RegexMatchTupleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#regex_pattern_set_id AwsRegexMatchSet#regex_pattern_set_id}
  */
  readonly regexPatternSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#text_transformation AwsRegexMatchSet#text_transformation}
  */
  readonly textTransformation: string;
  /**
  * field_to_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/wafregional_regex_match_set#field_to_match AwsRegexMatchSet#field_to_match}
  */
  readonly fieldToMatch: FieldToMatchProperty;
}
export class RegexMatchTuplePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RegexMatchTupleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexPatternSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexPatternSetId = this._regexPatternSetId;
    }
    if (this._textTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation;
    }
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegexMatchTupleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regexPatternSetId = undefined;
      this._textTransformation = undefined;
      this._fieldToMatch.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regexPatternSetId = value.regexPatternSetId;
      this._textTransformation = value.textTransformation;
      this._fieldToMatch.internalValue = value.fieldToMatch;
    }
  }

  // regex_pattern_set_id - computed: false, optional: false, required: true
  private _regexPatternSetId?: string; 
  public get regexPatternSetId() {
    return this.getStringAttribute('regex_pattern_set_id');
  }
  public set regexPatternSetId(value: string) {
    this._regexPatternSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternSetIdInput() {
    return this._regexPatternSetId;
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: string; 
  public get textTransformation() {
    return this.getStringAttribute('text_transformation');
  }
  public set textTransformation(value: string) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation;
  }

  // field_to_match - computed: false, optional: false, required: true
  private _fieldToMatch = new FieldToMatchPropertyOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: FieldToMatchProperty) {
    this._fieldToMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }
}

export class RegexMatchTuplePropertyList extends cdktn.ComplexList {
  public internalValue? : RegexMatchTupleProperty[] | cdktn.IResolvable

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
  public get(index: number): RegexMatchTuplePropertyOutputReference {
    return new RegexMatchTuplePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
