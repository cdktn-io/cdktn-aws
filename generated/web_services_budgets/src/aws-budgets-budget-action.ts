// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsBudgetActionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#account_id AwsBudgetAction#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#action_type AwsBudgetAction#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#approval_model AwsBudgetAction#approval_model}
  */
  readonly approvalModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#budget_name AwsBudgetAction#budget_name}
  */
  readonly budgetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#execution_role_arn AwsBudgetAction#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#id AwsBudgetAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#notification_type AwsBudgetAction#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#tags AwsBudgetAction#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#tags_all AwsBudgetAction#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * action_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#action_threshold AwsBudgetAction#action_threshold}
  */
  readonly actionThreshold: AwsBudgetAction.ActionThresholdProperty;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#definition AwsBudgetAction#definition}
  */
  readonly definition: AwsBudgetAction.DefinitionProperty;
  /**
  * subscriber block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#subscriber AwsBudgetAction#subscriber}
  */
  readonly subscriber: AwsBudgetAction.SubscriberProperty[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#timeouts AwsBudgetAction#timeouts}
  */
  readonly timeouts?: AwsBudgetAction.TimeoutsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action aws_budgets_budget_action}
*/
export class AwsBudgetAction extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_budgets_budget_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsBudgetAction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBudgetAction to import
  * @param importFromId The id of the existing AwsBudgetAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBudgetAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_budgets_budget_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action aws_budgets_budget_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBudgetActionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBudgetActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_budgets_budget_action',
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
    this._accountId = config.accountId;
    this._actionType = config.actionType;
    this._approvalModel = config.approvalModel;
    this._budgetName = config.budgetName;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._notificationType = config.notificationType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._actionThreshold.internalValue = config.actionThreshold;
    this._definition.internalValue = config.definition;
    this._subscriber.internalValue = config.subscriber;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // approval_model - computed: false, optional: false, required: true
  private _approvalModel?: string; 
  public get approvalModel() {
    return this.getStringAttribute('approval_model');
  }
  public set approvalModel(value: string) {
    this._approvalModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModelInput() {
    return this._approvalModel;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // budget_name - computed: false, optional: false, required: true
  private _budgetName?: string; 
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }
  public set budgetName(value: string) {
    this._budgetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetNameInput() {
    return this._budgetName;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // action_threshold - computed: false, optional: false, required: true
  private _actionThreshold = new AwsBudgetAction.ActionThresholdPropertyOutputReference(this, "action_threshold");
  public get actionThreshold() {
    return this._actionThreshold;
  }
  public putActionThreshold(value: AwsBudgetAction.ActionThresholdProperty) {
    this._actionThreshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdInput() {
    return this._actionThreshold.internalValue;
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new AwsBudgetAction.DefinitionPropertyOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: AwsBudgetAction.DefinitionProperty) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // subscriber - computed: false, optional: false, required: true
  private _subscriber = new AwsBudgetAction.SubscriberPropertyList(this, "subscriber", true);
  public get subscriber() {
    return this._subscriber;
  }
  public putSubscriber(value: AwsBudgetAction.SubscriberProperty[] | cdktn.IResolvable) {
    this._subscriber.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBudgetAction.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBudgetAction.TimeoutsProperty) {
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
      account_id: cdktn.stringToTerraform(this._accountId),
      action_type: cdktn.stringToTerraform(this._actionType),
      approval_model: cdktn.stringToTerraform(this._approvalModel),
      budget_name: cdktn.stringToTerraform(this._budgetName),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      id: cdktn.stringToTerraform(this._id),
      notification_type: cdktn.stringToTerraform(this._notificationType),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      action_threshold: awsBudgetActionActionThresholdPropertyToTerraform(this._actionThreshold.internalValue),
      definition: awsBudgetActionDefinitionPropertyToTerraform(this._definition.internalValue),
      subscriber: cdktn.listMapper(awsBudgetActionSubscriberPropertyToTerraform, true)(this._subscriber.internalValue),
      timeouts: awsBudgetActionTimeoutsPropertyToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_type: {
        value: cdktn.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_model: {
        value: cdktn.stringToHclTerraform(this._approvalModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_name: {
        value: cdktn.stringToHclTerraform(this._budgetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
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
      notification_type: {
        value: cdktn.stringToHclTerraform(this._notificationType),
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
      action_threshold: {
        value: awsBudgetActionActionThresholdPropertyToHclTerraform(this._actionThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBudgetAction.ActionThresholdPropertyList",
      },
      definition: {
        value: awsBudgetActionDefinitionPropertyToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBudgetAction.DefinitionPropertyList",
      },
      subscriber: {
        value: cdktn.listMapperHcl(awsBudgetActionSubscriberPropertyToHclTerraform, true)(this._subscriber.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsBudgetAction.SubscriberPropertyList",
      },
      timeouts: {
        value: awsBudgetActionTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBudgetAction.TimeoutsProperty",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsBudgetActionActionThresholdPropertyToTerraform(struct?: AwsBudgetAction.ActionThresholdPropertyOutputReference | AwsBudgetAction.ActionThresholdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_threshold_type: cdktn.stringToTerraform(struct!.actionThresholdType),
    action_threshold_value: cdktn.numberToTerraform(struct!.actionThresholdValue),
  }
}


export function awsBudgetActionActionThresholdPropertyToHclTerraform(struct?: AwsBudgetAction.ActionThresholdPropertyOutputReference | AwsBudgetAction.ActionThresholdProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_threshold_type: {
      value: cdktn.stringToHclTerraform(struct!.actionThresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_threshold_value: {
      value: cdktn.numberToHclTerraform(struct!.actionThresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBudgetActionIamActionDefinitionPropertyToTerraform(struct?: AwsBudgetAction.IamActionDefinitionPropertyOutputReference | AwsBudgetAction.IamActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groups),
    policy_arn: cdktn.stringToTerraform(struct!.policyArn),
    roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.roles),
    users: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.users),
  }
}


export function awsBudgetActionIamActionDefinitionPropertyToHclTerraform(struct?: AwsBudgetAction.IamActionDefinitionPropertyOutputReference | AwsBudgetAction.IamActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_arn: {
      value: cdktn.stringToHclTerraform(struct!.policyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    users: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBudgetActionScpActionDefinitionPropertyToTerraform(struct?: AwsBudgetAction.ScpActionDefinitionPropertyOutputReference | AwsBudgetAction.ScpActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_id: cdktn.stringToTerraform(struct!.policyId),
    target_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetIds),
  }
}


export function awsBudgetActionScpActionDefinitionPropertyToHclTerraform(struct?: AwsBudgetAction.ScpActionDefinitionPropertyOutputReference | AwsBudgetAction.ScpActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_id: {
      value: cdktn.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBudgetActionSsmActionDefinitionPropertyToTerraform(struct?: AwsBudgetAction.SsmActionDefinitionPropertyOutputReference | AwsBudgetAction.SsmActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_sub_type: cdktn.stringToTerraform(struct!.actionSubType),
    instance_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceIds),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function awsBudgetActionSsmActionDefinitionPropertyToHclTerraform(struct?: AwsBudgetAction.SsmActionDefinitionPropertyOutputReference | AwsBudgetAction.SsmActionDefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_sub_type: {
      value: cdktn.stringToHclTerraform(struct!.actionSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBudgetActionDefinitionPropertyToTerraform(struct?: AwsBudgetAction.DefinitionPropertyOutputReference | AwsBudgetAction.DefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_action_definition: awsBudgetActionIamActionDefinitionPropertyToTerraform(struct!.iamActionDefinition),
    scp_action_definition: awsBudgetActionScpActionDefinitionPropertyToTerraform(struct!.scpActionDefinition),
    ssm_action_definition: awsBudgetActionSsmActionDefinitionPropertyToTerraform(struct!.ssmActionDefinition),
  }
}


export function awsBudgetActionDefinitionPropertyToHclTerraform(struct?: AwsBudgetAction.DefinitionPropertyOutputReference | AwsBudgetAction.DefinitionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_action_definition: {
      value: awsBudgetActionIamActionDefinitionPropertyToHclTerraform(struct!.iamActionDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "IamActionDefinitionPropertyList",
    },
    scp_action_definition: {
      value: awsBudgetActionScpActionDefinitionPropertyToHclTerraform(struct!.scpActionDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "ScpActionDefinitionPropertyList",
    },
    ssm_action_definition: {
      value: awsBudgetActionSsmActionDefinitionPropertyToHclTerraform(struct!.ssmActionDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "SsmActionDefinitionPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBudgetActionSubscriberPropertyToTerraform(struct?: AwsBudgetAction.SubscriberProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address: cdktn.stringToTerraform(struct!.address),
    subscription_type: cdktn.stringToTerraform(struct!.subscriptionType),
  }
}


export function awsBudgetActionSubscriberPropertyToHclTerraform(struct?: AwsBudgetAction.SubscriberProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address: {
      value: cdktn.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_type: {
      value: cdktn.stringToHclTerraform(struct!.subscriptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsBudgetActionTimeoutsPropertyToTerraform(struct?: AwsBudgetAction.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsBudgetActionTimeoutsPropertyToHclTerraform(struct?: AwsBudgetAction.TimeoutsProperty | cdktn.IResolvable): any {
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


export namespace AwsBudgetAction {
export interface ActionThresholdProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#action_threshold_type AwsBudgetAction#action_threshold_type}
  */
  readonly actionThresholdType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#action_threshold_value AwsBudgetAction#action_threshold_value}
  */
  readonly actionThresholdValue: number;
}
export class ActionThresholdPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActionThresholdProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionThresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionThresholdType = this._actionThresholdType;
    }
    if (this._actionThresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionThresholdValue = this._actionThresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionThresholdProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionThresholdType = undefined;
      this._actionThresholdValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionThresholdType = value.actionThresholdType;
      this._actionThresholdValue = value.actionThresholdValue;
    }
  }

  // action_threshold_type - computed: false, optional: false, required: true
  private _actionThresholdType?: string; 
  public get actionThresholdType() {
    return this.getStringAttribute('action_threshold_type');
  }
  public set actionThresholdType(value: string) {
    this._actionThresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdTypeInput() {
    return this._actionThresholdType;
  }

  // action_threshold_value - computed: false, optional: false, required: true
  private _actionThresholdValue?: number; 
  public get actionThresholdValue() {
    return this.getNumberAttribute('action_threshold_value');
  }
  public set actionThresholdValue(value: number) {
    this._actionThresholdValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdValueInput() {
    return this._actionThresholdValue;
  }
}
export interface IamActionDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#groups AwsBudgetAction#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#policy_arn AwsBudgetAction#policy_arn}
  */
  readonly policyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#roles AwsBudgetAction#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#users AwsBudgetAction#users}
  */
  readonly users?: string[];
}
export class IamActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamActionDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._policyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyArn = this._policyArn;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamActionDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
      this._policyArn = undefined;
      this._roles = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
      this._policyArn = value.policyArn;
      this._roles = value.roles;
      this._users = value.users;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktn.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // policy_arn - computed: false, optional: false, required: true
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktn.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktn.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface ScpActionDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#policy_id AwsBudgetAction#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#target_ids AwsBudgetAction#target_ids}
  */
  readonly targetIds: string[];
}
export class ScpActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScpActionDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._targetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIds = this._targetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScpActionDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyId = undefined;
      this._targetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyId = value.policyId;
      this._targetIds = value.targetIds;
    }
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // target_ids - computed: false, optional: false, required: true
  private _targetIds?: string[]; 
  public get targetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('target_ids'));
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds;
  }
}
export interface SsmActionDefinitionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#action_sub_type AwsBudgetAction#action_sub_type}
  */
  readonly actionSubType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#instance_ids AwsBudgetAction#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#region AwsBudgetAction#region}
  */
  readonly region: string;
}
export class SsmActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmActionDefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSubType = this._actionSubType;
    }
    if (this._instanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIds = this._instanceIds;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmActionDefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionSubType = undefined;
      this._instanceIds = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionSubType = value.actionSubType;
      this._instanceIds = value.instanceIds;
      this._region = value.region;
    }
  }

  // action_sub_type - computed: false, optional: false, required: true
  private _actionSubType?: string; 
  public get actionSubType() {
    return this.getStringAttribute('action_sub_type');
  }
  public set actionSubType(value: string) {
    this._actionSubType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSubTypeInput() {
    return this._actionSubType;
  }

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DefinitionProperty {
  /**
  * iam_action_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#iam_action_definition AwsBudgetAction#iam_action_definition}
  */
  readonly iamActionDefinition?: IamActionDefinitionProperty;
  /**
  * scp_action_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#scp_action_definition AwsBudgetAction#scp_action_definition}
  */
  readonly scpActionDefinition?: ScpActionDefinitionProperty;
  /**
  * ssm_action_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#ssm_action_definition AwsBudgetAction#ssm_action_definition}
  */
  readonly ssmActionDefinition?: SsmActionDefinitionProperty;
}
export class DefinitionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefinitionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamActionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamActionDefinition = this._iamActionDefinition?.internalValue;
    }
    if (this._scpActionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scpActionDefinition = this._scpActionDefinition?.internalValue;
    }
    if (this._ssmActionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmActionDefinition = this._ssmActionDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefinitionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamActionDefinition.internalValue = undefined;
      this._scpActionDefinition.internalValue = undefined;
      this._ssmActionDefinition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamActionDefinition.internalValue = value.iamActionDefinition;
      this._scpActionDefinition.internalValue = value.scpActionDefinition;
      this._ssmActionDefinition.internalValue = value.ssmActionDefinition;
    }
  }

  // iam_action_definition - computed: false, optional: true, required: false
  private _iamActionDefinition = new IamActionDefinitionPropertyOutputReference(this, "iam_action_definition");
  public get iamActionDefinition() {
    return this._iamActionDefinition;
  }
  public putIamActionDefinition(value: IamActionDefinitionProperty) {
    this._iamActionDefinition.internalValue = value;
  }
  public resetIamActionDefinition() {
    this._iamActionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamActionDefinitionInput() {
    return this._iamActionDefinition.internalValue;
  }

  // scp_action_definition - computed: false, optional: true, required: false
  private _scpActionDefinition = new ScpActionDefinitionPropertyOutputReference(this, "scp_action_definition");
  public get scpActionDefinition() {
    return this._scpActionDefinition;
  }
  public putScpActionDefinition(value: ScpActionDefinitionProperty) {
    this._scpActionDefinition.internalValue = value;
  }
  public resetScpActionDefinition() {
    this._scpActionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpActionDefinitionInput() {
    return this._scpActionDefinition.internalValue;
  }

  // ssm_action_definition - computed: false, optional: true, required: false
  private _ssmActionDefinition = new SsmActionDefinitionPropertyOutputReference(this, "ssm_action_definition");
  public get ssmActionDefinition() {
    return this._ssmActionDefinition;
  }
  public putSsmActionDefinition(value: SsmActionDefinitionProperty) {
    this._ssmActionDefinition.internalValue = value;
  }
  public resetSsmActionDefinition() {
    this._ssmActionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmActionDefinitionInput() {
    return this._ssmActionDefinition.internalValue;
  }
}
export interface SubscriberProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#address AwsBudgetAction#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#subscription_type AwsBudgetAction#subscription_type}
  */
  readonly subscriptionType: string;
}
export class SubscriberPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SubscriberProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._subscriptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionType = this._subscriptionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriberProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._subscriptionType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._subscriptionType = value.subscriptionType;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // subscription_type - computed: false, optional: false, required: true
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }
}

export class SubscriberPropertyList extends cdktn.ComplexList {
  public internalValue? : SubscriberProperty[] | cdktn.IResolvable

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
  public get(index: number): SubscriberPropertyOutputReference {
    return new SubscriberPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#create AwsBudgetAction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#delete AwsBudgetAction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/budgets_budget_action#update AwsBudgetAction#update}
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
