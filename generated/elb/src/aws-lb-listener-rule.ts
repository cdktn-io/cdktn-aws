// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsListenerRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#id AwsListenerRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#listener_arn AwsListenerRule#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#priority AwsListenerRule#priority}
  */
  readonly priority?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#region AwsListenerRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#tags AwsListenerRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#tags_all AwsListenerRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#action AwsListenerRule#action}
  */
  readonly action: AwsListenerRule.ActionProperty[] | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#condition AwsListenerRule#condition}
  */
  readonly condition: AwsListenerRule.ConditionProperty[] | cdktn.IResolvable;
  /**
  * transform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#transform AwsListenerRule#transform}
  */
  readonly transform?: AwsListenerRule.TransformProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule aws_lb_listener_rule}
*/
export class AwsListenerRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lb_listener_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsListenerRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsListenerRule to import
  * @param importFromId The id of the existing AwsListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsListenerRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lb_listener_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule aws_lb_listener_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsListenerRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsListenerRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener_rule',
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
    this._listenerArn = config.listenerArn;
    this._priority = config.priority;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
    this._transform.internalValue = config.transform;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
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

  // action - computed: false, optional: false, required: true
  private _action = new AwsListenerRule.ActionPropertyList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: AwsListenerRule.ActionProperty[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AwsListenerRule.ConditionPropertyList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AwsListenerRule.ConditionProperty[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // transform - computed: false, optional: true, required: false
  private _transform = new AwsListenerRule.TransformPropertyList(this, "transform", true);
  public get transform() {
    return this._transform;
  }
  public putTransform(value: AwsListenerRule.TransformProperty[] | cdktn.IResolvable) {
    this._transform.internalValue = value;
  }
  public resetTransform() {
    this._transform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      listener_arn: cdktn.stringToTerraform(this._listenerArn),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      action: cdktn.listMapper(awsListenerRuleActionPropertyToTerraform, true)(this._action.internalValue),
      condition: cdktn.listMapper(awsListenerRuleConditionPropertyToTerraform, true)(this._condition.internalValue),
      transform: cdktn.listMapper(awsListenerRuleTransformPropertyToTerraform, true)(this._transform.internalValue),
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
      listener_arn: {
        value: cdktn.stringToHclTerraform(this._listenerArn),
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
      action: {
        value: cdktn.listMapperHcl(awsListenerRuleActionPropertyToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsListenerRule.ActionPropertyList",
      },
      condition: {
        value: cdktn.listMapperHcl(awsListenerRuleConditionPropertyToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsListenerRule.ConditionPropertyList",
      },
      transform: {
        value: cdktn.listMapperHcl(awsListenerRuleTransformPropertyToHclTerraform, true)(this._transform.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsListenerRule.TransformPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsListenerRuleAuthenticateCognitoPropertyToTerraform(struct?: AwsListenerRule.AuthenticateCognitoPropertyOutputReference | AwsListenerRule.AuthenticateCognitoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
    on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktn.stringToTerraform(struct!.scope),
    session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
    user_pool_arn: cdktn.stringToTerraform(struct!.userPoolArn),
    user_pool_client_id: cdktn.stringToTerraform(struct!.userPoolClientId),
    user_pool_domain: cdktn.stringToTerraform(struct!.userPoolDomain),
  }
}


export function awsListenerRuleAuthenticateCognitoPropertyToHclTerraform(struct?: AwsListenerRule.AuthenticateCognitoPropertyOutputReference | AwsListenerRule.AuthenticateCognitoProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    on_unauthenticated_request: {
      value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
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
    user_pool_arn: {
      value: cdktn.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_client_id: {
      value: cdktn.stringToHclTerraform(struct!.userPoolClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_domain: {
      value: cdktn.stringToHclTerraform(struct!.userPoolDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleAuthenticateOidcPropertyToTerraform(struct?: AwsListenerRule.AuthenticateOidcPropertyOutputReference | AwsListenerRule.AuthenticateOidcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktn.stringToTerraform(struct!.scope),
    session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
  }
}


export function awsListenerRuleAuthenticateOidcPropertyToHclTerraform(struct?: AwsListenerRule.AuthenticateOidcPropertyOutputReference | AwsListenerRule.AuthenticateOidcProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_unauthenticated_request: {
      value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
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
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.userInfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleFixedResponsePropertyToTerraform(struct?: AwsListenerRule.FixedResponsePropertyOutputReference | AwsListenerRule.FixedResponseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: cdktn.stringToTerraform(struct!.contentType),
    message_body: cdktn.stringToTerraform(struct!.messageBody),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function awsListenerRuleFixedResponsePropertyToHclTerraform(struct?: AwsListenerRule.FixedResponsePropertyOutputReference | AwsListenerRule.FixedResponseProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_body: {
      value: cdktn.stringToHclTerraform(struct!.messageBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktn.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleStickinessPropertyToTerraform(struct?: AwsListenerRule.StickinessPropertyOutputReference | AwsListenerRule.StickinessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function awsListenerRuleStickinessPropertyToHclTerraform(struct?: AwsListenerRule.StickinessPropertyOutputReference | AwsListenerRule.StickinessProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleTargetGroupPropertyToTerraform(struct?: AwsListenerRule.TargetGroupProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function awsListenerRuleTargetGroupPropertyToHclTerraform(struct?: AwsListenerRule.TargetGroupProperty | cdktn.IResolvable): any {
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


export function awsListenerRuleForwardPropertyToTerraform(struct?: AwsListenerRule.ForwardPropertyOutputReference | AwsListenerRule.ForwardProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stickiness: awsListenerRuleStickinessPropertyToTerraform(struct!.stickiness),
    target_group: cdktn.listMapper(awsListenerRuleTargetGroupPropertyToTerraform, true)(struct!.targetGroup),
  }
}


export function awsListenerRuleForwardPropertyToHclTerraform(struct?: AwsListenerRule.ForwardPropertyOutputReference | AwsListenerRule.ForwardProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stickiness: {
      value: awsListenerRuleStickinessPropertyToHclTerraform(struct!.stickiness),
      isBlock: true,
      type: "list",
      storageClassType: "StickinessPropertyList",
    },
    target_group: {
      value: cdktn.listMapperHcl(awsListenerRuleTargetGroupPropertyToHclTerraform, true)(struct!.targetGroup),
      isBlock: true,
      type: "set",
      storageClassType: "TargetGroupPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleAdditionalClaimPropertyToTerraform(struct?: AwsListenerRule.AdditionalClaimProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsListenerRuleAdditionalClaimPropertyToHclTerraform(struct?: AwsListenerRule.AdditionalClaimProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsListenerRuleJwtValidationPropertyToTerraform(struct?: AwsListenerRule.JwtValidationPropertyOutputReference | AwsListenerRule.JwtValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    issuer: cdktn.stringToTerraform(struct!.issuer),
    jwks_endpoint: cdktn.stringToTerraform(struct!.jwksEndpoint),
    additional_claim: cdktn.listMapper(awsListenerRuleAdditionalClaimPropertyToTerraform, true)(struct!.additionalClaim),
  }
}


export function awsListenerRuleJwtValidationPropertyToHclTerraform(struct?: AwsListenerRule.JwtValidationPropertyOutputReference | AwsListenerRule.JwtValidationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.jwksEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_claim: {
      value: cdktn.listMapperHcl(awsListenerRuleAdditionalClaimPropertyToHclTerraform, true)(struct!.additionalClaim),
      isBlock: true,
      type: "set",
      storageClassType: "AdditionalClaimPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleRedirectPropertyToTerraform(struct?: AwsListenerRule.RedirectPropertyOutputReference | AwsListenerRule.RedirectProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.stringToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    query: cdktn.stringToTerraform(struct!.query),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function awsListenerRuleRedirectPropertyToHclTerraform(struct?: AwsListenerRule.RedirectPropertyOutputReference | AwsListenerRule.RedirectProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktn.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleActionPropertyToTerraform(struct?: AwsListenerRule.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order: cdktn.numberToTerraform(struct!.order),
    target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
    type: cdktn.stringToTerraform(struct!.type),
    authenticate_cognito: awsListenerRuleAuthenticateCognitoPropertyToTerraform(struct!.authenticateCognito),
    authenticate_oidc: awsListenerRuleAuthenticateOidcPropertyToTerraform(struct!.authenticateOidc),
    fixed_response: awsListenerRuleFixedResponsePropertyToTerraform(struct!.fixedResponse),
    forward: awsListenerRuleForwardPropertyToTerraform(struct!.forward),
    jwt_validation: awsListenerRuleJwtValidationPropertyToTerraform(struct!.jwtValidation),
    redirect: awsListenerRuleRedirectPropertyToTerraform(struct!.redirect),
  }
}


export function awsListenerRuleActionPropertyToHclTerraform(struct?: AwsListenerRule.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    order: {
      value: cdktn.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
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
    authenticate_cognito: {
      value: awsListenerRuleAuthenticateCognitoPropertyToHclTerraform(struct!.authenticateCognito),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticateCognitoPropertyList",
    },
    authenticate_oidc: {
      value: awsListenerRuleAuthenticateOidcPropertyToHclTerraform(struct!.authenticateOidc),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticateOidcPropertyList",
    },
    fixed_response: {
      value: awsListenerRuleFixedResponsePropertyToHclTerraform(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "FixedResponsePropertyList",
    },
    forward: {
      value: awsListenerRuleForwardPropertyToHclTerraform(struct!.forward),
      isBlock: true,
      type: "list",
      storageClassType: "ForwardPropertyList",
    },
    jwt_validation: {
      value: awsListenerRuleJwtValidationPropertyToHclTerraform(struct!.jwtValidation),
      isBlock: true,
      type: "list",
      storageClassType: "JwtValidationPropertyList",
    },
    redirect: {
      value: awsListenerRuleRedirectPropertyToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "RedirectPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleHostHeaderPropertyToTerraform(struct?: AwsListenerRule.HostHeaderPropertyOutputReference | AwsListenerRule.HostHeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsListenerRuleHostHeaderPropertyToHclTerraform(struct?: AwsListenerRule.HostHeaderPropertyOutputReference | AwsListenerRule.HostHeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
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


export function awsListenerRuleHttpHeaderPropertyToTerraform(struct?: AwsListenerRule.HttpHeaderPropertyOutputReference | AwsListenerRule.HttpHeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_header_name: cdktn.stringToTerraform(struct!.httpHeaderName),
    regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsListenerRuleHttpHeaderPropertyToHclTerraform(struct?: AwsListenerRule.HttpHeaderPropertyOutputReference | AwsListenerRule.HttpHeaderProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_header_name: {
      value: cdktn.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
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


export function awsListenerRuleHttpRequestMethodPropertyToTerraform(struct?: AwsListenerRule.HttpRequestMethodPropertyOutputReference | AwsListenerRule.HttpRequestMethodProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsListenerRuleHttpRequestMethodPropertyToHclTerraform(struct?: AwsListenerRule.HttpRequestMethodPropertyOutputReference | AwsListenerRule.HttpRequestMethodProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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


export function awsListenerRulePathPatternPropertyToTerraform(struct?: AwsListenerRule.PathPatternPropertyOutputReference | AwsListenerRule.PathPatternProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsListenerRulePathPatternPropertyToHclTerraform(struct?: AwsListenerRule.PathPatternPropertyOutputReference | AwsListenerRule.PathPatternProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
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


export function awsListenerRuleQueryStringPropertyToTerraform(struct?: AwsListenerRule.QueryStringProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsListenerRuleQueryStringPropertyToHclTerraform(struct?: AwsListenerRule.QueryStringProperty | cdktn.IResolvable): any {
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


export function awsListenerRuleSourceIpPropertyToTerraform(struct?: AwsListenerRule.SourceIpPropertyOutputReference | AwsListenerRule.SourceIpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function awsListenerRuleSourceIpPropertyToHclTerraform(struct?: AwsListenerRule.SourceIpPropertyOutputReference | AwsListenerRule.SourceIpProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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


export function awsListenerRuleConditionPropertyToTerraform(struct?: AwsListenerRule.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_header: awsListenerRuleHostHeaderPropertyToTerraform(struct!.hostHeader),
    http_header: awsListenerRuleHttpHeaderPropertyToTerraform(struct!.httpHeader),
    http_request_method: awsListenerRuleHttpRequestMethodPropertyToTerraform(struct!.httpRequestMethod),
    path_pattern: awsListenerRulePathPatternPropertyToTerraform(struct!.pathPattern),
    query_string: cdktn.listMapper(awsListenerRuleQueryStringPropertyToTerraform, true)(struct!.queryString),
    source_ip: awsListenerRuleSourceIpPropertyToTerraform(struct!.sourceIp),
  }
}


export function awsListenerRuleConditionPropertyToHclTerraform(struct?: AwsListenerRule.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_header: {
      value: awsListenerRuleHostHeaderPropertyToHclTerraform(struct!.hostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "HostHeaderPropertyList",
    },
    http_header: {
      value: awsListenerRuleHttpHeaderPropertyToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "HttpHeaderPropertyList",
    },
    http_request_method: {
      value: awsListenerRuleHttpRequestMethodPropertyToHclTerraform(struct!.httpRequestMethod),
      isBlock: true,
      type: "list",
      storageClassType: "HttpRequestMethodPropertyList",
    },
    path_pattern: {
      value: awsListenerRulePathPatternPropertyToHclTerraform(struct!.pathPattern),
      isBlock: true,
      type: "list",
      storageClassType: "PathPatternPropertyList",
    },
    query_string: {
      value: cdktn.listMapperHcl(awsListenerRuleQueryStringPropertyToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "set",
      storageClassType: "QueryStringPropertyList",
    },
    source_ip: {
      value: awsListenerRuleSourceIpPropertyToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "SourceIpPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleTransformHostHeaderRewriteConfigRewritePropertyToTerraform(struct?: AwsListenerRule.TransformHostHeaderRewriteConfigRewritePropertyOutputReference | AwsListenerRule.TransformHostHeaderRewriteConfigRewriteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex: cdktn.stringToTerraform(struct!.regex),
    replace: cdktn.stringToTerraform(struct!.replace),
  }
}


export function awsListenerRuleTransformHostHeaderRewriteConfigRewritePropertyToHclTerraform(struct?: AwsListenerRule.TransformHostHeaderRewriteConfigRewritePropertyOutputReference | AwsListenerRule.TransformHostHeaderRewriteConfigRewriteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleHostHeaderRewriteConfigPropertyToTerraform(struct?: AwsListenerRule.HostHeaderRewriteConfigPropertyOutputReference | AwsListenerRule.HostHeaderRewriteConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rewrite: awsListenerRuleTransformHostHeaderRewriteConfigRewritePropertyToTerraform(struct!.rewrite),
  }
}


export function awsListenerRuleHostHeaderRewriteConfigPropertyToHclTerraform(struct?: AwsListenerRule.HostHeaderRewriteConfigPropertyOutputReference | AwsListenerRule.HostHeaderRewriteConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rewrite: {
      value: awsListenerRuleTransformHostHeaderRewriteConfigRewritePropertyToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "TransformHostHeaderRewriteConfigRewritePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleTransformUrlRewriteConfigRewritePropertyToTerraform(struct?: AwsListenerRule.TransformUrlRewriteConfigRewritePropertyOutputReference | AwsListenerRule.TransformUrlRewriteConfigRewriteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex: cdktn.stringToTerraform(struct!.regex),
    replace: cdktn.stringToTerraform(struct!.replace),
  }
}


export function awsListenerRuleTransformUrlRewriteConfigRewritePropertyToHclTerraform(struct?: AwsListenerRule.TransformUrlRewriteConfigRewritePropertyOutputReference | AwsListenerRule.TransformUrlRewriteConfigRewriteProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleUrlRewriteConfigPropertyToTerraform(struct?: AwsListenerRule.UrlRewriteConfigPropertyOutputReference | AwsListenerRule.UrlRewriteConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rewrite: awsListenerRuleTransformUrlRewriteConfigRewritePropertyToTerraform(struct!.rewrite),
  }
}


export function awsListenerRuleUrlRewriteConfigPropertyToHclTerraform(struct?: AwsListenerRule.UrlRewriteConfigPropertyOutputReference | AwsListenerRule.UrlRewriteConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rewrite: {
      value: awsListenerRuleTransformUrlRewriteConfigRewritePropertyToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "TransformUrlRewriteConfigRewritePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsListenerRuleTransformPropertyToTerraform(struct?: AwsListenerRule.TransformProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    host_header_rewrite_config: awsListenerRuleHostHeaderRewriteConfigPropertyToTerraform(struct!.hostHeaderRewriteConfig),
    url_rewrite_config: awsListenerRuleUrlRewriteConfigPropertyToTerraform(struct!.urlRewriteConfig),
  }
}


export function awsListenerRuleTransformPropertyToHclTerraform(struct?: AwsListenerRule.TransformProperty | cdktn.IResolvable): any {
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
    host_header_rewrite_config: {
      value: awsListenerRuleHostHeaderRewriteConfigPropertyToHclTerraform(struct!.hostHeaderRewriteConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HostHeaderRewriteConfigPropertyList",
    },
    url_rewrite_config: {
      value: awsListenerRuleUrlRewriteConfigPropertyToHclTerraform(struct!.urlRewriteConfig),
      isBlock: true,
      type: "list",
      storageClassType: "UrlRewriteConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsListenerRule {
export interface AuthenticateCognitoProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#authentication_request_extra_params AwsListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#on_unauthenticated_request AwsListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#scope AwsListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#session_cookie_name AwsListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#session_timeout AwsListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#user_pool_arn AwsListenerRule#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#user_pool_client_id AwsListenerRule#user_pool_client_id}
  */
  readonly userPoolClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#user_pool_domain AwsListenerRule#user_pool_domain}
  */
  readonly userPoolDomain: string;
}
export class AuthenticateCognitoPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticateCognitoProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._userPoolClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolClientId = this._userPoolClientId;
    }
    if (this._userPoolDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolDomain = this._userPoolDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticateCognitoProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationRequestExtraParams = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._userPoolArn = undefined;
      this._userPoolClientId = undefined;
      this._userPoolDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._userPoolArn = value.userPoolArn;
      this._userPoolClientId = value.userPoolClientId;
      this._userPoolDomain = value.userPoolDomain;
    }
  }

  // authentication_request_extra_params - computed: false, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: false, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: false, optional: true, required: false
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

  // user_pool_arn - computed: false, optional: false, required: true
  private _userPoolArn?: string; 
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }

  // user_pool_client_id - computed: false, optional: false, required: true
  private _userPoolClientId?: string; 
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }
  public set userPoolClientId(value: string) {
    this._userPoolClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolClientIdInput() {
    return this._userPoolClientId;
  }

  // user_pool_domain - computed: false, optional: false, required: true
  private _userPoolDomain?: string; 
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
  public set userPoolDomain(value: string) {
    this._userPoolDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolDomainInput() {
    return this._userPoolDomain;
  }
}
export interface AuthenticateOidcProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#authentication_request_extra_params AwsListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#authorization_endpoint AwsListenerRule#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#client_id AwsListenerRule#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#client_secret AwsListenerRule#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#issuer AwsListenerRule#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#on_unauthenticated_request AwsListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#scope AwsListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#session_cookie_name AwsListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#session_timeout AwsListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#token_endpoint AwsListenerRule#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#user_info_endpoint AwsListenerRule#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}
export class AuthenticateOidcPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticateOidcProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._userInfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticateOidcProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationRequestExtraParams = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuer = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._tokenEndpoint = undefined;
      this._userInfoEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuer = value.issuer;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._tokenEndpoint = value.tokenEndpoint;
      this._userInfoEndpoint = value.userInfoEndpoint;
    }
  }

  // authentication_request_extra_params - computed: false, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: false, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: false, optional: true, required: false
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

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user_info_endpoint - computed: false, optional: false, required: true
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint;
  }
}
export interface FixedResponseProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#content_type AwsListenerRule#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#message_body AwsListenerRule#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#status_code AwsListenerRule#status_code}
  */
  readonly statusCode?: string;
}
export class FixedResponsePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FixedResponseProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FixedResponseProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // message_body - computed: false, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface StickinessProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#duration AwsListenerRule#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#enabled AwsListenerRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}
export class StickinessPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StickinessProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StickinessProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enabled = value.enabled;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface TargetGroupProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#arn AwsListenerRule#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#weight AwsListenerRule#weight}
  */
  readonly weight?: number;
}
export class TargetGroupPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TargetGroupProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGroupProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._weight = value.weight;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class TargetGroupPropertyList extends cdktn.ComplexList {
  public internalValue? : TargetGroupProperty[] | cdktn.IResolvable

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
  public get(index: number): TargetGroupPropertyOutputReference {
    return new TargetGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardProperty {
  /**
  * stickiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#stickiness AwsListenerRule#stickiness}
  */
  readonly stickiness?: StickinessProperty;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#target_group AwsListenerRule#target_group}
  */
  readonly targetGroup: TargetGroupProperty[] | cdktn.IResolvable;
}
export class ForwardPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stickiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickiness = this._stickiness?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stickiness.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stickiness.internalValue = value.stickiness;
      this._targetGroup.internalValue = value.targetGroup;
    }
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness = new StickinessPropertyOutputReference(this, "stickiness");
  public get stickiness() {
    return this._stickiness;
  }
  public putStickiness(value: StickinessProperty) {
    this._stickiness.internalValue = value;
  }
  public resetStickiness() {
    this._stickiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness.internalValue;
  }

  // target_group - computed: false, optional: false, required: true
  private _targetGroup = new TargetGroupPropertyList(this, "target_group", true);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: TargetGroupProperty[] | cdktn.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }
}
export interface AdditionalClaimProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#format AwsListenerRule#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#name AwsListenerRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#values AwsListenerRule#values}
  */
  readonly values: string[];
}
export class AdditionalClaimPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AdditionalClaimProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdditionalClaimProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AdditionalClaimPropertyList extends cdktn.ComplexList {
  public internalValue? : AdditionalClaimProperty[] | cdktn.IResolvable

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
  public get(index: number): AdditionalClaimPropertyOutputReference {
    return new AdditionalClaimPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JwtValidationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#issuer AwsListenerRule#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#jwks_endpoint AwsListenerRule#jwks_endpoint}
  */
  readonly jwksEndpoint: string;
  /**
  * additional_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#additional_claim AwsListenerRule#additional_claim}
  */
  readonly additionalClaim?: AdditionalClaimProperty[] | cdktn.IResolvable;
}
export class JwtValidationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JwtValidationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksEndpoint = this._jwksEndpoint;
    }
    if (this._additionalClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalClaim = this._additionalClaim?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JwtValidationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuer = undefined;
      this._jwksEndpoint = undefined;
      this._additionalClaim.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuer = value.issuer;
      this._jwksEndpoint = value.jwksEndpoint;
      this._additionalClaim.internalValue = value.additionalClaim;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_endpoint - computed: false, optional: false, required: true
  private _jwksEndpoint?: string; 
  public get jwksEndpoint() {
    return this.getStringAttribute('jwks_endpoint');
  }
  public set jwksEndpoint(value: string) {
    this._jwksEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksEndpointInput() {
    return this._jwksEndpoint;
  }

  // additional_claim - computed: false, optional: true, required: false
  private _additionalClaim = new AdditionalClaimPropertyList(this, "additional_claim", true);
  public get additionalClaim() {
    return this._additionalClaim;
  }
  public putAdditionalClaim(value: AdditionalClaimProperty[] | cdktn.IResolvable) {
    this._additionalClaim.internalValue = value;
  }
  public resetAdditionalClaim() {
    this._additionalClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalClaimInput() {
    return this._additionalClaim.internalValue;
  }
}
export interface RedirectProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#host AwsListenerRule#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#path AwsListenerRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#port AwsListenerRule#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#protocol AwsListenerRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#query AwsListenerRule#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#status_code AwsListenerRule#status_code}
  */
  readonly statusCode: string;
}
export class RedirectPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedirectProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedirectProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._query = value.query;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface ActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#order AwsListenerRule#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#target_group_arn AwsListenerRule#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#type AwsListenerRule#type}
  */
  readonly type: string;
  /**
  * authenticate_cognito block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#authenticate_cognito AwsListenerRule#authenticate_cognito}
  */
  readonly authenticateCognito?: AuthenticateCognitoProperty;
  /**
  * authenticate_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#authenticate_oidc AwsListenerRule#authenticate_oidc}
  */
  readonly authenticateOidc?: AuthenticateOidcProperty;
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#fixed_response AwsListenerRule#fixed_response}
  */
  readonly fixedResponse?: FixedResponseProperty;
  /**
  * forward block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#forward AwsListenerRule#forward}
  */
  readonly forward?: ForwardProperty;
  /**
  * jwt_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#jwt_validation AwsListenerRule#jwt_validation}
  */
  readonly jwtValidation?: JwtValidationProperty;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#redirect AwsListenerRule#redirect}
  */
  readonly redirect?: RedirectProperty;
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
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._authenticateCognito?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateCognito = this._authenticateCognito?.internalValue;
    }
    if (this._authenticateOidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateOidc = this._authenticateOidc?.internalValue;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._jwtValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtValidation = this._jwtValidation?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._targetGroupArn = undefined;
      this._type = undefined;
      this._authenticateCognito.internalValue = undefined;
      this._authenticateOidc.internalValue = undefined;
      this._fixedResponse.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._jwtValidation.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._targetGroupArn = value.targetGroupArn;
      this._type = value.type;
      this._authenticateCognito.internalValue = value.authenticateCognito;
      this._authenticateOidc.internalValue = value.authenticateOidc;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._forward.internalValue = value.forward;
      this._jwtValidation.internalValue = value.jwtValidation;
      this._redirect.internalValue = value.redirect;
    }
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // target_group_arn - computed: false, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
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

  // authenticate_cognito - computed: false, optional: true, required: false
  private _authenticateCognito = new AuthenticateCognitoPropertyOutputReference(this, "authenticate_cognito");
  public get authenticateCognito() {
    return this._authenticateCognito;
  }
  public putAuthenticateCognito(value: AuthenticateCognitoProperty) {
    this._authenticateCognito.internalValue = value;
  }
  public resetAuthenticateCognito() {
    this._authenticateCognito.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateCognitoInput() {
    return this._authenticateCognito.internalValue;
  }

  // authenticate_oidc - computed: false, optional: true, required: false
  private _authenticateOidc = new AuthenticateOidcPropertyOutputReference(this, "authenticate_oidc");
  public get authenticateOidc() {
    return this._authenticateOidc;
  }
  public putAuthenticateOidc(value: AuthenticateOidcProperty) {
    this._authenticateOidc.internalValue = value;
  }
  public resetAuthenticateOidc() {
    this._authenticateOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateOidcInput() {
    return this._authenticateOidc.internalValue;
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new FixedResponsePropertyOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: FixedResponseProperty) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new ForwardPropertyOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: ForwardProperty) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // jwt_validation - computed: false, optional: true, required: false
  private _jwtValidation = new JwtValidationPropertyOutputReference(this, "jwt_validation");
  public get jwtValidation() {
    return this._jwtValidation;
  }
  public putJwtValidation(value: JwtValidationProperty) {
    this._jwtValidation.internalValue = value;
  }
  public resetJwtValidation() {
    this._jwtValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtValidationInput() {
    return this._jwtValidation.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new RedirectPropertyOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: RedirectProperty) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
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
export interface HostHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#regex_values AwsListenerRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#values AwsListenerRule#values}
  */
  readonly values?: string[];
}
export class HostHeaderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostHeaderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostHeaderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexValues = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexValues = value.regexValues;
      this._values = value.values;
    }
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
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
export interface HttpHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#http_header_name AwsListenerRule#http_header_name}
  */
  readonly httpHeaderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#regex_values AwsListenerRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#values AwsListenerRule#values}
  */
  readonly values?: string[];
}
export class HttpHeaderPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpHeaderProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpHeaderProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpHeaderName = undefined;
      this._regexValues = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpHeaderName = value.httpHeaderName;
      this._regexValues = value.regexValues;
      this._values = value.values;
    }
  }

  // http_header_name - computed: false, optional: false, required: true
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
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
export interface HttpRequestMethodProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#values AwsListenerRule#values}
  */
  readonly values: string[];
}
export class HttpRequestMethodPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpRequestMethodProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpRequestMethodProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface PathPatternProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#regex_values AwsListenerRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#values AwsListenerRule#values}
  */
  readonly values?: string[];
}
export class PathPatternPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PathPatternProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PathPatternProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexValues = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexValues = value.regexValues;
      this._values = value.values;
    }
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
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
export interface QueryStringProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#key AwsListenerRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#value AwsListenerRule#value}
  */
  readonly value: string;
}
export class QueryStringPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QueryStringProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueryStringProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._value = value.value;
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

export class QueryStringPropertyList extends cdktn.ComplexList {
  public internalValue? : QueryStringProperty[] | cdktn.IResolvable

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
  public get(index: number): QueryStringPropertyOutputReference {
    return new QueryStringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceIpProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#ip_address_type AwsListenerRule#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#values AwsListenerRule#values}
  */
  readonly values?: string[];
}
export class SourceIpPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceIpProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceIpProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressType = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressType = value.ipAddressType;
      this._values = value.values;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
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
export interface ConditionProperty {
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#host_header AwsListenerRule#host_header}
  */
  readonly hostHeader?: HostHeaderProperty;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#http_header AwsListenerRule#http_header}
  */
  readonly httpHeader?: HttpHeaderProperty;
  /**
  * http_request_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#http_request_method AwsListenerRule#http_request_method}
  */
  readonly httpRequestMethod?: HttpRequestMethodProperty;
  /**
  * path_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#path_pattern AwsListenerRule#path_pattern}
  */
  readonly pathPattern?: PathPatternProperty;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#query_string AwsListenerRule#query_string}
  */
  readonly queryString?: QueryStringProperty[] | cdktn.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#source_ip AwsListenerRule#source_ip}
  */
  readonly sourceIp?: SourceIpProperty;
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
    if (this._hostHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader?.internalValue;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._httpRequestMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestMethod = this._httpRequestMethod?.internalValue;
    }
    if (this._pathPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader.internalValue = undefined;
      this._httpHeader.internalValue = undefined;
      this._httpRequestMethod.internalValue = undefined;
      this._pathPattern.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader.internalValue = value.hostHeader;
      this._httpHeader.internalValue = value.httpHeader;
      this._httpRequestMethod.internalValue = value.httpRequestMethod;
      this._pathPattern.internalValue = value.pathPattern;
      this._queryString.internalValue = value.queryString;
      this._sourceIp.internalValue = value.sourceIp;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader = new HostHeaderPropertyOutputReference(this, "host_header");
  public get hostHeader() {
    return this._hostHeader;
  }
  public putHostHeader(value: HostHeaderProperty) {
    this._hostHeader.internalValue = value;
  }
  public resetHostHeader() {
    this._hostHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader.internalValue;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new HttpHeaderPropertyOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: HttpHeaderProperty) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // http_request_method - computed: false, optional: true, required: false
  private _httpRequestMethod = new HttpRequestMethodPropertyOutputReference(this, "http_request_method");
  public get httpRequestMethod() {
    return this._httpRequestMethod;
  }
  public putHttpRequestMethod(value: HttpRequestMethodProperty) {
    this._httpRequestMethod.internalValue = value;
  }
  public resetHttpRequestMethod() {
    this._httpRequestMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestMethodInput() {
    return this._httpRequestMethod.internalValue;
  }

  // path_pattern - computed: false, optional: true, required: false
  private _pathPattern = new PathPatternPropertyOutputReference(this, "path_pattern");
  public get pathPattern() {
    return this._pathPattern;
  }
  public putPathPattern(value: PathPatternProperty) {
    this._pathPattern.internalValue = value;
  }
  public resetPathPattern() {
    this._pathPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new QueryStringPropertyList(this, "query_string", true);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: QueryStringProperty[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new SourceIpPropertyOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: SourceIpProperty) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
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
export interface TransformHostHeaderRewriteConfigRewriteProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#regex AwsListenerRule#regex}
  */
  readonly regex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#replace AwsListenerRule#replace}
  */
  readonly replace: string;
}
export class TransformHostHeaderRewriteConfigRewritePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransformHostHeaderRewriteConfigRewriteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformHostHeaderRewriteConfigRewriteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
      this._replace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
      this._replace = value.replace;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}
export interface HostHeaderRewriteConfigProperty {
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#rewrite AwsListenerRule#rewrite}
  */
  readonly rewrite?: TransformHostHeaderRewriteConfigRewriteProperty;
}
export class HostHeaderRewriteConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostHeaderRewriteConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostHeaderRewriteConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rewrite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rewrite.internalValue = value.rewrite;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new TransformHostHeaderRewriteConfigRewritePropertyOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: TransformHostHeaderRewriteConfigRewriteProperty) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }
}
export interface TransformUrlRewriteConfigRewriteProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#regex AwsListenerRule#regex}
  */
  readonly regex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#replace AwsListenerRule#replace}
  */
  readonly replace: string;
}
export class TransformUrlRewriteConfigRewritePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransformUrlRewriteConfigRewriteProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformUrlRewriteConfigRewriteProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
      this._replace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
      this._replace = value.replace;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}
export interface UrlRewriteConfigProperty {
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#rewrite AwsListenerRule#rewrite}
  */
  readonly rewrite?: TransformUrlRewriteConfigRewriteProperty;
}
export class UrlRewriteConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlRewriteConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlRewriteConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rewrite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rewrite.internalValue = value.rewrite;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new TransformUrlRewriteConfigRewritePropertyOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: TransformUrlRewriteConfigRewriteProperty) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }
}
export interface TransformProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#type AwsListenerRule#type}
  */
  readonly type: string;
  /**
  * host_header_rewrite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#host_header_rewrite_config AwsListenerRule#host_header_rewrite_config}
  */
  readonly hostHeaderRewriteConfig?: HostHeaderRewriteConfigProperty;
  /**
  * url_rewrite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lb_listener_rule#url_rewrite_config AwsListenerRule#url_rewrite_config}
  */
  readonly urlRewriteConfig?: UrlRewriteConfigProperty;
}
export class TransformPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransformProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._hostHeaderRewriteConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeaderRewriteConfig = this._hostHeaderRewriteConfig?.internalValue;
    }
    if (this._urlRewriteConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewriteConfig = this._urlRewriteConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._hostHeaderRewriteConfig.internalValue = undefined;
      this._urlRewriteConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._hostHeaderRewriteConfig.internalValue = value.hostHeaderRewriteConfig;
      this._urlRewriteConfig.internalValue = value.urlRewriteConfig;
    }
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

  // host_header_rewrite_config - computed: false, optional: true, required: false
  private _hostHeaderRewriteConfig = new HostHeaderRewriteConfigPropertyOutputReference(this, "host_header_rewrite_config");
  public get hostHeaderRewriteConfig() {
    return this._hostHeaderRewriteConfig;
  }
  public putHostHeaderRewriteConfig(value: HostHeaderRewriteConfigProperty) {
    this._hostHeaderRewriteConfig.internalValue = value;
  }
  public resetHostHeaderRewriteConfig() {
    this._hostHeaderRewriteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderRewriteConfigInput() {
    return this._hostHeaderRewriteConfig.internalValue;
  }

  // url_rewrite_config - computed: false, optional: true, required: false
  private _urlRewriteConfig = new UrlRewriteConfigPropertyOutputReference(this, "url_rewrite_config");
  public get urlRewriteConfig() {
    return this._urlRewriteConfig;
  }
  public putUrlRewriteConfig(value: UrlRewriteConfigProperty) {
    this._urlRewriteConfig.internalValue = value;
  }
  public resetUrlRewriteConfig() {
    this._urlRewriteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteConfigInput() {
    return this._urlRewriteConfig.internalValue;
  }
}

export class TransformPropertyList extends cdktn.ComplexList {
  public internalValue? : TransformProperty[] | cdktn.IResolvable

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
  public get(index: number): TransformPropertyOutputReference {
    return new TransformPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
