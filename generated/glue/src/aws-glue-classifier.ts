// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsClassifierConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#id AwsClassifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#name AwsClassifier#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#region AwsClassifier#region}
  */
  readonly region?: string;
  /**
  * csv_classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#csv_classifier AwsClassifier#csv_classifier}
  */
  readonly csvClassifier?: AwsClassifier.CsvClassifierProperty;
  /**
  * grok_classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#grok_classifier AwsClassifier#grok_classifier}
  */
  readonly grokClassifier?: AwsClassifier.GrokClassifierProperty;
  /**
  * json_classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#json_classifier AwsClassifier#json_classifier}
  */
  readonly jsonClassifier?: AwsClassifier.JsonClassifierProperty;
  /**
  * xml_classifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#xml_classifier AwsClassifier#xml_classifier}
  */
  readonly xmlClassifier?: AwsClassifier.XmlClassifierProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier aws_glue_classifier}
*/
export class AwsClassifier extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_classifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsClassifier resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsClassifier to import
  * @param importFromId The id of the existing AwsClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsClassifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_classifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier aws_glue_classifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsClassifierConfig
  */
  public constructor(scope: Construct, id: string, config: AwsClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_classifier',
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
    this._csvClassifier.internalValue = config.csvClassifier;
    this._grokClassifier.internalValue = config.grokClassifier;
    this._jsonClassifier.internalValue = config.jsonClassifier;
    this._xmlClassifier.internalValue = config.xmlClassifier;
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

  // csv_classifier - computed: false, optional: true, required: false
  private _csvClassifier = new AwsClassifier.CsvClassifierPropertyOutputReference(this, "csv_classifier");
  public get csvClassifier() {
    return this._csvClassifier;
  }
  public putCsvClassifier(value: AwsClassifier.CsvClassifierProperty) {
    this._csvClassifier.internalValue = value;
  }
  public resetCsvClassifier() {
    this._csvClassifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvClassifierInput() {
    return this._csvClassifier.internalValue;
  }

  // grok_classifier - computed: false, optional: true, required: false
  private _grokClassifier = new AwsClassifier.GrokClassifierPropertyOutputReference(this, "grok_classifier");
  public get grokClassifier() {
    return this._grokClassifier;
  }
  public putGrokClassifier(value: AwsClassifier.GrokClassifierProperty) {
    this._grokClassifier.internalValue = value;
  }
  public resetGrokClassifier() {
    this._grokClassifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokClassifierInput() {
    return this._grokClassifier.internalValue;
  }

  // json_classifier - computed: false, optional: true, required: false
  private _jsonClassifier = new AwsClassifier.JsonClassifierPropertyOutputReference(this, "json_classifier");
  public get jsonClassifier() {
    return this._jsonClassifier;
  }
  public putJsonClassifier(value: AwsClassifier.JsonClassifierProperty) {
    this._jsonClassifier.internalValue = value;
  }
  public resetJsonClassifier() {
    this._jsonClassifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonClassifierInput() {
    return this._jsonClassifier.internalValue;
  }

  // xml_classifier - computed: false, optional: true, required: false
  private _xmlClassifier = new AwsClassifier.XmlClassifierPropertyOutputReference(this, "xml_classifier");
  public get xmlClassifier() {
    return this._xmlClassifier;
  }
  public putXmlClassifier(value: AwsClassifier.XmlClassifierProperty) {
    this._xmlClassifier.internalValue = value;
  }
  public resetXmlClassifier() {
    this._xmlClassifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlClassifierInput() {
    return this._xmlClassifier.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      csv_classifier: awsClassifierCsvClassifierPropertyToTerraform(this._csvClassifier.internalValue),
      grok_classifier: awsClassifierGrokClassifierPropertyToTerraform(this._grokClassifier.internalValue),
      json_classifier: awsClassifierJsonClassifierPropertyToTerraform(this._jsonClassifier.internalValue),
      xml_classifier: awsClassifierXmlClassifierPropertyToTerraform(this._xmlClassifier.internalValue),
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
      csv_classifier: {
        value: awsClassifierCsvClassifierPropertyToHclTerraform(this._csvClassifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsClassifier.CsvClassifierPropertyList",
      },
      grok_classifier: {
        value: awsClassifierGrokClassifierPropertyToHclTerraform(this._grokClassifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsClassifier.GrokClassifierPropertyList",
      },
      json_classifier: {
        value: awsClassifierJsonClassifierPropertyToHclTerraform(this._jsonClassifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsClassifier.JsonClassifierPropertyList",
      },
      xml_classifier: {
        value: awsClassifierXmlClassifierPropertyToHclTerraform(this._xmlClassifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsClassifier.XmlClassifierPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsClassifierCsvClassifierPropertyToTerraform(struct?: AwsClassifier.CsvClassifierPropertyOutputReference | AwsClassifier.CsvClassifierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_single_column: cdktn.booleanToTerraform(struct!.allowSingleColumn),
    contains_header: cdktn.stringToTerraform(struct!.containsHeader),
    custom_datatype_configured: cdktn.booleanToTerraform(struct!.customDatatypeConfigured),
    custom_datatypes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customDatatypes),
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    disable_value_trimming: cdktn.booleanToTerraform(struct!.disableValueTrimming),
    header: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.header),
    quote_symbol: cdktn.stringToTerraform(struct!.quoteSymbol),
    serde: cdktn.stringToTerraform(struct!.serde),
  }
}


export function awsClassifierCsvClassifierPropertyToHclTerraform(struct?: AwsClassifier.CsvClassifierPropertyOutputReference | AwsClassifier.CsvClassifierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_single_column: {
      value: cdktn.booleanToHclTerraform(struct!.allowSingleColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    contains_header: {
      value: cdktn.stringToHclTerraform(struct!.containsHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_datatype_configured: {
      value: cdktn.booleanToHclTerraform(struct!.customDatatypeConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_datatypes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customDatatypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_value_trimming: {
      value: cdktn.booleanToHclTerraform(struct!.disableValueTrimming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.header),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    quote_symbol: {
      value: cdktn.stringToHclTerraform(struct!.quoteSymbol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serde: {
      value: cdktn.stringToHclTerraform(struct!.serde),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsClassifierGrokClassifierPropertyToTerraform(struct?: AwsClassifier.GrokClassifierPropertyOutputReference | AwsClassifier.GrokClassifierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classification: cdktn.stringToTerraform(struct!.classification),
    custom_patterns: cdktn.stringToTerraform(struct!.customPatterns),
    grok_pattern: cdktn.stringToTerraform(struct!.grokPattern),
  }
}


export function awsClassifierGrokClassifierPropertyToHclTerraform(struct?: AwsClassifier.GrokClassifierPropertyOutputReference | AwsClassifier.GrokClassifierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    classification: {
      value: cdktn.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_patterns: {
      value: cdktn.stringToHclTerraform(struct!.customPatterns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktn.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsClassifierJsonClassifierPropertyToTerraform(struct?: AwsClassifier.JsonClassifierPropertyOutputReference | AwsClassifier.JsonClassifierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_path: cdktn.stringToTerraform(struct!.jsonPath),
  }
}


export function awsClassifierJsonClassifierPropertyToHclTerraform(struct?: AwsClassifier.JsonClassifierPropertyOutputReference | AwsClassifier.JsonClassifierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_path: {
      value: cdktn.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsClassifierXmlClassifierPropertyToTerraform(struct?: AwsClassifier.XmlClassifierPropertyOutputReference | AwsClassifier.XmlClassifierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classification: cdktn.stringToTerraform(struct!.classification),
    row_tag: cdktn.stringToTerraform(struct!.rowTag),
  }
}


export function awsClassifierXmlClassifierPropertyToHclTerraform(struct?: AwsClassifier.XmlClassifierPropertyOutputReference | AwsClassifier.XmlClassifierProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    classification: {
      value: cdktn.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_tag: {
      value: cdktn.stringToHclTerraform(struct!.rowTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsClassifier {
export interface CsvClassifierProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#allow_single_column AwsClassifier#allow_single_column}
  */
  readonly allowSingleColumn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#contains_header AwsClassifier#contains_header}
  */
  readonly containsHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#custom_datatype_configured AwsClassifier#custom_datatype_configured}
  */
  readonly customDatatypeConfigured?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#custom_datatypes AwsClassifier#custom_datatypes}
  */
  readonly customDatatypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#delimiter AwsClassifier#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#disable_value_trimming AwsClassifier#disable_value_trimming}
  */
  readonly disableValueTrimming?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#header AwsClassifier#header}
  */
  readonly header?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#quote_symbol AwsClassifier#quote_symbol}
  */
  readonly quoteSymbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#serde AwsClassifier#serde}
  */
  readonly serde?: string;
}
export class CsvClassifierPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsvClassifierProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSingleColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSingleColumn = this._allowSingleColumn;
    }
    if (this._containsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.containsHeader = this._containsHeader;
    }
    if (this._customDatatypeConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDatatypeConfigured = this._customDatatypeConfigured;
    }
    if (this._customDatatypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDatatypes = this._customDatatypes;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._disableValueTrimming !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableValueTrimming = this._disableValueTrimming;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._quoteSymbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteSymbol = this._quoteSymbol;
    }
    if (this._serde !== undefined) {
      hasAnyValues = true;
      internalValueResult.serde = this._serde;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsvClassifierProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSingleColumn = undefined;
      this._containsHeader = undefined;
      this._customDatatypeConfigured = undefined;
      this._customDatatypes = undefined;
      this._delimiter = undefined;
      this._disableValueTrimming = undefined;
      this._header = undefined;
      this._quoteSymbol = undefined;
      this._serde = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSingleColumn = value.allowSingleColumn;
      this._containsHeader = value.containsHeader;
      this._customDatatypeConfigured = value.customDatatypeConfigured;
      this._customDatatypes = value.customDatatypes;
      this._delimiter = value.delimiter;
      this._disableValueTrimming = value.disableValueTrimming;
      this._header = value.header;
      this._quoteSymbol = value.quoteSymbol;
      this._serde = value.serde;
    }
  }

  // allow_single_column - computed: false, optional: true, required: false
  private _allowSingleColumn?: boolean | cdktn.IResolvable; 
  public get allowSingleColumn() {
    return this.getBooleanAttribute('allow_single_column');
  }
  public set allowSingleColumn(value: boolean | cdktn.IResolvable) {
    this._allowSingleColumn = value;
  }
  public resetAllowSingleColumn() {
    this._allowSingleColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSingleColumnInput() {
    return this._allowSingleColumn;
  }

  // contains_header - computed: false, optional: true, required: false
  private _containsHeader?: string; 
  public get containsHeader() {
    return this.getStringAttribute('contains_header');
  }
  public set containsHeader(value: string) {
    this._containsHeader = value;
  }
  public resetContainsHeader() {
    this._containsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsHeaderInput() {
    return this._containsHeader;
  }

  // custom_datatype_configured - computed: false, optional: true, required: false
  private _customDatatypeConfigured?: boolean | cdktn.IResolvable; 
  public get customDatatypeConfigured() {
    return this.getBooleanAttribute('custom_datatype_configured');
  }
  public set customDatatypeConfigured(value: boolean | cdktn.IResolvable) {
    this._customDatatypeConfigured = value;
  }
  public resetCustomDatatypeConfigured() {
    this._customDatatypeConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDatatypeConfiguredInput() {
    return this._customDatatypeConfigured;
  }

  // custom_datatypes - computed: false, optional: true, required: false
  private _customDatatypes?: string[]; 
  public get customDatatypes() {
    return this.getListAttribute('custom_datatypes');
  }
  public set customDatatypes(value: string[]) {
    this._customDatatypes = value;
  }
  public resetCustomDatatypes() {
    this._customDatatypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDatatypesInput() {
    return this._customDatatypes;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // disable_value_trimming - computed: false, optional: true, required: false
  private _disableValueTrimming?: boolean | cdktn.IResolvable; 
  public get disableValueTrimming() {
    return this.getBooleanAttribute('disable_value_trimming');
  }
  public set disableValueTrimming(value: boolean | cdktn.IResolvable) {
    this._disableValueTrimming = value;
  }
  public resetDisableValueTrimming() {
    this._disableValueTrimming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableValueTrimmingInput() {
    return this._disableValueTrimming;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string[]; 
  public get header() {
    return this.getListAttribute('header');
  }
  public set header(value: string[]) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // quote_symbol - computed: false, optional: true, required: false
  private _quoteSymbol?: string; 
  public get quoteSymbol() {
    return this.getStringAttribute('quote_symbol');
  }
  public set quoteSymbol(value: string) {
    this._quoteSymbol = value;
  }
  public resetQuoteSymbol() {
    this._quoteSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteSymbolInput() {
    return this._quoteSymbol;
  }

  // serde - computed: true, optional: true, required: false
  private _serde?: string; 
  public get serde() {
    return this.getStringAttribute('serde');
  }
  public set serde(value: string) {
    this._serde = value;
  }
  public resetSerde() {
    this._serde = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeInput() {
    return this._serde;
  }
}
export interface GrokClassifierProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#classification AwsClassifier#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#custom_patterns AwsClassifier#custom_patterns}
  */
  readonly customPatterns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#grok_pattern AwsClassifier#grok_pattern}
  */
  readonly grokPattern: string;
}
export class GrokClassifierPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrokClassifierProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._customPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatterns = this._customPatterns;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrokClassifierProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classification = undefined;
      this._customPatterns = undefined;
      this._grokPattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classification = value.classification;
      this._customPatterns = value.customPatterns;
      this._grokPattern = value.grokPattern;
    }
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // custom_patterns - computed: false, optional: true, required: false
  private _customPatterns?: string; 
  public get customPatterns() {
    return this.getStringAttribute('custom_patterns');
  }
  public set customPatterns(value: string) {
    this._customPatterns = value;
  }
  public resetCustomPatterns() {
    this._customPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternsInput() {
    return this._customPatterns;
  }

  // grok_pattern - computed: false, optional: false, required: true
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }
}
export interface JsonClassifierProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#json_path AwsClassifier#json_path}
  */
  readonly jsonPath: string;
}
export class JsonClassifierPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JsonClassifierProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JsonClassifierProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonPath = value.jsonPath;
    }
  }

  // json_path - computed: false, optional: false, required: true
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }
}
export interface XmlClassifierProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#classification AwsClassifier#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/glue_classifier#row_tag AwsClassifier#row_tag}
  */
  readonly rowTag: string;
}
export class XmlClassifierPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): XmlClassifierProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._rowTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowTag = this._rowTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XmlClassifierProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classification = undefined;
      this._rowTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classification = value.classification;
      this._rowTag = value.rowTag;
    }
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // row_tag - computed: false, optional: false, required: true
  private _rowTag?: string; 
  public get rowTag() {
    return this.getStringAttribute('row_tag');
  }
  public set rowTag(value: string) {
    this._rowTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowTagInput() {
    return this._rowTag;
  }
}
}
