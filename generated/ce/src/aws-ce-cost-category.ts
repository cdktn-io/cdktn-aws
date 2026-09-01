// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsCeCostCategoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#default_value AwsCeCostCategory#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#effective_start AwsCeCostCategory#effective_start}
  */
  readonly effectiveStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#id AwsCeCostCategory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#name AwsCeCostCategory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#rule_version AwsCeCostCategory#rule_version}
  */
  readonly ruleVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags_all AwsCeCostCategory#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#rule AwsCeCostCategory#rule}
  */
  readonly rule: AwsCeCostCategory.RuleProperty[] | cdktn.IResolvable;
  /**
  * split_charge_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#split_charge_rule AwsCeCostCategory#split_charge_rule}
  */
  readonly splitChargeRule?: AwsCeCostCategory.SplitChargeRuleProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category aws_ce_cost_category}
*/
export class AwsCeCostCategory extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ce_cost_category";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsCeCostCategory resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCeCostCategory to import
  * @param importFromId The id of the existing AwsCeCostCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCeCostCategory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ce_cost_category", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category aws_ce_cost_category} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCeCostCategoryConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCeCostCategoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ce_cost_category',
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
    this._defaultValue = config.defaultValue;
    this._effectiveStart = config.effectiveStart;
    this._id = config.id;
    this._name = config.name;
    this._ruleVersion = config.ruleVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._rule.internalValue = config.rule;
    this._splitChargeRule.internalValue = config.splitChargeRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // effective_end - computed: true, optional: false, required: false
  public get effectiveEnd() {
    return this.getStringAttribute('effective_end');
  }

  // effective_start - computed: true, optional: true, required: false
  private _effectiveStart?: string; 
  public get effectiveStart() {
    return this.getStringAttribute('effective_start');
  }
  public set effectiveStart(value: string) {
    this._effectiveStart = value;
  }
  public resetEffectiveStart() {
    this._effectiveStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveStartInput() {
    return this._effectiveStart;
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

  // rule_version - computed: false, optional: false, required: true
  private _ruleVersion?: string; 
  public get ruleVersion() {
    return this.getStringAttribute('rule_version');
  }
  public set ruleVersion(value: string) {
    this._ruleVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVersionInput() {
    return this._ruleVersion;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new AwsCeCostCategory.RulePropertyList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AwsCeCostCategory.RuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // split_charge_rule - computed: false, optional: true, required: false
  private _splitChargeRule = new AwsCeCostCategory.SplitChargeRulePropertyList(this, "split_charge_rule", true);
  public get splitChargeRule() {
    return this._splitChargeRule;
  }
  public putSplitChargeRule(value: AwsCeCostCategory.SplitChargeRuleProperty[] | cdktn.IResolvable) {
    this._splitChargeRule.internalValue = value;
  }
  public resetSplitChargeRule() {
    this._splitChargeRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitChargeRuleInput() {
    return this._splitChargeRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_value: cdktn.stringToTerraform(this._defaultValue),
      effective_start: cdktn.stringToTerraform(this._effectiveStart),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      rule_version: cdktn.stringToTerraform(this._ruleVersion),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      rule: cdktn.listMapper(awsCeCostCategoryRulePropertyToTerraform, true)(this._rule.internalValue),
      split_charge_rule: cdktn.listMapper(awsCeCostCategorySplitChargeRulePropertyToTerraform, true)(this._splitChargeRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_value: {
        value: cdktn.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_start: {
        value: cdktn.stringToHclTerraform(this._effectiveStart),
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
      rule_version: {
        value: cdktn.stringToHclTerraform(this._ruleVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rule: {
        value: cdktn.listMapperHcl(awsCeCostCategoryRulePropertyToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCeCostCategory.RulePropertyList",
      },
      split_charge_rule: {
        value: cdktn.listMapperHcl(awsCeCostCategorySplitChargeRulePropertyToHclTerraform, true)(this._splitChargeRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsCeCostCategory.SplitChargeRulePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsCeCostCategoryInheritedValuePropertyToTerraform(struct?: AwsCeCostCategory.InheritedValuePropertyOutputReference | AwsCeCostCategory.InheritedValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_key: cdktn.stringToTerraform(struct!.dimensionKey),
    dimension_name: cdktn.stringToTerraform(struct!.dimensionName),
  }
}


export function awsCeCostCategoryInheritedValuePropertyToHclTerraform(struct?: AwsCeCostCategory.InheritedValuePropertyOutputReference | AwsCeCostCategory.InheritedValueProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_key: {
      value: cdktn.stringToHclTerraform(struct!.dimensionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_name: {
      value: cdktn.stringToHclTerraform(struct!.dimensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndAndCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndAndCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleAndAndCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndAndCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndAndCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleAndAndCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndAndDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndAndDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleAndAndDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndAndDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndAndDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleAndAndDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndAndTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndAndTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleAndAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndAndTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndAndTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleAndAndTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndAndPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleAndAndCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleAndAndDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleAndAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleAndAndPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleAndAndCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndAndCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleAndAndDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndAndDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleAndAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleAndCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleAndCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleAndDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleAndDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndNotCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndNotCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleAndNotCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndNotCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndNotCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleAndNotCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndNotDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndNotDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleAndNotDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndNotDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndNotDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleAndNotDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndNotTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndNotTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleAndNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndNotTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndNotTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleAndNotTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndNotPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndNotPropertyOutputReference | AwsCeCostCategory.RuleRuleAndNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleAndNotCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleAndNotDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleAndNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleAndNotPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndNotPropertyOutputReference | AwsCeCostCategory.RuleRuleAndNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleAndNotCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndNotCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleAndNotDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndNotDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleAndNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndOrCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndOrCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleAndOrCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndOrCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndOrCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleAndOrCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndOrDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndOrDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleAndOrDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndOrDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndOrDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleAndOrDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndOrTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndOrTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleAndOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndOrTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndOrTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleAndOrTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndOrPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleAndOrCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleAndOrDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleAndOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleAndOrPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleAndOrCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndOrCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleAndOrDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndOrDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleAndOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleAndTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleAndTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleAndPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsCeCostCategoryRuleRuleAndAndPropertyToTerraform, true)(struct!.and),
    cost_category: awsCeCostCategoryRuleRuleAndCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleAndDimensionPropertyToTerraform(struct!.dimension),
    not: awsCeCostCategoryRuleRuleAndNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(awsCeCostCategoryRuleRuleAndOrPropertyToTerraform, true)(struct!.or),
    tags: awsCeCostCategoryRuleRuleAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleAndPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsCeCostCategoryRuleRuleAndAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "RuleRuleAndAndPropertyList",
    },
    cost_category: {
      value: awsCeCostCategoryRuleRuleAndCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleAndDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndDimensionPropertyList",
    },
    not: {
      value: awsCeCostCategoryRuleRuleAndNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndNotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(awsCeCostCategoryRuleRuleAndOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "RuleRuleAndOrPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotAndCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotAndCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleNotAndCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotAndCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotAndCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleNotAndCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotAndDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotAndDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleNotAndDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotAndDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotAndDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleNotAndDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotAndTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotAndTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleNotAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotAndTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotAndTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleNotAndTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotAndPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleNotAndCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleNotAndDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleNotAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleNotAndPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleNotAndCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotAndCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleNotAndDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotAndDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleNotAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleNotCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleNotCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleNotDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleNotDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotNotCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotNotCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleNotNotCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotNotCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotNotCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleNotNotCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotNotDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotNotDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleNotNotDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotNotDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotNotDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleNotNotDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotNotTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotNotTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleNotNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotNotTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotNotTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleNotNotTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotNotPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotNotPropertyOutputReference | AwsCeCostCategory.RuleRuleNotNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleNotNotCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleNotNotDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleNotNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleNotNotPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotNotPropertyOutputReference | AwsCeCostCategory.RuleRuleNotNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleNotNotCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotNotCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleNotNotDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotNotDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleNotNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotOrCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotOrCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleNotOrCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotOrCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotOrCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleNotOrCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotOrDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotOrDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleNotOrDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotOrDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotOrDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleNotOrDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotOrTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotOrTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleNotOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotOrTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotOrTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleNotOrTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotOrPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleNotOrCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleNotOrDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleNotOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleNotOrPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleNotOrCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotOrCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleNotOrDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotOrDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleNotOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleNotTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleNotTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleNotPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleNotPropertyOutputReference | AwsCeCostCategory.RuleRuleNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsCeCostCategoryRuleRuleNotAndPropertyToTerraform, true)(struct!.and),
    cost_category: awsCeCostCategoryRuleRuleNotCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleNotDimensionPropertyToTerraform(struct!.dimension),
    not: awsCeCostCategoryRuleRuleNotNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(awsCeCostCategoryRuleRuleNotOrPropertyToTerraform, true)(struct!.or),
    tags: awsCeCostCategoryRuleRuleNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleNotPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleNotPropertyOutputReference | AwsCeCostCategory.RuleRuleNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsCeCostCategoryRuleRuleNotAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "RuleRuleNotAndPropertyList",
    },
    cost_category: {
      value: awsCeCostCategoryRuleRuleNotCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleNotDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotDimensionPropertyList",
    },
    not: {
      value: awsCeCostCategoryRuleRuleNotNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotNotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(awsCeCostCategoryRuleRuleNotOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "RuleRuleNotOrPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrAndCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrAndCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleOrAndCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrAndCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrAndCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleOrAndCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrAndDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrAndDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleOrAndDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrAndDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrAndDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleOrAndDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrAndTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrAndTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleOrAndTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrAndTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrAndTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleOrAndTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrAndPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleOrAndCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleOrAndDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleOrAndTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleOrAndPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrAndProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleOrAndCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrAndCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleOrAndDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrAndDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleOrAndTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrAndTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleOrCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleOrCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleOrDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleOrDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrNotCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrNotCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleOrNotCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrNotCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrNotCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleOrNotCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrNotDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrNotDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleOrNotDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrNotDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrNotDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleOrNotDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrNotTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrNotTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleOrNotTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrNotTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrNotTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleOrNotTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrNotPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrNotPropertyOutputReference | AwsCeCostCategory.RuleRuleOrNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleOrNotCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleOrNotDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleOrNotTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleOrNotPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrNotPropertyOutputReference | AwsCeCostCategory.RuleRuleOrNotProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleOrNotCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrNotCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleOrNotDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrNotDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleOrNotTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrNotTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrOrCostCategoryPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrOrCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleOrOrCostCategoryProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrOrCostCategoryPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrOrCostCategoryPropertyOutputReference | AwsCeCostCategory.RuleRuleOrOrCostCategoryProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrOrDimensionPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrOrDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleOrOrDimensionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrOrDimensionPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrOrDimensionPropertyOutputReference | AwsCeCostCategory.RuleRuleOrOrDimensionProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrOrTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrOrTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleOrOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrOrTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrOrTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleOrOrTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrOrPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cost_category: awsCeCostCategoryRuleRuleOrOrCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleOrOrDimensionPropertyToTerraform(struct!.dimension),
    tags: awsCeCostCategoryRuleRuleOrOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleOrOrPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cost_category: {
      value: awsCeCostCategoryRuleRuleOrOrCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrOrCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleOrOrDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrOrDimensionPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleOrOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleOrTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleOrTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleOrTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleOrPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsCeCostCategoryRuleRuleOrAndPropertyToTerraform, true)(struct!.and),
    cost_category: awsCeCostCategoryRuleRuleOrCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleOrDimensionPropertyToTerraform(struct!.dimension),
    not: awsCeCostCategoryRuleRuleOrNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(awsCeCostCategoryRuleRuleOrOrPropertyToTerraform, true)(struct!.or),
    tags: awsCeCostCategoryRuleRuleOrTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRuleOrPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleOrProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsCeCostCategoryRuleRuleOrAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "RuleRuleOrAndPropertyList",
    },
    cost_category: {
      value: awsCeCostCategoryRuleRuleOrCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleOrDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrDimensionPropertyList",
    },
    not: {
      value: awsCeCostCategoryRuleRuleOrNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrNotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(awsCeCostCategoryRuleRuleOrOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "RuleRuleOrOrPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleOrTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleOrTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRuleTagsPropertyToTerraform(struct?: AwsCeCostCategory.RuleRuleTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleTagsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    match_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchOptions),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryRuleRuleTagsPropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRuleTagsPropertyOutputReference | AwsCeCostCategory.RuleRuleTagsProperty): any {
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
    match_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRuleRulePropertyToTerraform(struct?: AwsCeCostCategory.RuleRulePropertyOutputReference | AwsCeCostCategory.RuleRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: cdktn.listMapper(awsCeCostCategoryRuleRuleAndPropertyToTerraform, true)(struct!.and),
    cost_category: awsCeCostCategoryRuleRuleCostCategoryPropertyToTerraform(struct!.costCategory),
    dimension: awsCeCostCategoryRuleRuleDimensionPropertyToTerraform(struct!.dimension),
    not: awsCeCostCategoryRuleRuleNotPropertyToTerraform(struct!.not),
    or: cdktn.listMapper(awsCeCostCategoryRuleRuleOrPropertyToTerraform, true)(struct!.or),
    tags: awsCeCostCategoryRuleRuleTagsPropertyToTerraform(struct!.tags),
  }
}


export function awsCeCostCategoryRuleRulePropertyToHclTerraform(struct?: AwsCeCostCategory.RuleRulePropertyOutputReference | AwsCeCostCategory.RuleRuleProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: cdktn.listMapperHcl(awsCeCostCategoryRuleRuleAndPropertyToHclTerraform, true)(struct!.and),
      isBlock: true,
      type: "set",
      storageClassType: "RuleRuleAndPropertyList",
    },
    cost_category: {
      value: awsCeCostCategoryRuleRuleCostCategoryPropertyToHclTerraform(struct!.costCategory),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleCostCategoryPropertyList",
    },
    dimension: {
      value: awsCeCostCategoryRuleRuleDimensionPropertyToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleDimensionPropertyList",
    },
    not: {
      value: awsCeCostCategoryRuleRuleNotPropertyToHclTerraform(struct!.not),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleNotPropertyList",
    },
    or: {
      value: cdktn.listMapperHcl(awsCeCostCategoryRuleRuleOrPropertyToHclTerraform, true)(struct!.or),
      isBlock: true,
      type: "set",
      storageClassType: "RuleRuleOrPropertyList",
    },
    tags: {
      value: awsCeCostCategoryRuleRuleTagsPropertyToHclTerraform(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRuleTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryRulePropertyToTerraform(struct?: AwsCeCostCategory.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
    inherited_value: awsCeCostCategoryInheritedValuePropertyToTerraform(struct!.inheritedValue),
    rule: awsCeCostCategoryRuleRulePropertyToTerraform(struct!.rule),
  }
}


export function awsCeCostCategoryRulePropertyToHclTerraform(struct?: AwsCeCostCategory.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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
    inherited_value: {
      value: awsCeCostCategoryInheritedValuePropertyToHclTerraform(struct!.inheritedValue),
      isBlock: true,
      type: "list",
      storageClassType: "InheritedValuePropertyList",
    },
    rule: {
      value: awsCeCostCategoryRuleRulePropertyToHclTerraform(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "RuleRulePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategoryParameterPropertyToTerraform(struct?: AwsCeCostCategory.ParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsCeCostCategoryParameterPropertyToHclTerraform(struct?: AwsCeCostCategory.ParameterProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsCeCostCategorySplitChargeRulePropertyToTerraform(struct?: AwsCeCostCategory.SplitChargeRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    source: cdktn.stringToTerraform(struct!.source),
    targets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targets),
    parameter: cdktn.listMapper(awsCeCostCategoryParameterPropertyToTerraform, true)(struct!.parameter),
  }
}


export function awsCeCostCategorySplitChargeRulePropertyToHclTerraform(struct?: AwsCeCostCategory.SplitChargeRuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
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
    targets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parameter: {
      value: cdktn.listMapperHcl(awsCeCostCategoryParameterPropertyToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ParameterPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsCeCostCategory {
export interface InheritedValueProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension_key AwsCeCostCategory#dimension_key}
  */
  readonly dimensionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension_name AwsCeCostCategory#dimension_name}
  */
  readonly dimensionName?: string;
}
export class InheritedValuePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InheritedValueProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionKey = this._dimensionKey;
    }
    if (this._dimensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionName = this._dimensionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InheritedValueProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensionKey = undefined;
      this._dimensionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensionKey = value.dimensionKey;
      this._dimensionName = value.dimensionName;
    }
  }

  // dimension_key - computed: false, optional: true, required: false
  private _dimensionKey?: string; 
  public get dimensionKey() {
    return this.getStringAttribute('dimension_key');
  }
  public set dimensionKey(value: string) {
    this._dimensionKey = value;
  }
  public resetDimensionKey() {
    this._dimensionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionKeyInput() {
    return this._dimensionKey;
  }

  // dimension_name - computed: false, optional: true, required: false
  private _dimensionName?: string; 
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }
  public set dimensionName(value: string) {
    this._dimensionName = value;
  }
  public resetDimensionName() {
    this._dimensionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionNameInput() {
    return this._dimensionName;
  }
}
export interface RuleRuleAndAndCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndAndCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndAndCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndAndCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndAndDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndAndDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndAndDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndAndDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndAndTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndAndTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndAndProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleAndAndCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleAndAndDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleAndAndTagsProperty;
}
export class RuleRuleAndAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleRuleAndAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleAndAndCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleAndAndCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleAndAndDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleAndAndDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleAndAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleAndAndTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class RuleRuleAndAndPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleRuleAndAndProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleRuleAndAndPropertyOutputReference {
    return new RuleRuleAndAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleRuleAndCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndNotCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndNotCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndNotCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndNotCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndNotDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndNotDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndNotDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndNotDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndNotTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndNotTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndNotProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleAndNotCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleAndNotDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleAndNotTagsProperty;
}
export class RuleRuleAndNotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndNotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndNotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleAndNotCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleAndNotCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleAndNotDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleAndNotDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleAndNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleAndNotTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface RuleRuleAndOrCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndOrCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndOrCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndOrCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndOrDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndOrDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndOrDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndOrDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndOrTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndOrTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndOrProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleAndOrCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleAndOrDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleAndOrTagsProperty;
}
export class RuleRuleAndOrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleRuleAndOrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndOrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleAndOrCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleAndOrCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleAndOrDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleAndOrDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleAndOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleAndOrTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class RuleRuleAndOrPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleRuleAndOrProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleRuleAndOrPropertyOutputReference {
    return new RuleRuleAndOrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleRuleAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleAndTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleAndProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#and AwsCeCostCategory#and}
  */
  readonly and?: RuleRuleAndAndProperty[] | cdktn.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleAndCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleAndDimensionProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#not AwsCeCostCategory#not}
  */
  readonly not?: RuleRuleAndNotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#or AwsCeCostCategory#or}
  */
  readonly or?: RuleRuleAndOrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleAndTagsProperty;
}
export class RuleRuleAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleRuleAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new RuleRuleAndAndPropertyList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: RuleRuleAndAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleAndCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleAndCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleAndDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleAndDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new RuleRuleAndNotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: RuleRuleAndNotProperty) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new RuleRuleAndOrPropertyList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: RuleRuleAndOrProperty[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleAndTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class RuleRuleAndPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleRuleAndProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleRuleAndPropertyOutputReference {
    return new RuleRuleAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleRuleCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotAndCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotAndCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotAndCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotAndCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotAndDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotAndDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotAndDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotAndDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotAndTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotAndTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotAndProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleNotAndCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleNotAndDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleNotAndTagsProperty;
}
export class RuleRuleNotAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleRuleNotAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleNotAndCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleNotAndCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleNotAndDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleNotAndDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleNotAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleNotAndTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class RuleRuleNotAndPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleRuleNotAndProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleRuleNotAndPropertyOutputReference {
    return new RuleRuleNotAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleRuleNotCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotNotCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotNotCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotNotCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotNotCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotNotDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotNotDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotNotDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotNotDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotNotTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotNotTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotNotProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleNotNotCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleNotNotDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleNotNotTagsProperty;
}
export class RuleRuleNotNotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotNotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotNotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleNotNotCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleNotNotCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleNotNotDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleNotNotDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleNotNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleNotNotTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface RuleRuleNotOrCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotOrCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotOrCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotOrCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotOrDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotOrDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotOrDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotOrDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotOrTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotOrTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotOrProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleNotOrCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleNotOrDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleNotOrTagsProperty;
}
export class RuleRuleNotOrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleRuleNotOrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotOrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleNotOrCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleNotOrCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleNotOrDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleNotOrDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleNotOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleNotOrTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class RuleRuleNotOrPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleRuleNotOrProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleRuleNotOrPropertyOutputReference {
    return new RuleRuleNotOrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleRuleNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleNotProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#and AwsCeCostCategory#and}
  */
  readonly and?: RuleRuleNotAndProperty[] | cdktn.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleNotCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleNotDimensionProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#not AwsCeCostCategory#not}
  */
  readonly not?: RuleRuleNotNotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#or AwsCeCostCategory#or}
  */
  readonly or?: RuleRuleNotOrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleNotTagsProperty;
}
export class RuleRuleNotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleNotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleNotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new RuleRuleNotAndPropertyList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: RuleRuleNotAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleNotCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleNotCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleNotDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleNotDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new RuleRuleNotNotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: RuleRuleNotNotProperty) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new RuleRuleNotOrPropertyList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: RuleRuleNotOrProperty[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleNotTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface RuleRuleOrAndCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrAndCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrAndCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrAndCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrAndDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrAndDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrAndDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrAndDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrAndTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrAndTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrAndTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrAndTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrAndProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleOrAndCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleOrAndDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleOrAndTagsProperty;
}
export class RuleRuleOrAndPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleRuleOrAndProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrAndProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleOrAndCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleOrAndCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleOrAndDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleOrAndDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleOrAndTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleOrAndTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class RuleRuleOrAndPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleRuleOrAndProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleRuleOrAndPropertyOutputReference {
    return new RuleRuleOrAndPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleRuleOrCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrNotCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrNotCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrNotCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrNotCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrNotDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrNotDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrNotDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrNotDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrNotTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrNotTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrNotTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrNotTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrNotProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleOrNotCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleOrNotDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleOrNotTagsProperty;
}
export class RuleRuleOrNotPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrNotProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrNotProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleOrNotCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleOrNotCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleOrNotDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleOrNotDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleOrNotTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleOrNotTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface RuleRuleOrOrCostCategoryProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrOrCostCategoryPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrOrCostCategoryProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrOrCostCategoryProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrOrDimensionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrOrDimensionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrOrDimensionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrOrDimensionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrOrTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrOrTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrOrProperty {
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleOrOrCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleOrOrDimensionProperty;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleOrOrTagsProperty;
}
export class RuleRuleOrOrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleRuleOrOrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrOrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._tags.internalValue = value.tags;
    }
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleOrOrCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleOrOrCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleOrOrDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleOrOrDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleOrOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleOrOrTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class RuleRuleOrOrPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleRuleOrOrProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleRuleOrOrPropertyOutputReference {
    return new RuleRuleOrOrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleRuleOrTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleOrTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleOrTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleOrProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#and AwsCeCostCategory#and}
  */
  readonly and?: RuleRuleOrAndProperty[] | cdktn.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleOrCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleOrDimensionProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#not AwsCeCostCategory#not}
  */
  readonly not?: RuleRuleOrNotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#or AwsCeCostCategory#or}
  */
  readonly or?: RuleRuleOrOrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleOrTagsProperty;
}
export class RuleRuleOrPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleRuleOrProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleOrProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new RuleRuleOrAndPropertyList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: RuleRuleOrAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleOrCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleOrCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleOrDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleOrDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new RuleRuleOrNotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: RuleRuleOrNotProperty) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new RuleRuleOrOrPropertyList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: RuleRuleOrOrProperty[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleOrTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleOrTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class RuleRuleOrPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleRuleOrProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleRuleOrPropertyOutputReference {
    return new RuleRuleOrPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleRuleTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#key AwsCeCostCategory#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#match_options AwsCeCostCategory#match_options}
  */
  readonly matchOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
}
export class RuleRuleTagsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleTagsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOptions = this._matchOptions;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleTagsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._matchOptions = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._matchOptions = value.matchOptions;
      this._values = value.values;
    }
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

  // match_options - computed: false, optional: true, required: false
  private _matchOptions?: string[]; 
  public get matchOptions() {
    return cdktn.Fn.tolist(this.getListAttribute('match_options'));
  }
  public set matchOptions(value: string[]) {
    this._matchOptions = value;
  }
  public resetMatchOptions() {
    this._matchOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOptionsInput() {
    return this._matchOptions;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RuleRuleProperty {
  /**
  * and block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#and AwsCeCostCategory#and}
  */
  readonly and?: RuleRuleAndProperty[] | cdktn.IResolvable;
  /**
  * cost_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#cost_category AwsCeCostCategory#cost_category}
  */
  readonly costCategory?: RuleRuleCostCategoryProperty;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#dimension AwsCeCostCategory#dimension}
  */
  readonly dimension?: RuleRuleDimensionProperty;
  /**
  * not block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#not AwsCeCostCategory#not}
  */
  readonly not?: RuleRuleNotProperty;
  /**
  * or block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#or AwsCeCostCategory#or}
  */
  readonly or?: RuleRuleOrProperty[] | cdktn.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#tags AwsCeCostCategory#tags}
  */
  readonly tags?: RuleRuleTagsProperty;
}
export class RuleRulePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleRuleProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._costCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCategory = this._costCategory?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._not?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleRuleProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._and.internalValue = undefined;
      this._costCategory.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._not.internalValue = undefined;
      this._or.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._and.internalValue = value.and;
      this._costCategory.internalValue = value.costCategory;
      this._dimension.internalValue = value.dimension;
      this._not.internalValue = value.not;
      this._or.internalValue = value.or;
      this._tags.internalValue = value.tags;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new RuleRuleAndPropertyList(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: RuleRuleAndProperty[] | cdktn.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // cost_category - computed: false, optional: true, required: false
  private _costCategory = new RuleRuleCostCategoryPropertyOutputReference(this, "cost_category");
  public get costCategory() {
    return this._costCategory;
  }
  public putCostCategory(value: RuleRuleCostCategoryProperty) {
    this._costCategory.internalValue = value;
  }
  public resetCostCategory() {
    this._costCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCategoryInput() {
    return this._costCategory.internalValue;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new RuleRuleDimensionPropertyOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: RuleRuleDimensionProperty) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // not - computed: false, optional: true, required: false
  private _not = new RuleRuleNotPropertyOutputReference(this, "not");
  public get not() {
    return this._not;
  }
  public putNot(value: RuleRuleNotProperty) {
    this._not.internalValue = value;
  }
  public resetNot() {
    this._not.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new RuleRuleOrPropertyList(this, "or", true);
  public get or() {
    return this._or;
  }
  public putOr(value: RuleRuleOrProperty[] | cdktn.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new RuleRuleTagsPropertyOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: RuleRuleTagsProperty) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface RuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#type AwsCeCostCategory#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#value AwsCeCostCategory#value}
  */
  readonly value?: string;
  /**
  * inherited_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#inherited_value AwsCeCostCategory#inherited_value}
  */
  readonly inheritedValue?: InheritedValueProperty;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#rule AwsCeCostCategory#rule}
  */
  readonly rule?: RuleRuleProperty;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._inheritedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedValue = this._inheritedValue?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
      this._inheritedValue.internalValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
      this._inheritedValue.internalValue = value.inheritedValue;
      this._rule.internalValue = value.rule;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // inherited_value - computed: false, optional: true, required: false
  private _inheritedValue = new InheritedValuePropertyOutputReference(this, "inherited_value");
  public get inheritedValue() {
    return this._inheritedValue;
  }
  public putInheritedValue(value: InheritedValueProperty) {
    this._inheritedValue.internalValue = value;
  }
  public resetInheritedValue() {
    this._inheritedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedValueInput() {
    return this._inheritedValue.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new RuleRulePropertyOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: RuleRuleProperty) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class RulePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleProperty[] | cdktn.IResolvable

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
  public get(index: number): RulePropertyOutputReference {
    return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ParameterProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#type AwsCeCostCategory#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#values AwsCeCostCategory#values}
  */
  readonly values?: string[];
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ParameterProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
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
export interface SplitChargeRuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#method AwsCeCostCategory#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#source AwsCeCostCategory#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#targets AwsCeCostCategory#targets}
  */
  readonly targets: string[];
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ce_cost_category#parameter AwsCeCostCategory#parameter}
  */
  readonly parameter?: ParameterProperty[] | cdktn.IResolvable;
}
export class SplitChargeRulePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SplitChargeRuleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SplitChargeRuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._source = undefined;
      this._targets = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._source = value.source;
      this._targets = value.targets;
      this._parameter.internalValue = value.parameter;
    }
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

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ParameterPropertyList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ParameterProperty[] | cdktn.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class SplitChargeRulePropertyList extends cdktn.ComplexList {
  public internalValue? : SplitChargeRuleProperty[] | cdktn.IResolvable

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
  public get(index: number): SplitChargeRulePropertyOutputReference {
    return new SplitChargeRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
