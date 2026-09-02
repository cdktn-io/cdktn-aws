// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfDataVoicesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices#engine TfDataVoices#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices#include_additional_language_codes TfDataVoices#include_additional_language_codes}
  */
  readonly includeAdditionalLanguageCodes?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices#language_code TfDataVoices#language_code}
  */
  readonly languageCode?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices#region TfDataVoices#region}
  */
  readonly region?: string;
  /**
  * voices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices#voices TfDataVoices#voices}
  */
  readonly voices?: TfDataVoices.VoicesProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices aws_polly_voices}
*/
export class TfDataVoices extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_polly_voices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfDataVoices resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfDataVoices to import
  * @param importFromId The id of the existing TfDataVoices that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfDataVoices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_polly_voices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/polly_voices aws_polly_voices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfDataVoicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfDataVoicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_polly_voices',
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
    this._engine = config.engine;
    this._includeAdditionalLanguageCodes = config.includeAdditionalLanguageCodes;
    this._languageCode = config.languageCode;
    this._region = config.region;
    this._voices.internalValue = config.voices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_additional_language_codes - computed: false, optional: true, required: false
  private _includeAdditionalLanguageCodes?: boolean | cdktn.IResolvable; 
  public get includeAdditionalLanguageCodes() {
    return this.getBooleanAttribute('include_additional_language_codes');
  }
  public set includeAdditionalLanguageCodes(value: boolean | cdktn.IResolvable) {
    this._includeAdditionalLanguageCodes = value;
  }
  public resetIncludeAdditionalLanguageCodes() {
    this._includeAdditionalLanguageCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdditionalLanguageCodesInput() {
    return this._includeAdditionalLanguageCodes;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // voices - computed: false, optional: true, required: false
  private _voices = new TfDataVoices.VoicesPropertyList(this, "voices", false);
  public get voices() {
    return this._voices;
  }
  public putVoices(value: TfDataVoices.VoicesProperty[] | cdktn.IResolvable) {
    this._voices.internalValue = value;
  }
  public resetVoices() {
    this._voices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voicesInput() {
    return this._voices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine: cdktn.stringToTerraform(this._engine),
      include_additional_language_codes: cdktn.booleanToTerraform(this._includeAdditionalLanguageCodes),
      language_code: cdktn.stringToTerraform(this._languageCode),
      region: cdktn.stringToTerraform(this._region),
      voices: cdktn.listMapper(tfDataVoicesVoicesPropertyToTerraform, true)(this._voices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine: {
        value: cdktn.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_additional_language_codes: {
        value: cdktn.booleanToHclTerraform(this._includeAdditionalLanguageCodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language_code: {
        value: cdktn.stringToHclTerraform(this._languageCode),
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
      voices: {
        value: cdktn.listMapperHcl(tfDataVoicesVoicesPropertyToHclTerraform, true)(this._voices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfDataVoices.VoicesPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfDataVoicesVoicesPropertyToTerraform(struct?: TfDataVoices.VoicesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfDataVoicesVoicesPropertyToHclTerraform(struct?: TfDataVoices.VoicesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export namespace TfDataVoices {
export interface VoicesProperty {
}
export class VoicesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VoicesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VoicesProperty | cdktn.IResolvable | undefined) {
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

  // additional_language_codes - computed: true, optional: false, required: false
  public get additionalLanguageCodes() {
    return this.getListAttribute('additional_language_codes');
  }

  // gender - computed: true, optional: false, required: false
  public get gender() {
    return this.getStringAttribute('gender');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // language_name - computed: true, optional: false, required: false
  public get languageName() {
    return this.getStringAttribute('language_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // supported_engines - computed: true, optional: false, required: false
  public get supportedEngines() {
    return this.getListAttribute('supported_engines');
  }
}

export class VoicesPropertyList extends cdktn.ComplexList {
  public internalValue? : VoicesProperty[] | cdktn.IResolvable

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
  public get(index: number): VoicesPropertyOutputReference {
    return new VoicesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
