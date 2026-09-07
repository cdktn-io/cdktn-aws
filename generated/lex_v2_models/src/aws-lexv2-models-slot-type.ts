// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsSlotTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#bot_id AwsSlotType#bot_id}
  */
  readonly botId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#bot_version AwsSlotType#bot_version}
  */
  readonly botVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#description AwsSlotType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#locale_id AwsSlotType#locale_id}
  */
  readonly localeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#name AwsSlotType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature AwsSlotType#parent_slot_type_signature}
  */
  readonly parentSlotTypeSignature?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#region AwsSlotType#region}
  */
  readonly region?: string;
  /**
  * composite_slot_type_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#composite_slot_type_setting AwsSlotType#composite_slot_type_setting}
  */
  readonly compositeSlotTypeSetting?: AwsSlotType.CompositeSlotTypeSettingProperty[] | cdktn.IResolvable;
  /**
  * external_source_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#external_source_setting AwsSlotType#external_source_setting}
  */
  readonly externalSourceSetting?: AwsSlotType.ExternalSourceSettingProperty[] | cdktn.IResolvable;
  /**
  * slot_type_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#slot_type_values AwsSlotType#slot_type_values}
  */
  readonly slotTypeValues?: AwsSlotType.SlotTypeValuesProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#timeouts AwsSlotType#timeouts}
  */
  readonly timeouts?: AwsSlotType.TimeoutsProperty;
  /**
  * value_selection_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#value_selection_setting AwsSlotType#value_selection_setting}
  */
  readonly valueSelectionSetting?: AwsSlotType.ValueSelectionSettingProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type}
*/
export class AwsSlotType extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lexv2models_slot_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsSlotType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSlotType to import
  * @param importFromId The id of the existing AwsSlotType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSlotType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lexv2models_slot_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSlotTypeConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSlotTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lexv2models_slot_type',
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
    this._botId = config.botId;
    this._botVersion = config.botVersion;
    this._description = config.description;
    this._localeId = config.localeId;
    this._name = config.name;
    this._parentSlotTypeSignature = config.parentSlotTypeSignature;
    this._region = config.region;
    this._compositeSlotTypeSetting.internalValue = config.compositeSlotTypeSetting;
    this._externalSourceSetting.internalValue = config.externalSourceSetting;
    this._slotTypeValues.internalValue = config.slotTypeValues;
    this._timeouts.internalValue = config.timeouts;
    this._valueSelectionSetting.internalValue = config.valueSelectionSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_id - computed: false, optional: false, required: true
  private _botId?: string; 
  public get botId() {
    return this.getStringAttribute('bot_id');
  }
  public set botId(value: string) {
    this._botId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botIdInput() {
    return this._botId;
  }

  // bot_version - computed: false, optional: false, required: true
  private _botVersion?: string; 
  public get botVersion() {
    return this.getStringAttribute('bot_version');
  }
  public set botVersion(value: string) {
    this._botVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botVersionInput() {
    return this._botVersion;
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

  // locale_id - computed: false, optional: false, required: true
  private _localeId?: string; 
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
  public set localeId(value: string) {
    this._localeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeIdInput() {
    return this._localeId;
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

  // parent_slot_type_signature - computed: false, optional: true, required: false
  private _parentSlotTypeSignature?: string; 
  public get parentSlotTypeSignature() {
    return this.getStringAttribute('parent_slot_type_signature');
  }
  public set parentSlotTypeSignature(value: string) {
    this._parentSlotTypeSignature = value;
  }
  public resetParentSlotTypeSignature() {
    this._parentSlotTypeSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentSlotTypeSignatureInput() {
    return this._parentSlotTypeSignature;
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

  // slot_type_id - computed: true, optional: false, required: false
  public get slotTypeId() {
    return this.getStringAttribute('slot_type_id');
  }

  // composite_slot_type_setting - computed: false, optional: true, required: false
  private _compositeSlotTypeSetting = new AwsSlotType.CompositeSlotTypeSettingPropertyList(this, "composite_slot_type_setting", false);
  public get compositeSlotTypeSetting() {
    return this._compositeSlotTypeSetting;
  }
  public putCompositeSlotTypeSetting(value: AwsSlotType.CompositeSlotTypeSettingProperty[] | cdktn.IResolvable) {
    this._compositeSlotTypeSetting.internalValue = value;
  }
  public resetCompositeSlotTypeSetting() {
    this._compositeSlotTypeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeSlotTypeSettingInput() {
    return this._compositeSlotTypeSetting.internalValue;
  }

  // external_source_setting - computed: false, optional: true, required: false
  private _externalSourceSetting = new AwsSlotType.ExternalSourceSettingPropertyList(this, "external_source_setting", false);
  public get externalSourceSetting() {
    return this._externalSourceSetting;
  }
  public putExternalSourceSetting(value: AwsSlotType.ExternalSourceSettingProperty[] | cdktn.IResolvable) {
    this._externalSourceSetting.internalValue = value;
  }
  public resetExternalSourceSetting() {
    this._externalSourceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSourceSettingInput() {
    return this._externalSourceSetting.internalValue;
  }

  // slot_type_values - computed: false, optional: true, required: false
  private _slotTypeValues = new AwsSlotType.SlotTypeValuesPropertyList(this, "slot_type_values", false);
  public get slotTypeValues() {
    return this._slotTypeValues;
  }
  public putSlotTypeValues(value: AwsSlotType.SlotTypeValuesProperty[] | cdktn.IResolvable) {
    this._slotTypeValues.internalValue = value;
  }
  public resetSlotTypeValues() {
    this._slotTypeValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeValuesInput() {
    return this._slotTypeValues.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsSlotType.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsSlotType.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // value_selection_setting - computed: false, optional: true, required: false
  private _valueSelectionSetting = new AwsSlotType.ValueSelectionSettingPropertyList(this, "value_selection_setting", false);
  public get valueSelectionSetting() {
    return this._valueSelectionSetting;
  }
  public putValueSelectionSetting(value: AwsSlotType.ValueSelectionSettingProperty[] | cdktn.IResolvable) {
    this._valueSelectionSetting.internalValue = value;
  }
  public resetValueSelectionSetting() {
    this._valueSelectionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSelectionSettingInput() {
    return this._valueSelectionSetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_id: cdktn.stringToTerraform(this._botId),
      bot_version: cdktn.stringToTerraform(this._botVersion),
      description: cdktn.stringToTerraform(this._description),
      locale_id: cdktn.stringToTerraform(this._localeId),
      name: cdktn.stringToTerraform(this._name),
      parent_slot_type_signature: cdktn.stringToTerraform(this._parentSlotTypeSignature),
      region: cdktn.stringToTerraform(this._region),
      composite_slot_type_setting: cdktn.listMapper(awsSlotTypeCompositeSlotTypeSettingPropertyToTerraform, true)(this._compositeSlotTypeSetting.internalValue),
      external_source_setting: cdktn.listMapper(awsSlotTypeExternalSourceSettingPropertyToTerraform, true)(this._externalSourceSetting.internalValue),
      slot_type_values: cdktn.listMapper(awsSlotTypeSlotTypeValuesPropertyToTerraform, true)(this._slotTypeValues.internalValue),
      timeouts: awsSlotTypeTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      value_selection_setting: cdktn.listMapper(awsSlotTypeValueSelectionSettingPropertyToTerraform, true)(this._valueSelectionSetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_id: {
        value: cdktn.stringToHclTerraform(this._botId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_version: {
        value: cdktn.stringToHclTerraform(this._botVersion),
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
      locale_id: {
        value: cdktn.stringToHclTerraform(this._localeId),
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
      parent_slot_type_signature: {
        value: cdktn.stringToHclTerraform(this._parentSlotTypeSignature),
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
      composite_slot_type_setting: {
        value: cdktn.listMapperHcl(awsSlotTypeCompositeSlotTypeSettingPropertyToHclTerraform, true)(this._compositeSlotTypeSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSlotType.CompositeSlotTypeSettingPropertyList",
      },
      external_source_setting: {
        value: cdktn.listMapperHcl(awsSlotTypeExternalSourceSettingPropertyToHclTerraform, true)(this._externalSourceSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSlotType.ExternalSourceSettingPropertyList",
      },
      slot_type_values: {
        value: cdktn.listMapperHcl(awsSlotTypeSlotTypeValuesPropertyToHclTerraform, true)(this._slotTypeValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSlotType.SlotTypeValuesPropertyList",
      },
      timeouts: {
        value: awsSlotTypeTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsSlotType.TimeoutsProperty",
      },
      value_selection_setting: {
        value: cdktn.listMapperHcl(awsSlotTypeValueSelectionSettingPropertyToHclTerraform, true)(this._valueSelectionSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSlotType.ValueSelectionSettingPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsSlotTypeSubSlotsPropertyToTerraform(struct?: AwsSlotType.SubSlotsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot_type_id: cdktn.stringToTerraform(struct!.slotTypeId),
  }
}


export function awsSlotTypeSubSlotsPropertyToHclTerraform(struct?: AwsSlotType.SubSlotsProperty | cdktn.IResolvable): any {
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
    slot_type_id: {
      value: cdktn.stringToHclTerraform(struct!.slotTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSlotTypeCompositeSlotTypeSettingPropertyToTerraform(struct?: AwsSlotType.CompositeSlotTypeSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sub_slots: cdktn.listMapper(awsSlotTypeSubSlotsPropertyToTerraform, true)(struct!.subSlots),
  }
}


export function awsSlotTypeCompositeSlotTypeSettingPropertyToHclTerraform(struct?: AwsSlotType.CompositeSlotTypeSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sub_slots: {
      value: cdktn.listMapperHcl(awsSlotTypeSubSlotsPropertyToHclTerraform, true)(struct!.subSlots),
      isBlock: true,
      type: "list",
      storageClassType: "SubSlotsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSlotTypeSourcePropertyToTerraform(struct?: AwsSlotType.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    s3_object_key: cdktn.stringToTerraform(struct!.s3ObjectKey),
  }
}


export function awsSlotTypeSourcePropertyToHclTerraform(struct?: AwsSlotType.SourceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_key: {
      value: cdktn.stringToHclTerraform(struct!.s3ObjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSlotTypeGrammarSlotTypeSettingPropertyToTerraform(struct?: AwsSlotType.GrammarSlotTypeSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.listMapper(awsSlotTypeSourcePropertyToTerraform, true)(struct!.source),
  }
}


export function awsSlotTypeGrammarSlotTypeSettingPropertyToHclTerraform(struct?: AwsSlotType.GrammarSlotTypeSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.listMapperHcl(awsSlotTypeSourcePropertyToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "SourcePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSlotTypeExternalSourceSettingPropertyToTerraform(struct?: AwsSlotType.ExternalSourceSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grammar_slot_type_setting: cdktn.listMapper(awsSlotTypeGrammarSlotTypeSettingPropertyToTerraform, true)(struct!.grammarSlotTypeSetting),
  }
}


export function awsSlotTypeExternalSourceSettingPropertyToHclTerraform(struct?: AwsSlotType.ExternalSourceSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grammar_slot_type_setting: {
      value: cdktn.listMapperHcl(awsSlotTypeGrammarSlotTypeSettingPropertyToHclTerraform, true)(struct!.grammarSlotTypeSetting),
      isBlock: true,
      type: "list",
      storageClassType: "GrammarSlotTypeSettingPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSlotTypeSampleValuePropertyToTerraform(struct?: AwsSlotType.SampleValueProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsSlotTypeSampleValuePropertyToHclTerraform(struct?: AwsSlotType.SampleValueProperty | cdktn.IResolvable): any {
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


export function awsSlotTypeSynonymsPropertyToTerraform(struct?: AwsSlotType.SynonymsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsSlotTypeSynonymsPropertyToHclTerraform(struct?: AwsSlotType.SynonymsProperty | cdktn.IResolvable): any {
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


export function awsSlotTypeSlotTypeValuesPropertyToTerraform(struct?: AwsSlotType.SlotTypeValuesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sample_value: cdktn.listMapper(awsSlotTypeSampleValuePropertyToTerraform, true)(struct!.sampleValue),
    synonyms: cdktn.listMapper(awsSlotTypeSynonymsPropertyToTerraform, true)(struct!.synonyms),
  }
}


export function awsSlotTypeSlotTypeValuesPropertyToHclTerraform(struct?: AwsSlotType.SlotTypeValuesProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sample_value: {
      value: cdktn.listMapperHcl(awsSlotTypeSampleValuePropertyToHclTerraform, true)(struct!.sampleValue),
      isBlock: true,
      type: "list",
      storageClassType: "SampleValuePropertyList",
    },
    synonyms: {
      value: cdktn.listMapperHcl(awsSlotTypeSynonymsPropertyToHclTerraform, true)(struct!.synonyms),
      isBlock: true,
      type: "list",
      storageClassType: "SynonymsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSlotTypeTimeoutsPropertyToTerraform(struct?: AwsSlotType.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsSlotTypeTimeoutsPropertyToHclTerraform(struct?: AwsSlotType.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsSlotTypeAdvancedRecognitionSettingPropertyToTerraform(struct?: AwsSlotType.AdvancedRecognitionSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_recognition_strategy: cdktn.stringToTerraform(struct!.audioRecognitionStrategy),
  }
}


export function awsSlotTypeAdvancedRecognitionSettingPropertyToHclTerraform(struct?: AwsSlotType.AdvancedRecognitionSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_recognition_strategy: {
      value: cdktn.stringToHclTerraform(struct!.audioRecognitionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSlotTypeRegexFilterPropertyToTerraform(struct?: AwsSlotType.RegexFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function awsSlotTypeRegexFilterPropertyToHclTerraform(struct?: AwsSlotType.RegexFilterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsSlotTypeValueSelectionSettingPropertyToTerraform(struct?: AwsSlotType.ValueSelectionSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resolution_strategy: cdktn.stringToTerraform(struct!.resolutionStrategy),
    advanced_recognition_setting: cdktn.listMapper(awsSlotTypeAdvancedRecognitionSettingPropertyToTerraform, true)(struct!.advancedRecognitionSetting),
    regex_filter: cdktn.listMapper(awsSlotTypeRegexFilterPropertyToTerraform, true)(struct!.regexFilter),
  }
}


export function awsSlotTypeValueSelectionSettingPropertyToHclTerraform(struct?: AwsSlotType.ValueSelectionSettingProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resolution_strategy: {
      value: cdktn.stringToHclTerraform(struct!.resolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_recognition_setting: {
      value: cdktn.listMapperHcl(awsSlotTypeAdvancedRecognitionSettingPropertyToHclTerraform, true)(struct!.advancedRecognitionSetting),
      isBlock: true,
      type: "list",
      storageClassType: "AdvancedRecognitionSettingPropertyList",
    },
    regex_filter: {
      value: cdktn.listMapperHcl(awsSlotTypeRegexFilterPropertyToHclTerraform, true)(struct!.regexFilter),
      isBlock: true,
      type: "list",
      storageClassType: "RegexFilterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsSlotType {
export interface SubSlotsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#name AwsSlotType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#slot_type_id AwsSlotType#slot_type_id}
  */
  readonly slotTypeId: string;
}
export class SubSlotsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubSlotsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slotTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotTypeId = this._slotTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubSlotsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slotTypeId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slotTypeId = value.slotTypeId;
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

  // slot_type_id - computed: false, optional: false, required: true
  private _slotTypeId?: string; 
  public get slotTypeId() {
    return this.getStringAttribute('slot_type_id');
  }
  public set slotTypeId(value: string) {
    this._slotTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeIdInput() {
    return this._slotTypeId;
  }
}

export class SubSlotsPropertyList extends cdktn.ComplexList {
  public internalValue? : SubSlotsProperty[] | cdktn.IResolvable

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
  public get(index: number): SubSlotsPropertyOutputReference {
    return new SubSlotsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CompositeSlotTypeSettingProperty {
  /**
  * sub_slots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#sub_slots AwsSlotType#sub_slots}
  */
  readonly subSlots?: SubSlotsProperty[] | cdktn.IResolvable;
}
export class CompositeSlotTypeSettingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CompositeSlotTypeSettingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subSlots = this._subSlots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CompositeSlotTypeSettingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subSlots.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subSlots.internalValue = value.subSlots;
    }
  }

  // sub_slots - computed: false, optional: true, required: false
  private _subSlots = new SubSlotsPropertyList(this, "sub_slots", false);
  public get subSlots() {
    return this._subSlots;
  }
  public putSubSlots(value: SubSlotsProperty[] | cdktn.IResolvable) {
    this._subSlots.internalValue = value;
  }
  public resetSubSlots() {
    this._subSlots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSlotsInput() {
    return this._subSlots.internalValue;
  }
}

export class CompositeSlotTypeSettingPropertyList extends cdktn.ComplexList {
  public internalValue? : CompositeSlotTypeSettingProperty[] | cdktn.IResolvable

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
  public get(index: number): CompositeSlotTypeSettingPropertyOutputReference {
    return new CompositeSlotTypeSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#kms_key_arn AwsSlotType#kms_key_arn}
  */
  readonly kmsKeyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#s3_bucket_name AwsSlotType#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#s3_object_key AwsSlotType#s3_object_key}
  */
  readonly s3ObjectKey: string;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3ObjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectKey = this._s3ObjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._s3BucketName = undefined;
      this._s3ObjectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._s3BucketName = value.s3BucketName;
      this._s3ObjectKey = value.s3ObjectKey;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_object_key - computed: false, optional: false, required: true
  private _s3ObjectKey?: string; 
  public get s3ObjectKey() {
    return this.getStringAttribute('s3_object_key');
  }
  public set s3ObjectKey(value: string) {
    this._s3ObjectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectKeyInput() {
    return this._s3ObjectKey;
  }
}

export class SourcePropertyList extends cdktn.ComplexList {
  public internalValue? : SourceProperty[] | cdktn.IResolvable

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
  public get(index: number): SourcePropertyOutputReference {
    return new SourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrammarSlotTypeSettingProperty {
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#source AwsSlotType#source}
  */
  readonly source?: SourceProperty[] | cdktn.IResolvable;
}
export class GrammarSlotTypeSettingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GrammarSlotTypeSettingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrammarSlotTypeSettingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source = new SourcePropertyList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: SourceProperty[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class GrammarSlotTypeSettingPropertyList extends cdktn.ComplexList {
  public internalValue? : GrammarSlotTypeSettingProperty[] | cdktn.IResolvable

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
  public get(index: number): GrammarSlotTypeSettingPropertyOutputReference {
    return new GrammarSlotTypeSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalSourceSettingProperty {
  /**
  * grammar_slot_type_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#grammar_slot_type_setting AwsSlotType#grammar_slot_type_setting}
  */
  readonly grammarSlotTypeSetting?: GrammarSlotTypeSettingProperty[] | cdktn.IResolvable;
}
export class ExternalSourceSettingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalSourceSettingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grammarSlotTypeSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grammarSlotTypeSetting = this._grammarSlotTypeSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalSourceSettingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grammarSlotTypeSetting.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grammarSlotTypeSetting.internalValue = value.grammarSlotTypeSetting;
    }
  }

  // grammar_slot_type_setting - computed: false, optional: true, required: false
  private _grammarSlotTypeSetting = new GrammarSlotTypeSettingPropertyList(this, "grammar_slot_type_setting", false);
  public get grammarSlotTypeSetting() {
    return this._grammarSlotTypeSetting;
  }
  public putGrammarSlotTypeSetting(value: GrammarSlotTypeSettingProperty[] | cdktn.IResolvable) {
    this._grammarSlotTypeSetting.internalValue = value;
  }
  public resetGrammarSlotTypeSetting() {
    this._grammarSlotTypeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grammarSlotTypeSettingInput() {
    return this._grammarSlotTypeSetting.internalValue;
  }
}

export class ExternalSourceSettingPropertyList extends cdktn.ComplexList {
  public internalValue? : ExternalSourceSettingProperty[] | cdktn.IResolvable

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
  public get(index: number): ExternalSourceSettingPropertyOutputReference {
    return new ExternalSourceSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SampleValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#value AwsSlotType#value}
  */
  readonly value: string;
}
export class SampleValuePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SampleValueProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SampleValueProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class SampleValuePropertyList extends cdktn.ComplexList {
  public internalValue? : SampleValueProperty[] | cdktn.IResolvable

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
  public get(index: number): SampleValuePropertyOutputReference {
    return new SampleValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SynonymsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#value AwsSlotType#value}
  */
  readonly value: string;
}
export class SynonymsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SynonymsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynonymsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class SynonymsPropertyList extends cdktn.ComplexList {
  public internalValue? : SynonymsProperty[] | cdktn.IResolvable

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
  public get(index: number): SynonymsPropertyOutputReference {
    return new SynonymsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlotTypeValuesProperty {
  /**
  * sample_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#sample_value AwsSlotType#sample_value}
  */
  readonly sampleValue?: SampleValueProperty[] | cdktn.IResolvable;
  /**
  * synonyms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#synonyms AwsSlotType#synonyms}
  */
  readonly synonyms?: SynonymsProperty[] | cdktn.IResolvable;
}
export class SlotTypeValuesPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SlotTypeValuesProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sampleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleValue = this._sampleValue?.internalValue;
    }
    if (this._synonyms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlotTypeValuesProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sampleValue.internalValue = undefined;
      this._synonyms.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sampleValue.internalValue = value.sampleValue;
      this._synonyms.internalValue = value.synonyms;
    }
  }

  // sample_value - computed: false, optional: true, required: false
  private _sampleValue = new SampleValuePropertyList(this, "sample_value", false);
  public get sampleValue() {
    return this._sampleValue;
  }
  public putSampleValue(value: SampleValueProperty[] | cdktn.IResolvable) {
    this._sampleValue.internalValue = value;
  }
  public resetSampleValue() {
    this._sampleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleValueInput() {
    return this._sampleValue.internalValue;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms = new SynonymsPropertyList(this, "synonyms", false);
  public get synonyms() {
    return this._synonyms;
  }
  public putSynonyms(value: SynonymsProperty[] | cdktn.IResolvable) {
    this._synonyms.internalValue = value;
  }
  public resetSynonyms() {
    this._synonyms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms.internalValue;
  }
}

export class SlotTypeValuesPropertyList extends cdktn.ComplexList {
  public internalValue? : SlotTypeValuesProperty[] | cdktn.IResolvable

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
  public get(index: number): SlotTypeValuesPropertyOutputReference {
    return new SlotTypeValuesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#create AwsSlotType#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#delete AwsSlotType#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#update AwsSlotType#update}
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
export interface AdvancedRecognitionSettingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#audio_recognition_strategy AwsSlotType#audio_recognition_strategy}
  */
  readonly audioRecognitionStrategy?: string;
}
export class AdvancedRecognitionSettingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AdvancedRecognitionSettingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioRecognitionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioRecognitionStrategy = this._audioRecognitionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvancedRecognitionSettingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioRecognitionStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioRecognitionStrategy = value.audioRecognitionStrategy;
    }
  }

  // audio_recognition_strategy - computed: false, optional: true, required: false
  private _audioRecognitionStrategy?: string; 
  public get audioRecognitionStrategy() {
    return this.getStringAttribute('audio_recognition_strategy');
  }
  public set audioRecognitionStrategy(value: string) {
    this._audioRecognitionStrategy = value;
  }
  public resetAudioRecognitionStrategy() {
    this._audioRecognitionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioRecognitionStrategyInput() {
    return this._audioRecognitionStrategy;
  }
}

export class AdvancedRecognitionSettingPropertyList extends cdktn.ComplexList {
  public internalValue? : AdvancedRecognitionSettingProperty[] | cdktn.IResolvable

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
  public get(index: number): AdvancedRecognitionSettingPropertyOutputReference {
    return new AdvancedRecognitionSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RegexFilterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#pattern AwsSlotType#pattern}
  */
  readonly pattern: string;
}
export class RegexFilterPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RegexFilterProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegexFilterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class RegexFilterPropertyList extends cdktn.ComplexList {
  public internalValue? : RegexFilterProperty[] | cdktn.IResolvable

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
  public get(index: number): RegexFilterPropertyOutputReference {
    return new RegexFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValueSelectionSettingProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#resolution_strategy AwsSlotType#resolution_strategy}
  */
  readonly resolutionStrategy: string;
  /**
  * advanced_recognition_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#advanced_recognition_setting AwsSlotType#advanced_recognition_setting}
  */
  readonly advancedRecognitionSetting?: AdvancedRecognitionSettingProperty[] | cdktn.IResolvable;
  /**
  * regex_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lexv2models_slot_type#regex_filter AwsSlotType#regex_filter}
  */
  readonly regexFilter?: RegexFilterProperty[] | cdktn.IResolvable;
}
export class ValueSelectionSettingPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ValueSelectionSettingProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionStrategy = this._resolutionStrategy;
    }
    if (this._advancedRecognitionSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedRecognitionSetting = this._advancedRecognitionSetting?.internalValue;
    }
    if (this._regexFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexFilter = this._regexFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValueSelectionSettingProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolutionStrategy = undefined;
      this._advancedRecognitionSetting.internalValue = undefined;
      this._regexFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolutionStrategy = value.resolutionStrategy;
      this._advancedRecognitionSetting.internalValue = value.advancedRecognitionSetting;
      this._regexFilter.internalValue = value.regexFilter;
    }
  }

  // resolution_strategy - computed: false, optional: false, required: true
  private _resolutionStrategy?: string; 
  public get resolutionStrategy() {
    return this.getStringAttribute('resolution_strategy');
  }
  public set resolutionStrategy(value: string) {
    this._resolutionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionStrategyInput() {
    return this._resolutionStrategy;
  }

  // advanced_recognition_setting - computed: false, optional: true, required: false
  private _advancedRecognitionSetting = new AdvancedRecognitionSettingPropertyList(this, "advanced_recognition_setting", false);
  public get advancedRecognitionSetting() {
    return this._advancedRecognitionSetting;
  }
  public putAdvancedRecognitionSetting(value: AdvancedRecognitionSettingProperty[] | cdktn.IResolvable) {
    this._advancedRecognitionSetting.internalValue = value;
  }
  public resetAdvancedRecognitionSetting() {
    this._advancedRecognitionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRecognitionSettingInput() {
    return this._advancedRecognitionSetting.internalValue;
  }

  // regex_filter - computed: false, optional: true, required: false
  private _regexFilter = new RegexFilterPropertyList(this, "regex_filter", false);
  public get regexFilter() {
    return this._regexFilter;
  }
  public putRegexFilter(value: RegexFilterProperty[] | cdktn.IResolvable) {
    this._regexFilter.internalValue = value;
  }
  public resetRegexFilter() {
    this._regexFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexFilterInput() {
    return this._regexFilter.internalValue;
  }
}

export class ValueSelectionSettingPropertyList extends cdktn.ComplexList {
  public internalValue? : ValueSelectionSettingProperty[] | cdktn.IResolvable

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
  public get(index: number): ValueSelectionSettingPropertyOutputReference {
    return new ValueSelectionSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
