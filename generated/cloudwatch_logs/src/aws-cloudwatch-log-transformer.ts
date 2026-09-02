// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfTransformerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#log_group_arn TfTransformer#log_group_arn}
  */
  readonly logGroupArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#region TfTransformer#region}
  */
  readonly region?: string;
  /**
  * transformer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#transformer_config TfTransformer#transformer_config}
  */
  readonly transformerConfig?: TfTransformer.TransformerConfigProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer aws_cloudwatch_log_transformer}
*/
export class TfTransformer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_transformer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfTransformer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfTransformer to import
  * @param importFromId The id of the existing TfTransformer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfTransformer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_transformer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer aws_cloudwatch_log_transformer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfTransformerConfig
  */
  public constructor(scope: Construct, id: string, config: TfTransformerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_transformer',
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
    this._logGroupArn = config.logGroupArn;
    this._region = config.region;
    this._transformerConfig.internalValue = config.transformerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // log_group_arn - computed: false, optional: false, required: true
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
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

  // transformer_config - computed: false, optional: true, required: false
  private _transformerConfig = new TfTransformer.TransformerConfigPropertyList(this, "transformer_config", false);
  public get transformerConfig() {
    return this._transformerConfig;
  }
  public putTransformerConfig(value: TfTransformer.TransformerConfigProperty[] | cdktn.IResolvable) {
    this._transformerConfig.internalValue = value;
  }
  public resetTransformerConfig() {
    this._transformerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformerConfigInput() {
    return this._transformerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_group_arn: cdktn.stringToTerraform(this._logGroupArn),
      region: cdktn.stringToTerraform(this._region),
      transformer_config: cdktn.listMapper(tfTransformerTransformerConfigPropertyToTerraform, true)(this._transformerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      log_group_arn: {
        value: cdktn.stringToHclTerraform(this._logGroupArn),
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
      transformer_config: {
        value: cdktn.listMapperHcl(tfTransformerTransformerConfigPropertyToHclTerraform, true)(this._transformerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfTransformer.TransformerConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfTransformerTransformerConfigAddKeysEntryPropertyToTerraform(struct?: TfTransformer.TransformerConfigAddKeysEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function tfTransformerTransformerConfigAddKeysEntryPropertyToHclTerraform(struct?: TfTransformer.TransformerConfigAddKeysEntryProperty | cdktn.IResolvable): any {
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
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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


export function tfTransformerAddKeysPropertyToTerraform(struct?: TfTransformer.AddKeysProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(tfTransformerTransformerConfigAddKeysEntryPropertyToTerraform, true)(struct!.entry),
  }
}


export function tfTransformerAddKeysPropertyToHclTerraform(struct?: TfTransformer.AddKeysProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(tfTransformerTransformerConfigAddKeysEntryPropertyToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerConfigAddKeysEntryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerTransformerConfigCopyValueEntryPropertyToTerraform(struct?: TfTransformer.TransformerConfigCopyValueEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function tfTransformerTransformerConfigCopyValueEntryPropertyToHclTerraform(struct?: TfTransformer.TransformerConfigCopyValueEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerCopyValuePropertyToTerraform(struct?: TfTransformer.CopyValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(tfTransformerTransformerConfigCopyValueEntryPropertyToTerraform, true)(struct!.entry),
  }
}


export function tfTransformerCopyValuePropertyToHclTerraform(struct?: TfTransformer.CopyValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(tfTransformerTransformerConfigCopyValueEntryPropertyToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerConfigCopyValueEntryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerCsvPropertyToTerraform(struct?: TfTransformer.CsvProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    quote_character: cdktn.stringToTerraform(struct!.quoteCharacter),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerCsvPropertyToHclTerraform(struct?: TfTransformer.CsvProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
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
    quote_character: {
      value: cdktn.stringToHclTerraform(struct!.quoteCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerDateTimeConverterPropertyToTerraform(struct?: TfTransformer.DateTimeConverterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    locale: cdktn.stringToTerraform(struct!.locale),
    match_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchPatterns),
    source: cdktn.stringToTerraform(struct!.source),
    source_timezone: cdktn.stringToTerraform(struct!.sourceTimezone),
    target: cdktn.stringToTerraform(struct!.target),
    target_format: cdktn.stringToTerraform(struct!.targetFormat),
    target_timezone: cdktn.stringToTerraform(struct!.targetTimezone),
  }
}


export function tfTransformerDateTimeConverterPropertyToHclTerraform(struct?: TfTransformer.DateTimeConverterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_timezone: {
      value: cdktn.stringToHclTerraform(struct!.sourceTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_format: {
      value: cdktn.stringToHclTerraform(struct!.targetFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_timezone: {
      value: cdktn.stringToHclTerraform(struct!.targetTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerDeleteKeysPropertyToTerraform(struct?: TfTransformer.DeleteKeysProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    with_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.withKeys),
  }
}


export function tfTransformerDeleteKeysPropertyToHclTerraform(struct?: TfTransformer.DeleteKeysProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    with_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerGrokPropertyToTerraform(struct?: TfTransformer.GrokProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match: cdktn.stringToTerraform(struct!.match),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerGrokPropertyToHclTerraform(struct?: TfTransformer.GrokProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match: {
      value: cdktn.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerListToMapPropertyToTerraform(struct?: TfTransformer.ListToMapProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flatten: cdktn.booleanToTerraform(struct!.flatten),
    flattened_element: cdktn.stringToTerraform(struct!.flattenedElement),
    key: cdktn.stringToTerraform(struct!.key),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
    value_key: cdktn.stringToTerraform(struct!.valueKey),
  }
}


export function tfTransformerListToMapPropertyToHclTerraform(struct?: TfTransformer.ListToMapProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flatten: {
      value: cdktn.booleanToHclTerraform(struct!.flatten),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flattened_element: {
      value: cdktn.stringToHclTerraform(struct!.flattenedElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_key: {
      value: cdktn.stringToHclTerraform(struct!.valueKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerLowerCaseStringPropertyToTerraform(struct?: TfTransformer.LowerCaseStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    with_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.withKeys),
  }
}


export function tfTransformerLowerCaseStringPropertyToHclTerraform(struct?: TfTransformer.LowerCaseStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    with_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerTransformerConfigMoveKeysEntryPropertyToTerraform(struct?: TfTransformer.TransformerConfigMoveKeysEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function tfTransformerTransformerConfigMoveKeysEntryPropertyToHclTerraform(struct?: TfTransformer.TransformerConfigMoveKeysEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerMoveKeysPropertyToTerraform(struct?: TfTransformer.MoveKeysProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(tfTransformerTransformerConfigMoveKeysEntryPropertyToTerraform, true)(struct!.entry),
  }
}


export function tfTransformerMoveKeysPropertyToHclTerraform(struct?: TfTransformer.MoveKeysProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(tfTransformerTransformerConfigMoveKeysEntryPropertyToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerConfigMoveKeysEntryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerParseCloudfrontPropertyToTerraform(struct?: TfTransformer.ParseCloudfrontProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerParseCloudfrontPropertyToHclTerraform(struct?: TfTransformer.ParseCloudfrontProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerParseJsonPropertyToTerraform(struct?: TfTransformer.ParseJsonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerParseJsonPropertyToHclTerraform(struct?: TfTransformer.ParseJsonProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerParseKeyValuePropertyToTerraform(struct?: TfTransformer.ParseKeyValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    field_delimiter: cdktn.stringToTerraform(struct!.fieldDelimiter),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    key_value_delimiter: cdktn.stringToTerraform(struct!.keyValueDelimiter),
    non_match_value: cdktn.stringToTerraform(struct!.nonMatchValue),
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerParseKeyValuePropertyToHclTerraform(struct?: TfTransformer.ParseKeyValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.keyValueDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_match_value: {
      value: cdktn.stringToHclTerraform(struct!.nonMatchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerParsePostgresPropertyToTerraform(struct?: TfTransformer.ParsePostgresProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerParsePostgresPropertyToHclTerraform(struct?: TfTransformer.ParsePostgresProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerParseRoute53PropertyToTerraform(struct?: TfTransformer.ParseRoute53Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerParseRoute53PropertyToHclTerraform(struct?: TfTransformer.ParseRoute53Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerParseToOcsfPropertyToTerraform(struct?: TfTransformer.ParseToOcsfProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_source: cdktn.stringToTerraform(struct!.eventSource),
    ocsf_version: cdktn.stringToTerraform(struct!.ocsfVersion),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerParseToOcsfPropertyToHclTerraform(struct?: TfTransformer.ParseToOcsfProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_source: {
      value: cdktn.stringToHclTerraform(struct!.eventSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsf_version: {
      value: cdktn.stringToHclTerraform(struct!.ocsfVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerParseVpcPropertyToTerraform(struct?: TfTransformer.ParseVpcProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerParseVpcPropertyToHclTerraform(struct?: TfTransformer.ParseVpcProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerParseWafPropertyToTerraform(struct?: TfTransformer.ParseWafProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerParseWafPropertyToHclTerraform(struct?: TfTransformer.ParseWafProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerTransformerConfigRenameKeysEntryPropertyToTerraform(struct?: TfTransformer.TransformerConfigRenameKeysEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    rename_to: cdktn.stringToTerraform(struct!.renameTo),
  }
}


export function tfTransformerTransformerConfigRenameKeysEntryPropertyToHclTerraform(struct?: TfTransformer.TransformerConfigRenameKeysEntryProperty | cdktn.IResolvable): any {
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
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rename_to: {
      value: cdktn.stringToHclTerraform(struct!.renameTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerRenameKeysPropertyToTerraform(struct?: TfTransformer.RenameKeysProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(tfTransformerTransformerConfigRenameKeysEntryPropertyToTerraform, true)(struct!.entry),
  }
}


export function tfTransformerRenameKeysPropertyToHclTerraform(struct?: TfTransformer.RenameKeysProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(tfTransformerTransformerConfigRenameKeysEntryPropertyToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerConfigRenameKeysEntryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerTransformerConfigSplitStringEntryPropertyToTerraform(struct?: TfTransformer.TransformerConfigSplitStringEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function tfTransformerTransformerConfigSplitStringEntryPropertyToHclTerraform(struct?: TfTransformer.TransformerConfigSplitStringEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerSplitStringPropertyToTerraform(struct?: TfTransformer.SplitStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(tfTransformerTransformerConfigSplitStringEntryPropertyToTerraform, true)(struct!.entry),
  }
}


export function tfTransformerSplitStringPropertyToHclTerraform(struct?: TfTransformer.SplitStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(tfTransformerTransformerConfigSplitStringEntryPropertyToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerConfigSplitStringEntryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerTransformerConfigSubstituteStringEntryPropertyToTerraform(struct?: TfTransformer.TransformerConfigSubstituteStringEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.stringToTerraform(struct!.from),
    source: cdktn.stringToTerraform(struct!.source),
    to: cdktn.stringToTerraform(struct!.to),
  }
}


export function tfTransformerTransformerConfigSubstituteStringEntryPropertyToHclTerraform(struct?: TfTransformer.TransformerConfigSubstituteStringEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktn.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerSubstituteStringPropertyToTerraform(struct?: TfTransformer.SubstituteStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(tfTransformerTransformerConfigSubstituteStringEntryPropertyToTerraform, true)(struct!.entry),
  }
}


export function tfTransformerSubstituteStringPropertyToHclTerraform(struct?: TfTransformer.SubstituteStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(tfTransformerTransformerConfigSubstituteStringEntryPropertyToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerConfigSubstituteStringEntryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerTrimStringPropertyToTerraform(struct?: TfTransformer.TrimStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    with_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.withKeys),
  }
}


export function tfTransformerTrimStringPropertyToHclTerraform(struct?: TfTransformer.TrimStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    with_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerTransformerConfigTypeConverterEntryPropertyToTerraform(struct?: TfTransformer.TransformerConfigTypeConverterEntryProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function tfTransformerTransformerConfigTypeConverterEntryPropertyToHclTerraform(struct?: TfTransformer.TransformerConfigTypeConverterEntryProperty | cdktn.IResolvable): any {
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


export function tfTransformerTypeConverterPropertyToTerraform(struct?: TfTransformer.TypeConverterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(tfTransformerTransformerConfigTypeConverterEntryPropertyToTerraform, true)(struct!.entry),
  }
}


export function tfTransformerTypeConverterPropertyToHclTerraform(struct?: TfTransformer.TypeConverterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(tfTransformerTransformerConfigTypeConverterEntryPropertyToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerConfigTypeConverterEntryPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerUpperCaseStringPropertyToTerraform(struct?: TfTransformer.UpperCaseStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    with_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.withKeys),
  }
}


export function tfTransformerUpperCaseStringPropertyToHclTerraform(struct?: TfTransformer.UpperCaseStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    with_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfTransformerTransformerConfigPropertyToTerraform(struct?: TfTransformer.TransformerConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_keys: cdktn.listMapper(tfTransformerAddKeysPropertyToTerraform, true)(struct!.addKeys),
    copy_value: cdktn.listMapper(tfTransformerCopyValuePropertyToTerraform, true)(struct!.copyValue),
    csv: cdktn.listMapper(tfTransformerCsvPropertyToTerraform, true)(struct!.csv),
    date_time_converter: cdktn.listMapper(tfTransformerDateTimeConverterPropertyToTerraform, true)(struct!.dateTimeConverter),
    delete_keys: cdktn.listMapper(tfTransformerDeleteKeysPropertyToTerraform, true)(struct!.deleteKeys),
    grok: cdktn.listMapper(tfTransformerGrokPropertyToTerraform, true)(struct!.grok),
    list_to_map: cdktn.listMapper(tfTransformerListToMapPropertyToTerraform, true)(struct!.listToMap),
    lower_case_string: cdktn.listMapper(tfTransformerLowerCaseStringPropertyToTerraform, true)(struct!.lowerCaseString),
    move_keys: cdktn.listMapper(tfTransformerMoveKeysPropertyToTerraform, true)(struct!.moveKeys),
    parse_cloudfront: cdktn.listMapper(tfTransformerParseCloudfrontPropertyToTerraform, true)(struct!.parseCloudfront),
    parse_json: cdktn.listMapper(tfTransformerParseJsonPropertyToTerraform, true)(struct!.parseJson),
    parse_key_value: cdktn.listMapper(tfTransformerParseKeyValuePropertyToTerraform, true)(struct!.parseKeyValue),
    parse_postgres: cdktn.listMapper(tfTransformerParsePostgresPropertyToTerraform, true)(struct!.parsePostgres),
    parse_route53: cdktn.listMapper(tfTransformerParseRoute53PropertyToTerraform, true)(struct!.parseRoute53),
    parse_to_ocsf: cdktn.listMapper(tfTransformerParseToOcsfPropertyToTerraform, true)(struct!.parseToOcsf),
    parse_vpc: cdktn.listMapper(tfTransformerParseVpcPropertyToTerraform, true)(struct!.parseVpc),
    parse_waf: cdktn.listMapper(tfTransformerParseWafPropertyToTerraform, true)(struct!.parseWaf),
    rename_keys: cdktn.listMapper(tfTransformerRenameKeysPropertyToTerraform, true)(struct!.renameKeys),
    split_string: cdktn.listMapper(tfTransformerSplitStringPropertyToTerraform, true)(struct!.splitString),
    substitute_string: cdktn.listMapper(tfTransformerSubstituteStringPropertyToTerraform, true)(struct!.substituteString),
    trim_string: cdktn.listMapper(tfTransformerTrimStringPropertyToTerraform, true)(struct!.trimString),
    type_converter: cdktn.listMapper(tfTransformerTypeConverterPropertyToTerraform, true)(struct!.typeConverter),
    upper_case_string: cdktn.listMapper(tfTransformerUpperCaseStringPropertyToTerraform, true)(struct!.upperCaseString),
  }
}


export function tfTransformerTransformerConfigPropertyToHclTerraform(struct?: TfTransformer.TransformerConfigProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_keys: {
      value: cdktn.listMapperHcl(tfTransformerAddKeysPropertyToHclTerraform, true)(struct!.addKeys),
      isBlock: true,
      type: "list",
      storageClassType: "AddKeysPropertyList",
    },
    copy_value: {
      value: cdktn.listMapperHcl(tfTransformerCopyValuePropertyToHclTerraform, true)(struct!.copyValue),
      isBlock: true,
      type: "list",
      storageClassType: "CopyValuePropertyList",
    },
    csv: {
      value: cdktn.listMapperHcl(tfTransformerCsvPropertyToHclTerraform, true)(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "CsvPropertyList",
    },
    date_time_converter: {
      value: cdktn.listMapperHcl(tfTransformerDateTimeConverterPropertyToHclTerraform, true)(struct!.dateTimeConverter),
      isBlock: true,
      type: "list",
      storageClassType: "DateTimeConverterPropertyList",
    },
    delete_keys: {
      value: cdktn.listMapperHcl(tfTransformerDeleteKeysPropertyToHclTerraform, true)(struct!.deleteKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DeleteKeysPropertyList",
    },
    grok: {
      value: cdktn.listMapperHcl(tfTransformerGrokPropertyToHclTerraform, true)(struct!.grok),
      isBlock: true,
      type: "list",
      storageClassType: "GrokPropertyList",
    },
    list_to_map: {
      value: cdktn.listMapperHcl(tfTransformerListToMapPropertyToHclTerraform, true)(struct!.listToMap),
      isBlock: true,
      type: "list",
      storageClassType: "ListToMapPropertyList",
    },
    lower_case_string: {
      value: cdktn.listMapperHcl(tfTransformerLowerCaseStringPropertyToHclTerraform, true)(struct!.lowerCaseString),
      isBlock: true,
      type: "list",
      storageClassType: "LowerCaseStringPropertyList",
    },
    move_keys: {
      value: cdktn.listMapperHcl(tfTransformerMoveKeysPropertyToHclTerraform, true)(struct!.moveKeys),
      isBlock: true,
      type: "list",
      storageClassType: "MoveKeysPropertyList",
    },
    parse_cloudfront: {
      value: cdktn.listMapperHcl(tfTransformerParseCloudfrontPropertyToHclTerraform, true)(struct!.parseCloudfront),
      isBlock: true,
      type: "list",
      storageClassType: "ParseCloudfrontPropertyList",
    },
    parse_json: {
      value: cdktn.listMapperHcl(tfTransformerParseJsonPropertyToHclTerraform, true)(struct!.parseJson),
      isBlock: true,
      type: "list",
      storageClassType: "ParseJsonPropertyList",
    },
    parse_key_value: {
      value: cdktn.listMapperHcl(tfTransformerParseKeyValuePropertyToHclTerraform, true)(struct!.parseKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "ParseKeyValuePropertyList",
    },
    parse_postgres: {
      value: cdktn.listMapperHcl(tfTransformerParsePostgresPropertyToHclTerraform, true)(struct!.parsePostgres),
      isBlock: true,
      type: "list",
      storageClassType: "ParsePostgresPropertyList",
    },
    parse_route53: {
      value: cdktn.listMapperHcl(tfTransformerParseRoute53PropertyToHclTerraform, true)(struct!.parseRoute53),
      isBlock: true,
      type: "list",
      storageClassType: "ParseRoute53PropertyList",
    },
    parse_to_ocsf: {
      value: cdktn.listMapperHcl(tfTransformerParseToOcsfPropertyToHclTerraform, true)(struct!.parseToOcsf),
      isBlock: true,
      type: "list",
      storageClassType: "ParseToOcsfPropertyList",
    },
    parse_vpc: {
      value: cdktn.listMapperHcl(tfTransformerParseVpcPropertyToHclTerraform, true)(struct!.parseVpc),
      isBlock: true,
      type: "list",
      storageClassType: "ParseVpcPropertyList",
    },
    parse_waf: {
      value: cdktn.listMapperHcl(tfTransformerParseWafPropertyToHclTerraform, true)(struct!.parseWaf),
      isBlock: true,
      type: "list",
      storageClassType: "ParseWafPropertyList",
    },
    rename_keys: {
      value: cdktn.listMapperHcl(tfTransformerRenameKeysPropertyToHclTerraform, true)(struct!.renameKeys),
      isBlock: true,
      type: "list",
      storageClassType: "RenameKeysPropertyList",
    },
    split_string: {
      value: cdktn.listMapperHcl(tfTransformerSplitStringPropertyToHclTerraform, true)(struct!.splitString),
      isBlock: true,
      type: "list",
      storageClassType: "SplitStringPropertyList",
    },
    substitute_string: {
      value: cdktn.listMapperHcl(tfTransformerSubstituteStringPropertyToHclTerraform, true)(struct!.substituteString),
      isBlock: true,
      type: "list",
      storageClassType: "SubstituteStringPropertyList",
    },
    trim_string: {
      value: cdktn.listMapperHcl(tfTransformerTrimStringPropertyToHclTerraform, true)(struct!.trimString),
      isBlock: true,
      type: "list",
      storageClassType: "TrimStringPropertyList",
    },
    type_converter: {
      value: cdktn.listMapperHcl(tfTransformerTypeConverterPropertyToHclTerraform, true)(struct!.typeConverter),
      isBlock: true,
      type: "list",
      storageClassType: "TypeConverterPropertyList",
    },
    upper_case_string: {
      value: cdktn.listMapperHcl(tfTransformerUpperCaseStringPropertyToHclTerraform, true)(struct!.upperCaseString),
      isBlock: true,
      type: "list",
      storageClassType: "UpperCaseStringPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfTransformer {
export interface TransformerConfigAddKeysEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#key TfTransformer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists TfTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#value TfTransformer#value}
  */
  readonly value: string;
}
export class TransformerConfigAddKeysEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformerConfigAddKeysEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerConfigAddKeysEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._overwriteIfExists = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._overwriteIfExists = value.overwriteIfExists;
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

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
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

export class TransformerConfigAddKeysEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformerConfigAddKeysEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformerConfigAddKeysEntryPropertyOutputReference {
    return new TransformerConfigAddKeysEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddKeysProperty {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#entry TfTransformer#entry}
  */
  readonly entry?: TransformerConfigAddKeysEntryProperty[] | cdktn.IResolvable;
}
export class AddKeysPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AddKeysProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddKeysProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new TransformerConfigAddKeysEntryPropertyList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: TransformerConfigAddKeysEntryProperty[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class AddKeysPropertyList extends cdktn.ComplexList {
  public internalValue? : AddKeysProperty[] | cdktn.IResolvable

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
  public get(index: number): AddKeysPropertyOutputReference {
    return new AddKeysPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerConfigCopyValueEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists TfTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#target TfTransformer#target}
  */
  readonly target: string;
}
export class TransformerConfigCopyValueEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformerConfigCopyValueEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerConfigCopyValueEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overwriteIfExists = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overwriteIfExists = value.overwriteIfExists;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TransformerConfigCopyValueEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformerConfigCopyValueEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformerConfigCopyValueEntryPropertyOutputReference {
    return new TransformerConfigCopyValueEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CopyValueProperty {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#entry TfTransformer#entry}
  */
  readonly entry?: TransformerConfigCopyValueEntryProperty[] | cdktn.IResolvable;
}
export class CopyValuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CopyValueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CopyValueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new TransformerConfigCopyValueEntryPropertyList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: TransformerConfigCopyValueEntryProperty[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class CopyValuePropertyList extends cdktn.ComplexList {
  public internalValue? : CopyValueProperty[] | cdktn.IResolvable

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
  public get(index: number): CopyValuePropertyOutputReference {
    return new CopyValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsvProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#columns TfTransformer#columns}
  */
  readonly columns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#delimiter TfTransformer#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#quote_character TfTransformer#quote_character}
  */
  readonly quoteCharacter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class CsvPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CsvProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._quoteCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteCharacter = this._quoteCharacter;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsvProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._delimiter = undefined;
      this._quoteCharacter = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._delimiter = value.delimiter;
      this._quoteCharacter = value.quoteCharacter;
      this._source = value.source;
    }
  }

  // columns - computed: true, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // delimiter - computed: true, optional: true, required: false
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

  // quote_character - computed: true, optional: true, required: false
  private _quoteCharacter?: string; 
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }
  public set quoteCharacter(value: string) {
    this._quoteCharacter = value;
  }
  public resetQuoteCharacter() {
    this._quoteCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharacterInput() {
    return this._quoteCharacter;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CsvPropertyList extends cdktn.ComplexList {
  public internalValue? : CsvProperty[] | cdktn.IResolvable

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
  public get(index: number): CsvPropertyOutputReference {
    return new CsvPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DateTimeConverterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#locale TfTransformer#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#match_patterns TfTransformer#match_patterns}
  */
  readonly matchPatterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source_timezone TfTransformer#source_timezone}
  */
  readonly sourceTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#target TfTransformer#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#target_format TfTransformer#target_format}
  */
  readonly targetFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#target_timezone TfTransformer#target_timezone}
  */
  readonly targetTimezone?: string;
}
export class DateTimeConverterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DateTimeConverterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._matchPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPatterns = this._matchPatterns;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTimezone = this._sourceTimezone;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFormat = this._targetFormat;
    }
    if (this._targetTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTimezone = this._targetTimezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DateTimeConverterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locale = undefined;
      this._matchPatterns = undefined;
      this._source = undefined;
      this._sourceTimezone = undefined;
      this._target = undefined;
      this._targetFormat = undefined;
      this._targetTimezone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locale = value.locale;
      this._matchPatterns = value.matchPatterns;
      this._source = value.source;
      this._sourceTimezone = value.sourceTimezone;
      this._target = value.target;
      this._targetFormat = value.targetFormat;
      this._targetTimezone = value.targetTimezone;
    }
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // match_patterns - computed: false, optional: false, required: true
  private _matchPatterns?: string[]; 
  public get matchPatterns() {
    return this.getListAttribute('match_patterns');
  }
  public set matchPatterns(value: string[]) {
    this._matchPatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternsInput() {
    return this._matchPatterns;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_timezone - computed: true, optional: true, required: false
  private _sourceTimezone?: string; 
  public get sourceTimezone() {
    return this.getStringAttribute('source_timezone');
  }
  public set sourceTimezone(value: string) {
    this._sourceTimezone = value;
  }
  public resetSourceTimezone() {
    this._sourceTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTimezoneInput() {
    return this._sourceTimezone;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_format - computed: true, optional: true, required: false
  private _targetFormat?: string; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat;
  }

  // target_timezone - computed: true, optional: true, required: false
  private _targetTimezone?: string; 
  public get targetTimezone() {
    return this.getStringAttribute('target_timezone');
  }
  public set targetTimezone(value: string) {
    this._targetTimezone = value;
  }
  public resetTargetTimezone() {
    this._targetTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTimezoneInput() {
    return this._targetTimezone;
  }
}

export class DateTimeConverterPropertyList extends cdktn.ComplexList {
  public internalValue? : DateTimeConverterProperty[] | cdktn.IResolvable

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
  public get(index: number): DateTimeConverterPropertyOutputReference {
    return new DateTimeConverterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeleteKeysProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#with_keys TfTransformer#with_keys}
  */
  readonly withKeys: string[];
}
export class DeleteKeysPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DeleteKeysProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeleteKeysProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withKeys = value.withKeys;
    }
  }

  // with_keys - computed: false, optional: false, required: true
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }
}

export class DeleteKeysPropertyList extends cdktn.ComplexList {
  public internalValue? : DeleteKeysProperty[] | cdktn.IResolvable

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
  public get(index: number): DeleteKeysPropertyOutputReference {
    return new DeleteKeysPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrokProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#match TfTransformer#match}
  */
  readonly match: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class GrokPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GrokProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrokProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._source = value.source;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class GrokPropertyList extends cdktn.ComplexList {
  public internalValue? : GrokProperty[] | cdktn.IResolvable

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
  public get(index: number): GrokPropertyOutputReference {
    return new GrokPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ListToMapProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#flatten TfTransformer#flatten}
  */
  readonly flatten?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#flattened_element TfTransformer#flattened_element}
  */
  readonly flattenedElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#key TfTransformer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#target TfTransformer#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#value_key TfTransformer#value_key}
  */
  readonly valueKey?: string;
}
export class ListToMapPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ListToMapProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flatten !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatten = this._flatten;
    }
    if (this._flattenedElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenedElement = this._flattenedElement;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._valueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueKey = this._valueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListToMapProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flatten = undefined;
      this._flattenedElement = undefined;
      this._key = undefined;
      this._source = undefined;
      this._target = undefined;
      this._valueKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flatten = value.flatten;
      this._flattenedElement = value.flattenedElement;
      this._key = value.key;
      this._source = value.source;
      this._target = value.target;
      this._valueKey = value.valueKey;
    }
  }

  // flatten - computed: true, optional: true, required: false
  private _flatten?: boolean | cdktn.IResolvable; 
  public get flatten() {
    return this.getBooleanAttribute('flatten');
  }
  public set flatten(value: boolean | cdktn.IResolvable) {
    this._flatten = value;
  }
  public resetFlatten() {
    this._flatten = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenInput() {
    return this._flatten;
  }

  // flattened_element - computed: true, optional: true, required: false
  private _flattenedElement?: string; 
  public get flattenedElement() {
    return this.getStringAttribute('flattened_element');
  }
  public set flattenedElement(value: string) {
    this._flattenedElement = value;
  }
  public resetFlattenedElement() {
    this._flattenedElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenedElementInput() {
    return this._flattenedElement;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // value_key - computed: true, optional: true, required: false
  private _valueKey?: string; 
  public get valueKey() {
    return this.getStringAttribute('value_key');
  }
  public set valueKey(value: string) {
    this._valueKey = value;
  }
  public resetValueKey() {
    this._valueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueKeyInput() {
    return this._valueKey;
  }
}

export class ListToMapPropertyList extends cdktn.ComplexList {
  public internalValue? : ListToMapProperty[] | cdktn.IResolvable

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
  public get(index: number): ListToMapPropertyOutputReference {
    return new ListToMapPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LowerCaseStringProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#with_keys TfTransformer#with_keys}
  */
  readonly withKeys: string[];
}
export class LowerCaseStringPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LowerCaseStringProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LowerCaseStringProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withKeys = value.withKeys;
    }
  }

  // with_keys - computed: false, optional: false, required: true
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }
}

export class LowerCaseStringPropertyList extends cdktn.ComplexList {
  public internalValue? : LowerCaseStringProperty[] | cdktn.IResolvable

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
  public get(index: number): LowerCaseStringPropertyOutputReference {
    return new LowerCaseStringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerConfigMoveKeysEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists TfTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#target TfTransformer#target}
  */
  readonly target: string;
}
export class TransformerConfigMoveKeysEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformerConfigMoveKeysEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerConfigMoveKeysEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overwriteIfExists = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overwriteIfExists = value.overwriteIfExists;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TransformerConfigMoveKeysEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformerConfigMoveKeysEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformerConfigMoveKeysEntryPropertyOutputReference {
    return new TransformerConfigMoveKeysEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MoveKeysProperty {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#entry TfTransformer#entry}
  */
  readonly entry?: TransformerConfigMoveKeysEntryProperty[] | cdktn.IResolvable;
}
export class MoveKeysPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MoveKeysProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MoveKeysProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new TransformerConfigMoveKeysEntryPropertyList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: TransformerConfigMoveKeysEntryProperty[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class MoveKeysPropertyList extends cdktn.ComplexList {
  public internalValue? : MoveKeysProperty[] | cdktn.IResolvable

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
  public get(index: number): MoveKeysPropertyOutputReference {
    return new MoveKeysPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParseCloudfrontProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class ParseCloudfrontPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParseCloudfrontProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParseCloudfrontProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ParseCloudfrontPropertyList extends cdktn.ComplexList {
  public internalValue? : ParseCloudfrontProperty[] | cdktn.IResolvable

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
  public get(index: number): ParseCloudfrontPropertyOutputReference {
    return new ParseCloudfrontPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParseJsonProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#destination TfTransformer#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class ParseJsonPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParseJsonProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParseJsonProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ParseJsonPropertyList extends cdktn.ComplexList {
  public internalValue? : ParseJsonProperty[] | cdktn.IResolvable

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
  public get(index: number): ParseJsonPropertyOutputReference {
    return new ParseJsonPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParseKeyValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#destination TfTransformer#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#field_delimiter TfTransformer#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#key_prefix TfTransformer#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#key_value_delimiter TfTransformer#key_value_delimiter}
  */
  readonly keyValueDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#non_match_value TfTransformer#non_match_value}
  */
  readonly nonMatchValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists TfTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class ParseKeyValuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParseKeyValueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._keyValueDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueDelimiter = this._keyValueDelimiter;
    }
    if (this._nonMatchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonMatchValue = this._nonMatchValue;
    }
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParseKeyValueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._fieldDelimiter = undefined;
      this._keyPrefix = undefined;
      this._keyValueDelimiter = undefined;
      this._nonMatchValue = undefined;
      this._overwriteIfExists = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._fieldDelimiter = value.fieldDelimiter;
      this._keyPrefix = value.keyPrefix;
      this._keyValueDelimiter = value.keyValueDelimiter;
      this._nonMatchValue = value.nonMatchValue;
      this._overwriteIfExists = value.overwriteIfExists;
      this._source = value.source;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // field_delimiter - computed: true, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // key_value_delimiter - computed: true, optional: true, required: false
  private _keyValueDelimiter?: string; 
  public get keyValueDelimiter() {
    return this.getStringAttribute('key_value_delimiter');
  }
  public set keyValueDelimiter(value: string) {
    this._keyValueDelimiter = value;
  }
  public resetKeyValueDelimiter() {
    this._keyValueDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueDelimiterInput() {
    return this._keyValueDelimiter;
  }

  // non_match_value - computed: true, optional: true, required: false
  private _nonMatchValue?: string; 
  public get nonMatchValue() {
    return this.getStringAttribute('non_match_value');
  }
  public set nonMatchValue(value: string) {
    this._nonMatchValue = value;
  }
  public resetNonMatchValue() {
    this._nonMatchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonMatchValueInput() {
    return this._nonMatchValue;
  }

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ParseKeyValuePropertyList extends cdktn.ComplexList {
  public internalValue? : ParseKeyValueProperty[] | cdktn.IResolvable

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
  public get(index: number): ParseKeyValuePropertyOutputReference {
    return new ParseKeyValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParsePostgresProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class ParsePostgresPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParsePostgresProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParsePostgresProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ParsePostgresPropertyList extends cdktn.ComplexList {
  public internalValue? : ParsePostgresProperty[] | cdktn.IResolvable

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
  public get(index: number): ParsePostgresPropertyOutputReference {
    return new ParsePostgresPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParseRoute53Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class ParseRoute53PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParseRoute53Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParseRoute53Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ParseRoute53PropertyList extends cdktn.ComplexList {
  public internalValue? : ParseRoute53Property[] | cdktn.IResolvable

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
  public get(index: number): ParseRoute53PropertyOutputReference {
    return new ParseRoute53PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParseToOcsfProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#event_source TfTransformer#event_source}
  */
  readonly eventSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#ocsf_version TfTransformer#ocsf_version}
  */
  readonly ocsfVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class ParseToOcsfPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParseToOcsfProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource;
    }
    if (this._ocsfVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocsfVersion = this._ocsfVersion;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParseToOcsfProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventSource = undefined;
      this._ocsfVersion = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventSource = value.eventSource;
      this._ocsfVersion = value.ocsfVersion;
      this._source = value.source;
    }
  }

  // event_source - computed: false, optional: false, required: true
  private _eventSource?: string; 
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }
  public set eventSource(value: string) {
    this._eventSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
  }

  // ocsf_version - computed: false, optional: false, required: true
  private _ocsfVersion?: string; 
  public get ocsfVersion() {
    return this.getStringAttribute('ocsf_version');
  }
  public set ocsfVersion(value: string) {
    this._ocsfVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocsfVersionInput() {
    return this._ocsfVersion;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ParseToOcsfPropertyList extends cdktn.ComplexList {
  public internalValue? : ParseToOcsfProperty[] | cdktn.IResolvable

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
  public get(index: number): ParseToOcsfPropertyOutputReference {
    return new ParseToOcsfPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParseVpcProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class ParseVpcPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParseVpcProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParseVpcProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ParseVpcPropertyList extends cdktn.ComplexList {
  public internalValue? : ParseVpcProperty[] | cdktn.IResolvable

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
  public get(index: number): ParseVpcPropertyOutputReference {
    return new ParseVpcPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParseWafProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source?: string;
}
export class ParseWafPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ParseWafProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParseWafProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ParseWafPropertyList extends cdktn.ComplexList {
  public internalValue? : ParseWafProperty[] | cdktn.IResolvable

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
  public get(index: number): ParseWafPropertyOutputReference {
    return new ParseWafPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerConfigRenameKeysEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#key TfTransformer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists TfTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#rename_to TfTransformer#rename_to}
  */
  readonly renameTo: string;
}
export class TransformerConfigRenameKeysEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformerConfigRenameKeysEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._renameTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameTo = this._renameTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerConfigRenameKeysEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._overwriteIfExists = undefined;
      this._renameTo = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._overwriteIfExists = value.overwriteIfExists;
      this._renameTo = value.renameTo;
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

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
  }

  // rename_to - computed: false, optional: false, required: true
  private _renameTo?: string; 
  public get renameTo() {
    return this.getStringAttribute('rename_to');
  }
  public set renameTo(value: string) {
    this._renameTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renameToInput() {
    return this._renameTo;
  }
}

export class TransformerConfigRenameKeysEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformerConfigRenameKeysEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformerConfigRenameKeysEntryPropertyOutputReference {
    return new TransformerConfigRenameKeysEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RenameKeysProperty {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#entry TfTransformer#entry}
  */
  readonly entry?: TransformerConfigRenameKeysEntryProperty[] | cdktn.IResolvable;
}
export class RenameKeysPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RenameKeysProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RenameKeysProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new TransformerConfigRenameKeysEntryPropertyList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: TransformerConfigRenameKeysEntryProperty[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class RenameKeysPropertyList extends cdktn.ComplexList {
  public internalValue? : RenameKeysProperty[] | cdktn.IResolvable

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
  public get(index: number): RenameKeysPropertyOutputReference {
    return new RenameKeysPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerConfigSplitStringEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#delimiter TfTransformer#delimiter}
  */
  readonly delimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source: string;
}
export class TransformerConfigSplitStringEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformerConfigSplitStringEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerConfigSplitStringEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._source = value.source;
    }
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class TransformerConfigSplitStringEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformerConfigSplitStringEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformerConfigSplitStringEntryPropertyOutputReference {
    return new TransformerConfigSplitStringEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SplitStringProperty {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#entry TfTransformer#entry}
  */
  readonly entry?: TransformerConfigSplitStringEntryProperty[] | cdktn.IResolvable;
}
export class SplitStringPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SplitStringProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplitStringProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new TransformerConfigSplitStringEntryPropertyList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: TransformerConfigSplitStringEntryProperty[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class SplitStringPropertyList extends cdktn.ComplexList {
  public internalValue? : SplitStringProperty[] | cdktn.IResolvable

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
  public get(index: number): SplitStringPropertyOutputReference {
    return new SplitStringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerConfigSubstituteStringEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#from TfTransformer#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#source TfTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#to TfTransformer#to}
  */
  readonly to: string;
}
export class TransformerConfigSubstituteStringEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformerConfigSubstituteStringEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerConfigSubstituteStringEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._source = undefined;
      this._to = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._source = value.source;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class TransformerConfigSubstituteStringEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformerConfigSubstituteStringEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformerConfigSubstituteStringEntryPropertyOutputReference {
    return new TransformerConfigSubstituteStringEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubstituteStringProperty {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#entry TfTransformer#entry}
  */
  readonly entry?: TransformerConfigSubstituteStringEntryProperty[] | cdktn.IResolvable;
}
export class SubstituteStringPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubstituteStringProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubstituteStringProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new TransformerConfigSubstituteStringEntryPropertyList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: TransformerConfigSubstituteStringEntryProperty[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class SubstituteStringPropertyList extends cdktn.ComplexList {
  public internalValue? : SubstituteStringProperty[] | cdktn.IResolvable

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
  public get(index: number): SubstituteStringPropertyOutputReference {
    return new SubstituteStringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrimStringProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#with_keys TfTransformer#with_keys}
  */
  readonly withKeys: string[];
}
export class TrimStringPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TrimStringProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrimStringProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withKeys = value.withKeys;
    }
  }

  // with_keys - computed: false, optional: false, required: true
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }
}

export class TrimStringPropertyList extends cdktn.ComplexList {
  public internalValue? : TrimStringProperty[] | cdktn.IResolvable

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
  public get(index: number): TrimStringPropertyOutputReference {
    return new TrimStringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerConfigTypeConverterEntryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#key TfTransformer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#type TfTransformer#type}
  */
  readonly type: string;
}
export class TransformerConfigTypeConverterEntryPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformerConfigTypeConverterEntryProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerConfigTypeConverterEntryProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
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

export class TransformerConfigTypeConverterEntryPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformerConfigTypeConverterEntryProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformerConfigTypeConverterEntryPropertyOutputReference {
    return new TransformerConfigTypeConverterEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TypeConverterProperty {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#entry TfTransformer#entry}
  */
  readonly entry?: TransformerConfigTypeConverterEntryProperty[] | cdktn.IResolvable;
}
export class TypeConverterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TypeConverterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TypeConverterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new TransformerConfigTypeConverterEntryPropertyList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: TransformerConfigTypeConverterEntryProperty[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class TypeConverterPropertyList extends cdktn.ComplexList {
  public internalValue? : TypeConverterProperty[] | cdktn.IResolvable

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
  public get(index: number): TypeConverterPropertyOutputReference {
    return new TypeConverterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpperCaseStringProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#with_keys TfTransformer#with_keys}
  */
  readonly withKeys: string[];
}
export class UpperCaseStringPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UpperCaseStringProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpperCaseStringProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withKeys = value.withKeys;
    }
  }

  // with_keys - computed: false, optional: false, required: true
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }
}

export class UpperCaseStringPropertyList extends cdktn.ComplexList {
  public internalValue? : UpperCaseStringProperty[] | cdktn.IResolvable

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
  public get(index: number): UpperCaseStringPropertyOutputReference {
    return new UpperCaseStringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerConfigProperty {
  /**
  * add_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#add_keys TfTransformer#add_keys}
  */
  readonly addKeys?: AddKeysProperty[] | cdktn.IResolvable;
  /**
  * copy_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#copy_value TfTransformer#copy_value}
  */
  readonly copyValue?: CopyValueProperty[] | cdktn.IResolvable;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#csv TfTransformer#csv}
  */
  readonly csv?: CsvProperty[] | cdktn.IResolvable;
  /**
  * date_time_converter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#date_time_converter TfTransformer#date_time_converter}
  */
  readonly dateTimeConverter?: DateTimeConverterProperty[] | cdktn.IResolvable;
  /**
  * delete_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#delete_keys TfTransformer#delete_keys}
  */
  readonly deleteKeys?: DeleteKeysProperty[] | cdktn.IResolvable;
  /**
  * grok block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#grok TfTransformer#grok}
  */
  readonly grok?: GrokProperty[] | cdktn.IResolvable;
  /**
  * list_to_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#list_to_map TfTransformer#list_to_map}
  */
  readonly listToMap?: ListToMapProperty[] | cdktn.IResolvable;
  /**
  * lower_case_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#lower_case_string TfTransformer#lower_case_string}
  */
  readonly lowerCaseString?: LowerCaseStringProperty[] | cdktn.IResolvable;
  /**
  * move_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#move_keys TfTransformer#move_keys}
  */
  readonly moveKeys?: MoveKeysProperty[] | cdktn.IResolvable;
  /**
  * parse_cloudfront block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#parse_cloudfront TfTransformer#parse_cloudfront}
  */
  readonly parseCloudfront?: ParseCloudfrontProperty[] | cdktn.IResolvable;
  /**
  * parse_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#parse_json TfTransformer#parse_json}
  */
  readonly parseJson?: ParseJsonProperty[] | cdktn.IResolvable;
  /**
  * parse_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#parse_key_value TfTransformer#parse_key_value}
  */
  readonly parseKeyValue?: ParseKeyValueProperty[] | cdktn.IResolvable;
  /**
  * parse_postgres block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#parse_postgres TfTransformer#parse_postgres}
  */
  readonly parsePostgres?: ParsePostgresProperty[] | cdktn.IResolvable;
  /**
  * parse_route53 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#parse_route53 TfTransformer#parse_route53}
  */
  readonly parseRoute53?: ParseRoute53Property[] | cdktn.IResolvable;
  /**
  * parse_to_ocsf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#parse_to_ocsf TfTransformer#parse_to_ocsf}
  */
  readonly parseToOcsf?: ParseToOcsfProperty[] | cdktn.IResolvable;
  /**
  * parse_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#parse_vpc TfTransformer#parse_vpc}
  */
  readonly parseVpc?: ParseVpcProperty[] | cdktn.IResolvable;
  /**
  * parse_waf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#parse_waf TfTransformer#parse_waf}
  */
  readonly parseWaf?: ParseWafProperty[] | cdktn.IResolvable;
  /**
  * rename_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#rename_keys TfTransformer#rename_keys}
  */
  readonly renameKeys?: RenameKeysProperty[] | cdktn.IResolvable;
  /**
  * split_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#split_string TfTransformer#split_string}
  */
  readonly splitString?: SplitStringProperty[] | cdktn.IResolvable;
  /**
  * substitute_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#substitute_string TfTransformer#substitute_string}
  */
  readonly substituteString?: SubstituteStringProperty[] | cdktn.IResolvable;
  /**
  * trim_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#trim_string TfTransformer#trim_string}
  */
  readonly trimString?: TrimStringProperty[] | cdktn.IResolvable;
  /**
  * type_converter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#type_converter TfTransformer#type_converter}
  */
  readonly typeConverter?: TypeConverterProperty[] | cdktn.IResolvable;
  /**
  * upper_case_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_log_transformer#upper_case_string TfTransformer#upper_case_string}
  */
  readonly upperCaseString?: UpperCaseStringProperty[] | cdktn.IResolvable;
}
export class TransformerConfigPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformerConfigProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addKeys = this._addKeys?.internalValue;
    }
    if (this._copyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyValue = this._copyValue?.internalValue;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._dateTimeConverter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeConverter = this._dateTimeConverter?.internalValue;
    }
    if (this._deleteKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteKeys = this._deleteKeys?.internalValue;
    }
    if (this._grok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grok = this._grok?.internalValue;
    }
    if (this._listToMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listToMap = this._listToMap?.internalValue;
    }
    if (this._lowerCaseString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerCaseString = this._lowerCaseString?.internalValue;
    }
    if (this._moveKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveKeys = this._moveKeys?.internalValue;
    }
    if (this._parseCloudfront?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseCloudfront = this._parseCloudfront?.internalValue;
    }
    if (this._parseJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseJson = this._parseJson?.internalValue;
    }
    if (this._parseKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseKeyValue = this._parseKeyValue?.internalValue;
    }
    if (this._parsePostgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsePostgres = this._parsePostgres?.internalValue;
    }
    if (this._parseRoute53?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseRoute53 = this._parseRoute53?.internalValue;
    }
    if (this._parseToOcsf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseToOcsf = this._parseToOcsf?.internalValue;
    }
    if (this._parseVpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseVpc = this._parseVpc?.internalValue;
    }
    if (this._parseWaf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseWaf = this._parseWaf?.internalValue;
    }
    if (this._renameKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameKeys = this._renameKeys?.internalValue;
    }
    if (this._splitString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitString = this._splitString?.internalValue;
    }
    if (this._substituteString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substituteString = this._substituteString?.internalValue;
    }
    if (this._trimString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimString = this._trimString?.internalValue;
    }
    if (this._typeConverter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeConverter = this._typeConverter?.internalValue;
    }
    if (this._upperCaseString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperCaseString = this._upperCaseString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerConfigProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addKeys.internalValue = undefined;
      this._copyValue.internalValue = undefined;
      this._csv.internalValue = undefined;
      this._dateTimeConverter.internalValue = undefined;
      this._deleteKeys.internalValue = undefined;
      this._grok.internalValue = undefined;
      this._listToMap.internalValue = undefined;
      this._lowerCaseString.internalValue = undefined;
      this._moveKeys.internalValue = undefined;
      this._parseCloudfront.internalValue = undefined;
      this._parseJson.internalValue = undefined;
      this._parseKeyValue.internalValue = undefined;
      this._parsePostgres.internalValue = undefined;
      this._parseRoute53.internalValue = undefined;
      this._parseToOcsf.internalValue = undefined;
      this._parseVpc.internalValue = undefined;
      this._parseWaf.internalValue = undefined;
      this._renameKeys.internalValue = undefined;
      this._splitString.internalValue = undefined;
      this._substituteString.internalValue = undefined;
      this._trimString.internalValue = undefined;
      this._typeConverter.internalValue = undefined;
      this._upperCaseString.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addKeys.internalValue = value.addKeys;
      this._copyValue.internalValue = value.copyValue;
      this._csv.internalValue = value.csv;
      this._dateTimeConverter.internalValue = value.dateTimeConverter;
      this._deleteKeys.internalValue = value.deleteKeys;
      this._grok.internalValue = value.grok;
      this._listToMap.internalValue = value.listToMap;
      this._lowerCaseString.internalValue = value.lowerCaseString;
      this._moveKeys.internalValue = value.moveKeys;
      this._parseCloudfront.internalValue = value.parseCloudfront;
      this._parseJson.internalValue = value.parseJson;
      this._parseKeyValue.internalValue = value.parseKeyValue;
      this._parsePostgres.internalValue = value.parsePostgres;
      this._parseRoute53.internalValue = value.parseRoute53;
      this._parseToOcsf.internalValue = value.parseToOcsf;
      this._parseVpc.internalValue = value.parseVpc;
      this._parseWaf.internalValue = value.parseWaf;
      this._renameKeys.internalValue = value.renameKeys;
      this._splitString.internalValue = value.splitString;
      this._substituteString.internalValue = value.substituteString;
      this._trimString.internalValue = value.trimString;
      this._typeConverter.internalValue = value.typeConverter;
      this._upperCaseString.internalValue = value.upperCaseString;
    }
  }

  // add_keys - computed: false, optional: true, required: false
  private _addKeys = new AddKeysPropertyList(this, "add_keys", false);
  public get addKeys() {
    return this._addKeys;
  }
  public putAddKeys(value: AddKeysProperty[] | cdktn.IResolvable) {
    this._addKeys.internalValue = value;
  }
  public resetAddKeys() {
    this._addKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addKeysInput() {
    return this._addKeys.internalValue;
  }

  // copy_value - computed: false, optional: true, required: false
  private _copyValue = new CopyValuePropertyList(this, "copy_value", false);
  public get copyValue() {
    return this._copyValue;
  }
  public putCopyValue(value: CopyValueProperty[] | cdktn.IResolvable) {
    this._copyValue.internalValue = value;
  }
  public resetCopyValue() {
    this._copyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyValueInput() {
    return this._copyValue.internalValue;
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new CsvPropertyList(this, "csv", false);
  public get csv() {
    return this._csv;
  }
  public putCsv(value: CsvProperty[] | cdktn.IResolvable) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // date_time_converter - computed: false, optional: true, required: false
  private _dateTimeConverter = new DateTimeConverterPropertyList(this, "date_time_converter", false);
  public get dateTimeConverter() {
    return this._dateTimeConverter;
  }
  public putDateTimeConverter(value: DateTimeConverterProperty[] | cdktn.IResolvable) {
    this._dateTimeConverter.internalValue = value;
  }
  public resetDateTimeConverter() {
    this._dateTimeConverter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeConverterInput() {
    return this._dateTimeConverter.internalValue;
  }

  // delete_keys - computed: false, optional: true, required: false
  private _deleteKeys = new DeleteKeysPropertyList(this, "delete_keys", false);
  public get deleteKeys() {
    return this._deleteKeys;
  }
  public putDeleteKeys(value: DeleteKeysProperty[] | cdktn.IResolvable) {
    this._deleteKeys.internalValue = value;
  }
  public resetDeleteKeys() {
    this._deleteKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteKeysInput() {
    return this._deleteKeys.internalValue;
  }

  // grok - computed: false, optional: true, required: false
  private _grok = new GrokPropertyList(this, "grok", false);
  public get grok() {
    return this._grok;
  }
  public putGrok(value: GrokProperty[] | cdktn.IResolvable) {
    this._grok.internalValue = value;
  }
  public resetGrok() {
    this._grok.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok.internalValue;
  }

  // list_to_map - computed: false, optional: true, required: false
  private _listToMap = new ListToMapPropertyList(this, "list_to_map", false);
  public get listToMap() {
    return this._listToMap;
  }
  public putListToMap(value: ListToMapProperty[] | cdktn.IResolvable) {
    this._listToMap.internalValue = value;
  }
  public resetListToMap() {
    this._listToMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listToMapInput() {
    return this._listToMap.internalValue;
  }

  // lower_case_string - computed: false, optional: true, required: false
  private _lowerCaseString = new LowerCaseStringPropertyList(this, "lower_case_string", false);
  public get lowerCaseString() {
    return this._lowerCaseString;
  }
  public putLowerCaseString(value: LowerCaseStringProperty[] | cdktn.IResolvable) {
    this._lowerCaseString.internalValue = value;
  }
  public resetLowerCaseString() {
    this._lowerCaseString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerCaseStringInput() {
    return this._lowerCaseString.internalValue;
  }

  // move_keys - computed: false, optional: true, required: false
  private _moveKeys = new MoveKeysPropertyList(this, "move_keys", false);
  public get moveKeys() {
    return this._moveKeys;
  }
  public putMoveKeys(value: MoveKeysProperty[] | cdktn.IResolvable) {
    this._moveKeys.internalValue = value;
  }
  public resetMoveKeys() {
    this._moveKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveKeysInput() {
    return this._moveKeys.internalValue;
  }

  // parse_cloudfront - computed: false, optional: true, required: false
  private _parseCloudfront = new ParseCloudfrontPropertyList(this, "parse_cloudfront", false);
  public get parseCloudfront() {
    return this._parseCloudfront;
  }
  public putParseCloudfront(value: ParseCloudfrontProperty[] | cdktn.IResolvable) {
    this._parseCloudfront.internalValue = value;
  }
  public resetParseCloudfront() {
    this._parseCloudfront.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseCloudfrontInput() {
    return this._parseCloudfront.internalValue;
  }

  // parse_json - computed: false, optional: true, required: false
  private _parseJson = new ParseJsonPropertyList(this, "parse_json", false);
  public get parseJson() {
    return this._parseJson;
  }
  public putParseJson(value: ParseJsonProperty[] | cdktn.IResolvable) {
    this._parseJson.internalValue = value;
  }
  public resetParseJson() {
    this._parseJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseJsonInput() {
    return this._parseJson.internalValue;
  }

  // parse_key_value - computed: false, optional: true, required: false
  private _parseKeyValue = new ParseKeyValuePropertyList(this, "parse_key_value", false);
  public get parseKeyValue() {
    return this._parseKeyValue;
  }
  public putParseKeyValue(value: ParseKeyValueProperty[] | cdktn.IResolvable) {
    this._parseKeyValue.internalValue = value;
  }
  public resetParseKeyValue() {
    this._parseKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseKeyValueInput() {
    return this._parseKeyValue.internalValue;
  }

  // parse_postgres - computed: false, optional: true, required: false
  private _parsePostgres = new ParsePostgresPropertyList(this, "parse_postgres", false);
  public get parsePostgres() {
    return this._parsePostgres;
  }
  public putParsePostgres(value: ParsePostgresProperty[] | cdktn.IResolvable) {
    this._parsePostgres.internalValue = value;
  }
  public resetParsePostgres() {
    this._parsePostgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsePostgresInput() {
    return this._parsePostgres.internalValue;
  }

  // parse_route53 - computed: false, optional: true, required: false
  private _parseRoute53 = new ParseRoute53PropertyList(this, "parse_route53", false);
  public get parseRoute53() {
    return this._parseRoute53;
  }
  public putParseRoute53(value: ParseRoute53Property[] | cdktn.IResolvable) {
    this._parseRoute53.internalValue = value;
  }
  public resetParseRoute53() {
    this._parseRoute53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseRoute53Input() {
    return this._parseRoute53.internalValue;
  }

  // parse_to_ocsf - computed: false, optional: true, required: false
  private _parseToOcsf = new ParseToOcsfPropertyList(this, "parse_to_ocsf", false);
  public get parseToOcsf() {
    return this._parseToOcsf;
  }
  public putParseToOcsf(value: ParseToOcsfProperty[] | cdktn.IResolvable) {
    this._parseToOcsf.internalValue = value;
  }
  public resetParseToOcsf() {
    this._parseToOcsf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseToOcsfInput() {
    return this._parseToOcsf.internalValue;
  }

  // parse_vpc - computed: false, optional: true, required: false
  private _parseVpc = new ParseVpcPropertyList(this, "parse_vpc", false);
  public get parseVpc() {
    return this._parseVpc;
  }
  public putParseVpc(value: ParseVpcProperty[] | cdktn.IResolvable) {
    this._parseVpc.internalValue = value;
  }
  public resetParseVpc() {
    this._parseVpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseVpcInput() {
    return this._parseVpc.internalValue;
  }

  // parse_waf - computed: false, optional: true, required: false
  private _parseWaf = new ParseWafPropertyList(this, "parse_waf", false);
  public get parseWaf() {
    return this._parseWaf;
  }
  public putParseWaf(value: ParseWafProperty[] | cdktn.IResolvable) {
    this._parseWaf.internalValue = value;
  }
  public resetParseWaf() {
    this._parseWaf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseWafInput() {
    return this._parseWaf.internalValue;
  }

  // rename_keys - computed: false, optional: true, required: false
  private _renameKeys = new RenameKeysPropertyList(this, "rename_keys", false);
  public get renameKeys() {
    return this._renameKeys;
  }
  public putRenameKeys(value: RenameKeysProperty[] | cdktn.IResolvable) {
    this._renameKeys.internalValue = value;
  }
  public resetRenameKeys() {
    this._renameKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameKeysInput() {
    return this._renameKeys.internalValue;
  }

  // split_string - computed: false, optional: true, required: false
  private _splitString = new SplitStringPropertyList(this, "split_string", false);
  public get splitString() {
    return this._splitString;
  }
  public putSplitString(value: SplitStringProperty[] | cdktn.IResolvable) {
    this._splitString.internalValue = value;
  }
  public resetSplitString() {
    this._splitString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitStringInput() {
    return this._splitString.internalValue;
  }

  // substitute_string - computed: false, optional: true, required: false
  private _substituteString = new SubstituteStringPropertyList(this, "substitute_string", false);
  public get substituteString() {
    return this._substituteString;
  }
  public putSubstituteString(value: SubstituteStringProperty[] | cdktn.IResolvable) {
    this._substituteString.internalValue = value;
  }
  public resetSubstituteString() {
    this._substituteString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteStringInput() {
    return this._substituteString.internalValue;
  }

  // trim_string - computed: false, optional: true, required: false
  private _trimString = new TrimStringPropertyList(this, "trim_string", false);
  public get trimString() {
    return this._trimString;
  }
  public putTrimString(value: TrimStringProperty[] | cdktn.IResolvable) {
    this._trimString.internalValue = value;
  }
  public resetTrimString() {
    this._trimString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimStringInput() {
    return this._trimString.internalValue;
  }

  // type_converter - computed: false, optional: true, required: false
  private _typeConverter = new TypeConverterPropertyList(this, "type_converter", false);
  public get typeConverter() {
    return this._typeConverter;
  }
  public putTypeConverter(value: TypeConverterProperty[] | cdktn.IResolvable) {
    this._typeConverter.internalValue = value;
  }
  public resetTypeConverter() {
    this._typeConverter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeConverterInput() {
    return this._typeConverter.internalValue;
  }

  // upper_case_string - computed: false, optional: true, required: false
  private _upperCaseString = new UpperCaseStringPropertyList(this, "upper_case_string", false);
  public get upperCaseString() {
    return this._upperCaseString;
  }
  public putUpperCaseString(value: UpperCaseStringProperty[] | cdktn.IResolvable) {
    this._upperCaseString.internalValue = value;
  }
  public resetUpperCaseString() {
    this._upperCaseString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperCaseStringInput() {
    return this._upperCaseString.internalValue;
  }
}

export class TransformerConfigPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformerConfigProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformerConfigPropertyOutputReference {
    return new TransformerConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
