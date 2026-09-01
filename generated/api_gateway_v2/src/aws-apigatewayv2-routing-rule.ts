// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsApigatewayv2RoutingRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#domain_name AwsApigatewayv2RoutingRule#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#priority AwsApigatewayv2RoutingRule#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#region AwsApigatewayv2RoutingRule#region}
  */
  readonly region?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#action AwsApigatewayv2RoutingRule#action}
  */
  readonly action?: AwsApigatewayv2RoutingRule.ActionProperty[] | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#condition AwsApigatewayv2RoutingRule#condition}
  */
  readonly condition?: AwsApigatewayv2RoutingRule.ConditionProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule}
*/
export class AwsApigatewayv2RoutingRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_routing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsApigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsApigatewayv2RoutingRule to import
  * @param importFromId The id of the existing AwsApigatewayv2RoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsApigatewayv2RoutingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_apigatewayv2_routing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsApigatewayv2RoutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsApigatewayv2RoutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_routing_rule',
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
    this._domainName = config.domainName;
    this._priority = config.priority;
    this._region = config.region;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // routing_rule_arn - computed: true, optional: false, required: false
  public get routingRuleArn() {
    return this.getStringAttribute('routing_rule_arn');
  }

  // routing_rule_id - computed: true, optional: false, required: false
  public get routingRuleId() {
    return this.getStringAttribute('routing_rule_id');
  }

  // action - computed: false, optional: true, required: false
  private _action = new AwsApigatewayv2RoutingRule.ActionPropertyList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: AwsApigatewayv2RoutingRule.ActionProperty[] | cdktn.IResolvable) {
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
  private _condition = new AwsApigatewayv2RoutingRule.ConditionPropertyList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AwsApigatewayv2RoutingRule.ConditionProperty[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktn.stringToTerraform(this._domainName),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      action: cdktn.listMapper(awsApigatewayv2RoutingRuleActionPropertyToTerraform, true)(this._action.internalValue),
      condition: cdktn.listMapper(awsApigatewayv2RoutingRuleConditionPropertyToTerraform, true)(this._condition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
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
        value: cdktn.listMapperHcl(awsApigatewayv2RoutingRuleActionPropertyToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApigatewayv2RoutingRule.ActionPropertyList",
      },
      condition: {
        value: cdktn.listMapperHcl(awsApigatewayv2RoutingRuleConditionPropertyToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApigatewayv2RoutingRule.ConditionPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsApigatewayv2RoutingRuleInvokeApiPropertyToTerraform(struct?: AwsApigatewayv2RoutingRule.InvokeApiProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_id: cdktn.stringToTerraform(struct!.apiId),
    stage: cdktn.stringToTerraform(struct!.stage),
    strip_base_path: cdktn.booleanToTerraform(struct!.stripBasePath),
  }
}


export function awsApigatewayv2RoutingRuleInvokeApiPropertyToHclTerraform(struct?: AwsApigatewayv2RoutingRule.InvokeApiProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_id: {
      value: cdktn.stringToHclTerraform(struct!.apiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktn.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_base_path: {
      value: cdktn.booleanToHclTerraform(struct!.stripBasePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApigatewayv2RoutingRuleActionPropertyToTerraform(struct?: AwsApigatewayv2RoutingRule.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invoke_api: cdktn.listMapper(awsApigatewayv2RoutingRuleInvokeApiPropertyToTerraform, true)(struct!.invokeApi),
  }
}


export function awsApigatewayv2RoutingRuleActionPropertyToHclTerraform(struct?: AwsApigatewayv2RoutingRule.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invoke_api: {
      value: cdktn.listMapperHcl(awsApigatewayv2RoutingRuleInvokeApiPropertyToHclTerraform, true)(struct!.invokeApi),
      isBlock: true,
      type: "list",
      storageClassType: "InvokeApiPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApigatewayv2RoutingRuleMatchBasePathsPropertyToTerraform(struct?: AwsApigatewayv2RoutingRule.MatchBasePathsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.anyOf),
  }
}


export function awsApigatewayv2RoutingRuleMatchBasePathsPropertyToHclTerraform(struct?: AwsApigatewayv2RoutingRule.MatchBasePathsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApigatewayv2RoutingRuleAnyOfPropertyToTerraform(struct?: AwsApigatewayv2RoutingRule.AnyOfProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    value_glob: cdktn.stringToTerraform(struct!.valueGlob),
  }
}


export function awsApigatewayv2RoutingRuleAnyOfPropertyToHclTerraform(struct?: AwsApigatewayv2RoutingRule.AnyOfProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_glob: {
      value: cdktn.stringToHclTerraform(struct!.valueGlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApigatewayv2RoutingRuleMatchHeadersPropertyToTerraform(struct?: AwsApigatewayv2RoutingRule.MatchHeadersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(awsApigatewayv2RoutingRuleAnyOfPropertyToTerraform, true)(struct!.anyOf),
  }
}


export function awsApigatewayv2RoutingRuleMatchHeadersPropertyToHclTerraform(struct?: AwsApigatewayv2RoutingRule.MatchHeadersProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(awsApigatewayv2RoutingRuleAnyOfPropertyToHclTerraform, true)(struct!.anyOf),
      isBlock: true,
      type: "list",
      storageClassType: "AnyOfPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsApigatewayv2RoutingRuleConditionPropertyToTerraform(struct?: AwsApigatewayv2RoutingRule.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_base_paths: cdktn.listMapper(awsApigatewayv2RoutingRuleMatchBasePathsPropertyToTerraform, true)(struct!.matchBasePaths),
    match_headers: cdktn.listMapper(awsApigatewayv2RoutingRuleMatchHeadersPropertyToTerraform, true)(struct!.matchHeaders),
  }
}


export function awsApigatewayv2RoutingRuleConditionPropertyToHclTerraform(struct?: AwsApigatewayv2RoutingRule.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_base_paths: {
      value: cdktn.listMapperHcl(awsApigatewayv2RoutingRuleMatchBasePathsPropertyToHclTerraform, true)(struct!.matchBasePaths),
      isBlock: true,
      type: "list",
      storageClassType: "MatchBasePathsPropertyList",
    },
    match_headers: {
      value: cdktn.listMapperHcl(awsApigatewayv2RoutingRuleMatchHeadersPropertyToHclTerraform, true)(struct!.matchHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "MatchHeadersPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsApigatewayv2RoutingRule {
export interface InvokeApiProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#api_id AwsApigatewayv2RoutingRule#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#stage AwsApigatewayv2RoutingRule#stage}
  */
  readonly stage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#strip_base_path AwsApigatewayv2RoutingRule#strip_base_path}
  */
  readonly stripBasePath?: boolean | cdktn.IResolvable;
}
export class InvokeApiPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InvokeApiProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._stripBasePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripBasePath = this._stripBasePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InvokeApiProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiId = undefined;
      this._stage = undefined;
      this._stripBasePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiId = value.apiId;
      this._stage = value.stage;
      this._stripBasePath = value.stripBasePath;
    }
  }

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // strip_base_path - computed: false, optional: true, required: false
  private _stripBasePath?: boolean | cdktn.IResolvable; 
  public get stripBasePath() {
    return this.getBooleanAttribute('strip_base_path');
  }
  public set stripBasePath(value: boolean | cdktn.IResolvable) {
    this._stripBasePath = value;
  }
  public resetStripBasePath() {
    this._stripBasePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripBasePathInput() {
    return this._stripBasePath;
  }
}

export class InvokeApiPropertyList extends cdktn.ComplexList {
  public internalValue? : InvokeApiProperty[] | cdktn.IResolvable

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
  public get(index: number): InvokeApiPropertyOutputReference {
    return new InvokeApiPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionProperty {
  /**
  * invoke_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#invoke_api AwsApigatewayv2RoutingRule#invoke_api}
  */
  readonly invokeApi?: InvokeApiProperty[] | cdktn.IResolvable;
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
    if (this._invokeApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeApi = this._invokeApi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeApi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeApi.internalValue = value.invokeApi;
    }
  }

  // invoke_api - computed: false, optional: true, required: false
  private _invokeApi = new InvokeApiPropertyList(this, "invoke_api", false);
  public get invokeApi() {
    return this._invokeApi;
  }
  public putInvokeApi(value: InvokeApiProperty[] | cdktn.IResolvable) {
    this._invokeApi.internalValue = value;
  }
  public resetInvokeApi() {
    this._invokeApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeApiInput() {
    return this._invokeApi.internalValue;
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
export interface MatchBasePathsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#any_of AwsApigatewayv2RoutingRule#any_of}
  */
  readonly anyOf: string[];
}
export class MatchBasePathsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchBasePathsProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MatchBasePathsProperty | cdktn.IResolvable | undefined) {
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
    return cdktn.Fn.tolist(this.getListAttribute('any_of'));
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}

export class MatchBasePathsPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchBasePathsProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchBasePathsPropertyOutputReference {
    return new MatchBasePathsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnyOfProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#header AwsApigatewayv2RoutingRule#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#value_glob AwsApigatewayv2RoutingRule#value_glob}
  */
  readonly valueGlob: string;
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
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._valueGlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueGlob = this._valueGlob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnyOfProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._valueGlob = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._valueGlob = value.valueGlob;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // value_glob - computed: false, optional: false, required: true
  private _valueGlob?: string; 
  public get valueGlob() {
    return this.getStringAttribute('value_glob');
  }
  public set valueGlob(value: string) {
    this._valueGlob = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueGlobInput() {
    return this._valueGlob;
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
export interface MatchHeadersProperty {
  /**
  * any_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#any_of AwsApigatewayv2RoutingRule#any_of}
  */
  readonly anyOf?: AnyOfProperty[] | cdktn.IResolvable;
}
export class MatchHeadersPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MatchHeadersProperty | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MatchHeadersProperty | cdktn.IResolvable | undefined) {
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

export class MatchHeadersPropertyList extends cdktn.ComplexList {
  public internalValue? : MatchHeadersProperty[] | cdktn.IResolvable

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
  public get(index: number): MatchHeadersPropertyOutputReference {
    return new MatchHeadersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConditionProperty {
  /**
  * match_base_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#match_base_paths AwsApigatewayv2RoutingRule#match_base_paths}
  */
  readonly matchBasePaths?: MatchBasePathsProperty[] | cdktn.IResolvable;
  /**
  * match_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/apigatewayv2_routing_rule#match_headers AwsApigatewayv2RoutingRule#match_headers}
  */
  readonly matchHeaders?: MatchHeadersProperty[] | cdktn.IResolvable;
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
    if (this._matchBasePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBasePaths = this._matchBasePaths?.internalValue;
    }
    if (this._matchHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHeaders = this._matchHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBasePaths.internalValue = undefined;
      this._matchHeaders.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchBasePaths.internalValue = value.matchBasePaths;
      this._matchHeaders.internalValue = value.matchHeaders;
    }
  }

  // match_base_paths - computed: false, optional: true, required: false
  private _matchBasePaths = new MatchBasePathsPropertyList(this, "match_base_paths", false);
  public get matchBasePaths() {
    return this._matchBasePaths;
  }
  public putMatchBasePaths(value: MatchBasePathsProperty[] | cdktn.IResolvable) {
    this._matchBasePaths.internalValue = value;
  }
  public resetMatchBasePaths() {
    this._matchBasePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBasePathsInput() {
    return this._matchBasePaths.internalValue;
  }

  // match_headers - computed: false, optional: true, required: false
  private _matchHeaders = new MatchHeadersPropertyList(this, "match_headers", false);
  public get matchHeaders() {
    return this._matchHeaders;
  }
  public putMatchHeaders(value: MatchHeadersProperty[] | cdktn.IResolvable) {
    this._matchHeaders.internalValue = value;
  }
  public resetMatchHeaders() {
    this._matchHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHeadersInput() {
    return this._matchHeaders.internalValue;
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
}
