// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface TfIntentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#create_version TfIntent#create_version}
  */
  readonly createVersion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#description TfIntent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#id TfIntent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#name TfIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#parent_intent_signature TfIntent#parent_intent_signature}
  */
  readonly parentIntentSignature?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#region TfIntent#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#sample_utterances TfIntent#sample_utterances}
  */
  readonly sampleUtterances?: string[];
  /**
  * conclusion_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#conclusion_statement TfIntent#conclusion_statement}
  */
  readonly conclusionStatement?: TfIntent.ConclusionStatementProperty;
  /**
  * confirmation_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#confirmation_prompt TfIntent#confirmation_prompt}
  */
  readonly confirmationPrompt?: TfIntent.ConfirmationPromptProperty;
  /**
  * dialog_code_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#dialog_code_hook TfIntent#dialog_code_hook}
  */
  readonly dialogCodeHook?: TfIntent.DialogCodeHookProperty;
  /**
  * follow_up_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#follow_up_prompt TfIntent#follow_up_prompt}
  */
  readonly followUpPrompt?: TfIntent.FollowUpPromptProperty;
  /**
  * fulfillment_activity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#fulfillment_activity TfIntent#fulfillment_activity}
  */
  readonly fulfillmentActivity: TfIntent.FulfillmentActivityProperty;
  /**
  * rejection_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#rejection_statement TfIntent#rejection_statement}
  */
  readonly rejectionStatement?: TfIntent.RejectionStatementProperty;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#slot TfIntent#slot}
  */
  readonly slot?: TfIntent.SlotProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#timeouts TfIntent#timeouts}
  */
  readonly timeouts?: TfIntent.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent aws_lex_intent}
*/
export class TfIntent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lex_intent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TfIntent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfIntent to import
  * @param importFromId The id of the existing TfIntent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfIntent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lex_intent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent aws_lex_intent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfIntentConfig
  */
  public constructor(scope: Construct, id: string, config: TfIntentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_intent',
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
    this._createVersion = config.createVersion;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parentIntentSignature = config.parentIntentSignature;
    this._region = config.region;
    this._sampleUtterances = config.sampleUtterances;
    this._conclusionStatement.internalValue = config.conclusionStatement;
    this._confirmationPrompt.internalValue = config.confirmationPrompt;
    this._dialogCodeHook.internalValue = config.dialogCodeHook;
    this._followUpPrompt.internalValue = config.followUpPrompt;
    this._fulfillmentActivity.internalValue = config.fulfillmentActivity;
    this._rejectionStatement.internalValue = config.rejectionStatement;
    this._slot.internalValue = config.slot;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean | cdktn.IResolvable; 
  public get createVersion() {
    return this.getBooleanAttribute('create_version');
  }
  public set createVersion(value: boolean | cdktn.IResolvable) {
    this._createVersion = value;
  }
  public resetCreateVersion() {
    this._createVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVersionInput() {
    return this._createVersion;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // parent_intent_signature - computed: false, optional: true, required: false
  private _parentIntentSignature?: string; 
  public get parentIntentSignature() {
    return this.getStringAttribute('parent_intent_signature');
  }
  public set parentIntentSignature(value: string) {
    this._parentIntentSignature = value;
  }
  public resetParentIntentSignature() {
    this._parentIntentSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIntentSignatureInput() {
    return this._parentIntentSignature;
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

  // sample_utterances - computed: false, optional: true, required: false
  private _sampleUtterances?: string[]; 
  public get sampleUtterances() {
    return cdktn.Fn.tolist(this.getListAttribute('sample_utterances'));
  }
  public set sampleUtterances(value: string[]) {
    this._sampleUtterances = value;
  }
  public resetSampleUtterances() {
    this._sampleUtterances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUtterancesInput() {
    return this._sampleUtterances;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // conclusion_statement - computed: false, optional: true, required: false
  private _conclusionStatement = new TfIntent.ConclusionStatementPropertyOutputReference(this, "conclusion_statement");
  public get conclusionStatement() {
    return this._conclusionStatement;
  }
  public putConclusionStatement(value: TfIntent.ConclusionStatementProperty) {
    this._conclusionStatement.internalValue = value;
  }
  public resetConclusionStatement() {
    this._conclusionStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conclusionStatementInput() {
    return this._conclusionStatement.internalValue;
  }

  // confirmation_prompt - computed: false, optional: true, required: false
  private _confirmationPrompt = new TfIntent.ConfirmationPromptPropertyOutputReference(this, "confirmation_prompt");
  public get confirmationPrompt() {
    return this._confirmationPrompt;
  }
  public putConfirmationPrompt(value: TfIntent.ConfirmationPromptProperty) {
    this._confirmationPrompt.internalValue = value;
  }
  public resetConfirmationPrompt() {
    this._confirmationPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPromptInput() {
    return this._confirmationPrompt.internalValue;
  }

  // dialog_code_hook - computed: false, optional: true, required: false
  private _dialogCodeHook = new TfIntent.DialogCodeHookPropertyOutputReference(this, "dialog_code_hook");
  public get dialogCodeHook() {
    return this._dialogCodeHook;
  }
  public putDialogCodeHook(value: TfIntent.DialogCodeHookProperty) {
    this._dialogCodeHook.internalValue = value;
  }
  public resetDialogCodeHook() {
    this._dialogCodeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogCodeHookInput() {
    return this._dialogCodeHook.internalValue;
  }

  // follow_up_prompt - computed: false, optional: true, required: false
  private _followUpPrompt = new TfIntent.FollowUpPromptPropertyOutputReference(this, "follow_up_prompt");
  public get followUpPrompt() {
    return this._followUpPrompt;
  }
  public putFollowUpPrompt(value: TfIntent.FollowUpPromptProperty) {
    this._followUpPrompt.internalValue = value;
  }
  public resetFollowUpPrompt() {
    this._followUpPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followUpPromptInput() {
    return this._followUpPrompt.internalValue;
  }

  // fulfillment_activity - computed: false, optional: false, required: true
  private _fulfillmentActivity = new TfIntent.FulfillmentActivityPropertyOutputReference(this, "fulfillment_activity");
  public get fulfillmentActivity() {
    return this._fulfillmentActivity;
  }
  public putFulfillmentActivity(value: TfIntent.FulfillmentActivityProperty) {
    this._fulfillmentActivity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfillmentActivityInput() {
    return this._fulfillmentActivity.internalValue;
  }

  // rejection_statement - computed: false, optional: true, required: false
  private _rejectionStatement = new TfIntent.RejectionStatementPropertyOutputReference(this, "rejection_statement");
  public get rejectionStatement() {
    return this._rejectionStatement;
  }
  public putRejectionStatement(value: TfIntent.RejectionStatementProperty) {
    this._rejectionStatement.internalValue = value;
  }
  public resetRejectionStatement() {
    this._rejectionStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectionStatementInput() {
    return this._rejectionStatement.internalValue;
  }

  // slot - computed: false, optional: true, required: false
  private _slot = new TfIntent.SlotPropertyList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: TfIntent.SlotProperty[] | cdktn.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TfIntent.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TfIntent.TimeoutsProperty) {
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
      create_version: cdktn.booleanToTerraform(this._createVersion),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      parent_intent_signature: cdktn.stringToTerraform(this._parentIntentSignature),
      region: cdktn.stringToTerraform(this._region),
      sample_utterances: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sampleUtterances),
      conclusion_statement: tfIntentConclusionStatementPropertyToTerraform(this._conclusionStatement.internalValue),
      confirmation_prompt: tfIntentConfirmationPromptPropertyToTerraform(this._confirmationPrompt.internalValue),
      dialog_code_hook: tfIntentDialogCodeHookPropertyToTerraform(this._dialogCodeHook.internalValue),
      follow_up_prompt: tfIntentFollowUpPromptPropertyToTerraform(this._followUpPrompt.internalValue),
      fulfillment_activity: tfIntentFulfillmentActivityPropertyToTerraform(this._fulfillmentActivity.internalValue),
      rejection_statement: tfIntentRejectionStatementPropertyToTerraform(this._rejectionStatement.internalValue),
      slot: cdktn.listMapper(tfIntentSlotPropertyToTerraform, true)(this._slot.internalValue),
      timeouts: tfIntentTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_version: {
        value: cdktn.booleanToHclTerraform(this._createVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      parent_intent_signature: {
        value: cdktn.stringToHclTerraform(this._parentIntentSignature),
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
      sample_utterances: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sampleUtterances),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      conclusion_statement: {
        value: tfIntentConclusionStatementPropertyToHclTerraform(this._conclusionStatement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIntent.ConclusionStatementPropertyList",
      },
      confirmation_prompt: {
        value: tfIntentConfirmationPromptPropertyToHclTerraform(this._confirmationPrompt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIntent.ConfirmationPromptPropertyList",
      },
      dialog_code_hook: {
        value: tfIntentDialogCodeHookPropertyToHclTerraform(this._dialogCodeHook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIntent.DialogCodeHookPropertyList",
      },
      follow_up_prompt: {
        value: tfIntentFollowUpPromptPropertyToHclTerraform(this._followUpPrompt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIntent.FollowUpPromptPropertyList",
      },
      fulfillment_activity: {
        value: tfIntentFulfillmentActivityPropertyToHclTerraform(this._fulfillmentActivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIntent.FulfillmentActivityPropertyList",
      },
      rejection_statement: {
        value: tfIntentRejectionStatementPropertyToHclTerraform(this._rejectionStatement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TfIntent.RejectionStatementPropertyList",
      },
      slot: {
        value: cdktn.listMapperHcl(tfIntentSlotPropertyToHclTerraform, true)(this._slot.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TfIntent.SlotPropertyList",
      },
      timeouts: {
        value: tfIntentTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TfIntent.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function tfIntentConclusionStatementMessagePropertyToTerraform(struct?: TfIntent.ConclusionStatementMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    group_number: cdktn.numberToTerraform(struct!.groupNumber),
  }
}


export function tfIntentConclusionStatementMessagePropertyToHclTerraform(struct?: TfIntent.ConclusionStatementMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_number: {
      value: cdktn.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentConclusionStatementPropertyToTerraform(struct?: TfIntent.ConclusionStatementPropertyOutputReference | TfIntent.ConclusionStatementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    message: cdktn.listMapper(tfIntentConclusionStatementMessagePropertyToTerraform, true)(struct!.message),
  }
}


export function tfIntentConclusionStatementPropertyToHclTerraform(struct?: TfIntent.ConclusionStatementPropertyOutputReference | TfIntent.ConclusionStatementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.listMapperHcl(tfIntentConclusionStatementMessagePropertyToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "set",
      storageClassType: "ConclusionStatementMessagePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentConfirmationPromptMessagePropertyToTerraform(struct?: TfIntent.ConfirmationPromptMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    group_number: cdktn.numberToTerraform(struct!.groupNumber),
  }
}


export function tfIntentConfirmationPromptMessagePropertyToHclTerraform(struct?: TfIntent.ConfirmationPromptMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_number: {
      value: cdktn.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentConfirmationPromptPropertyToTerraform(struct?: TfIntent.ConfirmationPromptPropertyOutputReference | TfIntent.ConfirmationPromptProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_attempts: cdktn.numberToTerraform(struct!.maxAttempts),
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    message: cdktn.listMapper(tfIntentConfirmationPromptMessagePropertyToTerraform, true)(struct!.message),
  }
}


export function tfIntentConfirmationPromptPropertyToHclTerraform(struct?: TfIntent.ConfirmationPromptPropertyOutputReference | TfIntent.ConfirmationPromptProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.listMapperHcl(tfIntentConfirmationPromptMessagePropertyToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "set",
      storageClassType: "ConfirmationPromptMessagePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentDialogCodeHookPropertyToTerraform(struct?: TfIntent.DialogCodeHookPropertyOutputReference | TfIntent.DialogCodeHookProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_version: cdktn.stringToTerraform(struct!.messageVersion),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function tfIntentDialogCodeHookPropertyToHclTerraform(struct?: TfIntent.DialogCodeHookPropertyOutputReference | TfIntent.DialogCodeHookProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_version: {
      value: cdktn.stringToHclTerraform(struct!.messageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentFollowUpPromptPromptMessagePropertyToTerraform(struct?: TfIntent.FollowUpPromptPromptMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    group_number: cdktn.numberToTerraform(struct!.groupNumber),
  }
}


export function tfIntentFollowUpPromptPromptMessagePropertyToHclTerraform(struct?: TfIntent.FollowUpPromptPromptMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_number: {
      value: cdktn.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentPromptPropertyToTerraform(struct?: TfIntent.PromptPropertyOutputReference | TfIntent.PromptProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_attempts: cdktn.numberToTerraform(struct!.maxAttempts),
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    message: cdktn.listMapper(tfIntentFollowUpPromptPromptMessagePropertyToTerraform, true)(struct!.message),
  }
}


export function tfIntentPromptPropertyToHclTerraform(struct?: TfIntent.PromptPropertyOutputReference | TfIntent.PromptProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.listMapperHcl(tfIntentFollowUpPromptPromptMessagePropertyToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "set",
      storageClassType: "FollowUpPromptPromptMessagePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentFollowUpPromptRejectionStatementMessagePropertyToTerraform(struct?: TfIntent.FollowUpPromptRejectionStatementMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    group_number: cdktn.numberToTerraform(struct!.groupNumber),
  }
}


export function tfIntentFollowUpPromptRejectionStatementMessagePropertyToHclTerraform(struct?: TfIntent.FollowUpPromptRejectionStatementMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_number: {
      value: cdktn.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentFollowUpPromptRejectionStatementPropertyToTerraform(struct?: TfIntent.FollowUpPromptRejectionStatementPropertyOutputReference | TfIntent.FollowUpPromptRejectionStatementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    message: cdktn.listMapper(tfIntentFollowUpPromptRejectionStatementMessagePropertyToTerraform, true)(struct!.message),
  }
}


export function tfIntentFollowUpPromptRejectionStatementPropertyToHclTerraform(struct?: TfIntent.FollowUpPromptRejectionStatementPropertyOutputReference | TfIntent.FollowUpPromptRejectionStatementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.listMapperHcl(tfIntentFollowUpPromptRejectionStatementMessagePropertyToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "set",
      storageClassType: "FollowUpPromptRejectionStatementMessagePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentFollowUpPromptPropertyToTerraform(struct?: TfIntent.FollowUpPromptPropertyOutputReference | TfIntent.FollowUpPromptProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prompt: tfIntentPromptPropertyToTerraform(struct!.prompt),
    rejection_statement: tfIntentFollowUpPromptRejectionStatementPropertyToTerraform(struct!.rejectionStatement),
  }
}


export function tfIntentFollowUpPromptPropertyToHclTerraform(struct?: TfIntent.FollowUpPromptPropertyOutputReference | TfIntent.FollowUpPromptProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prompt: {
      value: tfIntentPromptPropertyToHclTerraform(struct!.prompt),
      isBlock: true,
      type: "list",
      storageClassType: "PromptPropertyList",
    },
    rejection_statement: {
      value: tfIntentFollowUpPromptRejectionStatementPropertyToHclTerraform(struct!.rejectionStatement),
      isBlock: true,
      type: "list",
      storageClassType: "FollowUpPromptRejectionStatementPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentCodeHookPropertyToTerraform(struct?: TfIntent.CodeHookPropertyOutputReference | TfIntent.CodeHookProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_version: cdktn.stringToTerraform(struct!.messageVersion),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function tfIntentCodeHookPropertyToHclTerraform(struct?: TfIntent.CodeHookPropertyOutputReference | TfIntent.CodeHookProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_version: {
      value: cdktn.stringToHclTerraform(struct!.messageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentFulfillmentActivityPropertyToTerraform(struct?: TfIntent.FulfillmentActivityPropertyOutputReference | TfIntent.FulfillmentActivityProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    code_hook: tfIntentCodeHookPropertyToTerraform(struct!.codeHook),
  }
}


export function tfIntentFulfillmentActivityPropertyToHclTerraform(struct?: TfIntent.FulfillmentActivityPropertyOutputReference | TfIntent.FulfillmentActivityProperty): any {
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
    code_hook: {
      value: tfIntentCodeHookPropertyToHclTerraform(struct!.codeHook),
      isBlock: true,
      type: "list",
      storageClassType: "CodeHookPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentRejectionStatementMessagePropertyToTerraform(struct?: TfIntent.RejectionStatementMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    group_number: cdktn.numberToTerraform(struct!.groupNumber),
  }
}


export function tfIntentRejectionStatementMessagePropertyToHclTerraform(struct?: TfIntent.RejectionStatementMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_number: {
      value: cdktn.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentRejectionStatementPropertyToTerraform(struct?: TfIntent.RejectionStatementPropertyOutputReference | TfIntent.RejectionStatementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    message: cdktn.listMapper(tfIntentRejectionStatementMessagePropertyToTerraform, true)(struct!.message),
  }
}


export function tfIntentRejectionStatementPropertyToHclTerraform(struct?: TfIntent.RejectionStatementPropertyOutputReference | TfIntent.RejectionStatementProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.listMapperHcl(tfIntentRejectionStatementMessagePropertyToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "set",
      storageClassType: "RejectionStatementMessagePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentSlotValueElicitationPromptMessagePropertyToTerraform(struct?: TfIntent.SlotValueElicitationPromptMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    group_number: cdktn.numberToTerraform(struct!.groupNumber),
  }
}


export function tfIntentSlotValueElicitationPromptMessagePropertyToHclTerraform(struct?: TfIntent.SlotValueElicitationPromptMessageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_number: {
      value: cdktn.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentValueElicitationPromptPropertyToTerraform(struct?: TfIntent.ValueElicitationPromptPropertyOutputReference | TfIntent.ValueElicitationPromptProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_attempts: cdktn.numberToTerraform(struct!.maxAttempts),
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    message: cdktn.listMapper(tfIntentSlotValueElicitationPromptMessagePropertyToTerraform, true)(struct!.message),
  }
}


export function tfIntentValueElicitationPromptPropertyToHclTerraform(struct?: TfIntent.ValueElicitationPromptPropertyOutputReference | TfIntent.ValueElicitationPromptProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.listMapperHcl(tfIntentSlotValueElicitationPromptMessagePropertyToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "set",
      storageClassType: "SlotValueElicitationPromptMessagePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentSlotPropertyToTerraform(struct?: TfIntent.SlotProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    priority: cdktn.numberToTerraform(struct!.priority),
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    sample_utterances: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sampleUtterances),
    slot_constraint: cdktn.stringToTerraform(struct!.slotConstraint),
    slot_type: cdktn.stringToTerraform(struct!.slotType),
    slot_type_version: cdktn.stringToTerraform(struct!.slotTypeVersion),
    value_elicitation_prompt: tfIntentValueElicitationPromptPropertyToTerraform(struct!.valueElicitationPrompt),
  }
}


export function tfIntentSlotPropertyToHclTerraform(struct?: TfIntent.SlotProperty | cdktn.IResolvable): any {
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_utterances: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sampleUtterances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    slot_constraint: {
      value: cdktn.stringToHclTerraform(struct!.slotConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_type: {
      value: cdktn.stringToHclTerraform(struct!.slotType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_type_version: {
      value: cdktn.stringToHclTerraform(struct!.slotTypeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_elicitation_prompt: {
      value: tfIntentValueElicitationPromptPropertyToHclTerraform(struct!.valueElicitationPrompt),
      isBlock: true,
      type: "list",
      storageClassType: "ValueElicitationPromptPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function tfIntentTimeoutsPropertyToTerraform(struct?: TfIntent.TimeoutsProperty | cdktn.IResolvable): any {
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


export function tfIntentTimeoutsPropertyToHclTerraform(struct?: TfIntent.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace TfIntent {
export interface ConclusionStatementMessageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content TfIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content_type TfIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#group_number TfIntent#group_number}
  */
  readonly groupNumber?: number;
}
export class ConclusionStatementMessagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConclusionStatementMessageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConclusionStatementMessageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class ConclusionStatementMessagePropertyList extends cdktn.ComplexList {
  public internalValue? : ConclusionStatementMessageProperty[] | cdktn.IResolvable

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
  public get(index: number): ConclusionStatementMessagePropertyOutputReference {
    return new ConclusionStatementMessagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConclusionStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#response_card TfIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#message TfIntent#message}
  */
  readonly message: ConclusionStatementMessageProperty[] | cdktn.IResolvable;
}
export class ConclusionStatementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConclusionStatementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConclusionStatementProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
    }
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message = new ConclusionStatementMessagePropertyList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: ConclusionStatementMessageProperty[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface ConfirmationPromptMessageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content TfIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content_type TfIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#group_number TfIntent#group_number}
  */
  readonly groupNumber?: number;
}
export class ConfirmationPromptMessagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfirmationPromptMessageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfirmationPromptMessageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class ConfirmationPromptMessagePropertyList extends cdktn.ComplexList {
  public internalValue? : ConfirmationPromptMessageProperty[] | cdktn.IResolvable

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
  public get(index: number): ConfirmationPromptMessagePropertyOutputReference {
    return new ConfirmationPromptMessagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfirmationPromptProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#max_attempts TfIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#response_card TfIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#message TfIntent#message}
  */
  readonly message: ConfirmationPromptMessageProperty[] | cdktn.IResolvable;
}
export class ConfirmationPromptPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfirmationPromptProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfirmationPromptProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
    }
  }

  // max_attempts - computed: false, optional: false, required: true
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message = new ConfirmationPromptMessagePropertyList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: ConfirmationPromptMessageProperty[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface DialogCodeHookProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#message_version TfIntent#message_version}
  */
  readonly messageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#uri TfIntent#uri}
  */
  readonly uri: string;
}
export class DialogCodeHookPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogCodeHookProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageVersion = this._messageVersion;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogCodeHookProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageVersion = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageVersion = value.messageVersion;
      this._uri = value.uri;
    }
  }

  // message_version - computed: false, optional: false, required: true
  private _messageVersion?: string; 
  public get messageVersion() {
    return this.getStringAttribute('message_version');
  }
  public set messageVersion(value: string) {
    this._messageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageVersionInput() {
    return this._messageVersion;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface FollowUpPromptPromptMessageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content TfIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content_type TfIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#group_number TfIntent#group_number}
  */
  readonly groupNumber?: number;
}
export class FollowUpPromptPromptMessagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FollowUpPromptPromptMessageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FollowUpPromptPromptMessageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class FollowUpPromptPromptMessagePropertyList extends cdktn.ComplexList {
  public internalValue? : FollowUpPromptPromptMessageProperty[] | cdktn.IResolvable

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
  public get(index: number): FollowUpPromptPromptMessagePropertyOutputReference {
    return new FollowUpPromptPromptMessagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PromptProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#max_attempts TfIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#response_card TfIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#message TfIntent#message}
  */
  readonly message: FollowUpPromptPromptMessageProperty[] | cdktn.IResolvable;
}
export class PromptPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PromptProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PromptProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
    }
  }

  // max_attempts - computed: false, optional: false, required: true
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message = new FollowUpPromptPromptMessagePropertyList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: FollowUpPromptPromptMessageProperty[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface FollowUpPromptRejectionStatementMessageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content TfIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content_type TfIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#group_number TfIntent#group_number}
  */
  readonly groupNumber?: number;
}
export class FollowUpPromptRejectionStatementMessagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FollowUpPromptRejectionStatementMessageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FollowUpPromptRejectionStatementMessageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class FollowUpPromptRejectionStatementMessagePropertyList extends cdktn.ComplexList {
  public internalValue? : FollowUpPromptRejectionStatementMessageProperty[] | cdktn.IResolvable

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
  public get(index: number): FollowUpPromptRejectionStatementMessagePropertyOutputReference {
    return new FollowUpPromptRejectionStatementMessagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FollowUpPromptRejectionStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#response_card TfIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#message TfIntent#message}
  */
  readonly message: FollowUpPromptRejectionStatementMessageProperty[] | cdktn.IResolvable;
}
export class FollowUpPromptRejectionStatementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FollowUpPromptRejectionStatementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FollowUpPromptRejectionStatementProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
    }
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message = new FollowUpPromptRejectionStatementMessagePropertyList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: FollowUpPromptRejectionStatementMessageProperty[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface FollowUpPromptProperty {
  /**
  * prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#prompt TfIntent#prompt}
  */
  readonly prompt: PromptProperty;
  /**
  * rejection_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#rejection_statement TfIntent#rejection_statement}
  */
  readonly rejectionStatement: FollowUpPromptRejectionStatementProperty;
}
export class FollowUpPromptPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FollowUpPromptProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt?.internalValue;
    }
    if (this._rejectionStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectionStatement = this._rejectionStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FollowUpPromptProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prompt.internalValue = undefined;
      this._rejectionStatement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prompt.internalValue = value.prompt;
      this._rejectionStatement.internalValue = value.rejectionStatement;
    }
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt = new PromptPropertyOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }
  public putPrompt(value: PromptProperty) {
    this._prompt.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt.internalValue;
  }

  // rejection_statement - computed: false, optional: false, required: true
  private _rejectionStatement = new FollowUpPromptRejectionStatementPropertyOutputReference(this, "rejection_statement");
  public get rejectionStatement() {
    return this._rejectionStatement;
  }
  public putRejectionStatement(value: FollowUpPromptRejectionStatementProperty) {
    this._rejectionStatement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectionStatementInput() {
    return this._rejectionStatement.internalValue;
  }
}
export interface CodeHookProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#message_version TfIntent#message_version}
  */
  readonly messageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#uri TfIntent#uri}
  */
  readonly uri: string;
}
export class CodeHookPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeHookProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageVersion = this._messageVersion;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeHookProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageVersion = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageVersion = value.messageVersion;
      this._uri = value.uri;
    }
  }

  // message_version - computed: false, optional: false, required: true
  private _messageVersion?: string; 
  public get messageVersion() {
    return this.getStringAttribute('message_version');
  }
  public set messageVersion(value: string) {
    this._messageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageVersionInput() {
    return this._messageVersion;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface FulfillmentActivityProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#type TfIntent#type}
  */
  readonly type: string;
  /**
  * code_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#code_hook TfIntent#code_hook}
  */
  readonly codeHook?: CodeHookProperty;
}
export class FulfillmentActivityPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FulfillmentActivityProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._codeHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeHook = this._codeHook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FulfillmentActivityProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._codeHook.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._codeHook.internalValue = value.codeHook;
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

  // code_hook - computed: false, optional: true, required: false
  private _codeHook = new CodeHookPropertyOutputReference(this, "code_hook");
  public get codeHook() {
    return this._codeHook;
  }
  public putCodeHook(value: CodeHookProperty) {
    this._codeHook.internalValue = value;
  }
  public resetCodeHook() {
    this._codeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeHookInput() {
    return this._codeHook.internalValue;
  }
}
export interface RejectionStatementMessageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content TfIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content_type TfIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#group_number TfIntent#group_number}
  */
  readonly groupNumber?: number;
}
export class RejectionStatementMessagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RejectionStatementMessageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RejectionStatementMessageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class RejectionStatementMessagePropertyList extends cdktn.ComplexList {
  public internalValue? : RejectionStatementMessageProperty[] | cdktn.IResolvable

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
  public get(index: number): RejectionStatementMessagePropertyOutputReference {
    return new RejectionStatementMessagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RejectionStatementProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#response_card TfIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#message TfIntent#message}
  */
  readonly message: RejectionStatementMessageProperty[] | cdktn.IResolvable;
}
export class RejectionStatementPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RejectionStatementProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RejectionStatementProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
    }
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message = new RejectionStatementMessagePropertyList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: RejectionStatementMessageProperty[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface SlotValueElicitationPromptMessageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content TfIntent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#content_type TfIntent#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#group_number TfIntent#group_number}
  */
  readonly groupNumber?: number;
}
export class SlotValueElicitationPromptMessagePropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SlotValueElicitationPromptMessageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlotValueElicitationPromptMessageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class SlotValueElicitationPromptMessagePropertyList extends cdktn.ComplexList {
  public internalValue? : SlotValueElicitationPromptMessageProperty[] | cdktn.IResolvable

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
  public get(index: number): SlotValueElicitationPromptMessagePropertyOutputReference {
    return new SlotValueElicitationPromptMessagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ValueElicitationPromptProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#max_attempts TfIntent#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#response_card TfIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#message TfIntent#message}
  */
  readonly message: SlotValueElicitationPromptMessageProperty[] | cdktn.IResolvable;
}
export class ValueElicitationPromptPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ValueElicitationPromptProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ValueElicitationPromptProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
    }
  }

  // max_attempts - computed: false, optional: false, required: true
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message = new SlotValueElicitationPromptMessagePropertyList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: SlotValueElicitationPromptMessageProperty[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface SlotProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#description TfIntent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#name TfIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#priority TfIntent#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#response_card TfIntent#response_card}
  */
  readonly responseCard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#sample_utterances TfIntent#sample_utterances}
  */
  readonly sampleUtterances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#slot_constraint TfIntent#slot_constraint}
  */
  readonly slotConstraint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#slot_type TfIntent#slot_type}
  */
  readonly slotType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#slot_type_version TfIntent#slot_type_version}
  */
  readonly slotTypeVersion?: string;
  /**
  * value_elicitation_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#value_elicitation_prompt TfIntent#value_elicitation_prompt}
  */
  readonly valueElicitationPrompt?: ValueElicitationPromptProperty;
}
export class SlotPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SlotProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._sampleUtterances !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleUtterances = this._sampleUtterances;
    }
    if (this._slotConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotConstraint = this._slotConstraint;
    }
    if (this._slotType !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotType = this._slotType;
    }
    if (this._slotTypeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotTypeVersion = this._slotTypeVersion;
    }
    if (this._valueElicitationPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueElicitationPrompt = this._valueElicitationPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlotProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._responseCard = undefined;
      this._sampleUtterances = undefined;
      this._slotConstraint = undefined;
      this._slotType = undefined;
      this._slotTypeVersion = undefined;
      this._valueElicitationPrompt.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._priority = value.priority;
      this._responseCard = value.responseCard;
      this._sampleUtterances = value.sampleUtterances;
      this._slotConstraint = value.slotConstraint;
      this._slotType = value.slotType;
      this._slotTypeVersion = value.slotTypeVersion;
      this._valueElicitationPrompt.internalValue = value.valueElicitationPrompt;
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

  // priority - computed: false, optional: true, required: false
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

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // sample_utterances - computed: false, optional: true, required: false
  private _sampleUtterances?: string[]; 
  public get sampleUtterances() {
    return this.getListAttribute('sample_utterances');
  }
  public set sampleUtterances(value: string[]) {
    this._sampleUtterances = value;
  }
  public resetSampleUtterances() {
    this._sampleUtterances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUtterancesInput() {
    return this._sampleUtterances;
  }

  // slot_constraint - computed: false, optional: false, required: true
  private _slotConstraint?: string; 
  public get slotConstraint() {
    return this.getStringAttribute('slot_constraint');
  }
  public set slotConstraint(value: string) {
    this._slotConstraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotConstraintInput() {
    return this._slotConstraint;
  }

  // slot_type - computed: false, optional: false, required: true
  private _slotType?: string; 
  public get slotType() {
    return this.getStringAttribute('slot_type');
  }
  public set slotType(value: string) {
    this._slotType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeInput() {
    return this._slotType;
  }

  // slot_type_version - computed: false, optional: true, required: false
  private _slotTypeVersion?: string; 
  public get slotTypeVersion() {
    return this.getStringAttribute('slot_type_version');
  }
  public set slotTypeVersion(value: string) {
    this._slotTypeVersion = value;
  }
  public resetSlotTypeVersion() {
    this._slotTypeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeVersionInput() {
    return this._slotTypeVersion;
  }

  // value_elicitation_prompt - computed: false, optional: true, required: false
  private _valueElicitationPrompt = new ValueElicitationPromptPropertyOutputReference(this, "value_elicitation_prompt");
  public get valueElicitationPrompt() {
    return this._valueElicitationPrompt;
  }
  public putValueElicitationPrompt(value: ValueElicitationPromptProperty) {
    this._valueElicitationPrompt.internalValue = value;
  }
  public resetValueElicitationPrompt() {
    this._valueElicitationPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueElicitationPromptInput() {
    return this._valueElicitationPrompt.internalValue;
  }
}

export class SlotPropertyList extends cdktn.ComplexList {
  public internalValue? : SlotProperty[] | cdktn.IResolvable

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
  public get(index: number): SlotPropertyOutputReference {
    return new SlotPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#create TfIntent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#delete TfIntent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lex_intent#update TfIntent#update}
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
