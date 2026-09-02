// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfGatewayRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#description TfGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier TfGatewayRule#gateway_identifier}
  */
  readonly gatewayIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#priority TfGatewayRule#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#region TfGatewayRule#region}
  */
  readonly region?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#action TfGatewayRule#action}
  */
  readonly action?: TfGatewayRule.ActionProperty[] | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#condition TfGatewayRule#condition}
  */
  readonly condition?: TfGatewayRule.ConditionProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#timeouts TfGatewayRule#timeouts}
  */
  readonly timeouts?: TfGatewayRule.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule aws_bedrockagentcore_gateway_rule}
*/
export class TfGatewayRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_gateway_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfGatewayRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfGatewayRule to import
  * @param importFromId The id of the existing TfGatewayRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfGatewayRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_gateway_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule aws_bedrockagentcore_gateway_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfGatewayRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TfGatewayRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_gateway_rule',
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
    this._gatewayIdentifier = config.gatewayIdentifier;
    this._priority = config.priority;
    this._region = config.region;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // gateway_arn - computed: true, optional: false, required: false
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }

  // gateway_identifier - computed: false, optional: false, required: true
  private _gatewayIdentifier?: string; 
  public get gatewayIdentifier() {
    return this.getStringAttribute('gateway_identifier');
  }
  public set gatewayIdentifier(value: string) {
    this._gatewayIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdentifierInput() {
    return this._gatewayIdentifier;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // system - computed: true, optional: false, required: false
  private _system = new TfGatewayRule.SystemPropertyList(this, "system", false);
  public get systemAttribute() {
    return this._system;
  }

  // action - computed: false, optional: true, required: false
  private _action = new TfGatewayRule.ActionPropertyList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: TfGatewayRule.ActionProperty[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new TfGatewayRule.ConditionPropertyList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: TfGatewayRule.ConditionProperty[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfGatewayRule.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfGatewayRule.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      gateway_identifier: cdktn.stringToTerraform(this._gatewayIdentifier),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      action: cdktn.listMapper(tfGatewayRuleActionPropertyToTerraform, true)(this._action.internalValue),
      condition: cdktn.listMapper(tfGatewayRuleConditionPropertyToTerraform, true)(this._condition.internalValue),
      timeouts: tfGatewayRuleTimeoutsPropertyToTerraform(this._timeouts.internalValue),
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
      gateway_identifier: {
        value: cdktn.stringToHclTerraform(this._gatewayIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktn.listMapperHcl(tfGatewayRuleActionPropertyToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfGatewayRule.ActionPropertyList",
      },
      condition: {
        value: cdktn.listMapperHcl(tfGatewayRuleConditionPropertyToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfGatewayRule.ConditionPropertyList",
      },
      timeouts: {
        value: tfGatewayRuleTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfGatewayRule.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfGatewayRuleSystemPropertyToTerraform(struct?: TfGatewayRule.SystemProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfGatewayRuleSystemPropertyToHclTerraform(struct?: TfGatewayRule.SystemProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfGatewayRuleStaticOverridePropertyToTerraform(struct?: TfGatewayRule.StaticOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bundle_arn: cdktn.stringToTerraform(struct!.bundleArn),
    bundle_version: cdktn.stringToTerraform(struct!.bundleVersion),
  }
}


export function tfGatewayRuleStaticOverridePropertyToHclTerraform(struct?: TfGatewayRule.StaticOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bundle_arn: {
      value: cdktn.stringToHclTerraform(struct!.bundleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktn.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyToTerraform(struct?: TfGatewayRule.ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bundle_arn: cdktn.stringToTerraform(struct!.bundleArn),
    bundle_version: cdktn.stringToTerraform(struct!.bundleVersion),
  }
}


export function tfGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyToHclTerraform(struct?: TfGatewayRule.ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bundle_arn: {
      value: cdktn.stringToHclTerraform(struct!.bundleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_version: {
      value: cdktn.stringToHclTerraform(struct!.bundleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitPropertyToTerraform(struct?: TfGatewayRule.ActionConfigurationBundleWeightedOverrideTrafficSplitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    name: cdktn.stringToTerraform(struct!.name),
    weight: cdktn.numberToTerraform(struct!.weight),
    configuration_bundle: cdktn.listMapper(tfGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyToTerraform, true)(struct!.configurationBundle),
  }
}


export function tfGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitPropertyToHclTerraform(struct?: TfGatewayRule.ActionConfigurationBundleWeightedOverrideTrafficSplitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    configuration_bundle: {
      value: cdktn.listMapperHcl(tfGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyToHclTerraform, true)(struct!.configurationBundle),
      isBlock: true,
      type: "list",
      storageClassType: "ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleWeightedOverridePropertyToTerraform(struct?: TfGatewayRule.WeightedOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    traffic_split: cdktn.listMapper(tfGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitPropertyToTerraform, true)(struct!.trafficSplit),
  }
}


export function tfGatewayRuleWeightedOverridePropertyToHclTerraform(struct?: TfGatewayRule.WeightedOverrideProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    traffic_split: {
      value: cdktn.listMapperHcl(tfGatewayRuleActionConfigurationBundleWeightedOverrideTrafficSplitPropertyToHclTerraform, true)(struct!.trafficSplit),
      isBlock: true,
      type: "list",
      storageClassType: "ActionConfigurationBundleWeightedOverrideTrafficSplitPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleActionConfigurationBundlePropertyToTerraform(struct?: TfGatewayRule.ActionConfigurationBundleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    static_override: cdktn.listMapper(tfGatewayRuleStaticOverridePropertyToTerraform, true)(struct!.staticOverride),
    weighted_override: cdktn.listMapper(tfGatewayRuleWeightedOverridePropertyToTerraform, true)(struct!.weightedOverride),
  }
}


export function tfGatewayRuleActionConfigurationBundlePropertyToHclTerraform(struct?: TfGatewayRule.ActionConfigurationBundleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    static_override: {
      value: cdktn.listMapperHcl(tfGatewayRuleStaticOverridePropertyToHclTerraform, true)(struct!.staticOverride),
      isBlock: true,
      type: "list",
      storageClassType: "StaticOverridePropertyList",
    },
    weighted_override: {
      value: cdktn.listMapperHcl(tfGatewayRuleWeightedOverridePropertyToHclTerraform, true)(struct!.weightedOverride),
      isBlock: true,
      type: "list",
      storageClassType: "WeightedOverridePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleStaticRoutePropertyToTerraform(struct?: TfGatewayRule.StaticRouteProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_name: cdktn.stringToTerraform(struct!.targetName),
  }
}


export function tfGatewayRuleStaticRoutePropertyToHclTerraform(struct?: TfGatewayRule.StaticRouteProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_name: {
      value: cdktn.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitPropertyToTerraform(struct?: TfGatewayRule.ActionRouteToTargetWeightedRouteTrafficSplitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    name: cdktn.stringToTerraform(struct!.name),
    target_name: cdktn.stringToTerraform(struct!.targetName),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function tfGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitPropertyToHclTerraform(struct?: TfGatewayRule.ActionRouteToTargetWeightedRouteTrafficSplitProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktn.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleWeightedRoutePropertyToTerraform(struct?: TfGatewayRule.WeightedRouteProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    traffic_split: cdktn.listMapper(tfGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitPropertyToTerraform, true)(struct!.trafficSplit),
  }
}


export function tfGatewayRuleWeightedRoutePropertyToHclTerraform(struct?: TfGatewayRule.WeightedRouteProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    traffic_split: {
      value: cdktn.listMapperHcl(tfGatewayRuleActionRouteToTargetWeightedRouteTrafficSplitPropertyToHclTerraform, true)(struct!.trafficSplit),
      isBlock: true,
      type: "list",
      storageClassType: "ActionRouteToTargetWeightedRouteTrafficSplitPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleRouteToTargetPropertyToTerraform(struct?: TfGatewayRule.RouteToTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    static_route: cdktn.listMapper(tfGatewayRuleStaticRoutePropertyToTerraform, true)(struct!.staticRoute),
    weighted_route: cdktn.listMapper(tfGatewayRuleWeightedRoutePropertyToTerraform, true)(struct!.weightedRoute),
  }
}


export function tfGatewayRuleRouteToTargetPropertyToHclTerraform(struct?: TfGatewayRule.RouteToTargetProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    static_route: {
      value: cdktn.listMapperHcl(tfGatewayRuleStaticRoutePropertyToHclTerraform, true)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "StaticRoutePropertyList",
    },
    weighted_route: {
      value: cdktn.listMapperHcl(tfGatewayRuleWeightedRoutePropertyToHclTerraform, true)(struct!.weightedRoute),
      isBlock: true,
      type: "list",
      storageClassType: "WeightedRoutePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleActionPropertyToTerraform(struct?: TfGatewayRule.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_bundle: cdktn.listMapper(tfGatewayRuleActionConfigurationBundlePropertyToTerraform, true)(struct!.configurationBundle),
    route_to_target: cdktn.listMapper(tfGatewayRuleRouteToTargetPropertyToTerraform, true)(struct!.routeToTarget),
  }
}


export function tfGatewayRuleActionPropertyToHclTerraform(struct?: TfGatewayRule.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_bundle: {
      value: cdktn.listMapperHcl(tfGatewayRuleActionConfigurationBundlePropertyToHclTerraform, true)(struct!.configurationBundle),
      isBlock: true,
      type: "list",
      storageClassType: "ActionConfigurationBundlePropertyList",
    },
    route_to_target: {
      value: cdktn.listMapperHcl(tfGatewayRuleRouteToTargetPropertyToHclTerraform, true)(struct!.routeToTarget),
      isBlock: true,
      type: "list",
      storageClassType: "RouteToTargetPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleMatchPathsPropertyToTerraform(struct?: TfGatewayRule.MatchPathsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.anyOf),
  }
}


export function tfGatewayRuleMatchPathsPropertyToHclTerraform(struct?: TfGatewayRule.MatchPathsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleIamPrincipalPropertyToTerraform(struct?: TfGatewayRule.IamPrincipalProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function tfGatewayRuleIamPrincipalPropertyToHclTerraform(struct?: TfGatewayRule.IamPrincipalProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleAnyOfPropertyToTerraform(struct?: TfGatewayRule.AnyOfProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_principal: cdktn.listMapper(tfGatewayRuleIamPrincipalPropertyToTerraform, true)(struct!.iamPrincipal),
  }
}


export function tfGatewayRuleAnyOfPropertyToHclTerraform(struct?: TfGatewayRule.AnyOfProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_principal: {
      value: cdktn.listMapperHcl(tfGatewayRuleIamPrincipalPropertyToHclTerraform, true)(struct!.iamPrincipal),
      isBlock: true,
      type: "list",
      storageClassType: "IamPrincipalPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleMatchPrincipalsPropertyToTerraform(struct?: TfGatewayRule.MatchPrincipalsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(tfGatewayRuleAnyOfPropertyToTerraform, true)(struct!.anyOf),
  }
}


export function tfGatewayRuleMatchPrincipalsPropertyToHclTerraform(struct?: TfGatewayRule.MatchPrincipalsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(tfGatewayRuleAnyOfPropertyToHclTerraform, true)(struct!.anyOf),
      isBlock: true,
      type: "list",
      storageClassType: "AnyOfPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleConditionPropertyToTerraform(struct?: TfGatewayRule.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_paths: cdktn.listMapper(tfGatewayRuleMatchPathsPropertyToTerraform, true)(struct!.matchPaths),
    match_principals: cdktn.listMapper(tfGatewayRuleMatchPrincipalsPropertyToTerraform, true)(struct!.matchPrincipals),
  }
}


export function tfGatewayRuleConditionPropertyToHclTerraform(struct?: TfGatewayRule.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_paths: {
      value: cdktn.listMapperHcl(tfGatewayRuleMatchPathsPropertyToHclTerraform, true)(struct!.matchPaths),
      isBlock: true,
      type: "list",
      storageClassType: "MatchPathsPropertyList",
    },
    match_principals: {
      value: cdktn.listMapperHcl(tfGatewayRuleMatchPrincipalsPropertyToHclTerraform, true)(struct!.matchPrincipals),
      isBlock: true,
      type: "list",
      storageClassType: "MatchPrincipalsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfGatewayRuleTimeoutsPropertyToTerraform(struct?: TfGatewayRule.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfGatewayRuleTimeoutsPropertyToHclTerraform(struct?: TfGatewayRule.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfGatewayRule {
export interface SystemProperty {
}
export class SystemPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }
}

export class SystemPropertyList extends cdktn.ComplexList {

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
  public get(index: number): SystemPropertyOutputReference {
    return new SystemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticOverrideProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn TfGatewayRule#bundle_arn}
  */
  readonly bundleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version TfGatewayRule#bundle_version}
  */
  readonly bundleVersion: string;
}
export class StaticOverridePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StaticOverrideProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleArn = this._bundleArn;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticOverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleArn = undefined;
      this._bundleVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleArn = value.bundleArn;
      this._bundleVersion = value.bundleVersion;
    }
  }

  // bundle_arn - computed: false, optional: false, required: true
  private _bundleArn?: string; 
  public get bundleArn() {
    return this.getStringAttribute('bundle_arn');
  }
  public set bundleArn(value: string) {
    this._bundleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleArnInput() {
    return this._bundleArn;
  }

  // bundle_version - computed: false, optional: false, required: true
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }
}

export class StaticOverridePropertyList extends cdktn.ComplexList {
  public internalValue? : StaticOverrideProperty[] | cdktn.IResolvable

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
  public get(index: number): StaticOverridePropertyOutputReference {
    return new StaticOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn TfGatewayRule#bundle_arn}
  */
  readonly bundleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version TfGatewayRule#bundle_version}
  */
  readonly bundleVersion: string;
}
export class ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleArn = this._bundleArn;
    }
    if (this._bundleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleVersion = this._bundleVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleArn = undefined;
      this._bundleVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleArn = value.bundleArn;
      this._bundleVersion = value.bundleVersion;
    }
  }

  // bundle_arn - computed: false, optional: false, required: true
  private _bundleArn?: string; 
  public get bundleArn() {
    return this.getStringAttribute('bundle_arn');
  }
  public set bundleArn(value: string) {
    this._bundleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleArnInput() {
    return this._bundleArn;
  }

  // bundle_version - computed: false, optional: false, required: true
  private _bundleVersion?: string; 
  public get bundleVersion() {
    return this.getStringAttribute('bundle_version');
  }
  public set bundleVersion(value: string) {
    this._bundleVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleVersionInput() {
    return this._bundleVersion;
  }
}

export class ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyList extends cdktn.ComplexList {
  public internalValue? : ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleProperty[] | cdktn.IResolvable

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
  public get(index: number): ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyOutputReference {
    return new ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionConfigurationBundleWeightedOverrideTrafficSplitProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#description TfGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#metadata TfGatewayRule#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#name TfGatewayRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#weight TfGatewayRule#weight}
  */
  readonly weight: number;
  /**
  * configuration_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle TfGatewayRule#configuration_bundle}
  */
  readonly configurationBundle?: ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleProperty[] | cdktn.IResolvable;
}
export class ActionConfigurationBundleWeightedOverrideTrafficSplitPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionConfigurationBundleWeightedOverrideTrafficSplitProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._configurationBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationBundle = this._configurationBundle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConfigurationBundleWeightedOverrideTrafficSplitProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._weight = undefined;
      this._configurationBundle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._metadata = value.metadata;
      this._name = value.name;
      this._weight = value.weight;
      this._configurationBundle.internalValue = value.configurationBundle;
    }
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // configuration_bundle - computed: false, optional: true, required: false
  private _configurationBundle = new ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundlePropertyList(this, "configuration_bundle", false);
  public get configurationBundle() {
    return this._configurationBundle;
  }
  public putConfigurationBundle(value: ActionConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleProperty[] | cdktn.IResolvable) {
    this._configurationBundle.internalValue = value;
  }
  public resetConfigurationBundle() {
    this._configurationBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBundleInput() {
    return this._configurationBundle.internalValue;
  }
}

export class ActionConfigurationBundleWeightedOverrideTrafficSplitPropertyList extends cdktn.ComplexList {
  public internalValue? : ActionConfigurationBundleWeightedOverrideTrafficSplitProperty[] | cdktn.IResolvable

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
  public get(index: number): ActionConfigurationBundleWeightedOverrideTrafficSplitPropertyOutputReference {
    return new ActionConfigurationBundleWeightedOverrideTrafficSplitPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WeightedOverrideProperty {
  /**
  * traffic_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split TfGatewayRule#traffic_split}
  */
  readonly trafficSplit?: ActionConfigurationBundleWeightedOverrideTrafficSplitProperty[] | cdktn.IResolvable;
}
export class WeightedOverridePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WeightedOverrideProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplit = this._trafficSplit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WeightedOverrideProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = value.trafficSplit;
    }
  }

  // traffic_split - computed: false, optional: true, required: false
  private _trafficSplit = new ActionConfigurationBundleWeightedOverrideTrafficSplitPropertyList(this, "traffic_split", false);
  public get trafficSplit() {
    return this._trafficSplit;
  }
  public putTrafficSplit(value: ActionConfigurationBundleWeightedOverrideTrafficSplitProperty[] | cdktn.IResolvable) {
    this._trafficSplit.internalValue = value;
  }
  public resetTrafficSplit() {
    this._trafficSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitInput() {
    return this._trafficSplit.internalValue;
  }
}

export class WeightedOverridePropertyList extends cdktn.ComplexList {
  public internalValue? : WeightedOverrideProperty[] | cdktn.IResolvable

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
  public get(index: number): WeightedOverridePropertyOutputReference {
    return new WeightedOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionConfigurationBundleProperty {
  /**
  * static_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#static_override TfGatewayRule#static_override}
  */
  readonly staticOverride?: StaticOverrideProperty[] | cdktn.IResolvable;
  /**
  * weighted_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override TfGatewayRule#weighted_override}
  */
  readonly weightedOverride?: WeightedOverrideProperty[] | cdktn.IResolvable;
}
export class ActionConfigurationBundlePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionConfigurationBundleProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticOverride = this._staticOverride?.internalValue;
    }
    if (this._weightedOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedOverride = this._weightedOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConfigurationBundleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticOverride.internalValue = undefined;
      this._weightedOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticOverride.internalValue = value.staticOverride;
      this._weightedOverride.internalValue = value.weightedOverride;
    }
  }

  // static_override - computed: false, optional: true, required: false
  private _staticOverride = new StaticOverridePropertyList(this, "static_override", false);
  public get staticOverride() {
    return this._staticOverride;
  }
  public putStaticOverride(value: StaticOverrideProperty[] | cdktn.IResolvable) {
    this._staticOverride.internalValue = value;
  }
  public resetStaticOverride() {
    this._staticOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticOverrideInput() {
    return this._staticOverride.internalValue;
  }

  // weighted_override - computed: false, optional: true, required: false
  private _weightedOverride = new WeightedOverridePropertyList(this, "weighted_override", false);
  public get weightedOverride() {
    return this._weightedOverride;
  }
  public putWeightedOverride(value: WeightedOverrideProperty[] | cdktn.IResolvable) {
    this._weightedOverride.internalValue = value;
  }
  public resetWeightedOverride() {
    this._weightedOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedOverrideInput() {
    return this._weightedOverride.internalValue;
  }
}

export class ActionConfigurationBundlePropertyList extends cdktn.ComplexList {
  public internalValue? : ActionConfigurationBundleProperty[] | cdktn.IResolvable

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
  public get(index: number): ActionConfigurationBundlePropertyOutputReference {
    return new ActionConfigurationBundlePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StaticRouteProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#target_name TfGatewayRule#target_name}
  */
  readonly targetName: string;
}
export class StaticRoutePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StaticRouteProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StaticRouteProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetName = value.targetName;
    }
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }
}

export class StaticRoutePropertyList extends cdktn.ComplexList {
  public internalValue? : StaticRouteProperty[] | cdktn.IResolvable

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
  public get(index: number): StaticRoutePropertyOutputReference {
    return new StaticRoutePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionRouteToTargetWeightedRouteTrafficSplitProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#description TfGatewayRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#metadata TfGatewayRule#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#name TfGatewayRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#target_name TfGatewayRule#target_name}
  */
  readonly targetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#weight TfGatewayRule#weight}
  */
  readonly weight: number;
}
export class ActionRouteToTargetWeightedRouteTrafficSplitPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionRouteToTargetWeightedRouteTrafficSplitProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionRouteToTargetWeightedRouteTrafficSplitProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._targetName = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._metadata = value.metadata;
      this._name = value.name;
      this._targetName = value.targetName;
      this._weight = value.weight;
    }
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ActionRouteToTargetWeightedRouteTrafficSplitPropertyList extends cdktn.ComplexList {
  public internalValue? : ActionRouteToTargetWeightedRouteTrafficSplitProperty[] | cdktn.IResolvable

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
  public get(index: number): ActionRouteToTargetWeightedRouteTrafficSplitPropertyOutputReference {
    return new ActionRouteToTargetWeightedRouteTrafficSplitPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WeightedRouteProperty {
  /**
  * traffic_split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split TfGatewayRule#traffic_split}
  */
  readonly trafficSplit?: ActionRouteToTargetWeightedRouteTrafficSplitProperty[] | cdktn.IResolvable;
}
export class WeightedRoutePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WeightedRouteProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficSplit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplit = this._trafficSplit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WeightedRouteProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficSplit.internalValue = value.trafficSplit;
    }
  }

  // traffic_split - computed: false, optional: true, required: false
  private _trafficSplit = new ActionRouteToTargetWeightedRouteTrafficSplitPropertyList(this, "traffic_split", false);
  public get trafficSplit() {
    return this._trafficSplit;
  }
  public putTrafficSplit(value: ActionRouteToTargetWeightedRouteTrafficSplitProperty[] | cdktn.IResolvable) {
    this._trafficSplit.internalValue = value;
  }
  public resetTrafficSplit() {
    this._trafficSplit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitInput() {
    return this._trafficSplit.internalValue;
  }
}

export class WeightedRoutePropertyList extends cdktn.ComplexList {
  public internalValue? : WeightedRouteProperty[] | cdktn.IResolvable

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
  public get(index: number): WeightedRoutePropertyOutputReference {
    return new WeightedRoutePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteToTargetProperty {
  /**
  * static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#static_route TfGatewayRule#static_route}
  */
  readonly staticRoute?: StaticRouteProperty[] | cdktn.IResolvable;
  /**
  * weighted_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route TfGatewayRule#weighted_route}
  */
  readonly weightedRoute?: WeightedRouteProperty[] | cdktn.IResolvable;
}
export class RouteToTargetPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RouteToTargetProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    if (this._weightedRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedRoute = this._weightedRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteToTargetProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = undefined;
      this._weightedRoute.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = value.staticRoute;
      this._weightedRoute.internalValue = value.weightedRoute;
    }
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new StaticRoutePropertyList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: StaticRouteProperty[] | cdktn.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }

  // weighted_route - computed: false, optional: true, required: false
  private _weightedRoute = new WeightedRoutePropertyList(this, "weighted_route", false);
  public get weightedRoute() {
    return this._weightedRoute;
  }
  public putWeightedRoute(value: WeightedRouteProperty[] | cdktn.IResolvable) {
    this._weightedRoute.internalValue = value;
  }
  public resetWeightedRoute() {
    this._weightedRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedRouteInput() {
    return this._weightedRoute.internalValue;
  }
}

export class RouteToTargetPropertyList extends cdktn.ComplexList {
  public internalValue? : RouteToTargetProperty[] | cdktn.IResolvable

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
  public get(index: number): RouteToTargetPropertyOutputReference {
    return new RouteToTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionProperty {
  /**
  * configuration_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle TfGatewayRule#configuration_bundle}
  */
  readonly configurationBundle?: ActionConfigurationBundleProperty[] | cdktn.IResolvable;
  /**
  * route_to_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target TfGatewayRule#route_to_target}
  */
  readonly routeToTarget?: RouteToTargetProperty[] | cdktn.IResolvable;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationBundle = this._configurationBundle?.internalValue;
    }
    if (this._routeToTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeToTarget = this._routeToTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationBundle.internalValue = undefined;
      this._routeToTarget.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationBundle.internalValue = value.configurationBundle;
      this._routeToTarget.internalValue = value.routeToTarget;
    }
  }

  // configuration_bundle - computed: false, optional: true, required: false
  private _configurationBundle = new ActionConfigurationBundlePropertyList(this, "configuration_bundle", false);
  public get configurationBundle() {
    return this._configurationBundle;
  }
  public putConfigurationBundle(value: ActionConfigurationBundleProperty[] | cdktn.IResolvable) {
    this._configurationBundle.internalValue = value;
  }
  public resetConfigurationBundle() {
    this._configurationBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBundleInput() {
    return this._configurationBundle.internalValue;
  }

  // route_to_target - computed: false, optional: true, required: false
  private _routeToTarget = new RouteToTargetPropertyList(this, "route_to_target", false);
  public get routeToTarget() {
    return this._routeToTarget;
  }
  public putRouteToTarget(value: RouteToTargetProperty[] | cdktn.IResolvable) {
    this._routeToTarget.internalValue = value;
  }
  public resetRouteToTarget() {
    this._routeToTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeToTargetInput() {
    return this._routeToTarget.internalValue;
  }
}

export class ActionPropertyList extends cdktn.ComplexList {
  public internalValue? : ActionProperty[] | cdktn.IResolvable

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
  public get(index: number): ActionPropertyOutputReference {
    return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPathsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#any_of TfGatewayRule#any_of}
  */
  readonly anyOf: string[];
}
export class MatchPathsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPathsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPathsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}

export class MatchPathsPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPathsProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPathsPropertyOutputReference {
    return new MatchPathsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamPrincipalProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#arn TfGatewayRule#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#operator TfGatewayRule#operator}
  */
  readonly operator?: string;
}
export class IamPrincipalPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IamPrincipalProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamPrincipalProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._operator = value.operator;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class IamPrincipalPropertyList extends cdktn.ComplexList {
  public internalValue? : IamPrincipalProperty[] | cdktn.IResolvable

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
  public get(index: number): IamPrincipalPropertyOutputReference {
    return new IamPrincipalPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnyOfProperty {
  /**
  * iam_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal TfGatewayRule#iam_principal}
  */
  readonly iamPrincipal?: IamPrincipalProperty[] | cdktn.IResolvable;
}
export class AnyOfPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AnyOfProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamPrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamPrincipal = this._iamPrincipal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnyOfProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamPrincipal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamPrincipal.internalValue = value.iamPrincipal;
    }
  }

  // iam_principal - computed: false, optional: true, required: false
  private _iamPrincipal = new IamPrincipalPropertyList(this, "iam_principal", false);
  public get iamPrincipal() {
    return this._iamPrincipal;
  }
  public putIamPrincipal(value: IamPrincipalProperty[] | cdktn.IResolvable) {
    this._iamPrincipal.internalValue = value;
  }
  public resetIamPrincipal() {
    this._iamPrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamPrincipalInput() {
    return this._iamPrincipal.internalValue;
  }
}

export class AnyOfPropertyList extends cdktn.ComplexList {
  public internalValue? : AnyOfProperty[] | cdktn.IResolvable

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
  public get(index: number): AnyOfPropertyOutputReference {
    return new AnyOfPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MatchPrincipalsProperty {
  /**
  * any_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#any_of TfGatewayRule#any_of}
  */
  readonly anyOf?: AnyOfProperty[] | cdktn.IResolvable;
}
export class MatchPrincipalsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchPrincipalsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MatchPrincipalsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = value.anyOf;
    }
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf = new AnyOfPropertyList(this, "any_of", false);
  public get anyOf() {
    return this._anyOf;
  }
  public putAnyOf(value: AnyOfProperty[] | cdktn.IResolvable) {
    this._anyOf.internalValue = value;
  }
  public resetAnyOf() {
    this._anyOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf.internalValue;
  }
}

export class MatchPrincipalsPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchPrincipalsProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchPrincipalsPropertyOutputReference {
    return new MatchPrincipalsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConditionProperty {
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#match_paths TfGatewayRule#match_paths}
  */
  readonly matchPaths?: MatchPathsProperty[] | cdktn.IResolvable;
  /**
  * match_principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#match_principals TfGatewayRule#match_principals}
  */
  readonly matchPrincipals?: MatchPrincipalsProperty[] | cdktn.IResolvable;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPaths = this._matchPaths?.internalValue;
    }
    if (this._matchPrincipals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPrincipals = this._matchPrincipals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchPaths.internalValue = undefined;
      this._matchPrincipals.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchPaths.internalValue = value.matchPaths;
      this._matchPrincipals.internalValue = value.matchPrincipals;
    }
  }

  // match_paths - computed: false, optional: true, required: false
  private _matchPaths = new MatchPathsPropertyList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: MatchPathsProperty[] | cdktn.IResolvable) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // match_principals - computed: false, optional: true, required: false
  private _matchPrincipals = new MatchPrincipalsPropertyList(this, "match_principals", false);
  public get matchPrincipals() {
    return this._matchPrincipals;
  }
  public putMatchPrincipals(value: MatchPrincipalsProperty[] | cdktn.IResolvable) {
    this._matchPrincipals.internalValue = value;
  }
  public resetMatchPrincipals() {
    this._matchPrincipals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPrincipalsInput() {
    return this._matchPrincipals.internalValue;
  }
}

export class ConditionPropertyList extends cdktn.ComplexList {
  public internalValue? : ConditionProperty[] | cdktn.IResolvable

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
  public get(index: number): ConditionPropertyOutputReference {
    return new ConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#create TfGatewayRule#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#delete TfGatewayRule#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_gateway_rule#update TfGatewayRule#update}
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
}
