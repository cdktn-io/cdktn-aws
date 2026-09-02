// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfReceiptRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#after TfReceiptRule#after}
  */
  readonly after?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#enabled TfReceiptRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#id TfReceiptRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#name TfReceiptRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#recipients TfReceiptRule#recipients}
  */
  readonly recipients?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#region TfReceiptRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#rule_set_name TfReceiptRule#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#scan_enabled TfReceiptRule#scan_enabled}
  */
  readonly scanEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#tls_policy TfReceiptRule#tls_policy}
  */
  readonly tlsPolicy?: string;
  /**
  * add_header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#add_header_action TfReceiptRule#add_header_action}
  */
  readonly addHeaderAction?: TfReceiptRule.AddHeaderActionProperty[] | cdktn.IResolvable;
  /**
  * bounce_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#bounce_action TfReceiptRule#bounce_action}
  */
  readonly bounceAction?: TfReceiptRule.BounceActionProperty[] | cdktn.IResolvable;
  /**
  * lambda_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#lambda_action TfReceiptRule#lambda_action}
  */
  readonly lambdaAction?: TfReceiptRule.LambdaActionProperty[] | cdktn.IResolvable;
  /**
  * s3_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#s3_action TfReceiptRule#s3_action}
  */
  readonly s3Action?: TfReceiptRule.S3ActionProperty[] | cdktn.IResolvable;
  /**
  * sns_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#sns_action TfReceiptRule#sns_action}
  */
  readonly snsAction?: TfReceiptRule.SnsActionProperty[] | cdktn.IResolvable;
  /**
  * stop_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#stop_action TfReceiptRule#stop_action}
  */
  readonly stopAction?: TfReceiptRule.StopActionProperty[] | cdktn.IResolvable;
  /**
  * workmail_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#workmail_action TfReceiptRule#workmail_action}
  */
  readonly workmailAction?: TfReceiptRule.WorkmailActionProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule aws_ses_receipt_rule}
*/
export class TfReceiptRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ses_receipt_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfReceiptRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfReceiptRule to import
  * @param importFromId The id of the existing TfReceiptRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfReceiptRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ses_receipt_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule aws_ses_receipt_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfReceiptRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TfReceiptRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_receipt_rule',
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
    this._after = config.after;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._recipients = config.recipients;
    this._region = config.region;
    this._ruleSetName = config.ruleSetName;
    this._scanEnabled = config.scanEnabled;
    this._tlsPolicy = config.tlsPolicy;
    this._addHeaderAction.internalValue = config.addHeaderAction;
    this._bounceAction.internalValue = config.bounceAction;
    this._lambdaAction.internalValue = config.lambdaAction;
    this._s3Action.internalValue = config.s3Action;
    this._snsAction.internalValue = config.snsAction;
    this._stopAction.internalValue = config.stopAction;
    this._workmailAction.internalValue = config.workmailAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after - computed: false, optional: true, required: false
  private _after?: string; 
  public get after() {
    return this.getStringAttribute('after');
  }
  public set after(value: string) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return cdktn.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
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

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // scan_enabled - computed: false, optional: true, required: false
  private _scanEnabled?: boolean | cdktn.IResolvable; 
  public get scanEnabled() {
    return this.getBooleanAttribute('scan_enabled');
  }
  public set scanEnabled(value: boolean | cdktn.IResolvable) {
    this._scanEnabled = value;
  }
  public resetScanEnabled() {
    this._scanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanEnabledInput() {
    return this._scanEnabled;
  }

  // tls_policy - computed: true, optional: true, required: false
  private _tlsPolicy?: string; 
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string) {
    this._tlsPolicy = value;
  }
  public resetTlsPolicy() {
    this._tlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyInput() {
    return this._tlsPolicy;
  }

  // add_header_action - computed: false, optional: true, required: false
  private _addHeaderAction = new TfReceiptRule.AddHeaderActionPropertyList(this, "add_header_action", true);
  public get addHeaderAction() {
    return this._addHeaderAction;
  }
  public putAddHeaderAction(value: TfReceiptRule.AddHeaderActionProperty[] | cdktn.IResolvable) {
    this._addHeaderAction.internalValue = value;
  }
  public resetAddHeaderAction() {
    this._addHeaderAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderActionInput() {
    return this._addHeaderAction.internalValue;
  }

  // bounce_action - computed: false, optional: true, required: false
  private _bounceAction = new TfReceiptRule.BounceActionPropertyList(this, "bounce_action", true);
  public get bounceAction() {
    return this._bounceAction;
  }
  public putBounceAction(value: TfReceiptRule.BounceActionProperty[] | cdktn.IResolvable) {
    this._bounceAction.internalValue = value;
  }
  public resetBounceAction() {
    this._bounceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceActionInput() {
    return this._bounceAction.internalValue;
  }

  // lambda_action - computed: false, optional: true, required: false
  private _lambdaAction = new TfReceiptRule.LambdaActionPropertyList(this, "lambda_action", true);
  public get lambdaAction() {
    return this._lambdaAction;
  }
  public putLambdaAction(value: TfReceiptRule.LambdaActionProperty[] | cdktn.IResolvable) {
    this._lambdaAction.internalValue = value;
  }
  public resetLambdaAction() {
    this._lambdaAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaActionInput() {
    return this._lambdaAction.internalValue;
  }

  // s3_action - computed: false, optional: true, required: false
  private _s3Action = new TfReceiptRule.S3ActionPropertyList(this, "s3_action", true);
  public get s3Action() {
    return this._s3Action;
  }
  public putS3Action(value: TfReceiptRule.S3ActionProperty[] | cdktn.IResolvable) {
    this._s3Action.internalValue = value;
  }
  public resetS3Action() {
    this._s3Action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ActionInput() {
    return this._s3Action.internalValue;
  }

  // sns_action - computed: false, optional: true, required: false
  private _snsAction = new TfReceiptRule.SnsActionPropertyList(this, "sns_action", true);
  public get snsAction() {
    return this._snsAction;
  }
  public putSnsAction(value: TfReceiptRule.SnsActionProperty[] | cdktn.IResolvable) {
    this._snsAction.internalValue = value;
  }
  public resetSnsAction() {
    this._snsAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsActionInput() {
    return this._snsAction.internalValue;
  }

  // stop_action - computed: false, optional: true, required: false
  private _stopAction = new TfReceiptRule.StopActionPropertyList(this, "stop_action", true);
  public get stopAction() {
    return this._stopAction;
  }
  public putStopAction(value: TfReceiptRule.StopActionProperty[] | cdktn.IResolvable) {
    this._stopAction.internalValue = value;
  }
  public resetStopAction() {
    this._stopAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopActionInput() {
    return this._stopAction.internalValue;
  }

  // workmail_action - computed: false, optional: true, required: false
  private _workmailAction = new TfReceiptRule.WorkmailActionPropertyList(this, "workmail_action", true);
  public get workmailAction() {
    return this._workmailAction;
  }
  public putWorkmailAction(value: TfReceiptRule.WorkmailActionProperty[] | cdktn.IResolvable) {
    this._workmailAction.internalValue = value;
  }
  public resetWorkmailAction() {
    this._workmailAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workmailActionInput() {
    return this._workmailAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after: cdktn.stringToTerraform(this._after),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      recipients: cdktn.listMapper(cdktn.stringToTerraform, false)(this._recipients),
      region: cdktn.stringToTerraform(this._region),
      rule_set_name: cdktn.stringToTerraform(this._ruleSetName),
      scan_enabled: cdktn.booleanToTerraform(this._scanEnabled),
      tls_policy: cdktn.stringToTerraform(this._tlsPolicy),
      add_header_action: cdktn.listMapper(tfReceiptRuleAddHeaderActionPropertyToTerraform, true)(this._addHeaderAction.internalValue),
      bounce_action: cdktn.listMapper(tfReceiptRuleBounceActionPropertyToTerraform, true)(this._bounceAction.internalValue),
      lambda_action: cdktn.listMapper(tfReceiptRuleLambdaActionPropertyToTerraform, true)(this._lambdaAction.internalValue),
      s3_action: cdktn.listMapper(tfReceiptRuleS3ActionPropertyToTerraform, true)(this._s3Action.internalValue),
      sns_action: cdktn.listMapper(tfReceiptRuleSnsActionPropertyToTerraform, true)(this._snsAction.internalValue),
      stop_action: cdktn.listMapper(tfReceiptRuleStopActionPropertyToTerraform, true)(this._stopAction.internalValue),
      workmail_action: cdktn.listMapper(tfReceiptRuleWorkmailActionPropertyToTerraform, true)(this._workmailAction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      after: {
        value: cdktn.stringToHclTerraform(this._after),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      recipients: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._recipients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set_name: {
        value: cdktn.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_enabled: {
        value: cdktn.booleanToHclTerraform(this._scanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_policy: {
        value: cdktn.stringToHclTerraform(this._tlsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_header_action: {
        value: cdktn.listMapperHcl(tfReceiptRuleAddHeaderActionPropertyToHclTerraform, true)(this._addHeaderAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfReceiptRule.AddHeaderActionPropertyList",
      },
      bounce_action: {
        value: cdktn.listMapperHcl(tfReceiptRuleBounceActionPropertyToHclTerraform, true)(this._bounceAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfReceiptRule.BounceActionPropertyList",
      },
      lambda_action: {
        value: cdktn.listMapperHcl(tfReceiptRuleLambdaActionPropertyToHclTerraform, true)(this._lambdaAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfReceiptRule.LambdaActionPropertyList",
      },
      s3_action: {
        value: cdktn.listMapperHcl(tfReceiptRuleS3ActionPropertyToHclTerraform, true)(this._s3Action.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfReceiptRule.S3ActionPropertyList",
      },
      sns_action: {
        value: cdktn.listMapperHcl(tfReceiptRuleSnsActionPropertyToHclTerraform, true)(this._snsAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfReceiptRule.SnsActionPropertyList",
      },
      stop_action: {
        value: cdktn.listMapperHcl(tfReceiptRuleStopActionPropertyToHclTerraform, true)(this._stopAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfReceiptRule.StopActionPropertyList",
      },
      workmail_action: {
        value: cdktn.listMapperHcl(tfReceiptRuleWorkmailActionPropertyToHclTerraform, true)(this._workmailAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfReceiptRule.WorkmailActionPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfReceiptRuleAddHeaderActionPropertyToTerraform(struct?: TfReceiptRule.AddHeaderActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    position: cdktn.numberToTerraform(struct!.position),
  }
}


export function tfReceiptRuleAddHeaderActionPropertyToHclTerraform(struct?: TfReceiptRule.AddHeaderActionProperty | cdktn.IResolvable): any {
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
    position: {
      value: cdktn.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfReceiptRuleBounceActionPropertyToTerraform(struct?: TfReceiptRule.BounceActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
    position: cdktn.numberToTerraform(struct!.position),
    sender: cdktn.stringToTerraform(struct!.sender),
    smtp_reply_code: cdktn.stringToTerraform(struct!.smtpReplyCode),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function tfReceiptRuleBounceActionPropertyToHclTerraform(struct?: TfReceiptRule.BounceActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktn.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function tfReceiptRuleLambdaActionPropertyToTerraform(struct?: TfReceiptRule.LambdaActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
    invocation_type: cdktn.stringToTerraform(struct!.invocationType),
    position: cdktn.numberToTerraform(struct!.position),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function tfReceiptRuleLambdaActionPropertyToHclTerraform(struct?: TfReceiptRule.LambdaActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    position: {
      value: cdktn.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function tfReceiptRuleS3ActionPropertyToTerraform(struct?: TfReceiptRule.S3ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    object_key_prefix: cdktn.stringToTerraform(struct!.objectKeyPrefix),
    position: cdktn.numberToTerraform(struct!.position),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function tfReceiptRuleS3ActionPropertyToHclTerraform(struct?: TfReceiptRule.S3ActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.objectKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktn.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function tfReceiptRuleSnsActionPropertyToTerraform(struct?: TfReceiptRule.SnsActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    position: cdktn.numberToTerraform(struct!.position),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function tfReceiptRuleSnsActionPropertyToHclTerraform(struct?: TfReceiptRule.SnsActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktn.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export function tfReceiptRuleStopActionPropertyToTerraform(struct?: TfReceiptRule.StopActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    position: cdktn.numberToTerraform(struct!.position),
    scope: cdktn.stringToTerraform(struct!.scope),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function tfReceiptRuleStopActionPropertyToHclTerraform(struct?: TfReceiptRule.StopActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    position: {
      value: cdktn.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
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


export function tfReceiptRuleWorkmailActionPropertyToTerraform(struct?: TfReceiptRule.WorkmailActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    organization_arn: cdktn.stringToTerraform(struct!.organizationArn),
    position: cdktn.numberToTerraform(struct!.position),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function tfReceiptRuleWorkmailActionPropertyToHclTerraform(struct?: TfReceiptRule.WorkmailActionProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    organization_arn: {
      value: cdktn.stringToHclTerraform(struct!.organizationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktn.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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


export namespace TfReceiptRule {
export interface AddHeaderActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#header_name TfReceiptRule#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#header_value TfReceiptRule#header_value}
  */
  readonly headerValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#position TfReceiptRule#position}
  */
  readonly position: number;
}
export class AddHeaderActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AddHeaderActionProperty | cdktn.IResolvable | undefined {
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
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddHeaderActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._position = undefined;
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
      this._position = value.position;
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

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}

export class AddHeaderActionPropertyList extends cdktn.ComplexList {
  public internalValue? : AddHeaderActionProperty[] | cdktn.IResolvable

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
  public get(index: number): AddHeaderActionPropertyOutputReference {
    return new AddHeaderActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BounceActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#message TfReceiptRule#message}
  */
  readonly message: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#position TfReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#sender TfReceiptRule#sender}
  */
  readonly sender: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#smtp_reply_code TfReceiptRule#smtp_reply_code}
  */
  readonly smtpReplyCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#status_code TfReceiptRule#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#topic_arn TfReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}
export class BounceActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BounceActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
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
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BounceActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._position = undefined;
      this._sender = undefined;
      this._smtpReplyCode = undefined;
      this._statusCode = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._position = value.position;
      this._sender = value.sender;
      this._smtpReplyCode = value.smtpReplyCode;
      this._statusCode = value.statusCode;
      this._topicArn = value.topicArn;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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

  // status_code - computed: false, optional: true, required: false
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

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class BounceActionPropertyList extends cdktn.ComplexList {
  public internalValue? : BounceActionProperty[] | cdktn.IResolvable

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
  public get(index: number): BounceActionPropertyOutputReference {
    return new BounceActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#function_arn TfReceiptRule#function_arn}
  */
  readonly functionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#invocation_type TfReceiptRule#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#position TfReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#topic_arn TfReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}
export class LambdaActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
      this._invocationType = undefined;
      this._position = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
      this._invocationType = value.invocationType;
      this._position = value.position;
      this._topicArn = value.topicArn;
    }
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

  // invocation_type - computed: false, optional: true, required: false
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  public resetInvocationType() {
    this._invocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class LambdaActionPropertyList extends cdktn.ComplexList {
  public internalValue? : LambdaActionProperty[] | cdktn.IResolvable

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
  public get(index: number): LambdaActionPropertyOutputReference {
    return new LambdaActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#bucket_name TfReceiptRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#iam_role_arn TfReceiptRule#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#kms_key_arn TfReceiptRule#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#object_key_prefix TfReceiptRule#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#position TfReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#topic_arn TfReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}
export class S3ActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._objectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._iamRoleArn = undefined;
      this._kmsKeyArn = undefined;
      this._objectKeyPrefix = undefined;
      this._position = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._iamRoleArn = value.iamRoleArn;
      this._kmsKeyArn = value.kmsKeyArn;
      this._objectKeyPrefix = value.objectKeyPrefix;
      this._position = value.position;
      this._topicArn = value.topicArn;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // object_key_prefix - computed: false, optional: true, required: false
  private _objectKeyPrefix?: string; 
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }
  public set objectKeyPrefix(value: string) {
    this._objectKeyPrefix = value;
  }
  public resetObjectKeyPrefix() {
    this._objectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyPrefixInput() {
    return this._objectKeyPrefix;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class S3ActionPropertyList extends cdktn.ComplexList {
  public internalValue? : S3ActionProperty[] | cdktn.IResolvable

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
  public get(index: number): S3ActionPropertyOutputReference {
    return new S3ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnsActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#encoding TfReceiptRule#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#position TfReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#topic_arn TfReceiptRule#topic_arn}
  */
  readonly topicArn: string;
}
export class SnsActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SnsActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnsActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._position = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._position = value.position;
      this._topicArn = value.topicArn;
    }
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

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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

export class SnsActionPropertyList extends cdktn.ComplexList {
  public internalValue? : SnsActionProperty[] | cdktn.IResolvable

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
  public get(index: number): SnsActionPropertyOutputReference {
    return new SnsActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StopActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#position TfReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#scope TfReceiptRule#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#topic_arn TfReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}
export class StopActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StopActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StopActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._position = undefined;
      this._scope = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._position = value.position;
      this._scope = value.scope;
      this._topicArn = value.topicArn;
    }
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class StopActionPropertyList extends cdktn.ComplexList {
  public internalValue? : StopActionProperty[] | cdktn.IResolvable

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
  public get(index: number): StopActionPropertyOutputReference {
    return new StopActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkmailActionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#organization_arn TfReceiptRule#organization_arn}
  */
  readonly organizationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#position TfReceiptRule#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ses_receipt_rule#topic_arn TfReceiptRule#topic_arn}
  */
  readonly topicArn?: string;
}
export class WorkmailActionPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkmailActionProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationArn = this._organizationArn;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkmailActionProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationArn = undefined;
      this._position = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationArn = value.organizationArn;
      this._position = value.position;
      this._topicArn = value.topicArn;
    }
  }

  // organization_arn - computed: false, optional: false, required: true
  private _organizationArn?: string; 
  public get organizationArn() {
    return this.getStringAttribute('organization_arn');
  }
  public set organizationArn(value: string) {
    this._organizationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationArnInput() {
    return this._organizationArn;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class WorkmailActionPropertyList extends cdktn.ComplexList {
  public internalValue? : WorkmailActionProperty[] | cdktn.IResolvable

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
  public get(index: number): WorkmailActionPropertyOutputReference {
    return new WorkmailActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
