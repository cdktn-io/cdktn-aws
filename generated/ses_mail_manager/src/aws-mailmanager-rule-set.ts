// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfRuleSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#name TfRuleSet#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#region TfRuleSet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#tags TfRuleSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#rule TfRuleSet#rule}
  */
  readonly rule?: TfRuleSet.RuleProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set aws_mailmanager_rule_set}
*/
export class TfRuleSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mailmanager_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfRuleSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfRuleSet to import
  * @param importFromId The id of the existing TfRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mailmanager_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set aws_mailmanager_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: TfRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mailmanager_rule_set',
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
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification_date - computed: true, optional: false, required: false
  public get lastModificationDate() {
    return this.getStringAttribute('last_modification_date');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new TfRuleSet.RulePropertyList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: TfRuleSet.RuleProperty[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      rule: cdktn.listMapper(tfRuleSetRulePropertyToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rule: {
        value: cdktn.listMapperHcl(tfRuleSetRulePropertyToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfRuleSet.RulePropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfRuleSetAddHeaderPropertyToTerraform(struct?: TfRuleSet.AddHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
  }
}


export function tfRuleSetAddHeaderPropertyToHclTerraform(struct?: TfRuleSet.AddHeaderProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetArchivePropertyToTerraform(struct?: TfRuleSet.ArchiveProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    target_archive: cdktn.stringToTerraform(struct!.targetArchive),
  }
}


export function tfRuleSetArchivePropertyToHclTerraform(struct?: TfRuleSet.ArchiveProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_archive: {
      value: cdktn.stringToHclTerraform(struct!.targetArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetBouncePropertyToTerraform(struct?: TfRuleSet.BounceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    diagnostic_message: cdktn.stringToTerraform(struct!.diagnosticMessage),
    message: cdktn.stringToTerraform(struct!.message),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    sender: cdktn.stringToTerraform(struct!.sender),
    smtp_reply_code: cdktn.stringToTerraform(struct!.smtpReplyCode),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function tfRuleSetBouncePropertyToHclTerraform(struct?: TfRuleSet.BounceProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diagnostic_message: {
      value: cdktn.stringToHclTerraform(struct!.diagnosticMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender: {
      value: cdktn.stringToHclTerraform(struct!.sender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_reply_code: {
      value: cdktn.stringToHclTerraform(struct!.smtpReplyCode),
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


export function tfRuleSetDeliverToMailboxPropertyToTerraform(struct?: TfRuleSet.DeliverToMailboxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    mailbox_arn: cdktn.stringToTerraform(struct!.mailboxArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function tfRuleSetDeliverToMailboxPropertyToHclTerraform(struct?: TfRuleSet.DeliverToMailboxProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mailbox_arn: {
      value: cdktn.stringToHclTerraform(struct!.mailboxArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetDeliverToQBusinessPropertyToTerraform(struct?: TfRuleSet.DeliverToQBusinessProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    application_id: cdktn.stringToTerraform(struct!.applicationId),
    index_id: cdktn.stringToTerraform(struct!.indexId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function tfRuleSetDeliverToQBusinessPropertyToHclTerraform(struct?: TfRuleSet.DeliverToQBusinessProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_id: {
      value: cdktn.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_id: {
      value: cdktn.stringToHclTerraform(struct!.indexId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetDropPropertyToTerraform(struct?: TfRuleSet.DropProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function tfRuleSetDropPropertyToHclTerraform(struct?: TfRuleSet.DropProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}


export function tfRuleSetInvokeLambdaPropertyToTerraform(struct?: TfRuleSet.InvokeLambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
    invocation_type: cdktn.stringToTerraform(struct!.invocationType),
    retry_time_minutes: cdktn.numberToTerraform(struct!.retryTimeMinutes),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function tfRuleSetInvokeLambdaPropertyToHclTerraform(struct?: TfRuleSet.InvokeLambdaProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invocation_type: {
      value: cdktn.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_time_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryTimeMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetPublishToSnsPropertyToTerraform(struct?: TfRuleSet.PublishToSnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    payload_type: cdktn.stringToTerraform(struct!.payloadType),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function tfRuleSetPublishToSnsPropertyToHclTerraform(struct?: TfRuleSet.PublishToSnsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_type: {
      value: cdktn.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRelayPropertyToTerraform(struct?: TfRuleSet.RelayProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    mail_from: cdktn.stringToTerraform(struct!.mailFrom),
    relay: cdktn.stringToTerraform(struct!.relay),
  }
}


export function tfRuleSetRelayPropertyToHclTerraform(struct?: TfRuleSet.RelayProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_from: {
      value: cdktn.stringToHclTerraform(struct!.mailFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relay: {
      value: cdktn.stringToHclTerraform(struct!.relay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetReplaceRecipientPropertyToTerraform(struct?: TfRuleSet.ReplaceRecipientProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replace_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replaceWith),
  }
}


export function tfRuleSetReplaceRecipientPropertyToHclTerraform(struct?: TfRuleSet.ReplaceRecipientProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replace_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replaceWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetSendPropertyToTerraform(struct?: TfRuleSet.SendProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function tfRuleSetSendPropertyToHclTerraform(struct?: TfRuleSet.SendProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetWriteToS3PropertyToTerraform(struct?: TfRuleSet.WriteToS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
    s3_sse_kms_key_id: cdktn.stringToTerraform(struct!.s3SseKmsKeyId),
  }
}


export function tfRuleSetWriteToS3PropertyToHclTerraform(struct?: TfRuleSet.WriteToS3Property | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_sse_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.s3SseKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetActionPropertyToTerraform(struct?: TfRuleSet.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_header: cdktn.listMapper(tfRuleSetAddHeaderPropertyToTerraform, true)(struct!.addHeader),
    archive: cdktn.listMapper(tfRuleSetArchivePropertyToTerraform, true)(struct!.archive),
    bounce: cdktn.listMapper(tfRuleSetBouncePropertyToTerraform, true)(struct!.bounce),
    deliver_to_mailbox: cdktn.listMapper(tfRuleSetDeliverToMailboxPropertyToTerraform, true)(struct!.deliverToMailbox),
    deliver_to_q_business: cdktn.listMapper(tfRuleSetDeliverToQBusinessPropertyToTerraform, true)(struct!.deliverToQBusiness),
    drop: cdktn.listMapper(tfRuleSetDropPropertyToTerraform, true)(struct!.drop),
    invoke_lambda: cdktn.listMapper(tfRuleSetInvokeLambdaPropertyToTerraform, true)(struct!.invokeLambda),
    publish_to_sns: cdktn.listMapper(tfRuleSetPublishToSnsPropertyToTerraform, true)(struct!.publishToSns),
    relay: cdktn.listMapper(tfRuleSetRelayPropertyToTerraform, true)(struct!.relay),
    replace_recipient: cdktn.listMapper(tfRuleSetReplaceRecipientPropertyToTerraform, true)(struct!.replaceRecipient),
    send: cdktn.listMapper(tfRuleSetSendPropertyToTerraform, true)(struct!.send),
    write_to_s3: cdktn.listMapper(tfRuleSetWriteToS3PropertyToTerraform, true)(struct!.writeToS3),
  }
}


export function tfRuleSetActionPropertyToHclTerraform(struct?: TfRuleSet.ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_header: {
      value: cdktn.listMapperHcl(tfRuleSetAddHeaderPropertyToHclTerraform, true)(struct!.addHeader),
      isBlock: true,
      type: "list",
      storageClassType: "AddHeaderPropertyList",
    },
    archive: {
      value: cdktn.listMapperHcl(tfRuleSetArchivePropertyToHclTerraform, true)(struct!.archive),
      isBlock: true,
      type: "list",
      storageClassType: "ArchivePropertyList",
    },
    bounce: {
      value: cdktn.listMapperHcl(tfRuleSetBouncePropertyToHclTerraform, true)(struct!.bounce),
      isBlock: true,
      type: "list",
      storageClassType: "BouncePropertyList",
    },
    deliver_to_mailbox: {
      value: cdktn.listMapperHcl(tfRuleSetDeliverToMailboxPropertyToHclTerraform, true)(struct!.deliverToMailbox),
      isBlock: true,
      type: "list",
      storageClassType: "DeliverToMailboxPropertyList",
    },
    deliver_to_q_business: {
      value: cdktn.listMapperHcl(tfRuleSetDeliverToQBusinessPropertyToHclTerraform, true)(struct!.deliverToQBusiness),
      isBlock: true,
      type: "list",
      storageClassType: "DeliverToQBusinessPropertyList",
    },
    drop: {
      value: cdktn.listMapperHcl(tfRuleSetDropPropertyToHclTerraform, true)(struct!.drop),
      isBlock: true,
      type: "list",
      storageClassType: "DropPropertyList",
    },
    invoke_lambda: {
      value: cdktn.listMapperHcl(tfRuleSetInvokeLambdaPropertyToHclTerraform, true)(struct!.invokeLambda),
      isBlock: true,
      type: "list",
      storageClassType: "InvokeLambdaPropertyList",
    },
    publish_to_sns: {
      value: cdktn.listMapperHcl(tfRuleSetPublishToSnsPropertyToHclTerraform, true)(struct!.publishToSns),
      isBlock: true,
      type: "list",
      storageClassType: "PublishToSnsPropertyList",
    },
    relay: {
      value: cdktn.listMapperHcl(tfRuleSetRelayPropertyToHclTerraform, true)(struct!.relay),
      isBlock: true,
      type: "list",
      storageClassType: "RelayPropertyList",
    },
    replace_recipient: {
      value: cdktn.listMapperHcl(tfRuleSetReplaceRecipientPropertyToHclTerraform, true)(struct!.replaceRecipient),
      isBlock: true,
      type: "list",
      storageClassType: "ReplaceRecipientPropertyList",
    },
    send: {
      value: cdktn.listMapperHcl(tfRuleSetSendPropertyToHclTerraform, true)(struct!.send),
      isBlock: true,
      type: "list",
      storageClassType: "SendPropertyList",
    },
    write_to_s3: {
      value: cdktn.listMapperHcl(tfRuleSetWriteToS3PropertyToHclTerraform, true)(struct!.writeToS3),
      isBlock: true,
      type: "list",
      storageClassType: "WriteToS3PropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionBooleanExpressionEvaluateAnalysisPropertyToTerraform(struct?: TfRuleSet.RuleConditionBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function tfRuleSetRuleConditionBooleanExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListPropertyToTerraform(struct?: TfRuleSet.RuleConditionBooleanExpressionEvaluateIsInAddressListProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function tfRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionBooleanExpressionEvaluateIsInAddressListProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionBooleanExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleConditionBooleanExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(tfRuleSetRuleConditionBooleanExpressionEvaluateAnalysisPropertyToTerraform, true)(struct!.analysis),
    is_in_address_list: cdktn.listMapper(tfRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListPropertyToTerraform, true)(struct!.isInAddressList),
  }
}


export function tfRuleSetRuleConditionBooleanExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleConditionBooleanExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionBooleanExpressionEvaluateAnalysisPropertyToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionBooleanExpressionEvaluateAnalysisPropertyList",
    },
    is_in_address_list: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListPropertyToHclTerraform, true)(struct!.isInAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionBooleanExpressionEvaluateIsInAddressListPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionBooleanExpressionPropertyToTerraform(struct?: TfRuleSet.RuleConditionBooleanExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    evaluate: cdktn.listMapper(tfRuleSetRuleConditionBooleanExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleConditionBooleanExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionBooleanExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionBooleanExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionBooleanExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionDmarcExpressionPropertyToTerraform(struct?: TfRuleSet.RuleConditionDmarcExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfRuleSetRuleConditionDmarcExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionDmarcExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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


export function tfRuleSetRuleConditionIpExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleConditionIpExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function tfRuleSetRuleConditionIpExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleConditionIpExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionIpExpressionPropertyToTerraform(struct?: TfRuleSet.RuleConditionIpExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(tfRuleSetRuleConditionIpExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleConditionIpExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionIpExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionIpExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionIpExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionNumberExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleConditionNumberExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function tfRuleSetRuleConditionNumberExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleConditionNumberExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionNumberExpressionPropertyToTerraform(struct?: TfRuleSet.RuleConditionNumberExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    evaluate: cdktn.listMapper(tfRuleSetRuleConditionNumberExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleConditionNumberExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionNumberExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionNumberExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionNumberExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionStringExpressionEvaluateAnalysisPropertyToTerraform(struct?: TfRuleSet.RuleConditionStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function tfRuleSetRuleConditionStringExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionStringExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleConditionStringExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    client_certificate_attribute: cdktn.stringToTerraform(struct!.clientCertificateAttribute),
    mime_header_attribute: cdktn.stringToTerraform(struct!.mimeHeaderAttribute),
    analysis: cdktn.listMapper(tfRuleSetRuleConditionStringExpressionEvaluateAnalysisPropertyToTerraform, true)(struct!.analysis),
  }
}


export function tfRuleSetRuleConditionStringExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleConditionStringExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_attribute: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_header_attribute: {
      value: cdktn.stringToHclTerraform(struct!.mimeHeaderAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionStringExpressionEvaluateAnalysisPropertyToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionStringExpressionEvaluateAnalysisPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionStringExpressionPropertyToTerraform(struct?: TfRuleSet.RuleConditionStringExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(tfRuleSetRuleConditionStringExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleConditionStringExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionStringExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionStringExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionStringExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionVerdictExpressionEvaluateAnalysisPropertyToTerraform(struct?: TfRuleSet.RuleConditionVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function tfRuleSetRuleConditionVerdictExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionVerdictExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleConditionVerdictExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(tfRuleSetRuleConditionVerdictExpressionEvaluateAnalysisPropertyToTerraform, true)(struct!.analysis),
  }
}


export function tfRuleSetRuleConditionVerdictExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleConditionVerdictExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionVerdictExpressionEvaluateAnalysisPropertyToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionVerdictExpressionEvaluateAnalysisPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleConditionVerdictExpressionPropertyToTerraform(struct?: TfRuleSet.RuleConditionVerdictExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(tfRuleSetRuleConditionVerdictExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleConditionVerdictExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleConditionVerdictExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionVerdictExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionVerdictExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetConditionPropertyToTerraform(struct?: TfRuleSet.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: cdktn.listMapper(tfRuleSetRuleConditionBooleanExpressionPropertyToTerraform, true)(struct!.booleanExpression),
    dmarc_expression: cdktn.listMapper(tfRuleSetRuleConditionDmarcExpressionPropertyToTerraform, true)(struct!.dmarcExpression),
    ip_expression: cdktn.listMapper(tfRuleSetRuleConditionIpExpressionPropertyToTerraform, true)(struct!.ipExpression),
    number_expression: cdktn.listMapper(tfRuleSetRuleConditionNumberExpressionPropertyToTerraform, true)(struct!.numberExpression),
    string_expression: cdktn.listMapper(tfRuleSetRuleConditionStringExpressionPropertyToTerraform, true)(struct!.stringExpression),
    verdict_expression: cdktn.listMapper(tfRuleSetRuleConditionVerdictExpressionPropertyToTerraform, true)(struct!.verdictExpression),
  }
}


export function tfRuleSetConditionPropertyToHclTerraform(struct?: TfRuleSet.ConditionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionBooleanExpressionPropertyToHclTerraform, true)(struct!.booleanExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionBooleanExpressionPropertyList",
    },
    dmarc_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionDmarcExpressionPropertyToHclTerraform, true)(struct!.dmarcExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionDmarcExpressionPropertyList",
    },
    ip_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionIpExpressionPropertyToHclTerraform, true)(struct!.ipExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionIpExpressionPropertyList",
    },
    number_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionNumberExpressionPropertyToHclTerraform, true)(struct!.numberExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionNumberExpressionPropertyList",
    },
    string_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionStringExpressionPropertyToHclTerraform, true)(struct!.stringExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionStringExpressionPropertyList",
    },
    verdict_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleConditionVerdictExpressionPropertyToHclTerraform, true)(struct!.verdictExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionVerdictExpressionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisPropertyToTerraform(struct?: TfRuleSet.RuleUnlessBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function tfRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyToTerraform(struct?: TfRuleSet.RuleUnlessBooleanExpressionEvaluateIsInAddressListProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function tfRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessBooleanExpressionEvaluateIsInAddressListProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessBooleanExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleUnlessBooleanExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(tfRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisPropertyToTerraform, true)(struct!.analysis),
    is_in_address_list: cdktn.listMapper(tfRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyToTerraform, true)(struct!.isInAddressList),
  }
}


export function tfRuleSetRuleUnlessBooleanExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessBooleanExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisPropertyToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessBooleanExpressionEvaluateAnalysisPropertyList",
    },
    is_in_address_list: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyToHclTerraform, true)(struct!.isInAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessBooleanExpressionPropertyToTerraform(struct?: TfRuleSet.RuleUnlessBooleanExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    evaluate: cdktn.listMapper(tfRuleSetRuleUnlessBooleanExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleUnlessBooleanExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessBooleanExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessBooleanExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessBooleanExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessDmarcExpressionPropertyToTerraform(struct?: TfRuleSet.RuleUnlessDmarcExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function tfRuleSetRuleUnlessDmarcExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessDmarcExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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


export function tfRuleSetRuleUnlessIpExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleUnlessIpExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function tfRuleSetRuleUnlessIpExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessIpExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessIpExpressionPropertyToTerraform(struct?: TfRuleSet.RuleUnlessIpExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(tfRuleSetRuleUnlessIpExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleUnlessIpExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessIpExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessIpExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessIpExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessNumberExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleUnlessNumberExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function tfRuleSetRuleUnlessNumberExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessNumberExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessNumberExpressionPropertyToTerraform(struct?: TfRuleSet.RuleUnlessNumberExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    evaluate: cdktn.listMapper(tfRuleSetRuleUnlessNumberExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleUnlessNumberExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessNumberExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessNumberExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessNumberExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessStringExpressionEvaluateAnalysisPropertyToTerraform(struct?: TfRuleSet.RuleUnlessStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function tfRuleSetRuleUnlessStringExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessStringExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleUnlessStringExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    client_certificate_attribute: cdktn.stringToTerraform(struct!.clientCertificateAttribute),
    mime_header_attribute: cdktn.stringToTerraform(struct!.mimeHeaderAttribute),
    analysis: cdktn.listMapper(tfRuleSetRuleUnlessStringExpressionEvaluateAnalysisPropertyToTerraform, true)(struct!.analysis),
  }
}


export function tfRuleSetRuleUnlessStringExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessStringExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_attribute: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_header_attribute: {
      value: cdktn.stringToHclTerraform(struct!.mimeHeaderAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessStringExpressionEvaluateAnalysisPropertyToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessStringExpressionEvaluateAnalysisPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessStringExpressionPropertyToTerraform(struct?: TfRuleSet.RuleUnlessStringExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(tfRuleSetRuleUnlessStringExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleUnlessStringExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessStringExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessStringExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessStringExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisPropertyToTerraform(struct?: TfRuleSet.RuleUnlessVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function tfRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessVerdictExpressionEvaluatePropertyToTerraform(struct?: TfRuleSet.RuleUnlessVerdictExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(tfRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisPropertyToTerraform, true)(struct!.analysis),
  }
}


export function tfRuleSetRuleUnlessVerdictExpressionEvaluatePropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessVerdictExpressionEvaluateProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisPropertyToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessVerdictExpressionEvaluateAnalysisPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRuleUnlessVerdictExpressionPropertyToTerraform(struct?: TfRuleSet.RuleUnlessVerdictExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(tfRuleSetRuleUnlessVerdictExpressionEvaluatePropertyToTerraform, true)(struct!.evaluate),
  }
}


export function tfRuleSetRuleUnlessVerdictExpressionPropertyToHclTerraform(struct?: TfRuleSet.RuleUnlessVerdictExpressionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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
    evaluate: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessVerdictExpressionEvaluatePropertyToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessVerdictExpressionEvaluatePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetUnlessPropertyToTerraform(struct?: TfRuleSet.UnlessProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: cdktn.listMapper(tfRuleSetRuleUnlessBooleanExpressionPropertyToTerraform, true)(struct!.booleanExpression),
    dmarc_expression: cdktn.listMapper(tfRuleSetRuleUnlessDmarcExpressionPropertyToTerraform, true)(struct!.dmarcExpression),
    ip_expression: cdktn.listMapper(tfRuleSetRuleUnlessIpExpressionPropertyToTerraform, true)(struct!.ipExpression),
    number_expression: cdktn.listMapper(tfRuleSetRuleUnlessNumberExpressionPropertyToTerraform, true)(struct!.numberExpression),
    string_expression: cdktn.listMapper(tfRuleSetRuleUnlessStringExpressionPropertyToTerraform, true)(struct!.stringExpression),
    verdict_expression: cdktn.listMapper(tfRuleSetRuleUnlessVerdictExpressionPropertyToTerraform, true)(struct!.verdictExpression),
  }
}


export function tfRuleSetUnlessPropertyToHclTerraform(struct?: TfRuleSet.UnlessProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessBooleanExpressionPropertyToHclTerraform, true)(struct!.booleanExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessBooleanExpressionPropertyList",
    },
    dmarc_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessDmarcExpressionPropertyToHclTerraform, true)(struct!.dmarcExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessDmarcExpressionPropertyList",
    },
    ip_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessIpExpressionPropertyToHclTerraform, true)(struct!.ipExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessIpExpressionPropertyList",
    },
    number_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessNumberExpressionPropertyToHclTerraform, true)(struct!.numberExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessNumberExpressionPropertyList",
    },
    string_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessStringExpressionPropertyToHclTerraform, true)(struct!.stringExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessStringExpressionPropertyList",
    },
    verdict_expression: {
      value: cdktn.listMapperHcl(tfRuleSetRuleUnlessVerdictExpressionPropertyToHclTerraform, true)(struct!.verdictExpression),
      isBlock: true,
      type: "list",
      storageClassType: "RuleUnlessVerdictExpressionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfRuleSetRulePropertyToTerraform(struct?: TfRuleSet.RuleProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    action: cdktn.listMapper(tfRuleSetActionPropertyToTerraform, true)(struct!.action),
    condition: cdktn.listMapper(tfRuleSetConditionPropertyToTerraform, true)(struct!.condition),
    unless: cdktn.listMapper(tfRuleSetUnlessPropertyToTerraform, true)(struct!.unless),
  }
}


export function tfRuleSetRulePropertyToHclTerraform(struct?: TfRuleSet.RuleProperty | cdktn.IResolvable): any {
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
    action: {
      value: cdktn.listMapperHcl(tfRuleSetActionPropertyToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "ActionPropertyList",
    },
    condition: {
      value: cdktn.listMapperHcl(tfRuleSetConditionPropertyToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ConditionPropertyList",
    },
    unless: {
      value: cdktn.listMapperHcl(tfRuleSetUnlessPropertyToHclTerraform, true)(struct!.unless),
      isBlock: true,
      type: "list",
      storageClassType: "UnlessPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace TfRuleSet {
export interface AddHeaderProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#header_name TfRuleSet#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#header_value TfRuleSet#header_value}
  */
  readonly headerValue: string;
}
export class AddHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AddHeaderProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddHeaderProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class AddHeaderPropertyList extends cdktn.ComplexList {
  public internalValue? : AddHeaderProperty[] | cdktn.IResolvable

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
  public get(index: number): AddHeaderPropertyOutputReference {
    return new AddHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArchiveProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#target_archive TfRuleSet#target_archive}
  */
  readonly targetArchive: string;
}
export class ArchivePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArchiveProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._targetArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArchive = this._targetArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._targetArchive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._targetArchive = value.targetArchive;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // target_archive - computed: false, optional: false, required: true
  private _targetArchive?: string; 
  public get targetArchive() {
    return this.getStringAttribute('target_archive');
  }
  public set targetArchive(value: string) {
    this._targetArchive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArchiveInput() {
    return this._targetArchive;
  }
}

export class ArchivePropertyList extends cdktn.ComplexList {
  public internalValue? : ArchiveProperty[] | cdktn.IResolvable

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
  public get(index: number): ArchivePropertyOutputReference {
    return new ArchivePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BounceProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#diagnostic_message TfRuleSet#diagnostic_message}
  */
  readonly diagnosticMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#message TfRuleSet#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#role_arn TfRuleSet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#sender TfRuleSet#sender}
  */
  readonly sender: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#smtp_reply_code TfRuleSet#smtp_reply_code}
  */
  readonly smtpReplyCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#status_code TfRuleSet#status_code}
  */
  readonly statusCode: string;
}
export class BouncePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BounceProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._diagnosticMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosticMessage = this._diagnosticMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sender !== undefined) {
      hasAnyValues = true;
      internalValueResult.sender = this._sender;
    }
    if (this._smtpReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpReplyCode = this._smtpReplyCode;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BounceProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._diagnosticMessage = undefined;
      this._message = undefined;
      this._roleArn = undefined;
      this._sender = undefined;
      this._smtpReplyCode = undefined;
      this._statusCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._diagnosticMessage = value.diagnosticMessage;
      this._message = value.message;
      this._roleArn = value.roleArn;
      this._sender = value.sender;
      this._smtpReplyCode = value.smtpReplyCode;
      this._statusCode = value.statusCode;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // diagnostic_message - computed: false, optional: false, required: true
  private _diagnosticMessage?: string; 
  public get diagnosticMessage() {
    return this.getStringAttribute('diagnostic_message');
  }
  public set diagnosticMessage(value: string) {
    this._diagnosticMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticMessageInput() {
    return this._diagnosticMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // sender - computed: false, optional: false, required: true
  private _sender?: string; 
  public get sender() {
    return this.getStringAttribute('sender');
  }
  public set sender(value: string) {
    this._sender = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderInput() {
    return this._sender;
  }

  // smtp_reply_code - computed: false, optional: false, required: true
  private _smtpReplyCode?: string; 
  public get smtpReplyCode() {
    return this.getStringAttribute('smtp_reply_code');
  }
  public set smtpReplyCode(value: string) {
    this._smtpReplyCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpReplyCodeInput() {
    return this._smtpReplyCode;
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

export class BouncePropertyList extends cdktn.ComplexList {
  public internalValue? : BounceProperty[] | cdktn.IResolvable

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
  public get(index: number): BouncePropertyOutputReference {
    return new BouncePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliverToMailboxProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#mailbox_arn TfRuleSet#mailbox_arn}
  */
  readonly mailboxArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#role_arn TfRuleSet#role_arn}
  */
  readonly roleArn: string;
}
export class DeliverToMailboxPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DeliverToMailboxProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._mailboxArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailboxArn = this._mailboxArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliverToMailboxProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._mailboxArn = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._mailboxArn = value.mailboxArn;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // mailbox_arn - computed: false, optional: false, required: true
  private _mailboxArn?: string; 
  public get mailboxArn() {
    return this.getStringAttribute('mailbox_arn');
  }
  public set mailboxArn(value: string) {
    this._mailboxArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mailboxArnInput() {
    return this._mailboxArn;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class DeliverToMailboxPropertyList extends cdktn.ComplexList {
  public internalValue? : DeliverToMailboxProperty[] | cdktn.IResolvable

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
  public get(index: number): DeliverToMailboxPropertyOutputReference {
    return new DeliverToMailboxPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeliverToQBusinessProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#application_id TfRuleSet#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#index_id TfRuleSet#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#role_arn TfRuleSet#role_arn}
  */
  readonly roleArn: string;
}
export class DeliverToQBusinessPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DeliverToQBusinessProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._indexId !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexId = this._indexId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeliverToQBusinessProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._applicationId = undefined;
      this._indexId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._applicationId = value.applicationId;
      this._indexId = value.indexId;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class DeliverToQBusinessPropertyList extends cdktn.ComplexList {
  public internalValue? : DeliverToQBusinessProperty[] | cdktn.IResolvable

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
  public get(index: number): DeliverToQBusinessPropertyOutputReference {
    return new DeliverToQBusinessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DropProperty {
}
export class DropPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DropProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DropProperty | cdktn.IResolvable | undefined) {
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
}

export class DropPropertyList extends cdktn.ComplexList {
  public internalValue? : DropProperty[] | cdktn.IResolvable

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
  public get(index: number): DropPropertyOutputReference {
    return new DropPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InvokeLambdaProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#function_arn TfRuleSet#function_arn}
  */
  readonly functionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#invocation_type TfRuleSet#invocation_type}
  */
  readonly invocationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#retry_time_minutes TfRuleSet#retry_time_minutes}
  */
  readonly retryTimeMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#role_arn TfRuleSet#role_arn}
  */
  readonly roleArn: string;
}
export class InvokeLambdaPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): InvokeLambdaProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    if (this._retryTimeMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTimeMinutes = this._retryTimeMinutes;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InvokeLambdaProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._functionArn = undefined;
      this._invocationType = undefined;
      this._retryTimeMinutes = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._functionArn = value.functionArn;
      this._invocationType = value.invocationType;
      this._retryTimeMinutes = value.retryTimeMinutes;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }

  // invocation_type - computed: false, optional: false, required: true
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }

  // retry_time_minutes - computed: false, optional: true, required: false
  private _retryTimeMinutes?: number; 
  public get retryTimeMinutes() {
    return this.getNumberAttribute('retry_time_minutes');
  }
  public set retryTimeMinutes(value: number) {
    this._retryTimeMinutes = value;
  }
  public resetRetryTimeMinutes() {
    this._retryTimeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeMinutesInput() {
    return this._retryTimeMinutes;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class InvokeLambdaPropertyList extends cdktn.ComplexList {
  public internalValue? : InvokeLambdaProperty[] | cdktn.IResolvable

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
  public get(index: number): InvokeLambdaPropertyOutputReference {
    return new InvokeLambdaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PublishToSnsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#encoding TfRuleSet#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#payload_type TfRuleSet#payload_type}
  */
  readonly payloadType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#role_arn TfRuleSet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#topic_arn TfRuleSet#topic_arn}
  */
  readonly topicArn: string;
}
export class PublishToSnsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PublishToSnsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PublishToSnsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._encoding = undefined;
      this._payloadType = undefined;
      this._roleArn = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._encoding = value.encoding;
      this._payloadType = value.payloadType;
      this._roleArn = value.roleArn;
      this._topicArn = value.topicArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // payload_type - computed: false, optional: true, required: false
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  public resetPayloadType() {
    this._payloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class PublishToSnsPropertyList extends cdktn.ComplexList {
  public internalValue? : PublishToSnsProperty[] | cdktn.IResolvable

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
  public get(index: number): PublishToSnsPropertyOutputReference {
    return new PublishToSnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelayProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#mail_from TfRuleSet#mail_from}
  */
  readonly mailFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#relay TfRuleSet#relay}
  */
  readonly relay: string;
}
export class RelayPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RelayProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._mailFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailFrom = this._mailFrom;
    }
    if (this._relay !== undefined) {
      hasAnyValues = true;
      internalValueResult.relay = this._relay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelayProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._mailFrom = undefined;
      this._relay = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._mailFrom = value.mailFrom;
      this._relay = value.relay;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // mail_from - computed: false, optional: true, required: false
  private _mailFrom?: string; 
  public get mailFrom() {
    return this.getStringAttribute('mail_from');
  }
  public set mailFrom(value: string) {
    this._mailFrom = value;
  }
  public resetMailFrom() {
    this._mailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromInput() {
    return this._mailFrom;
  }

  // relay - computed: false, optional: false, required: true
  private _relay?: string; 
  public get relay() {
    return this.getStringAttribute('relay');
  }
  public set relay(value: string) {
    this._relay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay;
  }
}

export class RelayPropertyList extends cdktn.ComplexList {
  public internalValue? : RelayProperty[] | cdktn.IResolvable

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
  public get(index: number): RelayPropertyOutputReference {
    return new RelayPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReplaceRecipientProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#replace_with TfRuleSet#replace_with}
  */
  readonly replaceWith?: string[];
}
export class ReplaceRecipientPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ReplaceRecipientProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceWith = this._replaceWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReplaceRecipientProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replaceWith = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replaceWith = value.replaceWith;
    }
  }

  // replace_with - computed: false, optional: true, required: false
  private _replaceWith?: string[]; 
  public get replaceWith() {
    return this.getListAttribute('replace_with');
  }
  public set replaceWith(value: string[]) {
    this._replaceWith = value;
  }
  public resetReplaceWith() {
    this._replaceWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithInput() {
    return this._replaceWith;
  }
}

export class ReplaceRecipientPropertyList extends cdktn.ComplexList {
  public internalValue? : ReplaceRecipientProperty[] | cdktn.IResolvable

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
  public get(index: number): ReplaceRecipientPropertyOutputReference {
    return new ReplaceRecipientPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SendProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#role_arn TfRuleSet#role_arn}
  */
  readonly roleArn: string;
}
export class SendPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SendProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SendProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class SendPropertyList extends cdktn.ComplexList {
  public internalValue? : SendProperty[] | cdktn.IResolvable

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
  public get(index: number): SendPropertyOutputReference {
    return new SendPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WriteToS3Property {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action_failure_policy TfRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#role_arn TfRuleSet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#s3_bucket TfRuleSet#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#s3_prefix TfRuleSet#s3_prefix}
  */
  readonly s3Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#s3_sse_kms_key_id TfRuleSet#s3_sse_kms_key_id}
  */
  readonly s3SseKmsKeyId?: string;
}
export class WriteToS3PropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WriteToS3Property | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    if (this._s3SseKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SseKmsKeyId = this._s3SseKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WriteToS3Property | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._roleArn = undefined;
      this._s3Bucket = undefined;
      this._s3Prefix = undefined;
      this._s3SseKmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._roleArn = value.roleArn;
      this._s3Bucket = value.s3Bucket;
      this._s3Prefix = value.s3Prefix;
      this._s3SseKmsKeyId = value.s3SseKmsKeyId;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_prefix - computed: false, optional: true, required: false
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }

  // s3_sse_kms_key_id - computed: false, optional: true, required: false
  private _s3SseKmsKeyId?: string; 
  public get s3SseKmsKeyId() {
    return this.getStringAttribute('s3_sse_kms_key_id');
  }
  public set s3SseKmsKeyId(value: string) {
    this._s3SseKmsKeyId = value;
  }
  public resetS3SseKmsKeyId() {
    this._s3SseKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SseKmsKeyIdInput() {
    return this._s3SseKmsKeyId;
  }
}

export class WriteToS3PropertyList extends cdktn.ComplexList {
  public internalValue? : WriteToS3Property[] | cdktn.IResolvable

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
  public get(index: number): WriteToS3PropertyOutputReference {
    return new WriteToS3PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionProperty {
  /**
  * add_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#add_header TfRuleSet#add_header}
  */
  readonly addHeader?: AddHeaderProperty[] | cdktn.IResolvable;
  /**
  * archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#archive TfRuleSet#archive}
  */
  readonly archive?: ArchiveProperty[] | cdktn.IResolvable;
  /**
  * bounce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#bounce TfRuleSet#bounce}
  */
  readonly bounce?: BounceProperty[] | cdktn.IResolvable;
  /**
  * deliver_to_mailbox block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#deliver_to_mailbox TfRuleSet#deliver_to_mailbox}
  */
  readonly deliverToMailbox?: DeliverToMailboxProperty[] | cdktn.IResolvable;
  /**
  * deliver_to_q_business block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#deliver_to_q_business TfRuleSet#deliver_to_q_business}
  */
  readonly deliverToQBusiness?: DeliverToQBusinessProperty[] | cdktn.IResolvable;
  /**
  * drop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#drop TfRuleSet#drop}
  */
  readonly drop?: DropProperty[] | cdktn.IResolvable;
  /**
  * invoke_lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#invoke_lambda TfRuleSet#invoke_lambda}
  */
  readonly invokeLambda?: InvokeLambdaProperty[] | cdktn.IResolvable;
  /**
  * publish_to_sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#publish_to_sns TfRuleSet#publish_to_sns}
  */
  readonly publishToSns?: PublishToSnsProperty[] | cdktn.IResolvable;
  /**
  * relay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#relay TfRuleSet#relay}
  */
  readonly relay?: RelayProperty[] | cdktn.IResolvable;
  /**
  * replace_recipient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#replace_recipient TfRuleSet#replace_recipient}
  */
  readonly replaceRecipient?: ReplaceRecipientProperty[] | cdktn.IResolvable;
  /**
  * send block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#send TfRuleSet#send}
  */
  readonly send?: SendProperty[] | cdktn.IResolvable;
  /**
  * write_to_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#write_to_s3 TfRuleSet#write_to_s3}
  */
  readonly writeToS3?: WriteToS3Property[] | cdktn.IResolvable;
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
    if (this._addHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader?.internalValue;
    }
    if (this._archive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive?.internalValue;
    }
    if (this._bounce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounce = this._bounce?.internalValue;
    }
    if (this._deliverToMailbox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliverToMailbox = this._deliverToMailbox?.internalValue;
    }
    if (this._deliverToQBusiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliverToQBusiness = this._deliverToQBusiness?.internalValue;
    }
    if (this._drop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop?.internalValue;
    }
    if (this._invokeLambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeLambda = this._invokeLambda?.internalValue;
    }
    if (this._publishToSns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishToSns = this._publishToSns?.internalValue;
    }
    if (this._relay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relay = this._relay?.internalValue;
    }
    if (this._replaceRecipient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceRecipient = this._replaceRecipient?.internalValue;
    }
    if (this._send?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send?.internalValue;
    }
    if (this._writeToS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeToS3 = this._writeToS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHeader.internalValue = undefined;
      this._archive.internalValue = undefined;
      this._bounce.internalValue = undefined;
      this._deliverToMailbox.internalValue = undefined;
      this._deliverToQBusiness.internalValue = undefined;
      this._drop.internalValue = undefined;
      this._invokeLambda.internalValue = undefined;
      this._publishToSns.internalValue = undefined;
      this._relay.internalValue = undefined;
      this._replaceRecipient.internalValue = undefined;
      this._send.internalValue = undefined;
      this._writeToS3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHeader.internalValue = value.addHeader;
      this._archive.internalValue = value.archive;
      this._bounce.internalValue = value.bounce;
      this._deliverToMailbox.internalValue = value.deliverToMailbox;
      this._deliverToQBusiness.internalValue = value.deliverToQBusiness;
      this._drop.internalValue = value.drop;
      this._invokeLambda.internalValue = value.invokeLambda;
      this._publishToSns.internalValue = value.publishToSns;
      this._relay.internalValue = value.relay;
      this._replaceRecipient.internalValue = value.replaceRecipient;
      this._send.internalValue = value.send;
      this._writeToS3.internalValue = value.writeToS3;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader = new AddHeaderPropertyList(this, "add_header", false);
  public get addHeader() {
    return this._addHeader;
  }
  public putAddHeader(value: AddHeaderProperty[] | cdktn.IResolvable) {
    this._addHeader.internalValue = value;
  }
  public resetAddHeader() {
    this._addHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader.internalValue;
  }

  // archive - computed: false, optional: true, required: false
  private _archive = new ArchivePropertyList(this, "archive", false);
  public get archive() {
    return this._archive;
  }
  public putArchive(value: ArchiveProperty[] | cdktn.IResolvable) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // bounce - computed: false, optional: true, required: false
  private _bounce = new BouncePropertyList(this, "bounce", false);
  public get bounce() {
    return this._bounce;
  }
  public putBounce(value: BounceProperty[] | cdktn.IResolvable) {
    this._bounce.internalValue = value;
  }
  public resetBounce() {
    this._bounce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceInput() {
    return this._bounce.internalValue;
  }

  // deliver_to_mailbox - computed: false, optional: true, required: false
  private _deliverToMailbox = new DeliverToMailboxPropertyList(this, "deliver_to_mailbox", false);
  public get deliverToMailbox() {
    return this._deliverToMailbox;
  }
  public putDeliverToMailbox(value: DeliverToMailboxProperty[] | cdktn.IResolvable) {
    this._deliverToMailbox.internalValue = value;
  }
  public resetDeliverToMailbox() {
    this._deliverToMailbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverToMailboxInput() {
    return this._deliverToMailbox.internalValue;
  }

  // deliver_to_q_business - computed: false, optional: true, required: false
  private _deliverToQBusiness = new DeliverToQBusinessPropertyList(this, "deliver_to_q_business", false);
  public get deliverToQBusiness() {
    return this._deliverToQBusiness;
  }
  public putDeliverToQBusiness(value: DeliverToQBusinessProperty[] | cdktn.IResolvable) {
    this._deliverToQBusiness.internalValue = value;
  }
  public resetDeliverToQBusiness() {
    this._deliverToQBusiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverToQBusinessInput() {
    return this._deliverToQBusiness.internalValue;
  }

  // drop - computed: false, optional: true, required: false
  private _drop = new DropPropertyList(this, "drop", false);
  public get drop() {
    return this._drop;
  }
  public putDrop(value: DropProperty[] | cdktn.IResolvable) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // invoke_lambda - computed: false, optional: true, required: false
  private _invokeLambda = new InvokeLambdaPropertyList(this, "invoke_lambda", false);
  public get invokeLambda() {
    return this._invokeLambda;
  }
  public putInvokeLambda(value: InvokeLambdaProperty[] | cdktn.IResolvable) {
    this._invokeLambda.internalValue = value;
  }
  public resetInvokeLambda() {
    this._invokeLambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeLambdaInput() {
    return this._invokeLambda.internalValue;
  }

  // publish_to_sns - computed: false, optional: true, required: false
  private _publishToSns = new PublishToSnsPropertyList(this, "publish_to_sns", false);
  public get publishToSns() {
    return this._publishToSns;
  }
  public putPublishToSns(value: PublishToSnsProperty[] | cdktn.IResolvable) {
    this._publishToSns.internalValue = value;
  }
  public resetPublishToSns() {
    this._publishToSns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishToSnsInput() {
    return this._publishToSns.internalValue;
  }

  // relay - computed: false, optional: true, required: false
  private _relay = new RelayPropertyList(this, "relay", false);
  public get relay() {
    return this._relay;
  }
  public putRelay(value: RelayProperty[] | cdktn.IResolvable) {
    this._relay.internalValue = value;
  }
  public resetRelay() {
    this._relay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay.internalValue;
  }

  // replace_recipient - computed: false, optional: true, required: false
  private _replaceRecipient = new ReplaceRecipientPropertyList(this, "replace_recipient", false);
  public get replaceRecipient() {
    return this._replaceRecipient;
  }
  public putReplaceRecipient(value: ReplaceRecipientProperty[] | cdktn.IResolvable) {
    this._replaceRecipient.internalValue = value;
  }
  public resetReplaceRecipient() {
    this._replaceRecipient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceRecipientInput() {
    return this._replaceRecipient.internalValue;
  }

  // send - computed: false, optional: true, required: false
  private _send = new SendPropertyList(this, "send", false);
  public get send() {
    return this._send;
  }
  public putSend(value: SendProperty[] | cdktn.IResolvable) {
    this._send.internalValue = value;
  }
  public resetSend() {
    this._send.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send.internalValue;
  }

  // write_to_s3 - computed: false, optional: true, required: false
  private _writeToS3 = new WriteToS3PropertyList(this, "write_to_s3", false);
  public get writeToS3() {
    return this._writeToS3;
  }
  public putWriteToS3(value: WriteToS3Property[] | cdktn.IResolvable) {
    this._writeToS3.internalValue = value;
  }
  public resetWriteToS3() {
    this._writeToS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeToS3Input() {
    return this._writeToS3.internalValue;
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
export interface RuleConditionBooleanExpressionEvaluateAnalysisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analyzer TfRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#result_field TfRuleSet#result_field}
  */
  readonly resultField: string;
}
export class RuleConditionBooleanExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class RuleConditionBooleanExpressionEvaluateAnalysisPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionBooleanExpressionEvaluateAnalysisPropertyOutputReference {
    return new RuleConditionBooleanExpressionEvaluateAnalysisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionBooleanExpressionEvaluateIsInAddressListProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#address_lists TfRuleSet#address_lists}
  */
  readonly addressLists: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute: string;
}
export class RuleConditionBooleanExpressionEvaluateIsInAddressListPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionBooleanExpressionEvaluateIsInAddressListProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionBooleanExpressionEvaluateIsInAddressListProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._attribute = value.attribute;
    }
  }

  // address_lists - computed: false, optional: false, required: true
  private _addressLists?: string[]; 
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class RuleConditionBooleanExpressionEvaluateIsInAddressListPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionBooleanExpressionEvaluateIsInAddressListProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionBooleanExpressionEvaluateIsInAddressListPropertyOutputReference {
    return new RuleConditionBooleanExpressionEvaluateIsInAddressListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionBooleanExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analysis TfRuleSet#analysis}
  */
  readonly analysis?: RuleConditionBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable;
  /**
  * is_in_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#is_in_address_list TfRuleSet#is_in_address_list}
  */
  readonly isInAddressList?: RuleConditionBooleanExpressionEvaluateIsInAddressListProperty[] | cdktn.IResolvable;
}
export class RuleConditionBooleanExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionBooleanExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._isInAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionBooleanExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
      this._isInAddressList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new RuleConditionBooleanExpressionEvaluateAnalysisPropertyList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: RuleConditionBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // is_in_address_list - computed: false, optional: true, required: false
  private _isInAddressList = new RuleConditionBooleanExpressionEvaluateIsInAddressListPropertyList(this, "is_in_address_list", false);
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: RuleConditionBooleanExpressionEvaluateIsInAddressListProperty[] | cdktn.IResolvable) {
    this._isInAddressList.internalValue = value;
  }
  public resetIsInAddressList() {
    this._isInAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInAddressListInput() {
    return this._isInAddressList.internalValue;
  }
}

export class RuleConditionBooleanExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionBooleanExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionBooleanExpressionEvaluatePropertyOutputReference {
    return new RuleConditionBooleanExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionBooleanExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleConditionBooleanExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleConditionBooleanExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionBooleanExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionBooleanExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleConditionBooleanExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleConditionBooleanExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleConditionBooleanExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionBooleanExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionBooleanExpressionPropertyOutputReference {
    return new RuleConditionBooleanExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionDmarcExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#values TfRuleSet#values}
  */
  readonly values: string[];
}
export class RuleConditionDmarcExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionDmarcExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionDmarcExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class RuleConditionDmarcExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionDmarcExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionDmarcExpressionPropertyOutputReference {
    return new RuleConditionDmarcExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionIpExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute: string;
}
export class RuleConditionIpExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionIpExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionIpExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class RuleConditionIpExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionIpExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionIpExpressionEvaluatePropertyOutputReference {
    return new RuleConditionIpExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionIpExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#values TfRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleConditionIpExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleConditionIpExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionIpExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionIpExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleConditionIpExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleConditionIpExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleConditionIpExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionIpExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionIpExpressionPropertyOutputReference {
    return new RuleConditionIpExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionNumberExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute: string;
}
export class RuleConditionNumberExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionNumberExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionNumberExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class RuleConditionNumberExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionNumberExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionNumberExpressionEvaluatePropertyOutputReference {
    return new RuleConditionNumberExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionNumberExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#value TfRuleSet#value}
  */
  readonly value: number;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleConditionNumberExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleConditionNumberExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionNumberExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionNumberExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleConditionNumberExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleConditionNumberExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleConditionNumberExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionNumberExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionNumberExpressionPropertyOutputReference {
    return new RuleConditionNumberExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionStringExpressionEvaluateAnalysisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analyzer TfRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#result_field TfRuleSet#result_field}
  */
  readonly resultField: string;
}
export class RuleConditionStringExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class RuleConditionStringExpressionEvaluateAnalysisPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionStringExpressionEvaluateAnalysisPropertyOutputReference {
    return new RuleConditionStringExpressionEvaluateAnalysisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionStringExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#client_certificate_attribute TfRuleSet#client_certificate_attribute}
  */
  readonly clientCertificateAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#mime_header_attribute TfRuleSet#mime_header_attribute}
  */
  readonly mimeHeaderAttribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analysis TfRuleSet#analysis}
  */
  readonly analysis?: RuleConditionStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable;
}
export class RuleConditionStringExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionStringExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._clientCertificateAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateAttribute = this._clientCertificateAttribute;
    }
    if (this._mimeHeaderAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeHeaderAttribute = this._mimeHeaderAttribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionStringExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._clientCertificateAttribute = undefined;
      this._mimeHeaderAttribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._clientCertificateAttribute = value.clientCertificateAttribute;
      this._mimeHeaderAttribute = value.mimeHeaderAttribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // client_certificate_attribute - computed: false, optional: true, required: false
  private _clientCertificateAttribute?: string; 
  public get clientCertificateAttribute() {
    return this.getStringAttribute('client_certificate_attribute');
  }
  public set clientCertificateAttribute(value: string) {
    this._clientCertificateAttribute = value;
  }
  public resetClientCertificateAttribute() {
    this._clientCertificateAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateAttributeInput() {
    return this._clientCertificateAttribute;
  }

  // mime_header_attribute - computed: false, optional: true, required: false
  private _mimeHeaderAttribute?: string; 
  public get mimeHeaderAttribute() {
    return this.getStringAttribute('mime_header_attribute');
  }
  public set mimeHeaderAttribute(value: string) {
    this._mimeHeaderAttribute = value;
  }
  public resetMimeHeaderAttribute() {
    this._mimeHeaderAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeHeaderAttributeInput() {
    return this._mimeHeaderAttribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new RuleConditionStringExpressionEvaluateAnalysisPropertyList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: RuleConditionStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class RuleConditionStringExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionStringExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionStringExpressionEvaluatePropertyOutputReference {
    return new RuleConditionStringExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionStringExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#values TfRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleConditionStringExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleConditionStringExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionStringExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionStringExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleConditionStringExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleConditionStringExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleConditionStringExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionStringExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionStringExpressionPropertyOutputReference {
    return new RuleConditionStringExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionVerdictExpressionEvaluateAnalysisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analyzer TfRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#result_field TfRuleSet#result_field}
  */
  readonly resultField: string;
}
export class RuleConditionVerdictExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class RuleConditionVerdictExpressionEvaluateAnalysisPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionVerdictExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionVerdictExpressionEvaluateAnalysisPropertyOutputReference {
    return new RuleConditionVerdictExpressionEvaluateAnalysisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionVerdictExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analysis TfRuleSet#analysis}
  */
  readonly analysis?: RuleConditionVerdictExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable;
}
export class RuleConditionVerdictExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionVerdictExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionVerdictExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new RuleConditionVerdictExpressionEvaluateAnalysisPropertyList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: RuleConditionVerdictExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class RuleConditionVerdictExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionVerdictExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionVerdictExpressionEvaluatePropertyOutputReference {
    return new RuleConditionVerdictExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionVerdictExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#values TfRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleConditionVerdictExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleConditionVerdictExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleConditionVerdictExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionVerdictExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleConditionVerdictExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleConditionVerdictExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleConditionVerdictExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleConditionVerdictExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleConditionVerdictExpressionPropertyOutputReference {
    return new RuleConditionVerdictExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConditionProperty {
  /**
  * boolean_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#boolean_expression TfRuleSet#boolean_expression}
  */
  readonly booleanExpression?: RuleConditionBooleanExpressionProperty[] | cdktn.IResolvable;
  /**
  * dmarc_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#dmarc_expression TfRuleSet#dmarc_expression}
  */
  readonly dmarcExpression?: RuleConditionDmarcExpressionProperty[] | cdktn.IResolvable;
  /**
  * ip_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#ip_expression TfRuleSet#ip_expression}
  */
  readonly ipExpression?: RuleConditionIpExpressionProperty[] | cdktn.IResolvable;
  /**
  * number_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#number_expression TfRuleSet#number_expression}
  */
  readonly numberExpression?: RuleConditionNumberExpressionProperty[] | cdktn.IResolvable;
  /**
  * string_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#string_expression TfRuleSet#string_expression}
  */
  readonly stringExpression?: RuleConditionStringExpressionProperty[] | cdktn.IResolvable;
  /**
  * verdict_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#verdict_expression TfRuleSet#verdict_expression}
  */
  readonly verdictExpression?: RuleConditionVerdictExpressionProperty[] | cdktn.IResolvable;
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
    if (this._booleanExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
    }
    if (this._dmarcExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmarcExpression = this._dmarcExpression?.internalValue;
    }
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._numberExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberExpression = this._numberExpression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._verdictExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verdictExpression = this._verdictExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._dmarcExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._numberExpression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._verdictExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._dmarcExpression.internalValue = value.dmarcExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._numberExpression.internalValue = value.numberExpression;
      this._stringExpression.internalValue = value.stringExpression;
      this._verdictExpression.internalValue = value.verdictExpression;
    }
  }

  // boolean_expression - computed: false, optional: true, required: false
  private _booleanExpression = new RuleConditionBooleanExpressionPropertyList(this, "boolean_expression", false);
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: RuleConditionBooleanExpressionProperty[] | cdktn.IResolvable) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // dmarc_expression - computed: false, optional: true, required: false
  private _dmarcExpression = new RuleConditionDmarcExpressionPropertyList(this, "dmarc_expression", false);
  public get dmarcExpression() {
    return this._dmarcExpression;
  }
  public putDmarcExpression(value: RuleConditionDmarcExpressionProperty[] | cdktn.IResolvable) {
    this._dmarcExpression.internalValue = value;
  }
  public resetDmarcExpression() {
    this._dmarcExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmarcExpressionInput() {
    return this._dmarcExpression.internalValue;
  }

  // ip_expression - computed: false, optional: true, required: false
  private _ipExpression = new RuleConditionIpExpressionPropertyList(this, "ip_expression", false);
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: RuleConditionIpExpressionProperty[] | cdktn.IResolvable) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // number_expression - computed: false, optional: true, required: false
  private _numberExpression = new RuleConditionNumberExpressionPropertyList(this, "number_expression", false);
  public get numberExpression() {
    return this._numberExpression;
  }
  public putNumberExpression(value: RuleConditionNumberExpressionProperty[] | cdktn.IResolvable) {
    this._numberExpression.internalValue = value;
  }
  public resetNumberExpression() {
    this._numberExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberExpressionInput() {
    return this._numberExpression.internalValue;
  }

  // string_expression - computed: false, optional: true, required: false
  private _stringExpression = new RuleConditionStringExpressionPropertyList(this, "string_expression", false);
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: RuleConditionStringExpressionProperty[] | cdktn.IResolvable) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // verdict_expression - computed: false, optional: true, required: false
  private _verdictExpression = new RuleConditionVerdictExpressionPropertyList(this, "verdict_expression", false);
  public get verdictExpression() {
    return this._verdictExpression;
  }
  public putVerdictExpression(value: RuleConditionVerdictExpressionProperty[] | cdktn.IResolvable) {
    this._verdictExpression.internalValue = value;
  }
  public resetVerdictExpression() {
    this._verdictExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verdictExpressionInput() {
    return this._verdictExpression.internalValue;
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
export interface RuleUnlessBooleanExpressionEvaluateAnalysisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analyzer TfRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#result_field TfRuleSet#result_field}
  */
  readonly resultField: string;
}
export class RuleUnlessBooleanExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessBooleanExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class RuleUnlessBooleanExpressionEvaluateAnalysisPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessBooleanExpressionEvaluateAnalysisPropertyOutputReference {
    return new RuleUnlessBooleanExpressionEvaluateAnalysisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessBooleanExpressionEvaluateIsInAddressListProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#address_lists TfRuleSet#address_lists}
  */
  readonly addressLists: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute: string;
}
export class RuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessBooleanExpressionEvaluateIsInAddressListProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessBooleanExpressionEvaluateIsInAddressListProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._attribute = value.attribute;
    }
  }

  // address_lists - computed: false, optional: false, required: true
  private _addressLists?: string[]; 
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class RuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessBooleanExpressionEvaluateIsInAddressListProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyOutputReference {
    return new RuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessBooleanExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analysis TfRuleSet#analysis}
  */
  readonly analysis?: RuleUnlessBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable;
  /**
  * is_in_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#is_in_address_list TfRuleSet#is_in_address_list}
  */
  readonly isInAddressList?: RuleUnlessBooleanExpressionEvaluateIsInAddressListProperty[] | cdktn.IResolvable;
}
export class RuleUnlessBooleanExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessBooleanExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._isInAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessBooleanExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
      this._isInAddressList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new RuleUnlessBooleanExpressionEvaluateAnalysisPropertyList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: RuleUnlessBooleanExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // is_in_address_list - computed: false, optional: true, required: false
  private _isInAddressList = new RuleUnlessBooleanExpressionEvaluateIsInAddressListPropertyList(this, "is_in_address_list", false);
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: RuleUnlessBooleanExpressionEvaluateIsInAddressListProperty[] | cdktn.IResolvable) {
    this._isInAddressList.internalValue = value;
  }
  public resetIsInAddressList() {
    this._isInAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInAddressListInput() {
    return this._isInAddressList.internalValue;
  }
}

export class RuleUnlessBooleanExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessBooleanExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessBooleanExpressionEvaluatePropertyOutputReference {
    return new RuleUnlessBooleanExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessBooleanExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleUnlessBooleanExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleUnlessBooleanExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessBooleanExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessBooleanExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleUnlessBooleanExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleUnlessBooleanExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleUnlessBooleanExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessBooleanExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessBooleanExpressionPropertyOutputReference {
    return new RuleUnlessBooleanExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessDmarcExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#values TfRuleSet#values}
  */
  readonly values: string[];
}
export class RuleUnlessDmarcExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessDmarcExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessDmarcExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class RuleUnlessDmarcExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessDmarcExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessDmarcExpressionPropertyOutputReference {
    return new RuleUnlessDmarcExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessIpExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute: string;
}
export class RuleUnlessIpExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessIpExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessIpExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class RuleUnlessIpExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessIpExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessIpExpressionEvaluatePropertyOutputReference {
    return new RuleUnlessIpExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessIpExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#values TfRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleUnlessIpExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleUnlessIpExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessIpExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessIpExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleUnlessIpExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleUnlessIpExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleUnlessIpExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessIpExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessIpExpressionPropertyOutputReference {
    return new RuleUnlessIpExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessNumberExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute: string;
}
export class RuleUnlessNumberExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessNumberExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessNumberExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class RuleUnlessNumberExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessNumberExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessNumberExpressionEvaluatePropertyOutputReference {
    return new RuleUnlessNumberExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessNumberExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#value TfRuleSet#value}
  */
  readonly value: number;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleUnlessNumberExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleUnlessNumberExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessNumberExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessNumberExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleUnlessNumberExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleUnlessNumberExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleUnlessNumberExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessNumberExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessNumberExpressionPropertyOutputReference {
    return new RuleUnlessNumberExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessStringExpressionEvaluateAnalysisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analyzer TfRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#result_field TfRuleSet#result_field}
  */
  readonly resultField: string;
}
export class RuleUnlessStringExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessStringExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class RuleUnlessStringExpressionEvaluateAnalysisPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessStringExpressionEvaluateAnalysisPropertyOutputReference {
    return new RuleUnlessStringExpressionEvaluateAnalysisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessStringExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#client_certificate_attribute TfRuleSet#client_certificate_attribute}
  */
  readonly clientCertificateAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#mime_header_attribute TfRuleSet#mime_header_attribute}
  */
  readonly mimeHeaderAttribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analysis TfRuleSet#analysis}
  */
  readonly analysis?: RuleUnlessStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable;
}
export class RuleUnlessStringExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessStringExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._clientCertificateAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateAttribute = this._clientCertificateAttribute;
    }
    if (this._mimeHeaderAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeHeaderAttribute = this._mimeHeaderAttribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessStringExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._clientCertificateAttribute = undefined;
      this._mimeHeaderAttribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._clientCertificateAttribute = value.clientCertificateAttribute;
      this._mimeHeaderAttribute = value.mimeHeaderAttribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // client_certificate_attribute - computed: false, optional: true, required: false
  private _clientCertificateAttribute?: string; 
  public get clientCertificateAttribute() {
    return this.getStringAttribute('client_certificate_attribute');
  }
  public set clientCertificateAttribute(value: string) {
    this._clientCertificateAttribute = value;
  }
  public resetClientCertificateAttribute() {
    this._clientCertificateAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateAttributeInput() {
    return this._clientCertificateAttribute;
  }

  // mime_header_attribute - computed: false, optional: true, required: false
  private _mimeHeaderAttribute?: string; 
  public get mimeHeaderAttribute() {
    return this.getStringAttribute('mime_header_attribute');
  }
  public set mimeHeaderAttribute(value: string) {
    this._mimeHeaderAttribute = value;
  }
  public resetMimeHeaderAttribute() {
    this._mimeHeaderAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeHeaderAttributeInput() {
    return this._mimeHeaderAttribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new RuleUnlessStringExpressionEvaluateAnalysisPropertyList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: RuleUnlessStringExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class RuleUnlessStringExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessStringExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessStringExpressionEvaluatePropertyOutputReference {
    return new RuleUnlessStringExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessStringExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#values TfRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleUnlessStringExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleUnlessStringExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessStringExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessStringExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleUnlessStringExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleUnlessStringExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleUnlessStringExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessStringExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessStringExpressionPropertyOutputReference {
    return new RuleUnlessStringExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessVerdictExpressionEvaluateAnalysisProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analyzer TfRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#result_field TfRuleSet#result_field}
  */
  readonly resultField: string;
}
export class RuleUnlessVerdictExpressionEvaluateAnalysisPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessVerdictExpressionEvaluateAnalysisProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class RuleUnlessVerdictExpressionEvaluateAnalysisPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessVerdictExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessVerdictExpressionEvaluateAnalysisPropertyOutputReference {
    return new RuleUnlessVerdictExpressionEvaluateAnalysisPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessVerdictExpressionEvaluateProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#attribute TfRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#analysis TfRuleSet#analysis}
  */
  readonly analysis?: RuleUnlessVerdictExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable;
}
export class RuleUnlessVerdictExpressionEvaluatePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessVerdictExpressionEvaluateProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessVerdictExpressionEvaluateProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new RuleUnlessVerdictExpressionEvaluateAnalysisPropertyList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: RuleUnlessVerdictExpressionEvaluateAnalysisProperty[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class RuleUnlessVerdictExpressionEvaluatePropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessVerdictExpressionEvaluateProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessVerdictExpressionEvaluatePropertyOutputReference {
    return new RuleUnlessVerdictExpressionEvaluatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleUnlessVerdictExpressionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#operator TfRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#values TfRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#evaluate TfRuleSet#evaluate}
  */
  readonly evaluate?: RuleUnlessVerdictExpressionEvaluateProperty[] | cdktn.IResolvable;
}
export class RuleUnlessVerdictExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RuleUnlessVerdictExpressionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleUnlessVerdictExpressionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new RuleUnlessVerdictExpressionEvaluatePropertyList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: RuleUnlessVerdictExpressionEvaluateProperty[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class RuleUnlessVerdictExpressionPropertyList extends cdktn.ComplexList {
  public internalValue? : RuleUnlessVerdictExpressionProperty[] | cdktn.IResolvable

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
  public get(index: number): RuleUnlessVerdictExpressionPropertyOutputReference {
    return new RuleUnlessVerdictExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnlessProperty {
  /**
  * boolean_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#boolean_expression TfRuleSet#boolean_expression}
  */
  readonly booleanExpression?: RuleUnlessBooleanExpressionProperty[] | cdktn.IResolvable;
  /**
  * dmarc_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#dmarc_expression TfRuleSet#dmarc_expression}
  */
  readonly dmarcExpression?: RuleUnlessDmarcExpressionProperty[] | cdktn.IResolvable;
  /**
  * ip_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#ip_expression TfRuleSet#ip_expression}
  */
  readonly ipExpression?: RuleUnlessIpExpressionProperty[] | cdktn.IResolvable;
  /**
  * number_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#number_expression TfRuleSet#number_expression}
  */
  readonly numberExpression?: RuleUnlessNumberExpressionProperty[] | cdktn.IResolvable;
  /**
  * string_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#string_expression TfRuleSet#string_expression}
  */
  readonly stringExpression?: RuleUnlessStringExpressionProperty[] | cdktn.IResolvable;
  /**
  * verdict_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#verdict_expression TfRuleSet#verdict_expression}
  */
  readonly verdictExpression?: RuleUnlessVerdictExpressionProperty[] | cdktn.IResolvable;
}
export class UnlessPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): UnlessProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
    }
    if (this._dmarcExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmarcExpression = this._dmarcExpression?.internalValue;
    }
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._numberExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberExpression = this._numberExpression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._verdictExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verdictExpression = this._verdictExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnlessProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._dmarcExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._numberExpression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._verdictExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._dmarcExpression.internalValue = value.dmarcExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._numberExpression.internalValue = value.numberExpression;
      this._stringExpression.internalValue = value.stringExpression;
      this._verdictExpression.internalValue = value.verdictExpression;
    }
  }

  // boolean_expression - computed: false, optional: true, required: false
  private _booleanExpression = new RuleUnlessBooleanExpressionPropertyList(this, "boolean_expression", false);
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: RuleUnlessBooleanExpressionProperty[] | cdktn.IResolvable) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // dmarc_expression - computed: false, optional: true, required: false
  private _dmarcExpression = new RuleUnlessDmarcExpressionPropertyList(this, "dmarc_expression", false);
  public get dmarcExpression() {
    return this._dmarcExpression;
  }
  public putDmarcExpression(value: RuleUnlessDmarcExpressionProperty[] | cdktn.IResolvable) {
    this._dmarcExpression.internalValue = value;
  }
  public resetDmarcExpression() {
    this._dmarcExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmarcExpressionInput() {
    return this._dmarcExpression.internalValue;
  }

  // ip_expression - computed: false, optional: true, required: false
  private _ipExpression = new RuleUnlessIpExpressionPropertyList(this, "ip_expression", false);
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: RuleUnlessIpExpressionProperty[] | cdktn.IResolvable) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // number_expression - computed: false, optional: true, required: false
  private _numberExpression = new RuleUnlessNumberExpressionPropertyList(this, "number_expression", false);
  public get numberExpression() {
    return this._numberExpression;
  }
  public putNumberExpression(value: RuleUnlessNumberExpressionProperty[] | cdktn.IResolvable) {
    this._numberExpression.internalValue = value;
  }
  public resetNumberExpression() {
    this._numberExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberExpressionInput() {
    return this._numberExpression.internalValue;
  }

  // string_expression - computed: false, optional: true, required: false
  private _stringExpression = new RuleUnlessStringExpressionPropertyList(this, "string_expression", false);
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: RuleUnlessStringExpressionProperty[] | cdktn.IResolvable) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // verdict_expression - computed: false, optional: true, required: false
  private _verdictExpression = new RuleUnlessVerdictExpressionPropertyList(this, "verdict_expression", false);
  public get verdictExpression() {
    return this._verdictExpression;
  }
  public putVerdictExpression(value: RuleUnlessVerdictExpressionProperty[] | cdktn.IResolvable) {
    this._verdictExpression.internalValue = value;
  }
  public resetVerdictExpression() {
    this._verdictExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verdictExpressionInput() {
    return this._verdictExpression.internalValue;
  }
}

export class UnlessPropertyList extends cdktn.ComplexList {
  public internalValue? : UnlessProperty[] | cdktn.IResolvable

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
  public get(index: number): UnlessPropertyOutputReference {
    return new UnlessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#name TfRuleSet#name}
  */
  readonly name?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#action TfRuleSet#action}
  */
  readonly action?: ActionProperty[] | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#condition TfRuleSet#condition}
  */
  readonly condition?: ConditionProperty[] | cdktn.IResolvable;
  /**
  * unless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_rule_set#unless TfRuleSet#unless}
  */
  readonly unless?: UnlessProperty[] | cdktn.IResolvable;
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._unless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unless = this._unless?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._condition.internalValue = undefined;
      this._unless.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._condition.internalValue = value.condition;
      this._unless.internalValue = value.unless;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // action - computed: false, optional: true, required: false
  private _action = new ActionPropertyList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: ActionProperty[] | cdktn.IResolvable) {
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
  private _condition = new ConditionPropertyList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ConditionProperty[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // unless - computed: false, optional: true, required: false
  private _unless = new UnlessPropertyList(this, "unless", false);
  public get unless() {
    return this._unless;
  }
  public putUnless(value: UnlessProperty[] | cdktn.IResolvable) {
    this._unless.internalValue = value;
  }
  public resetUnless() {
    this._unless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlessInput() {
    return this._unless.internalValue;
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
}
